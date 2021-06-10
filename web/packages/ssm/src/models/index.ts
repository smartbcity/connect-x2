import {TxSsm, TxSsmSession, TxSsmSessionState, TxSsmUser, ssm} from  "x2-ssm-domain"

export interface SSM extends TxSsm {} 

export interface Session extends TxSsmSession {}

export interface SessionState extends TxSsmSessionState {}

export interface User extends TxSsmUser {}

export interface Transaction extends ssm.dsl.blockchain.Transaction {}

export interface Transition extends ssm.dsl.SsmTransition {}


//@ts-ignore
export const defaultProtocols: string[] = window._env_.PROTOCOLS

