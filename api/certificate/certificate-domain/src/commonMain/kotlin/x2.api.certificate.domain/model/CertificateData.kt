package x2.api.certificate.domain.model

interface CertificateDataDTO {
    val label: StringI18n
    val value: StringI18n
    val unit: StringI18n
}

class CertificateData (
    override val label: StringI18n,
    override val value: StringI18n,
    override val unit: StringI18n
): CertificateDataDTO
