package x2.api.certificate.domain.model

import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.js.JsName

@JsExport
@Serializable
@JsName("Lang")
enum class Lang {
    EN, FR
}

/**
 * Typealias of `Map<Lang, String>` with Lang being an enum with values [EN, FR]
 * @d2 model
 * @parent [CertificateData]
 * @example {
 *  EN: "Amount of CO2 saved",
 *  FR: "Quantité de CO2 évité"
 * }
 */
typealias StringI18n = Map<Lang, String>
