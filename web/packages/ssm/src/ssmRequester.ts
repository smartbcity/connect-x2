import { SSM, Session, Transaction} from "./models";
import { request, httpOptions } from "utils"

const dbName = {dbName: "proudhon_ssm"}
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
    const ssms = await fetchCoop<SSM[]>("getAllSsm", JSON.stringify({...dbName}));
    return ssms ?? []
};

const fetchSessions = async (ssmName?: string) => {
    const sessions = await fetchCoop<Session[]>("getAllSessions", JSON.stringify({...dbName, ssm: ssmName}));
    return sessions ?? []
};

const fetchTransactions = (
    sessionId: string
) => {
    return fetchCoop<Transaction[]>("", JSON.stringify({...dbName, sessionId: sessionId}));
};


export const SSMRequester = {
    fetchSSMs: fetchSSMs,
    fetchSessions: fetchSessions,
    fetchTransactions: fetchTransactions
};

