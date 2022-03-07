package x2.api.config

import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.boot.context.properties.ConstructorBinding
import ssm.chaincode.dsl.model.uri.SsmUri
import x2.api.ssm.domain.domain.ProtocolName

@ConfigurationProperties(prefix = "x2")
@ConstructorBinding
data class X2Properties (
	private val protocols: Map<ProtocolName,  List<String>>?
) {

	fun getProtocolsSsmUri(): Map<ProtocolName, List<SsmUri>>? {
		return protocols?.mapValues { it.value.toSsmUri() }
	}

	private fun List<String>.toSsmUri(): List<SsmUri> = flatMap { value ->
		value.split(",")
	}.map { SsmUri(it) }
}
