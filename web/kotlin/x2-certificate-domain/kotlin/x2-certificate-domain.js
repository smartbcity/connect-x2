(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin_city_smartb_f2_f2_dsl_cqrs.js', './kotlin_city_smartb_f2_f2_dsl_function.js', './kotlin_city_smartb_ssm_ssm_chaincode_dsl.js', './kotlin_city_smartb_ssm_ssm_couchdb_dsl.js', './kotlin_city_smartb_ssm_ssm_data_dsl.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin_city_smartb_f2_f2_dsl_cqrs.js'), require('./kotlin_city_smartb_f2_f2_dsl_function.js'), require('./kotlin_city_smartb_ssm_ssm_chaincode_dsl.js'), require('./kotlin_city_smartb_ssm_ssm_couchdb_dsl.js'), require('./kotlin_city_smartb_ssm_ssm_data_dsl.js'));
  else {
    if (typeof kotlin_city_smartb_f2_f2_dsl_cqrs === 'undefined') {
      throw new Error("Error loading module 'x2-certificate-domain'. Its dependency 'kotlin_city_smartb_f2_f2_dsl_cqrs' was not found. Please, check whether 'kotlin_city_smartb_f2_f2_dsl_cqrs' is loaded prior to 'x2-certificate-domain'.");
    }
    if (typeof kotlin_city_smartb_f2_f2_dsl_function === 'undefined') {
      throw new Error("Error loading module 'x2-certificate-domain'. Its dependency 'kotlin_city_smartb_f2_f2_dsl_function' was not found. Please, check whether 'kotlin_city_smartb_f2_f2_dsl_function' is loaded prior to 'x2-certificate-domain'.");
    }
    if (typeof kotlin_city_smartb_ssm_ssm_chaincode_dsl === 'undefined') {
      throw new Error("Error loading module 'x2-certificate-domain'. Its dependency 'kotlin_city_smartb_ssm_ssm_chaincode_dsl' was not found. Please, check whether 'kotlin_city_smartb_ssm_ssm_chaincode_dsl' is loaded prior to 'x2-certificate-domain'.");
    }
    if (typeof kotlin_city_smartb_ssm_ssm_couchdb_dsl === 'undefined') {
      throw new Error("Error loading module 'x2-certificate-domain'. Its dependency 'kotlin_city_smartb_ssm_ssm_couchdb_dsl' was not found. Please, check whether 'kotlin_city_smartb_ssm_ssm_couchdb_dsl' is loaded prior to 'x2-certificate-domain'.");
    }
    if (typeof kotlin_city_smartb_ssm_ssm_data_dsl === 'undefined') {
      throw new Error("Error loading module 'x2-certificate-domain'. Its dependency 'kotlin_city_smartb_ssm_ssm_data_dsl' was not found. Please, check whether 'kotlin_city_smartb_ssm_ssm_data_dsl' is loaded prior to 'x2-certificate-domain'.");
    }
    root['x2-certificate-domain'] = factory(typeof this['x2-certificate-domain'] === 'undefined' ? {} : this['x2-certificate-domain'], kotlin_city_smartb_f2_f2_dsl_cqrs, kotlin_city_smartb_f2_f2_dsl_function, kotlin_city_smartb_ssm_ssm_chaincode_dsl, kotlin_city_smartb_ssm_ssm_couchdb_dsl, kotlin_city_smartb_ssm_ssm_data_dsl);
  }
}(this, function (_, kotlin_city_smartb_f2_f2_dsl_cqrs, kotlin_city_smartb_f2_f2_dsl_function, kotlin_city_smartb_ssm_ssm_chaincode_dsl, kotlin_city_smartb_ssm_ssm_couchdb_dsl, kotlin_city_smartb_ssm_ssm_data_dsl) {
  'use strict';
  //region block: pre-declaration
  //endregion
  function CanGenerateCertificateQueryDTO() {
  }
  CanGenerateCertificateQueryDTO.$metadata$ = {
    simpleName: 'CanGenerateCertificateQueryDTO',
    kind: 'interface',
    interfaces: []
  };
  function CanGenerateCertificateQuery(sessionState) {
    this.sessionState_1 = sessionState;
  }
  CanGenerateCertificateQuery.prototype._get_sessionState__3892241680_6nrt2o_k$ = function () {
    return this.sessionState_1;
  };
  CanGenerateCertificateQuery.$metadata$ = {
    simpleName: 'CanGenerateCertificateQuery',
    kind: 'class',
    interfaces: [CanGenerateCertificateQueryDTO]
  };
  Object.defineProperty(CanGenerateCertificateQuery.prototype, 'sessionState', {
    configurable: true,
    get: function () {
      return this._get_sessionState__3892241680_6nrt2o_k$();
    }
  });
  function CanGenerateCertificateResultDTO() {
  }
  CanGenerateCertificateResultDTO.$metadata$ = {
    simpleName: 'CanGenerateCertificateResultDTO',
    kind: 'interface',
    interfaces: []
  };
  function CanGenerateCertificateResult(sessionState, canGenerateCertificate) {
    this.sessionState_1 = sessionState;
    this.canGenerateCertificate_1 = canGenerateCertificate;
  }
  CanGenerateCertificateResult.prototype._get_sessionState__3892241680_6nrt2o_k$ = function () {
    return this.sessionState_1;
  };
  CanGenerateCertificateResult.prototype._get_canGenerateCertificate__1065469017_hmcp5l_k$ = function () {
    return this.canGenerateCertificate_1;
  };
  CanGenerateCertificateResult.$metadata$ = {
    simpleName: 'CanGenerateCertificateResult',
    kind: 'class',
    interfaces: [CanGenerateCertificateResultDTO]
  };
  Object.defineProperty(CanGenerateCertificateResult.prototype, 'sessionState', {
    configurable: true,
    get: function () {
      return this._get_sessionState__3892241680_6nrt2o_k$();
    }
  });
  Object.defineProperty(CanGenerateCertificateResult.prototype, 'canGenerateCertificate', {
    configurable: true,
    get: function () {
      return this._get_canGenerateCertificate__1065469017_hmcp5l_k$();
    }
  });
  function GenerateCertificateFromSessionStateQueryDTO() {
  }
  GenerateCertificateFromSessionStateQueryDTO.$metadata$ = {
    simpleName: 'GenerateCertificateFromSessionStateQueryDTO',
    kind: 'interface',
    interfaces: []
  };
  function GenerateCertificateFromSessionStateQuery(sessionState, lang) {
    this.sessionState_1 = sessionState;
    this.lang_1 = lang;
  }
  GenerateCertificateFromSessionStateQuery.prototype._get_sessionState__3892241680_6nrt2o_k$ = function () {
    return this.sessionState_1;
  };
  GenerateCertificateFromSessionStateQuery.prototype._get_lang__802322973_d9okd9_k$ = function () {
    return this.lang_1;
  };
  GenerateCertificateFromSessionStateQuery.$metadata$ = {
    simpleName: 'GenerateCertificateFromSessionStateQuery',
    kind: 'class',
    interfaces: [GenerateCertificateFromSessionStateQueryDTO]
  };
  Object.defineProperty(GenerateCertificateFromSessionStateQuery.prototype, 'sessionState', {
    configurable: true,
    get: function () {
      return this._get_sessionState__3892241680_6nrt2o_k$();
    }
  });
  Object.defineProperty(GenerateCertificateFromSessionStateQuery.prototype, 'lang', {
    configurable: true,
    get: function () {
      return this._get_lang__802322973_d9okd9_k$();
    }
  });
  function GenerateCertificateFromSessionStateResultDTO() {
  }
  GenerateCertificateFromSessionStateResultDTO.$metadata$ = {
    simpleName: 'GenerateCertificateFromSessionStateResultDTO',
    kind: 'interface',
    interfaces: []
  };
  function GenerateCertificateFromSessionStateResult(base64Document) {
    this.base64Document_1 = base64Document;
  }
  GenerateCertificateFromSessionStateResult.prototype._get_base64Document__2860040129_nqbgvz_k$ = function () {
    return this.base64Document_1;
  };
  GenerateCertificateFromSessionStateResult.$metadata$ = {
    simpleName: 'GenerateCertificateFromSessionStateResult',
    kind: 'class',
    interfaces: [GenerateCertificateFromSessionStateResultDTO]
  };
  Object.defineProperty(GenerateCertificateFromSessionStateResult.prototype, 'base64Document', {
    configurable: true,
    get: function () {
      return this._get_base64Document__2860040129_nqbgvz_k$();
    }
  });
  function GenerateCertificatePdfQueryDTO() {
  }
  GenerateCertificatePdfQueryDTO.$metadata$ = {
    simpleName: 'GenerateCertificatePdfQueryDTO',
    kind: 'interface',
    interfaces: []
  };
  function GenerateCertificatePdfQuery(certificate, lang) {
    this.certificate_1 = certificate;
    this.lang_1 = lang;
  }
  GenerateCertificatePdfQuery.prototype._get_certificate__2049026778_xvxr6i_k$ = function () {
    return this.certificate_1;
  };
  GenerateCertificatePdfQuery.prototype._get_lang__802322973_d9okd9_k$ = function () {
    return this.lang_1;
  };
  GenerateCertificatePdfQuery.$metadata$ = {
    simpleName: 'GenerateCertificatePdfQuery',
    kind: 'class',
    interfaces: [GenerateCertificatePdfQueryDTO]
  };
  Object.defineProperty(GenerateCertificatePdfQuery.prototype, 'certificate', {
    configurable: true,
    get: function () {
      return this._get_certificate__2049026778_xvxr6i_k$();
    }
  });
  Object.defineProperty(GenerateCertificatePdfQuery.prototype, 'lang', {
    configurable: true,
    get: function () {
      return this._get_lang__802322973_d9okd9_k$();
    }
  });
  function GenerateCertificatePdfResult(base64Document) {
    this.base64Document_1 = base64Document;
  }
  GenerateCertificatePdfResult.prototype._get_base64Document__2860040129_nqbgvz_k$ = function () {
    return this.base64Document_1;
  };
  GenerateCertificatePdfResult.$metadata$ = {
    simpleName: 'GenerateCertificatePdfResult',
    kind: 'class',
    interfaces: [GenerateCertificatePdfResultDTO]
  };
  function GenerateCertificatePdfResultDTO() {
  }
  GenerateCertificatePdfResultDTO.$metadata$ = {
    simpleName: 'GenerateCertificatePdfResultDTO',
    kind: 'interface',
    interfaces: []
  };
  function CertificateCredentialsDTO() {
  }
  CertificateCredentialsDTO.$metadata$ = {
    simpleName: 'CertificateCredentialsDTO',
    kind: 'interface',
    interfaces: []
  };
  function CertificateDataDTO() {
  }
  CertificateDataDTO.$metadata$ = {
    simpleName: 'CertificateDataDTO',
    kind: 'interface',
    interfaces: []
  };
  function CertificateProtocolDTO() {
  }
  CertificateProtocolDTO.$metadata$ = {
    simpleName: 'CertificateProtocolDTO',
    kind: 'interface',
    interfaces: []
  };
  function CertificateSignerDTO() {
  }
  CertificateSignerDTO.$metadata$ = {
    simpleName: 'CertificateSignerDTO',
    kind: 'interface',
    interfaces: []
  };
  //region block: exports
  function $jsExportAll$(_) {
    var $x2 = _.x2 || (_.x2 = {});
    var $x2$api = $x2.api || ($x2.api = {});
    var $x2$api$certificate = $x2$api.certificate || ($x2$api.certificate = {});
    var $x2$api$certificate$domain = $x2$api$certificate.domain || ($x2$api$certificate.domain = {});
    var $x2$api$certificate$domain$features = $x2$api$certificate$domain.features || ($x2$api$certificate$domain.features = {});
    $x2$api$certificate$domain$features.CanGenerateCertificateQuery = CanGenerateCertificateQuery;
    $x2$api$certificate$domain$features.CanGenerateCertificateResult = CanGenerateCertificateResult;
    var $x2 = _.x2 || (_.x2 = {});
    var $x2$api = $x2.api || ($x2.api = {});
    var $x2$api$certificate = $x2$api.certificate || ($x2$api.certificate = {});
    var $x2$api$certificate$domain = $x2$api$certificate.domain || ($x2$api$certificate.domain = {});
    var $x2$api$certificate$domain$features = $x2$api$certificate$domain.features || ($x2$api$certificate$domain.features = {});
    $x2$api$certificate$domain$features.GenerateCertificateFromSessionStateQuery = GenerateCertificateFromSessionStateQuery;
    $x2$api$certificate$domain$features.GenerateCertificateFromSessionStateResult = GenerateCertificateFromSessionStateResult;
    var $x2 = _.x2 || (_.x2 = {});
    var $x2$api = $x2.api || ($x2.api = {});
    var $x2$api$certificate = $x2$api.certificate || ($x2$api.certificate = {});
    var $x2$api$certificate$domain = $x2$api$certificate.domain || ($x2$api$certificate.domain = {});
    var $x2$api$certificate$domain$features = $x2$api$certificate$domain.features || ($x2$api$certificate$domain.features = {});
    $x2$api$certificate$domain$features.GenerateCertificatePdfQuery = GenerateCertificatePdfQuery;
    $x2$api$certificate$domain$features.GenerateCertificatePdfResult = GenerateCertificatePdfResult;
    var $x2 = _.x2 || (_.x2 = {});
    var $x2$api = $x2.api || ($x2.api = {});
    var $x2$api$certificate = $x2$api.certificate || ($x2$api.certificate = {});
    var $x2$api$certificate$domain = $x2$api$certificate.domain || ($x2$api$certificate.domain = {});
    var $x2$api$certificate$domain$model = $x2$api$certificate$domain.model || ($x2$api$certificate$domain.model = {});
    var $x2 = _.x2 || (_.x2 = {});
    var $x2$api = $x2.api || ($x2.api = {});
    var $x2$api$certificate = $x2$api.certificate || ($x2$api.certificate = {});
    var $x2$api$certificate$domain = $x2$api$certificate.domain || ($x2$api$certificate.domain = {});
    var $x2$api$certificate$domain$model = $x2$api$certificate$domain.model || ($x2$api$certificate$domain.model = {});
    var $x2 = _.x2 || (_.x2 = {});
    var $x2$api = $x2.api || ($x2.api = {});
    var $x2$api$certificate = $x2$api.certificate || ($x2$api.certificate = {});
    var $x2$api$certificate$domain = $x2$api$certificate.domain || ($x2$api$certificate.domain = {});
    var $x2$api$certificate$domain$model = $x2$api$certificate$domain.model || ($x2$api$certificate$domain.model = {});
    var $x2 = _.x2 || (_.x2 = {});
    var $x2$api = $x2.api || ($x2.api = {});
    var $x2$api$certificate = $x2$api.certificate || ($x2$api.certificate = {});
    var $x2$api$certificate$domain = $x2$api$certificate.domain || ($x2$api$certificate.domain = {});
    var $x2$api$certificate$domain$model = $x2$api$certificate$domain.model || ($x2$api$certificate$domain.model = {});
  }
  $jsExportAll$(_);
  kotlin_city_smartb_f2_f2_dsl_cqrs.$jsExportAll$(_);
  kotlin_city_smartb_f2_f2_dsl_function.$jsExportAll$(_);
  kotlin_city_smartb_ssm_ssm_chaincode_dsl.$jsExportAll$(_);
  kotlin_city_smartb_ssm_ssm_couchdb_dsl.$jsExportAll$(_);
  kotlin_city_smartb_ssm_ssm_data_dsl.$jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=x2-certificate-domain.js.map