plugins {
    id("city.smartb.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
    kotlin("plugin.jpa")
}

dependencies {
    api(project(":x2-f2:ssm:ssm-domain"))
    api("org.springframework.boot:spring-boot-starter-data-jpa:${Versions.springBoot}")
    api("org.postgresql:postgresql:${Versions.postgres}")
    api("com.vladmihalcea:hibernate-types-52:2.14.0")
}
