import { SSM, Session, SessionLog, Admin, AdminWithPublicKey, User, UserWithPublicKey, coopUrl } from "./models";
import { request, httpOptions } from "utils";

export const fetchCoop = function<T>(
    cmd: String,
    fcn: String,
    args: String
): Promise<T> {
    const options : httpOptions = {
        url: `${coopUrl}?args=${args}&cmd=${cmd}&fcn=${fcn}`,
        method: "GET",
        errorHandler: (error) => console.log(error)
    }
    return request<T>(options)
};

export const fetchSSMs = async () => {
    const sessions = await fetchSessions();
    const json = await fetchCoop<string[]>("query", "list", "ssm");
    const ssms = json.map(name => fetchSSM(name, sessions));
    return Promise.all(ssms);
};

export const fetchSSM = async (
    machineName: string,
    sessions: Session[]
) => {
    const machine = await fetchCoop<SSM>("query", "ssm", machineName);
    machine.sessions = sessions.filter(session =>
        ifFromSSM(session, machine)
    );
    return machine;
};

export const ifFromSSM = (session: Session, machine: SSM) => {
    return session.ssm === machine.name;
};

export const fetchSessions = async () => {
    const json: string[] = await fetchCoop("query", "list", "session");
    return Promise.all(json.filter(Boolean).map(fetchSession)).then(it => it.filter(Boolean));
};

export const fetchSession = (session: string) => {
    return fetchCoop<Session>("query", "session", session);
};

export const fetchSessionLogs = (
    session: string
) => {
    return fetchCoop<SessionLog[]>("query", "log", session);
};

export const fetchUsers = async () =>
    fetchCoop<string[]>("query", "list", "user").then((raws: string[]) =>
        raws.map((raw: string): User => ({name: raw}))
    );

export const fetchUser = async (
    userName: string
) => {
    return fetchCoop<UserWithPublicKey>("query", "user", userName);
};

export const fetchAdmins = () => {
    return fetchCoop<string[]>("query", "list", "admin").then((raws: string[]) => 
        raws.map((raw: string): Admin => ({name: raw}))
    );
}

export const fetchAdmin = async (
    userName: string
) => {
    return fetchCoop<AdminWithPublicKey>("query", "admin", userName);
};


const SSMRequester = {
    fetchUsers: fetchUsers,
    fetchUser: fetchUser,
    fetchAdmins: fetchAdmins,
    fetchAdmin: fetchAdmins,
    fetchSSMs: fetchSSMs,
    fetchSessions: fetchSessions
};

export default SSMRequester;
