package x2.api.certificate.domain.model

interface CertificateProtocolDTO {
    val validationProtocol: CertificateData
    val protocolEngineVersion: CertificateData
    val channel: CertificateData
    val session: CertificateData
    val additionals: Array<CertificateData>
    val url: String
}

class CertificateProtocol(
    override val validationProtocol: CertificateData,
    override val protocolEngineVersion: CertificateData,
    override val channel: CertificateData,
    override val session: CertificateData,
    override val additionals: Array<CertificateData>,
    override val url: String
): CertificateProtocolDTO
