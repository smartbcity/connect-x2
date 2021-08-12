package x2.api.certificate.api.features

import f2.dsl.fnc.f2Function
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import x2.api.certificate.api.model.translate
import x2.api.certificate.api.service.HtmlToPdfConverter
import x2.api.certificate.api.service.KotlinxHtmlGenerator
import x2.api.certificate.api.utils.parseJsonTo
import x2.api.certificate.api.utils.toJson
import x2.api.certificate.domain.features.GenerateCertificateFromSessionStateFunction
import x2.api.certificate.domain.features.GenerateCertificateFromSessionStateResult
import x2.api.certificate.domain.model.CertificateCredentials

@Configuration
class GenerateCertificateFromSessionStateFunctionImpl {

    @Bean
    fun generateCertificateFromSessionStateFunction(): GenerateCertificateFromSessionStateFunction = f2Function { cmd ->
        val certificate = cmd.sessionState.public
            .toJson().parseJsonTo(CertificateCredentials::class.java)
            .translate(cmd.lang)
        val base64Document = KotlinxHtmlGenerator.generate(certificate).let(HtmlToPdfConverter::htmlToPdfB64)
        GenerateCertificateFromSessionStateResult(base64Document)
    }
}