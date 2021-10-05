plugins {
    id("org.springframework.boot")
    id("city.smartb.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
}

dependencies {
    implementation("org.springframework.boot:spring-boot-starter:${Versions.springBoot}")

    api("city.smartb.ssm:ssm-sdk-sign:${Versions.ssm}")
    api("city.smartb.ssm:ssm-tx-create-ssm-spring-boot-starter:${Versions.ssm}")
    api("city.smartb.ssm:ssm-tx-session-start-spring-boot-starter:${Versions.ssm}")
    api("city.smartb.ssm:ssm-tx-session-perform-action-spring-boot-starter:${Versions.ssm}")

    implementation(project(":x2-f2:certificate:certificate-domain"))
    implementation(project(":x2-f2:ssm:ssm-domain"))
}

tasks.withType<org.springframework.boot.gradle.tasks.bundling.BootBuildImage> {
    imageName = "smartbcity/x2-ssm-certificate-provider:${this.project.version}"
}