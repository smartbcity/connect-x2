package x2.api.certificate.domain.model

@JsExport
@JsName("CertificateSignerDTO")
actual external interface CertificateSignerDTO {
    actual val name: CertificateDataDTO
    actual val organization: String
    actual val roles: String?
    actual val signature: String
}
