package x2.api.ssm.domain.query

import f2.dsl.fnc.F2Function
import ssm.chaincode.dsl.model.ChannelId
import ssm.data.dsl.model.DataSsmSessionDTO
import kotlin.js.JsExport
import kotlin.js.JsName

typealias X2SessionPageQueryFunction = F2Function<X2SessionPageQuery, X2SessionPageQueryResultDTO>


@JsExport
@JsName("X2SessionPageQueryDTO")
interface X2SessionPageQueryDTO {
	val ssmUri: String
	val from: Int?
	val to: Int?
	val channel: List<ChannelId>?
	val engine: List<String>?
	val currentStep: List<Int>?
}

data class X2SessionPageQuery(
	override val from: Int?,
	override val to: Int?,
	override val channel: List<String>?,
	override val engine: List<String>?,
	override val currentStep: List<Int>?,
	override val ssmUri: String
): X2SessionPageQueryDTO

interface X2SessionPageQueryResultDTO {
	val items: List<DataSsmSessionDTO>
}

data class X2SessionPageQueryResult(
	override val items: List<DataSsmSessionDTO>
	): X2SessionPageQueryResultDTO
