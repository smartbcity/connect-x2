package x2.api.ssm.domain.stats

import kotlin.js.JsExport
import kotlin.js.JsName

@JsExport
@JsName("StatsResultDTO")
interface StatsResultDTO {
	val data: List<CellDTO>
}

class StatsResult(
	override val data: List<CellDTO>
) : StatsResultDTO

@JsExport
@JsName("CellDTO")
interface CellDTO {
	val label: String
	val value: Int
}

class Cell(
	override val label: String,
	override val value: Int
) : CellDTO
