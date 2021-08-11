package x2.api.certificate.api.model

class CertificateCredentialsTranslation(
    val id: String,
    val title: CertificateDataTranslation,
    val holder: CertificateSignerTranslation,
    val issuer: CertificateSignerTranslation,
    val protocol: CertificateProtocolTranslation,
    val payload: List<CertificateDataTranslation>
)

class CertificateProtocolTranslation(
    val validationProtocol: CertificateDataTranslation,
    val protocolEngineVersion: CertificateDataTranslation,
    val channel: CertificateDataTranslation,
    val session: CertificateDataTranslation,
    val additionals: List<CertificateDataTranslation>,
    val url: String
)

class CertificateSignerTranslation(
    val name: CertificateDataTranslation,
    val organization: String,
    val roles: String?,
    val signature: String
)

class CertificateDataTranslation(
    val label: String,
    val value: String,
    val unit: String
)