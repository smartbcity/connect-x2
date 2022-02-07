package x2.api.ssm.domain.stats

expect interface StatsResultDTO {
	val data: List<CellDTO>
}

class StatsResult(
	override val data: List<CellDTO>
) : StatsResultDTO

expect interface CellDTO {
	val label: String
	val value: Int
}

class Cell(
	override val label: String,
	override val value: Int
) : CellDTO
