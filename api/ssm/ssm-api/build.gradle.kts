plugins {
    id("io.spring.dependency-management")
    kotlin("jvm")
    kotlin("plugin.jpa")
    kotlin("plugin.spring")
}

dependencies {
    api(project(":api:ssm:ssm-domain"))

    api("city.smartb.ssm:ssm-couchdb-f2:${Versions.ssm}")
    api("city.smartb.ssm:ssm-f2-query:${Versions.ssm}")

    implementation("city.smartb.f2:f2-spring-boot-starter-function-http:${Versions.f2}")
}