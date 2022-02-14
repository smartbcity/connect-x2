package x2.api.ssm.repo.postgres.f2

import f2.dsl.fnc.invokeWith
import kotlinx.coroutines.test.runTest
import org.assertj.core.api.Assertions
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import ssm.chaincode.dsl.model.uri.SsmUri
import x2.api.ssm.domain.query.X2SessionPageQuery
import x2.api.ssm.repo.postgres.repository.SpringTestBase
import java.util.UUID

class X2SessionPerStateStatsQueryFunctionImplTest: SpringTestBase() {

	@Autowired
	private lateinit var x2SessionPerStateStatsQueryFunctionImpl: X2SessionPerStateStatsQueryFunctionImpl

	@Test
	operator fun invoke() = runTest {
		val ssmUri = SsmUri("ssm:sandbox:thessm-${UUID.randomUUID()}:certificates")
		dataTest.generateSessions(ssmUri, 12)
		val result = X2SessionPageQuery(
			ssmUri = ssmUri.uri
		).invokeWith(x2SessionPerStateStatsQueryFunctionImpl)

		Assertions.assertThat(result.data).hasSize(5)
	}
}