package x2.api.ssm.repo.postgres.repository

import kotlinx.coroutines.test.runTest
import org.assertj.core.api.Assertions
import org.junit.jupiter.api.Nested
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import ssm.chaincode.dsl.model.uri.SsmUri
import java.time.LocalDate
import java.time.ZoneOffset
import java.util.UUID

class SessionCriteriaQueryTest : SpringTestBase() {

	@Autowired
	lateinit var sessionCriteriaQuery: SessionCriteriaQuery

	@Nested
	inner class FindEntityTest {
		@Test
		fun `should return all ssm sessions`() = runTest {
			val ssmUri = SsmUri("ssm:sandbox:thessm-${UUID.randomUUID()}:certificates")
			dataTest.generateSessions(ssmUri, 6)
			val test = sessionCriteriaQuery.findEntity(
				ssmUri = ssmUri.uri,
				from = null,
				to = null,
				channelIds = null,
				currentSteps = null
			)
			Assertions.assertThat(test).hasSize(6)
		}

		@Test
		fun `should return session after given date`() = runTest {
			val ssmUri = SsmUri("ssm:sandbox:thessm-${UUID.randomUUID()}:certificates")
			dataTest.generateSessions(ssmUri, 6)
			val test = sessionCriteriaQuery.findEntity(
				ssmUri = ssmUri.uri,
				from = LocalDate.now().minusDays(2).atStartOfDay().toEpochSecond(ZoneOffset.UTC) * 1000,
				to = null,
				channelIds = null,
				currentSteps = null
			)
			Assertions.assertThat(test).hasSize(2)
		}

		@Test
		fun `should return session before given date`() = runTest {
			val ssmUri = SsmUri("ssm:sandbox:thessm-${UUID.randomUUID()}:certificates")
			dataTest.generateSessions(ssmUri, 6)
			val test = sessionCriteriaQuery.findEntity(
				ssmUri = ssmUri.uri,
				from = null,
				to = LocalDate.now().minusDays(2).atStartOfDay().toEpochSecond(ZoneOffset.UTC) * 1000,
				channelIds = null,
				currentSteps = null
			)
			Assertions.assertThat(test).hasSize(4)
		}

		@Test
		fun `should return session before and after given date`() = runTest {
			val ssmUri = SsmUri("ssm:sandbox:thessm-${UUID.randomUUID()}:certificates")
			dataTest.generateSessions(ssmUri, 6)
			val test = sessionCriteriaQuery.findEntity(
				ssmUri = ssmUri.uri,
				from = LocalDate.now().minusDays(3).atStartOfDay().toEpochSecond(ZoneOffset.UTC) * 1000,
				to = LocalDate.now().minusDays(2).atStartOfDay().toEpochSecond(ZoneOffset.UTC) * 1000,
				channelIds = null,
				currentSteps = null
			)
			Assertions.assertThat(test).hasSize(1)
		}

		@Test
		fun `should return session with given channelIds`() = runTest {
			val channel = "sandbox-${UUID.randomUUID()}"
			val ssmUri = SsmUri("ssm:$channel:thessm-${UUID.randomUUID()}:certificates")
			dataTest.generateSessions(ssmUri, 6)
			val ssmUriSecond = SsmUri("ssm:sandbox_second:thessm:certificates")
			dataTest.generateSessions(ssmUriSecond, 6)
			val test = sessionCriteriaQuery.findEntity(
				ssmUri = null,
				from = null,
				to = null,
				channelIds = listOf(channel),
				currentSteps = null
			)
			Assertions.assertThat(test).hasSize(6)
		}

		@Test
		fun `should not return session with not existing channelIds`() = runTest {
			val channel = "sandbox-${UUID.randomUUID()}"
			val channelSecond = "sandbox-${UUID.randomUUID()}"
			val ssmUri = SsmUri("ssm:$channel:thessm-${UUID.randomUUID()}:certificates")
			dataTest.generateSessions(ssmUri, 6)
			val ssmUriSecond = SsmUri("ssm:$channelSecond:thessm-${UUID.randomUUID()}:certificates")
			dataTest.generateSessions(ssmUriSecond, 6)
			val test = sessionCriteriaQuery.findEntity(
				ssmUri = null,
				from = null,
				to = null,
				channelIds = listOf(channel, channelSecond),
				currentSteps = null
			)
			Assertions.assertThat(test).hasSize(12)
		}

		@Test
		fun `should not return session with given state`() = runTest {
			val ssmUri = SsmUri("ssm:sandbox:thessm-${UUID.randomUUID()}:certificates")
			val data = dataTest.generateSessions(ssmUri, 6, (1..1))
			val test = sessionCriteriaQuery.findEntity(
				ssmUri = ssmUri.uri,
				from = null,
				to = null,
				channelIds = null,
				currentSteps = listOf(1, 2)
			)
			val count = data.filter { listOf(1, 2).contains(it.current) }.count()
			Assertions.assertThat(test).hasSize(count)
		}
	}

	@Test
	fun `should return all ssm sessions stats`() = runTest {
		val ssmUri = SsmUri("ssm:sandbox:thessm-${UUID.randomUUID()}:certificates")
		val value = dataTest.generateSessions(ssmUri, 6)
		val test = sessionCriteriaQuery.findStats(
			ssmUri = ssmUri.uri,
			from = null,
			to = null,
			channelIds = null,
			currentSteps = null
		)
		val nbSize = value.groupBy { it.current }.keys.size
		Assertions.assertThat(test).hasSize(nbSize)
	}

	@Test
	fun `should return all ssm sessions stats for two steps`() = runTest {
		val ssmUri = SsmUri("ssm:sandbox:thessm-${UUID.randomUUID()}:certificates")
		val value = dataTest.generateSessions(ssmUri, 6)
		val test = sessionCriteriaQuery.findStats(
			ssmUri = ssmUri.uri,
			from = null,
			to = null,
			channelIds = null,
			currentSteps = listOf(1, 2)
		)
		val nbSize = value.filter { listOf(1, 2).contains(it.current) }.size
		val fetched = test.sumOf { it.count }
		Assertions.assertThat(fetched).isEqualTo(nbSize.toLong())
	}
}