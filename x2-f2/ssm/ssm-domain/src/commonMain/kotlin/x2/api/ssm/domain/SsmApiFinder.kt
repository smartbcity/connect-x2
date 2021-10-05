package x2.api.ssm.domain

import ssm.data.dsl.features.query.DataSsmGetQueryFunction
import ssm.data.dsl.features.query.DataSsmListQueryFunction
import ssm.data.dsl.features.query.DataSsmSessionGetQueryFunction
import ssm.data.dsl.features.query.DataSsmSessionListQueryFunction
import ssm.data.dsl.features.query.DataSsmSessionLogGetQueryFunction
import ssm.data.dsl.features.query.DataSsmSessionLogListQueryFunction


interface SsmApiFinder {
	fun getAllSsm(): DataSsmListQueryFunction
	fun getSsm(): DataSsmGetQueryFunction
	fun getAllSessions(): DataSsmSessionListQueryFunction
	fun getSession(): DataSsmSessionGetQueryFunction
	fun getSessionLogs(): DataSsmSessionLogListQueryFunction
	fun getOneSessionLog():  DataSsmSessionLogGetQueryFunction
}
