type Nullable<T> = T | null | undefined
declare const __doNotImplementIt: unique symbol
type __doNotImplementIt = typeof __doNotImplementIt
export namespace f2.dsl.cqrs.error {
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
    class R2Exception /* extends kotlin.Exception */ {
        constructor(id: string, error: f2.dsl.cqrs.error.ErrorDTO<any /*UnknownType **/>);
        get id(): string;
        get error(): f2.dsl.cqrs.error.ErrorDTO<any /*UnknownType **/>;
    }
}
export namespace f2.dsl.cqrs.exception {
    class R2NotFoundException /* extends kotlin.Exception */ {
        constructor(message: string);
    }
}
export namespace f2.dsl.cqrs.page {
    class Page<OBJECT> implements f2.dsl.cqrs.page.PageDTO<OBJECT> {
        constructor(total: number, list: any/* kotlin.collections.List<OBJECT> */);
        get total(): number;
        get list(): any/* kotlin.collections.List<OBJECT> */;
    }
}
export namespace f2.dsl.cqrs.page {
    class OffsetRequest implements f2.dsl.cqrs.page.OffsetPaginationDTO/*, f2.dsl.cqrs.page.Pagination */ {
        constructor(offset: number, limit: number);
        get offset(): number;
        get limit(): number;
    }
    class PagePagination implements f2.dsl.cqrs.page.PagePaginationDTO/*, f2.dsl.cqrs.page.Pagination */ {
        constructor(page: Nullable<number>, size: Nullable<number>);
        get page(): Nullable<number>;
        get size(): Nullable<number>;
    }
}
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
}
export namespace f2.dsl.cqrs.page {
    interface OffsetPaginationDTO {
        readonly offset: number;
        readonly limit: number;
    }
    interface PagePaginationDTO {
        readonly page: Nullable<number>;
        readonly size: Nullable<number>;
    }
}
export namespace f2.dsl.cqrs.page {
    interface PageDTO<OBJECT> {
        readonly total: number;
        readonly list: any/* kotlin.collections.List<OBJECT> */;
    }
}
export namespace f2.dsl.cqrs.page {
    interface PageQuery extends f2.dsl.cqrs.Query {
        readonly pagination: Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>;
    }
    interface PageQueryResult<OBJECT> extends f2.dsl.cqrs.Event {
        readonly pagination: Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>;
        readonly page: f2.dsl.cqrs.page.PageDTO<OBJECT>;
    }
}
export namespace f2.dsl.fnc {
    interface F2FunctionDeclaration<T, R> {
        invoke(cmd: T): any/* kotlin.js.Promise<R> */;
    }
    interface F2SupplierDeclaration<R> {
        invoke(): any/* kotlin.js.Promise<string> */;
    }
    interface F2ConsumerDeclaration<T> {
        invoke(value: T): void;
    }
}
export namespace ssm.chaincode.dsl.blockchain {
    class Block implements ssm.chaincode.dsl.blockchain.BlockDTO {
        constructor(blockId: any/* kotlin.Long */, previousHash: Int8Array, dataHash: Int8Array, transactions: any/* kotlin.collections.List<ssm.chaincode.dsl.blockchain.Transaction> */);
        get blockId(): any/* kotlin.Long */;
        get previousHash(): Int8Array;
        get dataHash(): Int8Array;
        get transactions(): any/* kotlin.collections.List<ssm.chaincode.dsl.blockchain.Transaction> */;
    }
}
export namespace ssm.chaincode.dsl.blockchain {
    class IdentitiesInfo implements ssm.chaincode.dsl.blockchain.IdentitiesInfoDTO {
        constructor(id: string, mspid: string);
        get id(): string;
        get mspid(): string;
    }
}
export namespace ssm.chaincode.dsl.blockchain {
    class Transaction implements ssm.chaincode.dsl.blockchain.TransactionDTO {
        constructor(transactionId: string, blockId: any/* kotlin.Long */, timestamp: any/* kotlin.Long */, isValid: boolean, channelId: string, creator: ssm.chaincode.dsl.blockchain.IdentitiesInfo, nonce: Int8Array, type: any/* ssm.chaincode.dsl.blockchain.EnvelopeType */, validationCode: number);
        get transactionId(): string;
        get blockId(): any/* kotlin.Long */;
        get timestamp(): any/* kotlin.Long */;
        get isValid(): boolean;
        get channelId(): string;
        get creator(): ssm.chaincode.dsl.blockchain.IdentitiesInfo;
        get nonce(): Int8Array;
        get type(): any/* ssm.chaincode.dsl.blockchain.EnvelopeType */;
        get validationCode(): number;
    }
}
export namespace ssm.chaincode.dsl.model {
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
export namespace ssm.chaincode.dsl.model.uri {
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
        component1(): string;
        copy(uri: string): ssm.chaincode.dsl.model.uri.SsmUri;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmGetAdminQuery implements ssm.chaincode.dsl.SsmQueryDTO {
        constructor(name: string);
        get name(): string;
    }
    class SsmGetAdminResult implements ssm.chaincode.dsl.SsmItemResultDTO<ssm.chaincode.dsl.model.Agent> {
        constructor(item: Nullable<ssm.chaincode.dsl.model.Agent>);
        get item(): Nullable<ssm.chaincode.dsl.model.Agent>;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmGetQuery implements ssm.chaincode.dsl.SsmQueryDTO {
        constructor(name: string);
        get name(): string;
    }
    class SsmGetResult implements ssm.chaincode.dsl.SsmItemResultDTO<ssm.chaincode.dsl.model.Ssm> {
        constructor(item: Nullable<ssm.chaincode.dsl.model.Ssm>);
        get item(): Nullable<ssm.chaincode.dsl.model.Ssm>;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmGetSessionLogsQuery implements ssm.chaincode.dsl.SsmQueryDTO {
        constructor(ssmUri: ssm.chaincode.dsl.model.uri.SsmUri, sessionName: string);
        get ssmUri(): ssm.chaincode.dsl.model.uri.SsmUri;
        get sessionName(): string;
    }
    class SsmGetSessionLogsQueryResult {
        constructor(ssmUri: ssm.chaincode.dsl.model.uri.SsmUri, sessionName: string, logs: any/* kotlin.collections.List<ssm.chaincode.dsl.model.SsmSessionStateLog> */);
        get ssmUri(): ssm.chaincode.dsl.model.uri.SsmUri;
        get sessionName(): string;
        get logs(): any/* kotlin.collections.List<ssm.chaincode.dsl.model.SsmSessionStateLog> */;
        component1(): ssm.chaincode.dsl.model.uri.SsmUri;
        component2(): string;
        component3(): any/* kotlin.collections.List<ssm.chaincode.dsl.model.SsmSessionStateLog> */;
        copy(ssmUri: ssm.chaincode.dsl.model.uri.SsmUri, sessionName: string, logs: any/* kotlin.collections.List<ssm.chaincode.dsl.model.SsmSessionStateLog> */): ssm.chaincode.dsl.query.SsmGetSessionLogsQueryResult;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmGetSessionQuery implements ssm.chaincode.dsl.SsmQueryDTO {
        constructor(sessionName: string);
        get sessionName(): string;
    }
    class SsmGetSessionResult implements ssm.chaincode.dsl.SsmItemResultDTO<ssm.chaincode.dsl.model.SsmSessionState> {
        constructor(item: Nullable<ssm.chaincode.dsl.model.SsmSessionState>);
        get item(): Nullable<ssm.chaincode.dsl.model.SsmSessionState>;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmGetTransactionQuery implements ssm.chaincode.dsl.SsmQueryDTO {
        constructor(id: string);
        get id(): string;
        component1(): string;
        copy(id: string): ssm.chaincode.dsl.query.SsmGetTransactionQuery;
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
        constructor(name: string);
        get name(): string;
    }
    class SsmGetUserResult implements ssm.chaincode.dsl.SsmItemResultDTO<ssm.chaincode.dsl.model.Agent> {
        constructor(item: Nullable<ssm.chaincode.dsl.model.Agent>);
        get item(): Nullable<ssm.chaincode.dsl.model.Agent>;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmListAdminQuery implements ssm.chaincode.dsl.SsmQueryDTO {
        constructor();
    }
    class SsmListAdminResult implements ssm.chaincode.dsl.SsmItemsResultDTO<string> {
        constructor(items: Array<string>);
        get items(): Array<string>;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmListSessionQuery implements ssm.chaincode.dsl.SsmQueryDTO {
        constructor();
    }
    class SsmListSessionResult implements ssm.chaincode.dsl.SsmItemsResultDTO<string> {
        constructor(items: Array<string>);
        get items(): Array<string>;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmListSsmQuery implements ssm.chaincode.dsl.SsmQueryDTO {
        constructor();
    }
    class SsmListSsmResult implements ssm.chaincode.dsl.SsmItemsResultDTO<string> {
        constructor(items: Array<string>);
        get items(): Array<string>;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmListUserQuery implements ssm.chaincode.dsl.SsmQueryDTO {
        constructor();
    }
    class SsmListUserResult implements ssm.chaincode.dsl.SsmItemsResultDTO<string> {
        constructor(items: Array<string>);
        get items(): Array<string>;
    }
}
export namespace ssm.chaincode.dsl {
    interface SsmQueryDTO extends f2.dsl.cqrs.Query {
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
        readonly blockId: any/* kotlin.Long */;
        readonly previousHash: Int8Array;
        readonly dataHash: Int8Array;
        readonly transactions: any/* kotlin.collections.List<ssm.chaincode.dsl.blockchain.TransactionDTO> */;
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
        readonly blockId: any/* kotlin.Long */;
        readonly timestamp: any/* kotlin.Long */;
        readonly isValid: boolean;
        readonly channelId: string;
        readonly creator: ssm.chaincode.dsl.blockchain.IdentitiesInfoDTO;
        readonly nonce: Int8Array;
        readonly type: any/* ssm.chaincode.dsl.blockchain.EnvelopeType */;
        readonly validationCode: number;
    }
}
export namespace ssm.chaincode.dsl.config {
    interface SsmChaincodePropertiesDTO {
        readonly url: string;
    }
}
export namespace ssm.chaincode.dsl.model {
    interface ChaincodeDTO {
        readonly id: string;
        readonly channelId: string;
    }
}
export namespace ssm.chaincode.dsl.model {
    interface SsmAgentDTO {
        readonly name: string;
        readonly pub: Int8Array;
    }
}
export namespace ssm.chaincode.dsl.model {
    interface SsmContextDTO extends ssm.chaincode.dsl.model.WithPrivate {
        readonly session: string;
        readonly public: string;
        readonly iteration: number;
        readonly private: any/* Nullable<kotlin.collections.Map<string, string>> */;
    }
}
export namespace ssm.chaincode.dsl.model {
    interface SsmDTO {
        readonly name: string;
        readonly transitions: any/* kotlin.collections.List<ssm.chaincode.dsl.model.SsmTransitionDTO> */;
    }
}
export namespace ssm.chaincode.dsl.model {
    interface SsmGrantDTO {
        readonly user: string;
        readonly iteration: number;
        readonly credits: any/* kotlin.collections.Map<string, ssm.chaincode.dsl.model.CreditDTO> */;
    }
    interface CreditDTO {
        readonly amount: number;
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
}
export namespace ssm.chaincode.dsl.model {
    interface SsmSessionStateLogDTO {
        readonly txId: string;
        readonly state: ssm.chaincode.dsl.model.SsmSessionStateDTO;
    }
}
export namespace ssm.chaincode.dsl.model {
    interface SsmTransitionDTO {
        readonly from: number;
        readonly to: number;
        readonly role: string;
        readonly action: string;
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
}
export namespace ssm.chaincode.dsl.model.uri {
    interface SsmUriDTO {
        readonly uri: string;
    }
}
export namespace ssm.couchdb.dsl.model {
    class Database implements ssm.couchdb.dsl.model.DatabaseDTO {
        constructor(name: string);
        get name(): string;
    }
}
export namespace ssm.couchdb.dsl.model {
    class DatabaseChanges implements ssm.couchdb.dsl.model.DatabaseChangesDTO {
        constructor(changeEventId: string, docType: any/* Nullable<ssm.couchdb.dsl.model.DocType<any /*UnknownType **/>> */, objectId: string);
        get changeEventId(): string;
        get docType(): any/* Nullable<ssm.couchdb.dsl.model.DocType<any /*UnknownType **/>> */;
        get objectId(): string;
    }
}
export namespace ssm.couchdb.dsl.query {
    class CouchdbAdminListQuery implements ssm.couchdb.dsl.query.CouchdbAdminListQueryDTO {
        constructor(chaincodeUri: any/* ssm.chaincode.dsl.model.uri.ChaincodeUri */);
        get chaincodeUri(): any/* ssm.chaincode.dsl.model.uri.ChaincodeUri */;
    }
    class CouchdbAdminListQueryResult implements ssm.couchdb.dsl.query.CouchdbAdminListQueryResultDTO {
        constructor(items: any/* kotlin.collections.List<ssm.chaincode.dsl.model.Agent> */);
        get items(): any/* kotlin.collections.List<ssm.chaincode.dsl.model.Agent> */;
    }
}
export namespace ssm.couchdb.dsl.query {
    class CouchdbChaincodeListQuery implements ssm.couchdb.dsl.query.CouchdbChaincodeListQueryDTO {
        constructor();
    }
    class CouchdbChaincodeListQueryResult implements ssm.couchdb.dsl.query.CouchdbChaincodeListQueryResultDTO {
        constructor(items: any/* kotlin.collections.List<any/* ssm.chaincode.dsl.model.uri.ChaincodeUri */> */);
        get items(): any/* kotlin.collections.List<any/* ssm.chaincode.dsl.model.uri.ChaincodeUri */> */;
    }
}
export namespace ssm.couchdb.dsl.query {
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
    class CouchdbDatabaseListQuery implements ssm.couchdb.dsl.query.CouchdbDatabaseListQueryDTO {
        constructor(pagination: Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>, channelId: Nullable<string>, chaincodeId: Nullable<string>);
        get pagination(): Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>;
        get channelId(): Nullable<string>;
        get chaincodeId(): Nullable<string>;
    }
    class CouchdbDatabaseListQueryResult implements ssm.couchdb.dsl.query.CouchdbDatabaseListQueryResultDTO {
        constructor(page: f2.dsl.cqrs.page.Page<ssm.couchdb.dsl.model.Database>, pagination: Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>);
        get page(): f2.dsl.cqrs.page.Page<ssm.couchdb.dsl.model.Database>;
        get pagination(): Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>;
    }
}
export namespace ssm.couchdb.dsl.query {
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
    class CouchdbSsmListQuery implements ssm.couchdb.dsl.query.CouchdbSsmListQueryDTO {
        constructor(pagination: Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>, channelId: string, chaincodeId: string);
        get pagination(): Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>;
        get channelId(): string;
        get chaincodeId(): string;
    }
    class CouchdbSsmListQueryResult implements ssm.couchdb.dsl.query.CouchdbSsmListQueryResultDTO {
        constructor(page: f2.dsl.cqrs.page.Page<ssm.chaincode.dsl.model.Ssm>, pagination: Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>);
        get page(): f2.dsl.cqrs.page.Page<ssm.chaincode.dsl.model.Ssm>;
        get pagination(): Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>;
    }
}
export namespace ssm.couchdb.dsl.query {
    class CouchdbSsmSessionStateGetQuery implements ssm.couchdb.dsl.query.CouchdbSsmSessionStateGetQueryDTO {
        constructor(chaincodeUri: any/* ssm.chaincode.dsl.model.uri.ChaincodeUri */, ssmName: Nullable<string>, sessionName: string);
        get chaincodeUri(): any/* ssm.chaincode.dsl.model.uri.ChaincodeUri */;
        get ssmName(): Nullable<string>;
        get sessionName(): string;
    }
    class CouchdbSsmSessionStateGetQueryResult implements ssm.couchdb.dsl.query.CouchdbSsmSessionStateGetQueryResultDTO {
        constructor(item: ssm.chaincode.dsl.model.SsmSessionStateDTO);
        get item(): ssm.chaincode.dsl.model.SsmSessionStateDTO;
    }
}
export namespace ssm.couchdb.dsl.query {
    class CouchdbSsmSessionStateListQuery implements ssm.couchdb.dsl.query.CouchdbSsmSessionStateListQueryDTO {
        constructor(pagination: Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>, chaincodeUri: any/* ssm.chaincode.dsl.model.uri.ChaincodeUri */, ssm: Nullable<string>);
        get pagination(): Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>;
        get chaincodeUri(): any/* ssm.chaincode.dsl.model.uri.ChaincodeUri */;
        get ssm(): Nullable<string>;
    }
    class CouchdbSsmSessionStateListQueryResult implements ssm.couchdb.dsl.query.CouchdbSsmSessionStateListQueryResultDTO {
        constructor(page: f2.dsl.cqrs.page.Page<ssm.chaincode.dsl.model.SsmSessionState>, pagination: Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>);
        get page(): f2.dsl.cqrs.page.Page<ssm.chaincode.dsl.model.SsmSessionState>;
        get pagination(): Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>;
    }
}
export namespace ssm.couchdb.dsl.query {
    class CouchdbUserListQuery implements ssm.couchdb.dsl.query.CouchdbUserListQueryDTO {
        constructor(chaincodeUri: any/* ssm.chaincode.dsl.model.uri.ChaincodeUri */);
        get chaincodeUri(): any/* ssm.chaincode.dsl.model.uri.ChaincodeUri */;
    }
    class CouchdbUserListQueryResult implements ssm.couchdb.dsl.query.CouchdbUserListQueryResultDTO {
        constructor(items: any/* kotlin.collections.List<ssm.chaincode.dsl.model.Agent> */);
        get items(): any/* kotlin.collections.List<ssm.chaincode.dsl.model.Agent> */;
    }
}
export namespace ssm.couchdb.dsl.model {
    interface DatabaseChangesDTO {
        readonly changeEventId: string;
        readonly docType: any/* Nullable<ssm.couchdb.dsl.model.DocType<any /*UnknownType **/>> */;
        readonly objectId: string;
    }
}
export namespace ssm.couchdb.dsl.model {
    interface DatabaseDTO {
        readonly name: string;
    }
}
export namespace ssm.couchdb.dsl.query {
    interface CouchdbAdminListQueryDTO extends f2.dsl.cqrs.Query {
        readonly chaincodeUri: ssm.chaincode.dsl.model.uri.ChaincodeUriDTO;
    }
    interface CouchdbAdminListQueryResultDTO extends f2.dsl.cqrs.Event {
        readonly items: any/* kotlin.collections.List<ssm.chaincode.dsl.model.SsmAgentDTO> */;
    }
}
export namespace ssm.couchdb.dsl.query {
    interface CouchdbChaincodeListQueryDTO extends f2.dsl.cqrs.Query {
    }
    interface CouchdbChaincodeListQueryResultDTO extends f2.dsl.cqrs.Event {
        readonly items: any/* kotlin.collections.List<ssm.chaincode.dsl.model.uri.ChaincodeUriDTO> */;
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
}
export namespace ssm.couchdb.dsl.query {
    interface CouchdbDatabaseGetQueryDTO extends f2.dsl.cqrs.Query {
        readonly channelId: string;
        readonly chaincodeId: string;
    }
    interface CouchdbDatabaseGetQueryResultDTO extends f2.dsl.cqrs.Event {
        readonly item: Nullable<ssm.couchdb.dsl.model.DatabaseDTO>;
    }
}
export namespace ssm.couchdb.dsl.query {
    interface CouchdbDatabaseListQueryDTO extends f2.dsl.cqrs.page.PageQueryDTO {
        readonly channelId: Nullable<string>;
        readonly chaincodeId: Nullable<string>;
        readonly pagination: Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>;
    }
    interface CouchdbDatabaseListQueryResultDTO extends f2.dsl.cqrs.page.PageQueryResultDTO<ssm.couchdb.dsl.model.DatabaseDTO> {
        readonly pagination: Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>;
        readonly page: f2.dsl.cqrs.page.PageDTO<ssm.couchdb.dsl.model.DatabaseDTO>;
    }
}
export namespace ssm.couchdb.dsl.query {
    interface CouchdbSsmGetQueryDTO extends f2.dsl.cqrs.Query {
        readonly channelId: string;
        readonly chaincodeId: string;
        readonly ssmName: string;
    }
    interface CouchdbSsmGetQueryDTO extends f2.dsl.cqrs.Event {
        readonly item: Nullable<ssm.chaincode.dsl.model.SsmDTO>;
        readonly uri: ssm.chaincode.dsl.model.uri.SsmUri;
    }
}
export namespace ssm.couchdb.dsl.query {
    interface CouchdbSsmListQueryDTO extends f2.dsl.cqrs.page.PageQueryDTO {
        readonly channelId: string;
        readonly chaincodeId: string;
        readonly pagination: Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>;
    }
    interface CouchdbSsmListQueryResultDTO extends f2.dsl.cqrs.page.PageQueryResultDTO<ssm.chaincode.dsl.model.SsmDTO> {
        readonly page: f2.dsl.cqrs.page.PageDTO<ssm.chaincode.dsl.model.SsmDTO>;
        readonly pagination: Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>;
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
}
export namespace ssm.couchdb.dsl.query {
    interface CouchdbSsmSessionStateListQueryDTO extends f2.dsl.cqrs.page.PageQueryDTO {
        readonly chaincodeUri: ssm.chaincode.dsl.model.uri.ChaincodeUriDTO;
        readonly ssm: Nullable<string>;
        readonly pagination: Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>;
    }
    interface CouchdbSsmSessionStateListQueryResultDTO extends f2.dsl.cqrs.page.PageQueryResultDTO<ssm.chaincode.dsl.model.SsmSessionStateDTO> {
        readonly page: f2.dsl.cqrs.page.PageDTO<ssm.chaincode.dsl.model.SsmSessionStateDTO>;
        readonly pagination: Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>;
    }
}
export namespace ssm.couchdb.dsl.query {
    interface CouchdbUserListQueryDTO extends f2.dsl.cqrs.Query {
        readonly chaincodeUri: ssm.chaincode.dsl.model.uri.ChaincodeUriDTO;
    }
    interface CouchdbUserListQueryResultDTO extends f2.dsl.cqrs.Event {
        readonly items: any/* kotlin.collections.List<ssm.chaincode.dsl.model.SsmAgentDTO> */;
    }
}
export namespace ssm.data.dsl.features.query {
    class DataChaincodeListQuery implements ssm.data.dsl.features.query.DataChaincodeListQueryDTO {
        constructor();
    }
    class DataChaincodeListQueryResult implements ssm.data.dsl.features.query.DataChaincodeListQueryResultDTO {
        constructor(items: any/* kotlin.collections.List<any/* ssm.chaincode.dsl.model.uri.ChaincodeUri */> */);
        get items(): any/* kotlin.collections.List<any/* ssm.chaincode.dsl.model.uri.ChaincodeUri */> */;
    }
}
export namespace ssm.data.dsl.features.query {
    class DataSsmGetQuery implements ssm.data.dsl.features.query.DataSsmGetQueryDTO {
        constructor(ssmUri: ssm.chaincode.dsl.model.uri.SsmUri);
        get ssmUri(): ssm.chaincode.dsl.model.uri.SsmUri;
    }
    class DataSsmGetQueryResult implements ssm.data.dsl.features.query.DataSsmGetQueryResultDTO {
        constructor(item: Nullable<ssm.data.dsl.model.DataSsm>);
        get item(): Nullable<ssm.data.dsl.model.DataSsm>;
    }
}
export namespace ssm.data.dsl.features.query {
    class DataSsmListQuery implements ssm.data.dsl.features.query.DataSsmListQueryDTO {
        constructor(chaincodes: any/* kotlin.collections.List<any/* ssm.chaincode.dsl.model.uri.ChaincodeUri */> */);
        get chaincodes(): any/* kotlin.collections.List<any/* ssm.chaincode.dsl.model.uri.ChaincodeUri */> */;
    }
    class DataSsmListQueryResult implements ssm.data.dsl.features.query.DataSsmListQueryResultDTO {
        constructor(items: any/* kotlin.collections.List<ssm.data.dsl.model.DataSsm> */);
        get items(): any/* kotlin.collections.List<ssm.data.dsl.model.DataSsm> */;
    }
}
export namespace ssm.data.dsl.features.query {
    class DataSsmSessionGetQuery implements ssm.data.dsl.features.query.DataSsmSessionGetQueryDTO {
        constructor(sessionName: string, ssmUri: ssm.chaincode.dsl.model.uri.SsmUri);
        get sessionName(): string;
        get ssmUri(): ssm.chaincode.dsl.model.uri.SsmUri;
    }
    class DataSsmSessionGetQueryResult implements ssm.data.dsl.features.query.DataSsmSessionGetQueryResultDTO {
        constructor(item: Nullable<ssm.data.dsl.model.DataSsmSession>);
        get item(): Nullable<ssm.data.dsl.model.DataSsmSession>;
    }
}
export namespace ssm.data.dsl.features.query {
    class DataSsmSessionListQuery implements ssm.data.dsl.features.query.DataSsmSessionListQueryDTO {
        constructor(ssmUri: ssm.chaincode.dsl.model.uri.SsmUri);
        get ssmUri(): ssm.chaincode.dsl.model.uri.SsmUri;
    }
    class DataSsmSessionListQueryResult implements ssm.data.dsl.features.query.DataSsmSessionListQueryResultDTO {
        constructor(items: any/* kotlin.collections.List<ssm.data.dsl.model.DataSsmSession> */);
        get items(): any/* kotlin.collections.List<ssm.data.dsl.model.DataSsmSession> */;
    }
}
export namespace ssm.data.dsl.features.query {
    class DataSsmSessionLogGetQuery implements ssm.data.dsl.features.query.DataSsmSessionLogGetQueryDTO {
        constructor(sessionName: string, txId: string, ssmUri: ssm.chaincode.dsl.model.uri.SsmUri);
        get sessionName(): string;
        get txId(): string;
        get ssmUri(): ssm.chaincode.dsl.model.uri.SsmUri;
    }
    class DataSsmSessionLogGetQueryResult implements ssm.data.dsl.features.query.DataSsmSessionLogGetQueryResultDTO {
        constructor(item: Nullable<ssm.data.dsl.model.DataSsmSessionState>);
        get item(): Nullable<ssm.data.dsl.model.DataSsmSessionState>;
    }
}
export namespace ssm.data.dsl.features.query {
    class DataSsmSessionLogListQuery implements ssm.data.dsl.features.query.DataSsmSessionLogListQueryDTO {
        constructor(sessionName: string, ssmUri: ssm.chaincode.dsl.model.uri.SsmUri);
        get sessionName(): string;
        get ssmUri(): ssm.chaincode.dsl.model.uri.SsmUri;
    }
    class SsmSessionLogListQueryResult implements ssm.data.dsl.features.query.DataSsmSessionLogListQueryResultDTO {
        constructor(items: any/* kotlin.collections.List<ssm.data.dsl.model.DataSsmSessionState> */);
        get items(): any/* kotlin.collections.List<ssm.data.dsl.model.DataSsmSessionState> */;
    }
}
export namespace ssm.data.dsl.model {
    class DataChannel /* implements ssm.data.dsl.model.DataChannelDTO */ {
        constructor(id: string);
    }
}
export namespace ssm.data.dsl.model {
    class DataSsm implements ssm.data.dsl.model.DataSsmDTO {
        constructor(uri: ssm.chaincode.dsl.model.uri.SsmUri, ssm: ssm.chaincode.dsl.model.Ssm, channel: ssm.data.dsl.model.DataChannel, version: Nullable<string>);
        get uri(): ssm.chaincode.dsl.model.uri.SsmUri;
        get ssm(): ssm.chaincode.dsl.model.Ssm;
        get channel(): ssm.data.dsl.model.DataChannel;
        get version(): Nullable<string>;
    }
}
export namespace ssm.data.dsl.model {
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
    class DataSsmSessionState implements ssm.data.dsl.model.DataSsmSessionStateDTO {
        constructor(details: ssm.chaincode.dsl.model.SsmSessionState, transaction: Nullable<ssm.chaincode.dsl.blockchain.Transaction>);
        get details(): ssm.chaincode.dsl.model.SsmSessionState;
        get transaction(): Nullable<ssm.chaincode.dsl.blockchain.Transaction>;
    }
}
export namespace ssm.data.dsl.model {
    class DataSsmUser implements ssm.data.dsl.model.DataSsmUserDTO {
        constructor(agent: ssm.chaincode.dsl.model.Agent);
        get agent(): ssm.chaincode.dsl.model.Agent;
    }
}
export namespace ssm.data.dsl {
    interface SsmApiFinder {
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
    interface DataChaincodeListQueryResultDTO {
        readonly items: any/* kotlin.collections.List<any/* ssm.chaincode.dsl.model.uri.ChaincodeUri */> */;
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
    interface DataSsmGetQueryResultDTO {
        readonly item: Nullable<ssm.data.dsl.model.DataSsm>;
    }
}
export namespace ssm.data.dsl.features.query {
    interface DataSsmListQueryDTO {
    }
    interface DataSsmListQueryResultDTO {
        readonly items: any/* kotlin.collections.List<ssm.data.dsl.model.DataSsmDTO> */;
    }
}
export namespace ssm.data.dsl.features.query {
    interface DataSsmSessionGetQueryDTO extends ssm.data.dsl.features.query.DataQueryDTO {
        readonly sessionName: string;
        readonly ssmUri: ssm.chaincode.dsl.model.uri.SsmUriDTO;
    }
    interface DataSsmSessionGetQueryResultDTO extends f2.dsl.cqrs.Event {
        readonly item: Nullable<ssm.data.dsl.model.DataSsmSessionDTO>;
    }
}
export namespace ssm.data.dsl.features.query {
    interface DataSsmSessionListQueryDTO extends ssm.data.dsl.features.query.DataQueryDTO {
        readonly ssmUri: ssm.chaincode.dsl.model.uri.SsmUriDTO;
    }
    interface DataSsmSessionListQueryResultDTO {
        readonly items: any/* kotlin.collections.List<ssm.data.dsl.model.DataSsmSessionDTO> */;
    }
}
export namespace ssm.data.dsl.features.query {
    interface DataSsmSessionLogGetQueryDTO extends ssm.data.dsl.features.query.DataQueryDTO {
        readonly sessionName: string;
        readonly txId: string;
        readonly ssmUri: ssm.chaincode.dsl.model.uri.SsmUriDTO;
    }
    interface DataSsmSessionLogGetQueryResultDTO {
        readonly item: Nullable<ssm.data.dsl.model.DataSsmSessionStateDTO>;
    }
}
export namespace ssm.data.dsl.features.query {
    interface DataSsmSessionLogListQueryDTO extends ssm.data.dsl.features.query.DataQueryDTO {
        readonly sessionName: string;
        readonly ssmUri: ssm.chaincode.dsl.model.uri.SsmUriDTO;
    }
    interface DataSsmSessionLogListQueryResultDTO {
        readonly items: any/* kotlin.collections.List<ssm.data.dsl.model.DataSsmSessionState> */;
    }
}
export namespace ssm.data.dsl.model {
    interface DataSsmDTO {
        readonly uri: ssm.chaincode.dsl.model.uri.SsmUriDTO;
        readonly ssm: ssm.chaincode.dsl.model.SsmDTO;
        readonly channel: any/* ssm.data.dsl.model.DataChannelDTO */;
        readonly version: Nullable<string>;
    }
}
export namespace ssm.data.dsl.model {
    interface DataSsmSessionDTO {
        readonly ssmUri: ssm.chaincode.dsl.model.uri.SsmUri;
        readonly sessionName: string;
        readonly state: ssm.data.dsl.model.DataSsmSessionStateDTO;
        readonly channel: any/* ssm.data.dsl.model.DataChannelDTO */;
        readonly transaction: Nullable<ssm.chaincode.dsl.blockchain.TransactionDTO>;
        readonly transactions: any/* kotlin.collections.List<ssm.chaincode.dsl.blockchain.TransactionDTO> */;
    }
}
export namespace ssm.data.dsl.model {
    interface DataSsmSessionStateDTO {
        readonly details: ssm.chaincode.dsl.model.SsmSessionStateDTO;
        readonly transaction: Nullable<ssm.chaincode.dsl.blockchain.TransactionDTO>;
    }
}
export namespace ssm.data.dsl.model {
    interface DataSsmUserDTO {
        readonly agent: ssm.chaincode.dsl.model.SsmAgentDTO;
    }
}
export namespace x2.api.ssm.domain.query {
    interface X2SessionPageQueryDTO {
        readonly ssmUri: string;
        readonly from: Nullable<number>;
        readonly to: Nullable<number>;
        readonly channel: any/* Nullable<kotlin.collections.List<string>> */;
        readonly engine: any/* Nullable<kotlin.collections.List<string>> */;
        readonly currentStep: any/* Nullable<kotlin.collections.List<number>> */;
        readonly __doNotUseIt: __doNotImplementIt;
    }
}
export namespace x2.api.ssm.domain.query {
    interface X2SessionPerStateStatsResultDTO extends x2.api.ssm.domain.stats.StatsResultDTO {
        readonly data: any/* kotlin.collections.List<x2.api.ssm.domain.stats.CellDTO> */;
        readonly __doNotUseIt: __doNotImplementIt;
    }
}
export namespace x2.api.ssm.domain.query {
    interface X2SessionStatePerIntervalStatsResultDTO extends x2.api.ssm.domain.stats.StatsResultDTO {
        readonly data: any/* kotlin.collections.List<x2.api.ssm.domain.stats.CellDTO> */;
        readonly __doNotUseIt: __doNotImplementIt;
    }
}
export namespace x2.api.ssm.domain.stats {
    interface StatsResultDTO {
        readonly data: any/* kotlin.collections.List<x2.api.ssm.domain.stats.CellDTO> */;
        readonly __doNotUseIt: __doNotImplementIt;
    }
    interface CellDTO {
        readonly label: string;
        readonly value: number;
        readonly __doNotUseIt: __doNotImplementIt;
    }
}
export as namespace x2_ssm_domain;