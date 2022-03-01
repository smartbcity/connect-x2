package x2.api.ssm.domain.query

import f2.dsl.fnc.F2Function
import x2.api.ssm.domain.stats.CellDTO
import x2.api.ssm.domain.stats.StatsResultDTO
import kotlin.js.JsExport
import kotlin.js.JsName

typealias X2SessionPerStateStatsQueryFunction = F2Function<X2SessionPageQuery, X2SessionPerStateStatsResult>

@JsExport
@JsName("X2SessionPerStateStatsResultDTO")
interface X2SessionPerStateStatsResultDTO: StatsResultDTO<Long>

data class X2SessionPerStateStatsResult(
	override val data: List<CellDTO<Long>>
): X2SessionPerStateStatsResultDTO
