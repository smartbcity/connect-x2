package x2.api.ssm.domain.stats

import kotlin.js.JsExport
import kotlin.js.JsName

@JsExport
@JsName("StatsResultDTO")
interface StatsResultDTO<CELL> {
	val data: List<CellDTO<CELL>>
}

class StatsResult<CELL>(
	override val data: List<CellDTO<CELL>>
) : StatsResultDTO<CELL>

@JsExport
@JsName("CellDTO")
interface CellDTO<VALUE> {
	val label: String
	val value: VALUE
}

class Cell<VALUE>(
	override val label: String,
	override val value: VALUE
) : CellDTO<VALUE>
