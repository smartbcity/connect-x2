import city.smartb.gradle.dependencies.FixersVersions

plugins {
    id("io.spring.dependency-management")
    id("city.smartb.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
}

dependencies {
    api ("org.springframework.boot:spring-boot-starter-security:${FixersVersions.Spring.boot}")
    implementation ("org.springframework.boot:spring-boot-autoconfigure:${FixersVersions.Spring.boot}")
}
