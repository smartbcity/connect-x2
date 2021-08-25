package x2.api.certificate.api.model

import x2.api.certificate.domain.model.CertificateCredentialsDTO
import x2.api.certificate.domain.model.CertificateDataDTO
import x2.api.certificate.domain.model.CertificateProtocolDTO
import x2.api.certificate.domain.model.CertificateSignerDTO
import x2.api.certificate.domain.model.Lang

fun CertificateCredentialsDTO.translate(lang: Lang): CertificateCredentialsTranslation {
    return CertificateCredentialsTranslation(
        id = id,
        title = title.translate(lang),
        holder = holder.translate(lang),
        issuer = issuer.translate(lang),
        protocol = protocol.translate(lang),
        payload = payload.map { it.translate(lang) }
    )
}

fun CertificateSignerDTO.translate(lang: Lang): CertificateSignerTranslation {
    return CertificateSignerTranslation(
        name = name.translate(lang),
        organization = organization,
        roles = roles,
        signature = signature
    )
}

fun CertificateProtocolDTO.translate(lang: Lang): CertificateProtocolTranslation {
    return CertificateProtocolTranslation(
        validationProtocol = validationProtocol.translate(lang),
        protocolEngineVersion = protocolEngineVersion.translate(lang),
        channel = channel.translate(lang),
        session = session.translate(lang),
        additionals = additionals.map { it.translate(lang) },
        url = url
    )
}

fun CertificateDataDTO.translate(lang: Lang): CertificateDataTranslation {
    return CertificateDataTranslation(
        label = label.translate(lang),
        value = value.translate(lang),
        unit = unit.translate(lang)
    )
}