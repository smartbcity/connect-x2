plugins {
    id("city.smartb.fixers.gradle.kotlin.mpp")
}

dependencies {
    commonMainApi("city.smartb.ssm:ssm-data-dsl:${Versions.ssm}")
}
