package x2.api.config

import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.boot.context.properties.ConstructorBinding
import x2.api.ssm.domain.config.X2SsmProperties

@ConfigurationProperties(prefix = "x2")
@ConstructorBinding
data class X2Properties (
	val ssm: X2SsmProperties
)
