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

	@Query("SELECT count(session.current) as count, session.current as current " +
			"FROM SessionEntity session " +
			"WHERE session.ssmUri = ?1 " +
			"AND (?2 is null or session.time > ?2) " +
			"AND (?3 is null or session.time < ?3) " +
			"AND (?4 is null or session.channelId IN ?4) " +
			"AND (?5 is null or session.current IN ?5) " +
			"group by session.ssmUri, session.current")
	fun getSessionStats(
		ssmUri: String,
		from: Long?,
		to: Long?,
		channelIds: List<String>?,
		currentSteps: List<Int>?
	): List<SessionStats>
}

interface SessionStats{
	fun getCount(): Int
	fun getCurrent(): Int
}
