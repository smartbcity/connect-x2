package x2.api.ssm.domain.query

import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.OffsetPaginationDTO
import f2.dsl.cqrs.page.Page
import f2.dsl.cqrs.page.PageDTO
import f2.dsl.cqrs.page.PageQueryDTO
import f2.dsl.cqrs.page.PageQueryResultDTO
import f2.dsl.fnc.F2Function
import ssm.data.dsl.model.DataSsmSession
import ssm.data.dsl.model.DataSsmSessionDTO
import kotlin.js.JsExport
import kotlin.js.JsName

typealias X2SessionPageQueryFunction = F2Function<X2SessionPageQuery, X2SessionPageQueryResultDTO>

@JsExport
@JsName("X2SessionPageQueryDTO")
interface X2SessionPageQueryDTO : PageQueryDTO {
	val filter: ProtocoleFilterDTO?
	override val pagination: OffsetPagination?
}

data class X2SessionPageQuery(
	override val filter: ProtocoleFilterDTO?,
	override val pagination: OffsetPagination?
) : X2SessionPageQueryDTO

interface X2SessionPageQueryResultDTO : PageQueryResultDTO<DataSsmSessionDTO> {
	override val pagination: OffsetPaginationDTO?
	override val page: PageDTO<DataSsmSessionDTO>
}

data class X2SessionPageQueryResult(
	override val pagination: OffsetPagination?,
	override val page: Page<DataSsmSession>
) : X2SessionPageQueryResultDTO
