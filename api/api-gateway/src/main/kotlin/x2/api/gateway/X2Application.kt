package x2.api.gateway

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication(scanBasePackages = ["x2.api"])
class X2Application

fun main(args: Array<String>) {
	runApplication<X2Application>(*args)
}
