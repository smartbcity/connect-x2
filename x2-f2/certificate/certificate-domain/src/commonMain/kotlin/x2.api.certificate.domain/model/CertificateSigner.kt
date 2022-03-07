package x2.api.certificate.domain.model

import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.js.JsName

@JsExport
@JsName("CertificateSignerDTO")
interface CertificateSignerDTO {
    /**
     * Name of the signer
     * @example {
     *  value: { EN: "Jeanne Alyztou" },
     *  label: {},
     *  unit: {}
     * }
     */
    val name: CertificateDataDTO

    /**
     * Organization represented by the signer
     * @example "SmartB"
     */
    val organization: String

    /**
     * Roles of the signer within its organization
     * @example "CEO"
     */
    val roles: String?

    /**
     * Image of the signature (either as Base64 of URL)
     * @example "https://picture.com/smartb/pretty-signature"
     */
    val signature: String
}

/**
 * Entity signing a certificate
 * @d2 model
 * @parent [CertificateCredentials]
 * @order 20
 */
@JsExport
@Serializable
@JsName("CertificateSigner")
class CertificateSigner(
    override val name: CertificateData,
    override val organization: String,
    override val roles: String?,
    override val signature: String
): CertificateSignerDTO
