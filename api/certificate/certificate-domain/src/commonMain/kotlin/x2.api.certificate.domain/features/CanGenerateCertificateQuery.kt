package x2.api.certificate.domain.features

import f2.dsl.fnc.F2Function
import ssm.chaincode.dsl.SsmSessionState
import ssm.chaincode.dsl.SsmSessionStateDTO
import x2.api.certificate.domain.model.CertificateCredentials
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Check if a given session state has the necessary data to generate a certificate
 * @d2 function
 * @parent [CertificateCredentials]
 * @order 20
 * @title Can Generate Certificate
 */
typealias CanGenerateCertificateFunction = F2Function<CanGenerateCertificateQuery, CanGenerateCertificateResult>

expect interface CanGenerateCertificateQueryDTO {
    /**
     * Session state to check
     * @example {
     *  ssm: "ProductLogistic",
     *  session: "eca7c042-ec37-489b-adb8-42c73ddcfb0b",
     *  roles: {
     *      Provider: "JohnDeuf",
     *      Seller: "BenEfficiere",
     *      Buyer: "JeanneAlyztou"
     *  },
     *  public: "The seller is a scam",
     *  private: {
     *    cake: "lie"
     *  },
     *  origin: {
     *    from: 1,
     *    to: 2,
     *    role: "Seller",
     *    action: "Sell"
     *  },
     *  current: 2,
     *  iteration: 3
     * }
     */
    val sessionState: SsmSessionStateDTO
}

/**
 * @d2 query
 * @parent [CanGenerateCertificateFunction]
 * @title Can Generate Certificate: Parameters
 */
@JsExport
@JsName("CanGenerateCertificateQuery")
class CanGenerateCertificateQuery(
    override val sessionState: SsmSessionState
): CanGenerateCertificateQueryDTO

expect interface CanGenerateCertificateResultDTO {
    /**
     * The checked session state
     * @example [CanGenerateCertificateQuery.sessionState]
     */
    val sessionState: SsmSessionStateDTO

    /**
     * Result of the verification
     * @example false
     */
    val canGenerateCertificate: Boolean
}

/**
 * @d2 event
 * @parent [CanGenerateCertificateFunction]
 * @title Can Generate Certificate: Result
 */
@JsExport
@JsName("CanGenerateCertificateResult")
class CanGenerateCertificateResult(
    override val sessionState: SsmSessionState,
    override val canGenerateCertificate: Boolean
): CanGenerateCertificateResultDTO