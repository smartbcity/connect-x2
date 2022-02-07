package x2.api.ssm.domain.query

import f2.dsl.fnc.F2Function
import x2.api.ssm.domain.stats.CellDTO
import x2.api.ssm.domain.stats.StatsResultDTO

interface X2SessionPerStateStatsQueryFunction: F2Function<X2SessionPageQueryDTO, X2SessionPerStateStatsResult>

expect interface X2SessionPerStateStatsResultDTO: StatsResultDTO

data class X2SessionPerStateStatsResult(
	override val data: List<CellDTO>
): X2SessionPerStateStatsResultDTO
