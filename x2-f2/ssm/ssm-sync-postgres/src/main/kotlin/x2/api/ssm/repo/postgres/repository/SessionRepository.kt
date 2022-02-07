package x2.api.ssm.repo.postgres.repository

import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository
import x2.api.ssm.repo.postgres.SessionEntity
import java.util.Optional

@Repository
interface SessionRepository: CrudRepository<SessionEntity, String> {
	fun findAllBySsmUri(uri: String): List<SessionEntity>
	fun findBySsmUriAndSessionName(uri: String, sessionName: String): Optional<SessionEntity>
}
