plugins {
    kotlin("multiplatform")
}

dependencies {
    commonMainApi("city.smartb.ssm:ssm-tx-dsl:${Versions.ssm}")
    commonMainApi("city.smartb.ssm:ssm-chaincode-dsl:${Versions.ssm}")
}
