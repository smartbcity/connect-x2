package x2.api.ssm.repo.postgres

import javax.persistence.Entity
import javax.persistence.Id

@Entity
class ChaincodeSyncEntity(
	@Id
	val id: String,
	val lastEventId: String?
)
