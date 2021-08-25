package x2.api.config

import ssm.tx.dsl.config.TxSsmLocationProperties
import ssm.tx.dsl.features.query.SsmName
import ssm.tx.dsl.model.SsmVersion

typealias SsmMetadataMap = Map<SsmName, Map<SsmVersion, TxSsmLocationProperties>>

