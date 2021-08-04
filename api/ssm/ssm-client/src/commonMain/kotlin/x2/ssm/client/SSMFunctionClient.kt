package x2.ssm.client

import f2.client.F2Client
import kotlin.js.JsExport
import kotlin.js.JsName

@JsExport
@JsName("SSMFunctionClient")
open class SSMFunctionClient(private val client: F2Client)
//	: SsmApiClient
{

//	fun getAllSsm(): TxSsmListQueryFunction = client.declaration("getAllSsm")
//	override fun getSsm(): TxSsmGetQueryFunction = client.declaration("getAllSsm")
//	override fun getAllSessions(): TxSsmSessionListQueryFunction = client.declaration("getAllSsm")
//	override fun getSession(): TxSsmSessionGetQueryFunction= client.declaration("getAllSsm")
//	override fun getSessionLogs(): TxSsmSessionLogListQueryFunction= client.declaration("getAllSsm")
//	override fun getOneSessionLog(): TxSsmSessionLogGetQueryFunction = client.declaration("getAllSsm")

}