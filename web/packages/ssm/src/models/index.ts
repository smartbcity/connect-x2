import {x2 as x2Ssm} from "x2-ssm-domain";
import {ssm, x2} from "x2-certificate-domain";
import { useMemo } from "react";

export type TransactionDTO = ssm.chaincode.dsl.blockchain.TransactionDTO;
export type Transition = ssm.chaincode.dsl.model.SsmTransition;
export type SsmTransitionDTO = ssm.chaincode.dsl.model.SsmTransitionDTO;
export type Session = ssm.data.dsl.model.DataSsmSessionDTO;
export type SSM = ssm.data.dsl.model.DataSsmDTO;
export type SessionState = ssm.data.dsl.model.DataSsmSessionStateDTO;
export type User = ssm.data.dsl.model.DataSsmUser;
export type SsmUri = ssm.chaincode.dsl.model.uri.SsmUri;
export type SsmPath = string;

export interface SsmUriDTO {
    readonly uri: SsmPath
}

// export class SsmUriObj extends ssm.chaincode.dsl.model.uri.SsmUri {}
export interface SsmUriObj {
    readonly channelId: string;
    readonly chaincodeId: string;
    readonly ssmName: string;
}

// export type SsmUriDto = ssm.chaincode.dsl.model.uri.SsmUriDTO;
export const burst = (ssmUri: SsmUriDTO): SsmUriObj => {
    const values = ssmUri.uri.replace("ssm:", "").split(":")
    return {
        channelId: values[0],
        chaincodeId: values[1],
        ssmName: values[2]
    }
}

// export type SsmUriDto = ssm.chaincode.dsl.model.uri.SsmUriDTO;
export const toUrlPath = (ssmUri: SsmUriDTO): string => {
    const values = burst(ssmUri)
    return `${values.channelId}/${values.chaincodeId}/${values.ssmName}`
}

export const useSsmUri = (ssmUri: SsmUriDTO): {uri: SsmUriObj, path: string} => {
    return useMemo(() => {
        const values = burst(ssmUri)
        return {
            uri: values,
            path: `${values.channelId}/${values.chaincodeId}/${values.ssmName}`
        }
    }, [ssmUri])
}

export type SsmName = string;
export type SessionName = string;
export type ChannelId = string;
export type ChaincodeId = string;



export type DataSsmListQueryDTO = ssm.data.dsl.features.query.DataSsmListQueryDTO;
export type DataSsmListQueryResultDTO = ssm.data.dsl.features.query.DataSsmListQueryResultDTO;

export type DataSsmGetQueryDTO = ssm.data.dsl.features.query.DataSsmGetQueryDTO;
export type DataSsmGetQueryResultDTO = ssm.data.dsl.features.query.DataSsmGetQueryResultDTO;


export type DataSsmSessionListQueryDTO = ssm.data.dsl.features.query.DataSsmSessionListQueryDTO;
export type DataSsmSessionListQueryResultDTO = ssm.data.dsl.features.query.DataSsmSessionListQueryResultDTO;

export type DataSsmSessionGetQueryDTO = ssm.data.dsl.features.query.DataSsmSessionGetQueryDTO;
export type DataSsmSessionGetQueryResultDTO = ssm.data.dsl.features.query.DataSsmSessionGetQueryResultDTO;

export type DataSsmSessionLogListQueryDTO = ssm.data.dsl.features.query.DataSsmSessionLogListQueryDTO;
export type DataSsmSessionLogListQueryResultDTO = ssm.data.dsl.features.query.DataSsmSessionLogListQueryResultDTO;

export type DataSsmSessionLogGetQueryDTO = ssm.data.dsl.features.query.DataSsmSessionLogGetQueryDTO;
export type DataSsmSessionLogGetQueryResultDTO = ssm.data.dsl.features.query.DataSsmSessionLogGetQueryResultDTO;

export type GenerateCertificatePdfQuery = x2.api.certificate.domain.features.GenerateCertificatePdfQueryDTO
export type GenerateCertificatePdfResult = x2.api.certificate.domain.features.GenerateCertificatePdfResultDTO;
export type GenerateCertificateFromSessionStateQuery = x2.api.certificate.domain.features.GenerateCertificateFromSessionStateQueryDTO;
export type GenerateCertificateFromSessionStateResult = x2.api.certificate.domain.features.GenerateCertificateFromSessionStateResultDTO;
export type CanGenerateCertificateQuery = x2.api.certificate.domain.features.CanGenerateCertificateQueryDTO;
export type CanGenerateCertificateResult = x2.api.certificate.domain.features.CanGenerateCertificateResultDTO;

export type X2SessionPageQueryDTO = x2Ssm.api.ssm.domain.query.X2SessionPageQueryDTO;
export type X2SessionPerStateStatsResultDTO = x2Ssm.api.ssm.domain.query.X2SessionPerStateStatsResultDTO;
export type X2SessionStatePerIntervalStatsResultDTO = x2Ssm.api.ssm.domain.query.X2SessionStatePerIntervalStatsResultDTO;
export type CellDTO = x2Ssm.api.ssm.domain.stats.CellDTO;

//@ts-ignore
export const defaultProtocols: string[] = window._env_.PROTOCOLS

