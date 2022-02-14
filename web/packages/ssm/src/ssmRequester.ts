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
    CanGenerateCertificateResult, SsmUriDTO, defaultProtocols, X2SessionPageQueryDTO, X2SessionPerStateStatsResultDTO,
    X2SessionStatePerIntervalStatsResultDTO,
    CellDTO
} from "./models";

import {requestCoop, requestCoops} from "utils";

const fetchSSMs = async (): Promise<SSM[]> => {
    return requestCoop<DataSsmListQueryDTO, DataSsmListQueryResultDTO>("getAllSsm", {} as DataSsmListQueryResultDTO).then(
        it => {
            return it.items
        }
    )
};

const fetchSSM = async (ssmUri: SsmUriDTO): Promise<SSM | undefined> => {
    return requestCoop<DataSsmGetQueryDTO, DataSsmGetQueryResultDTO>("getSsm", {ssmUri: ssmUri } as DataSsmGetQueryDTO).then(
        it => it.item ?? undefined
    )
};

const fetchSessions = async (ssmUri: SsmUriDTO): Promise<Session[]> => {
    return requestCoop<DataSsmSessionListQueryDTO, DataSsmSessionListQueryResultDTO>("getAllSessions", {ssmUri: ssmUri } as DataSsmSessionListQueryDTO).then(
        it => it.items ?? []
    )
};

const fetchSession = async (ssmUri: SsmUriDTO, sessionId: string): Promise<Session | undefined> => {
    return requestCoop<DataSsmSessionGetQueryDTO, DataSsmSessionGetQueryResultDTO>("getSession", {
        sessionName: sessionId,
        ssmUri: ssmUri
    } as DataSsmSessionGetQueryDTO).then(
        it => it.item  ?? undefined
    )
};


const fetchSessionStates = async (
    ssmUri: SsmUriDTO,
    sessionId: string
): Promise<SessionState[]> => {
    return requestCoop<DataSsmSessionLogListQueryDTO, DataSsmSessionLogListQueryResultDTO>("getSessionLogs", {
        sessionName: sessionId,
        ssmUri: ssmUri
    } as DataSsmSessionLogListQueryDTO).then(
        it => it.items ?? []
    )
};

const fetchSessionStatesPerStates = async (
    ssmUri: SsmUriDTO,
    channel: string[] = [],
    currentStep: string[] = [],
    engine: string[] = [],
    from?: number,
    to?: number
): Promise<CellDTO[]> => {
    return requestCoop<X2SessionPageQueryDTO, X2SessionPerStateStatsResultDTO>("sessionPerStateStats", 
    //@ts-ignore
    {
        ssmUri: ssmUri.uri, 
        channel: channel,
        currentStep: currentStep,
        engine: engine,
        from: from,
        to: to,
    } as X2SessionPageQueryDTO).then(
        it => it.data ?? []
    )
};

const fetchSessionStatePerInterval = async (
    ssmUri: SsmUriDTO,
    channel: string[] = [],
    currentStep: string[] = [],
    engine: string[] = [],
    from?: number,
    to?: number
): Promise<CellDTO[]> => {
    return requestCoop<X2SessionPageQueryDTO, X2SessionStatePerIntervalStatsResultDTO>("sessionStatePerInterval", 
    //@ts-ignore
    {
        ssmUri: ssmUri.uri, 
        channel: channel,
        currentStep: currentStep,
        engine: engine,
        from: from,
        to: to,
    } as X2SessionPageQueryDTO).then(
        it => it.data ?? []
    )
};

const fetchSessionState = async (
    ssmUri: SsmUriDTO,
    sessionId: string,
    transactionId: string
): Promise<SessionState | undefined> => {
    return requestCoop<DataSsmSessionLogGetQueryDTO, DataSsmSessionLogGetQueryResultDTO>("getOneSessionLog", {
        txId: transactionId,
        sessionName: sessionId,
        ssmUri: ssmUri
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

const fetchSSMsAsync = async (setSsmList: (ssmList: Map<SsmUriDTO, SSM>) => void) => {
    const ssmMap = new Map<SsmUriDTO, SSM>()
    const ssms = await SSMRequester.fetchSSMs()
    if (defaultProtocols && defaultProtocols.length > 0) {
        ssms.forEach((ssm) => {
            if (defaultProtocols.includes(ssm.ssm.name)) {
                ssmMap.set(ssm.uri, ssm)
            }
        })
    } else {
        ssms.forEach((ssm) => {
            ssmMap.set(ssm.uri, ssm)
        })
    }
    setSsmList(ssmMap)
}


export const SSMRequester = {
    fetchSSMs: fetchSSMs,
    fetchSSMsAsync: fetchSSMsAsync,
    fetchSSM: fetchSSM,
    fetchSessions: fetchSessions,
    fetchSession: fetchSession,
    fetchSessionStates: fetchSessionStates,
    fetchSessionState: fetchSessionState,
    fetchSessionStatesPerStates: fetchSessionStatesPerStates,
    fetchSessionStatePerInterval: fetchSessionStatePerInterval,
    generateCertificatePdf: generateCertificatePdf,
    generateCertificateFromSessionState: generateCertificateFromSessionState,
    CanGenerateCertificate: CanGenerateCertificate,
    CanGenerateCertificates: CanGenerateCertificates
};
