package x2.api.certificate.api.service

import org.apache.pdfbox.pdmodel.common.PDRectangle
import rst.pdfbox.layout.elements.Document
import rst.pdfbox.layout.elements.Orientation
import rst.pdfbox.layout.elements.PageFormat
import rst.pdfbox.layout.text.Alignment
import x2.api.certificate.api.model.CertificateCredentialsTranslation
import x2.api.certificate.api.model.CertificateDataTranslation
import x2.api.certificate.api.utils.addText
import x2.api.certificate.api.utils.toDataBuffer
import java.util.Base64

object PdfBoxGenerator {
	fun generate(certificate: CertificateCredentialsTranslation): String {
		val document = certificate.toPdf().toDataBuffer()
		val byteArray = document.asByteBuffer().array()
		return Base64.getEncoder().encodeToString(byteArray);
	}

	@Suppress("MagicNumber")
	private fun initPdf(): Document {
		val pageFormat = PageFormat(
			PDRectangle(450f, 700f),
			Orientation.Landscape,
			40f, 60f, 20f, 40f
		)
		return Document(pageFormat)
	}

	@Suppress("MagicNumber")
	private fun CertificateCredentialsTranslation.toPdf() = initPdf()
		.addText(title.value, 24f, Alignment.Center)
		.addText("Issued to ${holder.name.value}", 16f, Alignment.Center)
		.addField(protocol.session)
		.addField(protocol.channel)
		.addField(protocol.protocolEngineVersion)
		.addFields(payload)

	private fun Document.addFields(data: List<CertificateDataTranslation>): Document {
		data.forEach { addField(it) }
		return this
	}

	private fun Document.addField(data: CertificateDataTranslation): Document {
		return addText("${data.label}: ${data.value} ${data.unit}".trim())
	}
}
