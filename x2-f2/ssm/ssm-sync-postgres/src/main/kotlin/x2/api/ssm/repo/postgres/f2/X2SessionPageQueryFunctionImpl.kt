package x2.api.ssm.repo.postgres.f2

import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.map
import org.springframework.stereotype.Component
import x2.api.ssm.domain.query.X2SessionPageQuery
import x2.api.ssm.domain.query.X2SessionPageQueryDTO
import x2.api.ssm.domain.query.X2SessionPageQueryFunction
import x2.api.ssm.domain.query.X2SessionPageQueryResult
import x2.api.ssm.domain.query.X2SessionPageQueryResultDTO
import x2.api.ssm.repo.postgres.repository.SessionCriteriaQuery
import x2.api.ssm.repo.postgres.toSsmEntity

@Component
class X2SessionPageQueryFunctionImpl(
	private val sessionCriteriaQuery: SessionCriteriaQuery
): X2SessionPageQueryFunction {
	override suspend fun invoke(msg: Flow<X2SessionPageQuery>) = msg.map { query ->
		invoke(query)
	}

	suspend fun invoke(msg: X2SessionPageQueryDTO): X2SessionPageQueryResultDTO {
		return sessionCriteriaQuery.findEntity(
			ssmUri = msg.ssmUri,
			from = msg.from,
			to = msg.to,
			channelIds = msg.channel,
			currentSteps = msg.currentStep
		).map {
			it.toSsmEntity()
		}.let {
			X2SessionPageQueryResult(
				items = it
			)
		}
	}
}
