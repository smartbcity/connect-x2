package x2.api.ssm.repo.postgres.f2

import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.map
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
class X2SessionPageQueryFunctionPostgres(
	private val sessionCriteriaQuery: SessionCriteriaQuery
) : X2SessionPageQueryFunction {
	override suspend fun invoke(msg: Flow<X2SessionPageQuery>) = msg.map { query ->
		invoke(query)
	}

	suspend fun invoke(msg: X2SessionPageQueryDTO): X2SessionPageQueryResultDTO {
		return sessionCriteriaQuery.findEntity(
			msg.filter,
			msg.pagination
		).map {
			it.toSsmEntity()
		}.let { page ->
			X2SessionPageQueryResult(
				items = page.items,
				total = page.total,
				pagination = msg.pagination?.let { pagination ->
					OffsetPagination(
						offset = pagination.offset,
						limit = pagination?.limit
					)
				}
			)
		}
	}

}
