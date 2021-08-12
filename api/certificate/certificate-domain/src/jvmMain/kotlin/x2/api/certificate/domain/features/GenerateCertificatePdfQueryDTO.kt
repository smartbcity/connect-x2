package x2.api.certificate.domain.features

import x2.api.certificate.domain.model.CertificateCredentialsDTO
import x2.api.certificate.domain.model.Lang

actual interface GenerateCertificatePdfQueryDTO {
    actual val certificate: CertificateCredentialsDTO
    actual val lang: Lang
}