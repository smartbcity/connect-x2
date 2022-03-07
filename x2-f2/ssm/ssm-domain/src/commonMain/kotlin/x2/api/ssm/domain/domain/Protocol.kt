package x2.api.ssm.domain.domain

import kotlinx.serialization.Serializable
import ssm.chaincode.dsl.model.Ssm
import ssm.chaincode.dsl.model.uri.SsmUri
import ssm.chaincode.dsl.model.uri.SsmUriDTO
import kotlin.js.JsExport
import kotlin.js.JsName

typealias ProtocolName = String

@Serializable
@JsExport
@JsName("SsmProtocolDTO")
interface ProtocolDTO {
	val name: ProtocolName
	val ssm: Ssm
	val ssms: Array<out SsmUriDTO>
}

@Serializable
@JsExport
@JsName("SsmProtocol")
class Protocol(
	override val name: ProtocolName,
	override val ssms: Array<SsmUri>,
	override val ssm: Ssm
) : ProtocolDTO
