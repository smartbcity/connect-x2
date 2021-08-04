import {ssm} from "x2-ssm-domain";

export type Transaction = ssm.chaincode.dsl.blockchain.Transaction;
export type Transition = ssm.chaincode.dsl.SsmTransition;
export type Session = ssm.tx.dsl.model.TxSsmSessionDTO;
export type SSM = ssm.tx.dsl.model.TxSsmDTO;
export type SessionState = ssm.tx.dsl.model.TxSsmSessionStateDTO;
export type User = ssm.tx.dsl.model.TxSsmUser;



export type TxSsmListQueryDTO = ssm.tx.dsl.features.query.TxSsmListQueryDTO;
export type TxSsmListQueryResultDTO = ssm.tx.dsl.features.query.TxSsmListQueryResultDTO;

export type TxSsmGetQueryDTO = ssm.tx.dsl.features.query.TxSsmGetQueryDTO;
export type TxSsmGetQueryResultDTO = ssm.tx.dsl.features.query.TxSsmGetQueryResultDTO;


export type TxSsmSessionListQueryDTO = ssm.tx.dsl.features.query.TxSsmSessionListQueryDTO;
export type TxSsmSessionListQueryResultDTO = ssm.tx.dsl.features.query.TxSsmSessionListQueryResultDTO;

export type TxSsmSessionGetQueryDTO = ssm.tx.dsl.features.query.TxSsmSessionGetQueryDTO;
export type TxSsmSessionGetQueryResultDTO = ssm.tx.dsl.features.query.TxSsmSessionGetQueryResultDTO;

export type TxSsmSessionLogListQueryDTO = ssm.tx.dsl.features.query.TxSsmSessionLogListQueryDTO;
export type TxSsmSessionLogListQueryResultDTO = ssm.tx.dsl.features.query.TxSsmSessionLogListQueryResultDTO;

export type TxSsmSessionLogGetQueryDTO = ssm.tx.dsl.features.query.TxSsmSessionLogGetQueryDTO;
export type TxSsmSessionLogGetQueryResultDTO = ssm.tx.dsl.features.query.TxSsmSessionLogGetQueryResultDTO;


//@ts-ignore
export const defaultProtocols: string[] = window._env_.PROTOCOLS

