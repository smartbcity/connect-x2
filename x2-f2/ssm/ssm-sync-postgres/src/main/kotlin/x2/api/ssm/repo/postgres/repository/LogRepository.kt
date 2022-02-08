package x2.api.ssm.repo.postgres.repository

import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository
import ssm.chaincode.dsl.model.SessionName
import ssm.chaincode.dsl.model.uri.SsmUri
import x2.api.ssm.repo.postgres.LogEntity
import java.sql.Timestamp

@Repository
interface LogRepository: CrudRepository<LogEntity, String> {
	fun findAllBySsmUriAndSessionName(ssmUri: String, sessionName: String): List<LogEntity>

	@Query("select le.current as current, te.timestamp as timestamp from LogEntity le INNER JOIN le.transaction te where le.ssmUri = ?1")
	fun getLogStats(ssmUri: String): List<LogStats>

}

interface LogStats{
	fun getCurrent(): Int
	fun getTimestamp(): Int
}
