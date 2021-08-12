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
export namespace x2.api.certificate.domain.features {
    interface GenerateCertificatePdfQueryDTO {
        readonly certificate: x2.api.certificate.domain.model.CertificateCredentialsDTO;
        readonly lang: any /*Class x2.api.certificate.domain.model.Lang with kind: ENUM_CLASS*/;
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
export namespace x2.api.certificate.domain.features {
    class GenerateCertificatePdfQuery implements x2.api.certificate.domain.features.GenerateCertificatePdfQueryDTO {
        constructor(certificate: x2.api.certificate.domain.model.CertificateCredentials, lang: any /*Class x2.api.certificate.domain.model.Lang with kind: ENUM_CLASS*/);
        readonly certificate: x2.api.certificate.domain.model.CertificateCredentials;
        readonly lang: any /*Class x2.api.certificate.domain.model.Lang with kind: ENUM_CLASS*/;
    }
    class GenerateCertificatePdfResult {
        constructor(base64Document: string);
        readonly base64Document: string;
    }
}
export as namespace x2_certificate_domain;