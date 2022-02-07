package x2.api.ssm.repo.postgres

import com.vladmihalcea.hibernate.type.json.JsonBinaryType
import com.vladmihalcea.hibernate.type.json.JsonStringType
import org.hibernate.annotations.Type
import org.hibernate.annotations.TypeDef
import org.hibernate.annotations.TypeDefs
import ssm.chaincode.dsl.model.ChaincodeId
import ssm.chaincode.dsl.model.ChannelId
import ssm.chaincode.dsl.model.Ssm
import ssm.chaincode.dsl.model.uri.SsmUri
import ssm.chaincode.dsl.model.uri.SsmVersion
import ssm.data.dsl.model.DataChannel
import ssm.data.dsl.model.DataSsm
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Id

@TypeDefs(
	TypeDef(name = "json", typeClass = JsonStringType::class),
	TypeDef(name = "jsonb", typeClass = JsonBinaryType::class)
)
@Entity
data class SsmEntity(
	@Id
	val uri: String,
	@Type(type = "jsonb")
	@Column(columnDefinition = "jsonb")
	val ssm: Ssm,
	val channelId: ChannelId,
	val chaincodeId: ChaincodeId,
	val version: SsmVersion?,

)

fun SsmEntity.toSsmEntity() = DataSsm(
	uri = SsmUri(this.uri),
	ssm = this.ssm,
	channel = DataChannel(this.channelId),
	version = this.version
)

fun DataSsm.toDataSsm() = SsmEntity(
	uri = this.uri.uri,
	ssm = this.ssm,
	version = this.version,
	chaincodeId = this.uri.chaincodeId,
	channelId = this.uri.channelId
)
