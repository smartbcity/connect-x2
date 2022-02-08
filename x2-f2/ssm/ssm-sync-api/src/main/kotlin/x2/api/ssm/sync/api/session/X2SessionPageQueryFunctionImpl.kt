package x2.api.ssm.sync.api.session

import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.map
import org.springframework.stereotype.Component
import x2.api.ssm.domain.query.X2SessionPageQuery
import x2.api.ssm.domain.query.X2SessionPageQueryDTO
import x2.api.ssm.domain.query.X2SessionPageQueryFunction
import x2.api.ssm.domain.query.X2SessionPageQueryResultDTO

@Component
class X2SessionPageQueryFunctionImpl: X2SessionPageQueryFunction {
	override suspend fun invoke(msg: Flow<X2SessionPageQuery>) = msg.map { query ->
		invoke(query)
	}

	suspend fun invoke(msg: X2SessionPageQueryDTO): X2SessionPageQueryResultDTO {
//		msg.channel.
		TODO()
	}
}
