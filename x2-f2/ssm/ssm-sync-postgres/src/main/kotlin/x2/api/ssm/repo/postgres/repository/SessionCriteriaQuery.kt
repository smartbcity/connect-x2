package x2.api.ssm.repo.postgres.repository

import org.springframework.stereotype.Repository
import x2.api.ssm.repo.postgres.SessionEntity
import x2.api.ssm.repo.postgres.stats.LogStats
import x2.api.ssm.repo.postgres.stats.SessionStats
import javax.persistence.EntityManager
import javax.persistence.criteria.CriteriaBuilder
import javax.persistence.criteria.CriteriaQuery
import javax.persistence.criteria.Predicate
import javax.persistence.criteria.Root


@Repository
class SessionCriteriaQuery(var entityManager: EntityManager) {

	fun findEntity(
		ssmUri: String?,
		from: Long?,
		to: Long?,
		channelIds: List<String>?,
		currentSteps: List<Int>?
	): List<SessionEntity> {
		val cb = entityManager.criteriaBuilder
		val criteriaQuery: CriteriaQuery<SessionEntity> = cb.createQuery(SessionEntity::class.java)
		val root = criteriaQuery.from(SessionEntity::class.java)
		criteriaQuery.filter(root, ssmUri, cb, from, to, channelIds, currentSteps)
		return entityManager.createQuery(criteriaQuery).resultList
	}

	fun findStats(
		ssmUri: String?,
		from: Long?,
		to: Long?,
		channelIds: List<String>?,
		currentSteps: List<Int>?
	): List<SessionStats> {
		val criteriaBuilder = entityManager.criteriaBuilder
		val criteriaQuery = criteriaBuilder.createQuery(SessionStats::class.java)
		val root = criteriaQuery.from(SessionEntity::class.java)

		criteriaQuery.filter(root, ssmUri, criteriaBuilder, from, to, channelIds, currentSteps)

		val count = criteriaBuilder.count(root).alias("count")

		criteriaQuery.multiselect(count, root.get<SessionStats>("current"))

		criteriaQuery.groupBy(root.get<SessionStats>("current"))
		return entityManager.createQuery(criteriaQuery).resultList
	}

	@SuppressWarnings("MagicNumber")
	fun findLogStats(
		ssmUri: String?,
		from: Long?,
		to: Long?,
		channelIds: List<String>?,
		currentSteps: List<Int>?
	): List<LogStats> {
		var query = """
			SELECT log.current as current, te.timestamp as timestamp
			FROM LogEntity log
			INNER JOIN SessionEntity session on log.sessionName = session.sessionName
			INNER JOIN log.transaction te
			WHERE 1=1 
		"""
		val params = mutableMapOf<Int, Any>()
		ssmUri?.let {
			query += " AND session.ssmUri = ?1 "
			params[1] = ssmUri
		}
		from?.let {
			query += "AND te.timestamp >= ?2 "
			params[2] = from
		}
		to?.let {
			query += "AND te.timestamp <= ?3 "
			params[3] = to
		}
		channelIds?.let {
			query += "AND session.channelId IN ?4 "
			params[4] = channelIds
		}
		currentSteps?.let {
			query += "AND log.current IN ?5 "
			params[5] = currentSteps
		}
		val emQuery = entityManager.createQuery(query)
		params.forEach { (key, value) -> emQuery.setParameter(key, value) }
		return emQuery.resultList.map { result ->
			val line = result as Array<*>
			LogStats(
				current = line[0] as Int,
				timestamp = line[1] as Long
			)
		}
	}

	private fun <T> CriteriaQuery<T>.filter(
		root: Root<SessionEntity>,
		ssmUri: String?,
		cb: CriteriaBuilder,
		from: Long?,
		to: Long?,
		channelIds: List<String>?,
		currentSteps: List<Int>?
	) {
		val predicates = mutableListOf<Predicate>()
		ssmUri?.let {
			cb.equal(root.get<String>(SessionEntity::ssmUri.name), ssmUri)
		}?.let(predicates::add)
		from?.let {
			cb.greaterThan(root.get(SessionEntity::time.name), from)
		}?.let(predicates::add)

		to?.let {
			cb.lessThan(root.get(SessionEntity::time.name), to)
		}?.let(predicates::add)

		channelIds?.emptyToNull()?.let {
			root.get<String>(SessionEntity::channelId.name).`in`(channelIds)
		}?.let(predicates::add)

		currentSteps?.emptyToNull()?.let {
			root.get<String>(SessionEntity::current.name).`in`(currentSteps)
		}?.let(predicates::add)

		where(*predicates.toTypedArray())
	}

	fun <T> List<T>.emptyToNull() =  if (isEmpty()) {
		null
	} else {
		this
	}
}
