package x2.api.ssm.repo.postgres.f2

import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import f2.dsl.fnc.invokeWith
import kotlinx.coroutines.test.runTest
import org.assertj.core.api.Assertions
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import ssm.chaincode.dsl.model.uri.SsmUri
import x2.api.ssm.domain.query.ProtocoleFilter
import x2.api.ssm.domain.query.X2SessionPageQuery
import x2.api.ssm.repo.postgres.repository.SpringTestBase
import java.util.UUID

class X2SessionPerStateStatsQueryFunctionImplTest: SpringTestBase() {

	@Autowired
	private lateinit var x2SessionPerStateStatsQueryFunctionImpl: X2SessionPerStateStatsQueryFunctionPostgres

	@Test
	fun dd() = runTest {
		val tt = "{\"filter\": {\"protocol\": \"Certificates1\"},\"pagination\": null}"
		val obj: X2SessionPageQuery = jacksonObjectMapper().readValue(tt)
		Assertions.assertThat(obj).isNotNull
	}

	@Test
	fun invoke() = runTest {
		val ssmUri = SsmUri("ssm:sandbox:thessm-${UUID.randomUUID()}:certificates")
		dataTest.generateSessions(ssmUri, 12)
		val result = X2SessionPageQuery(
			filter = ProtocoleFilter(
				protocol = protocol,
				ssmUri = ssmUri.uri
			),
			pagination = null
		).invokeWith(x2SessionPerStateStatsQueryFunctionImpl)

		Assertions.assertThat(result.data).hasSize(5)
	}
}