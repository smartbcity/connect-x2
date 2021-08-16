plugins {
    kotlin("multiplatform")
}

dependencies {
    commonMainApi("city.smartb.ssm:ssm-chaincode-dsl:${Versions.ssm}")
    commonMainApi("city.smartb.f2:f2-dsl-cqrs:${Versions.f2}")
    commonMainApi("city.smartb.f2:f2-dsl-function:${Versions.f2}")
}
