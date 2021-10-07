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

fun DataTest.certificateCredentials(

) = CertificateCredentials(
    id = UUID.randomUUID().toString(),
    issuer = CertificateSigner(
        name = certificateData(),
        organization = "L'organisation issuer",
        roles = null,
        signature = "La signature de l'organisation issuer"
    ),
    holder = CertificateSigner(
        name = certificateData(),
        organization = "L'organisation holder",
        roles = null,
        signature = "La signature de l'organisation holder"
    ),
    payload = listOf(
        certificateData()
    ).toTypedArray(),
    protocol = CertificateProtocol(
        validationProtocol = certificateData(),
        protocolEngineVersion = certificateData(),
        channel = certificateData(),
        session = certificateData(),
        additionals = emptyArray(),
        url = "http://www.smartb.city"
    ),
    title = certificateData(value = stringI18n("Le titre!!!!")),
    type = emptyArray(),
    context = emptyArray()
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
    value: String = "Voila du text",
    lang: Lang = Lang.EN
) = mapOf(lang to value)


fun DataTest.certificate2() = DataTest.certificateCredentials(
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