plugins {
    id("org.springframework.boot")
    id("city.smartb.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
}

dependencies {
    api("city.smartb.f2:f2-spring-boot-starter-function-http:${Versions.f2}")

    implementation(project(":x2-api:api-config"))
    implementation(project(":x2-api:api-auth"))
    implementation(project(":x2-f2:certificate:certificate-api"))
    implementation(project(":x2-f2:ssm:ssm-sync-api"))
}

tasks.withType<org.springframework.boot.gradle.tasks.bundling.BootBuildImage> {
    imageName = "smartbcity/x2-gateway:${this.project.version}"
}