import {
    CanGenerateCertificateQuery,
    CanGenerateCertificateResult,
    CellDTO, DataSsmGetQueryDTO, DataSsmGetQueryResultDTO,
    DataSsmSessionGetQueryDTO,
    DataSsmSessionGetQueryResultDTO,
    DataSsmSessionLogGetQueryDTO,
    DataSsmSessionLogGetQueryResultDTO,
    DataSsmSessionLogListQueryDTO,
    DataSsmSessionLogListQueryResultDTO,
    GenerateCertificateFromSessionStateQuery,
    GenerateCertificateFromSessionStateResult,
    GenerateCertificatePdfQuery,
    GenerateCertificatePdfResult,
    Protocol,
    ProtocoleFilterDTO,
    ProtocolName,
    Session, SessionName,
    SessionState, SSM,
    SsmUriDTO,
    X2ProtocolsListQueryResultDTO,
    X2SessionPageQueryDTO,
    X2SessionPageQueryResultDTO,
    X2SessionPerStateStatsResultDTO,
    X2SessionStatePerIntervalStatsResultDTO,
} from "./models";

import {requestCoop, requestCoops} from "utils";

const getAllProtocols = async (): Promise<Protocol[]> => {
    return requestCoop<{}, X2ProtocolsListQueryResultDTO>("getAllProtocols", {}).then(
        it => {
            return it.items
        }
    )
};

const fetchSsm = async (ssmUri: SsmUriDTO): Promise<SSM | undefined> => {
    return requestCoop<DataSsmGetQueryDTO, DataSsmGetQueryResultDTO>("getSsm", {ssmUri: ssmUri } as DataSsmGetQueryDTO).then(
        it => it.item ?? undefined
    )
};

const fetchSessions = async (protocolName: ProtocolName): Promise<Session[]> => {
    const filter = buildFilter(protocolName)
    return requestCoop<X2SessionPageQueryDTO, X2SessionPageQueryResultDTO>("sessionsPage", {filter: filter, pagination: null} as X2SessionPageQueryDTO).then(
        it => it.items ?? []
    )
};

const fetchSession = async (ssmUri: SsmUriDTO, sessionName: SessionName): Promise<Session | undefined> => {
    return requestCoop<DataSsmSessionGetQueryDTO, DataSsmSessionGetQueryResultDTO>("getSession", {
        sessionName: sessionName,
        ssmUri: ssmUri
    } as DataSsmSessionGetQueryDTO).then(
        it => it.item ?? undefined
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
    protocol: string,
    ssmUri?: string,
    channels?: string[],
    steps?: number[],
    engine?: string[],
    from?: number,
    to?: number
): Promise<CellDTO<number>[]> => {
    const filter = buildFilter(
        protocol,
        ssmUri,
        channels,
        steps,
        engine,
        from,
        to,
    )
    return requestCoop<X2SessionPageQueryDTO, X2SessionPerStateStatsResultDTO>("sessionPerStateStats", {
        filter: filter,
        pagination: null
    } as X2SessionPageQueryDTO).then(
        it => it.data ?? []
    )
};

const fetchSessionStatePerInterval = async (
    protocol: string,
    ssmUri?: string,
    channels?: string[],
    steps?: number[],
    engine?: string[],
    from?: number,
    to?: number
): Promise<CellDTO<number[]>[]> => {
    const filter = buildFilter(
        protocol,
        ssmUri,
        channels,
        steps,
        engine,
        from,
        to,
    )
    return requestCoop<X2SessionPageQueryDTO, X2SessionStatePerIntervalStatsResultDTO>("sessionStatePerInterval", {
        filter: filter,
        pagination: null,
    } as X2SessionPageQueryDTO).then(
        it => it.data ?? []
    )
};

const buildFilter = (
    protocol: string,
    ssmUri?: string,
    channels?: string[],
    steps?: number[],
    engine?: string[],
    from?: number,
    to?: number
): ProtocoleFilterDTO => {
    // @ts-ignore
    return {
        protocol: protocol,
        ssmUri: ssmUri,
        to: to,
        from: from,
        channels: !!channels ? emptyToNull(channels) : null,
        engines: !!engine ? emptyToNull(engine) : null,
        steps: !!emptyToNull(steps || []) ? new Int32Array(steps!!) : null,
    }
}

const emptyToNull = <T> (t: T[]): T[] | null => {
    if(t.length == 0){
        return null
    } else {
        return t
    }
}


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

const fetchProtocolsAsync = async (setProtocol: (protocols: Map<ProtocolName, Protocol>) => void) => {
    const ssmMap = new Map<ProtocolName, Protocol>()
    const protocols = await SSMRequester.getAllProtocols()
    protocols.forEach((protocol) => {
        ssmMap.set(protocol.name, protocol)
    })
    setProtocol(ssmMap)
}


export const SSMRequester = {
    getAllProtocols: getAllProtocols,
    fetchProtocolsAsync: fetchProtocolsAsync,
    // fetchSSMs: fetchSSMs,
    // fetchSSMsAsync: fetchSSMsAsync,
    fetchSsm: fetchSsm,
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
