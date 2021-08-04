package x2.api.ssm.domain

import ssm.tx.dsl.features.query.*

interface SsmApiFinder {
	fun getAllSsm(): TxSsmListQueryFunction
	fun getSsm(): TxSsmGetQueryFunction
	fun getAllSessions(): TxSsmSessionListQueryFunction
	fun getSession(): TxSsmSessionGetQueryFunction
	fun getSessionLogs(): TxSsmSessionLogListQueryFunction
	fun getOneSessionLog():  TxSsmSessionLogGetQueryFunction
}

//@JsExport
//@JsName("SsmApiClient")
//interface SsmApiClient {
//	@JsName("getAllSsm")
//	fun getAllSsm(): TxSsmListQueryFunction
//	@JsName("getSsm")
//	fun getSsm(): TxSsmGetQueryFunction
//	@JsName("getAllSessions")
//	fun getAllSessions(): TxSsmSessionListQueryFunction
//	@JsName("getSession")
//	fun getSession(): TxSsmSessionGetQueryFunction
//	@JsName("getSessionLogs")
//	fun getSessionLogs():  TxSsmSessionLogListQueryFunction
//	@JsName("getOneSessionLog")
//	fun getOneSessionLog(): TxSsmSessionLogGetQueryFunction
//}
