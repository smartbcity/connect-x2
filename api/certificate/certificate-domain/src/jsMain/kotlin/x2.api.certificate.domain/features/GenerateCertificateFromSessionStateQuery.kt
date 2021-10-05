package x2.api.certificate.domain.features

import ssm.chaincode.dsl.model.SsmSessionStateDTO
import x2.api.certificate.domain.model.Lang

@JsExport
@JsName("GenerateCertificateFromSessionStateQueryDTO")
actual external interface GenerateCertificateFromSessionStateQueryDTO {
    actual val sessionState: SsmSessionStateDTO
    actual val lang: Lang
}

@JsExport
@JsName("GenerateCertificateFromSessionStateResultDTO")
actual external interface GenerateCertificateFromSessionStateResultDTO {
    actual val base64Document: String?
}
