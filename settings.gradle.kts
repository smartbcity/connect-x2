pluginManagement {
	repositories {
		gradlePluginPortal()
		jcenter()
	}
}

rootProject.name = "x2"

enableFeaturePreview("GRADLE_METADATA")

include(
	"api:api-gateway"
)

include(
	"api:ssm:ssm-api",
	"api:ssm:ssm-domain"
)
