import {ssm} from "x2-ssm-domain";
import {x2} from "x2-certificate-domain";

export type TransactionDTO = ssm.chaincode.dsl.blockchain.TransactionDTO;
export type Transition = ssm.chaincode.dsl.model.SsmTransition;
export type SsmTransitionDTO = ssm.chaincode.dsl.model.SsmTransitionDTO;
export type Session = ssm.data.dsl.model.DataSsmSessionDTO;
export type SSM = ssm.data.dsl.model.DataSsmDTO;
export type SessionState = ssm.data.dsl.model.DataSsmSessionStateDTO;
export type User = ssm.data.dsl.model.DataSsmUser;
export interface SsmUri {
    readonly uri: string
}
export type SsmName = string;

export type SsmUriObj = ssm.chaincode.dsl.model.uri.SsmUri;


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


//@ts-ignore
export const defaultProtocols: string[] = window._env_.PROTOCOLS

