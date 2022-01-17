package x2.api.config

import org.springframework.boot.context.properties.EnableConfigurationProperties
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import x2.api.ssm.domain.config.X2SsmProperties

@EnableConfigurationProperties(X2Properties::class)
@Configuration(proxyBeanMethods = false)
class X2Configuration {

	@Bean
	fun couchdbConfig(
		ssmCouchdbProperties: X2Properties,
	): X2SsmProperties = ssmCouchdbProperties.ssm

}
