package x2.api.ssm.domain.query

import f2.dsl.cqrs.Query
import f2.dsl.fnc.F2Function
import x2.api.ssm.domain.domain.SsmProtocolDTO
import x2.api.ssm.domain.domain.ProtocolName
import kotlin.js.JsExport
import kotlin.js.JsName

typealias X2ProtocolGetQueryFunction = F2Function<X2ProtocolGetQueryDTO, X2ProtocolGetQueryResultDTO>

@JsExport
@JsName("X2ProtocolGetQueryDTO")
interface X2ProtocolGetQueryDTO : Query {
	val protocol: ProtocolName
}

data class X2ProtocolGetQuery(
	override val protocol: ProtocolName
) : X2ProtocolGetQueryDTO

@JsExport
interface X2ProtocolGetQueryResultDTO {
	val item: SsmProtocolDTO?
}

data class X2ProtocolGetQueryResult(
	override val item: SsmProtocolDTO?
) : X2ProtocolGetQueryResultDTO
