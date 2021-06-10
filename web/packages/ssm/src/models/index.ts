import {x2} from  "x2-ssm-domain"

export interface SSM extends x2.api.ssm.domain.model.TxSsm {} 

export interface Session extends x2.api.ssm.domain.model.TxSsmSession {}

export interface Transaction extends x2.api.ssm.domain.model.TxSsmTransaction {}

export interface User extends x2.api.ssm.domain.model.TxSsmUser {}

//@ts-ignore
export const defaultProtocols: string[] = window._env_.PROTOCOLS

