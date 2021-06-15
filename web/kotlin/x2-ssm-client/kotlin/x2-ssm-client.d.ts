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
    class ErrorSeverity {
        private constructor();
        readonly severity: string;
    }
    class ErrorSeverityWarning extends f2.dsl.cqrs.ErrorSeverity {
        constructor();
    }
    class AlertSeverityError extends f2.dsl.cqrs.ErrorSeverity {
        constructor();
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
export namespace f2.dsl.function {
    interface F2FunctionRemote<T, R> {
        invoke(cmd: T): kotlin.js.Promise<R>;
    }
    interface F2SupplierRemote<T> {
        invoke(): kotlin.js.Promise<kotlin.collections.List<T>>;
    }
    interface F2ConsumerRemote<T> {
        invoke(value: T): void;
    }
}
export namespace ssm.chaincode.dsl {
    interface Ssm {
        readonly name: string;
        readonly transitions: Array<ssm.chaincode.dsl.SsmTransition>;
    }
    class SsmBase implements ssm.chaincode.dsl.Ssm {
        constructor(name: string, transitions: Array<ssm.chaincode.dsl.SsmTransitionBase>);
        readonly name: string;
        readonly transitions: Array<ssm.chaincode.dsl.SsmTransitionBase>;
        component1(): string;
        component2(): Array<ssm.chaincode.dsl.SsmTransitionBase>;
        copy(name: string, transitions: Array<ssm.chaincode.dsl.SsmTransitionBase>): ssm.chaincode.dsl.SsmBase;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export namespace ssm.chaincode.dsl {
    interface SsmAgent {
        readonly name: string;
        readonly pub: Int8Array;
    }
    class SsmAgentBase implements ssm.chaincode.dsl.SsmAgent {
        constructor(name: string, pub: Int8Array);
        readonly name: string;
        readonly pub: Int8Array;
        equals(other: Nullable<any>): boolean;
        hashCode(): number;
        component1(): string;
        component2(): Int8Array;
        copy(name: string, pub: Int8Array): ssm.chaincode.dsl.SsmAgentBase;
        toString(): string;
    }
}
export namespace ssm.chaincode.dsl {
    interface SsmCommand extends f2.dsl.cqrs.Command {
        readonly baseUrl: string;
        readonly channelId: Nullable<string>;
        readonly chaincodeId: Nullable<string>;
        readonly bearerToken: Nullable<string>;
    }
}
export namespace ssm.chaincode.dsl {
    interface SsmContext extends ssm.chaincode.dsl.WithPrivate {
        readonly session: string;
        readonly public: string;
        readonly iteration: number;
        readonly private: Nullable<kotlin.collections.Map<string, string>>;
    }
    class SsmContextBase implements ssm.chaincode.dsl.SsmContext {
        constructor(session: string, _public: string, iteration: number, _private: Nullable<kotlin.collections.Map<string, string>>);
        readonly session: string;
        readonly public: string;
        readonly iteration: number;
        readonly private: Nullable<kotlin.collections.Map<string, string>>;
        component1(): string;
        component2(): string;
        component3(): number;
        component4(): Nullable<kotlin.collections.Map<string, string>>;
        copy(session: string, _public: string, iteration: number, _private: Nullable<kotlin.collections.Map<string, string>>): ssm.chaincode.dsl.SsmContextBase;
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
    class Credit {
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
    interface SsmSession extends ssm.chaincode.dsl.WithPrivate {
        readonly ssm: Nullable<string>;
        readonly session: string;
        readonly roles: Nullable<kotlin.collections.Map<string, string>>;
        readonly public: Nullable<any>;
        readonly private: Nullable<kotlin.collections.Map<string, string>>;
    }
    class SsmSessionBase implements ssm.chaincode.dsl.SsmSession {
        constructor(ssm: string, session: string, roles: kotlin.collections.Map<string, string>, _public: string, _private: Nullable<kotlin.collections.Map<string, string>>);
        readonly ssm: string;
        readonly session: string;
        readonly roles: kotlin.collections.Map<string, string>;
        readonly public: string;
        readonly private: Nullable<kotlin.collections.Map<string, string>>;
    }
}
export namespace ssm.chaincode.dsl {
    interface SsmSessionState extends ssm.chaincode.dsl.SsmSession, ssm.chaincode.dsl.WithPrivate {
        readonly ssm: Nullable<string>;
        readonly session: string;
        readonly roles: Nullable<kotlin.collections.Map<string, string>>;
        readonly public: Nullable<any>;
        readonly private: Nullable<kotlin.collections.Map<string, string>>;
        readonly origin: Nullable<ssm.chaincode.dsl.SsmTransition>;
        readonly current: number;
        readonly iteration: number;
    }
    class SsmSessionStateBase implements ssm.chaincode.dsl.SsmSessionState {
        constructor(ssm: Nullable<string>, session: string, roles: Nullable<kotlin.collections.Map<string, string>>, _public: Nullable<any>, _private: Nullable<kotlin.collections.Map<string, string>>, origin: Nullable<ssm.chaincode.dsl.SsmTransitionBase>, current: number, iteration: number);
        readonly ssm: Nullable<string>;
        readonly session: string;
        readonly roles: Nullable<kotlin.collections.Map<string, string>>;
        readonly public: Nullable<any>;
        readonly private: Nullable<kotlin.collections.Map<string, string>>;
        readonly origin: Nullable<ssm.chaincode.dsl.SsmTransitionBase>;
        readonly current: number;
        readonly iteration: number;
        component1(): Nullable<string>;
        component2(): string;
        component3(): Nullable<kotlin.collections.Map<string, string>>;
        component4(): Nullable<any>;
        component5(): Nullable<kotlin.collections.Map<string, string>>;
        component6(): Nullable<ssm.chaincode.dsl.SsmTransitionBase>;
        component7(): number;
        component8(): number;
        copy(ssm: Nullable<string>, session: string, roles: Nullable<kotlin.collections.Map<string, string>>, _public: Nullable<any>, _private: Nullable<kotlin.collections.Map<string, string>>, origin: Nullable<ssm.chaincode.dsl.SsmTransitionBase>, current: number, iteration: number): ssm.chaincode.dsl.SsmSessionStateBase;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export namespace ssm.chaincode.dsl {
    class SsmSessionStateLog {
        constructor(txId: string, state: ssm.chaincode.dsl.SsmSessionStateBase);
        readonly txId: string;
        readonly state: ssm.chaincode.dsl.SsmSessionStateBase;
        component1(): string;
        component2(): ssm.chaincode.dsl.SsmSessionStateBase;
        copy(txId: string, state: ssm.chaincode.dsl.SsmSessionStateBase): ssm.chaincode.dsl.SsmSessionStateLog;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export namespace ssm.chaincode.dsl {
    interface SsmTransition {
        readonly from: number;
        readonly to: number;
        readonly role: string;
        readonly action: string;
    }
    class SsmTransitionBase implements ssm.chaincode.dsl.SsmTransition {
        constructor(from: number, to: number, role: string, action: string);
        readonly from: number;
        readonly to: number;
        readonly role: string;
        readonly action: string;
        component1(): number;
        component2(): number;
        component3(): string;
        component4(): string;
        copy(from: number, to: number, role: string, action: string): ssm.chaincode.dsl.SsmTransitionBase;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export namespace ssm.chaincode.dsl.blockchain {
    interface Block {
        readonly blockId: kotlin.Long;
        readonly previousHash: Int8Array;
        readonly dataHash: Int8Array;
        readonly transactions: kotlin.collections.List<ssm.chaincode.dsl.blockchain.Transaction>;
    }
    class BlockBase implements ssm.chaincode.dsl.blockchain.Block {
        constructor(blockId: kotlin.Long, previousHash: Int8Array, dataHash: Int8Array, transactions: kotlin.collections.List<ssm.chaincode.dsl.blockchain.TransactionBase>);
        readonly blockId: kotlin.Long;
        readonly previousHash: Int8Array;
        readonly dataHash: Int8Array;
        readonly transactions: kotlin.collections.List<ssm.chaincode.dsl.blockchain.TransactionBase>;
    }
}
export namespace ssm.chaincode.dsl.blockchain {
    interface IdentitiesInfo {
        readonly id: string;
        readonly mspid: string;
    }
    class IdentitiesInfoBase implements ssm.chaincode.dsl.blockchain.IdentitiesInfo {
        constructor(id: string, mspid: string);
        readonly id: string;
        readonly mspid: string;
    }
}
export namespace ssm.chaincode.dsl.blockchain {
    interface Transaction {
        readonly transactionId: string;
        readonly blockId: kotlin.Long;
        readonly timestamp: kotlin.Long;
        readonly isValid: boolean;
        readonly channelId: string;
        readonly creator: ssm.chaincode.dsl.blockchain.IdentitiesInfo;
        readonly nonce: Int8Array;
        readonly type: any /*Class ssm.chaincode.dsl.blockchain.EnvelopeType with kind: ENUM_CLASS*/;
        readonly validationCode: number;
    }
    class TransactionBase implements ssm.chaincode.dsl.blockchain.Transaction {
        constructor(transactionId: string, blockId: kotlin.Long, timestamp: kotlin.Long, isValid: boolean, channelId: string, creator: ssm.chaincode.dsl.blockchain.IdentitiesInfoBase, nonce: Int8Array, type: any /*Class ssm.chaincode.dsl.blockchain.EnvelopeType with kind: ENUM_CLASS*/, validationCode: number);
        readonly transactionId: string;
        readonly blockId: kotlin.Long;
        readonly timestamp: kotlin.Long;
        readonly isValid: boolean;
        readonly channelId: string;
        readonly creator: ssm.chaincode.dsl.blockchain.IdentitiesInfoBase;
        readonly nonce: Int8Array;
        readonly type: any /*Class ssm.chaincode.dsl.blockchain.EnvelopeType with kind: ENUM_CLASS*/;
        readonly validationCode: number;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmGetAdminQuery implements ssm.chaincode.dsl.SsmCommand {
        constructor(baseUrl: string, channelId: Nullable<string>, chaincodeId: Nullable<string>, bearerToken: Nullable<string>, name: string);
        readonly baseUrl: string;
        readonly channelId: Nullable<string>;
        readonly chaincodeId: Nullable<string>;
        readonly bearerToken: Nullable<string>;
        readonly name: string;
    }
    class SsmGetAdminResult implements f2.dsl.cqrs.Event {
        constructor(admin: Nullable<ssm.chaincode.dsl.SsmAgentBase>);
        readonly admin: Nullable<ssm.chaincode.dsl.SsmAgentBase>;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmGetQuery implements ssm.chaincode.dsl.SsmCommand {
        constructor(baseUrl: string, channelId: Nullable<string>, chaincodeId: Nullable<string>, bearerToken: Nullable<string>, name: string);
        readonly baseUrl: string;
        readonly channelId: Nullable<string>;
        readonly chaincodeId: Nullable<string>;
        readonly bearerToken: Nullable<string>;
        readonly name: string;
    }
    class SsmGetResult implements f2.dsl.cqrs.Event {
        constructor(ssmBase: Nullable<ssm.chaincode.dsl.SsmBase>);
        readonly ssmBase: Nullable<ssm.chaincode.dsl.SsmBase>;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmGetSessionLogsQuery implements ssm.chaincode.dsl.SsmCommand {
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
    class SsmGetSessionQuery implements ssm.chaincode.dsl.SsmCommand {
        constructor(baseUrl: string, channelId: Nullable<string>, chaincodeId: Nullable<string>, bearerToken: Nullable<string>, name: string);
        readonly baseUrl: string;
        readonly channelId: Nullable<string>;
        readonly chaincodeId: Nullable<string>;
        readonly bearerToken: Nullable<string>;
        readonly name: string;
    }
    class SsmGetSessionResult implements f2.dsl.cqrs.Event {
        constructor(session: Nullable<ssm.chaincode.dsl.SsmSessionStateBase>);
        readonly session: Nullable<ssm.chaincode.dsl.SsmSessionStateBase>;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmGetTransactionQuery implements ssm.chaincode.dsl.SsmCommand {
        constructor(id: string, baseUrl: string, channelId: Nullable<string>, chaincodeId: Nullable<string>, bearerToken: Nullable<string>);
        readonly id: string;
        readonly baseUrl: string;
        readonly channelId: Nullable<string>;
        readonly chaincodeId: Nullable<string>;
        readonly bearerToken: Nullable<string>;
    }
    class SsmGetTransactionQueryResult {
        constructor(transaction: Nullable<ssm.chaincode.dsl.blockchain.TransactionBase>);
        readonly transaction: Nullable<ssm.chaincode.dsl.blockchain.TransactionBase>;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmGetUserQuery implements ssm.chaincode.dsl.SsmCommand {
        constructor(baseUrl: string, channelId: Nullable<string>, chaincodeId: Nullable<string>, bearerToken: Nullable<string>, name: string);
        readonly baseUrl: string;
        readonly channelId: Nullable<string>;
        readonly chaincodeId: Nullable<string>;
        readonly bearerToken: Nullable<string>;
        readonly name: string;
    }
    class SsmGetUserResult implements f2.dsl.cqrs.Event {
        constructor(user: Nullable<ssm.chaincode.dsl.SsmAgentBase>);
        readonly user: Nullable<ssm.chaincode.dsl.SsmAgentBase>;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmListAdminQuery implements ssm.chaincode.dsl.SsmCommand {
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
    class SsmListSessionQuery implements ssm.chaincode.dsl.SsmCommand {
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
    class SsmListSsmQuery implements ssm.chaincode.dsl.SsmCommand {
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
    class SsmListUserQuery implements ssm.chaincode.dsl.SsmCommand {
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
export interface GetSsmListCommand {
    readonly bearerToken: Nullable<string>;
}
export class GetSsmListCommandBase implements GetSsmListCommand {
    constructor(bearerToken: Nullable<string>);
    readonly bearerToken: Nullable<string>;
}
export interface GetSsmSessionCommand extends TxSsmCommand {
    readonly sessionId: string;
    readonly ssm: string;
    readonly bearerToken: Nullable<string>;
}
export class GetSsmSessionCommandBase implements GetSsmSessionCommand {
    constructor(sessionId: string, ssm: string, bearerToken: Nullable<string>);
    readonly sessionId: string;
    readonly ssm: string;
    readonly bearerToken: Nullable<string>;
}
export interface GetSsmSessionListCommand extends TxSsmCommand {
    readonly ssm: string;
    readonly bearerToken: Nullable<string>;
}
export class GetSsmSessionListCommandBase implements GetSsmSessionListCommand {
    constructor(ssm: string, bearerToken: Nullable<string>);
    readonly ssm: string;
    readonly bearerToken: Nullable<string>;
}
export interface GetSsmSessionLogCommand extends TxSsmCommand {
    readonly sessionId: string;
    readonly txId: string;
    readonly ssm: string;
    readonly bearerToken: Nullable<string>;
}
export class GetSsmSessionLogCommandBase implements GetSsmSessionLogCommand {
    constructor(sessionId: string, txId: string, ssm: string, bearerToken: Nullable<string>);
    readonly sessionId: string;
    readonly txId: string;
    readonly ssm: string;
    readonly bearerToken: Nullable<string>;
}
export interface GetSsmSessionLogListCommand extends TxSsmCommand {
    readonly sessionId: string;
    readonly ssm: string;
    readonly bearerToken: Nullable<string>;
}
export class GetSsmSessionLogListBaseCommand implements GetSsmSessionLogListCommand {
    constructor(sessionId: string, ssm: string, bearerToken: Nullable<string>);
    readonly sessionId: string;
    readonly ssm: string;
    readonly bearerToken: Nullable<string>;
}
export interface TxChannel {
    readonly id: string;
}
export class TxChannelBase implements TxChannel {
    constructor(id: string);
    readonly id: string;
}
export interface TxSsm {
    readonly ssm: ssm.chaincode.dsl.Ssm;
    readonly channel: TxChannel;
    readonly version: string;
}
export class TxSsmBase implements TxSsm {
    constructor(ssm: ssm.chaincode.dsl.SsmBase, channel: TxChannelBase, version: string);
    readonly ssm: ssm.chaincode.dsl.SsmBase;
    readonly channel: TxChannelBase;
    readonly version: string;
}
export interface TxSsmCommand {
    readonly ssm: string;
    readonly bearerToken: Nullable<string>;
}
export interface TxSsmSession {
    readonly id: string;
    readonly currentState: TxSsmSessionState;
    readonly channel: TxChannel;
    readonly creationTransaction: Nullable<ssm.chaincode.dsl.blockchain.Transaction>;
}
export class TxSsmSessionBase implements TxSsmSession {
    constructor(id: string, currentState: TxSsmSessionStateBase, channel: TxChannelBase, creationTransaction: Nullable<ssm.chaincode.dsl.blockchain.TransactionBase>);
    readonly id: string;
    readonly currentState: TxSsmSessionStateBase;
    readonly channel: TxChannelBase;
    readonly creationTransaction: Nullable<ssm.chaincode.dsl.blockchain.TransactionBase>;
}
export interface TxSsmSessionState {
    readonly details: ssm.chaincode.dsl.SsmSessionState;
    readonly transaction: Nullable<ssm.chaincode.dsl.blockchain.Transaction>;
}
export class TxSsmSessionStateBase implements TxSsmSessionState {
    constructor(details: ssm.chaincode.dsl.SsmSessionState, transaction: Nullable<ssm.chaincode.dsl.blockchain.TransactionBase>);
    readonly details: ssm.chaincode.dsl.SsmSessionState;
    readonly transaction: Nullable<ssm.chaincode.dsl.blockchain.TransactionBase>;
}
export interface TxSsmUser {
    readonly name: string;
    readonly publicKey: string;
}
export class TxSsmUserBase implements TxSsmUser {
    constructor(name: string, publicKey: string);
    readonly name: string;
    readonly publicKey: string;
}
export namespace x2.api.ssm.domain {
    interface SsmApiFinder {
        getAllSsm(): f2.dsl.function.F2FunctionRemote<GetSsmListCommand, Array<TxSsm>>;
        getSsm(): f2.dsl.function.F2FunctionRemote<ssm.chaincode.dsl.query.SsmGetQuery, ssm.chaincode.dsl.query.SsmGetResult>;
        getAllSessions(): f2.dsl.function.F2FunctionRemote<GetSsmSessionListCommand, Array<TxSsmSession>>;
        getSession(): f2.dsl.function.F2FunctionRemote<GetSsmSessionCommand, Nullable<TxSsmSession>>;
        getSessionLogs(): f2.dsl.function.F2FunctionRemote<ssm.chaincode.dsl.query.SsmGetSessionLogsQuery, Array<ssm.chaincode.dsl.SsmSessionStateLog>>;
    }
}
export namespace f2.client.ktor.http {
    class HttpClientBuilder {
        constructor();
        build(scheme: string, host: string, port: number, path: Nullable<string>): f2.client.F2Client;
    }
}
export namespace f2.client.ktor {
    class Protocol {
        private constructor();
    }
    const HTTP: {
    } & f2.client.ktor.Protocol;
    const HTTPS: {
    } & f2.client.ktor.Protocol;
    const WS: {
    } & f2.client.ktor.Protocol;
    const WSS: {
    } & f2.client.ktor.Protocol;
    const TCP: {
    } & f2.client.ktor.Protocol;
}
export namespace x2.ssm.client {
    function ssmClient(host: string, port: number, path: Nullable<string>): kotlin.js.Promise<x2.ssm.client.SSMFunctionClient>;
    class SSMFunctionClient {
        constructor(client: f2.client.F2Client);
        getAllSsm(msg: GetSsmListCommand): kotlin.js.Promise<Array<TxSsm>>;
        getSsm(): f2.dsl.function.F2FunctionRemote<ssm.chaincode.dsl.query.SsmGetQuery, ssm.chaincode.dsl.query.SsmGetResult>;
        getAllSessions(msg: GetSsmSessionListCommand): kotlin.js.Promise<Array<TxSsmSession>>;
        getSession(): f2.dsl.function.F2FunctionRemote<GetSsmSessionCommand, Nullable<TxSsmSession>>;
        getSessionLogs(): f2.dsl.function.F2FunctionRemote<ssm.chaincode.dsl.query.SsmGetSessionLogsQuery, Array<ssm.chaincode.dsl.SsmSessionStateLog>>;
    }
    class F2Promise<T> {
        constructor(promise: kotlin.js.Promise<T>);
        then<S>(onFulfilled: Nullable<(p0: T) => S>, onRejected: Nullable<(p0: Error) => S>): kotlin.js.Promise<S>;
        /* ErrorDeclaration: Name is a reserved word */
    }
}
export as namespace x2_ssm_client;