package x2.api.ssm.domain.query

import f2.dsl.fnc.F2Function
import ssm.data.dsl.model.DataSsmSessionDTO
import x2.api.ssm.domain.stats.CellDTO
import x2.api.ssm.domain.stats.StatsResultDTO

interface X2SessionStatePerIntervalStatsFunction: F2Function<X2SessionPageQueryDTO, X2SessionStatePerIntervalStatsResult>

expect interface X2SessionStatePerIntervalStatsResultDTO: StatsResultDTO

data class X2SessionStatePerIntervalStatsResult(
	override val data: List<CellDTO>
): X2SessionStatePerIntervalStatsResultDTO
