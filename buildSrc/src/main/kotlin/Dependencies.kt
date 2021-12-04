import city.smartb.gradle.dependencies.FixersPluginVersions

object PluginVersions {
	const val fixers = "0.3.2"
	const val d2 = "0.3.1"
	const val kotlin = FixersPluginVersions.kotlin
	const val springBoot = FixersPluginVersions.springBoot
}

object Versions {
	const val springBoot = PluginVersions.springBoot

	const val ssm = "experimental-local-SNAPSHOT"
	const val f2 = "0.3.1"

}

object Repo {
	val snapshot: List<String> = listOf(
		// For fixers
		"https://oss.sonatype.org/content/repositories/snapshots",
		//For pdfbox
		"https://jitpack.io"
	)
}