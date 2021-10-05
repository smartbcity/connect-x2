package x2.test.ssm.certificate.provider

import x2.api.certificate.domain.model.CertificateCredentials
import x2.api.certificate.domain.model.CertificateData
import x2.api.certificate.domain.model.CertificateProtocol
import x2.api.certificate.domain.model.CertificateSigner
import x2.api.certificate.domain.model.Lang
import x2.api.certificate.domain.model.StringI18n
import java.util.UUID

fun DataTest.certificateCredentials(
     id: String = UUID.randomUUID().toString(),
     title: CertificateData = certificateData(),
     holder: CertificateSigner = certificateSigner(),
     issuer: CertificateSigner = certificateSigner(),
     protocol: CertificateProtocol = certificateProtocol(),
     payload: Array<CertificateData> = emptyArray(),
) = CertificateCredentials(
    context = emptyArray(),
    type = emptyArray(),
    id = id,
    title = title,
    holder = holder,
    issuer = issuer,
    protocol = protocol,
    payload = payload
)

fun DataTest.certificateProtocol(
    validationProtocol: CertificateData = certificateData(),
    protocolEngineVersion: CertificateData = certificateData(),
    channel: CertificateData = certificateData(),
    session: CertificateData = certificateData(),
    additionals: Array<CertificateData> = emptyArray(),
    url: String = "localhost"
) = CertificateProtocol(
    validationProtocol = validationProtocol,
    protocolEngineVersion = protocolEngineVersion,
    channel = channel,
    session = session,
    additionals = additionals,
    url = url
)

fun DataTest.certificateSigner(
    name: CertificateData = certificateData(),
    organization: String = "",
    roles: String? = null,
    signature: String = "sign"
) = CertificateSigner(
    name = name,
    organization = organization,
    roles = roles,
    signature = signature
)

fun DataTest.certificateData(
    label: StringI18n = stringI18n(),
    value: StringI18n = stringI18n(),
    unit: StringI18n = stringI18n(),
) = CertificateData(
    label = label,
    value = value,
    unit = unit
)

fun DataTest.stringI18n(
    value: String = "",
    lang: Lang = Lang.EN
) = mapOf(lang to value)
