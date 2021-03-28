import { SSM, Session, SessionLog, Admin, AdminWithPublicKey, User, UserWithPublicKey, coopUrl } from "./models";
import { request, httpOptions } from "utils";

const fetchCoop = function <T>(
    cmd: String,
    fcn: String,
    args: String
) {
    const options: httpOptions = {
        url: `${coopUrl}?args=${args}&cmd=${cmd}&fcn=${fcn}`,
        method: "GET"
    }
    return request<T>(options)
};

const fetchSSMs = async () => {
    const sessions = await fetchSessions();
    const json = await fetchCoop<string[]>("query", "list", "ssm");
    if (json) {
        const ssms = await Promise.all(json.splice(0, 10).map(name =>  fetchSSM(name, sessions)))
        return ssms.filter(ssm => ssm !== undefined) as SSM[];
    }
    return []
};

const fetchSSM = async (
    ssmName: string,
    sessions: Session[]
) => {
    const ssm = await fetchCoop<SSM>("query", "ssm", ssmName);
    if (ssm) {
        ssm.sessions = sessions.filter(session =>
            ifFromSSM(session, ssm)
        );
        return ssm;
    }
    return
};

const ifFromSSM = (session: Session, ssm: SSM) => {
    return session.ssm === ssm.name;
};

const fetchSessions = async () => {
    const json = await fetchCoop<string[]>("query", "list", "session");
    return json ? Promise.all(json.map(fetchSession)).then((it): Session[] => it.filter((session) => session !== undefined) as Session[]) : []
};

const fetchSession = (session: string) => {
    return fetchCoop<Session>("query", "session", session);
};

const fetchSessionLogs = (
    session: string
) => {
    return fetchCoop<SessionLog[]>("query", "log", session);
};

const fetchUsers = async () => {
    const users = await fetchCoop<string[]>("query", "list", "user")
    if (users) {
        return users.map((user: string): User => ({ name: user }))
    }
    return []
}

const fetchUser = async (
    userName: string
) => {
    return fetchCoop<UserWithPublicKey>("query", "user", userName);
};

const fetchAdmins = async () => {
    const admins = await fetchCoop<string[]>("query", "list", "admin")
    if (admins) {
        return admins.map((raw: string): Admin => ({ name: raw }))
    }
    return []
}

const fetchAdmin = async (
    userName: string
) => {
    return fetchCoop<AdminWithPublicKey>("query", "admin", userName);
};


export const SSMRequester = {
    fetchUsers: fetchUsers,
    fetchUser: fetchUser,
    fetchAdmins: fetchAdmins,
    fetchAdmin: fetchAdmin,
    fetchSSMs: fetchSSMs,
    fetchSSM: fetchSSM,
    fetchSessions: fetchSessions,
    fetchSessionLogs: fetchSessionLogs
};

