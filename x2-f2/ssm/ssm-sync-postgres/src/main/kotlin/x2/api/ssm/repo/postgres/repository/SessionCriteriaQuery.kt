package x2.api.ssm.repo.postgres.repository

import f2.dsl.cqrs.page.OffsetPaginationDTO
import f2.dsl.cqrs.page.Page
import org.springframework.stereotype.Repository
import x2.api.ssm.domain.query.ProtocoleFilterDTO
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

	companion object {
		const val PAGE_LIMIT = 10
		const val PAGE_OFFSET = 0
	}

	fun findEntity(
		filter: ProtocoleFilterDTO?,
		pagination: OffsetPaginationDTO?
	): Page<SessionEntity> {
		val cb = entityManager.criteriaBuilder
		val criteriaQuery: CriteriaQuery<SessionEntity> = cb.createQuery(SessionEntity::class.java)
		val root = criteriaQuery.from(SessionEntity::class.java)
		criteriaQuery.filter(root, cb, filter?.ssmUri, filter?.from, filter?.to, filter?.channels, filter?.steps)
		val count = countAll(filter)
		return entityManager.createQuery(criteriaQuery)
			.setMaxResults(pagination?.limit ?: PAGE_LIMIT)
			.setFirstResult(pagination?.offset ?: PAGE_OFFSET)
			.resultList.let {
				Page(
					total = count,
					items = it
				)
			}
	}

	fun countAll(
		filter: ProtocoleFilterDTO?,
	): Int {
		val cb = entityManager.criteriaBuilder
		val criteriaQuery = cb.createQuery(Long::class.java)
		val root: Root<SessionEntity> = criteriaQuery.from(SessionEntity::class.java)
		criteriaQuery.filter(root, cb, filter?.ssmUri, filter?.from, filter?.to, filter?.channels, filter?.steps)
		criteriaQuery.select(cb.count(root))
		return entityManager.createQuery(criteriaQuery).singleResult.toInt()
	}

	fun findStats(
		filter: ProtocoleFilterDTO?
	): List<SessionStats> {
		val criteriaBuilder = entityManager.criteriaBuilder
		val criteriaQuery = criteriaBuilder.createQuery(SessionStats::class.java)
		val root = criteriaQuery.from(SessionEntity::class.java)

		criteriaQuery.filter(
			root,
			criteriaBuilder,
			filter?.ssmUri,
			filter?.from,
			filter?.to,
			filter?.channels,
			filter?.steps
		)

		val count = criteriaBuilder.count(root).alias("count")

		criteriaQuery.multiselect(count, root.get<SessionStats>("current"))

		criteriaQuery.groupBy(root.get<SessionStats>("current"))
		return entityManager.createQuery(criteriaQuery).resultList
	}

	@SuppressWarnings("MagicNumber")
	fun findLogStats(
		filter: ProtocoleFilterDTO?
	): List<LogStats> {
		var query = """
			SELECT log.current as current, te.timestamp as timestamp
			FROM LogEntity log
			INNER JOIN SessionEntity session on log.sessionName = session.sessionName
			INNER JOIN log.transaction te
			WHERE 1=1 
		"""
		val params = mutableMapOf<Int, Any>()
		filter?.ssmUri?.let {
			query += " AND session.ssmUri = ?1 "
			params[1] = filter.ssmUri!!
		}
		filter?.from?.let {
			query += "AND te.timestamp >= ?2 "
			params[2] = filter.from!!
		}
		filter?.to?.let {
			query += "AND te.timestamp <= ?3 "
			params[3] = filter.to!!
		}
		filter?.channels?.let {
			query += "AND session.channelId IN ?4 "
			params[4] = filter.channels!!
		}
		filter?.steps?.let {
			query += "AND log.current IN ?5 "
			params[5] = filter.steps!!
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
		cb: CriteriaBuilder,
		ssmUri: String?,
		from: Long?,
		to: Long?,
		channels: Array<String>?,
		steps: IntArray?
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

		channels?.emptyToNull()?.let {
			root.get<String>(SessionEntity::channelId.name).`in`(channels.toList())
		}?.let(predicates::add)

		steps?.emptyToNull()?.let {
			root.get<String>(SessionEntity::current.name).`in`(steps.map { it.toLong() }.toList())
		}?.let(predicates::add)

		where(*predicates.toTypedArray())
	}

	fun <T> Array<T>.emptyToNull() = ifEmpty {
		null
	}
	fun IntArray.emptyToNull() = ifEmpty {
		null
	}
	fun IntArray.ifEmpty(defaultValue: () -> IntArray?) =
		if (isEmpty()) defaultValue() else this
}
