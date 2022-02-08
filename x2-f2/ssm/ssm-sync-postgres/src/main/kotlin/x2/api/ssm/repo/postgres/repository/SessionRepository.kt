package x2.api.ssm.repo.postgres.repository

import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository
import x2.api.ssm.repo.postgres.SessionEntity
import java.util.Optional

@Repository
interface SessionRepository: CrudRepository<SessionEntity, String> {
	fun findAllBySsmUri(ssmUri: String): List<SessionEntity>
	fun findBySsmUriAndSessionName(ssmUri: String, sessionName: String): Optional<SessionEntity>

	@Query("SELECT count(u.current) as count, u.current as current " +
			"FROM SessionEntity u " +
			"WHERE u.ssmUri = ?1 group by u.ssmUri, u.current")
	fun getSessionStats(ssmUri: String): List<SessionStats>
}

interface SessionStats{
	fun getCount(): Int
	fun getCurrent(): Int
}