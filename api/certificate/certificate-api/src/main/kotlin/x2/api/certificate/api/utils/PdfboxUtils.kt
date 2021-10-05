package x2.api.certificate.api.utils

import org.springframework.core.io.buffer.DataBuffer
import org.springframework.core.io.buffer.DefaultDataBufferFactory
import rst.pdfbox.layout.elements.Document
import rst.pdfbox.layout.elements.Frame
import rst.pdfbox.layout.elements.Paragraph
import rst.pdfbox.layout.elements.VerticalSpacer
import rst.pdfbox.layout.shape.Rect
import rst.pdfbox.layout.text.Alignment
import rst.pdfbox.layout.text.BaseFont
import java.awt.Color

@Suppress("MagicNumber")
fun Document.addText(text: String, fontSize: Float = 12f, alignment: Alignment = Alignment.Left): Document {
    val paragraph = Paragraph()
    paragraph.alignment = alignment
    paragraph.addMarkup(text, fontSize, BaseFont.Helvetica)
    this.add(paragraph)
    this.addSpacer(5f)
    return this
}

fun Document.addSpacer(size: Float): Document {
    val spacer = VerticalSpacer(size)
    this.add(spacer)
    return this
}

@Suppress("MagicNumber")
fun Document.drawLine(): Document {
    val fakeParagraph = Paragraph()
    fakeParagraph.addMarkup("", 1f, BaseFont.Helvetica)
    val frame = Frame(fakeParagraph)
    frame.shape = Rect()
    frame.backgroundColor = Color.black
    frame.setPadding(250f, 250f, 0.5f, 0.5f);
    frame.setMargin(0f, 0f, 3f, 0f);
    this.add(frame)
    this.addSpacer(20f)
    return this
}

fun Document.toDataBuffer(): DataBuffer {
    val dataBuffer = DefaultDataBufferFactory().allocateBuffer()
    dataBuffer.asOutputStream().use { outputStream ->
        this.save(outputStream)
    }
    return dataBuffer
}
