package x2.api.ssm.repo.postgres

import com.vladmihalcea.hibernate.type.json.JsonBinaryType
import com.vladmihalcea.hibernate.type.json.JsonStringType
import org.hibernate.annotations.Type
import org.hibernate.annotations.TypeDef
import org.hibernate.annotations.TypeDefs
import ssm.chaincode.dsl.blockchain.EnvelopeType
import ssm.chaincode.dsl.blockchain.IdentitiesInfo
import ssm.chaincode.dsl.blockchain.Transaction
import ssm.chaincode.dsl.blockchain.TransactionDTO
import ssm.chaincode.dsl.blockchain.TransactionId
import ssm.chaincode.dsl.model.SessionName
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Id

@TypeDefs(
	TypeDef(name = "json", typeClass = JsonStringType::class),
	TypeDef(name = "jsonb", typeClass = JsonBinaryType::class)
)
@Entity
class TransactionEntity(
	@Id
	val transactionId: TransactionId,
	val sessionName: SessionName,
	val blockId: Long,
	val timestamp: Long,
	val isValid: Boolean,
	val channelId: String,
	@Type(type = "jsonb")
	@Column(columnDefinition = "jsonb")
	val creator: IdentitiesInfo,
	val nonce: ByteArray,
	val type: EnvelopeType,
	val validationCode: Byte
)

fun TransactionDTO.toTransactionEntity(sessionName: SessionName) = TransactionEntity(
	transactionId = this.transactionId,
	blockId = this.blockId,
	timestamp = this.timestamp,
	isValid = this.isValid,
	channelId = this.channelId,
	creator = this.creator as IdentitiesInfo,
	nonce = this.nonce,
	type = this.type,
	validationCode = this.validationCode,
	sessionName = sessionName
)

fun TransactionEntity.toTransactionEntity() = Transaction(
	transactionId = this.transactionId,
	blockId = this.blockId,
	timestamp = this.timestamp,
	isValid = this.isValid,
	channelId = this.channelId,
	creator = this.creator,
	nonce = this.nonce,
	type = this.type,
	validationCode = this.validationCode,
)
