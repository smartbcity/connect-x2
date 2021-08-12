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
    interface Transaction {
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
export namespace ssm.tx.dsl {
    interface SsmApiFinder {
        txSsmListQueryFunction(): f2.dsl.fnc.F2Function<ssm.tx.dsl.features.query.TxSsmListQueryDTO, ssm.tx.dsl.features.query.TxSsmListQueryResultDTO>;
        txSsmGetQueryFunction(): f2.dsl.fnc.F2Function<ssm.tx.dsl.features.query.TxSsmGetQueryDTO, ssm.tx.dsl.features.query.TxSsmGetQueryResultDTO>;
        txSsmSessionListQueryFunction(): f2.dsl.fnc.F2Function<ssm.tx.dsl.features.query.TxSsmSessionListQueryDTO, ssm.tx.dsl.features.query.TxSsmSessionListQueryResultDTO>;
        txSsmSessionGetQueryFunction(): f2.dsl.fnc.F2Function<ssm.tx.dsl.features.query.TxSsmSessionGetQueryDTO, ssm.tx.dsl.features.query.TxSsmSessionGetQueryResultDTO>;
        txSsmSessionLogListQueryFunction(): f2.dsl.fnc.F2Function<ssm.tx.dsl.features.query.TxSsmSessionLogListQueryDTO, ssm.tx.dsl.features.query.TxSsmSessionLogListQueryResultDTO>;
        txSsmSessionLogGetQueryFunction(): f2.dsl.fnc.F2Function<ssm.tx.dsl.features.query.TxSsmSessionLogGetQueryDTO, ssm.tx.dsl.features.query.TxSsmSessionLogGetQueryResultDTO>;
    }
}
export namespace ssm.tx.dsl.features.query {
    interface TxQueryDTO {
        readonly ssm: string;
        readonly bearerToken: Nullable<string>;
    }
}
export namespace ssm.tx.dsl.features.query {
    interface TxSsmGetQueryDTO extends ssm.tx.dsl.features.query.TxQueryDTO {
        readonly ssm: string;
        readonly bearerToken: Nullable<string>;
    }
    interface TxSsmGetQueryResultDTO {
        readonly ssm: Nullable<ssm.tx.dsl.model.TxSsm>;
    }
}
export namespace ssm.tx.dsl.features.query {
    interface TxSsmListQueryDTO {
    }
    interface TxSsmListQueryResultDTO {
        readonly list: kotlin.collections.List<ssm.tx.dsl.model.TxSsmDTO>;
    }
}
export namespace ssm.tx.dsl.features.query {
    interface TxSsmSessionGetQueryDTO extends ssm.tx.dsl.features.query.TxQueryDTO {
        readonly sessionId: string;
        readonly ssm: string;
        readonly bearerToken: Nullable<string>;
    }
    interface TxSsmSessionGetQueryResultDTO {
        readonly session: Nullable<ssm.tx.dsl.model.TxSsmSessionDTO>;
    }
}
export namespace ssm.tx.dsl.features.query {
    interface TxSsmSessionListQueryDTO extends ssm.tx.dsl.features.query.TxQueryDTO {
    }
    interface TxSsmSessionListQueryResultDTO {
        readonly list: kotlin.collections.List<ssm.tx.dsl.model.TxSsmSessionDTO>;
    }
}
export namespace ssm.tx.dsl.features.query {
    interface TxSsmSessionLogGetQueryDTO extends ssm.tx.dsl.features.query.TxQueryDTO {
        readonly sessionId: string;
        readonly txId: string;
        readonly ssm: string;
        readonly bearerToken: Nullable<string>;
    }
    interface TxSsmSessionLogGetQueryResultDTO {
        readonly ssmSessionState: Nullable<ssm.tx.dsl.model.TxSsmSessionStateDTO>;
    }
}
export namespace ssm.tx.dsl.features.query {
    interface TxSsmSessionLogListQueryDTO extends ssm.tx.dsl.features.query.TxQueryDTO {
        readonly sessionId: string;
        readonly ssm: string;
        readonly bearerToken: Nullable<string>;
    }
    interface TxSsmSessionLogListQueryResultDTO {
        readonly list: kotlin.collections.List<ssm.tx.dsl.model.TxSsmSessionState>;
    }
}
export namespace ssm.tx.dsl.model {
    interface TxSsmDTO {
        readonly ssm: ssm.chaincode.dsl.SsmDTO;
        readonly channel: ssm.tx.dsl.model.TxChannelDTO;
        readonly version: string;
    }
}
export namespace ssm.tx.dsl.model {
    interface TxSsmSessionDTO {
        readonly id: string;
        readonly state: ssm.tx.dsl.model.TxSsmSessionStateDTO;
        readonly channel: ssm.tx.dsl.model.TxChannelDTO;
        readonly transaction: Nullable<ssm.chaincode.dsl.blockchain.TransactionDTO>;
    }
}
export namespace ssm.tx.dsl.model {
    interface TxSsmSessionStateDTO {
        readonly details: ssm.chaincode.dsl.SsmSessionStateDTO;
        readonly transaction: Nullable<ssm.chaincode.dsl.blockchain.TransactionDTO>;
    }
}
export namespace ssm.tx.dsl.model {
    interface TxSsmUserDTO {
        readonly agent: ssm.chaincode.dsl.SsmAgentDTO;
    }
}
export namespace f2.client {
    interface F2Client {
        get(route: string): f2.dsl.fnc.F2Supplier<string>;
        invoke(route: string): f2.dsl.fnc.F2Function<string, string>;
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
export namespace ssm.tx.dsl.features.query {
    class TxSsmGetQuery implements ssm.tx.dsl.features.query.TxSsmGetQueryDTO {
        constructor(ssm: string, bearerToken: Nullable<string>);
        readonly ssm: string;
        readonly bearerToken: Nullable<string>;
    }
    class TxSsmGetQueryResult implements ssm.tx.dsl.features.query.TxSsmGetQueryResultDTO {
        constructor(ssm: Nullable<ssm.tx.dsl.model.TxSsm>);
        readonly ssm: Nullable<ssm.tx.dsl.model.TxSsm>;
    }
}
export namespace ssm.tx.dsl.features.query {
    class TxSsmListQuery implements ssm.tx.dsl.features.query.TxSsmListQueryDTO {
        constructor();
    }
    class TxSsmListQueryResult implements ssm.tx.dsl.features.query.TxSsmListQueryResultDTO {
        constructor(list: kotlin.collections.List<ssm.tx.dsl.model.TxSsm>);
        readonly list: kotlin.collections.List<ssm.tx.dsl.model.TxSsm>;
    }
}
export namespace ssm.tx.dsl.features.query {
    class TxSsmSessionGetQuery implements ssm.tx.dsl.features.query.TxSsmSessionGetQueryDTO {
        constructor(sessionId: string, ssm: string, bearerToken: Nullable<string>);
        readonly sessionId: string;
        readonly ssm: string;
        readonly bearerToken: Nullable<string>;
    }
    class TxSsmSessionGetQueryResult implements ssm.tx.dsl.features.query.TxSsmSessionGetQueryResultDTO {
        constructor(session: Nullable<ssm.tx.dsl.model.TxSsmSession>);
        readonly session: Nullable<ssm.tx.dsl.model.TxSsmSession>;
    }
}
export namespace ssm.tx.dsl.features.query {
    class TxSsmSessionListQuery implements ssm.tx.dsl.features.query.TxSsmSessionListQueryDTO {
        constructor(ssm: string, bearerToken: Nullable<string>);
        readonly ssm: string;
        readonly bearerToken: Nullable<string>;
    }
    class TxSsmSessionListQueryResult implements ssm.tx.dsl.features.query.TxSsmSessionListQueryResultDTO {
        constructor(list: kotlin.collections.List<ssm.tx.dsl.model.TxSsmSession>);
        readonly list: kotlin.collections.List<ssm.tx.dsl.model.TxSsmSession>;
    }
}
export namespace ssm.tx.dsl.features.query {
    class TxSsmSessionLogGetQuery implements ssm.tx.dsl.features.query.TxSsmSessionLogGetQueryDTO {
        constructor(sessionId: string, txId: string, ssm: string, bearerToken: Nullable<string>);
        readonly sessionId: string;
        readonly txId: string;
        readonly ssm: string;
        readonly bearerToken: Nullable<string>;
    }
    class TxSsmSessionLogGetQueryResult implements ssm.tx.dsl.features.query.TxSsmSessionLogGetQueryResultDTO {
        constructor(ssmSessionState: Nullable<ssm.tx.dsl.model.TxSsmSessionState>);
        readonly ssmSessionState: Nullable<ssm.tx.dsl.model.TxSsmSessionState>;
    }
}
export namespace ssm.tx.dsl.features.query {
    class TxSsmSessionLogListQuery implements ssm.tx.dsl.features.query.TxSsmSessionLogListQueryDTO {
        constructor(sessionId: string, ssm: string, bearerToken: Nullable<string>);
        readonly sessionId: string;
        readonly ssm: string;
        readonly bearerToken: Nullable<string>;
    }
    class SsmSessionLogListQueryResult implements ssm.tx.dsl.features.query.TxSsmSessionLogListQueryResultDTO {
        constructor(list: kotlin.collections.List<ssm.tx.dsl.model.TxSsmSessionState>);
        readonly list: kotlin.collections.List<ssm.tx.dsl.model.TxSsmSessionState>;
    }
}
export namespace ssm.tx.dsl.model {
    class TxChannel implements ssm.tx.dsl.model.TxChannelDTO {
        constructor(id: string);
        readonly id: string;
    }
}
export namespace ssm.tx.dsl.model {
    class TxSsm implements ssm.tx.dsl.model.TxSsmDTO {
        constructor(ssm: ssm.chaincode.dsl.Ssm, channel: ssm.tx.dsl.model.TxChannel, version: string);
        readonly ssm: ssm.chaincode.dsl.Ssm;
        readonly channel: ssm.tx.dsl.model.TxChannel;
        readonly version: string;
    }
}
export namespace ssm.tx.dsl.model {
    class TxSsmSession implements ssm.tx.dsl.model.TxSsmSessionDTO {
        constructor(id: string, state: ssm.tx.dsl.model.TxSsmSessionState, channel: ssm.tx.dsl.model.TxChannel, transaction: Nullable<ssm.chaincode.dsl.blockchain.Transaction>);
        readonly id: string;
        readonly state: ssm.tx.dsl.model.TxSsmSessionState;
        readonly channel: ssm.tx.dsl.model.TxChannel;
        readonly transaction: Nullable<ssm.chaincode.dsl.blockchain.Transaction>;
    }
}
export namespace ssm.tx.dsl.model {
    class TxSsmSessionState implements ssm.tx.dsl.model.TxSsmSessionStateDTO {
        constructor(details: ssm.chaincode.dsl.SsmSessionState, transaction: Nullable<ssm.chaincode.dsl.blockchain.Transaction>);
        readonly details: ssm.chaincode.dsl.SsmSessionState;
        readonly transaction: Nullable<ssm.chaincode.dsl.blockchain.Transaction>;
    }
}
export namespace ssm.tx.dsl.model {
    class TxSsmUser implements ssm.tx.dsl.model.TxSsmUserDTO {
        constructor(agent: ssm.chaincode.dsl.SsmAgent);
        readonly agent: ssm.chaincode.dsl.SsmAgent;
    }
}
export namespace io.ktor.util {
    function AttributesJsFn(concurrent: boolean): io.ktor.util.Attributes;
}
export namespace f2.client.ktor.http {
    class HttpClientBuilder {
        constructor();
        build(scheme: string, host: string, port: number, path: Nullable<string>): kotlin.js.Promise<f2.client.F2Client>;
    }
}
export namespace f2.client.ktor.rsocket {
    class RSocketF2Client implements f2.client.F2Client {
        constructor(rSocketClient: f2.client.ktor.rsocket.RSocketClient);
        get(route: string): f2.dsl.fnc.F2Supplier<string>;
        invoke(route: string): f2.dsl.fnc.F2Function<string, string>;
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
    class SSMFunctionClient {
        constructor(client: f2.client.F2Client);
    }
}
export namespace x2.ssm.client {
    function ssmClient(host: string, port: number, path: Nullable<string>): kotlin.js.Promise<x2.ssm.client.SSMFunctionClient>;
}
export as namespace x2_ssm_client;