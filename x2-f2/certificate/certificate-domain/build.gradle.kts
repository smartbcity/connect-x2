plugins {
    id("city.smartb.fixers.gradle.kotlin.mpp")
}

dependencies {

    jsApi("org.jetbrains.kotlinx:kotlinx-coroutines-core-js:${city.smartb.gradle.dependencies.FixersVersions.Kotlin.coroutines}")
    commonMainApi("city.smartb.ssm:ssm-data-dsl:${Versions.ssm}")
    commonMainApi("city.smartb.f2:f2-dsl-cqrs:${Versions.f2}")
    commonMainApi("city.smartb.f2:f2-dsl-function:${Versions.f2}")
}
