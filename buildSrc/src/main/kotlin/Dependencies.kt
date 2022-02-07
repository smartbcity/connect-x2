import city.smartb.gradle.dependencies.FixersPluginVersions

object PluginVersions {
	const val fixers = "experimental-SNAPSHOT"
	const val d2 = "0.3.1"
	const val kotlin = FixersPluginVersions.kotlin
	const val springBoot = FixersPluginVersions.springBoot
}

object Versions {
	const val springBoot = PluginVersions.springBoot
	const val postgres = "42.3.2"
	const val r2dbcPostgres = "0.8.11.RELEASE"

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
