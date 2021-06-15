package x2.api.config

import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class X2SsmConfig {

    @Bean
    @ConfigurationProperties(prefix = "ssm.list")
    fun ssmMap(): SsmMetadataMap {
        return HashMap()
    }
}
