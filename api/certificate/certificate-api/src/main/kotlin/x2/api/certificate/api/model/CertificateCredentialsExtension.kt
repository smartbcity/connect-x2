package x2.api.certificate.api.model

import x2.api.certificate.domain.model.CertificateCredentials
import x2.api.certificate.domain.model.CertificateData
import x2.api.certificate.domain.model.CertificateProtocol
import x2.api.certificate.domain.model.CertificateSigner
import x2.api.certificate.domain.model.Lang

fun CertificateCredentials.translate(lang: Lang): CertificateCredentialsTranslation {
    return CertificateCredentialsTranslation(
        id = id,
        title = title.translate(lang),
        holder = holder.translate(lang),
        issuer = issuer.translate(lang),
        protocol = protocol.translate(lang),
        payload = payload.map { it.translate(lang) }
    )
}

fun CertificateSigner.translate(lang: Lang): CertificateSignerTranslation {
    return CertificateSignerTranslation(
        name = name.translate(lang),
        organization = organization,
        roles = roles,
        signature = signature
    )
}

fun CertificateProtocol.translate(lang: Lang): CertificateProtocolTranslation {
    return CertificateProtocolTranslation(
        validationProtocol = validationProtocol.translate(lang),
        protocolEngineVersion = protocolEngineVersion.translate(lang),
        channel = channel.translate(lang),
        session = session.translate(lang),
        additionals = additionals.map { it.translate(lang) },
        url = url
    )
}

fun CertificateData.translate(lang: Lang): CertificateDataTranslation {
    return CertificateDataTranslation(
        label = label.translate(lang),
        value = value.translate(lang),
        unit = unit.translate(lang)
    )
}