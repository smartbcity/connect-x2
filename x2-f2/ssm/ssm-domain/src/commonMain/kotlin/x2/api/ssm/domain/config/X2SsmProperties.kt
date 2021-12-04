package x2.api.ssm.domain.config

import ssm.chaincode.dsl.model.uri.ChaincodeUri

data class X2SsmProperties(
	val chaincodes: List<ChaincodeUri>
)
