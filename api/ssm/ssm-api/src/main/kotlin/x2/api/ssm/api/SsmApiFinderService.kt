package x2.api.ssm.api

import f2.dsl.fnc.F2Function
import f2.dsl.fnc.f2Function
import f2.dsl.fnc.invoke
import org.springframework.context.annotation.Bean
import org.springframework.stereotype.Service
import ssm.tx.dsl.features.query.*

@Service
class SsmApiFinderService(
	private val txSsmListQueryFunction: TxSsmListQueryFunction,
	private val txSsmGetQueryFunction: TxSsmGetQueryFunction,
	private val txSsmSessionListQueryFunction: TxSsmSessionListQueryFunction,
	private val txSsmSessionGetOneQueryFunction: TxSsmSessionGetQueryFunction,
	private val txSsmSessionLogGetQueryFunction: TxSsmSessionLogGetQueryFunction,
	private val txSsmSessionLogListQueryFunction: TxSsmSessionLogListQueryFunction,
) {

	@Bean
	fun getAllSsm(): F2Function<TxSsmListQuery, TxSsmListQueryResultDTO> = f2Function { query ->
		txSsmListQueryFunction(query)
	}

	@Bean
	fun getSsm(): F2Function<TxSsmGetQuery, TxSsmGetQueryResultDTO> = f2Function { query ->
		txSsmGetQueryFunction(query)
	}

	@Bean
	fun getAllSessions(): F2Function<TxSsmSessionListQuery, TxSsmSessionListQueryResultDTO> = f2Function { query ->
		txSsmSessionListQueryFunction(query)
	}

	@Bean
	fun getSession(): F2Function<TxSsmSessionGetQuery, TxSsmSessionGetQueryResultDTO> = f2Function { query ->
		txSsmSessionGetOneQueryFunction(query)
	}

	@Bean
	fun getSessionLogs(): F2Function<TxSsmSessionLogListQuery, TxSsmSessionLogListQueryResultDTO> = f2Function { query ->
		txSsmSessionLogListQueryFunction(query)
	}

	@Bean
	fun getOneSessionLog(): F2Function<TxSsmSessionLogGetQuery, TxSsmSessionLogGetQueryResultDTO> = f2Function { query ->
		txSsmSessionLogGetQueryFunction(query)
	}

}