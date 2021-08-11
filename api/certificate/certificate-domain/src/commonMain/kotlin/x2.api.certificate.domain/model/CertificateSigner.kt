package x2.api.certificate.domain.model

interface CertificateSignerDTO {
    val name: CertificateData
    val organization: String
    val roles: String?
    val signature: String
}

class CertificateSigner(
    override val name: CertificateData,
    override val organization: String,
    override val roles: String?,
    override val signature: String
): CertificateSignerDTO
