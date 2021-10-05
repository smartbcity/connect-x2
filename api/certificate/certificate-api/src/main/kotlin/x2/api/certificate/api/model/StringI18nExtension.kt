package x2.api.certificate.api.model

import x2.api.certificate.domain.model.Lang
import x2.api.certificate.domain.model.StringI18n

val DEFAULT_LANG = Lang.EN

fun StringI18n.translate(lang: Lang): String {
    return get(lang)
        ?: get(DEFAULT_LANG)
        ?: values.firstOrNull()
        ?: ""
}
