package x2.api.certificate.domain.model

actual interface CertificateSignerDTO {
    actual val name: CertificateDataDTO
    actual val organization: String
    actual val roles: String?
    actual val signature: String
}