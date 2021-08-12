package x2.api.certificate.api

import org.springframework.context.annotation.Bean
import org.springframework.stereotype.Service
import x2.api.certificate.domain.features.GenerateCertificatePdfFunction

@Service
class CertificateApiService(
    private val canGenerateCertificateFunction: CanGenerateCertificateFunction,
    private val generateCertificatePdfFunction: GenerateCertificatePdfFunction,
    private val generateCertificateFromSessionStateFunction: GenerateCertificateFromSessionStateFunction
) {
    @Bean
    fun canGenerateCertificate() = canGenerateCertificateFunction

    @Bean
    fun generateCertificate() = generateCertificatePdfFunction

    @Bean
    fun generateCertificateFromSessionState() = generateCertificateFromSessionStateFunction
}