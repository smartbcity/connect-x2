package x2.api.certificate.api

import org.springframework.context.annotation.Bean
import org.springframework.stereotype.Service
import x2.api.certificate.domain.features.GenerateCertificatePdfFunction

@Service
class CertificateApiService(
    private val generateCertificatePdfFunction: GenerateCertificatePdfFunction
) {
    @Bean
    fun generateCertificatePdf() = generateCertificatePdfFunction
}