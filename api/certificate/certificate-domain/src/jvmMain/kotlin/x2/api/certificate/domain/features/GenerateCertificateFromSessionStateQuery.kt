package x2.api.certificate.domain.features

import ssm.chaincode.dsl.SsmSessionState
import x2.api.certificate.domain.model.Lang

actual interface GenerateCertificateFromSessionStateQueryDTO {
    actual val sessionState: SsmSessionState
    actual val lang: Lang
}

actual interface GenerateCertificateFromSessionStateResultDTO {
    actual val base64Document: String
}