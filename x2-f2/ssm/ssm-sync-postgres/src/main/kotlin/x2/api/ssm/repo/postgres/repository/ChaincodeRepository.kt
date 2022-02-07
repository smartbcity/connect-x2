package x2.api.ssm.repo.postgres.repository

import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository
import x2.api.ssm.repo.postgres.ChaincodeSyncEntity

@Repository
interface ChaincodeRepository: CrudRepository<ChaincodeSyncEntity, String>
