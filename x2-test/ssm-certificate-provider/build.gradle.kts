plugins {
    id("org.springframework.boot")
    id("io.spring.dependency-management")
    kotlin("jvm")
    kotlin("plugin.jpa")
    kotlin("plugin.spring")
}

dependencies {
//    api("city.smartb.f2:f2-spring-boot-starter-function-http:${Versions.f2}")
    implementation("org.springframework.boot:spring-boot-starter")
//    implementation(project(":api:api-config"))

    api("city.smartb.ssm:ssm-sdk-sign:${Versions.ssm}")
    api("city.smartb.ssm:f2-create-ssm:${Versions.ssm}")
    api("city.smartb.ssm:f2-session-start:${Versions.ssm}")
    api("city.smartb.ssm:f2-session-perform-action:${Versions.ssm}")

    implementation(project(":api:certificate:certificate-domain"))
    implementation(project(":api:ssm:ssm-domain"))
}

tasks.withType<org.springframework.boot.gradle.tasks.bundling.BootBuildImage> {
    imageName = "smartbcity/x2-ssm-certificate-provider:${this.project.version}"
}