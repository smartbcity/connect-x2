package x2.api.ssm.domain.query

import f2.dsl.fnc.F2Supplier
import x2.api.ssm.domain.domain.SsmProtocol
import x2.api.ssm.domain.domain.SsmProtocolDTO
import kotlin.js.JsExport

typealias X2ProtocolsListQueryFunction = F2Supplier<X2ProtocolsListQueryResultDTO>

@JsExport
interface X2ProtocolsListQueryResultDTO {
	val items: List<SsmProtocolDTO>
}

data class X2ProtocolsListQueryResult(
	override val items: List<SsmProtocol>
) : X2ProtocolsListQueryResultDTO
