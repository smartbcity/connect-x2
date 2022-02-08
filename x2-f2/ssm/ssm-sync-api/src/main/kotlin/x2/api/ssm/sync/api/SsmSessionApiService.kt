package x2.api.ssm.sync.api

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import x2.api.ssm.domain.SsmSessionApiFinder
import x2.api.ssm.domain.query.X2SessionPageQueryFunction
import x2.api.ssm.domain.query.X2SessionPerStateStatsQueryFunction
import x2.api.ssm.domain.query.X2SessionStatePerIntervalStatsFunction

@Configuration
class SsmSessionApiService(
	private val x2SessionPageQueryFunction:	X2SessionPageQueryFunction,
	private val x2SessionPerStateStatsQueryFunction: X2SessionPerStateStatsQueryFunction,
	private val x2SessionStatePerIntervalStatsFunction: X2SessionStatePerIntervalStatsFunction
): SsmSessionApiFinder {

	@Bean
	override fun sessionPage(): X2SessionPageQueryFunction = x2SessionPageQueryFunction
	@Bean
	override fun sessionPerStateStats(): X2SessionPerStateStatsQueryFunction = x2SessionPerStateStatsQueryFunction
	@Bean
	override fun sessionStatePerInterval(): X2SessionStatePerIntervalStatsFunction = x2SessionStatePerIntervalStatsFunction
}