package x2.api.ssm.sync.api

import f2.dsl.fnc.F2Function
import f2.dsl.fnc.F2Supplier
import f2.dsl.fnc.f2Function
import f2.dsl.fnc.f2Supplier
import kotlinx.coroutines.flow.flowOf
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import ssm.data.dsl.features.query.DataSsmGetQuery
import ssm.data.dsl.features.query.DataSsmGetQueryResult
import ssm.data.dsl.features.query.DataSsmGetQueryResultDTO
import ssm.data.dsl.features.query.DataSsmListQueryResult
import ssm.data.dsl.features.query.DataSsmListQueryResultDTO
import ssm.data.dsl.features.query.DataSsmSessionGetQuery
import ssm.data.dsl.features.query.DataSsmSessionGetQueryResult
import ssm.data.dsl.features.query.DataSsmSessionGetQueryResultDTO
import ssm.data.dsl.features.query.DataSsmSessionListQuery
import ssm.data.dsl.features.query.DataSsmSessionListQueryResult
import ssm.data.dsl.features.query.DataSsmSessionListQueryResultDTO
import ssm.data.dsl.features.query.DataSsmSessionLogGetQuery
import ssm.data.dsl.features.query.DataSsmSessionLogGetQueryResult
import ssm.data.dsl.features.query.DataSsmSessionLogGetQueryResultDTO
import ssm.data.dsl.features.query.DataSsmSessionLogListQuery
import ssm.data.dsl.features.query.DataSsmSessionLogListQueryResult
import ssm.data.dsl.features.query.DataSsmSessionLogListQueryResultDTO
import x2.api.ssm.domain.config.X2SsmProperties
import x2.api.ssm.repo.postgres.repository.LogRepository
import x2.api.ssm.repo.postgres.repository.SessionRepository
import x2.api.ssm.repo.postgres.repository.SsmRepository
import x2.api.ssm.repo.postgres.toSsmEntity
import x2.api.ssm.repo.postgres.toDataSsmSessionState

@Configuration
open class SsmApiFinderLocalService(
	private val x2SsmProperties: X2SsmProperties,
	private val logRepository: LogRepository,
	private val sessionRepository: SessionRepository,
	private val ssmRepository: SsmRepository,
) {

	@Bean
	fun getAllSsm(): F2Supplier<DataSsmListQueryResultDTO> = f2Supplier {
		x2SsmProperties.ssm.flatMap {
			ssmRepository.findAllByChannelIdAndChaincodeId(it.channelId, it.chaincodeId)
		}.map {
			it.toSsmEntity()
		}.let { items ->
			flowOf(DataSsmListQueryResult(items))
		}
	}

	@Bean
	fun getSsm(): F2Function<DataSsmGetQuery, DataSsmGetQueryResultDTO> = f2Function { query ->
		ssmRepository.findById(query.ssmUri.uri).map {
			DataSsmGetQueryResult(it.toSsmEntity())
		}.orElseGet {
			DataSsmGetQueryResult(null)
		}
	}

	@Bean
	fun getAllSessions(): F2Function<DataSsmSessionListQuery, DataSsmSessionListQueryResultDTO> = f2Function { query ->
		sessionRepository.findAllBySsmUri(query.ssmUri.uri).map {  entity ->
			entity.toSsmEntity()
		}.let { items ->
			DataSsmSessionListQueryResult(items)
		}

	}

	@Bean
	fun getSession(): F2Function<DataSsmSessionGetQuery, DataSsmSessionGetQueryResultDTO> = f2Function { query ->
		sessionRepository.findBySsmUriAndSessionName(query.ssmUri.uri, query.sessionName).map {  entity ->
			DataSsmSessionGetQueryResult(entity.toSsmEntity())
		}.orElseGet {
			DataSsmSessionGetQueryResult(null)
		}
	}

	@Bean
	fun getSessionLogs(): F2Function<DataSsmSessionLogListQuery, DataSsmSessionLogListQueryResultDTO> = f2Function { query ->
		logRepository.findAllBySsmUriAndSessionName(query.ssmUri.uri, query.sessionName).map { it.toDataSsmSessionState() }.let { items->
			DataSsmSessionLogListQueryResult(items)
		}
	}

	@Bean
	fun getOneSessionLog(): F2Function<DataSsmSessionLogGetQuery, DataSsmSessionLogGetQueryResultDTO> = f2Function { query ->
		logRepository.findById(query.txId).map {
			DataSsmSessionLogGetQueryResult(it.toDataSsmSessionState())
		}.orElseGet {
			DataSsmSessionLogGetQueryResult(null)
		}
	}
}
