package x2.api.certificate.domain.model

interface CertificateCredentialsDTO {
    val context: Array<String>
        get() = arrayOf("https://www.smartb.city/credentials/certificate/v1")

    val type: Array<String>
        get() = arrayOf("CertificateCredentials")

    val id: String
    val title: CertificateDataDTO
    val holder: CertificateSignerDTO
    val issuer: CertificateSignerDTO
    val protocol: CertificateProtocolDTO
    val payload: Array<out CertificateDataDTO>
}

class CertificateCredentials(
    override val id: String,
    override val title: CertificateData,
    override val holder: CertificateSigner,
    override val issuer: CertificateSigner,
    override val protocol: CertificateProtocol,
    override val payload: Array<CertificateData>
): CertificateCredentialsDTO