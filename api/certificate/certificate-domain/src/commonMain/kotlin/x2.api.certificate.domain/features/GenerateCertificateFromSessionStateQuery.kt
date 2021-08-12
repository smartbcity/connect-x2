package x2.api.certificate.domain.features

import f2.dsl.fnc.F2Function
import ssm.chaincode.dsl.SsmSessionState
import x2.api.certificate.domain.model.CertificateCredentials
import x2.api.certificate.domain.model.Lang
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Generates a certificate from the data contained in an SSM session state. \
 * The public field of this session must be a CertificateCredentials
 * @d2 function
 * @parent [CertificateCredentials]
 * @order 15
 * @title Generate Certificate Of Session
 */
typealias GenerateCertificateFromSessionStateFunction = F2Function<GenerateCertificateFromSessionStateQuery, GenerateCertificateFromSessionStateResult>

expect interface GenerateCertificateFromSessionStateQueryDTO {
    /**
     * Session state containing the certificate data
     * @example [CanGenerateCertificateQuery.sessionState]
     */
    val sessionState: SsmSessionState

    /**
     * Language to translate the certificate to
     * @example "EN"
     */
    val lang: Lang
}

/**
 * @d2 query
 * @parent [GenerateCertificateFromSessionStateFunction]
 * @title Generate Certificate Of Session: Parameters
 */
@JsExport
@JsName("GenerateCertificateFromSessionStateQuery")
class GenerateCertificateFromSessionStateQuery(
    override val sessionState: SsmSessionState,
    override val lang: Lang
): GenerateCertificateFromSessionStateQueryDTO

expect interface GenerateCertificateFromSessionStateResultDTO {
    /**
     * Generated PDF file as a Base64 String
     * @example "b64string"
     */
    val base64Document: String
}

/**
 * @d2 event
 * @parent [GenerateCertificateFromSessionStateFunction]
 * @title Generate Certificate Of Session: Result
 */
@JsExport
@JsName("GenerateCertificateFromSessionStateResult")
class GenerateCertificateFromSessionStateResult(
    override val base64Document: String
): GenerateCertificateFromSessionStateResultDTO