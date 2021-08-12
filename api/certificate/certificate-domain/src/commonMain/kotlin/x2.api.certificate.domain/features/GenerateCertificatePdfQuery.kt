package x2.api.certificate.domain.features

import f2.dsl.fnc.F2Function
import x2.api.certificate.domain.model.CertificateCredentials
import x2.api.certificate.domain.model.CertificateCredentialsDTO
import x2.api.certificate.domain.model.Lang
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Generates the PDF of a certificate
 * @d2 function
 * @parent [CertificateCredentials]
 * @title Generate Certificate PDF
 */
typealias GenerateCertificatePdfFunction = F2Function<GenerateCertificatePdfQuery, GenerateCertificatePdfResult>

expect interface GenerateCertificatePdfQueryDTO {
    /**
     * I18n data of the certificate
     */
    val certificate: CertificateCredentialsDTO

    /**
     * Language to translate the certificate to
     * @example "EN"
     */
    val lang: Lang
}

/**
 * @d2 query
 * @parent [GenerateCertificatePdfFunction]
 * @title Generate Certificate PDF: Parameters
 */
@JsExport
@JsName("GenerateCertificatePdfQuery")
class GenerateCertificatePdfQuery(
    override val certificate: CertificateCredentials,
    override val lang: Lang
): GenerateCertificatePdfQueryDTO

/**
 * @d2 event
 * @parent [GenerateCertificatePdfFunction]
 * @title Generate Certificate PDF: Result
 */
@JsExport
@JsName("GenerateCertificatePdfResult")
class GenerateCertificatePdfResult(
    /**
     * Generated PDF file as a Base64 String
     * @example "b64string"
     */
    val base64Document: String
)