package x2.api.certificate.domain.features

import x2.api.certificate.domain.model.CertificateCredentialsDTO
import x2.api.certificate.domain.model.Lang

@JsExport
@JsName("GenerateCertificatePdfQueryDTO")
actual external interface GenerateCertificatePdfQueryDTO {
    actual val certificate: CertificateCredentialsDTO
    actual val lang: Lang
}