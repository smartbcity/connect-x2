plugins {
    id("city.smartb.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
}

dependencies {
    api(project(":x2-f2:ssm:ssm-domain"))

    implementation(project(":x2-api:api-config"))

    api("city.smartb.ssm:ssm-data-f2:${Versions.ssm}")
    api("city.smartb.ssm:ssm-couchdb-f2:${Versions.ssm}")
    api("city.smartb.ssm:f2-query:${Versions.ssm}")

    implementation("city.smartb.f2:f2-spring-boot-starter-function-http:${Versions.f2}")
}
