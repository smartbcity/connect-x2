import { SSM, Session, SessionState} from "./models";
import { request, httpOptions } from "utils"
import {GetSsmListCommand, GetSsmSessionListCommand, GetSsmSessionCommand, GetSsmSessionLogListCommand, GetSsmSessionLogCommand} from  "x2-ssm-domain"

//@ts-ignore
const requestBase = {baseUrl: window._env_.BASE_URL, dbName: "proudhon_ssm"}

const fetchCoop = function <T>(
    location: string,
    body?: object
) {
    //@ts-ignore
    const url = window._env_.COOP_URL
    //@ts-ignore
    const token = window.token
    const options: httpOptions = {
        url: `${url}/api/${location}`,
        method: "POST",
        jwt: token,
        body: body
    }
    return request<T>(options)
};

const fetchSSMs = async () => {
    const ssms = await fetchCoop<SSM[][]>("getAllSsm", {...requestBase} as GetSsmListCommand) ?? [[]]
    return ssms[0] ?? []
};

const fetchSessions = async (ssmName?: string) => {
    const sessions = await fetchCoop<Session[][]>("getAllSessions", {...requestBase, ssm: ssmName} as GetSsmSessionListCommand) ?? [[]]
    return sessions[0] ?? []
};

const fetchSession = async (sessionId: string) => {
    const session = await fetchCoop<Session[]>("getSession", {baseUrl: requestBase.baseUrl, sessionId: sessionId} as GetSsmSessionCommand) ?? []
    return session[0]
};


const fetchSessionStates = async (
    sessionId: string
) => {
    const sessionStates = await fetchCoop<SessionState[][]>("getSessionLogs", {baseUrl: requestBase.baseUrl, sessionId: sessionId} as GetSsmSessionLogListCommand) ?? [[]]
    return sessionStates[0] ?? []
};

const fetchSessionState = async (
    sessionId: string,
    transactionId: string
) => {
    const sessionState = await fetchCoop<SessionState[]>("getOneSessionLog", {baseUrl: requestBase.baseUrl, txId: transactionId, sessionId: sessionId} as GetSsmSessionLogCommand) ?? []
    return sessionState[0]
};



export const SSMRequester = {
    fetchSSMs: fetchSSMs,
    fetchSessions: fetchSessions,
    fetchSession: fetchSession,
    fetchSessionStates: fetchSessionStates,
    fetchSessionState: fetchSessionState
};

