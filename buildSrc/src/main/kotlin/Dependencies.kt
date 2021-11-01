object PluginVersions {
	const val springBoot = "2.6.0-RC1"
	const val kotlin = "1.6.0-RC"

	const val fixers = "experimental-SNAPSHOT"
}

object Versions {
	const val springBoot = PluginVersions.springBoot

	const val ssm = "experimental-x2-SNAPSHOT"
	const val f2 = "experimental-SNAPSHOT"
    const val d2 = "0.1.1-SNAPSHOT"
}

object Repo {
	val snapshot: List<String> = listOf(
		// For fixers
		"https://oss.sonatype.org/content/repositories/snapshots",
		// For spring 2.6.0-RC1
		"https://repo.spring.io/milestone",
		//For pdfbox
		"https://jitpack.io"
	)
}