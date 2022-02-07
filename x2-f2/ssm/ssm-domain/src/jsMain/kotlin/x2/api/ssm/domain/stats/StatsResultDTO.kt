package x2.api.ssm.domain.stats

@JsExport
@JsName("StatsResultDTO")
actual external interface StatsResultDTO {
	actual val data: List<CellDTO>
}

@JsExport
@JsName("CellDTO")
actual external interface CellDTO {
	actual val label: String
	actual val value: Int
}