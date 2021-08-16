package x2.api.certificate.domain.model

@JsExport
@JsName("CertificateCredentialsDTO")
actual external interface CertificateCredentialsDTO {
    actual val context: Array<String>
    actual val type: Array<String>
    actual val id: String
    actual val title: CertificateDataDTO
    actual val holder: CertificateSignerDTO
    actual val issuer: CertificateSignerDTO
    actual val protocol: CertificateProtocolDTO
    actual val payload: Array<out CertificateDataDTO>
}