type Nullable<T> = T | null | undefined
declare const __doNotImplementIt: unique symbol
type __doNotImplementIt = typeof __doNotImplementIt
export namespace f2.dsl.cqrs {
    interface Command extends f2.dsl.cqrs.Message {

    }
}
export namespace f2.dsl.cqrs {
    interface Event extends f2.dsl.cqrs.Message {

    }
}
export namespace f2.dsl.cqrs {
    interface Message {

    }
}
export namespace f2.dsl.cqrs {
    interface Query extends f2.dsl.cqrs.Message {

    }
}
export namespace f2.dsl.cqrs.error {
    interface ErrorDTO<PAYLOAD> {
        readonly severity: f2.dsl.cqrs.error.ErrorSeverity;
        readonly type: string;
        readonly description: string;
        readonly date: string;
        readonly payload: PAYLOAD;

    }
    class Error<PAYLOAD> implements f2.dsl.cqrs.error.ErrorDTO<PAYLOAD> {
        constructor(type: string, description: string, date: string, payload: PAYLOAD, severity: f2.dsl.cqrs.error.ErrorSeverity);
        get type(): string;
        get description(): string;
        get date(): string;
        get payload(): PAYLOAD;
        get severity(): f2.dsl.cqrs.error.ErrorSeverity;

    }
    class ErrorSeverity {
        constructor(severity: string);
        get severity(): string;
    }
    class ErrorSeverityWarning extends f2.dsl.cqrs.error.ErrorSeverity {
        constructor();
    }
    class AlertSeverityError extends f2.dsl.cqrs.error.ErrorSeverity {
        constructor();
    }
}
export namespace f2.dsl.cqrs.exception {
    class F2Exception /* extends kotlin.Exception */ {
        constructor(id: string, error: f2.dsl.cqrs.error.ErrorDTO<any /*UnknownType **/>);
        get id(): string;
        get error(): f2.dsl.cqrs.error.ErrorDTO<any /*UnknownType **/>;
    }
}
export namespace f2.dsl.cqrs.page {
    interface PageDTO<OBJECT> {
        readonly total: number;
        readonly items: any/* kotlin.collections.List<OBJECT> */;

    }
    class Page<OBJECT> implements f2.dsl.cqrs.page.PageDTO<OBJECT> {
        constructor(total: number, items: any/* kotlin.collections.List<OBJECT> */);
        get total(): number;
        get items(): any/* kotlin.collections.List<OBJECT> */;

    }
}
export namespace f2.dsl.cqrs.page {
    interface PageQueryDTO extends f2.dsl.cqrs.Query {
        readonly pagination: Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>;

    }
    interface PageQueryResultDTO<OBJECT> extends f2.dsl.cqrs.Event, f2.dsl.cqrs.page.PageDTO<OBJECT> {
        readonly total: number;
        readonly items: any/* kotlin.collections.List<OBJECT> */;
        readonly pagination: Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>;

    }
    class PageQuery implements f2.dsl.cqrs.page.PageQueryDTO {
        constructor(pagination: Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>);
        get pagination(): Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>;

    }
    class PageQueryResult<OBJECT> implements f2.dsl.cqrs.page.PageQueryResultDTO<OBJECT> {
        constructor(pagination: Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>, total: number, items: any/* kotlin.collections.List<OBJECT> */);
        get pagination(): Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>;
        get total(): number;
        get items(): any/* kotlin.collections.List<OBJECT> */;

    }
}
export namespace f2.dsl.cqrs.page {
    interface Pagination {

    }
    interface OffsetPaginationDTO {
        readonly offset: number;
        readonly limit: number;

    }
    class OffsetPagination implements f2.dsl.cqrs.page.OffsetPaginationDTO, f2.dsl.cqrs.page.Pagination {
        constructor(offset: number, limit: number);
        get offset(): number;
        get limit(): number;

    }
    interface PagePaginationDTO {
        readonly page: Nullable<number>;
        readonly size: Nullable<number>;

    }
    class PagePagination implements f2.dsl.cqrs.page.PagePaginationDTO, f2.dsl.cqrs.page.Pagination {
        constructor(page: Nullable<number>, size: Nullable<number>);
        get page(): Nullable<number>;
        get size(): Nullable<number>;

    }
}
export namespace f2.dsl.fnc {
    interface F2Function<T, R> {
        invoke(cmd: T): any/* kotlin.js.Promise<R> */;

    }
    interface F2Supplier<R> {
        invoke(): any/* kotlin.js.Promise<string> */;

    }
    interface F2Consumer<T> {
        invoke(value: T): void;

    }
}
export namespace ssm.chaincode.dsl {
    interface SsmChaincodeQueries {
        ssmGetAdminFunction(): f2.dsl.fnc.F2Function<ssm.chaincode.dsl.query.SsmGetAdminQuery, ssm.chaincode.dsl.query.SsmGetAdminResult>;
        ssmGetQueryFunction(): f2.dsl.fnc.F2Function<ssm.chaincode.dsl.query.SsmGetQuery, ssm.chaincode.dsl.query.SsmGetResult>;
        ssmGetSessionLogsQueryFunction(): f2.dsl.fnc.F2Function<ssm.chaincode.dsl.query.SsmGetSessionLogsQuery, ssm.chaincode.dsl.query.SsmGetSessionLogsQueryResult>;
        ssmGetSessionQueryFunction(): f2.dsl.fnc.F2Function<ssm.chaincode.dsl.query.SsmGetSessionQuery, ssm.chaincode.dsl.query.SsmGetSessionResult>;
        ssmGetTransactionQueryFunction(): f2.dsl.fnc.F2Function<ssm.chaincode.dsl.query.SsmGetTransactionQuery, ssm.chaincode.dsl.query.SsmGetTransactionQueryResult>;
        ssmGetUserFunction(): f2.dsl.fnc.F2Function<ssm.chaincode.dsl.query.SsmGetUserQuery, ssm.chaincode.dsl.query.SsmGetUserResult>;
        ssmListAdminQueryFunction(): f2.dsl.fnc.F2Function<ssm.chaincode.dsl.query.SsmListAdminQuery, ssm.chaincode.dsl.query.SsmListAdminResult>;
        ssmListSessionQueryFunction(): f2.dsl.fnc.F2Function<ssm.chaincode.dsl.query.SsmListSessionQuery, ssm.chaincode.dsl.query.SsmListSessionResult>;
        ssmListSsmQueryFunction(): f2.dsl.fnc.F2Function<ssm.chaincode.dsl.query.SsmListSsmQuery, ssm.chaincode.dsl.query.SsmListSsmResult>;
        ssmListUserQueryFunction(): f2.dsl.fnc.F2Function<ssm.chaincode.dsl.query.SsmListUserQuery, ssm.chaincode.dsl.query.SsmListUserResult>;

    }
}
export namespace ssm.chaincode.dsl {
    interface SsmQueryDTO extends f2.dsl.cqrs.Query {
        readonly chaincodeUri: ssm.chaincode.dsl.model.uri.ChaincodeUri;

    }
    interface SsmItemResultDTO<T> extends f2.dsl.cqrs.Event {
        readonly item: Nullable<T>;

    }
    interface SsmItemsResultDTO<T> extends f2.dsl.cqrs.Event {
        readonly items: Array<T>;

    }
}
export namespace ssm.chaincode.dsl.blockchain {
    interface BlockDTO {
        readonly blockId: string;
        readonly previousHash: Int8Array;
        readonly dataHash: Int8Array;
        readonly transactions: any/* kotlin.collections.List<ssm.chaincode.dsl.blockchain.TransactionDTO> */;

    }
    class Block implements ssm.chaincode.dsl.blockchain.BlockDTO {
        constructor(blockId: string, previousHash: Int8Array, dataHash: Int8Array, transactions: any/* kotlin.collections.List<ssm.chaincode.dsl.blockchain.Transaction> */);
        get blockId(): string;
        get previousHash(): Int8Array;
        get dataHash(): Int8Array;
        get transactions(): any/* kotlin.collections.List<ssm.chaincode.dsl.blockchain.Transaction> */;

    }
}
export namespace ssm.chaincode.dsl.blockchain {
    abstract class EnvelopeType {
        private constructor();
        static get TRANSACTION_ENVELOPE(): ssm.chaincode.dsl.blockchain.EnvelopeType & {
            get name(): "TRANSACTION_ENVELOPE";
            get ordinal(): 0;
        };
        static get ENVELOPE(): ssm.chaincode.dsl.blockchain.EnvelopeType & {
            get name(): "ENVELOPE";
            get ordinal(): 1;
        };
        static values(): Array<ssm.chaincode.dsl.blockchain.EnvelopeType>;
        static valueOf(value: string): ssm.chaincode.dsl.blockchain.EnvelopeType;
        get name(): "TRANSACTION_ENVELOPE" | "ENVELOPE";
        get ordinal(): 0 | 1;
    }
}
export namespace ssm.chaincode.dsl.blockchain {
    interface IdentitiesInfoDTO {
        readonly id: string;
        readonly mspid: string;

    }
    class IdentitiesInfo implements ssm.chaincode.dsl.blockchain.IdentitiesInfoDTO {
        constructor(id: string, mspid: string);
        get id(): string;
        get mspid(): string;

    }
}
export namespace ssm.chaincode.dsl.blockchain {
    interface TransactionDTO {
        readonly transactionId: string;
        readonly blockId: string;
        readonly timestamp: any/* kotlin.Long */;
        readonly isValid: boolean;
        readonly channelId: string;
        readonly creator: ssm.chaincode.dsl.blockchain.IdentitiesInfoDTO;
        readonly nonce: Int8Array;
        readonly type: ssm.chaincode.dsl.blockchain.EnvelopeType;
        readonly validationCode: number;

    }
    class Transaction implements ssm.chaincode.dsl.blockchain.TransactionDTO {
        constructor(transactionId: string, blockId: string, timestamp: any/* kotlin.Long */, isValid: boolean, channelId: string, creator: ssm.chaincode.dsl.blockchain.IdentitiesInfo, nonce: Int8Array, type: ssm.chaincode.dsl.blockchain.EnvelopeType, validationCode: number);
        get transactionId(): string;
        get blockId(): string;
        get timestamp(): any/* kotlin.Long */;
        get isValid(): boolean;
        get channelId(): string;
        get creator(): ssm.chaincode.dsl.blockchain.IdentitiesInfo;
        get nonce(): Int8Array;
        get type(): ssm.chaincode.dsl.blockchain.EnvelopeType;
        get validationCode(): number;

    }
}
export namespace ssm.chaincode.dsl.config {
    interface SsmChaincodePropertiesDTO {
        readonly url: string;

    }
    class ChaincodeSsmConfig implements ssm.chaincode.dsl.config.SsmChaincodePropertiesDTO {
        constructor(url: string);
        get url(): string;

    }
}
export namespace ssm.chaincode.dsl.model {
    interface SsmAgentDTO {
        readonly name: string;
        readonly pub: Int8Array;

    }
    class SsmAgent implements ssm.chaincode.dsl.model.SsmAgentDTO {
        constructor(name: string, pub: Int8Array);
        get name(): string;
        get pub(): Int8Array;
        equals(other: Nullable<any>): boolean;
        hashCode(): number;
        static get Companion(): {
        };
        component1(): string;
        component2(): Int8Array;
        copy(name: string, pub: Int8Array): ssm.chaincode.dsl.model.Agent;
        toString(): string;

    }
}
export namespace ssm.chaincode.dsl.model {
    interface ChaincodeDTO {
        readonly id: string;
        readonly channelId: string;

    }
    class Chaincode implements ssm.chaincode.dsl.model.ChaincodeDTO {
        constructor(id: string, channelId: string);
        get id(): string;
        get channelId(): string;
        component1(): string;
        component2(): string;
        copy(id: string, channelId: string): ssm.chaincode.dsl.model.Chaincode;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;

    }
}
export namespace ssm.chaincode.dsl.model {
    interface SsmDTO {
        readonly name: string;
        readonly transitions: any/* kotlin.collections.List<ssm.chaincode.dsl.model.SsmTransitionDTO> */;

    }
    class Ssm implements ssm.chaincode.dsl.model.SsmDTO {
        constructor(name: string, transitions: any/* kotlin.collections.List<ssm.chaincode.dsl.model.SsmTransition> */);
        get name(): string;
        get transitions(): any/* kotlin.collections.List<ssm.chaincode.dsl.model.SsmTransition> */;
        component1(): string;
        component2(): any/* kotlin.collections.List<ssm.chaincode.dsl.model.SsmTransition> */;
        copy(name: string, transitions: any/* kotlin.collections.List<ssm.chaincode.dsl.model.SsmTransition> */): ssm.chaincode.dsl.model.Ssm;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;

    }
}
export namespace ssm.chaincode.dsl.model {
    interface SsmContextDTO extends ssm.chaincode.dsl.model.WithPrivate {
        readonly session: string;
        readonly public: string;
        readonly iteration: number;
        readonly private: any/* Nullable<kotlin.collections.Map<string, string>> */;

    }
    class SsmContext implements ssm.chaincode.dsl.model.SsmContextDTO {
        constructor(session: string, _public: string, iteration: number, _private: any/* Nullable<kotlin.collections.Map<string, string>> */);
        get session(): string;
        get public(): string;
        get iteration(): number;
        get private(): any/* Nullable<kotlin.collections.Map<string, string>> */;
        component1(): string;
        component2(): string;
        component3(): number;
        component4(): any/* Nullable<kotlin.collections.Map<string, string>> */;
        copy(session: string, _public: string, iteration: number, _private: any/* Nullable<kotlin.collections.Map<string, string>> */): ssm.chaincode.dsl.model.SsmContext;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;

    }
}
export namespace ssm.chaincode.dsl.model {
    interface SsmGrantDTO {
        readonly user: string;
        readonly iteration: number;
        readonly credits: any/* kotlin.collections.Map<string, ssm.chaincode.dsl.model.CreditDTO> */;

    }
    class SsmGrant {
        constructor(user: string, iteration: number, credits: any/* kotlin.collections.Map<string, ssm.chaincode.dsl.model.Credit> */);
        get user(): string;
        get iteration(): number;
        get credits(): any/* kotlin.collections.Map<string, ssm.chaincode.dsl.model.Credit> */;
        component1(): string;
        component2(): number;
        component3(): any/* kotlin.collections.Map<string, ssm.chaincode.dsl.model.Credit> */;
        copy(user: string, iteration: number, credits: any/* kotlin.collections.Map<string, ssm.chaincode.dsl.model.Credit> */): ssm.chaincode.dsl.model.SsmGrant;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    interface CreditDTO {
        readonly amount: number;

    }
    class Credit implements ssm.chaincode.dsl.model.CreditDTO {
        constructor(amount: number);
        get amount(): number;
        component1(): number;
        copy(amount: number): ssm.chaincode.dsl.model.Credit;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;

    }
}
export namespace ssm.chaincode.dsl.model {
    interface SsmSessionDTO extends ssm.chaincode.dsl.model.WithPrivate {
        readonly ssm: Nullable<string>;
        readonly session: string;
        readonly roles: any/* Nullable<kotlin.collections.Map<string, string>> */;
        readonly public: Nullable<any>;
        readonly private: any/* Nullable<kotlin.collections.Map<string, string>> */;

    }
    class SsmSession implements ssm.chaincode.dsl.model.SsmSessionDTO {
        constructor(ssm: string, session: string, roles: any/* kotlin.collections.Map<string, string> */, _public: string, _private: any/* Nullable<kotlin.collections.Map<string, string>> */);
        get ssm(): string;
        get session(): string;
        get roles(): any/* kotlin.collections.Map<string, string> */;
        get public(): string;
        get private(): any/* Nullable<kotlin.collections.Map<string, string>> */;

    }
}
export namespace ssm.chaincode.dsl.model {
    interface SsmSessionStateDTO extends ssm.chaincode.dsl.model.SsmSessionDTO, ssm.chaincode.dsl.model.WithPrivate {
        readonly ssm: Nullable<string>;
        readonly session: string;
        readonly roles: any/* Nullable<kotlin.collections.Map<string, string>> */;
        readonly public: Nullable<any>;
        readonly private: any/* Nullable<kotlin.collections.Map<string, string>> */;
        readonly origin: Nullable<ssm.chaincode.dsl.model.SsmTransitionDTO>;
        readonly current: number;
        readonly iteration: number;

    }
    class SsmSessionState implements ssm.chaincode.dsl.model.SsmSessionStateDTO {
        constructor(ssm: Nullable<string>, session: string, roles: any/* Nullable<kotlin.collections.Map<string, string>> */, _public: Nullable<any>, _private: any/* Nullable<kotlin.collections.Map<string, string>> */, origin: Nullable<ssm.chaincode.dsl.model.SsmTransition>, current: number, iteration: number);
        get ssm(): Nullable<string>;
        get session(): string;
        get roles(): any/* Nullable<kotlin.collections.Map<string, string>> */;
        get public(): Nullable<any>;
        get private(): any/* Nullable<kotlin.collections.Map<string, string>> */;
        get origin(): Nullable<ssm.chaincode.dsl.model.SsmTransition>;
        get current(): number;
        get iteration(): number;
        component1(): Nullable<string>;
        component2(): string;
        component3(): any/* Nullable<kotlin.collections.Map<string, string>> */;
        component4(): Nullable<any>;
        component5(): any/* Nullable<kotlin.collections.Map<string, string>> */;
        component6(): Nullable<ssm.chaincode.dsl.model.SsmTransition>;
        component7(): number;
        component8(): number;
        copy(ssm: Nullable<string>, session: string, roles: any/* Nullable<kotlin.collections.Map<string, string>> */, _public: Nullable<any>, _private: any/* Nullable<kotlin.collections.Map<string, string>> */, origin: Nullable<ssm.chaincode.dsl.model.SsmTransition>, current: number, iteration: number): ssm.chaincode.dsl.model.SsmSessionState;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;

    }
}
export namespace ssm.chaincode.dsl.model {
    interface SsmSessionStateLogDTO {
        readonly txId: string;
        readonly state: ssm.chaincode.dsl.model.SsmSessionStateDTO;

    }
    class SsmSessionStateLog implements ssm.chaincode.dsl.model.SsmSessionStateLogDTO {
        constructor(txId: string, state: ssm.chaincode.dsl.model.SsmSessionState);
        get txId(): string;
        get state(): ssm.chaincode.dsl.model.SsmSessionState;
        component1(): string;
        component2(): ssm.chaincode.dsl.model.SsmSessionState;
        copy(txId: string, state: ssm.chaincode.dsl.model.SsmSessionState): ssm.chaincode.dsl.model.SsmSessionStateLog;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;

    }
}
export namespace ssm.chaincode.dsl.model {
    interface SsmTransitionDTO {
        readonly from: number;
        readonly to: number;
        readonly role: string;
        readonly action: string;

    }
    class SsmTransition implements ssm.chaincode.dsl.model.SsmTransitionDTO {
        constructor(from: number, to: number, role: string, action: string);
        get from(): number;
        get to(): number;
        get role(): string;
        get action(): string;
        component1(): number;
        component2(): number;
        component3(): string;
        component4(): string;
        copy(from: number, to: number, role: string, action: string): ssm.chaincode.dsl.model.SsmTransition;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;

    }
}
export namespace ssm.chaincode.dsl.model {
    interface WithPrivate {
        readonly private: any/* Nullable<kotlin.collections.Map<string, string>> */;

    }
}
export namespace ssm.chaincode.dsl.model.uri {
    interface ChaincodeUriDTO {
        readonly uri: string;

    }
    class ChaincodeUri implements ssm.chaincode.dsl.model.uri.ChaincodeUriDTO {
        constructor(uri: string);
        get uri(): string;
        static get Companion(): {
            get PARTS(): number;
            get PREFIX(): string;
        };
        get channelId(): string;
        get chaincodeId(): string;

    }
}
export namespace ssm.chaincode.dsl.model.uri {
    interface SsmUriDTO {
        readonly uri: string;

    }
    class SsmUri implements ssm.chaincode.dsl.model.uri.SsmUriDTO {
        constructor(uri: string);
        get uri(): string;
        static get Companion(): {
            get PARTS(): number;
            get PREFIX(): string;
        };
        get channelId(): string;
        get chaincodeId(): string;
        get ssmName(): string;
        get ssmVersion(): string;
        get chaincodeUri(): ssm.chaincode.dsl.model.uri.ChaincodeUri;
        component1(): string;
        copy(uri: string): ssm.chaincode.dsl.model.uri.SsmUri;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;

    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmGetAdminQuery implements ssm.chaincode.dsl.SsmQueryDTO {
        constructor(chaincodeUri: ssm.chaincode.dsl.model.uri.ChaincodeUri, name: string);
        get chaincodeUri(): ssm.chaincode.dsl.model.uri.ChaincodeUri;
        get name(): string;

    }
    class SsmGetAdminResult implements ssm.chaincode.dsl.SsmItemResultDTO<ssm.chaincode.dsl.model.Agent> {
        constructor(item: Nullable<ssm.chaincode.dsl.model.Agent>);
        get item(): Nullable<ssm.chaincode.dsl.model.Agent>;

    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmGetQuery implements ssm.chaincode.dsl.SsmQueryDTO {
        constructor(chaincodeUri: ssm.chaincode.dsl.model.uri.ChaincodeUri, name: string);
        get chaincodeUri(): ssm.chaincode.dsl.model.uri.ChaincodeUri;
        get name(): string;

    }
    class SsmGetResult implements ssm.chaincode.dsl.SsmItemResultDTO<ssm.chaincode.dsl.model.Ssm> {
        constructor(item: Nullable<ssm.chaincode.dsl.model.Ssm>);
        get item(): Nullable<ssm.chaincode.dsl.model.Ssm>;

    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmGetSessionLogsQuery implements ssm.chaincode.dsl.SsmQueryDTO {
        constructor(chaincodeUri: ssm.chaincode.dsl.model.uri.ChaincodeUri, ssmName: string, sessionName: string);
        get chaincodeUri(): ssm.chaincode.dsl.model.uri.ChaincodeUri;
        get ssmName(): string;
        get sessionName(): string;

    }
    class SsmGetSessionLogsQueryResult {
        constructor(ssmName: string, sessionName: string, logs: any/* kotlin.collections.List<ssm.chaincode.dsl.model.SsmSessionStateLog> */);
        get ssmName(): string;
        get sessionName(): string;
        get logs(): any/* kotlin.collections.List<ssm.chaincode.dsl.model.SsmSessionStateLog> */;
        component1(): string;
        component2(): string;
        component3(): any/* kotlin.collections.List<ssm.chaincode.dsl.model.SsmSessionStateLog> */;
        copy(ssmName: string, sessionName: string, logs: any/* kotlin.collections.List<ssm.chaincode.dsl.model.SsmSessionStateLog> */): ssm.chaincode.dsl.query.SsmGetSessionLogsQueryResult;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmGetSessionQuery implements ssm.chaincode.dsl.SsmQueryDTO {
        constructor(chaincodeUri: ssm.chaincode.dsl.model.uri.ChaincodeUri, sessionName: string);
        get chaincodeUri(): ssm.chaincode.dsl.model.uri.ChaincodeUri;
        get sessionName(): string;

    }
    class SsmGetSessionResult implements ssm.chaincode.dsl.SsmItemResultDTO<ssm.chaincode.dsl.model.SsmSessionState> {
        constructor(item: Nullable<ssm.chaincode.dsl.model.SsmSessionState>);
        get item(): Nullable<ssm.chaincode.dsl.model.SsmSessionState>;

    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmGetTransactionQuery implements ssm.chaincode.dsl.SsmQueryDTO {
        constructor(chaincodeUri: ssm.chaincode.dsl.model.uri.ChaincodeUri, id: string);
        get chaincodeUri(): ssm.chaincode.dsl.model.uri.ChaincodeUri;
        get id(): string;
        component1(): ssm.chaincode.dsl.model.uri.ChaincodeUri;
        component2(): string;
        copy(chaincodeUri: ssm.chaincode.dsl.model.uri.ChaincodeUri, id: string): ssm.chaincode.dsl.query.SsmGetTransactionQuery;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;

    }
    class SsmGetTransactionQueryResult implements ssm.chaincode.dsl.SsmItemResultDTO<ssm.chaincode.dsl.blockchain.Transaction> {
        constructor(item: Nullable<ssm.chaincode.dsl.blockchain.Transaction>);
        get item(): Nullable<ssm.chaincode.dsl.blockchain.Transaction>;

    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmGetUserQuery implements ssm.chaincode.dsl.SsmQueryDTO {
        constructor(chaincodeUri: ssm.chaincode.dsl.model.uri.ChaincodeUri, name: string);
        get chaincodeUri(): ssm.chaincode.dsl.model.uri.ChaincodeUri;
        get name(): string;

    }
    class SsmGetUserResult implements ssm.chaincode.dsl.SsmItemResultDTO<ssm.chaincode.dsl.model.Agent> {
        constructor(item: Nullable<ssm.chaincode.dsl.model.Agent>);
        get item(): Nullable<ssm.chaincode.dsl.model.Agent>;

    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmListAdminQuery implements ssm.chaincode.dsl.SsmQueryDTO {
        constructor(chaincodeUri: ssm.chaincode.dsl.model.uri.ChaincodeUri);
        get chaincodeUri(): ssm.chaincode.dsl.model.uri.ChaincodeUri;

    }
    class SsmListAdminResult implements ssm.chaincode.dsl.SsmItemsResultDTO<string> {
        constructor(items: Array<string>);
        get items(): Array<string>;

    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmListSessionQuery implements ssm.chaincode.dsl.SsmQueryDTO {
        constructor(chaincodeUri: ssm.chaincode.dsl.model.uri.ChaincodeUri);
        get chaincodeUri(): ssm.chaincode.dsl.model.uri.ChaincodeUri;

    }
    class SsmListSessionResult implements ssm.chaincode.dsl.SsmItemsResultDTO<string> {
        constructor(items: Array<string>);
        get items(): Array<string>;

    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmListSsmQuery implements ssm.chaincode.dsl.SsmQueryDTO {
        constructor(chaincodeUri: ssm.chaincode.dsl.model.uri.ChaincodeUri);
        get chaincodeUri(): ssm.chaincode.dsl.model.uri.ChaincodeUri;

    }
    class SsmListSsmResult implements ssm.chaincode.dsl.SsmItemsResultDTO<string> {
        constructor(items: Array<string>);
        get items(): Array<string>;

    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmListUserQuery implements ssm.chaincode.dsl.SsmQueryDTO {
        constructor(chaincodeUri: ssm.chaincode.dsl.model.uri.ChaincodeUri);
        get chaincodeUri(): ssm.chaincode.dsl.model.uri.ChaincodeUri;

    }
    class SsmListUserResult implements ssm.chaincode.dsl.SsmItemsResultDTO<string> {
        constructor(items: Array<string>);
        get items(): Array<string>;

    }
}
export namespace ssm.couchdb.dsl {
    interface SsmCouchDbQueries {
        couchdbDatabaseGetChangesQueryFunction(): f2.dsl.fnc.F2Function<ssm.couchdb.dsl.query.CouchdbDatabaseGetChangesQueryDTO, ssm.couchdb.dsl.query.CouchdbDatabaseGetChangesQueryResultDTO>;
        couchdbDatabaseListQueryFunction(): f2.dsl.fnc.F2Function<ssm.couchdb.dsl.query.CouchdbDatabaseListQueryDTO, ssm.couchdb.dsl.query.CouchdbDatabaseListQueryResultDTO>;
        couchdbDatabaseGetQueryFunction(): f2.dsl.fnc.F2Function<ssm.couchdb.dsl.query.CouchdbDatabaseGetQueryDTO, ssm.couchdb.dsl.query.CouchdbDatabaseGetQueryResultDTO>;
        couchdbChaincodeListQueryFunction(): f2.dsl.fnc.F2Function<ssm.couchdb.dsl.query.CouchdbChaincodeListQueryDTO, ssm.couchdb.dsl.query.CouchdbChaincodeListQueryResultDTO>;
        couchdbAdminListQueryFunction(): f2.dsl.fnc.F2Function<ssm.couchdb.dsl.query.CouchdbAdminListQueryDTO, ssm.couchdb.dsl.query.CouchdbAdminListQueryResultDTO>;
        couchdbUserListQueryFunction(): f2.dsl.fnc.F2Function<ssm.couchdb.dsl.query.CouchdbUserListQueryDTO, ssm.couchdb.dsl.query.CouchdbUserListQueryResultDTO>;
        couchdbSsmGetQueryFunction(): f2.dsl.fnc.F2Function<ssm.couchdb.dsl.query.CouchdbSsmGetQuery, ssm.couchdb.dsl.query.CouchdbSsmGetQueryResult>;
        couchdbSsmListQueryFunction(): f2.dsl.fnc.F2Function<ssm.couchdb.dsl.query.CouchdbSsmListQuery, ssm.couchdb.dsl.query.CouchdbSsmListQueryResult>;
        couchdbSsmSessionStateListQueryFunction(): f2.dsl.fnc.F2Function<ssm.couchdb.dsl.query.CouchdbSsmSessionStateListQueryDTO, ssm.couchdb.dsl.query.CouchdbSsmSessionStateListQueryResultDTO>;
        couchdbSsmSessionStateGetQueryFunction(): f2.dsl.fnc.F2Function<ssm.couchdb.dsl.query.CouchdbSsmSessionStateGetQueryDTO, ssm.couchdb.dsl.query.CouchdbSsmSessionStateGetQueryResultDTO>;

    }
}
export namespace ssm.couchdb.dsl.model {
    interface DatabaseDTO {
        readonly name: string;

    }
    class Database implements ssm.couchdb.dsl.model.DatabaseDTO {
        constructor(name: string);
        get name(): string;

    }
}
export namespace ssm.couchdb.dsl.model {
    interface DatabaseChangesDTO {
        readonly changeEventId: string;
        readonly docType: Nullable<ssm.couchdb.dsl.model.DocType<any /*UnknownType **/>>;
        readonly objectId: string;

    }
    class DatabaseChanges implements ssm.couchdb.dsl.model.DatabaseChangesDTO {
        constructor(changeEventId: string, docType: Nullable<ssm.couchdb.dsl.model.DocType<any /*UnknownType **/>>, objectId: string);
        get changeEventId(): string;
        get docType(): Nullable<ssm.couchdb.dsl.model.DocType<any /*UnknownType **/>>;
        get objectId(): string;

    }
}
export namespace ssm.couchdb.dsl.model {
    class DocType<T> {
        protected constructor(name: string, clazz: any/* kotlin.reflect.KClass<T> */);
        get name(): string;
        get clazz(): any/* kotlin.reflect.KClass<T> */;
        static get Admin(): {
        } & ssm.couchdb.dsl.model.DocType<ssm.chaincode.dsl.model.Agent>;
        static get User(): {
        } & ssm.couchdb.dsl.model.DocType<ssm.chaincode.dsl.model.Agent>;
        static get Grant(): {
        } & ssm.couchdb.dsl.model.DocType<ssm.chaincode.dsl.model.SsmGrant>;
        static get Ssm(): {
        } & ssm.couchdb.dsl.model.DocType<ssm.chaincode.dsl.model.Ssm>;
        static get State(): {
        } & ssm.couchdb.dsl.model.DocType<ssm.chaincode.dsl.model.SsmSessionState>;
        static get Chaincode(): {
        } & ssm.couchdb.dsl.model.DocType<ssm.couchdb.dsl.model.ChaincodeLscc>;
    }
    class ChaincodeLscc {
        constructor(_id: string, _rev: string);
        get _id(): string;
        get _rev(): string;
    }
}
export namespace ssm.couchdb.dsl.query {
    interface CouchdbAdminListQueryDTO extends f2.dsl.cqrs.Query {
        readonly chaincodeUri: ssm.chaincode.dsl.model.uri.ChaincodeUriDTO;

    }
    interface CouchdbAdminListQueryResultDTO extends f2.dsl.cqrs.Event {
        readonly items: any/* kotlin.collections.List<ssm.chaincode.dsl.model.SsmAgentDTO> */;

    }
    class CouchdbAdminListQuery implements ssm.couchdb.dsl.query.CouchdbAdminListQueryDTO {
        constructor(chaincodeUri: ssm.chaincode.dsl.model.uri.ChaincodeUri);
        get chaincodeUri(): ssm.chaincode.dsl.model.uri.ChaincodeUri;

    }
    class CouchdbAdminListQueryResult implements ssm.couchdb.dsl.query.CouchdbAdminListQueryResultDTO {
        constructor(items: any/* kotlin.collections.List<ssm.chaincode.dsl.model.Agent> */);
        get items(): any/* kotlin.collections.List<ssm.chaincode.dsl.model.Agent> */;

    }
}
export namespace ssm.couchdb.dsl.query {
    interface CouchdbChaincodeListQueryDTO extends f2.dsl.cqrs.Query {

    }
    interface CouchdbChaincodeListQueryResultDTO extends f2.dsl.cqrs.Event {
        readonly items: any/* kotlin.collections.List<ssm.chaincode.dsl.model.uri.ChaincodeUriDTO> */;

    }
    class CouchdbChaincodeListQuery implements ssm.couchdb.dsl.query.CouchdbChaincodeListQueryDTO {
        constructor();

    }
    class CouchdbChaincodeListQueryResult implements ssm.couchdb.dsl.query.CouchdbChaincodeListQueryResultDTO {
        constructor(items: any/* kotlin.collections.List<ssm.chaincode.dsl.model.uri.ChaincodeUri> */);
        get items(): any/* kotlin.collections.List<ssm.chaincode.dsl.model.uri.ChaincodeUri> */;

    }
}
export namespace ssm.couchdb.dsl.query {
    interface CouchdbDatabaseGetChangesQueryDTO extends f2.dsl.cqrs.Query {
        readonly channelId: string;
        readonly chaincodeId: string;
        readonly ssmName: string;
        readonly sessionName: Nullable<string>;
        readonly lastEventId: Nullable<string>;
        readonly limit: any/* Nullable<kotlin.Long> */;

    }
    interface CouchdbDatabaseGetChangesQueryResultDTO extends f2.dsl.cqrs.Event {
        readonly items: any/* kotlin.collections.List<ssm.couchdb.dsl.model.DatabaseChangesDTO> */;
        readonly lastEventId: Nullable<string>;

    }
    class CouchdbDatabaseGetChangesQuery implements ssm.couchdb.dsl.query.CouchdbDatabaseGetChangesQueryDTO {
        constructor(channelId: string, chaincodeId: string, lastEventId: Nullable<string>, ssmName: string, sessionName: Nullable<string>, limit: any/* Nullable<kotlin.Long> */);
        get channelId(): string;
        get chaincodeId(): string;
        get lastEventId(): Nullable<string>;
        get ssmName(): string;
        get sessionName(): Nullable<string>;
        get limit(): any/* Nullable<kotlin.Long> */;

    }
    class CouchdbDatabaseGetChangesQueryResult implements ssm.couchdb.dsl.query.CouchdbDatabaseGetChangesQueryResultDTO {
        constructor(items: any/* kotlin.collections.List<ssm.couchdb.dsl.model.DatabaseChanges> */, lastEventId: Nullable<string>);
        get items(): any/* kotlin.collections.List<ssm.couchdb.dsl.model.DatabaseChanges> */;
        get lastEventId(): Nullable<string>;

    }
}
export namespace ssm.couchdb.dsl.query {
    interface CouchdbDatabaseGetQueryDTO extends f2.dsl.cqrs.Query {
        readonly channelId: string;
        readonly chaincodeId: string;

    }
    interface CouchdbDatabaseGetQueryResultDTO extends f2.dsl.cqrs.Event {
        readonly item: Nullable<ssm.couchdb.dsl.model.DatabaseDTO>;

    }
    class CouchdbDatabaseGetQuery implements ssm.couchdb.dsl.query.CouchdbDatabaseGetQueryDTO {
        constructor(channelId: string, chaincodeId: string);
        get channelId(): string;
        get chaincodeId(): string;

    }
    class CouchdbDatabaseGetQueryResult implements ssm.couchdb.dsl.query.CouchdbDatabaseGetQueryResultDTO {
        constructor(item: Nullable<ssm.couchdb.dsl.model.Database>);
        get item(): Nullable<ssm.couchdb.dsl.model.Database>;

    }
}
export namespace ssm.couchdb.dsl.query {
    interface CouchdbDatabaseListQueryDTO extends f2.dsl.cqrs.page.PageQueryDTO {
        readonly channelId: Nullable<string>;
        readonly chaincodeId: Nullable<string>;
        readonly pagination: Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>;

    }
    interface CouchdbDatabaseListQueryResultDTO extends f2.dsl.cqrs.page.PageQueryResultDTO<ssm.couchdb.dsl.model.DatabaseDTO> {
        readonly total: number;
        readonly pagination: Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>;
        readonly items: any/* kotlin.collections.List<ssm.couchdb.dsl.model.DatabaseDTO> */;

    }
    class CouchdbDatabaseListQuery implements ssm.couchdb.dsl.query.CouchdbDatabaseListQueryDTO {
        constructor(pagination: Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>, channelId: Nullable<string>, chaincodeId: Nullable<string>);
        get pagination(): Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>;
        get channelId(): Nullable<string>;
        get chaincodeId(): Nullable<string>;

    }
    class CouchdbDatabaseListQueryResult implements ssm.couchdb.dsl.query.CouchdbDatabaseListQueryResultDTO {
        constructor(pagination: Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>, items: any/* kotlin.collections.List<ssm.couchdb.dsl.model.DatabaseDTO> */, total: number);
        get pagination(): Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>;
        get items(): any/* kotlin.collections.List<ssm.couchdb.dsl.model.DatabaseDTO> */;
        get total(): number;

    }
}
export namespace ssm.couchdb.dsl.query {
    interface CouchdbSsmGetQueryDTO extends f2.dsl.cqrs.Query {
        readonly channelId: string;
        readonly chaincodeId: string;
        readonly ssmName: string;

    }
    interface CouchdbSsmGetQueryResultDTO extends f2.dsl.cqrs.Event {
        readonly uri: ssm.chaincode.dsl.model.uri.SsmUri;
        readonly item: Nullable<ssm.chaincode.dsl.model.SsmDTO>;

    }
    class CouchdbSsmGetQuery implements ssm.couchdb.dsl.query.CouchdbSsmGetQueryDTO {
        constructor(channelId: string, chaincodeId: string, ssmName: string);
        get channelId(): string;
        get chaincodeId(): string;
        get ssmName(): string;

    }
    class CouchdbSsmGetQueryResult implements ssm.couchdb.dsl.query.CouchdbSsmGetQueryResultDTO {
        constructor(uri: ssm.chaincode.dsl.model.uri.SsmUri, item: Nullable<ssm.chaincode.dsl.model.Ssm>);
        get uri(): ssm.chaincode.dsl.model.uri.SsmUri;
        get item(): Nullable<ssm.chaincode.dsl.model.Ssm>;

    }
}
export namespace ssm.couchdb.dsl.query {
    interface CouchdbSsmListQueryDTO extends f2.dsl.cqrs.page.PageQueryDTO {
        readonly channelId: string;
        readonly chaincodeId: string;
        readonly pagination: Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>;

    }
    interface CouchdbSsmListQueryResultDTO extends f2.dsl.cqrs.page.PageQueryResultDTO<ssm.chaincode.dsl.model.SsmDTO> {
        readonly pagination: Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>;
        readonly items: any/* kotlin.collections.List<ssm.chaincode.dsl.model.SsmDTO> */;
        readonly total: number;

    }
    class CouchdbSsmListQuery implements ssm.couchdb.dsl.query.CouchdbSsmListQueryDTO {
        constructor(pagination: Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>, channelId: string, chaincodeId: string);
        get pagination(): Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>;
        get channelId(): string;
        get chaincodeId(): string;

    }
    class CouchdbSsmListQueryResult implements ssm.couchdb.dsl.query.CouchdbSsmListQueryResultDTO {
        constructor(pagination: Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>, items: any/* kotlin.collections.List<ssm.chaincode.dsl.model.Ssm> */, total: number);
        get pagination(): Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>;
        get items(): any/* kotlin.collections.List<ssm.chaincode.dsl.model.Ssm> */;
        get total(): number;

    }
}
export namespace ssm.couchdb.dsl.query {
    interface CouchdbSsmSessionStateGetQueryDTO extends f2.dsl.cqrs.Query {
        readonly chaincodeUri: ssm.chaincode.dsl.model.uri.ChaincodeUriDTO;
        readonly ssmName: Nullable<string>;
        readonly sessionName: string;

    }
    interface CouchdbSsmSessionStateGetQueryResultDTO extends f2.dsl.cqrs.Event {
        readonly item: ssm.chaincode.dsl.model.SsmSessionStateDTO;

    }
    class CouchdbSsmSessionStateGetQuery implements ssm.couchdb.dsl.query.CouchdbSsmSessionStateGetQueryDTO {
        constructor(chaincodeUri: ssm.chaincode.dsl.model.uri.ChaincodeUri, ssmName: Nullable<string>, sessionName: string);
        get chaincodeUri(): ssm.chaincode.dsl.model.uri.ChaincodeUri;
        get ssmName(): Nullable<string>;
        get sessionName(): string;

    }
    class CouchdbSsmSessionStateGetQueryResult implements ssm.couchdb.dsl.query.CouchdbSsmSessionStateGetQueryResultDTO {
        constructor(item: ssm.chaincode.dsl.model.SsmSessionStateDTO);
        get item(): ssm.chaincode.dsl.model.SsmSessionStateDTO;

    }
}
export namespace ssm.couchdb.dsl.query {
    interface CouchdbSsmSessionStateListQueryDTO extends f2.dsl.cqrs.page.PageQueryDTO {
        readonly chaincodeUri: ssm.chaincode.dsl.model.uri.ChaincodeUriDTO;
        readonly ssm: Nullable<string>;
        readonly pagination: Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>;

    }
    interface CouchdbSsmSessionStateListQueryResultDTO extends f2.dsl.cqrs.page.PageQueryResultDTO<ssm.chaincode.dsl.model.SsmSessionStateDTO> {
        readonly pagination: Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>;
        readonly items: any/* kotlin.collections.List<ssm.chaincode.dsl.model.SsmSessionStateDTO> */;
        readonly total: number;

    }
    class CouchdbSsmSessionStateListQuery implements ssm.couchdb.dsl.query.CouchdbSsmSessionStateListQueryDTO {
        constructor(pagination: Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>, chaincodeUri: ssm.chaincode.dsl.model.uri.ChaincodeUri, ssm: Nullable<string>);
        get pagination(): Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>;
        get chaincodeUri(): ssm.chaincode.dsl.model.uri.ChaincodeUri;
        get ssm(): Nullable<string>;

    }
    class CouchdbSsmSessionStateListQueryResult implements ssm.couchdb.dsl.query.CouchdbSsmSessionStateListQueryResultDTO {
        constructor(pagination: Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>, total: number, items: any/* kotlin.collections.List<ssm.chaincode.dsl.model.SsmSessionStateDTO> */);
        get pagination(): Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>;
        get total(): number;
        get items(): any/* kotlin.collections.List<ssm.chaincode.dsl.model.SsmSessionStateDTO> */;

    }
}
export namespace ssm.couchdb.dsl.query {
    interface CouchdbUserListQueryDTO extends f2.dsl.cqrs.Query {
        readonly chaincodeUri: ssm.chaincode.dsl.model.uri.ChaincodeUriDTO;

    }
    interface CouchdbUserListQueryResultDTO extends f2.dsl.cqrs.Event {
        readonly items: any/* kotlin.collections.List<ssm.chaincode.dsl.model.SsmAgentDTO> */;

    }
    class CouchdbUserListQuery implements ssm.couchdb.dsl.query.CouchdbUserListQueryDTO {
        constructor(chaincodeUri: ssm.chaincode.dsl.model.uri.ChaincodeUri);
        get chaincodeUri(): ssm.chaincode.dsl.model.uri.ChaincodeUri;

    }
    class CouchdbUserListQueryResult implements ssm.couchdb.dsl.query.CouchdbUserListQueryResultDTO {
        constructor(items: any/* kotlin.collections.List<ssm.chaincode.dsl.model.Agent> */);
        get items(): any/* kotlin.collections.List<ssm.chaincode.dsl.model.Agent> */;

    }
}
export namespace ssm.data.dsl {
    interface SsmApiQueryFunctions {
        dataChaincodeListQueryFunction(): f2.dsl.fnc.F2Function<ssm.data.dsl.features.query.DataChaincodeListQuery, ssm.data.dsl.features.query.DataChaincodeListQueryResult>;
        dataSsmListQueryFunction(): f2.dsl.fnc.F2Function<ssm.data.dsl.features.query.DataSsmListQuery, ssm.data.dsl.features.query.DataSsmListQueryResult>;
        dataSsmGetQueryFunction(): f2.dsl.fnc.F2Function<ssm.data.dsl.features.query.DataSsmGetQueryDTO, ssm.data.dsl.features.query.DataSsmGetQueryResultDTO>;
        dataSsmSessionListQueryFunction(): f2.dsl.fnc.F2Function<ssm.data.dsl.features.query.DataSsmSessionListQueryDTO, ssm.data.dsl.features.query.DataSsmSessionListQueryResultDTO>;
        dataSsmSessionGetQueryFunction(): f2.dsl.fnc.F2Function<ssm.data.dsl.features.query.DataSsmSessionGetQueryDTO, ssm.data.dsl.features.query.DataSsmSessionGetQueryResultDTO>;
        dataSsmSessionLogListQueryFunction(): f2.dsl.fnc.F2Function<ssm.data.dsl.features.query.DataSsmSessionLogListQueryDTO, ssm.data.dsl.features.query.DataSsmSessionLogListQueryResultDTO>;
        dataSsmSessionLogGetQueryFunction(): f2.dsl.fnc.F2Function<ssm.data.dsl.features.query.DataSsmSessionLogGetQueryDTO, ssm.data.dsl.features.query.DataSsmSessionLogGetQueryResultDTO>;

    }
}
export namespace ssm.data.dsl.features.query {
    interface DataChaincodeListQueryDTO {

    }
    class DataChaincodeListQuery implements ssm.data.dsl.features.query.DataChaincodeListQueryDTO {
        constructor();

    }
    interface DataChaincodeListQueryResultDTO {
        readonly items: any/* kotlin.collections.List<ssm.chaincode.dsl.model.uri.ChaincodeUri> */;

    }
    class DataChaincodeListQueryResult implements ssm.data.dsl.features.query.DataChaincodeListQueryResultDTO {
        constructor(items: any/* kotlin.collections.List<ssm.chaincode.dsl.model.uri.ChaincodeUri> */);
        get items(): any/* kotlin.collections.List<ssm.chaincode.dsl.model.uri.ChaincodeUri> */;

    }
}
export namespace ssm.data.dsl.features.query {
    interface DataQueryDTO {
        readonly ssmUri: ssm.chaincode.dsl.model.uri.SsmUriDTO;

    }
}
export namespace ssm.data.dsl.features.query {
    interface DataSsmGetQueryDTO extends ssm.data.dsl.features.query.DataQueryDTO {
        readonly ssmUri: ssm.chaincode.dsl.model.uri.SsmUriDTO;

    }
    class DataSsmGetQuery implements ssm.data.dsl.features.query.DataSsmGetQueryDTO {
        constructor(ssmUri: ssm.chaincode.dsl.model.uri.SsmUri);
        get ssmUri(): ssm.chaincode.dsl.model.uri.SsmUri;

    }
    interface DataSsmGetQueryResultDTO {
        readonly item: Nullable<ssm.data.dsl.model.DataSsm>;

    }
    class DataSsmGetQueryResult implements ssm.data.dsl.features.query.DataSsmGetQueryResultDTO {
        constructor(item: Nullable<ssm.data.dsl.model.DataSsm>);
        get item(): Nullable<ssm.data.dsl.model.DataSsm>;

    }
}
export namespace ssm.data.dsl.features.query {
    interface DataSsmListQueryDTO {

    }
    class DataSsmListQuery implements ssm.data.dsl.features.query.DataSsmListQueryDTO {
        constructor(chaincodes: any/* kotlin.collections.List<ssm.chaincode.dsl.model.uri.ChaincodeUri> */);
        get chaincodes(): any/* kotlin.collections.List<ssm.chaincode.dsl.model.uri.ChaincodeUri> */;

    }
    interface DataSsmListQueryResultDTO {
        readonly items: any/* kotlin.collections.List<ssm.data.dsl.model.DataSsmDTO> */;

    }
    class DataSsmListQueryResult implements ssm.data.dsl.features.query.DataSsmListQueryResultDTO {
        constructor(items: any/* kotlin.collections.List<ssm.data.dsl.model.DataSsm> */);
        get items(): any/* kotlin.collections.List<ssm.data.dsl.model.DataSsm> */;

    }
}
export namespace ssm.data.dsl.features.query {
    interface DataSsmSessionGetQueryDTO extends ssm.data.dsl.features.query.DataQueryDTO {
        readonly sessionName: string;
        readonly ssmUri: ssm.chaincode.dsl.model.uri.SsmUriDTO;

    }
    class DataSsmSessionGetQuery implements ssm.data.dsl.features.query.DataSsmSessionGetQueryDTO {
        constructor(sessionName: string, ssmUri: ssm.chaincode.dsl.model.uri.SsmUri);
        get sessionName(): string;
        get ssmUri(): ssm.chaincode.dsl.model.uri.SsmUri;

    }
    interface DataSsmSessionGetQueryResultDTO extends f2.dsl.cqrs.Event {
        readonly item: Nullable<ssm.data.dsl.model.DataSsmSessionDTO>;

    }
    class DataSsmSessionGetQueryResult implements ssm.data.dsl.features.query.DataSsmSessionGetQueryResultDTO {
        constructor(item: Nullable<ssm.data.dsl.model.DataSsmSession>);
        get item(): Nullable<ssm.data.dsl.model.DataSsmSession>;

    }
}
export namespace ssm.data.dsl.features.query {
    interface DataSsmSessionListQueryDTO extends ssm.data.dsl.features.query.DataQueryDTO {
        readonly ssmUri: ssm.chaincode.dsl.model.uri.SsmUriDTO;

    }
    class DataSsmSessionListQuery implements ssm.data.dsl.features.query.DataSsmSessionListQueryDTO {
        constructor(ssmUri: ssm.chaincode.dsl.model.uri.SsmUri);
        get ssmUri(): ssm.chaincode.dsl.model.uri.SsmUri;

    }
    interface DataSsmSessionListQueryResultDTO {
        readonly items: any/* kotlin.collections.List<ssm.data.dsl.model.DataSsmSessionDTO> */;

    }
    class DataSsmSessionListQueryResult implements ssm.data.dsl.features.query.DataSsmSessionListQueryResultDTO {
        constructor(items: any/* kotlin.collections.List<ssm.data.dsl.model.DataSsmSession> */);
        get items(): any/* kotlin.collections.List<ssm.data.dsl.model.DataSsmSession> */;

    }
}
export namespace ssm.data.dsl.features.query {
    interface DataSsmSessionLogGetQueryDTO extends ssm.data.dsl.features.query.DataQueryDTO {
        readonly sessionName: string;
        readonly txId: string;
        readonly ssmUri: ssm.chaincode.dsl.model.uri.SsmUriDTO;

    }
    class DataSsmSessionLogGetQuery implements ssm.data.dsl.features.query.DataSsmSessionLogGetQueryDTO {
        constructor(sessionName: string, txId: string, ssmUri: ssm.chaincode.dsl.model.uri.SsmUri);
        get sessionName(): string;
        get txId(): string;
        get ssmUri(): ssm.chaincode.dsl.model.uri.SsmUri;

    }
    interface DataSsmSessionLogGetQueryResultDTO {
        readonly item: Nullable<ssm.data.dsl.model.DataSsmSessionStateDTO>;

    }
    class DataSsmSessionLogGetQueryResult implements ssm.data.dsl.features.query.DataSsmSessionLogGetQueryResultDTO {
        constructor(item: Nullable<ssm.data.dsl.model.DataSsmSessionState>);
        get item(): Nullable<ssm.data.dsl.model.DataSsmSessionState>;

    }
}
export namespace ssm.data.dsl.features.query {
    interface DataSsmSessionLogListQueryDTO extends ssm.data.dsl.features.query.DataQueryDTO {
        readonly sessionName: string;
        readonly ssmUri: ssm.chaincode.dsl.model.uri.SsmUriDTO;

    }
    class DataSsmSessionLogListQuery implements ssm.data.dsl.features.query.DataSsmSessionLogListQueryDTO {
        constructor(sessionName: string, ssmUri: ssm.chaincode.dsl.model.uri.SsmUri);
        get sessionName(): string;
        get ssmUri(): ssm.chaincode.dsl.model.uri.SsmUri;

    }
    interface DataSsmSessionLogListQueryResultDTO {
        readonly items: any/* kotlin.collections.List<ssm.data.dsl.model.DataSsmSessionState> */;

    }
    class SsmSessionLogListQueryResult implements ssm.data.dsl.features.query.DataSsmSessionLogListQueryResultDTO {
        constructor(items: any/* kotlin.collections.List<ssm.data.dsl.model.DataSsmSessionState> */);
        get items(): any/* kotlin.collections.List<ssm.data.dsl.model.DataSsmSessionState> */;

    }
}
export namespace ssm.data.dsl.model {
    interface DataChannelDTO {
        readonly id: string;

    }
    class DataChannel implements ssm.data.dsl.model.DataChannelDTO {
        constructor(id: string);
        get id(): string;

    }
}
export namespace ssm.data.dsl.model {
    interface DataSsmDTO {
        readonly uri: ssm.chaincode.dsl.model.uri.SsmUriDTO;
        readonly ssm: ssm.chaincode.dsl.model.SsmDTO;
        readonly channel: ssm.data.dsl.model.DataChannelDTO;
        readonly version: Nullable<string>;

    }
    class DataSsm implements ssm.data.dsl.model.DataSsmDTO {
        constructor(uri: ssm.chaincode.dsl.model.uri.SsmUri, ssm: ssm.chaincode.dsl.model.Ssm, channel: ssm.data.dsl.model.DataChannel, version: Nullable<string>);
        get uri(): ssm.chaincode.dsl.model.uri.SsmUri;
        get ssm(): ssm.chaincode.dsl.model.Ssm;
        get channel(): ssm.data.dsl.model.DataChannel;
        get version(): Nullable<string>;

    }
}
export namespace ssm.data.dsl.model {
    interface DataSsmSessionDTO {
        readonly ssmUri: ssm.chaincode.dsl.model.uri.SsmUri;
        readonly sessionName: string;
        readonly state: ssm.data.dsl.model.DataSsmSessionStateDTO;
        readonly channel: ssm.data.dsl.model.DataChannelDTO;
        readonly transaction: Nullable<ssm.chaincode.dsl.blockchain.TransactionDTO>;
        readonly transactions: any/* kotlin.collections.List<ssm.chaincode.dsl.blockchain.TransactionDTO> */;

    }
    class DataSsmSession implements ssm.data.dsl.model.DataSsmSessionDTO {
        constructor(sessionName: string, state: ssm.data.dsl.model.DataSsmSessionState, channel: ssm.data.dsl.model.DataChannel, transaction: Nullable<ssm.chaincode.dsl.blockchain.Transaction>, ssmUri: ssm.chaincode.dsl.model.uri.SsmUri, transactions: any/* kotlin.collections.List<ssm.chaincode.dsl.blockchain.TransactionDTO> */);
        get sessionName(): string;
        get state(): ssm.data.dsl.model.DataSsmSessionState;
        get channel(): ssm.data.dsl.model.DataChannel;
        get transaction(): Nullable<ssm.chaincode.dsl.blockchain.Transaction>;
        get ssmUri(): ssm.chaincode.dsl.model.uri.SsmUri;
        get transactions(): any/* kotlin.collections.List<ssm.chaincode.dsl.blockchain.TransactionDTO> */;

    }
}
export namespace ssm.data.dsl.model {
    interface DataSsmSessionStateDTO {
        readonly details: ssm.chaincode.dsl.model.SsmSessionStateDTO;
        readonly transaction: Nullable<ssm.chaincode.dsl.blockchain.TransactionDTO>;

    }
    class DataSsmSessionState implements ssm.data.dsl.model.DataSsmSessionStateDTO {
        constructor(details: ssm.chaincode.dsl.model.SsmSessionState, transaction: Nullable<ssm.chaincode.dsl.blockchain.Transaction>);
        get details(): ssm.chaincode.dsl.model.SsmSessionState;
        get transaction(): Nullable<ssm.chaincode.dsl.blockchain.Transaction>;

    }
}
export namespace ssm.data.dsl.model {
    interface DataSsmUserDTO {
        readonly agent: ssm.chaincode.dsl.model.SsmAgentDTO;

    }
    class DataSsmUser implements ssm.data.dsl.model.DataSsmUserDTO {
        constructor(agent: ssm.chaincode.dsl.model.Agent);
        get agent(): ssm.chaincode.dsl.model.Agent;

    }
}
export namespace x2.api.ssm.domain.domain {
    interface SsmProtocolDTO {
        readonly name: string;
        readonly ssm: ssm.chaincode.dsl.model.Ssm;
        readonly ssms: Array<ssm.chaincode.dsl.model.uri.SsmUriDTO>;

    }
    class SsmProtocol implements x2.api.ssm.domain.domain.SsmProtocolDTO {
        constructor(name: string, ssms: Array<ssm.chaincode.dsl.model.uri.SsmUri>, ssm: ssm.chaincode.dsl.model.Ssm);
        get name(): string;
        get ssms(): Array<ssm.chaincode.dsl.model.uri.SsmUri>;
        get ssm(): ssm.chaincode.dsl.model.Ssm;

    }
}
export namespace x2.api.ssm.domain.query {
    interface ProtocoleFilterDTO {
        readonly protocol: string;
        readonly ssmUri: Nullable<string>;
        readonly from: any/* Nullable<kotlin.Long> */;
        readonly to: any/* Nullable<kotlin.Long> */;
        readonly channels: Nullable<Array<string>>;
        readonly engines: Nullable<Array<string>>;
        readonly steps: Nullable<Int32Array>;

    }
}
export namespace x2.api.ssm.domain.query {
    interface X2ProtocolGetQueryDTO extends f2.dsl.cqrs.Query {
        readonly protocol: string;

    }
    interface X2ProtocolGetQueryResultDTO {
        readonly item: Nullable<x2.api.ssm.domain.domain.SsmProtocolDTO>;

    }
}
export namespace x2.api.ssm.domain.query {
    interface X2ProtocolsListQueryResultDTO {
        readonly items: any/* kotlin.collections.List<x2.api.ssm.domain.domain.SsmProtocolDTO> */;

    }
}
export namespace x2.api.ssm.domain.query {
    interface X2SessionPageQueryDTO extends f2.dsl.cqrs.page.PageQueryDTO {
        readonly filter: Nullable<x2.api.ssm.domain.query.ProtocoleFilterDTO>;
        readonly pagination: Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>;

    }
    interface X2SessionPageQueryResultDTO extends f2.dsl.cqrs.page.PageQueryResultDTO<ssm.data.dsl.model.DataSsmSessionDTO> {
        readonly pagination: Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>;
        readonly items: any/* kotlin.collections.List<ssm.data.dsl.model.DataSsmSessionDTO> */;
        readonly total: number;

    }
}
export namespace x2.api.ssm.domain.query {
    interface X2SessionPerStateStatsResultDTO extends x2.api.ssm.domain.stats.StatsResultDTO<any/* kotlin.Long */> {
        readonly data: any/* kotlin.collections.List<x2.api.ssm.domain.stats.CellDTO<any/* kotlin.Long */>> */;

    }
}
export namespace x2.api.ssm.domain.query {
    interface X2SessionStatePerIntervalStatsResultDTO extends x2.api.ssm.domain.stats.StatsResultDTO<any/* kotlin.collections.List<number> */> {
        readonly data: any/* kotlin.collections.List<x2.api.ssm.domain.stats.CellDTO<any/* kotlin.collections.List<number> */>> */;

    }
}
export namespace x2.api.ssm.domain.stats {
    interface StatsResultDTO<CELL> {
        readonly data: any/* kotlin.collections.List<x2.api.ssm.domain.stats.CellDTO<CELL>> */;

    }
    interface CellDTO<VALUE> {
        readonly label: string;
        readonly value: VALUE;

    }
}
export as namespace x2_ssm_domain;