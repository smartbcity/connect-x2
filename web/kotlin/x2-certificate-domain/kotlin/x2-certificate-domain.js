(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin_kotlin.js', './kotlin_city_smartb_f2_f2_dsl_cqrs.js', './kotlin_city_smartb_f2_f2_dsl_function.js', './kotlin_city_smartb_ssm_ssm_chaincode_dsl.js', './kotlin_city_smartb_ssm_ssm_couchdb_dsl.js', './kotlin_city_smartb_ssm_ssm_data_dsl.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin_kotlin.js'), require('./kotlin_city_smartb_f2_f2_dsl_cqrs.js'), require('./kotlin_city_smartb_f2_f2_dsl_function.js'), require('./kotlin_city_smartb_ssm_ssm_chaincode_dsl.js'), require('./kotlin_city_smartb_ssm_ssm_couchdb_dsl.js'), require('./kotlin_city_smartb_ssm_ssm_data_dsl.js'));
  else {
    if (typeof kotlin_kotlin === 'undefined') {
      throw new Error("Error loading module 'x2-certificate-domain'. Its dependency 'kotlin_kotlin' was not found. Please, check whether 'kotlin_kotlin' is loaded prior to 'x2-certificate-domain'.");
    }
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
    root['x2-certificate-domain'] = factory(typeof this['x2-certificate-domain'] === 'undefined' ? {} : this['x2-certificate-domain'], kotlin_kotlin, kotlin_city_smartb_f2_f2_dsl_cqrs, kotlin_city_smartb_f2_f2_dsl_function, kotlin_city_smartb_ssm_ssm_chaincode_dsl, kotlin_city_smartb_ssm_ssm_couchdb_dsl, kotlin_city_smartb_ssm_ssm_data_dsl);
  }
}(this, function (_, kotlin_kotlin, kotlin_city_smartb_f2_f2_dsl_cqrs, kotlin_city_smartb_f2_f2_dsl_function, kotlin_city_smartb_ssm_ssm_chaincode_dsl, kotlin_city_smartb_ssm_ssm_couchdb_dsl, kotlin_city_smartb_ssm_ssm_data_dsl) {
  //region block: imports
  var THROW_ISE = kotlin_kotlin.$crossModule$.THROW_ISE;
  var Unit_getInstance = kotlin_kotlin.$crossModule$.Unit_getInstance;
  var Enum = kotlin_kotlin.$crossModule$.Enum;
  //endregion
  'use strict';
  //region block: pre-declaration
  Lang.prototype = Object.create(Enum.prototype);
  Lang.prototype.constructor = Lang;
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
  function GenerateCertificatePdfResultDTO() {
  }
  GenerateCertificatePdfResultDTO.$metadata$ = {
    simpleName: 'GenerateCertificatePdfResultDTO',
    kind: 'interface',
    interfaces: []
  };
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
  Object.defineProperty(GenerateCertificatePdfResult.prototype, 'base64Document', {
    configurable: true,
    get: function () {
      return this._get_base64Document__2860040129_nqbgvz_k$();
    }
  });
  function CertificateCredentialsDTO() {
  }
  CertificateCredentialsDTO.$metadata$ = {
    simpleName: 'CertificateCredentialsDTO',
    kind: 'interface',
    interfaces: []
  };
  function CertificateCredentials(context, type, id, title, holder, issuer, protocol, payload) {
    this.context_1 = context;
    this.type_1 = type;
    this.id_1 = id;
    this.title_1 = title;
    this.holder_1 = holder;
    this.issuer_1 = issuer;
    this.protocol_1 = protocol;
    this.payload_1 = payload;
  }
  CertificateCredentials.prototype._get_context__1558698818_ps0bpe_k$ = function () {
    return this.context_1;
  };
  CertificateCredentials.prototype._get_type__810427985_deia8h_k$ = function () {
    return this.type_1;
  };
  CertificateCredentials.prototype._get_id__1413120976_ndc34g_k$ = function () {
    return this.id_1;
  };
  CertificateCredentials.prototype._get_title__3633781881_axnhxj_k$ = function () {
    return this.title_1;
  };
  CertificateCredentials.prototype._get_holder__3377096415_f6h5pd_k$ = function () {
    return this.holder_1;
  };
  CertificateCredentials.prototype._get_issuer__91120498_1i910y_k$ = function () {
    return this.issuer_1;
  };
  CertificateCredentials.prototype._get_protocol__882525235_elfktv_k$ = function () {
    return this.protocol_1;
  };
  CertificateCredentials.prototype._get_payload__3508054851_d0i9j1_k$ = function () {
    return this.payload_1;
  };
  CertificateCredentials.$metadata$ = {
    simpleName: 'CertificateCredentials',
    kind: 'class',
    interfaces: [CertificateCredentialsDTO]
  };
  Object.defineProperty(CertificateCredentials.prototype, 'context', {
    configurable: true,
    get: function () {
      return this._get_context__1558698818_ps0bpe_k$();
    }
  });
  Object.defineProperty(CertificateCredentials.prototype, 'type', {
    configurable: true,
    get: function () {
      return this._get_type__810427985_deia8h_k$();
    }
  });
  Object.defineProperty(CertificateCredentials.prototype, 'id', {
    configurable: true,
    get: function () {
      return this._get_id__1413120976_ndc34g_k$();
    }
  });
  Object.defineProperty(CertificateCredentials.prototype, 'title', {
    configurable: true,
    get: function () {
      return this._get_title__3633781881_axnhxj_k$();
    }
  });
  Object.defineProperty(CertificateCredentials.prototype, 'holder', {
    configurable: true,
    get: function () {
      return this._get_holder__3377096415_f6h5pd_k$();
    }
  });
  Object.defineProperty(CertificateCredentials.prototype, 'issuer', {
    configurable: true,
    get: function () {
      return this._get_issuer__91120498_1i910y_k$();
    }
  });
  Object.defineProperty(CertificateCredentials.prototype, 'protocol', {
    configurable: true,
    get: function () {
      return this._get_protocol__882525235_elfktv_k$();
    }
  });
  Object.defineProperty(CertificateCredentials.prototype, 'payload', {
    configurable: true,
    get: function () {
      return this._get_payload__3508054851_d0i9j1_k$();
    }
  });
  function CertificateDataDTO() {
  }
  CertificateDataDTO.$metadata$ = {
    simpleName: 'CertificateDataDTO',
    kind: 'interface',
    interfaces: []
  };
  function CertificateData(label, value, unit) {
    this.label_1 = label;
    this.value_1 = value;
    this.unit_1 = unit;
  }
  CertificateData.prototype._get_label__3396817757_euqgmb_k$ = function () {
    return this.label_1;
  };
  CertificateData.prototype._get_value__3683422336_a43j40_k$ = function () {
    return this.value_1;
  };
  CertificateData.prototype._get_unit__811017543_deux53_k$ = function () {
    return this.unit_1;
  };
  CertificateData.$metadata$ = {
    simpleName: 'CertificateData',
    kind: 'class',
    interfaces: [CertificateDataDTO]
  };
  Object.defineProperty(CertificateData.prototype, 'label', {
    configurable: true,
    get: function () {
      return this._get_label__3396817757_euqgmb_k$();
    }
  });
  Object.defineProperty(CertificateData.prototype, 'value', {
    configurable: true,
    get: function () {
      return this._get_value__3683422336_a43j40_k$();
    }
  });
  Object.defineProperty(CertificateData.prototype, 'unit', {
    configurable: true,
    get: function () {
      return this._get_unit__811017543_deux53_k$();
    }
  });
  function CertificateProtocolDTO() {
  }
  CertificateProtocolDTO.$metadata$ = {
    simpleName: 'CertificateProtocolDTO',
    kind: 'interface',
    interfaces: []
  };
  function CertificateProtocol(validationProtocol, protocolEngineVersion, channel, session, additionals, url) {
    this.validationProtocol_1 = validationProtocol;
    this.protocolEngineVersion_1 = protocolEngineVersion;
    this.channel_1 = channel;
    this.session_1 = session;
    this.additionals_1 = additionals;
    this.url_1 = url;
  }
  CertificateProtocol.prototype._get_validationProtocol__43009914_plunu_k$ = function () {
    return this.validationProtocol_1;
  };
  CertificateProtocol.prototype._get_protocolEngineVersion__1444862227_nw8etv_k$ = function () {
    return this.protocolEngineVersion_1;
  };
  CertificateProtocol.prototype._get_channel__3558637166_c6e3yq_k$ = function () {
    return this.channel_1;
  };
  CertificateProtocol.prototype._get_session__3531090747_cmsix1_k$ = function () {
    return this.session_1;
  };
  CertificateProtocol.prototype._get_additionals__991711717_geftnp_k$ = function () {
    return this.additionals_1;
  };
  CertificateProtocol.prototype._get_url__857449730_e6i4g2_k$ = function () {
    return this.url_1;
  };
  CertificateProtocol.$metadata$ = {
    simpleName: 'CertificateProtocol',
    kind: 'class',
    interfaces: [CertificateProtocolDTO]
  };
  Object.defineProperty(CertificateProtocol.prototype, 'validationProtocol', {
    configurable: true,
    get: function () {
      return this._get_validationProtocol__43009914_plunu_k$();
    }
  });
  Object.defineProperty(CertificateProtocol.prototype, 'protocolEngineVersion', {
    configurable: true,
    get: function () {
      return this._get_protocolEngineVersion__1444862227_nw8etv_k$();
    }
  });
  Object.defineProperty(CertificateProtocol.prototype, 'channel', {
    configurable: true,
    get: function () {
      return this._get_channel__3558637166_c6e3yq_k$();
    }
  });
  Object.defineProperty(CertificateProtocol.prototype, 'session', {
    configurable: true,
    get: function () {
      return this._get_session__3531090747_cmsix1_k$();
    }
  });
  Object.defineProperty(CertificateProtocol.prototype, 'additionals', {
    configurable: true,
    get: function () {
      return this._get_additionals__991711717_geftnp_k$();
    }
  });
  Object.defineProperty(CertificateProtocol.prototype, 'url', {
    configurable: true,
    get: function () {
      return this._get_url__857449730_e6i4g2_k$();
    }
  });
  function CertificateSignerDTO() {
  }
  CertificateSignerDTO.$metadata$ = {
    simpleName: 'CertificateSignerDTO',
    kind: 'interface',
    interfaces: []
  };
  function CertificateSigner(name, organization, roles, signature) {
    this.name_1 = name;
    this.organization_1 = organization;
    this.roles_1 = roles;
    this.signature_1 = signature;
  }
  CertificateSigner.prototype._get_name__804168992_das4rk_k$ = function () {
    return this.name_1;
  };
  CertificateSigner.prototype._get_organization__1926703736_vv3y48_k$ = function () {
    return this.organization_1;
  };
  CertificateSigner.prototype._get_roles__3581820084_bsl7ws_k$ = function () {
    return this.roles_1;
  };
  CertificateSigner.prototype._get_signature__1908568217_vkb8nt_k$ = function () {
    return this.signature_1;
  };
  CertificateSigner.$metadata$ = {
    simpleName: 'CertificateSigner',
    kind: 'class',
    interfaces: [CertificateSignerDTO]
  };
  Object.defineProperty(CertificateSigner.prototype, 'name', {
    configurable: true,
    get: function () {
      return this._get_name__804168992_das4rk_k$();
    }
  });
  Object.defineProperty(CertificateSigner.prototype, 'organization', {
    configurable: true,
    get: function () {
      return this._get_organization__1926703736_vv3y48_k$();
    }
  });
  Object.defineProperty(CertificateSigner.prototype, 'roles', {
    configurable: true,
    get: function () {
      return this._get_roles__3581820084_bsl7ws_k$();
    }
  });
  Object.defineProperty(CertificateSigner.prototype, 'signature', {
    configurable: true,
    get: function () {
      return this._get_signature__1908568217_vkb8nt_k$();
    }
  });
  var Lang_EN_instance;
  var Lang_FR_instance;
  function values() {
    return [Lang_EN_getInstance(), Lang_FR_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'EN':
        return Lang_EN_getInstance();
      case 'FR':
        return Lang_FR_getInstance();
      default:
        Lang_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Lang_entriesInitialized;
  function Lang_initEntries() {
    if (Lang_entriesInitialized)
      return Unit_getInstance();
    Lang_entriesInitialized = true;
    Lang_EN_instance = new Lang('EN', 0);
    Lang_FR_instance = new Lang('FR', 1);
  }
  function Lang(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  Lang.$metadata$ = {
    simpleName: 'Lang',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(Lang.prototype, 'name', {
    configurable: true,
    get: Lang.prototype._get_name__804168992_das4rk_k$
  });
  Object.defineProperty(Lang.prototype, 'ordinal', {
    configurable: true,
    get: Lang.prototype._get_ordinal__3363892928_fec5kw_k$
  });
  function Lang_EN_getInstance() {
    Lang_initEntries();
    return Lang_EN_instance;
  }
  function Lang_FR_getInstance() {
    Lang_initEntries();
    return Lang_FR_instance;
  }
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
    $x2$api$certificate$domain$model.CertificateCredentials = CertificateCredentials;
    var $x2 = _.x2 || (_.x2 = {});
    var $x2$api = $x2.api || ($x2.api = {});
    var $x2$api$certificate = $x2$api.certificate || ($x2$api.certificate = {});
    var $x2$api$certificate$domain = $x2$api$certificate.domain || ($x2$api$certificate.domain = {});
    var $x2$api$certificate$domain$model = $x2$api$certificate$domain.model || ($x2$api$certificate$domain.model = {});
    $x2$api$certificate$domain$model.CertificateData = CertificateData;
    var $x2 = _.x2 || (_.x2 = {});
    var $x2$api = $x2.api || ($x2.api = {});
    var $x2$api$certificate = $x2$api.certificate || ($x2$api.certificate = {});
    var $x2$api$certificate$domain = $x2$api$certificate.domain || ($x2$api$certificate.domain = {});
    var $x2$api$certificate$domain$model = $x2$api$certificate$domain.model || ($x2$api$certificate$domain.model = {});
    $x2$api$certificate$domain$model.CertificateProtocol = CertificateProtocol;
    var $x2 = _.x2 || (_.x2 = {});
    var $x2$api = $x2.api || ($x2.api = {});
    var $x2$api$certificate = $x2$api.certificate || ($x2$api.certificate = {});
    var $x2$api$certificate$domain = $x2$api$certificate.domain || ($x2$api$certificate.domain = {});
    var $x2$api$certificate$domain$model = $x2$api$certificate$domain.model || ($x2$api$certificate$domain.model = {});
    $x2$api$certificate$domain$model.CertificateSigner = CertificateSigner;
    var $x2 = _.x2 || (_.x2 = {});
    var $x2$api = $x2.api || ($x2.api = {});
    var $x2$api$certificate = $x2$api.certificate || ($x2$api.certificate = {});
    var $x2$api$certificate$domain = $x2$api$certificate.domain || ($x2$api$certificate.domain = {});
    var $x2$api$certificate$domain$model = $x2$api$certificate$domain.model || ($x2$api$certificate$domain.model = {});
    $x2$api$certificate$domain$model.Lang = Lang;
    $x2$api$certificate$domain$model.Lang.values = values;
    $x2$api$certificate$domain$model.Lang.valueOf = valueOf;
    Object.defineProperty($x2$api$certificate$domain$model.Lang, 'EN', {
      configurable: true,
      get: Lang_EN_getInstance
    });
    Object.defineProperty($x2$api$certificate$domain$model.Lang, 'FR', {
      configurable: true,
      get: Lang_FR_getInstance
    });
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