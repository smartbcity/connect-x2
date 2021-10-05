plugins {
    id("city.smartb.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
}

dependencies {
    implementation(project(":api:ssm:ssm-domain"))
    implementation("city.smartb.f2:f2-spring-boot-starter-function-http:${Versions.f2}")
}
