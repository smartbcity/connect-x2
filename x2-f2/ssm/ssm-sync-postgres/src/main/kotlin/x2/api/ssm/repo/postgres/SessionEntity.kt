package x2.api.ssm.repo.postgres

import com.vladmihalcea.hibernate.type.json.JsonBinaryType
import com.vladmihalcea.hibernate.type.json.JsonStringType
import org.hibernate.annotations.Type
import org.hibernate.annotations.TypeDef
import org.hibernate.annotations.TypeDefs
import ssm.chaincode.dsl.blockchain.Transaction
import ssm.chaincode.dsl.model.SessionName
import ssm.chaincode.dsl.model.SsmSessionState
import ssm.chaincode.dsl.model.SsmTransition
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
import javax.persistence.Lob
import javax.persistence.OneToMany

@TypeDefs(
	TypeDef(name = "json", typeClass = JsonStringType::class),
	TypeDef(name = "jsonb", typeClass = JsonBinaryType::class)
)
@Entity
data class SessionEntity(
	@Id
	val sessionName: SessionName,
	val ssmUri: String,
//	@Type(type = "jsonb")
//	@Column(columnDefinition = "jsonb")
//	val state: DataSsmSessionState,
	@Type(type = "jsonb")
	@Column(columnDefinition = "jsonb")
	val channel: DataChannel,
//	val transactionId: TransactionId?,
	@OneToMany(
		targetEntity = TransactionEntity::class,
		mappedBy = "sessionName",
		cascade = [CascadeType.ALL],
		fetch = FetchType.EAGER
	)
	val transactions: List<TransactionEntity>,

	@Type(type = "jsonb")
	@Column(columnDefinition = "jsonb")
	val roles: Map<String, String>?,
	@Column(name = "LONG_TEXT", columnDefinition="TEXT")
	val public: String,
	@Type(type = "jsonb")
	@Column(columnDefinition = "jsonb")
	val private: Map<String, String>? = hashMapOf(),
	@Type(type = "jsonb")
	@Column(columnDefinition = "jsonb")
	val origin: SsmTransition?,
	val current: Int,
	val iteration: Int,
	@Type(type = "jsonb")
	@Column(columnDefinition = "jsonb")
	val transaction: Transaction?,
)

fun SessionEntity.toSsmEntity() = DataSsmSession(
	sessionName = this.sessionName,
	state = DataSsmSessionState(
		details = SsmSessionState(
			ssm = SsmUri(ssmUri).ssmName,
			session = this.sessionName,
			roles = this.roles,
			public = this.public,
			private = this.private,
			origin = this.origin,
			current = this.current,
			iteration = this.iteration
		),
		transaction = this.transaction
	),
	channel = this.channel,
	ssmUri = SsmUri(this.ssmUri),
	transactions = this.transactions.map {
		it.toTransactionEntity()
	},
	transaction = this.transactions.find {
		it.transactionId == this.transaction?.transactionId
	}?.toTransactionEntity(),
)

fun DataSsmSessionDTO.toSessionEntity() = SessionEntity(
	sessionName = this.sessionName,
	channel = this.channel as DataChannel,
	ssmUri = this.ssmUri.uri,
	transactions = this.transactions.map { it.toTransactionEntity(this.sessionName) },
	transaction = this.transaction as Transaction,
	roles = this.state.details.roles,
	private = this.state.details.private,
	origin = this.state.details.origin as SsmTransition?,
	current = this.state.details.current,
	iteration = this.state.details.iteration,
	public = this.state.details.public.toString()
)
