package x2.api.certificate.api.features

import f2.dsl.fnc.f2Function
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import x2.api.certificate.api.model.translate
import x2.api.certificate.api.service.HtmlToPdfConverter
import x2.api.certificate.api.service.KotlinxHtmlGenerator
import x2.api.certificate.domain.features.GenerateCertificatePdfFunction
import x2.api.certificate.domain.features.GenerateCertificatePdfResult

@Configuration
class GenerateCertificatePdfFunctionImpl {

    @Bean
    fun generateCertificatePdfFunction(): GenerateCertificatePdfFunction = f2Function { cmd ->
        val certificate = cmd.certificate.translate(cmd.lang)
        val base64Document = KotlinxHtmlGenerator.generate(certificate).let(HtmlToPdfConverter::htmlToPdfB64)
        GenerateCertificatePdfResult(base64Document)
    }
}