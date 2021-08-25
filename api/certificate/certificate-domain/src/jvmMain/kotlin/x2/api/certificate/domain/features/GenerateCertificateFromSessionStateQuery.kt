package x2.api.certificate.domain.features

import ssm.chaincode.dsl.SsmSessionStateDTO
import x2.api.certificate.domain.model.Lang

actual interface GenerateCertificateFromSessionStateQueryDTO {
    actual val sessionState: SsmSessionStateDTO
    actual val lang: Lang
}

actual interface GenerateCertificateFromSessionStateResultDTO {
    actual val base64Document: String?
}