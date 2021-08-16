package x2.api.certificate.domain.features

import ssm.chaincode.dsl.SsmSessionState

actual interface CanGenerateCertificateQueryDTO {
    actual val sessionState: SsmSessionState
}

actual interface CanGenerateCertificateResultDTO {
    actual val sessionState: SsmSessionState
    actual val canGenerateCertificate: Boolean
}