package x2.api.certificate.domain.features

import ssm.chaincode.dsl.model.SsmSessionStateDTO

@JsExport
@JsName("CanGenerateCertificateQueryDTO")
actual external interface CanGenerateCertificateQueryDTO {
    actual val sessionState: SsmSessionStateDTO
}

@JsExport
@JsName("CanGenerateCertificateResultDTO")
actual external interface CanGenerateCertificateResultDTO {
    actual val sessionState: SsmSessionStateDTO
    actual val canGenerateCertificate: Boolean
}
