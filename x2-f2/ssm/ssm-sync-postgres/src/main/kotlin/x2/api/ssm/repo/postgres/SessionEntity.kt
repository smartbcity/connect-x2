package x2.api.ssm.repo.postgres

import com.vladmihalcea.hibernate.type.json.JsonBinaryType
import com.vladmihalcea.hibernate.type.json.JsonStringType
import org.hibernate.annotations.Type
import org.hibernate.annotations.TypeDef
import org.hibernate.annotations.TypeDefs
import ssm.chaincode.dsl.blockchain.TransactionId
import ssm.chaincode.dsl.model.SessionName
import ssm.chaincode.dsl.model.uri.SsmUri
import ssm.data.dsl.model.DataChannel
import ssm.data.dsl.model.DataSsmSession
import ssm.data.dsl.model.DataSsmSessionDTO
import ssm.data.dsl.model.DataSsmSessionState
import javax.persistence.CascadeType
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.FetchType
import javax.persistence.Id
import javax.persistence.OneToMany

@TypeDefs(
	TypeDef(name = "json", typeClass = JsonStringType::class),
	TypeDef(name = "jsonb", typeClass = JsonBinaryType::class)
)
@Entity
data class SessionEntity(
	@Id
	val sessionName: SessionName,
	@Type(type = "jsonb")
	@Column(columnDefinition = "jsonb")
	val state: DataSsmSessionState,
	@Type(type = "jsonb")
	@Column(columnDefinition = "jsonb")
	val channel: DataChannel,
	val transactionId: TransactionId?,
	val ssmUri: String,
	@OneToMany(
		targetEntity = TransactionEntity::class,
		mappedBy = "sessionName",
		cascade = [CascadeType.ALL],
		fetch = FetchType.EAGER
	)
	val transactions: List<TransactionEntity>,
)

fun SessionEntity.toSsmEntity() = DataSsmSession(
	sessionName = this.sessionName,
	state = this.state,
	channel = this.channel,
	ssmUri = SsmUri(this.ssmUri),
	transactions = this.transactions.map {
		it.toTransactionEntity()
	},
	transaction = this.transactions.find {
		it.transactionId == this.transactionId
	}?.toTransactionEntity(),
)

fun DataSsmSessionDTO.toSessionEntity() = SessionEntity(
	sessionName = this.sessionName,
	state = this.state as DataSsmSessionState,
	channel = this.channel as DataChannel,
	ssmUri = this.ssmUri.uri,
	transactionId = this.transaction?.transactionId,
	transactions = this.transactions.map { it.toTransactionEntity(this.sessionName) }
)
