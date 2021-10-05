plugins {
    id("city.smartb.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
}

dependencies {
    api(project(":api:certificate:certificate-domain"))

    implementation("city.smartb.f2:f2-spring-boot-starter-function-http:${Versions.f2}")

    implementation("org.apache.pdfbox:pdfbox:2.0.24")
    implementation("com.github.ralfstuckert.pdfbox-layout:pdfbox2-layout:1.0.1")

    implementation("org.jetbrains.kotlinx:kotlinx-html-jvm:0.7.2")

    implementation("com.itextpdf:html2pdf:3.0.5")

    implementation("com.github.kenglxn.qrgen:javase:2.6.0")
}
