package x2.api.ssm.domain

import x2.api.ssm.domain.query.X2SessionPageQueryFunction
import x2.api.ssm.domain.query.X2SessionPerStateStatsQueryFunction
import x2.api.ssm.domain.query.X2SessionStatePerIntervalStatsFunction

interface SsmSessionApiFinder {
	fun sessionPage(): X2SessionPageQueryFunction
	fun sessionPerStateStats(): X2SessionPerStateStatsQueryFunction
	fun sessionStatePerInterval(): X2SessionStatePerIntervalStatsFunction
}
