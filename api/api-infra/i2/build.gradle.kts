plugins {
    id("io.spring.dependency-management")
    kotlin("jvm")
    kotlin("plugin.spring")
}

dependencies {
    api ("org.springframework.boot:spring-boot-starter-security:2.1.3.RELEASE")
    implementation ("org.springframework.boot:spring-boot-autoconfigure")
}
