package x2.api.certificate.api.features

import com.fasterxml.jackson.core.JacksonException
import f2.dsl.fnc.f2Function
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import x2.api.certificate.api.utils.parseJsonTo
import x2.api.certificate.api.utils.toJson
import x2.api.certificate.domain.features.CanGenerateCertificateFunction
import x2.api.certificate.domain.features.CanGenerateCertificateResult
import x2.api.certificate.domain.model.CertificateCredentials

@Configuration
class CanGenerateCertificateFunctionImpl {

    @Bean
    fun canGenerateCertificateFunction(): CanGenerateCertificateFunction = f2Function { cmd ->
        val canGenerateCertificate = try {
            val result = (cmd.sessionState.public as String?)?.parseJsonTo(CertificateCredentials::class.java)
            result != null
        } catch (e: JacksonException) {
            println(e)
            false
        }

        CanGenerateCertificateResult(
            sessionState = cmd.sessionState,
            canGenerateCertificate = canGenerateCertificate
        )
    }
}
