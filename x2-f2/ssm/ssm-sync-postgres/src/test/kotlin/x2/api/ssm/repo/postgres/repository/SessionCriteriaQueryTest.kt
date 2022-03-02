package x2.api.ssm.repo.postgres.repository

import kotlinx.coroutines.test.runTest
import org.assertj.core.api.Assertions
import org.junit.jupiter.api.Nested
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import ssm.chaincode.dsl.model.uri.SsmUri
import x2.api.ssm.domain.query.ProtocoleFilter
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
				filter = ProtocoleFilter(
					protocol = protocol,
					ssmUri = ssmUri.uri
				),
				pagination = null
			)

			Assertions.assertThat(test.items).hasSize(6)
			Assertions.assertThat(test.total).isEqualTo(6)
		}

		@Test
		fun `should return session after given date`() = runTest {
			val ssmUri = SsmUri("ssm:sandbox:thessm-${UUID.randomUUID()}:certificates")
			dataTest.generateSessions(ssmUri, 6)
			val test = sessionCriteriaQuery.findEntity(
				filter = ProtocoleFilter(
					protocol = protocol,
					ssmUri = ssmUri.uri,
					from = LocalDate.now().minusDays(2).atStartOfDay().toEpochSecond(ZoneOffset.UTC) * 1000
				),
				pagination = null
			)
			Assertions.assertThat(test.items).hasSize(2)
			Assertions.assertThat(test.total).isEqualTo(2)
		}

		@Test
		fun `should return session before given date`() = runTest {
			val ssmUri = SsmUri("ssm:sandbox:thessm-${UUID.randomUUID()}:certificates")
			dataTest.generateSessions(ssmUri, 6)
			val test = sessionCriteriaQuery.findEntity(
				ProtocoleFilter(
					protocol = protocol,
					ssmUri = ssmUri.uri,
					to = LocalDate.now().minusDays(2).atStartOfDay().toEpochSecond(ZoneOffset.UTC) * 1000
				),
				pagination = null
			)
			Assertions.assertThat(test.items).hasSize(4)
			Assertions.assertThat(test.total).isEqualTo(4)
		}

		@Test
		fun `should return session before and after given date`() = runTest {
			val ssmUri = SsmUri("ssm:sandbox:thessm-${UUID.randomUUID()}:certificates")
			dataTest.generateSessions(ssmUri, 6)
			val test = sessionCriteriaQuery.findEntity(
				ProtocoleFilter(
					protocol = protocol,
					ssmUri = ssmUri.uri,
					from = LocalDate.now().minusDays(3).atStartOfDay().toEpochSecond(ZoneOffset.UTC) * 1000,
					to = LocalDate.now().minusDays(2).atStartOfDay().toEpochSecond(ZoneOffset.UTC) * 1000,
				),
				pagination = null
			)
			Assertions.assertThat(test.items).hasSize(1)
			Assertions.assertThat(test.total).isEqualTo(1)
		}

		@Test
		fun `should return session with given channelIds`() = runTest {
			val channel = "sandbox-${UUID.randomUUID()}"
			val ssmUri = SsmUri("ssm:$channel:thessm-${UUID.randomUUID()}:certificates")
			dataTest.generateSessions(ssmUri, 6)
			val ssmUriSecond = SsmUri("ssm:sandbox_second:thessm:certificates")
			dataTest.generateSessions(ssmUriSecond, 6)
			val test = sessionCriteriaQuery.findEntity(
				ProtocoleFilter(
					protocol = protocol,
					channels = arrayOf(channel),
				),
				pagination = null
			)
			Assertions.assertThat(test.items).hasSize(6)
			Assertions.assertThat(test.total).isEqualTo(6)
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
				ProtocoleFilter(
					protocol = protocol,
					channels = arrayOf(channel,channelSecond),
				),
				pagination = null
			)
			Assertions.assertThat(test.items).hasSize(10)
			Assertions.assertThat(test.total).isEqualTo(12)
		}

		@Test
		fun `should not return session with given state`() = runTest {
			val ssmUri = SsmUri("ssm:sandbox:thessm-${UUID.randomUUID()}:certificates")
			val data = dataTest.generateSessions(ssmUri, 6, (1..1))
			val test = sessionCriteriaQuery.findEntity(
				ProtocoleFilter(
					protocol = protocol,
					ssmUri = ssmUri.uri,
					steps = intArrayOf(1, 2)
				),
				pagination = null
			)
			val count = data.filter { listOf(1, 2).contains(it.current) }.count()

			Assertions.assertThat(test.items).hasSize(count)
			Assertions.assertThat(test.total).isEqualTo(count)
		}
	}

	@Test
	fun `should return all ssm sessions stats`() = runTest {
		val ssmUri = SsmUri("ssm:sandbox:thessm-${UUID.randomUUID()}:certificates")
		val value = dataTest.generateSessions(ssmUri, 6)
		val test = sessionCriteriaQuery.findStats(
			ProtocoleFilter(
				protocol = protocol,
				ssmUri = ssmUri.uri,
			),
		)
		val nbSize = value.groupBy { it.current }.keys.size
		Assertions.assertThat(test).hasSize(nbSize)
	}

	@Test
	fun `should return all ssm sessions stats for two steps`() = runTest {
		val ssmUri = SsmUri("ssm:sandbox:thessm-${UUID.randomUUID()}:certificates")
		val value = dataTest.generateSessions(ssmUri, 6)
		val test = sessionCriteriaQuery.findStats(
			ProtocoleFilter(
				protocol = protocol,
				ssmUri = ssmUri.uri,
				steps = intArrayOf(1, 2)
			),
		)
		val nbSize = value.filter { listOf(1, 2).contains(it.current) }.size
		val fetched = test.sumOf { it.count }
		Assertions.assertThat(fetched).isEqualTo(nbSize.toLong())
	}
}