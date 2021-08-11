package x2.api.certificate.domain.model

interface CertificateProtocolDTO {
    /**
     * Name of the protocol that validated the certificate
     * @example {
     *  value: { EN: "ExampleSSM" },
     *  label: { EN: "Validation Protocol" },
     *  unit: {}
     * }
     */
    val validationProtocol: CertificateData

    /**
     * Version of the protocol engine running the validation protocol
     * @example {
     *  value: { EN: "sb-chaincode" },
     *  label: { EN: "Protocol Engine Version" },
     *  unit: {}
     * }
     */
    val protocolEngineVersion: CertificateData

    /**
     * Channel hosting the protocol engine
     * @example {
     *  value: { EN: "ssm-channel" },
     *  label: { EN: "Channel" },
     *  unit: {}
     * }
     */
    val channel: CertificateData

    /**
     * Validation session holding the data necessary to validate the certificate
     * @example {
     *  value: { EN: "session-14602958-9599-4a50-9b3c-aac4615942e3" },
     *  label: { EN: "Session Number" },
     *  unit: {}
     * }
     */
    val session: CertificateData

    /**
     * Additional information about the protocol
     * @example []
     */
    val additionals: Array<CertificateData>

    /**
     * Address of the certificate data visualizer
     * @example "https://x2.smartb.city/ExampleSSM/ssm-channel/sb-chaincode/session-14602958-9599-4a50-9b3c-aac4615942e3"
     */
    val url: String
}

/**
 * @d2 model
 * @parent [CertificateCredentials]
 * @order 10
 */
class CertificateProtocol(
    override val validationProtocol: CertificateData,
    override val protocolEngineVersion: CertificateData,
    override val channel: CertificateData,
    override val session: CertificateData,
    override val additionals: Array<CertificateData>,
    override val url: String
): CertificateProtocolDTO
