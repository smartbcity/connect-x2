package x2.api.certificate.domain.model

@JsExport
@JsName("CertificateProtocolDTO")
actual external interface CertificateProtocolDTO {
    actual val validationProtocol: CertificateDataDTO
    actual val protocolEngineVersion: CertificateDataDTO
    actual val channel: CertificateDataDTO
    actual val session: CertificateDataDTO
    actual val additionals: Array<out CertificateDataDTO>
    actual val url: String
}