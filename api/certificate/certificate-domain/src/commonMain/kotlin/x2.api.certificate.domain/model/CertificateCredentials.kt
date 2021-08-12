package x2.api.certificate.domain.model

expect interface CertificateCredentialsDTO {
    /**
     * Definition of the ontology
     * @example ["https://www.smartb.city/credentials/certificate/v1"]
     */
    val context: Array<String>

    /**
     * Implemented object of the ontology
     * @example ["CertificateCredentials"]
     */
    val type: Array<String>

    /**
     * Identifier of the certificate
     * @example "ssm.smartb.city/ssm-channel/sb-chaincode/ExampleSSM/session-14602958-9599-4a50-9b3c-aac4615942e3"
     */
    val id: String

    /**
     * Displayed title of the certificate
     * @example {
     *  value: { EN: "Very Important Certificate" },
     *  label: {},
     *  unit: {}
     * }
     */
    val title: CertificateDataDTO

    /**
     * Entity the certificate has been issued for
     * @example {
     *  name: {
     *      value: { EN: "Elie Jible" },
     *      label: {},
     *      unit: {}
     *  },
     *  organization: "GreenGuys",
     *  roles: "CEO",
     *  signature: "https://picture.com/greenguys/green-signature"
     * }
     */
    val holder: CertificateSignerDTO

    /**
     * Entity issuing the certificate
     */
    val issuer: CertificateSignerDTO

    /**
     * Protocol used to validate this certificate
     */
    val protocol: CertificateProtocolDTO

    /**
     * Additional information to display in the certificate
     * @example [{
     *  value: { EN: "0" },
     *  label: { EN: "Amount of CO2 saved" },
     *  unit: { EN: "kt" }
     * }]
     */
    val payload: Array<out CertificateDataDTO>
}

/**
 * @d2 model
 * @page
 * @@title Certificate
 */
class CertificateCredentials(
    override val context: Array<String>,
    override val type: Array<String>,
    override val id: String,
    override val title: CertificateData,
    override val holder: CertificateSigner,
    override val issuer: CertificateSigner,
    override val protocol: CertificateProtocol,
    override val payload: Array<CertificateData>,
): CertificateCredentialsDTO