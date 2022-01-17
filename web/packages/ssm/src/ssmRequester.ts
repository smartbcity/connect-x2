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
            return it.items
        }
    )
};

const fetchSSM = async (ssmUri: SsmUri): Promise<SSM | undefined> => {
    return requestCoop<DataSsmGetQueryDTO, DataSsmGetQueryResultDTO>("getSsm", {ssmUri: {uri:ssmUri} } as DataSsmGetQueryDTO).then(
        it => it.item ?? undefined
    )
};

const fetchSessions = async (ssmUri: SsmUri): Promise<Session[]> => {
    return requestCoop<DataSsmSessionListQueryDTO, DataSsmSessionListQueryResultDTO>("getAllSessions", {ssmUri: {uri:ssmUri} } as DataSsmSessionListQueryDTO).then(
        it => it.items ?? []
    )
};

const fetchSession = async (ssmUri: SsmUri, sessionId: string): Promise<Session | undefined> => {
    return requestCoop<DataSsmSessionGetQueryDTO, DataSsmSessionGetQueryResultDTO>("getSession", {
        sessionName: sessionId,
        ssmUri: {uri:ssmUri}
    } as DataSsmSessionGetQueryDTO).then(
        it => it.item  ?? undefined
    )
};


const fetchSessionStates = async (
    ssmUri: SsmUri,
    sessionId: string
): Promise<SessionState[]> => {
    return requestCoop<DataSsmSessionLogListQueryDTO, DataSsmSessionLogListQueryResultDTO>("getSessionLogs", {
        sessionName: sessionId,
        ssmUri: {uri:ssmUri}
    } as DataSsmSessionLogListQueryDTO).then(
        it => it.items ?? []
    )
};

const fetchSessionState = async (
    ssmUri: SsmUri,
    sessionId: string,
    transactionId: string
): Promise<SessionState | undefined> => {
    return requestCoop<DataSsmSessionLogGetQueryDTO, DataSsmSessionLogGetQueryResultDTO>("getOneSessionLog", {
        txId: transactionId,
        sessionName: sessionId,
        ssmUri: {uri:ssmUri}
    } as DataSsmSessionLogGetQueryDTO).then(
        it => {
            return it.item ?? undefined
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
