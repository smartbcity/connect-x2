package x2.api.certificate.domain.features

import f2.dsl.function.F2Function
import x2.api.certificate.domain.model.CertificateCredentials
import x2.api.certificate.domain.model.CertificateCredentialsDTO
import x2.api.certificate.domain.model.Lang
import kotlin.js.JsExport
import kotlin.js.JsName

typealias GenerateCertificatePdfFunction = F2Function<GenerateCertificatePdfQuery, GenerateCertificatePdfResult>

expect interface GenerateCertificatePdfQueryDTO {
    val certificate: CertificateCredentialsDTO
    val lang: Lang
}

@JsExport
@JsName("GenerateCertificatePdfQuery")
class GenerateCertificatePdfQuery(
    override val certificate: CertificateCredentials,
    override val lang: Lang
): GenerateCertificatePdfQueryDTO

@JsExport
@JsName("GenerateCertificatePdfResult")
class GenerateCertificatePdfResult(
    val base64Document: String
)