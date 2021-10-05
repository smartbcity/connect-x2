pluginManagement {
	repositories {
		gradlePluginPortal()
		maven { url = uri("https://oss.sonatype.org/content/repositories/snapshots") }
	}
}

rootProject.name = "x2"

enableFeaturePreview("GRADLE_METADATA")

include(
	"x2-api:api-config",
	"x2-api:api-gateway"
)

include(
	"x2-f2:certificate:certificate-api",
	"x2-f2:certificate:certificate-domain"
)

include(
	"x2-f2:ssm:ssm-api",
	"x2-f2:ssm:ssm-client",
	"x2-f2:ssm:ssm-domain"
)

include(
	"x2-api:api-infra:i2"
)

include(
	"x2-test:ssm-certificate-provider"
)
