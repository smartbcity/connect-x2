package x2.api.ssm.domain.query

import f2.dsl.fnc.F2Supplier
import x2.api.ssm.domain.domain.Protocol
import x2.api.ssm.domain.domain.ProtocolDTO
import kotlin.js.JsExport

typealias X2ProtocolsListQuerySupplier = F2Supplier<X2ProtocolsListQueryResultDTO>

@JsExport
interface X2ProtocolsListQueryResultDTO {
	val items: List<ProtocolDTO>
}

data class X2ProtocolsListQueryResult(
	override val items: List<Protocol>
) : X2ProtocolsListQueryResultDTO
