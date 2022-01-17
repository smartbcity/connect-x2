package x2.test.ssm.certificate.provider

import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import f2.dsl.fnc.F2Function
import f2.dsl.fnc.invoke
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.collect
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.runBlocking
import org.springframework.beans.factory.annotation.Value
import org.springframework.boot.ApplicationRunner
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import ssm.chaincode.dsl.model.Agent
import ssm.chaincode.dsl.model.SessionName
import ssm.chaincode.dsl.model.Ssm
import ssm.chaincode.dsl.model.SsmContext
import ssm.chaincode.dsl.model.SsmName
import ssm.chaincode.dsl.model.SsmSession
import ssm.chaincode.dsl.model.SsmTransition
import ssm.sdk.sign.extention.loadFromFile
import ssm.sdk.sign.model.SignerUser
import ssm.tx.dsl.features.ssm.SsmInitCommand
import ssm.tx.dsl.features.ssm.SsmSessionPerformActionCommand
import ssm.tx.dsl.features.ssm.SsmSessionPerformActionResult
import ssm.tx.dsl.features.ssm.SsmSessionStartCommand
import ssm.tx.dsl.features.ssm.SsmSessionStartResult
import ssm.tx.dsl.features.ssm.SsmTxCreateFunction
import ssm.tx.dsl.features.ssm.SsmTxInitFunction
import ssm.tx.dsl.features.ssm.SsmTxSessionPerformActionFunction
import ssm.tx.dsl.features.ssm.SsmTxSessionStartFunction
import java.util.UUID

@Configuration
class AppRunnerConfiguration {

	companion object {
		const val TRANSACTION_NAME = "transaction"
		const val ROLE = "agent"
		const val CERTIFICATES = "certificates"
	}

	@Value("\${x2.test.ssm.certificate.chaincodeId}")
	var chaincode: String = ""

	@Value("\${x2.test.ssm.agent.name}")
	var agentName: String = ""

	@Value("\${x2.test.ssm.agent.key}")
	var agentKey: String = ""

	@Bean
	fun dataGenerator(
		ssmCreateFunction: SsmTxCreateFunction,
		ssmSessionPerformActionFunction: SsmTxSessionPerformActionFunction,
		ssmSessionStartFunction: SsmTxSessionStartFunction,
		ssmTxInitFunction: SsmTxInitFunction
	) = ApplicationRunner {
		runBlocking {
			val agent = Agent.loadFromFile(agentName, agentKey)
			val agentSigner = SignerUser.loadFromFile(agentName, agentKey)
			(0..5).asFlow().map { iteration ->
				val ssmName = CERTIFICATES
				val sessionName = "certificates-session-$iteration-${UUID.randomUUID()}"
				ssmTxInitFunction.init(signerName = agent, ssmName= ssmName)
				ssmSessionStartFunction.startSession(signerName = agent, ssmName = ssmName, sessionName = sessionName)
				ssmSessionPerformActionFunction.performTransaction(signerName = agent, sessionName = sessionName)
			}.collect()
		}
	}

	private suspend fun F2Function<SsmSessionPerformActionCommand, SsmSessionPerformActionResult>.performTransaction(
		signerName: Agent,
		sessionName: SessionName,
	) {
		(0..5).map { iteration ->
			val cmd = SsmSessionPerformActionCommand(
				action = TRANSACTION_NAME,
				context = SsmContext(
					session = sessionName,
					public = getPublic(),
					iteration = iteration,
				),
				signerName = signerName.name
			)
			invoke(cmd)
		}
	}

	private fun getPublic(): String {
		val isEvent = (0..10).random() % 2 == 0
		val isEventSecond = (0..10).random() % 2 == 0
		return if (isEvent) {
			val certificate = if (isEventSecond) {
				DataTest.certificateCredentials()
			} else {
				DataTest.certificate2()
			}
			jacksonObjectMapper().writeValueAsString(certificate)
		} else {
			"This is not a certificate"
		}

	}

	private suspend fun F2Function<SsmSessionStartCommand, SsmSessionStartResult>.startSession(
		signerName: Agent,
		ssmName: SsmName,
		sessionName: SessionName
	) {
		val session = SsmSession(
			ssm = ssmName,
			session = sessionName,
			roles = mapOf(signerName.name to ROLE),
			public = "This is not a Certificate",
		)
		val cmd = SsmSessionStartCommand(
			session = session,
			signerName = signerName.name
		)
		invoke(cmd)
	}

	private fun getSsm(ssmName: SsmName): Ssm {
		val first = SsmTransition(0, 0, ROLE, TRANSACTION_NAME)
		val ssm = Ssm(ssmName, listOf(first))
		return ssm
	}

	private suspend fun SsmTxInitFunction.init(
		signerName: Agent,
		ssmName: SsmName
	) {
		val ssm = getSsm(ssmName)
		invoke(
			SsmInitCommand(
				signerName = signerName.name,
				agent = signerName,
				ssm = ssm
			)
		)
	}
}
