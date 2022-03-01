package x2.api.ssm.repo.postgres.f2

import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.map
import org.springframework.stereotype.Component
import x2.api.ssm.domain.query.X2SessionPageQuery
import x2.api.ssm.domain.query.X2SessionPageQueryDTO
import x2.api.ssm.domain.query.X2SessionStatePerIntervalStatsFunction
import x2.api.ssm.domain.query.X2SessionStatePerIntervalStatsResult
import x2.api.ssm.domain.stats.Cell
import x2.api.ssm.repo.postgres.repository.SessionCriteriaQuery
import java.time.Instant
import java.time.ZoneId

@Component
class X2SessionStatePerIntervalStatsFunctionPostgres(
	private val sessionCriteriaQuery: SessionCriteriaQuery
): X2SessionStatePerIntervalStatsFunction {

	override suspend fun invoke(msgs: Flow<X2SessionPageQuery>) = msgs.map { msg ->
		invoke(msg)
	}

	suspend fun invoke(msg: X2SessionPageQueryDTO): X2SessionStatePerIntervalStatsResult {
		return sessionCriteriaQuery.findLogStats(
			msg.filter

		).groupBy {
			it.current
		}.map { (step, values) ->
			values.groupBy {
				Instant.ofEpochSecond( it.timestamp)
					.atZone(ZoneId.systemDefault())
					.toLocalDate()
			}.mapValues { (_, values) ->
				values.count()
			}.values.let { values ->
				Cell(label = step.toString(), values.toList())
			}
		}.let { data ->
			X2SessionStatePerIntervalStatsResult(
				data = data
			)
		}
	}
}
