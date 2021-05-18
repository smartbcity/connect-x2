export interface SSM {
    name: string
    transitions: Transition[]
    sessions: Session[]
}

export interface Transition {
    from: number
    to: number
    role: string
    action: string
}

export interface Session {
    ssm: string
    session: string
    iteration: number
    current: number
    roles: Object
    origin: Origin
    public: Object
}

export interface Origin {
    from: number
    to: number
    role: string
    action: string
}

export interface SessionLog {
    txId: string
    state: Session
}


export interface Agent {
    name: string;
    pub?: string;
}

export interface AgentWithPublicKey extends Agent {
    pub: string;
}

export interface Admin extends Agent {
}

export interface AdminWithPublicKey extends Admin, AgentWithPublicKey {
    pub: string;
}

export interface User extends Agent {
}

export interface UserWithPublicKey extends User, AgentWithPublicKey {
    pub: string;
}

//@ts-ignore
export const defaultProtocols: string[] = window._env_.PROTOCOLS

