package x2.api.ssm.sync.api

import f2.dsl.fnc.invoke
import f2.dsl.fnc.invokeWith
import kotlinx.coroutines.async
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.flatMapConcat
import kotlinx.coroutines.flow.toSet
import kotlinx.coroutines.runBlocking
import org.slf4j.LoggerFactory
import org.springframework.boot.CommandLineRunner
import org.springframework.stereotype.Component
import ssm.chaincode.dsl.model.SessionName
import ssm.chaincode.dsl.model.uri.ChaincodeUri
import ssm.chaincode.dsl.model.uri.SsmUri
import ssm.chaincode.dsl.model.uri.burst
import ssm.chaincode.dsl.model.uri.from
import ssm.data.dsl.features.query.DataSsmGetQuery
import ssm.data.dsl.features.query.DataSsmGetQueryFunction
import ssm.data.dsl.features.query.DataSsmSessionGetQuery
import ssm.data.dsl.features.query.DataSsmSessionGetQueryFunction
import ssm.data.dsl.model.DataSsmSessionState
import ssm.sync.sdk.SsmSessionSyncResult
import ssm.sync.sdk.SsmSyncEventBus
import ssm.sync.sdk.SyncSsmCommandFunction
import x2.api.ssm.repo.postgres.LogEntity
import x2.api.ssm.repo.postgres.SessionEntity
import x2.api.ssm.repo.postgres.f2.X2ProtocolsListFunctionImpl
import x2.api.ssm.repo.postgres.repository.LogRepository
import x2.api.ssm.repo.postgres.repository.SessionRepository
import x2.api.ssm.repo.postgres.repository.SsmRepository
import x2.api.ssm.repo.postgres.toDataSsm
import x2.api.ssm.repo.postgres.toDataSsmSessionState
import x2.api.ssm.repo.postgres.toSessionEntity

@Component
class SyncSsm(

	private val syncSsmCommandFunction: SyncSsmCommandFunction,
	private val x2ProtocolsListFunctionBlockchain: X2ProtocolsListFunctionImpl,
	private val dataSsmGetQueryFunction: DataSsmGetQueryFunction,
	private val dataSsmSessionGetQueryFunction: DataSsmSessionGetQueryFunction,
	private val logRepository: LogRepository,
	private val sessionRepository: SessionRepository,
	private val ssmRepository: SsmRepository
) : CommandLineRunner {

	private val logger = LoggerFactory.getLogger(SyncSsm::class.java)

	override fun run(vararg args: String?): Unit = runBlocking {
		x2ProtocolsListFunctionBlockchain.invoke().flatMapConcat {
			it.items.flatMap { it.ssms.toList() }.asFlow()
		}.toSet().forEach { ssmUri ->
			async {
				syncChaincode(ssmUri.burst())
			}
		}
	}

	private suspend fun syncChaincode(ssmUri: SsmUri) {
		val chaincodeUri = ChaincodeUri.from(ssmUri.channelId, ssmUri.chaincodeId)
		val chaincodeEntity = ssmRepository.findById(ssmUri.uri).orElse(null)
		SsmSyncEventBus(
			chaincodeUri = chaincodeUri,
			syncSsmCommandFunction = syncSsmCommandFunction,
			ssmName = ssmUri.ssmName
		).sync(lastEventId = chaincodeEntity?.lastEventId).collect { result ->
			logger.info("SsmSyncEventBus.sync [${chaincodeUri.uri}] -  items[${result.items.size} - lastEventId[$result.lastEventId]]")
			result.items.map {
				it.ssm
			}.distinctBy { it.uri }.mapNotNull { uri ->
				val ssm = dataSsmGetQueryFunction.invoke(
					DataSsmGetQuery(uri)
				)
				ssm.item?.toDataSsm(result.lastEventId)
			}.let {
				ssmRepository.saveAll(it)
			}
			result.items.map { it.syncSession() }.toList()
		}
	}

	suspend fun SsmSessionSyncResult.syncSession(): SessionEntity? {
		logger.info("Session: $name")
		val dataSessionResult = DataSsmSessionGetQuery(
			sessionName = this.name,
			ssmUri = this.ssm
		).invokeWith(dataSsmSessionGetQueryFunction)

		return dataSessionResult.item?.toSessionEntity()?.let {
			sessionRepository.save(it)
		}?.also { session ->
			this.logs.map { it.syncState(session.sessionName, session.ssmUri) }
		}
	}

	suspend fun DataSsmSessionState.syncState(sessionName: SessionName, ssmUri: String): LogEntity? {
		logger.info("State: [$ssmUri] [$sessionName]")
		return toDataSsmSessionState(ssmUri).let { entity ->
			logRepository.save(entity)
		}
	}
}
