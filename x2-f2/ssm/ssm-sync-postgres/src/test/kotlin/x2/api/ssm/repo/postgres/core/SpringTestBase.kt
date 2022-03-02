package x2.api.ssm.repo.postgres.repository

import org.junit.jupiter.api.TestInstance
import org.junit.jupiter.api.extension.ExtendWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.domain.EntityScan
import org.springframework.boot.runApplication
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.data.jpa.repository.config.EnableJpaRepositories
import org.springframework.test.annotation.DirtiesContext
import org.springframework.test.context.DynamicPropertyRegistry
import org.springframework.test.context.DynamicPropertySource
import org.springframework.test.context.junit.jupiter.SpringExtension
import org.testcontainers.containers.PostgreSQLContainer
import org.testcontainers.junit.jupiter.Container
import org.testcontainers.junit.jupiter.Testcontainers
import x2.api.ssm.repo.postgres.core.PostgreSQLExtension
import x2.api.ssm.repo.postgres.core.PostgresDataTest

@EntityScan(basePackages = ["x2.api.ssm.repo.postgres"])
@EnableJpaRepositories(basePackages = ["x2.api.ssm.repo.postgres"])
@SpringBootApplication(scanBasePackages = ["x2.api.ssm.repo.postgres"])
class SpringTestApp

fun main(args: Array<String>) {
	runApplication<SpringTestApp>(*args)
}



@SpringBootTest(classes = [SpringTestApp::class])
@DirtiesContext
@Testcontainers
abstract class SpringTestBase {

	val protocol = "Protocol1"

	companion object {
		@JvmStatic
		@Container
		var postgreSQLContainer: PostgreSQLContainer<*> = PostgreSQLContainer("postgres:12")
			.withDatabaseName("integration-tests-db")
			.withUsername("postgres")
			.withPassword("postgrespassword").apply {
				start()
			}

		@JvmStatic
		@DynamicPropertySource
		fun setProperties(registry: DynamicPropertyRegistry) {
			registry.add("spring.datasource.url", postgreSQLContainer::getJdbcUrl)
			registry.add("spring.jpa.show-sql") { true }
		}
	}

	@Autowired
	lateinit var dataTest: PostgresDataTest
}
