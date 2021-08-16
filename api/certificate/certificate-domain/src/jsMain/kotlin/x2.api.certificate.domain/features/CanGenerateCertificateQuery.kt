package x2.api.certificate.domain.features

import ssm.chaincode.dsl.SsmSessionState

@JsExport
@JsName("CanGenerateCertificateQueryDTO")
actual external interface CanGenerateCertificateQueryDTO {
    actual val sessionState: SsmSessionState
}

@JsExport
@JsName("CanGenerateCertificateResultDTO")
actual external interface CanGenerateCertificateResultDTO {
    actual val sessionState: SsmSessionState
    actual val canGenerateCertificate: Boolean
}