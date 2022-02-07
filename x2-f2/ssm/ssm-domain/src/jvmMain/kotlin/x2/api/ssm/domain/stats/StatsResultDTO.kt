package x2.api.ssm.domain.stats

actual interface StatsResultDTO {
	actual val data: List<CellDTO>
}

actual interface CellDTO {
	actual val label: String
	actual val value: Int
}