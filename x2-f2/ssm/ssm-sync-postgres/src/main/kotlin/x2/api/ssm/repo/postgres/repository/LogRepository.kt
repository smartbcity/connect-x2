package x2.api.ssm.repo.postgres.repository

import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository
import x2.api.ssm.repo.postgres.LogEntity

@Repository
interface LogRepository: CrudRepository<LogEntity, String> {
	fun findAllBySsmUriAndSessionName(ssmUri: String, sessionName: String): List<LogEntity>
}
