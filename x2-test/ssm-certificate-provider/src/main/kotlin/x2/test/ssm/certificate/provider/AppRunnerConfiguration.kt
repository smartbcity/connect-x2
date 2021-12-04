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
import ssm.chaincode.dsl.model.Ssm
import ssm.chaincode.dsl.model.SsmContext
import ssm.chaincode.dsl.model.SsmSession
import ssm.chaincode.dsl.model.SsmTransition
import ssm.sdk.sign.crypto.KeyPairReader
import ssm.sdk.sign.extention.loadFromFile
import ssm.sdk.sign.model.Signer
import ssm.sdk.sign.model.SignerAdmin
import ssm.sdk.sign.model.SignerUser
import ssm.tx.dsl.features.ssm.SsmCreateCommand
import ssm.tx.dsl.features.ssm.SsmSessionPerformActionCommand
import ssm.tx.dsl.features.ssm.SsmSessionPerformActionResult
import ssm.tx.dsl.features.ssm.SsmSessionStartCommand
import ssm.tx.dsl.features.ssm.SsmSessionStartResult
import ssm.tx.dsl.features.ssm.SsmTxCreateFunction
import ssm.tx.dsl.features.ssm.SsmTxSessionPerformActionFunction
import ssm.tx.dsl.features.ssm.SsmTxSessionStartFunction
import java.util.UUID


@Configuration
class AppRunnerConfiguration {

	@Value("\${x2.test.ssm.certificate.url}")
	var url: String = ""

	@Value("\${x2.test.ssm.certificate.chaincodeId}")
	var chaincode: String = ""

	@Value("\${x2.test.ssm.certificate.channelId}")
	var channel: String = ""

	@Value("\${x2.test.ssm.admin.name}")
	var adminName: String = ""

	@Value("\${x2.test.ssm.admin.key}")
	var adminKey: String = ""

	@Value("\${x2.test.ssm.agent.name}")
	var agentName: String = ""

	@Value("\${x2.test.ssm.agent.key}")
	var agentKey: String = ""

	@Bean
	fun dataGenerator(
		ssmCreateFunction: SsmTxCreateFunction,
		ssmSessionPerformActionFunction: SsmTxSessionPerformActionFunction,
		ssmSessionStartFunction: SsmTxSessionStartFunction
	) = ApplicationRunner {
		runBlocking {
			val adminSigner = SignerAdmin.loadFromFile(adminName, adminKey)
			val agent = Agent.loadFromFile(agentName, agentKey)
			val agentSigner = SignerUser.loadFromFile(agentName, agentKey)

			(0..5).asFlow().map { iteration ->
				val ssmName = "Certificates"
				val sessionName = "certificates-session-${iteration}-${UUID.randomUUID()}"
				createSsm(ssmCreateFunction, signerName = agent, ssmName = ssmName)
				startSession(ssmSessionStartFunction, signerName = agent, ssmName, sessionName)
				performTransaction(ssmSessionPerformActionFunction, agentSigner, sessionName)
			}.collect()
		}

	}

	private suspend fun performTransaction(
		ssmSessionPerformActionFunction: F2Function<SsmSessionPerformActionCommand, SsmSessionPerformActionResult>,
		agentSigner: Signer,
		sessionName: String,
	) {
		(0..5).map { iteration ->
			val cmd = SsmSessionPerformActionCommand(
				action = "transaction",
				context = SsmContext(
					session = sessionName,
					public = getPublic(),
					iteration = iteration,
				),
				signerName = agentSigner.name
			)
			ssmSessionPerformActionFunction.invoke(cmd)
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

	private suspend fun startSession(
		ssmSessionStartFunction: F2Function<SsmSessionStartCommand, SsmSessionStartResult>,
		signerName: Agent,
		ssmName: String,
		sessionName: String
	) {
		val session = SsmSession(
			ssm = ssmName,
			session = sessionName,
			roles = mapOf(signerName.name to "Agent"),
			public = "This is not a Certificate",
		)
		val cmd = SsmSessionStartCommand(
			session = session,
			signerName = signerName.name
		)
		ssmSessionStartFunction(cmd)
	}

	private suspend fun createSsm(
		ssmCreateFunction: SsmTxCreateFunction,
		signerName: Agent,
		ssmName: String
	) {
		val first = SsmTransition(0, 0, "Agent", "transaction")
		val ssm = Ssm(ssmName, listOf(first))

		ssmCreateFunction.invoke(
			SsmCreateCommand(
				ssm = ssm,
				signerName = signerName.name
			)
		)
	}
}
