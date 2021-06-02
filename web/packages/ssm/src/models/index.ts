import {x2} from  "x2-ssm-domain"

export interface SSM extends x2.api.ssm.model.Ssm {} 

export interface Transition extends x2.api.ssm.model.SsmTransition {}

export interface Session extends x2.api.ssm.model.SsmSession {}

export interface Transaction extends x2.api.ssm.model.SsmTransaction {}

export interface User extends x2.api.ssm.model.SsmUser {}

//@ts-ignore
export const defaultProtocols: string[] = window._env_.PROTOCOLS

