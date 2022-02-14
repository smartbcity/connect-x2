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

//	@Query("""
//		select log.current as current, te.timestamp as timestamp
//		from LogEntity log
//		INNER JOIN SessionEntity session on log.sessionName = session.sessionName
//		INNER JOIN log.transaction te
//		where log.ssmUri = ?1
//		""")
//	fun getLogStats(ssmUri: String): List<LogStats>

}
