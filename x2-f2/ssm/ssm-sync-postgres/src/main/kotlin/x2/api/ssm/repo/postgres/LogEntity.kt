package x2.api.ssm.repo.postgres

import com.vladmihalcea.hibernate.type.json.JsonBinaryType
import com.vladmihalcea.hibernate.type.json.JsonStringType
import org.hibernate.annotations.Type
import org.hibernate.annotations.TypeDef
import org.hibernate.annotations.TypeDefs
import ssm.chaincode.dsl.model.SessionName
import ssm.chaincode.dsl.model.SsmSessionState
import ssm.chaincode.dsl.model.SsmTransition
import ssm.chaincode.dsl.model.uri.SsmUri
import ssm.data.dsl.model.DataSsmSessionState
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.OneToOne

@TypeDefs(
	TypeDef(name = "json", typeClass = JsonStringType::class), TypeDef(name = "jsonb", typeClass = JsonBinaryType::class)
)
@Entity
data class LogEntity(
	@Id
	val txId: String,
	val ssmUri: String,
	val sessionName: SessionName,
	@Type(type = "jsonb")
	@Column(columnDefinition = "jsonb")
	val origin: SsmTransition?,
	val current: Int,
	@Type(type = "jsonb")
	@Column(columnDefinition = "jsonb")
	val private: Map<String, String>?,
	@Type(type = "jsonb")
	@Column(columnDefinition = "jsonb")
	val roles: Map<String, String>?,
	val public: String,
	val iteration: Int,
	@OneToOne
	val transaction: TransactionEntity?
)

fun LogEntity.toDataSsmSessionState() = DataSsmSessionState(
	details = SsmSessionState(
		ssm = SsmUri(this.ssmUri).ssmName,
		session = this.sessionName,
		roles = this.roles,
		public = this.public,
		private = this.private,
		origin = this.origin,
		current = this.current,
		iteration = this.iteration,
	),
	transaction = transaction?.toTransactionEntity()
)

fun DataSsmSessionState.toDataSsmSessionState(ssmUri: String) = LogEntity(
	ssmUri = ssmUri,
	sessionName = this.details.session,
	roles = this.details.roles,
	public = this.details.public.toString(),
	private = this.details.private,
	origin = this.details.origin,
	current = this.details.current,
	iteration = this.details.iteration,
	transaction = this.transaction?.toTransactionEntity(this.details.session),
	txId = this.transaction!!.transactionId
)
