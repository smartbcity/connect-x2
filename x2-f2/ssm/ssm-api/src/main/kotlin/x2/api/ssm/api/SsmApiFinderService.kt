package x2.api.ssm.api

import f2.dsl.fnc.F2Function
import f2.dsl.fnc.F2Supplier
import f2.dsl.fnc.f2Function
import f2.dsl.fnc.f2Supplier
import f2.dsl.fnc.invoke
import f2.dsl.fnc.invokeWith
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import ssm.data.dsl.features.query.DataSsmGetQuery
import ssm.data.dsl.features.query.DataSsmGetQueryFunction
import ssm.data.dsl.features.query.DataSsmGetQueryResultDTO
import ssm.data.dsl.features.query.DataSsmListQuery
import ssm.data.dsl.features.query.DataSsmListQueryFunction
import ssm.data.dsl.features.query.DataSsmListQueryResultDTO
import ssm.data.dsl.features.query.DataSsmSessionGetQuery
import ssm.data.dsl.features.query.DataSsmSessionGetQueryFunction
import ssm.data.dsl.features.query.DataSsmSessionGetQueryResultDTO
import ssm.data.dsl.features.query.DataSsmSessionListQuery
import ssm.data.dsl.features.query.DataSsmSessionListQueryFunction
import ssm.data.dsl.features.query.DataSsmSessionListQueryResultDTO
import ssm.data.dsl.features.query.DataSsmSessionLogGetQuery
import ssm.data.dsl.features.query.DataSsmSessionLogGetQueryFunction
import ssm.data.dsl.features.query.DataSsmSessionLogGetQueryResultDTO
import ssm.data.dsl.features.query.DataSsmSessionLogListQuery
import ssm.data.dsl.features.query.DataSsmSessionLogListQueryFunction
import ssm.data.dsl.features.query.DataSsmSessionLogListQueryResultDTO
import ssm.data.spring.autoconfigure.DataSsmProperties
import x2.api.ssm.domain.config.X2SsmProperties

@Configuration
open class SsmApiFinderService(
	private val x2SsmProperties: X2SsmProperties,
	private val dataSsmProperties: DataSsmProperties,
	private val dataSsmListQueryFunction: DataSsmListQueryFunction,
	private val dataSsmGetQueryFunction: DataSsmGetQueryFunction,
	private val dataSsmSessionListQueryFunction: DataSsmSessionListQueryFunction,
	private val dataSsmSessionGetOneQueryFunction: DataSsmSessionGetQueryFunction,
	private val dataSsmSessionLogGetQueryFunction: DataSsmSessionLogGetQueryFunction,
	private val dataSsmSessionLogListQueryFunction: DataSsmSessionLogListQueryFunction,
) {


	@Bean
	fun getAllSsm(): F2Supplier<DataSsmListQueryResultDTO> = f2Supplier {
		DataSsmListQuery(x2SsmProperties.chaincodes)
			.invokeWith(dataSsmListQueryFunction)
	}

	@Bean
	fun getSsm(): F2Function<DataSsmGetQuery, DataSsmGetQueryResultDTO> = f2Function { query ->
		dataSsmGetQueryFunction(query)
	}

	@Bean
	fun getAllSessions(): F2Function<DataSsmSessionListQuery, DataSsmSessionListQueryResultDTO> = f2Function { query ->
		dataSsmSessionListQueryFunction(query)
	}

	@Bean
	fun getSession(): F2Function<DataSsmSessionGetQuery, DataSsmSessionGetQueryResultDTO> = f2Function { query ->
		dataSsmSessionGetOneQueryFunction(query)
	}

	@Bean
	fun getSessionLogs(): F2Function<DataSsmSessionLogListQuery, DataSsmSessionLogListQueryResultDTO> = f2Function { query ->
		dataSsmSessionLogListQueryFunction(query)
	}

	@Bean
	fun getOneSessionLog(): F2Function<DataSsmSessionLogGetQuery, DataSsmSessionLogGetQueryResultDTO> = f2Function { query ->
		dataSsmSessionLogGetQueryFunction(query)
	}
}
