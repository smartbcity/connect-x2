package x2.api.gateway

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.domain.EntityScan
import org.springframework.boot.runApplication
import org.springframework.context.annotation.ComponentScan
import org.springframework.data.jpa.repository.config.EnableJpaRepositories

@ComponentScan("x2.api")
@EntityScan("x2.api")
@EnableJpaRepositories("x2.api")
@SpringBootApplication(scanBasePackages = ["x2.api"])
class X2Application

fun main(args: Array<String>) {
	runApplication<X2Application>(*args)
}
