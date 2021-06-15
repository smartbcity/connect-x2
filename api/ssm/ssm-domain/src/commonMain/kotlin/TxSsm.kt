import ssm.dsl.Ssm
import kotlin.js.JsExport
import kotlin.js.JsName

@JsExport
@JsName("TxSsm")
interface TxSsm {
    val ssm: Ssm
    val channel: TxChannel
    val version: String
}

@JsExport
@JsName("TxSsmBase")
class TxSsmBase(
    override val ssm: Ssm,
    override val channel: TxChannelBase,
    override val version: String
): TxSsm