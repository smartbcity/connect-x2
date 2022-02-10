package x2.api.ssm.domain.query

import f2.dsl.fnc.F2Function
import x2.api.ssm.domain.stats.CellDTO
import x2.api.ssm.domain.stats.StatsResultDTO
import kotlin.js.JsExport
import kotlin.js.JsName

typealias X2SessionStatePerIntervalStatsFunction = F2Function<X2SessionPageQuery, X2SessionStatePerIntervalStatsResult>

@JsExport
@JsName("X2SessionStatePerIntervalStatsResultDTO")
interface X2SessionStatePerIntervalStatsResultDTO: StatsResultDTO

data class X2SessionStatePerIntervalStatsResult(
	override val data: List<CellDTO>
): X2SessionStatePerIntervalStatsResultDTO
