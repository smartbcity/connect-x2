package x2.api.ssm.repo.postgres.repository

import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository
import ssm.chaincode.dsl.model.uri.ChaincodeUri
import x2.api.ssm.repo.postgres.SsmEntity

@Repository
interface SsmRepository: CrudRepository<SsmEntity, String> {
	fun findAllByChannelIdAndChaincodeId(channelId: String, chaincodeId: String): List<SsmEntity>
}
