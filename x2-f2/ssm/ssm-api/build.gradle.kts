plugins {
    id("city.smartb.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
}

dependencies {
    api(project(":x2-f2:ssm:ssm-domain"))

    implementation(project(":x2-api:api-config"))

    api("city.smartb.ssm:ssm-data-spring-boot-starter:${Versions.ssm}")
    implementation("city.smartb.f2:f2-spring-boot-starter-function-http:${Versions.f2}")
}
