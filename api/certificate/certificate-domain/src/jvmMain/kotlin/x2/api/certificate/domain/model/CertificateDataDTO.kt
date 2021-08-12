package x2.api.certificate.domain.model

actual interface CertificateDataDTO {
    actual val label: StringI18n
    actual val value: StringI18n
    actual val unit: StringI18n
}
