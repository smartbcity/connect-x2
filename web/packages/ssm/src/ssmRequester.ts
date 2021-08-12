import {
    GenerateCertificatePdfQuery,
    GenerateCertificatePdfQueryDTO,
    GenerateCertificatePdfResult,
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
import {requestCoop} from "utils";

const fetchSSMs = async (): Promise<SSM[]> => {
    return requestCoop<TxSsmListQueryDTO, TxSsmListQueryResultDTO>("getAllSsm", {} as TxSsmListQueryResultDTO).then(
        it => {
            return it.list
        }
    )
};

const fetchSSM = async (ssmName?: string): Promise<SSM | undefined> => {
    return requestCoop<TxSsmGetQueryDTO, TxSsmGetQueryResultDTO>("getSsm", {ssm: ssmName} as TxSsmGetQueryDTO).then(
        it => it.ssm ?? undefined
    )
};

const fetchSessions = async (ssmName?: string): Promise<Session[]> => {
    return requestCoop<TxSsmSessionListQueryDTO, TxSsmSessionListQueryResultDTO>("getAllSessions", {ssm: ssmName} as TxSsmSessionListQueryDTO).then(
        it => it.list ?? []
    )
};

const fetchSession = async (ssmName: string, sessionId: string): Promise<Session | undefined> => {
    return requestCoop<TxSsmSessionGetQueryDTO, TxSsmSessionGetQueryResultDTO>("getSession", {
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
    return requestCoop<TxSsmSessionLogListQueryDTO, TxSsmSessionLogListQueryResultDTO>("getSessionLogs", {
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
    return requestCoop<TxSsmSessionLogGetQueryDTO, TxSsmSessionLogGetQueryResultDTO>("getOneSessionLog", {
        txId: transactionId,
        sessionId: sessionId,
        ssm: ssmName
    } as TxSsmSessionLogGetQueryDTO).then(
        it => {
            return it.ssmSessionState ?? undefined
        }
    );
}

const fetchSessionState = async (
    ssmName: string,
    sessionId: string,
    transactionId: string
): Promise<SessionState | undefined> => {
    return requestCoop<GenerateCertificatePdfQuery, GenerateCertificatePdfResult>("generateCertificatePdf", {
        certificate:  {
            
        }
    } as GenerateCertificatePdfQueryDTO).then(
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

