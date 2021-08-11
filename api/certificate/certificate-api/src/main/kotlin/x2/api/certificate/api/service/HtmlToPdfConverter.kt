package x2.api.certificate.api.service

import com.itextpdf.html2pdf.HtmlConverter
import java.io.ByteArrayOutputStream
import java.util.Base64

class HtmlToPdfConverter {
    companion object {
        fun htmlToPdfB64(html: String): String {
            return ByteArrayOutputStream().use { outputStream ->
                HtmlConverter.convertToPdf(html, outputStream)
                Base64.getEncoder().encodeToString(outputStream.toByteArray())
            }
        }
    }
}