package x2.api.ssm.domain

import f2.dsl.fnc.F2Function
import ssm.data.dsl.features.query.DataSsmSessionGetQuery
import ssm.data.dsl.features.query.DataSsmSessionGetQueryFunction
import ssm.data.dsl.features.query.DataSsmSessionGetQueryResultDTO
import ssm.data.dsl.features.query.DataSsmSessionListQuery
import ssm.data.dsl.features.query.DataSsmSessionListQueryDTO
import ssm.data.dsl.features.query.DataSsmSessionListQueryFunction
import ssm.data.dsl.features.query.DataSsmSessionListQueryResultDTO
import ssm.data.dsl.features.query.DataSsmSessionLogGetQuery
import ssm.data.dsl.features.query.DataSsmSessionLogGetQueryDTO
import ssm.data.dsl.features.query.DataSsmSessionLogGetQueryFunction
import ssm.data.dsl.features.query.DataSsmSessionLogGetQueryResultDTO
import ssm.data.dsl.features.query.DataSsmSessionLogListQuery
import ssm.data.dsl.features.query.DataSsmSessionLogListQueryDTO
import ssm.data.dsl.features.query.DataSsmSessionLogListQueryFunction
import ssm.data.dsl.features.query.DataSsmSessionLogListQueryResultDTO
import x2.api.ssm.domain.query.X2ProtocolGetQueryFunction
import x2.api.ssm.domain.query.X2ProtocolsListQueryFunction

interface SsmApiFinder {
	fun getAllProtocols(): X2ProtocolsListQueryFunction
	fun getAllProtocol(): X2ProtocolGetQueryFunction
//	fun getAllSsms(): DataSsmListQueryFunction
//	fun getSsm(): DataSsmGetQueryFunction
	fun getAllSessions(): F2Function<DataSsmSessionListQuery, DataSsmSessionListQueryResultDTO>
	fun getSession(): F2Function<DataSsmSessionGetQuery, DataSsmSessionGetQueryResultDTO>
	fun getSessionLogs(): F2Function<DataSsmSessionLogListQuery, DataSsmSessionLogListQueryResultDTO>
	fun getOneSessionLog():  F2Function<DataSsmSessionLogGetQuery, DataSsmSessionLogGetQueryResultDTO>
}
