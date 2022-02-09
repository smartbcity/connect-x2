package x2.api.ssm.domain.query

import ssm.chaincode.dsl.model.ChannelId

@JsExport
@JsName("X2SessionPageQueryDTO")
actual external interface X2SessionPageQueryDTO {
	actual val ssmUri: String
	actual val from: Int?
	actual val to: Int?
	actual val channel: List<ChannelId>?
	actual val engine: List<String>?
	actual val currentStep: List<Int>?
}
