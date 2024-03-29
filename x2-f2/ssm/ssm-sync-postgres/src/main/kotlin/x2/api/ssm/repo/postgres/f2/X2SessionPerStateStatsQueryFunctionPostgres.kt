package x2.api.ssm.repo.postgres.f2

import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.flow.toList
import org.springframework.stereotype.Component
import x2.api.ssm.domain.query.X2SessionPageQuery
import x2.api.ssm.domain.query.X2SessionPerStateStatsQueryFunction
import x2.api.ssm.domain.query.X2SessionPerStateStatsResult
import x2.api.ssm.domain.stats.Cell
import x2.api.ssm.repo.postgres.repository.SessionCriteriaQuery

@Component
class X2SessionPerStateStatsQueryFunctionPostgres(
	private val sessionCriteriaQuery: SessionCriteriaQuery
): X2SessionPerStateStatsQueryFunction {

	override suspend fun invoke(msgs: Flow<X2SessionPageQuery>): Flow<X2SessionPerStateStatsResult> {
		msgs.toList()
		return msgs.map { msg ->
			invoke(msg)
		}
	}

	suspend fun invoke(msg: X2SessionPageQuery): X2SessionPerStateStatsResult {
		return sessionCriteriaQuery.findStats(
			filter = msg.filter
		).map { sessionStats ->
			Cell(label = sessionStats.current.toString(), sessionStats.count)
		}.let { data ->
			X2SessionPerStateStatsResult(
				data = data
			)
		}
	}
}
