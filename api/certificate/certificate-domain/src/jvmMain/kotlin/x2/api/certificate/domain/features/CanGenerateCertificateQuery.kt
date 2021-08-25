package x2.api.certificate.domain.features

import ssm.chaincode.dsl.SsmSessionStateDTO

actual interface CanGenerateCertificateQueryDTO {
    actual val sessionState: SsmSessionStateDTO
}

actual interface CanGenerateCertificateResultDTO {
    actual val sessionState: SsmSessionStateDTO
    actual val canGenerateCertificate: Boolean
}