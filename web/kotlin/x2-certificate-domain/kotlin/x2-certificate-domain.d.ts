type Nullable<T> = T | null | undefined
export namespace f2.dsl.cqrs {
    interface Command {
    }
}
export namespace f2.dsl.cqrs {
    interface Error<PAYLOAD> {
        readonly severity: f2.dsl.cqrs.ErrorSeverity;
        readonly type: string;
        readonly description: string;
        readonly date: string;
        readonly payload: PAYLOAD;
    }
}
export namespace f2.dsl.cqrs {
    interface Event {
    }
}
export namespace f2.dsl.cqrs {
    interface Page<OBJECT> {
        readonly page: number;
        readonly size: number;
        readonly total: kotlin.Long;
        readonly list: kotlin.collections.List<OBJECT>;
    }
}
export namespace f2.dsl.cqrs {
    interface PageRequest {
        readonly page: Nullable<number>;
        readonly size: Nullable<number>;
    }
}
export namespace f2.dsl.cqrs {
    interface Query {
    }
}
export namespace f2.dsl.fnc {
    interface F2FunctionDeclaration<T, R> {
        invoke(cmd: T): kotlin.js.Promise<R>;
    }
    interface F2SupplierDeclaration<R> {
        invoke(): kotlin.js.Promise<kotlin.collections.List<R>>;
    }
    interface F2ConsumerDeclaration<T> {
        invoke(value: T): void;
    }
}
export namespace ssm.chaincode.dsl {
    interface ChaincodeDTO {
        readonly id: string;
        readonly channelId: string;
    }
}
export namespace ssm.chaincode.dsl {
    interface InvokeReturnDTO {
        readonly status: string;
        readonly info: string;
        readonly transactionId: string;
    }
}
export namespace ssm.chaincode.dsl {
    interface SsmAgentDTO {
        readonly name: string;
        readonly pub: Int8Array;
    }
}
export namespace ssm.chaincode.dsl {
    interface SsmCommandDTO extends f2.dsl.cqrs.Command {
        readonly baseUrl: string;
        readonly channelId: Nullable<string>;
        readonly chaincodeId: Nullable<string>;
        readonly bearerToken: Nullable<string>;
    }
}
export namespace ssm.chaincode.dsl {
    interface SsmContextDTO extends ssm.chaincode.dsl.WithPrivate {
        readonly session: string;
        readonly public: string;
        readonly iteration: number;
        readonly private: Nullable<kotlin.collections.Map<string, string>>;
    }
}
export namespace ssm.chaincode.dsl {
    interface SsmDTO {
        readonly name: string;
        readonly transitions: kotlin.collections.List<ssm.chaincode.dsl.SsmTransitionDTO>;
    }
}
export namespace ssm.chaincode.dsl {
    interface SsmGrantDTO {
        readonly user: string;
        readonly iteration: number;
        readonly credits: kotlin.collections.Map<string, ssm.chaincode.dsl.CreditDTO>;
    }
    interface CreditDTO {
        readonly amount: number;
    }
}
export namespace ssm.chaincode.dsl {
    interface SsmSessionDTO extends ssm.chaincode.dsl.WithPrivate {
        readonly ssm: Nullable<string>;
        readonly session: string;
        readonly roles: Nullable<kotlin.collections.Map<string, string>>;
        readonly public: Nullable<any>;
        readonly private: Nullable<kotlin.collections.Map<string, string>>;
    }
}
export namespace ssm.chaincode.dsl {
    interface SsmSessionStateDTO extends ssm.chaincode.dsl.SsmSessionDTO, ssm.chaincode.dsl.WithPrivate {
        readonly ssm: Nullable<string>;
        readonly session: string;
        readonly roles: Nullable<kotlin.collections.Map<string, string>>;
        readonly public: Nullable<any>;
        readonly private: Nullable<kotlin.collections.Map<string, string>>;
        readonly origin: Nullable<ssm.chaincode.dsl.SsmTransitionDTO>;
        readonly current: number;
        readonly iteration: number;
    }
}
export namespace ssm.chaincode.dsl {
    interface SsmSessionStateLogDTO {
        readonly txId: string;
        readonly state: ssm.chaincode.dsl.SsmSessionStateDTO;
    }
}
export namespace ssm.chaincode.dsl {
    interface SsmTransitionDTO {
        readonly from: number;
        readonly to: number;
        readonly role: string;
        readonly action: string;
    }
}
export namespace ssm.chaincode.dsl {
    interface WithPrivate {
        readonly private: Nullable<kotlin.collections.Map<string, string>>;
    }
}
export namespace ssm.chaincode.dsl.blockchain {
    interface BlockDTO {
        readonly blockId: kotlin.Long;
        readonly previousHash: Int8Array;
        readonly dataHash: Int8Array;
        readonly transactions: kotlin.collections.List<ssm.chaincode.dsl.blockchain.TransactionDTO>;
    }
}
export namespace ssm.chaincode.dsl.blockchain {
    interface IdentitiesInfoDTO {
        readonly id: string;
        readonly mspid: string;
    }
}
export namespace ssm.chaincode.dsl.blockchain {
    interface TransactionDTO {
        readonly transactionId: string;
        readonly blockId: kotlin.Long;
        readonly timestamp: kotlin.Long;
        readonly isValid: boolean;
        readonly channelId: string;
        readonly creator: ssm.chaincode.dsl.blockchain.IdentitiesInfoDTO;
        readonly nonce: Int8Array;
        readonly type: any /*Class ssm.chaincode.dsl.blockchain.EnvelopeType with kind: ENUM_CLASS*/;
        readonly validationCode: number;
    }
}
export namespace x2.api.certificate.domain.features {
    interface CanGenerateCertificateQueryDTO {
        readonly sessionState: ssm.chaincode.dsl.SsmSessionState;
    }
    interface CanGenerateCertificateResultDTO {
        readonly sessionState: ssm.chaincode.dsl.SsmSessionState;
        readonly canGenerateCertificate: boolean;
    }
}
export namespace x2.api.certificate.domain.features {
    interface GenerateCertificateFromSessionStateQueryDTO {
        readonly sessionState: ssm.chaincode.dsl.SsmSessionState;
        readonly lang: any /*Class x2.api.certificate.domain.model.Lang with kind: ENUM_CLASS*/;
    }
    interface GenerateCertificateFromSessionStateResultDTO {
        readonly base64Document: string;
    }
}
export namespace x2.api.certificate.domain.features {
    interface GenerateCertificatePdfQueryDTO {
        readonly certificate: x2.api.certificate.domain.model.CertificateCredentialsDTO;
        readonly lang: any /*Class x2.api.certificate.domain.model.Lang with kind: ENUM_CLASS*/;
    }
    interface GenerateCertificatePdfResultDTO {
        readonly base64Document: string;
    }
}
export namespace x2.api.certificate.domain.model {
    interface CertificateCredentialsDTO {
        readonly context: Array<string>;
        readonly type: Array<string>;
        readonly id: string;
        readonly title: x2.api.certificate.domain.model.CertificateDataDTO;
        readonly holder: x2.api.certificate.domain.model.CertificateSignerDTO;
        readonly issuer: x2.api.certificate.domain.model.CertificateSignerDTO;
        readonly protocol: x2.api.certificate.domain.model.CertificateProtocolDTO;
        readonly payload: Array<x2.api.certificate.domain.model.CertificateDataDTO>;
    }
}
export namespace x2.api.certificate.domain.model {
    interface CertificateDataDTO {
        readonly label: kotlin.collections.Map<any /*Class x2.api.certificate.domain.model.Lang with kind: ENUM_CLASS*/, string>;
        readonly value: kotlin.collections.Map<any /*Class x2.api.certificate.domain.model.Lang with kind: ENUM_CLASS*/, string>;
        readonly unit: kotlin.collections.Map<any /*Class x2.api.certificate.domain.model.Lang with kind: ENUM_CLASS*/, string>;
    }
}
export namespace x2.api.certificate.domain.model {
    interface CertificateProtocolDTO {
        readonly validationProtocol: x2.api.certificate.domain.model.CertificateDataDTO;
        readonly protocolEngineVersion: x2.api.certificate.domain.model.CertificateDataDTO;
        readonly channel: x2.api.certificate.domain.model.CertificateDataDTO;
        readonly session: x2.api.certificate.domain.model.CertificateDataDTO;
        readonly additionals: Array<x2.api.certificate.domain.model.CertificateDataDTO>;
        readonly url: string;
    }
}
export namespace x2.api.certificate.domain.model {
    interface CertificateSignerDTO {
        readonly name: x2.api.certificate.domain.model.CertificateDataDTO;
        readonly organization: string;
        readonly roles: Nullable<string>;
        readonly signature: string;
    }
}
export namespace kotlinx.atomicfu {
    function atomic$ref$<T>(initial: T, trace: kotlinx.atomicfu.TraceBase): kotlinx.atomicfu.AtomicRef<T>;
    function atomic$boolean$(initial: boolean, trace: kotlinx.atomicfu.TraceBase): kotlinx.atomicfu.AtomicBoolean;
    function atomic$int$(initial: number, trace: kotlinx.atomicfu.TraceBase): kotlinx.atomicfu.AtomicInt;
    function atomic$long$(initial: kotlin.Long, trace: kotlinx.atomicfu.TraceBase): kotlinx.atomicfu.AtomicLong;
}
export namespace f2.dsl.cqrs {
    class ErrorSeverity {
        constructor(severity: string);
        readonly severity: string;
    }
    class ErrorSeverityWarning extends f2.dsl.cqrs.ErrorSeverity {
        constructor();
    }
    class AlertSeverityError extends f2.dsl.cqrs.ErrorSeverity {
        constructor();
    }
}
export namespace f2.dsl.cqrs.base {
    class ErrorBase<PAYLOAD> implements f2.dsl.cqrs.Error<PAYLOAD> {
        constructor(type: string, description: string, date: string, payload: PAYLOAD, severity: f2.dsl.cqrs.ErrorSeverity);
        readonly type: string;
        readonly description: string;
        readonly date: string;
        readonly payload: PAYLOAD;
        readonly severity: f2.dsl.cqrs.ErrorSeverity;
    }
}
export namespace f2.dsl.cqrs.base {
    class PageBase<OBJECT> implements f2.dsl.cqrs.Page<OBJECT> {
        constructor(page: number, size: number, total: kotlin.Long, list: kotlin.collections.List<OBJECT>);
        readonly page: number;
        readonly size: number;
        readonly total: kotlin.Long;
        readonly list: kotlin.collections.List<OBJECT>;
    }
}
export namespace f2.dsl.cqrs.base {
    class PageRequestBase implements f2.dsl.cqrs.PageRequest {
        constructor(page: Nullable<number>, size: Nullable<number>);
        readonly page: Nullable<number>;
        readonly size: Nullable<number>;
    }
}
export namespace f2.dsl.cqrs.exception {
    class R2Exception extends kotlin.Exception {
        constructor(id: string, error: f2.dsl.cqrs.Error<any /*UnknownType **/>);
        readonly id: string;
        readonly error: f2.dsl.cqrs.Error<any /*UnknownType **/>;
    }
}
export namespace f2.dsl.cqrs.exception {
    class R2NotFoundException extends kotlin.Exception {
        constructor(message: string);
    }
}
export namespace ssm.chaincode.dsl {
    class Chaincode implements ssm.chaincode.dsl.ChaincodeDTO {
        constructor(id: string, channelId: string);
        readonly id: string;
        readonly channelId: string;
        component1(): string;
        component2(): string;
        copy(id: string, channelId: string): ssm.chaincode.dsl.Chaincode;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export namespace ssm.chaincode.dsl {
    class InvokeReturn {
        constructor(status: string, info: string, transactionId: string);
        readonly status: string;
        readonly info: string;
        readonly transactionId: string;
    }
}
export namespace ssm.chaincode.dsl {
    class Ssm implements ssm.chaincode.dsl.SsmDTO {
        constructor(name: string, transitions: kotlin.collections.List<ssm.chaincode.dsl.SsmTransition>);
        readonly name: string;
        readonly transitions: kotlin.collections.List<ssm.chaincode.dsl.SsmTransition>;
        component1(): string;
        component2(): kotlin.collections.List<ssm.chaincode.dsl.SsmTransition>;
        copy(name: string, transitions: kotlin.collections.List<ssm.chaincode.dsl.SsmTransition>): ssm.chaincode.dsl.Ssm;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export namespace ssm.chaincode.dsl {
    class SsmAgent implements ssm.chaincode.dsl.SsmAgentDTO {
        constructor(name: string, pub: Int8Array);
        readonly name: string;
        readonly pub: Int8Array;
        equals(other: Nullable<any>): boolean;
        hashCode(): number;
        component1(): string;
        component2(): Int8Array;
        copy(name: string, pub: Int8Array): ssm.chaincode.dsl.SsmAgent;
        toString(): string;
    }
}
export namespace ssm.chaincode.dsl {
    class SsmContext implements ssm.chaincode.dsl.SsmContextDTO {
        constructor(session: string, _public: string, iteration: number, _private: Nullable<kotlin.collections.Map<string, string>>);
        readonly session: string;
        readonly public: string;
        readonly iteration: number;
        readonly private: Nullable<kotlin.collections.Map<string, string>>;
        component1(): string;
        component2(): string;
        component3(): number;
        component4(): Nullable<kotlin.collections.Map<string, string>>;
        copy(session: string, _public: string, iteration: number, _private: Nullable<kotlin.collections.Map<string, string>>): ssm.chaincode.dsl.SsmContext;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export namespace ssm.chaincode.dsl {
    class SsmGrant {
        constructor(user: string, iteration: number, credits: kotlin.collections.Map<string, ssm.chaincode.dsl.Credit>);
        readonly user: string;
        readonly iteration: number;
        readonly credits: kotlin.collections.Map<string, ssm.chaincode.dsl.Credit>;
        component1(): string;
        component2(): number;
        component3(): kotlin.collections.Map<string, ssm.chaincode.dsl.Credit>;
        copy(user: string, iteration: number, credits: kotlin.collections.Map<string, ssm.chaincode.dsl.Credit>): ssm.chaincode.dsl.SsmGrant;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    class Credit implements ssm.chaincode.dsl.CreditDTO {
        constructor(amount: number);
        readonly amount: number;
        component1(): number;
        copy(amount: number): ssm.chaincode.dsl.Credit;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export namespace ssm.chaincode.dsl {
    class SsmSession implements ssm.chaincode.dsl.SsmSessionDTO {
        constructor(ssm: string, session: string, roles: kotlin.collections.Map<string, string>, _public: string, _private: Nullable<kotlin.collections.Map<string, string>>);
        readonly ssm: string;
        readonly session: string;
        readonly roles: kotlin.collections.Map<string, string>;
        readonly public: string;
        readonly private: Nullable<kotlin.collections.Map<string, string>>;
    }
}
export namespace ssm.chaincode.dsl {
    class SsmSessionState implements ssm.chaincode.dsl.SsmSessionStateDTO {
        constructor(ssm: Nullable<string>, session: string, roles: Nullable<kotlin.collections.Map<string, string>>, _public: Nullable<any>, _private: Nullable<kotlin.collections.Map<string, string>>, origin: Nullable<ssm.chaincode.dsl.SsmTransition>, current: number, iteration: number);
        readonly ssm: Nullable<string>;
        readonly session: string;
        readonly roles: Nullable<kotlin.collections.Map<string, string>>;
        readonly public: Nullable<any>;
        readonly private: Nullable<kotlin.collections.Map<string, string>>;
        readonly origin: Nullable<ssm.chaincode.dsl.SsmTransition>;
        readonly current: number;
        readonly iteration: number;
        component1(): Nullable<string>;
        component2(): string;
        component3(): Nullable<kotlin.collections.Map<string, string>>;
        component4(): Nullable<any>;
        component5(): Nullable<kotlin.collections.Map<string, string>>;
        component6(): Nullable<ssm.chaincode.dsl.SsmTransition>;
        component7(): number;
        component8(): number;
        copy(ssm: Nullable<string>, session: string, roles: Nullable<kotlin.collections.Map<string, string>>, _public: Nullable<any>, _private: Nullable<kotlin.collections.Map<string, string>>, origin: Nullable<ssm.chaincode.dsl.SsmTransition>, current: number, iteration: number): ssm.chaincode.dsl.SsmSessionState;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export namespace ssm.chaincode.dsl {
    class SsmSessionStateLog implements ssm.chaincode.dsl.SsmSessionStateLogDTO {
        constructor(txId: string, state: ssm.chaincode.dsl.SsmSessionState);
        readonly txId: string;
        readonly state: ssm.chaincode.dsl.SsmSessionState;
        component1(): string;
        component2(): ssm.chaincode.dsl.SsmSessionState;
        copy(txId: string, state: ssm.chaincode.dsl.SsmSessionState): ssm.chaincode.dsl.SsmSessionStateLog;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export namespace ssm.chaincode.dsl {
    class SsmTransition implements ssm.chaincode.dsl.SsmTransitionDTO {
        constructor(from: number, to: number, role: string, action: string);
        readonly from: number;
        readonly to: number;
        readonly role: string;
        readonly action: string;
        component1(): number;
        component2(): number;
        component3(): string;
        component4(): string;
        copy(from: number, to: number, role: string, action: string): ssm.chaincode.dsl.SsmTransition;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export namespace ssm.chaincode.dsl.blockchain {
    class Block implements ssm.chaincode.dsl.blockchain.BlockDTO {
        constructor(blockId: kotlin.Long, previousHash: Int8Array, dataHash: Int8Array, transactions: kotlin.collections.List<ssm.chaincode.dsl.blockchain.Transaction>);
        readonly blockId: kotlin.Long;
        readonly previousHash: Int8Array;
        readonly dataHash: Int8Array;
        readonly transactions: kotlin.collections.List<ssm.chaincode.dsl.blockchain.Transaction>;
    }
}
export namespace ssm.chaincode.dsl.blockchain {
    class IdentitiesInfo implements ssm.chaincode.dsl.blockchain.IdentitiesInfoDTO {
        constructor(id: string, mspid: string);
        readonly id: string;
        readonly mspid: string;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmGetAdminQuery implements ssm.chaincode.dsl.SsmCommandDTO {
        constructor(baseUrl: string, channelId: Nullable<string>, chaincodeId: Nullable<string>, bearerToken: Nullable<string>, name: string);
        readonly baseUrl: string;
        readonly channelId: Nullable<string>;
        readonly chaincodeId: Nullable<string>;
        readonly bearerToken: Nullable<string>;
        readonly name: string;
    }
    class SsmGetAdminResult implements f2.dsl.cqrs.Event {
        constructor(admin: Nullable<ssm.chaincode.dsl.SsmAgent>);
        readonly admin: Nullable<ssm.chaincode.dsl.SsmAgent>;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmGetQuery implements ssm.chaincode.dsl.SsmCommandDTO {
        constructor(baseUrl: string, channelId: Nullable<string>, chaincodeId: Nullable<string>, bearerToken: Nullable<string>, name: string);
        readonly baseUrl: string;
        readonly channelId: Nullable<string>;
        readonly chaincodeId: Nullable<string>;
        readonly bearerToken: Nullable<string>;
        readonly name: string;
    }
    class SsmGetResult implements f2.dsl.cqrs.Event {
        constructor(ssm: Nullable<ssm.chaincode.dsl.Ssm>);
        readonly ssm: Nullable<ssm.chaincode.dsl.Ssm>;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmGetSessionLogsQuery implements ssm.chaincode.dsl.SsmCommandDTO {
        constructor(session: string, baseUrl: string, channelId: Nullable<string>, chaincodeId: Nullable<string>, bearerToken: Nullable<string>);
        readonly session: string;
        readonly baseUrl: string;
        readonly channelId: Nullable<string>;
        readonly chaincodeId: Nullable<string>;
        readonly bearerToken: Nullable<string>;
    }
    class SsmGetSessionLogsQueryResult {
        constructor(logs: kotlin.collections.List<ssm.chaincode.dsl.SsmSessionStateLog>);
        readonly logs: kotlin.collections.List<ssm.chaincode.dsl.SsmSessionStateLog>;
        component1(): kotlin.collections.List<ssm.chaincode.dsl.SsmSessionStateLog>;
        copy(logs: kotlin.collections.List<ssm.chaincode.dsl.SsmSessionStateLog>): ssm.chaincode.dsl.query.SsmGetSessionLogsQueryResult;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmGetSessionQuery implements ssm.chaincode.dsl.SsmCommandDTO {
        constructor(baseUrl: string, channelId: Nullable<string>, chaincodeId: Nullable<string>, bearerToken: Nullable<string>, name: string);
        readonly baseUrl: string;
        readonly channelId: Nullable<string>;
        readonly chaincodeId: Nullable<string>;
        readonly bearerToken: Nullable<string>;
        readonly name: string;
    }
    class SsmGetSessionResult implements f2.dsl.cqrs.Event {
        constructor(session: Nullable<ssm.chaincode.dsl.SsmSessionState>);
        readonly session: Nullable<ssm.chaincode.dsl.SsmSessionState>;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmGetTransactionQuery implements ssm.chaincode.dsl.SsmCommandDTO {
        constructor(id: string, baseUrl: string, channelId: Nullable<string>, chaincodeId: Nullable<string>, bearerToken: Nullable<string>);
        readonly id: string;
        readonly baseUrl: string;
        readonly channelId: Nullable<string>;
        readonly chaincodeId: Nullable<string>;
        readonly bearerToken: Nullable<string>;
        component1(): string;
        component2(): string;
        component3(): Nullable<string>;
        component4(): Nullable<string>;
        component5(): Nullable<string>;
        copy(id: string, baseUrl: string, channelId: Nullable<string>, chaincodeId: Nullable<string>, bearerToken: Nullable<string>): ssm.chaincode.dsl.query.SsmGetTransactionQuery;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    class SsmGetTransactionQueryResult {
        constructor(transaction: Nullable<ssm.chaincode.dsl.blockchain.Transaction>);
        readonly transaction: Nullable<ssm.chaincode.dsl.blockchain.Transaction>;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmGetUserQuery implements ssm.chaincode.dsl.SsmCommandDTO {
        constructor(baseUrl: string, channelId: Nullable<string>, chaincodeId: Nullable<string>, bearerToken: Nullable<string>, name: string);
        readonly baseUrl: string;
        readonly channelId: Nullable<string>;
        readonly chaincodeId: Nullable<string>;
        readonly bearerToken: Nullable<string>;
        readonly name: string;
    }
    class SsmGetUserResult implements f2.dsl.cqrs.Event {
        constructor(user: Nullable<ssm.chaincode.dsl.SsmAgent>);
        readonly user: Nullable<ssm.chaincode.dsl.SsmAgent>;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmListAdminQuery implements ssm.chaincode.dsl.SsmCommandDTO {
        constructor(baseUrl: string, channelId: Nullable<string>, chaincodeId: Nullable<string>, bearerToken: Nullable<string>);
        readonly baseUrl: string;
        readonly channelId: Nullable<string>;
        readonly chaincodeId: Nullable<string>;
        readonly bearerToken: Nullable<string>;
    }
    class SsmListAdminResult implements f2.dsl.cqrs.Event {
        constructor(values: Array<string>);
        readonly values: Array<string>;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmListSessionQuery implements ssm.chaincode.dsl.SsmCommandDTO {
        constructor(baseUrl: string, channelId: Nullable<string>, chaincodeId: Nullable<string>, bearerToken: Nullable<string>);
        readonly baseUrl: string;
        readonly channelId: Nullable<string>;
        readonly chaincodeId: Nullable<string>;
        readonly bearerToken: Nullable<string>;
    }
    class SsmListSessionResult implements f2.dsl.cqrs.Event {
        constructor(values: Array<string>);
        readonly values: Array<string>;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmListSsmQuery implements ssm.chaincode.dsl.SsmCommandDTO {
        constructor(baseUrl: string, channelId: Nullable<string>, chaincodeId: Nullable<string>, bearerToken: Nullable<string>);
        readonly baseUrl: string;
        readonly channelId: Nullable<string>;
        readonly chaincodeId: Nullable<string>;
        readonly bearerToken: Nullable<string>;
    }
    class SsmListSsmResult implements f2.dsl.cqrs.Event {
        constructor(values: Array<string>);
        readonly values: Array<string>;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmListUserQuery implements ssm.chaincode.dsl.SsmCommandDTO {
        constructor(baseUrl: string, channelId: Nullable<string>, chaincodeId: Nullable<string>, bearerToken: Nullable<string>);
        readonly baseUrl: string;
        readonly channelId: Nullable<string>;
        readonly chaincodeId: Nullable<string>;
        readonly bearerToken: Nullable<string>;
    }
    class SsmListUserResult implements f2.dsl.cqrs.Event {
        constructor(values: Array<string>);
        readonly values: Array<string>;
    }
}
export namespace x2.api.certificate.domain.features {
    class CanGenerateCertificateQuery implements x2.api.certificate.domain.features.CanGenerateCertificateQueryDTO {
        constructor(sessionState: ssm.chaincode.dsl.SsmSessionState);
        readonly sessionState: ssm.chaincode.dsl.SsmSessionState;
    }
    class CanGenerateCertificateResult implements x2.api.certificate.domain.features.CanGenerateCertificateResultDTO {
        constructor(sessionState: ssm.chaincode.dsl.SsmSessionState, canGenerateCertificate: boolean);
        readonly sessionState: ssm.chaincode.dsl.SsmSessionState;
        readonly canGenerateCertificate: boolean;
    }
}
export namespace x2.api.certificate.domain.features {
    class GenerateCertificateFromSessionStateQuery implements x2.api.certificate.domain.features.GenerateCertificateFromSessionStateQueryDTO {
        constructor(sessionState: ssm.chaincode.dsl.SsmSessionState, lang: any /*Class x2.api.certificate.domain.model.Lang with kind: ENUM_CLASS*/);
        readonly sessionState: ssm.chaincode.dsl.SsmSessionState;
        readonly lang: any /*Class x2.api.certificate.domain.model.Lang with kind: ENUM_CLASS*/;
    }
    class GenerateCertificateFromSessionStateResult implements x2.api.certificate.domain.features.GenerateCertificateFromSessionStateResultDTO {
        constructor(base64Document: string);
        readonly base64Document: string;
    }
}
export namespace x2.api.certificate.domain.features {
    class GenerateCertificatePdfQuery implements x2.api.certificate.domain.features.GenerateCertificatePdfQueryDTO {
        constructor(certificate: x2.api.certificate.domain.model.CertificateCredentials, lang: any /*Class x2.api.certificate.domain.model.Lang with kind: ENUM_CLASS*/);
        readonly certificate: x2.api.certificate.domain.model.CertificateCredentials;
        readonly lang: any /*Class x2.api.certificate.domain.model.Lang with kind: ENUM_CLASS*/;
    }
    class GenerateCertificatePdfResult implements x2.api.certificate.domain.features.GenerateCertificatePdfResultDTO {
        constructor(base64Document: string);
        readonly base64Document: string;
    }
}
export as namespace x2_certificate_domain;