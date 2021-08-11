package x2.api.certificate.api.service

import org.junit.jupiter.api.Test
import org.junit.jupiter.api.TestInstance
import x2.api.certificate.api.data.DataTest
import x2.api.certificate.api.data.certificateCredentials
import x2.api.certificate.api.data.certificateData
import x2.api.certificate.api.data.certificateProtocol
import x2.api.certificate.api.data.certificateSigner
import x2.api.certificate.api.data.stringI18n
import x2.api.certificate.api.model.translate
import x2.api.certificate.domain.model.Lang

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class KotlinxHtmlGeneratorTest {

    private val certificate = DataTest.certificateCredentials(
        id = "bl-bl-bl-bl",
        title = DataTest.certificateData(value = DataTest.stringI18n("Certificate of Credit Insurance")),
        holder = DataTest.certificateSigner(
            name = DataTest.certificateData(value = DataTest.stringI18n("Elie Jible")),
            organization = "Colisactiv",
            roles = "CEO",
            signature = "CA"
        ),
        issuer = DataTest.certificateSigner(
            name = DataTest.certificateData(value = DataTest.stringI18n("Jeanne Alyztou")),
            organization = "SmartB",
            roles = "CEO",
            signature = "SB"
        ),
        protocol = DataTest.certificateProtocol(
            validationProtocol = DataTest.certificateData(
                label = DataTest.stringI18n("Validation Protocol"),
                value = DataTest.stringI18n("Delivery")
            ),
            protocolEngineVersion = DataTest.certificateData(
                label = DataTest.stringI18n("Protocol Engine Version"),
                value = DataTest.stringI18n("ssm-yper")
            ),
            channel = DataTest.certificateData(
                label = DataTest.stringI18n("Channel"),
                value = DataTest.stringI18n("territoire-angers"),
            ),
            session = DataTest.certificateData(
                label = DataTest.stringI18n("Session"),
                value = DataTest.stringI18n("delivery-U-U-I-D")
            ),
            url = "http://app.colisactiv.fr"
        ),
        payload = arrayOf(
            DataTest.certificateData(
                label = DataTest.stringI18n("Amount of CO2 saved"),
                value = DataTest.stringI18n("666"),
                unit = DataTest.stringI18n("g")
            )
        )
    )

    @Test
    fun generatePdf() {
        val pdf = KotlinxHtmlGenerator.generate(certificate.translate(Lang.EN))
            .let(HtmlToPdfConverter::htmlToPdfB64)

        println(pdf)
    }
}