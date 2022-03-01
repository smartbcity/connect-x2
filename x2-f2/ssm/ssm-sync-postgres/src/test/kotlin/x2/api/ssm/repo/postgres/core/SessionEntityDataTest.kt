package x2.api.ssm.repo.postgres.core

import org.springframework.stereotype.Component
import ssm.chaincode.dsl.blockchain.EnvelopeType
import ssm.chaincode.dsl.blockchain.IdentitiesInfo
import ssm.chaincode.dsl.model.uri.SsmUri
import x2.api.ssm.repo.postgres.LogEntity
import x2.api.ssm.repo.postgres.SessionEntity
import x2.api.ssm.repo.postgres.TransactionEntity
import x2.api.ssm.repo.postgres.repository.LogRepository
import x2.api.ssm.repo.postgres.repository.SessionRepository
import x2.api.ssm.repo.postgres.repository.TransactionRepository
import java.time.LocalDateTime
import java.time.ZoneOffset
import java.util.UUID

@Component
class PostgresDataTest(
	val sessionRepository: SessionRepository,
	val logRepository: LogRepository,
	val transactionRepository: TransactionRepository,
) {
	companion object {}

	fun generateSessions(
		ssmUri: SsmUri,
		nbSession: Long,
		states: IntRange = (1..5)
	): List<SessionEntity> {
		return (1..nbSession).map { day ->
			val randomState = states.random()
			val sessionName = "${ssmUri.ssmName}-${UUID.randomUUID()}"
			val sessions = sessionEntity(
				sessionName = sessionName,
				ssmUri = ssmUri,
				randomState,
				LocalDateTime.now().minusDays(day)
			).let {
				sessionRepository.save(it)
			}
			states.map { current ->
				val transaction = transactionRepository.save(transactionEntity(sessionName, ssmUri, current, LocalDateTime.now().minusDays(day)))
				logEntity(
					sessionName = sessionName,
					ssmUri = ssmUri,
					current = current,
					transaction = transaction
				)
			}.let { logs ->
				logRepository.saveAll(logs)
			}
			sessions
		}
	}
}


fun PostgresDataTest.logEntity(sessionName: String, ssmUri: SsmUri, current: Int, transaction: TransactionEntity) = LogEntity(
	sessionName = sessionName,
	ssmUri = ssmUri.uri,
	roles = emptyMap(),
	public = "",
	private = hashMapOf(),
	origin = null,
	current = current,
	iteration = 2,
	transaction = transaction,
	txId = UUID.randomUUID().toString()
)

fun PostgresDataTest.sessionEntity(sessionName: String, ssmUri: SsmUri, state: Int, time: LocalDateTime) = SessionEntity(
	sessionName = sessionName,
	ssmUri = ssmUri.uri,
	channelId = ssmUri.channelId,
	transactions = emptyList(),
	roles = emptyMap(),
	public = "",
	private = hashMapOf(),
	origin = null,
	current = state,
	iteration = 2,
	transaction = null,
	time = time.toEpochSecond(ZoneOffset.UTC) * 1000
)

fun PostgresDataTest.transactionEntity(sessionName: String, ssmUri: SsmUri, state: Int, time: LocalDateTime) = TransactionEntity(
	sessionName = sessionName,
	channelId = ssmUri.channelId,
	transactionId = UUID.randomUUID().toString(),
	type = EnvelopeType.ENVELOPE,
	blockId = 1,
	creator = IdentitiesInfo(UUID.randomUUID().toString(), UUID.randomUUID().toString()),
	isValid = true,
	nonce = UUID.randomUUID().toString().toByteArray(),
	timestamp = 0,
	validationCode = 1
)