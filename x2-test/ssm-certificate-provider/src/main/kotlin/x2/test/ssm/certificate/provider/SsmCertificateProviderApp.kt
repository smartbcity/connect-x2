package x2.test.ssm.certificate.provider

import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import f2.dsl.fnc.F2Function
import f2.dsl.fnc.invoke
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.collect
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.runBlocking
import org.springframework.boot.ApplicationRunner
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import ssm.chaincode.dsl.*
import ssm.chaincode.f2.*
import ssm.sdk.sign.crypto.KeyPairReader
import ssm.sdk.sign.model.Signer
import ssm.sdk.sign.model.SignerAdmin
import java.util.*

@SpringBootApplication(scanBasePackages = ["x2.test"])
class SsmCertificateProviderApp

fun main(args: Array<String>) {
	runApplication<SsmCertificateProviderApp>(*args)
}

