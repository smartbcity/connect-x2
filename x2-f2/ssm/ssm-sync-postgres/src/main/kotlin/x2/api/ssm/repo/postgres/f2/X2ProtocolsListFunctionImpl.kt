package x2.api.ssm.repo.postgres.f2

import f2.dsl.fnc.invokeWith
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.flowOf
import org.springframework.stereotype.Component
import ssm.data.dsl.features.query.DataChaincodeListQuery
import ssm.data.dsl.features.query.DataChaincodeListQueryFunction
import ssm.data.dsl.features.query.DataSsmListQuery
import ssm.data.dsl.features.query.DataSsmListQueryFunction
import x2.api.config.X2Properties
import x2.api.ssm.domain.domain.Protocol
import x2.api.ssm.domain.query.X2ProtocolsListQueryResult
import x2.api.ssm.domain.query.X2ProtocolsListQueryResultDTO
import x2.api.ssm.domain.query.X2ProtocolsListQuerySupplier
import x2.api.ssm.repo.postgres.repository.SsmRepository

@Component
class X2ProtocolsListFunctionImpl(
	private val x2Properties: X2Properties,
	private val ssmRepository: SsmRepository,
	private val dataChaincodeListQueryFunction: DataChaincodeListQueryFunction,
	private val dataSsmListQueryFunction: DataSsmListQueryFunction
) : X2ProtocolsListQuerySupplier {

	override suspend fun invoke(): Flow<X2ProtocolsListQueryResultDTO> {
		val protocols = getAllProtocolsFromConfig()
			?: getAllProtocolsFromBlockchain()
		return flowOf(X2ProtocolsListQueryResult(protocols))
	}

	private suspend fun getAllProtocolsFromBlockchain(): List<Protocol> {
		return DataChaincodeListQuery().invokeWith(dataChaincodeListQueryFunction).items.let {
			DataSsmListQuery(it).invokeWith(dataSsmListQueryFunction).items
		}.map { ssm ->
			Protocol(
				name = ssm.ssm.name,
				ssms =  arrayOf(ssm.uri),
				ssm = ssm.ssm
			)
		}
	}

	private fun getAllProtocolsFromConfig(): List<Protocol>? {
		return x2Properties.getProtocolsSsmUri()?.map { (name, ssms) ->
			ssmRepository.findById(ssms.first().uri).orElseGet { null }?.let { entity ->
				Protocol(
					name = name,
					ssms = ssms.toTypedArray(),
					ssm = entity.ssm
				)
			}
		}?.filterNotNull()
	}

}
