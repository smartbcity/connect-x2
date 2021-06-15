pluginManagement {
	repositories {
		gradlePluginPortal()
		jcenter()
	}
}

rootProject.name = "x2"

enableFeaturePreview("GRADLE_METADATA")

include(
	"api:api-config",
	"api:api-gateway"
)

include(
	"api:ssm:ssm-api",
	"api:ssm:ssm-client",
	"api:ssm:ssm-domain"
)

include(
	"api:api-infra:i2"
)
