package x2.api.config

import org.springframework.boot.context.properties.ConstructorBinding

@ConstructorBinding
data class SsmLocationProperties(
    val baseUrl: String,
    val channel: String,
    val chaincode: String,
    val couchdb: String,
    val dbName: String
)
