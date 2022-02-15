pluginManagement {
	repositories {
		gradlePluginPortal()
		maven { url = uri("https://oss.sonatype.org/content/repositories/snapshots") }
		maven { url = uri("https://repo.spring.io/milestone") }
	}
}

rootProject.name = "x2"

include(
	"x2-api:api-config",
	"x2-api:api-gateway",
	"x2-api:api-auth"
)

include(
	"x2-f2:certificate:certificate-api",
	"x2-f2:certificate:certificate-domain"
)

include(
	"x2-f2:ssm:ssm-domain",
)

include(
	"x2-f2:ssm:ssm-sync-api",
	"x2-f2:ssm:ssm-sync-postgres",
)

include(
	"x2-test:ssm-certificate-provider"
)
