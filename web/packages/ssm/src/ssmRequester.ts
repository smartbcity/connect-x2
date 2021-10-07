import {
    GenerateCertificatePdfQuery,
    GenerateCertificatePdfResult,
    Session,
    SessionState,
    SSM,
    DataSsmGetQueryDTO,
    DataSsmGetQueryResultDTO,
    DataSsmListQueryDTO,
    DataSsmListQueryResultDTO,
    DataSsmSessionGetQueryDTO,
    DataSsmSessionGetQueryResultDTO,
    DataSsmSessionListQueryDTO,
    DataSsmSessionListQueryResultDTO,
    DataSsmSessionLogGetQueryDTO,
    DataSsmSessionLogGetQueryResultDTO,
    DataSsmSessionLogListQueryDTO,
    DataSsmSessionLogListQueryResultDTO,
    GenerateCertificateFromSessionStateQuery,
    GenerateCertificateFromSessionStateResult,
    CanGenerateCertificateQuery,
    CanGenerateCertificateResult, SsmUri
} from "./models";
import {requestCoop, requestCoops} from "utils";

const fetchSSMs = async (): Promise<SSM[]> => {
    return requestCoop<DataSsmListQueryDTO, DataSsmListQueryResultDTO>("getAllSsm", {} as DataSsmListQueryResultDTO).then(
        it => {
            return it.list
        }
    )
};

const fetchSSM = async (ssm: SsmUri): Promise<SSM | undefined> => {
    return requestCoop<DataSsmGetQueryDTO, DataSsmGetQueryResultDTO>("getSsm", {ssm: ssm} as DataSsmGetQueryDTO).then(
        it => it.ssm ?? undefined
    )
};

const fetchSessions = async (ssm: SsmUri): Promise<Session[]> => {
    return requestCoop<DataSsmSessionListQueryDTO, DataSsmSessionListQueryResultDTO>("getAllSessions", {ssm: ssm} as DataSsmSessionListQueryDTO).then(
        it => it.list ?? []
    )
};

const fetchSession = async (ssm: SsmUri, sessionId: string): Promise<Session | undefined> => {
    return requestCoop<DataSsmSessionGetQueryDTO, DataSsmSessionGetQueryResultDTO>("getSession", {
        sessionId: sessionId,
        ssm: ssm
    } as DataSsmSessionGetQueryDTO).then(
        it => it.session  ?? undefined
    )
};


const fetchSessionStates = async (
    ssm: SsmUri,
    sessionId: string
): Promise<SessionState[]> => {
    return requestCoop<DataSsmSessionLogListQueryDTO, DataSsmSessionLogListQueryResultDTO>("getSessionLogs", {
        sessionId: sessionId,
        ssm: ssm
    } as DataSsmSessionLogListQueryDTO).then(
        it => it.list ?? []
    )
};

const fetchSessionState = async (
    ssm: SsmUri,
    sessionId: string,
    transactionId: string
): Promise<SessionState | undefined> => {
    return requestCoop<DataSsmSessionLogGetQueryDTO, DataSsmSessionLogGetQueryResultDTO>("getOneSessionLog", {
        txId: transactionId,
        sessionId: sessionId,
        ssm: ssm
    } as DataSsmSessionLogGetQueryDTO).then(
        it => {
            return it.ssmSessionState ?? undefined
        }
    );
}

const generateCertificatePdf = async (
    query: GenerateCertificatePdfQuery
): Promise<string | undefined> => {
    return requestCoop<GenerateCertificatePdfQuery, GenerateCertificatePdfResult>("generateCertificate", query).then(
        it => {
            return it.base64Document ?? undefined
        }
    );
}

const generateCertificateFromSessionState = async (
    query: GenerateCertificateFromSessionStateQuery
): Promise<string | undefined> => {
    return requestCoop<GenerateCertificateFromSessionStateQuery, GenerateCertificateFromSessionStateResult>("generateCertificateFromSessionState", query).then(
        it => {
            return it.base64Document ?? undefined
        }
    );
}

const CanGenerateCertificate = async (
    query: CanGenerateCertificateQuery
): Promise<boolean | undefined> => {
    return requestCoop<CanGenerateCertificateQuery, CanGenerateCertificateResult>("canGenerateCertificate", query).then(
        it => {
            return it.canGenerateCertificate ?? undefined
        }
    );
}

const CanGenerateCertificates = async (
    queries: CanGenerateCertificateQuery[]
) => {
    return requestCoops<CanGenerateCertificateQuery[], CanGenerateCertificateResult>("canGenerateCertificate", queries)
}


export const SSMRequester = {
    fetchSSMs: fetchSSMs,
    fetchSSM: fetchSSM,
    fetchSessions: fetchSessions,
    fetchSession: fetchSession,
    fetchSessionStates: fetchSessionStates,
    fetchSessionState: fetchSessionState,
    generateCertificatePdf: generateCertificatePdf,
    generateCertificateFromSessionState: generateCertificateFromSessionState,
    CanGenerateCertificate: CanGenerateCertificate,
    CanGenerateCertificates: CanGenerateCertificates
};

