package x2.api.certificate.api.utils

import kotlinx.html.HTMLTag

fun HTMLTag.withStyles(vararg styles: Pair<String, String>) {
    val stylesStr = styles.joinToString("; ") { (key, value) -> "$key: $value" }
    attributes["style"] = stylesStr.trim()
}

