package x2.ssm.client

import f2.client.ktor.F2ClientBuilder
import f2.client.ktor.HTTP
import f2.client.ktor.get
import kotlin.js.Promise


@JsName("ssmClient")
@JsExport
fun ssmClient(host: String, port: Int, path: String? = null): Promise<SSMFunctionClient> =
	F2ClientBuilder.get(HTTP, host, port, path).then {
	SSMFunctionClient(it)
}

