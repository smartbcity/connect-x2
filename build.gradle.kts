plugins {
	kotlin("plugin.spring") version PluginVersions.kotlin apply false
	kotlin("plugin.serialization") version PluginVersions.kotlin apply false
	kotlin("kapt") version PluginVersions.kotlin apply false

	id("org.springframework.boot") version PluginVersions.springBoot apply false

//	id("com.moowork.node") version "1.2.0"

	id("city.smartb.fixers.gradle.config") version PluginVersions.fixers
	id("city.smartb.fixers.gradle.sonar") version PluginVersions.fixers
	id("city.smartb.fixers.gradle.d2") version PluginVersions.fixers

}

allprojects {
	group = "city.smartb.x2"
	version = System.getenv("VERSION") ?: "latest"
	repositories {
		jcenter()
		mavenCentral()
		maven { url = uri("https://oss.sonatype.org/content/repositories/snapshots") }
		maven { url = uri("https://jitpack.io") }
	}
}

tasks {
	register("cleanTsGen", Delete::class) {
		delete("web/kotlin")
	}

	register("tsGen", Copy::class) {
		dependsOn("cleanTsGen")
		from("${this.project.buildDir.absolutePath}/js/packages/") {
			exclude("*-test")
		}
		into("web/kotlin")
		includeEmptyDirs = false
	}
}