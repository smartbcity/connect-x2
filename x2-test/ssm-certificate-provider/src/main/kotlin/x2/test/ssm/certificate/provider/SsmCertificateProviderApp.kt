package x2.test.ssm.certificate.provider

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication(scanBasePackages = ["x2.test"])
class SsmCertificateProviderApp

fun main(args: Array<String>) {
	runApplication<SsmCertificateProviderApp>(*args)
}

