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
import ssm.chaincode.dsl.model.Ssm
import ssm.chaincode.dsl.model.SsmAgent
import ssm.chaincode.dsl.model.SsmContext
import ssm.chaincode.dsl.model.SsmSession
import ssm.chaincode.dsl.model.SsmTransition
import ssm.chaincode.f2.SsmCreateCommand
import ssm.chaincode.f2.SsmCreateFunction
import ssm.chaincode.f2.SsmSessionPerformActionCommand
import ssm.chaincode.f2.SsmSessionPerformActionFunction
import ssm.chaincode.f2.SsmSessionPerformActionResult
import ssm.chaincode.f2.SsmSessionStartCommand
import ssm.chaincode.f2.SsmSessionStartFunction
import ssm.chaincode.f2.SsmSessionStartResult
import ssm.sdk.sign.crypto.KeyPairReader
import ssm.sdk.sign.model.Signer
import ssm.sdk.sign.model.SignerAdmin
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
		ssmCreateFunction: SsmCreateFunction,
		ssmSessionPerformActionFunction: SsmSessionPerformActionFunction,
		ssmSessionStartFunction: SsmSessionStartFunction
	) = ApplicationRunner {
		runBlocking {
			val adminSigner = SignerAdmin.loadFromFile(adminName, adminKey)
			val agent = loadFromFile(agentName, agentKey)
			val agentSigner = Signer.loadFromFile(agentName, agentKey)

			(0..5).asFlow().map { iteration ->
				val ssmName = "certificate"
				val sessionName = "certificate-session-${iteration}-${UUID.randomUUID()}"
				createSsm(ssmCreateFunction, adminSigner, agent, ssmName = ssmName)
				startSession(ssmSessionStartFunction, adminSigner, agent, ssmName, sessionName)
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
				bearerToken = null,
				signer = agentSigner,
				context = SsmContext(
					session = sessionName,
					public = getPublic(),
					iteration = iteration,
				)
			)
			ssmSessionPerformActionFunction.invoke(cmd)
		}
	}

	private fun getPublic(): String {
		val isEvent = (0..10).random() % 2 == 0
		val isEventSecond = (0..10).random() % 2 == 0
		return if(isEvent) {
			val certificate = if(isEventSecond) {
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
		adminSigner: SignerAdmin,
		agentSigner: SsmAgent,
		ssmName: String,
		sessionName: String
	) {
		val session = SsmSession(
			ssm = ssmName,
			session = sessionName,
			roles = mapOf(agentSigner.name to "Agent"),
			public = "This is not a Certificate",
		)
		val cmd = SsmSessionStartCommand(
			bearerToken = null,
//			chaincode = SsmChaincodeProperties(
//				chaincodeId = chaincode,
//				channelId = channel,
//				baseUrl = url,
//			),
			session = session,
			signerAdmin = adminSigner
		)
		ssmSessionStartFunction(cmd)
	}

	private suspend fun createSsm(
		ssmCreateFunction: SsmCreateFunction,
		adminSigner: SignerAdmin,
		agentSigner: SsmAgent,
		ssmName: String
	) {
		val first = SsmTransition(0, 0, "Agent", "transaction")
		val ssm = Ssm(ssmName, listOf(first))

		ssmCreateFunction.invoke(
			SsmCreateCommand(
			signerAdmin = adminSigner,
			ssm = ssm,
			agent = agentSigner,
//			chaincode = SsmChaincodeProperties(
//				chaincodeId = chaincode,
//				channelId = channel,
//				baseUrl = url,
//			),
			bearerToken = null
		)
		)
	}

	@Throws(Exception::class)
	fun loadFromFile(name: String, filename: String): SsmAgent {
		val pub = KeyPairReader.loadPublicKey(filename)
		return SsmAgent(name, pub.encoded)
	}
}
