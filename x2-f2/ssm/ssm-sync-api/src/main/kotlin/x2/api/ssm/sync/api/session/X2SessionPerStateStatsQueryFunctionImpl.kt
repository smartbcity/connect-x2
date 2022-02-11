package x2.api.ssm.sync.api.session

import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.map
import org.springframework.stereotype.Component
import x2.api.ssm.domain.query.X2SessionPageQuery
import x2.api.ssm.domain.query.X2SessionPageQueryDTO
import x2.api.ssm.domain.query.X2SessionPerStateStatsQueryFunction
import x2.api.ssm.domain.query.X2SessionPerStateStatsResult
import x2.api.ssm.domain.query.X2SessionStatePerIntervalStatsResult
import x2.api.ssm.domain.stats.Cell
import x2.api.ssm.repo.postgres.repository.SessionRepository

@Component
class X2SessionPerStateStatsQueryFunctionImpl(
	private val sessionRepository: SessionRepository
): X2SessionPerStateStatsQueryFunction {

	override suspend fun invoke(msgs: Flow<X2SessionPageQuery>) = msgs.map { msg ->
		invoke(msg)
	}

	suspend fun invoke(msg: X2SessionPageQuery): X2SessionPerStateStatsResult {
		return sessionRepository.getSessionStats(
			ssmUri = msg.ssmUri,
			from = msg.from,
			to = msg.to,
			channelIds = msg.channel,
			currentSteps = msg.currentStep
		).map { sessionStats ->
			Cell(label = sessionStats.getCurrent().toString(), sessionStats.getCount())
		}.let { data ->
			X2SessionPerStateStatsResult(
				data = data
			)
		}
	}
}
