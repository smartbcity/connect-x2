import { SSM, Session, SessionState} from "./models";
import { request, httpOptions } from "utils"
import { GetSsmSessionListCommand, GetSsmSessionCommand, GetSsmSessionLogListCommand, GetSsmSessionLogCommand, GetSsmCommand} from  "x2-ssm-domain"


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
    const ssms = await fetchCoop<SSM[][]>("getAllSsm") ?? [[]]
    return ssms[0] ?? []
};

const fetchSSM = async (ssmName?: string) => {
    const ssms = await fetchCoop<SSM[]>("getSsm", {ssm: ssmName} as GetSsmCommand) ?? []
    return ssms[0]
};

const fetchSessions = async (ssmName?: string) => {
    const sessions = await fetchCoop<Session[][]>("getAllSessions", {ssm: ssmName} as GetSsmSessionListCommand) ?? [[]]
    return sessions[0] ?? []
};

const fetchSession = async (ssmName: string, sessionId: string) => {
    const session = await fetchCoop<Session[]>("getSession", {sessionId: sessionId, ssm: ssmName} as GetSsmSessionCommand) ?? []
    return session[0]
};


const fetchSessionStates = async (
    ssmName: string,
    sessionId: string
) => {
    const sessionStates = await fetchCoop<SessionState[][]>("getSessionLogs", {sessionId: sessionId, ssm: ssmName} as GetSsmSessionLogListCommand) ?? [[]]
    return sessionStates[0] ?? []
};

const fetchSessionState = async (
    ssmName: string,
    sessionId: string,
    transactionId: string
) => {
    const sessionState = await fetchCoop<SessionState[]>("getOneSessionLog", {txId: transactionId, sessionId: sessionId, ssm: ssmName} as GetSsmSessionLogCommand) ?? []
    return sessionState[0]
};



export const SSMRequester = {
    fetchSSMs: fetchSSMs,
    fetchSSM: fetchSSM,
    fetchSessions: fetchSessions,
    fetchSession: fetchSession,
    fetchSessionStates: fetchSessionStates,
    fetchSessionState: fetchSessionState
};

