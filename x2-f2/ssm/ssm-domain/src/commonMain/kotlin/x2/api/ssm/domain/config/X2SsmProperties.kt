package x2.api.ssm.domain.config

import ssm.chaincode.dsl.model.uri.ChaincodeUri
import ssm.chaincode.dsl.model.uri.SsmUri

data class X2SsmProperties(
	val chaincodes: List<ChaincodeUri>,
	val ssm: List<SsmUri>
)
