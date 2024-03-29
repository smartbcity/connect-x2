package x2.api.certificate.domain.model

import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.js.JsName

@JsExport
@JsName("CertificateDataDTO")
interface CertificateDataDTO {
    val label: StringI18n
    val value: StringI18n
    val unit: StringI18n
}

/**
 * Represents a data to display in a certificate with i18n features
 * @d2 model
 * @parent [CertificateCredentials]
 * @order 40
 */
@JsExport
@Serializable
@JsName("CertificateData")
class CertificateData (
    /**
     * Displayed name of the data
     * @example { EN: "Amount of CO2 saved" }
     */
    override val label: StringI18n,

    /**
     * Displayed value of the data
     * @example { EN: "10" }
     */
    override val value: StringI18n,

    /**
     * Displayed unit of the data
     * @example { EN: "kt" }
     */
    override val unit: StringI18n
): CertificateDataDTO
