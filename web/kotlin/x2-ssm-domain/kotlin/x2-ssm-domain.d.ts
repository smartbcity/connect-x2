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
export namespace ssm.dsl {
    class Ssm {
        constructor(name: string, transitions: kotlin.collections.List<ssm.dsl.SsmTransition>);
        readonly name: string;
        readonly transitions: kotlin.collections.List<ssm.dsl.SsmTransition>;
        component1(): string;
        component2(): kotlin.collections.List<ssm.dsl.SsmTransition>;
        copy(name: string, transitions: kotlin.collections.List<ssm.dsl.SsmTransition>): ssm.dsl.Ssm;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export namespace ssm.dsl {
    class Agent {
        constructor(name: string, pub: Int8Array);
        readonly name: string;
        readonly pub: Int8Array;
        equals(other: Nullable<any>): boolean;
        hashCode(): number;
        component1(): string;
        component2(): Int8Array;
        copy(name: string, pub: Int8Array): ssm.dsl.SsmAgent;
        toString(): string;
    }
}
export namespace ssm.dsl {
    interface SsmCommand extends f2.dsl.cqrs.Command {
        readonly baseUrl: string;
        readonly channelId: Nullable<string>;
        readonly chaincodeId: Nullable<string>;
        readonly bearerToken: Nullable<string>;
    }
}
export namespace ssm.dsl {
    class Context implements ssm.dsl.WithPrivate {
        constructor(session: string, _public: string, iteration: number, _private: Nullable<kotlin.collections.Map<string, string>>);
        readonly session: string;
        readonly public: string;
        readonly iteration: number;
        readonly private: Nullable<kotlin.collections.Map<string, string>>;
        component1(): string;
        component2(): string;
        component3(): number;
        component4(): Nullable<kotlin.collections.Map<string, string>>;
        copy(session: string, _public: string, iteration: number, _private: Nullable<kotlin.collections.Map<string, string>>): ssm.dsl.SsmContext;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export namespace ssm.dsl {
    class Grant {
        constructor(user: string, iteration: number, credits: kotlin.collections.Map<string, ssm.dsl.Credit>);
        readonly user: string;
        readonly iteration: number;
        readonly credits: kotlin.collections.Map<string, ssm.dsl.Credit>;
        component1(): string;
        component2(): number;
        component3(): kotlin.collections.Map<string, ssm.dsl.Credit>;
        copy(user: string, iteration: number, credits: kotlin.collections.Map<string, ssm.dsl.Credit>): ssm.dsl.SsmGrant;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    class Credit {
        constructor(amount: number);
        readonly amount: number;
        component1(): number;
        copy(amount: number): ssm.dsl.Credit;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export namespace ssm.dsl {
    class SsmSession implements ssm.dsl.WithPrivate {
        constructor(ssm: Nullable<string>, session: string, roles: Nullable<kotlin.collections.Map<string, string>>, _public: Nullable<any>, _private: Nullable<kotlin.collections.Map<string, string>>);
        readonly ssm: Nullable<string>;
        readonly session: string;
        readonly roles: Nullable<kotlin.collections.Map<string, string>>;
        readonly public: Nullable<any>;
        readonly private: Nullable<kotlin.collections.Map<string, string>>;
    }
}
export namespace ssm.dsl {
    class SsmSessionState extends ssm.dsl.SsmSession implements ssm.dsl.WithPrivate {
        constructor(ssm: Nullable<string>, session: string, roles: Nullable<kotlin.collections.Map<string, string>>, _public: Nullable<any>, _private: Nullable<kotlin.collections.Map<string, string>>, origin: Nullable<ssm.dsl.SsmTransition>, current: number, iteration: number);
        readonly ssm: Nullable<string>;
        readonly session: string;
        readonly roles: Nullable<kotlin.collections.Map<string, string>>;
        readonly public: Nullable<any>;
        readonly private: Nullable<kotlin.collections.Map<string, string>>;
        readonly origin: Nullable<ssm.dsl.SsmTransition>;
        readonly current: number;
        readonly iteration: number;
        component1(): Nullable<string>;
        component2(): string;
        component3(): Nullable<kotlin.collections.Map<string, string>>;
        component4(): Nullable<any>;
        component5(): Nullable<kotlin.collections.Map<string, string>>;
        component6(): Nullable<ssm.dsl.SsmTransition>;
        component7(): number;
        component8(): number;
        copy(ssm: Nullable<string>, session: string, roles: Nullable<kotlin.collections.Map<string, string>>, _public: Nullable<any>, _private: Nullable<kotlin.collections.Map<string, string>>, origin: Nullable<ssm.dsl.SsmTransition>, current: number, iteration: number): ssm.dsl.SsmSessionState;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export namespace ssm.dsl {
    class SsmSessionStateLog {
        constructor(txId: string, state: ssm.dsl.SsmSessionState);
        readonly txId: string;
        readonly state: ssm.dsl.SsmSessionState;
        component1(): string;
        component2(): ssm.dsl.SsmSessionState;
        copy(txId: string, state: ssm.dsl.SsmSessionState): ssm.dsl.SsmSessionStateLog;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export namespace ssm.dsl {
    class Transition {
        constructor(from: number, to: number, role: string, action: string);
        readonly from: number;
        readonly to: number;
        readonly role: string;
        readonly action: string;
        component1(): number;
        component2(): number;
        component3(): string;
        component4(): string;
        copy(from: number, to: number, role: string, action: string): ssm.dsl.SsmTransition;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export namespace ssm.dsl.query {
    class SsmGetAdminQuery implements ssm.dsl.SsmCommand {
        constructor(baseUrl: string, channelId: Nullable<string>, chaincodeId: Nullable<string>, bearerToken: Nullable<string>, name: string);
        readonly baseUrl: string;
        readonly channelId: Nullable<string>;
        readonly chaincodeId: Nullable<string>;
        readonly bearerToken: Nullable<string>;
        readonly name: string;
    }
    class SsmGetAdminResult implements f2.dsl.cqrs.Event {
        constructor(admin: Nullable<ssm.dsl.SsmAgent>);
        readonly admin: Nullable<ssm.dsl.SsmAgent>;
    }
}
export namespace ssm.dsl.query {
    class SsmGetBlockQuery implements ssm.dsl.SsmCommand {
        constructor(baseUrl: string, channelId: Nullable<string>, chaincodeId: Nullable<string>, bearerToken: Nullable<string>);
        readonly baseUrl: string;
        readonly channelId: Nullable<string>;
        readonly chaincodeId: Nullable<string>;
        readonly bearerToken: Nullable<string>;
    }
    class SsmGetBlockResult implements f2.dsl.cqrs.Event {
        constructor();
    }
}
export namespace ssm.dsl.query {
    class SsmGetQuery implements ssm.dsl.SsmCommand {
        constructor(baseUrl: string, channelId: Nullable<string>, chaincodeId: Nullable<string>, bearerToken: Nullable<string>, name: string);
        readonly baseUrl: string;
        readonly channelId: Nullable<string>;
        readonly chaincodeId: Nullable<string>;
        readonly bearerToken: Nullable<string>;
        readonly name: string;
    }
    class SsmGetResult implements f2.dsl.cqrs.Event {
        constructor(ssm: Nullable<ssm.dsl.Ssm>);
        readonly ssm: Nullable<ssm.dsl.Ssm>;
    }
}
export namespace ssm.dsl.query {
    class SsmGetSessionFirstAndLastTransactionQuery implements ssm.dsl.SsmCommand {
        constructor(session: string, baseUrl: string, channelId: Nullable<string>, chaincodeId: Nullable<string>, bearerToken: Nullable<string>);
        readonly session: string;
        readonly baseUrl: string;
        readonly channelId: Nullable<string>;
        readonly chaincodeId: Nullable<string>;
        readonly bearerToken: Nullable<string>;
    }
    class SsmGetSessionFirstAndLastTransactionQueryResult {
        constructor(firstTransaction: Nullable<ssm.dsl.blockchain.Transaction>, lastTransaction: Nullable<ssm.dsl.blockchain.Transaction>);
        readonly firstTransaction: Nullable<ssm.dsl.blockchain.Transaction>;
        readonly lastTransaction: Nullable<ssm.dsl.blockchain.Transaction>;
    }
}
export namespace ssm.dsl.query {
    class SsmGetSessionLogsQuery implements ssm.dsl.SsmCommand {
        constructor(session: string, baseUrl: string, channelId: Nullable<string>, chaincodeId: Nullable<string>, bearerToken: Nullable<string>);
        readonly session: string;
        readonly baseUrl: string;
        readonly channelId: Nullable<string>;
        readonly chaincodeId: Nullable<string>;
        readonly bearerToken: Nullable<string>;
    }
    class SsmGetSessionLogsQueryResult {
        constructor(logs: kotlin.collections.List<ssm.dsl.SsmSessionStateLog>);
        readonly logs: kotlin.collections.List<ssm.dsl.SsmSessionStateLog>;
        component1(): kotlin.collections.List<ssm.dsl.SsmSessionStateLog>;
        copy(logs: kotlin.collections.List<ssm.dsl.SsmSessionStateLog>): ssm.dsl.query.SsmGetSessionLogsQueryResult;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export namespace ssm.dsl.query {
    class SsmGetSessionQuery implements ssm.dsl.SsmCommand {
        constructor(baseUrl: string, channelId: Nullable<string>, chaincodeId: Nullable<string>, bearerToken: Nullable<string>, name: string);
        readonly baseUrl: string;
        readonly channelId: Nullable<string>;
        readonly chaincodeId: Nullable<string>;
        readonly bearerToken: Nullable<string>;
        readonly name: string;
    }
    class SsmGetSessionResult implements f2.dsl.cqrs.Event {
        constructor(session: Nullable<ssm.dsl.SsmSessionState>);
        readonly session: Nullable<ssm.dsl.SsmSessionState>;
    }
}
export namespace ssm.dsl.query {
    class SsmGetUserQuery implements ssm.dsl.SsmCommand {
        constructor(baseUrl: string, channelId: Nullable<string>, chaincodeId: Nullable<string>, bearerToken: Nullable<string>, name: string);
        readonly baseUrl: string;
        readonly channelId: Nullable<string>;
        readonly chaincodeId: Nullable<string>;
        readonly bearerToken: Nullable<string>;
        readonly name: string;
    }
    class SsmGetUserResult implements f2.dsl.cqrs.Event {
        constructor(user: Nullable<ssm.dsl.SsmAgent>);
        readonly user: Nullable<ssm.dsl.SsmAgent>;
    }
}
export namespace ssm.dsl.query {
    class SsmListAdminQuery implements ssm.dsl.SsmCommand {
        constructor(baseUrl: string, channelId: Nullable<string>, chaincodeId: Nullable<string>, bearerToken: Nullable<string>);
        readonly baseUrl: string;
        readonly channelId: Nullable<string>;
        readonly chaincodeId: Nullable<string>;
        readonly bearerToken: Nullable<string>;
    }
    class SsmListAdminResult implements f2.dsl.cqrs.Event {
        constructor(values: kotlin.collections.List<string>);
        readonly values: kotlin.collections.List<string>;
    }
}
export namespace ssm.dsl.query {
    class SsmListSessionQuery implements ssm.dsl.SsmCommand {
        constructor(baseUrl: string, channelId: Nullable<string>, chaincodeId: Nullable<string>, bearerToken: Nullable<string>);
        readonly baseUrl: string;
        readonly channelId: Nullable<string>;
        readonly chaincodeId: Nullable<string>;
        readonly bearerToken: Nullable<string>;
    }
    class SsmListSessionResult implements f2.dsl.cqrs.Event {
        constructor(values: kotlin.collections.List<string>);
        readonly values: kotlin.collections.List<string>;
    }
}
export namespace ssm.dsl.query {
    class SsmListSsmQuery implements ssm.dsl.SsmCommand {
        constructor(baseUrl: string, channelId: Nullable<string>, chaincodeId: Nullable<string>, bearerToken: Nullable<string>);
        readonly baseUrl: string;
        readonly channelId: Nullable<string>;
        readonly chaincodeId: Nullable<string>;
        readonly bearerToken: Nullable<string>;
    }
    class SsmListSsmResult implements f2.dsl.cqrs.Event {
        constructor(values: kotlin.collections.List<string>);
        readonly values: kotlin.collections.List<string>;
    }
}
export namespace ssm.dsl.query {
    class SsmListUserQuery implements ssm.dsl.SsmCommand {
        constructor(baseUrl: string, channelId: Nullable<string>, chaincodeId: Nullable<string>, bearerToken: Nullable<string>);
        readonly baseUrl: string;
        readonly channelId: Nullable<string>;
        readonly chaincodeId: Nullable<string>;
        readonly bearerToken: Nullable<string>;
    }
    class SsmListUserResult implements f2.dsl.cqrs.Event {
        constructor(values: kotlin.collections.List<string>);
        readonly values: kotlin.collections.List<string>;
    }
}
export namespace x2.api.ssm.model {
    interface Ssm {
        readonly name: string;
        readonly version: string;
        readonly transitions: kotlin.collections.List<x2.api.ssm.model.SsmTransition>;
    }
    class SsmBase implements x2.api.ssm.model.Ssm {
        constructor(name: string, version: string, transitions: kotlin.collections.List<x2.api.ssm.model.SsmTransitionBase>);
        readonly name: string;
        readonly version: string;
        readonly transitions: kotlin.collections.List<x2.api.ssm.model.SsmTransitionBase>;
    }
}
export namespace x2.api.ssm.model {
    interface SsmSession {
        readonly id: string;
        readonly channel: string;
        readonly creationDate: kotlin.Long;
        readonly lastTransaction: x2.api.ssm.model.SsmTransaction;
    }
    class SsmSessionBase implements x2.api.ssm.model.SsmSession {
        constructor(id: string, channel: string, creationDate: kotlin.Long, lastTransaction: x2.api.ssm.model.SsmTransactionBase);
        readonly id: string;
        readonly channel: string;
        readonly creationDate: kotlin.Long;
        readonly lastTransaction: x2.api.ssm.model.SsmTransactionBase;
    }
}
export namespace x2.api.ssm.model {
    interface SsmTransaction {
        readonly id: string;
        readonly from: number;
        readonly to: number;
        readonly date: kotlin.Long;
        readonly signer: x2.api.ssm.model.SsmUser;
    }
    class SsmTransactionBase implements x2.api.ssm.model.SsmTransaction {
        constructor(id: string, from: number, to: number, date: kotlin.Long, signer: x2.api.ssm.model.SsmUserBase);
        readonly id: string;
        readonly from: number;
        readonly to: number;
        readonly date: kotlin.Long;
        readonly signer: x2.api.ssm.model.SsmUserBase;
    }
}
export namespace x2.api.ssm.model {
    interface SsmTransition {
        readonly from: number;
        readonly to: number;
        readonly role: string;
        readonly action: string;
    }
    class SsmTransitionBase implements x2.api.ssm.model.SsmTransition {
        constructor(from: number, to: number, role: string, action: string);
        readonly from: number;
        readonly to: number;
        readonly role: string;
        readonly action: string;
    }
}
export namespace x2.api.ssm.model {
    interface SsmUser {
        readonly name: string;
        readonly publicKey: string;
    }
    class SsmUserBase implements x2.api.ssm.model.SsmUser {
        constructor(name: string, publicKey: string);
        readonly name: string;
        readonly publicKey: string;
    }
}
export namespace x2.api.ssm.model.features {
    interface GetSsmListCommand {
        readonly dbName: string;
    }
    class GetSsmListBase implements x2.api.ssm.model.features.GetSsmListCommand {
        constructor(dbName: string);
        readonly dbName: string;
    }
}
export namespace x2.api.ssm.model.features {
    interface GetSsmSessionListCommand {
        readonly baseUrl: string;
        readonly dbName: string;
        readonly channelId: Nullable<string>;
        readonly chaincodeId: Nullable<string>;
        readonly bearerToken: Nullable<string>;
        readonly ssm: Nullable<string>;
    }
    class GetSsmSessionListCommandBase implements x2.api.ssm.model.features.GetSsmSessionListCommand {
        constructor(baseUrl: string, dbName: string, channelId: Nullable<string>, chaincodeId: Nullable<string>, bearerToken: Nullable<string>, ssm: Nullable<string>);
        readonly baseUrl: string;
        readonly dbName: string;
        readonly channelId: Nullable<string>;
        readonly chaincodeId: Nullable<string>;
        readonly bearerToken: Nullable<string>;
        readonly ssm: Nullable<string>;
    }
}
export as namespace x2_ssm_domain;