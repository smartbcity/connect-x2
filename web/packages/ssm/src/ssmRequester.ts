import { SSM, Session, Transaction} from "./models";
import { request, httpOptions } from "utils"
import {x2} from  "x2-ssm-domain"

export interface GetSsmListCommand extends x2.api.ssm.model.features.GetSsmListCommand {} 
export interface GetSsmSessionListCommand extends x2.api.ssm.model.features.GetSsmSessionListCommand {} 
export interface GetSsmSessionCommand extends x2.api.ssm.model.features.GetSsmSessionCommand {} 

//@ts-ignore
const requestBase = {baseUrl: window._env_.BASE_URL, dbName: "proudhon_ssm"}

const fetchCoop = function <T>(
    location: string,
    body?: string
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
    const ssms = await fetchCoop<SSM[][]>("getAllSsm", JSON.stringify({...requestBase} as GetSsmListCommand)) ?? [[]]
    return ssms[0] ?? []
};

const fetchSessions = async (ssmName?: string) => {
    const sessions = await fetchCoop<Session[][]>("getAllSessions", JSON.stringify({...requestBase, ssm: ssmName} as GetSsmSessionListCommand)) ?? [[]]
    return sessions[0] ?? []
};

const fetchSession = async (sessionId?: string) => {
    const session = await fetchCoop<Session[]>("getAllSessions", JSON.stringify({...requestBase.baseUrl, name: sessionId} as GetSsmSessionCommand)) ?? []
    return session[0]
};


const fetchTransactions = async (
    sessionId: string
) => {
    const transactions = await fetchCoop<Transaction[][]>("", JSON.stringify({...requestBase, sessionId: sessionId})) ?? [[]]
    return transactions[0] ?? []
};


export const SSMRequester = {
    fetchSSMs: fetchSSMs,
    fetchSessions: fetchSessions,
    fetchSession: fetchSession,
    fetchTransactions: fetchTransactions
};

