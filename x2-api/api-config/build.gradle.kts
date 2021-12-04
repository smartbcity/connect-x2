plugins {
    id("city.smartb.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
    kotlin("kapt")
}

dependencies {
    implementation(project(":x2-f2:ssm:ssm-domain"))

    implementation("org.springframework.boot:spring-boot-autoconfigure:${city.smartb.gradle.dependencies.FixersVersions.Spring.boot}")
    kapt("org.springframework.boot:spring-boot-configuration-processor:${city.smartb.gradle.dependencies.FixersVersions.Spring.boot}")
}
