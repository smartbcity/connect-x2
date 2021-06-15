package x2.api.config.endpoint

import f2.dsl.function.F2Function
import f2.function.spring.adapter.f2Function
import org.springframework.context.annotation.Bean
import org.springframework.stereotype.Service
import x2.api.config.SsmMetadataMap
import x2.api.config.X2SsmConfig

@Service
class X2ApiConfigEndpoint(
    private val x2SsmConfig: X2SsmConfig
) {

    @Bean
    fun getSsmConfig(): F2Function<Unit, SsmMetadataMap> = f2Function {
        x2SsmConfig.ssmMap()
    }
}
