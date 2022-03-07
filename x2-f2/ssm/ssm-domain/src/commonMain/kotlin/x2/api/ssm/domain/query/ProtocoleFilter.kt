package x2.api.ssm.domain.query

import x2.api.ssm.domain.domain.ProtocolName
import kotlin.js.JsExport

@JsExport
interface ProtocoleFilterDTO {
	val protocol: ProtocolName
	val ssmUri: String?
	val from: Long?
	val to: Long?
	val channels: Array<String>?
	val engines: Array<String>?
	val steps: IntArray?
}

class ProtocoleFilter(
	override val protocol: ProtocolName,
	override val from: Long? = null,
	override val to: Long? = null,
	override val channels: Array<String>? = null,
	override val engines: Array<String>? = null,
	override val steps: IntArray? = null,
	override val ssmUri: String? = null
): ProtocoleFilterDTO
