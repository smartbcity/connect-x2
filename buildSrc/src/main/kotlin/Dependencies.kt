import city.smartb.gradle.dependencies.FixersDependencies
import city.smartb.gradle.dependencies.FixersPluginVersions
import city.smartb.gradle.dependencies.Scope
import city.smartb.gradle.dependencies.add
object PluginVersions {
	const val fixers = "experimental-SNAPSHOT"
	const val d2 = "0.3.1"
//	const val kotlin = FixersPluginVersions.kotlin
	const val kotlin = "1.6.20-M1"
	const val springBoot = FixersPluginVersions.springBoot
}

object Versions {
	const val springBoot = PluginVersions.springBoot
	const val postgres = "42.3.2"
	const val r2dbcPostgres = "0.8.11.RELEASE"
	const val hibernateTypes = "2.14.0"
	const val testcontainers =	"1.16.3"
	const val f2 = PluginVersions.fixers
	const val ssm = "experimental-x-SNAPSHOT"
}

object Repo {
	val snapshot: List<String> = listOf(
		// For fixers
		"https://oss.sonatype.org/content/repositories/snapshots",
		//For pdfbox
		"https://jitpack.io"
	)
}

object Dependencies {

	fun testcontainersPostgres(scope: Scope) = scope.add(
		"org.testcontainers:junit-jupiter:${Versions.testcontainers}",
		"org.testcontainers:postgresql:${Versions.testcontainers}"
	)

	fun springTest(scope: Scope) = scope.add(
		"org.springframework.boot:spring-boot-starter-test:${Versions.springBoot}",
	).also {
		junit(scope)
	}

	fun junit(scope: Scope) = FixersDependencies.Jvm.Test.junit(scope)
	fun cucumber(scope: Scope) = FixersDependencies.Jvm.Test.cucumber(scope)

}