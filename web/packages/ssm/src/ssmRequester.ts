import {
    Session,
    SessionState,
    SSM,
    TxSsmGetQueryDTO,
    TxSsmGetQueryResultDTO,
    TxSsmListQueryDTO,
    TxSsmListQueryResultDTO,
    TxSsmSessionGetQueryDTO,
    TxSsmSessionGetQueryResultDTO,
    TxSsmSessionListQueryDTO,
    TxSsmSessionListQueryResultDTO,
    TxSsmSessionLogGetQueryDTO,
    TxSsmSessionLogGetQueryResultDTO,
    TxSsmSessionLogListQueryDTO,
    TxSsmSessionLogListQueryResultDTO
} from "./models";
import {httpOptions, request} from "utils"

const fetchCoop = function <T, R>(
    location: string,
    body?: T
): Promise<R> {
    //@ts-ignore
    const url = window._env_.COOP_URL
    //@ts-ignore
    const token = window.token
    const options: httpOptions = {
        url: `${url}/api/${location}`,
        method: "POST",
        jwt: token,
        body: JSON.stringify(body)
    }
    return request<R[]>(options).then(it => it[0])
};

const fetchSSMs = async (): Promise<SSM[]> => {
    return fetchCoop<TxSsmListQueryDTO, TxSsmListQueryResultDTO>("getAllSsm", {} as TxSsmListQueryResultDTO).then(
        it => {
            return it.list
        }
    )
};

const fetchSSM = async (ssmName?: string): Promise<SSM | undefined> => {
    return fetchCoop<TxSsmGetQueryDTO, TxSsmGetQueryResultDTO>("getSsm", {ssm: ssmName} as TxSsmGetQueryDTO).then(
        it => it.ssm ?? undefined
    )
};

const fetchSessions = async (ssmName?: string): Promise<Session[]> => {
    return fetchCoop<TxSsmSessionListQueryDTO, TxSsmSessionListQueryResultDTO>("getAllSessions", {ssm: ssmName} as TxSsmSessionListQueryDTO).then(
        it => it.list ?? []
    )
};

const fetchSession = async (ssmName: string, sessionId: string): Promise<Session | undefined> => {
    return fetchCoop<TxSsmSessionGetQueryDTO, TxSsmSessionGetQueryResultDTO>("getSession", {
        sessionId: sessionId,
        ssm: ssmName
    } as TxSsmSessionGetQueryDTO).then(
        it => it.session  ?? undefined
    )
};


const fetchSessionStates = async (
    ssmName: string,
    sessionId: string
): Promise<SessionState[]> => {
    return fetchCoop<TxSsmSessionLogListQueryDTO, TxSsmSessionLogListQueryResultDTO>("getSessionLogs", {
        sessionId: sessionId,
        ssm: ssmName
    } as TxSsmSessionLogListQueryDTO).then(
        it => it.list ?? []
    )
};

const fetchSessionState = async (
    ssmName: string,
    sessionId: string,
    transactionId: string
): Promise<SessionState | undefined> => {
    return fetchCoop<TxSsmSessionLogGetQueryDTO, TxSsmSessionLogGetQueryResultDTO>("getOneSessionLog", {
        txId: transactionId,
        sessionId: sessionId,
        ssm: ssmName
    } as TxSsmSessionLogGetQueryDTO).then(
        it => {
            return it.ssmSessionState ?? undefined
        }
    );
}


export const SSMRequester = {
    fetchSSMs: fetchSSMs,
    fetchSSM: fetchSSM,
    fetchSessions: fetchSessions,
    fetchSession: fetchSession,
    fetchSessionStates: fetchSessionStates,
    fetchSessionState: fetchSessionState
};

