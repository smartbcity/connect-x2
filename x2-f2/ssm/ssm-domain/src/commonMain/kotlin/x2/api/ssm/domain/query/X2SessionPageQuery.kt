package x2.api.ssm.domain.query

import f2.dsl.fnc.F2Function
import ssm.data.dsl.model.DataSsmSessionDTO

interface X2SessionPageQueryFunction: F2Function<X2SessionPageQueryDTO, X2SessionPageQueryResultDTO>

interface X2SessionPageQueryDTO {
	val from: Int?
	val to: Int?
	val channel: List<String>?
	val engine: List<String>?
	val currentStep: List<String>?
}

data class X2SessionPageQuery(
	override val from: Int?,
	override val to: Int?,
	override val channel: List<String>?,
	override val engine: List<String>?,
	override val currentStep: List<String>?
): X2SessionPageQueryDTO

interface X2SessionPageQueryResultDTO {
	val items: List<DataSsmSessionDTO>
}

data class X2SessionPageQueryResult(
	override val items: List<DataSsmSessionDTO>
	): X2SessionPageQueryResultDTO
