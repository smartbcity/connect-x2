plugins {
    id("org.springframework.boot")
    id("io.spring.dependency-management")
    kotlin("jvm")
    kotlin("plugin.jpa")
    kotlin("plugin.spring")
}

dependencies {
    api("city.smartb.f2:f2-spring-boot-starter-function-http:${Versions.f2}")

    implementation(project(":api:api-config"))
    implementation(project(":api:api-infra:i2"))
    implementation(project(":api:ssm:ssm-api"))
}

tasks.withType<org.springframework.boot.gradle.tasks.bundling.BootBuildImage> {
    imageName = "smartbcity/x2-gateway:${this.project.version}"
}