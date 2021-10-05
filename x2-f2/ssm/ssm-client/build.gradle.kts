plugins {
    id("city.smartb.fixers.gradle.kotlin.mpp")
    kotlin("plugin.serialization")
}

dependencies {
    commonMainApi(project(":x2-f2:ssm:ssm-domain"))

    commonMainApi("city.smartb.f2:f2-client-ktor:${Versions.f2}")
    commonMainApi("city.smartb.f2:f2-dsl-function:${Versions.f2}")
    commonMainApi("city.smartb.f2:f2-dsl-cqrs:${Versions.f2}")
}