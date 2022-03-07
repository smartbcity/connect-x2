(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin_city_smartb_ssm_ssm_chaincode_dsl.js', './kotlin_kotlin.js', './kotlin_city_smartb_f2_f2_dsl_cqrs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin_city_smartb_ssm_ssm_chaincode_dsl.js'), require('./kotlin_kotlin.js'), require('./kotlin_city_smartb_f2_f2_dsl_cqrs.js'));
  else {
    if (typeof kotlin_city_smartb_ssm_ssm_chaincode_dsl === 'undefined') {
      throw new Error("Error loading module 'kotlin_city_smartb_ssm_ssm_couchdb_dsl'. Its dependency 'kotlin_city_smartb_ssm_ssm_chaincode_dsl' was not found. Please, check whether 'kotlin_city_smartb_ssm_ssm_chaincode_dsl' is loaded prior to 'kotlin_city_smartb_ssm_ssm_couchdb_dsl'.");
    }
    if (typeof kotlin_kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin_city_smartb_ssm_ssm_couchdb_dsl'. Its dependency 'kotlin_kotlin' was not found. Please, check whether 'kotlin_kotlin' is loaded prior to 'kotlin_city_smartb_ssm_ssm_couchdb_dsl'.");
    }
    if (typeof kotlin_city_smartb_f2_f2_dsl_cqrs === 'undefined') {
      throw new Error("Error loading module 'kotlin_city_smartb_ssm_ssm_couchdb_dsl'. Its dependency 'kotlin_city_smartb_f2_f2_dsl_cqrs' was not found. Please, check whether 'kotlin_city_smartb_f2_f2_dsl_cqrs' is loaded prior to 'kotlin_city_smartb_ssm_ssm_couchdb_dsl'.");
    }
    root.kotlin_city_smartb_ssm_ssm_couchdb_dsl = factory(typeof kotlin_city_smartb_ssm_ssm_couchdb_dsl === 'undefined' ? {} : kotlin_city_smartb_ssm_ssm_couchdb_dsl, kotlin_city_smartb_ssm_ssm_chaincode_dsl, kotlin_kotlin, kotlin_city_smartb_f2_f2_dsl_cqrs);
  }
}(this, function (_, kotlin_city_smartb_ssm_ssm_chaincode_dsl, kotlin_kotlin, kotlin_city_smartb_f2_f2_dsl_cqrs) {
  //region block: imports
  var SsmAgent = kotlin_city_smartb_ssm_ssm_chaincode_dsl.$crossModule$.SsmAgent;
  var getKClass = kotlin_kotlin.$crossModule$.getKClass;
  var SsmGrant = kotlin_city_smartb_ssm_ssm_chaincode_dsl.$crossModule$.SsmGrant;
  var Ssm = kotlin_city_smartb_ssm_ssm_chaincode_dsl.$crossModule$.Ssm;
  var SsmSessionState = kotlin_city_smartb_ssm_ssm_chaincode_dsl.$crossModule$.SsmSessionState;
  var Query = kotlin_city_smartb_f2_f2_dsl_cqrs.$crossModule$.Query;
  var Event = kotlin_city_smartb_f2_f2_dsl_cqrs.$crossModule$.Event;
  var PageQueryDTO = kotlin_city_smartb_f2_f2_dsl_cqrs.$crossModule$.PageQueryDTO;
  var PageQueryResultDTO = kotlin_city_smartb_f2_f2_dsl_cqrs.$crossModule$.PageQueryResultDTO;
  //endregion
  'use strict';
  //region block: pre-declaration
  Admin.prototype = Object.create(DocType.prototype);
  Admin.prototype.constructor = Admin;
  User.prototype = Object.create(DocType.prototype);
  User.prototype.constructor = User;
  Grant.prototype = Object.create(DocType.prototype);
  Grant.prototype.constructor = Grant;
  Ssm_0.prototype = Object.create(DocType.prototype);
  Ssm_0.prototype.constructor = Ssm_0;
  State.prototype = Object.create(DocType.prototype);
  State.prototype.constructor = State;
  Chaincode.prototype = Object.create(DocType.prototype);
  Chaincode.prototype.constructor = Chaincode;
  //endregion
  function SsmCouchDbQueries() {
  }
  SsmCouchDbQueries.$metadata$ = {
    simpleName: 'SsmCouchDbQueries',
    kind: 'interface',
    interfaces: []
  };
  function DatabaseDTO() {
  }
  DatabaseDTO.$metadata$ = {
    simpleName: 'DatabaseDTO',
    kind: 'interface',
    interfaces: []
  };
  function Database(name) {
    this.name_1 = name;
  }
  Database.prototype._get_name__804168992_das4rk_k$ = function () {
    return this.name_1;
  };
  Database.$metadata$ = {
    simpleName: 'Database',
    kind: 'class',
    interfaces: [DatabaseDTO]
  };
  Object.defineProperty(Database.prototype, 'name', {
    configurable: true,
    get: function () {
      return this._get_name__804168992_das4rk_k$();
    }
  });
  function DatabaseChangesDTO() {
  }
  DatabaseChangesDTO.$metadata$ = {
    simpleName: 'DatabaseChangesDTO',
    kind: 'interface',
    interfaces: []
  };
  function DatabaseChanges(changeEventId, docType, objectId) {
    this.changeEventId_1 = changeEventId;
    this.docType_1 = docType;
    this.objectId_1 = objectId;
  }
  DatabaseChanges.prototype._get_changeEventId__517858796_8kbiek_k$ = function () {
    return this.changeEventId_1;
  };
  DatabaseChanges.prototype._get_docType__2957623487_m47x35_k$ = function () {
    return this.docType_1;
  };
  DatabaseChanges.prototype._get_objectId__4287184465_4mt9r_k$ = function () {
    return this.objectId_1;
  };
  DatabaseChanges.$metadata$ = {
    simpleName: 'DatabaseChanges',
    kind: 'class',
    interfaces: [DatabaseChangesDTO]
  };
  Object.defineProperty(DatabaseChanges.prototype, 'changeEventId', {
    configurable: true,
    get: function () {
      return this._get_changeEventId__517858796_8kbiek_k$();
    }
  });
  Object.defineProperty(DatabaseChanges.prototype, 'docType', {
    configurable: true,
    get: function () {
      return this._get_docType__2957623487_m47x35_k$();
    }
  });
  Object.defineProperty(DatabaseChanges.prototype, 'objectId', {
    configurable: true,
    get: function () {
      return this._get_objectId__4287184465_4mt9r_k$();
    }
  });
  function Admin() {
    Admin_instance = this;
    DocType.call(this, 'admin', getKClass(SsmAgent));
  }
  Admin.$metadata$ = {
    simpleName: 'Admin',
    kind: 'object',
    interfaces: []
  };
  var Admin_instance;
  function Admin_getInstance() {
    if (Admin_instance == null)
      new Admin();
    return Admin_instance;
  }
  function User() {
    User_instance = this;
    DocType.call(this, 'user', getKClass(SsmAgent));
  }
  User.$metadata$ = {
    simpleName: 'User',
    kind: 'object',
    interfaces: []
  };
  var User_instance;
  function User_getInstance() {
    if (User_instance == null)
      new User();
    return User_instance;
  }
  function Grant() {
    Grant_instance = this;
    DocType.call(this, 'grant', getKClass(SsmGrant));
  }
  Grant.$metadata$ = {
    simpleName: 'Grant',
    kind: 'object',
    interfaces: []
  };
  var Grant_instance;
  function Grant_getInstance() {
    if (Grant_instance == null)
      new Grant();
    return Grant_instance;
  }
  function Ssm_0() {
    Ssm_instance = this;
    DocType.call(this, 'ssm', getKClass(Ssm));
  }
  Ssm_0.$metadata$ = {
    simpleName: 'Ssm',
    kind: 'object',
    interfaces: []
  };
  var Ssm_instance;
  function Ssm_getInstance() {
    if (Ssm_instance == null)
      new Ssm_0();
    return Ssm_instance;
  }
  function State() {
    State_instance = this;
    DocType.call(this, 'state', getKClass(SsmSessionState));
  }
  State.$metadata$ = {
    simpleName: 'State',
    kind: 'object',
    interfaces: []
  };
  var State_instance;
  function State_getInstance() {
    if (State_instance == null)
      new State();
    return State_instance;
  }
  function Chaincode() {
    Chaincode_instance = this;
    DocType.call(this, 'state', getKClass(ChaincodeLscc));
  }
  Chaincode.$metadata$ = {
    simpleName: 'Chaincode',
    kind: 'object',
    interfaces: []
  };
  var Chaincode_instance;
  function Chaincode_getInstance() {
    if (Chaincode_instance == null)
      new Chaincode();
    return Chaincode_instance;
  }
  function DocType(name, clazz) {
    this.name_1 = name;
    this.clazz_1 = clazz;
  }
  DocType.prototype._get_name__804168992_das4rk_k$ = function () {
    return this.name_1;
  };
  DocType.prototype._get_clazz__3149304953_iy3ipz_k$ = function () {
    return this.clazz_1;
  };
  DocType.$metadata$ = {
    simpleName: 'DocType',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(DocType.prototype, 'name', {
    configurable: true,
    get: DocType.prototype._get_name__804168992_das4rk_k$
  });
  Object.defineProperty(DocType.prototype, 'clazz', {
    configurable: true,
    get: DocType.prototype._get_clazz__3149304953_iy3ipz_k$
  });
  function ChaincodeLscc(_id, _rev) {
    this._id_1 = _id;
    this._rev_1 = _rev;
  }
  ChaincodeLscc.prototype._get__id__856785431_e63vvb_k$ = function () {
    return this._id_1;
  };
  ChaincodeLscc.prototype._get__rev__790815463_d2tx47_k$ = function () {
    return this._rev_1;
  };
  ChaincodeLscc.$metadata$ = {
    simpleName: 'ChaincodeLscc',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(ChaincodeLscc.prototype, '_id', {
    configurable: true,
    get: ChaincodeLscc.prototype._get__id__856785431_e63vvb_k$
  });
  Object.defineProperty(ChaincodeLscc.prototype, '_rev', {
    configurable: true,
    get: ChaincodeLscc.prototype._get__rev__790815463_d2tx47_k$
  });
  function CouchdbAdminListQueryDTO() {
  }
  CouchdbAdminListQueryDTO.$metadata$ = {
    simpleName: 'CouchdbAdminListQueryDTO',
    kind: 'interface',
    interfaces: [Query]
  };
  function CouchdbAdminListQueryResultDTO() {
  }
  CouchdbAdminListQueryResultDTO.$metadata$ = {
    simpleName: 'CouchdbAdminListQueryResultDTO',
    kind: 'interface',
    interfaces: [Event]
  };
  function CouchdbAdminListQuery(chaincodeUri) {
    this.chaincodeUri_1 = chaincodeUri;
  }
  CouchdbAdminListQuery.prototype._get_chaincodeUri__1808286381_twlup9_k$ = function () {
    return this.chaincodeUri_1;
  };
  CouchdbAdminListQuery.$metadata$ = {
    simpleName: 'CouchdbAdminListQuery',
    kind: 'class',
    interfaces: [CouchdbAdminListQueryDTO]
  };
  Object.defineProperty(CouchdbAdminListQuery.prototype, 'chaincodeUri', {
    configurable: true,
    get: function () {
      return this._get_chaincodeUri__1808286381_twlup9_k$();
    }
  });
  function CouchdbAdminListQueryResult(items) {
    this.items_1 = items;
  }
  CouchdbAdminListQueryResult.prototype._get_items__3328574481_fzd5gv_k$ = function () {
    return this.items_1;
  };
  CouchdbAdminListQueryResult.$metadata$ = {
    simpleName: 'CouchdbAdminListQueryResult',
    kind: 'class',
    interfaces: [CouchdbAdminListQueryResultDTO]
  };
  Object.defineProperty(CouchdbAdminListQueryResult.prototype, 'items', {
    configurable: true,
    get: function () {
      return this._get_items__3328574481_fzd5gv_k$();
    }
  });
  function CouchdbChaincodeListQueryDTO() {
  }
  CouchdbChaincodeListQueryDTO.$metadata$ = {
    simpleName: 'CouchdbChaincodeListQueryDTO',
    kind: 'interface',
    interfaces: [Query]
  };
  function CouchdbChaincodeListQueryResultDTO() {
  }
  CouchdbChaincodeListQueryResultDTO.$metadata$ = {
    simpleName: 'CouchdbChaincodeListQueryResultDTO',
    kind: 'interface',
    interfaces: [Event]
  };
  function CouchdbChaincodeListQuery() {
  }
  CouchdbChaincodeListQuery.$metadata$ = {
    simpleName: 'CouchdbChaincodeListQuery',
    kind: 'class',
    interfaces: [CouchdbChaincodeListQueryDTO]
  };
  function CouchdbChaincodeListQueryResult(items) {
    this.items_1 = items;
  }
  CouchdbChaincodeListQueryResult.prototype._get_items__3328574481_fzd5gv_k$ = function () {
    return this.items_1;
  };
  CouchdbChaincodeListQueryResult.$metadata$ = {
    simpleName: 'CouchdbChaincodeListQueryResult',
    kind: 'class',
    interfaces: [CouchdbChaincodeListQueryResultDTO]
  };
  Object.defineProperty(CouchdbChaincodeListQueryResult.prototype, 'items', {
    configurable: true,
    get: function () {
      return this._get_items__3328574481_fzd5gv_k$();
    }
  });
  function CouchdbDatabaseGetChangesQueryDTO() {
  }
  CouchdbDatabaseGetChangesQueryDTO.$metadata$ = {
    simpleName: 'CouchdbDatabaseGetChangesQueryDTO',
    kind: 'interface',
    interfaces: [Query]
  };
  function CouchdbDatabaseGetChangesQueryResultDTO() {
  }
  CouchdbDatabaseGetChangesQueryResultDTO.$metadata$ = {
    simpleName: 'CouchdbDatabaseGetChangesQueryResultDTO',
    kind: 'interface',
    interfaces: [Event]
  };
  function CouchdbDatabaseGetChangesQuery(channelId, chaincodeId, lastEventId, ssmName, sessionName, limit) {
    this.channelId_1 = channelId;
    this.chaincodeId_1 = chaincodeId;
    this.lastEventId_1 = lastEventId;
    this.ssmName_1 = ssmName;
    this.sessionName_1 = sessionName;
    this.limit_1 = limit;
  }
  CouchdbDatabaseGetChangesQuery.prototype._get_channelId__1056362643_hgximr_k$ = function () {
    return this.channelId_1;
  };
  CouchdbDatabaseGetChangesQuery.prototype._get_chaincodeId__335414472_5jp3go_k$ = function () {
    return this.chaincodeId_1;
  };
  CouchdbDatabaseGetChangesQuery.prototype._get_lastEventId__211822482_3i439u_k$ = function () {
    return this.lastEventId_1;
  };
  CouchdbDatabaseGetChangesQuery.prototype._get_ssmName__2865054681_nnbzmv_k$ = function () {
    return this.ssmName_1;
  };
  CouchdbDatabaseGetChangesQuery.prototype._get_sessionName__951667568_fqlje8_k$ = function () {
    return this.sessionName_1;
  };
  CouchdbDatabaseGetChangesQuery.prototype._get_limit__3404537718_eq4zuy_k$ = function () {
    return this.limit_1;
  };
  CouchdbDatabaseGetChangesQuery.$metadata$ = {
    simpleName: 'CouchdbDatabaseGetChangesQuery',
    kind: 'class',
    interfaces: [CouchdbDatabaseGetChangesQueryDTO]
  };
  Object.defineProperty(CouchdbDatabaseGetChangesQuery.prototype, 'channelId', {
    configurable: true,
    get: function () {
      return this._get_channelId__1056362643_hgximr_k$();
    }
  });
  Object.defineProperty(CouchdbDatabaseGetChangesQuery.prototype, 'chaincodeId', {
    configurable: true,
    get: function () {
      return this._get_chaincodeId__335414472_5jp3go_k$();
    }
  });
  Object.defineProperty(CouchdbDatabaseGetChangesQuery.prototype, 'lastEventId', {
    configurable: true,
    get: function () {
      return this._get_lastEventId__211822482_3i439u_k$();
    }
  });
  Object.defineProperty(CouchdbDatabaseGetChangesQuery.prototype, 'ssmName', {
    configurable: true,
    get: function () {
      return this._get_ssmName__2865054681_nnbzmv_k$();
    }
  });
  Object.defineProperty(CouchdbDatabaseGetChangesQuery.prototype, 'sessionName', {
    configurable: true,
    get: function () {
      return this._get_sessionName__951667568_fqlje8_k$();
    }
  });
  Object.defineProperty(CouchdbDatabaseGetChangesQuery.prototype, 'limit', {
    configurable: true,
    get: function () {
      return this._get_limit__3404537718_eq4zuy_k$();
    }
  });
  function CouchdbDatabaseGetChangesQueryResult(items, lastEventId) {
    this.items_1 = items;
    this.lastEventId_1 = lastEventId;
  }
  CouchdbDatabaseGetChangesQueryResult.prototype._get_items__3328574481_fzd5gv_k$ = function () {
    return this.items_1;
  };
  CouchdbDatabaseGetChangesQueryResult.prototype._get_lastEventId__211822482_3i439u_k$ = function () {
    return this.lastEventId_1;
  };
  CouchdbDatabaseGetChangesQueryResult.$metadata$ = {
    simpleName: 'CouchdbDatabaseGetChangesQueryResult',
    kind: 'class',
    interfaces: [CouchdbDatabaseGetChangesQueryResultDTO]
  };
  Object.defineProperty(CouchdbDatabaseGetChangesQueryResult.prototype, 'items', {
    configurable: true,
    get: function () {
      return this._get_items__3328574481_fzd5gv_k$();
    }
  });
  Object.defineProperty(CouchdbDatabaseGetChangesQueryResult.prototype, 'lastEventId', {
    configurable: true,
    get: function () {
      return this._get_lastEventId__211822482_3i439u_k$();
    }
  });
  function CouchdbDatabaseGetQueryDTO() {
  }
  CouchdbDatabaseGetQueryDTO.$metadata$ = {
    simpleName: 'CouchdbDatabaseGetQueryDTO',
    kind: 'interface',
    interfaces: [Query]
  };
  function CouchdbDatabaseGetQueryResultDTO() {
  }
  CouchdbDatabaseGetQueryResultDTO.$metadata$ = {
    simpleName: 'CouchdbDatabaseGetQueryResultDTO',
    kind: 'interface',
    interfaces: [Event]
  };
  function CouchdbDatabaseGetQuery(channelId, chaincodeId) {
    this.channelId_1 = channelId;
    this.chaincodeId_1 = chaincodeId;
  }
  CouchdbDatabaseGetQuery.prototype._get_channelId__1056362643_hgximr_k$ = function () {
    return this.channelId_1;
  };
  CouchdbDatabaseGetQuery.prototype._get_chaincodeId__335414472_5jp3go_k$ = function () {
    return this.chaincodeId_1;
  };
  CouchdbDatabaseGetQuery.$metadata$ = {
    simpleName: 'CouchdbDatabaseGetQuery',
    kind: 'class',
    interfaces: [CouchdbDatabaseGetQueryDTO]
  };
  Object.defineProperty(CouchdbDatabaseGetQuery.prototype, 'channelId', {
    configurable: true,
    get: function () {
      return this._get_channelId__1056362643_hgximr_k$();
    }
  });
  Object.defineProperty(CouchdbDatabaseGetQuery.prototype, 'chaincodeId', {
    configurable: true,
    get: function () {
      return this._get_chaincodeId__335414472_5jp3go_k$();
    }
  });
  function CouchdbDatabaseGetQueryResult(item) {
    this.item_1 = item;
  }
  CouchdbDatabaseGetQueryResult.prototype._get_item__800109976_d8d4t4_k$ = function () {
    return this.item_1;
  };
  CouchdbDatabaseGetQueryResult.$metadata$ = {
    simpleName: 'CouchdbDatabaseGetQueryResult',
    kind: 'class',
    interfaces: [CouchdbDatabaseGetQueryResultDTO]
  };
  Object.defineProperty(CouchdbDatabaseGetQueryResult.prototype, 'item', {
    configurable: true,
    get: function () {
      return this._get_item__800109976_d8d4t4_k$();
    }
  });
  function CouchdbDatabaseListQueryDTO() {
  }
  CouchdbDatabaseListQueryDTO.$metadata$ = {
    simpleName: 'CouchdbDatabaseListQueryDTO',
    kind: 'interface',
    interfaces: [PageQueryDTO]
  };
  function CouchdbDatabaseListQueryResultDTO() {
  }
  CouchdbDatabaseListQueryResultDTO.$metadata$ = {
    simpleName: 'CouchdbDatabaseListQueryResultDTO',
    kind: 'interface',
    interfaces: [PageQueryResultDTO]
  };
  function CouchdbDatabaseListQuery_init_$Init$(pagination, channelId, chaincodeId, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      pagination = null;
    if (!(($mask0 & 2) === 0))
      channelId = null;
    if (!(($mask0 & 4) === 0))
      chaincodeId = null;
    CouchdbDatabaseListQuery.call($this, pagination, channelId, chaincodeId);
    return $this;
  }
  function CouchdbDatabaseListQuery_init_$Create$(pagination, channelId, chaincodeId, $mask0, $marker) {
    return CouchdbDatabaseListQuery_init_$Init$(pagination, channelId, chaincodeId, $mask0, $marker, Object.create(CouchdbDatabaseListQuery.prototype));
  }
  function CouchdbDatabaseListQuery(pagination, channelId, chaincodeId) {
    var pagination_0 = pagination === void 1 ? null : pagination;
    var channelId_0 = channelId === void 1 ? null : channelId;
    var chaincodeId_0 = chaincodeId === void 1 ? null : chaincodeId;
    this.pagination_1 = pagination_0;
    this.channelId_1 = channelId_0;
    this.chaincodeId_1 = chaincodeId_0;
  }
  CouchdbDatabaseListQuery.prototype._get_pagination__3982429233_562rwv_k$ = function () {
    return this.pagination_1;
  };
  CouchdbDatabaseListQuery.prototype._get_channelId__1056362643_hgximr_k$ = function () {
    return this.channelId_1;
  };
  CouchdbDatabaseListQuery.prototype._get_chaincodeId__335414472_5jp3go_k$ = function () {
    return this.chaincodeId_1;
  };
  CouchdbDatabaseListQuery.$metadata$ = {
    simpleName: 'CouchdbDatabaseListQuery',
    kind: 'class',
    interfaces: [CouchdbDatabaseListQueryDTO]
  };
  Object.defineProperty(CouchdbDatabaseListQuery.prototype, 'pagination', {
    configurable: true,
    get: function () {
      return this._get_pagination__3982429233_562rwv_k$();
    }
  });
  Object.defineProperty(CouchdbDatabaseListQuery.prototype, 'channelId', {
    configurable: true,
    get: function () {
      return this._get_channelId__1056362643_hgximr_k$();
    }
  });
  Object.defineProperty(CouchdbDatabaseListQuery.prototype, 'chaincodeId', {
    configurable: true,
    get: function () {
      return this._get_chaincodeId__335414472_5jp3go_k$();
    }
  });
  function CouchdbDatabaseListQueryResult(pagination, items, total) {
    this.pagination_1 = pagination;
    this.items_1 = items;
    this.total_1 = total;
  }
  CouchdbDatabaseListQueryResult.prototype._get_pagination__3982429233_562rwv_k$ = function () {
    return this.pagination_1;
  };
  CouchdbDatabaseListQueryResult.prototype._get_items__3328574481_fzd5gv_k$ = function () {
    return this.items_1;
  };
  CouchdbDatabaseListQueryResult.prototype._get_total__3639312653_aucycz_k$ = function () {
    return this.total_1;
  };
  CouchdbDatabaseListQueryResult.$metadata$ = {
    simpleName: 'CouchdbDatabaseListQueryResult',
    kind: 'class',
    interfaces: [CouchdbDatabaseListQueryResultDTO]
  };
  Object.defineProperty(CouchdbDatabaseListQueryResult.prototype, 'pagination', {
    configurable: true,
    get: function () {
      return this._get_pagination__3982429233_562rwv_k$();
    }
  });
  Object.defineProperty(CouchdbDatabaseListQueryResult.prototype, 'items', {
    configurable: true,
    get: function () {
      return this._get_items__3328574481_fzd5gv_k$();
    }
  });
  Object.defineProperty(CouchdbDatabaseListQueryResult.prototype, 'total', {
    configurable: true,
    get: function () {
      return this._get_total__3639312653_aucycz_k$();
    }
  });
  function CouchdbSsmGetQueryDTO() {
  }
  CouchdbSsmGetQueryDTO.$metadata$ = {
    simpleName: 'CouchdbSsmGetQueryDTO',
    kind: 'interface',
    interfaces: [Query]
  };
  function CouchdbSsmGetQueryResultDTO() {
  }
  CouchdbSsmGetQueryResultDTO.$metadata$ = {
    simpleName: 'CouchdbSsmGetQueryResultDTO',
    kind: 'interface',
    interfaces: [Event]
  };
  function CouchdbSsmGetQuery(channelId, chaincodeId, ssmName) {
    this.channelId_1 = channelId;
    this.chaincodeId_1 = chaincodeId;
    this.ssmName_1 = ssmName;
  }
  CouchdbSsmGetQuery.prototype._get_channelId__1056362643_hgximr_k$ = function () {
    return this.channelId_1;
  };
  CouchdbSsmGetQuery.prototype._get_chaincodeId__335414472_5jp3go_k$ = function () {
    return this.chaincodeId_1;
  };
  CouchdbSsmGetQuery.prototype._get_ssmName__2865054681_nnbzmv_k$ = function () {
    return this.ssmName_1;
  };
  CouchdbSsmGetQuery.$metadata$ = {
    simpleName: 'CouchdbSsmGetQuery',
    kind: 'class',
    interfaces: [CouchdbSsmGetQueryDTO]
  };
  Object.defineProperty(CouchdbSsmGetQuery.prototype, 'channelId', {
    configurable: true,
    get: function () {
      return this._get_channelId__1056362643_hgximr_k$();
    }
  });
  Object.defineProperty(CouchdbSsmGetQuery.prototype, 'chaincodeId', {
    configurable: true,
    get: function () {
      return this._get_chaincodeId__335414472_5jp3go_k$();
    }
  });
  Object.defineProperty(CouchdbSsmGetQuery.prototype, 'ssmName', {
    configurable: true,
    get: function () {
      return this._get_ssmName__2865054681_nnbzmv_k$();
    }
  });
  function CouchdbSsmGetQueryResult(uri, item) {
    this.uri_1 = uri;
    this.item_1 = item;
  }
  CouchdbSsmGetQueryResult.prototype._get_uri__857449637_e6i4dh_k$ = function () {
    return this.uri_1;
  };
  CouchdbSsmGetQueryResult.prototype._get_item__800109976_d8d4t4_k$ = function () {
    return this.item_1;
  };
  CouchdbSsmGetQueryResult.$metadata$ = {
    simpleName: 'CouchdbSsmGetQueryResult',
    kind: 'class',
    interfaces: [CouchdbSsmGetQueryResultDTO]
  };
  Object.defineProperty(CouchdbSsmGetQueryResult.prototype, 'uri', {
    configurable: true,
    get: function () {
      return this._get_uri__857449637_e6i4dh_k$();
    }
  });
  Object.defineProperty(CouchdbSsmGetQueryResult.prototype, 'item', {
    configurable: true,
    get: function () {
      return this._get_item__800109976_d8d4t4_k$();
    }
  });
  function CouchdbSsmListQueryDTO() {
  }
  CouchdbSsmListQueryDTO.$metadata$ = {
    simpleName: 'CouchdbSsmListQueryDTO',
    kind: 'interface',
    interfaces: [PageQueryDTO]
  };
  function CouchdbSsmListQueryResultDTO() {
  }
  CouchdbSsmListQueryResultDTO.$metadata$ = {
    simpleName: 'CouchdbSsmListQueryResultDTO',
    kind: 'interface',
    interfaces: [PageQueryResultDTO]
  };
  function CouchdbSsmListQuery(pagination, channelId, chaincodeId) {
    this.pagination_1 = pagination;
    this.channelId_1 = channelId;
    this.chaincodeId_1 = chaincodeId;
  }
  CouchdbSsmListQuery.prototype._get_pagination__3982429233_562rwv_k$ = function () {
    return this.pagination_1;
  };
  CouchdbSsmListQuery.prototype._get_channelId__1056362643_hgximr_k$ = function () {
    return this.channelId_1;
  };
  CouchdbSsmListQuery.prototype._get_chaincodeId__335414472_5jp3go_k$ = function () {
    return this.chaincodeId_1;
  };
  CouchdbSsmListQuery.$metadata$ = {
    simpleName: 'CouchdbSsmListQuery',
    kind: 'class',
    interfaces: [CouchdbSsmListQueryDTO]
  };
  Object.defineProperty(CouchdbSsmListQuery.prototype, 'pagination', {
    configurable: true,
    get: function () {
      return this._get_pagination__3982429233_562rwv_k$();
    }
  });
  Object.defineProperty(CouchdbSsmListQuery.prototype, 'channelId', {
    configurable: true,
    get: function () {
      return this._get_channelId__1056362643_hgximr_k$();
    }
  });
  Object.defineProperty(CouchdbSsmListQuery.prototype, 'chaincodeId', {
    configurable: true,
    get: function () {
      return this._get_chaincodeId__335414472_5jp3go_k$();
    }
  });
  function CouchdbSsmListQueryResult(pagination, items, total) {
    this.pagination_1 = pagination;
    this.items_1 = items;
    this.total_1 = total;
  }
  CouchdbSsmListQueryResult.prototype._get_pagination__3982429233_562rwv_k$ = function () {
    return this.pagination_1;
  };
  CouchdbSsmListQueryResult.prototype._get_items__3328574481_fzd5gv_k$ = function () {
    return this.items_1;
  };
  CouchdbSsmListQueryResult.prototype._get_total__3639312653_aucycz_k$ = function () {
    return this.total_1;
  };
  CouchdbSsmListQueryResult.$metadata$ = {
    simpleName: 'CouchdbSsmListQueryResult',
    kind: 'class',
    interfaces: [CouchdbSsmListQueryResultDTO]
  };
  Object.defineProperty(CouchdbSsmListQueryResult.prototype, 'pagination', {
    configurable: true,
    get: function () {
      return this._get_pagination__3982429233_562rwv_k$();
    }
  });
  Object.defineProperty(CouchdbSsmListQueryResult.prototype, 'items', {
    configurable: true,
    get: function () {
      return this._get_items__3328574481_fzd5gv_k$();
    }
  });
  Object.defineProperty(CouchdbSsmListQueryResult.prototype, 'total', {
    configurable: true,
    get: function () {
      return this._get_total__3639312653_aucycz_k$();
    }
  });
  function CouchdbSsmSessionStateGetQueryDTO() {
  }
  CouchdbSsmSessionStateGetQueryDTO.$metadata$ = {
    simpleName: 'CouchdbSsmSessionStateGetQueryDTO',
    kind: 'interface',
    interfaces: [Query]
  };
  function CouchdbSsmSessionStateGetQueryResultDTO() {
  }
  CouchdbSsmSessionStateGetQueryResultDTO.$metadata$ = {
    simpleName: 'CouchdbSsmSessionStateGetQueryResultDTO',
    kind: 'interface',
    interfaces: [Event]
  };
  function CouchdbSsmSessionStateGetQuery(chaincodeUri, ssmName, sessionName) {
    this.chaincodeUri_1 = chaincodeUri;
    this.ssmName_1 = ssmName;
    this.sessionName_1 = sessionName;
  }
  CouchdbSsmSessionStateGetQuery.prototype._get_chaincodeUri__1808286381_twlup9_k$ = function () {
    return this.chaincodeUri_1;
  };
  CouchdbSsmSessionStateGetQuery.prototype._get_ssmName__2865054681_nnbzmv_k$ = function () {
    return this.ssmName_1;
  };
  CouchdbSsmSessionStateGetQuery.prototype._get_sessionName__951667568_fqlje8_k$ = function () {
    return this.sessionName_1;
  };
  CouchdbSsmSessionStateGetQuery.$metadata$ = {
    simpleName: 'CouchdbSsmSessionStateGetQuery',
    kind: 'class',
    interfaces: [CouchdbSsmSessionStateGetQueryDTO]
  };
  Object.defineProperty(CouchdbSsmSessionStateGetQuery.prototype, 'chaincodeUri', {
    configurable: true,
    get: function () {
      return this._get_chaincodeUri__1808286381_twlup9_k$();
    }
  });
  Object.defineProperty(CouchdbSsmSessionStateGetQuery.prototype, 'ssmName', {
    configurable: true,
    get: function () {
      return this._get_ssmName__2865054681_nnbzmv_k$();
    }
  });
  Object.defineProperty(CouchdbSsmSessionStateGetQuery.prototype, 'sessionName', {
    configurable: true,
    get: function () {
      return this._get_sessionName__951667568_fqlje8_k$();
    }
  });
  function CouchdbSsmSessionStateGetQueryResult(item) {
    this.item_1 = item;
  }
  CouchdbSsmSessionStateGetQueryResult.prototype._get_item__800109976_d8d4t4_k$ = function () {
    return this.item_1;
  };
  CouchdbSsmSessionStateGetQueryResult.$metadata$ = {
    simpleName: 'CouchdbSsmSessionStateGetQueryResult',
    kind: 'class',
    interfaces: [CouchdbSsmSessionStateGetQueryResultDTO]
  };
  Object.defineProperty(CouchdbSsmSessionStateGetQueryResult.prototype, 'item', {
    configurable: true,
    get: function () {
      return this._get_item__800109976_d8d4t4_k$();
    }
  });
  function CouchdbSsmSessionStateListQueryDTO() {
  }
  CouchdbSsmSessionStateListQueryDTO.$metadata$ = {
    simpleName: 'CouchdbSsmSessionStateListQueryDTO',
    kind: 'interface',
    interfaces: [PageQueryDTO]
  };
  function CouchdbSsmSessionStateListQueryResultDTO() {
  }
  CouchdbSsmSessionStateListQueryResultDTO.$metadata$ = {
    simpleName: 'CouchdbSsmSessionStateListQueryResultDTO',
    kind: 'interface',
    interfaces: [PageQueryResultDTO]
  };
  function CouchdbSsmSessionStateListQuery_init_$Init$(pagination, chaincodeUri, ssm, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      pagination = null;
    if (!(($mask0 & 4) === 0))
      ssm = null;
    CouchdbSsmSessionStateListQuery.call($this, pagination, chaincodeUri, ssm);
    return $this;
  }
  function CouchdbSsmSessionStateListQuery_init_$Create$(pagination, chaincodeUri, ssm, $mask0, $marker) {
    return CouchdbSsmSessionStateListQuery_init_$Init$(pagination, chaincodeUri, ssm, $mask0, $marker, Object.create(CouchdbSsmSessionStateListQuery.prototype));
  }
  function CouchdbSsmSessionStateListQuery(pagination, chaincodeUri, ssm) {
    var pagination_0 = pagination === void 1 ? null : pagination;
    var ssm_0 = ssm === void 1 ? null : ssm;
    this.pagination_1 = pagination_0;
    this.chaincodeUri_1 = chaincodeUri;
    this.ssm_1 = ssm_0;
  }
  CouchdbSsmSessionStateListQuery.prototype._get_pagination__3982429233_562rwv_k$ = function () {
    return this.pagination_1;
  };
  CouchdbSsmSessionStateListQuery.prototype._get_chaincodeUri__1808286381_twlup9_k$ = function () {
    return this.chaincodeUri_1;
  };
  CouchdbSsmSessionStateListQuery.prototype._get_ssm__857391140_e6gv8k_k$ = function () {
    return this.ssm_1;
  };
  CouchdbSsmSessionStateListQuery.$metadata$ = {
    simpleName: 'CouchdbSsmSessionStateListQuery',
    kind: 'class',
    interfaces: [CouchdbSsmSessionStateListQueryDTO]
  };
  Object.defineProperty(CouchdbSsmSessionStateListQuery.prototype, 'pagination', {
    configurable: true,
    get: function () {
      return this._get_pagination__3982429233_562rwv_k$();
    }
  });
  Object.defineProperty(CouchdbSsmSessionStateListQuery.prototype, 'chaincodeUri', {
    configurable: true,
    get: function () {
      return this._get_chaincodeUri__1808286381_twlup9_k$();
    }
  });
  Object.defineProperty(CouchdbSsmSessionStateListQuery.prototype, 'ssm', {
    configurable: true,
    get: function () {
      return this._get_ssm__857391140_e6gv8k_k$();
    }
  });
  function CouchdbSsmSessionStateListQueryResult(pagination, total, items) {
    this.pagination_1 = pagination;
    this.total_1 = total;
    this.items_1 = items;
  }
  CouchdbSsmSessionStateListQueryResult.prototype._get_pagination__3982429233_562rwv_k$ = function () {
    return this.pagination_1;
  };
  CouchdbSsmSessionStateListQueryResult.prototype._get_total__3639312653_aucycz_k$ = function () {
    return this.total_1;
  };
  CouchdbSsmSessionStateListQueryResult.prototype._get_items__3328574481_fzd5gv_k$ = function () {
    return this.items_1;
  };
  CouchdbSsmSessionStateListQueryResult.$metadata$ = {
    simpleName: 'CouchdbSsmSessionStateListQueryResult',
    kind: 'class',
    interfaces: [CouchdbSsmSessionStateListQueryResultDTO]
  };
  Object.defineProperty(CouchdbSsmSessionStateListQueryResult.prototype, 'pagination', {
    configurable: true,
    get: function () {
      return this._get_pagination__3982429233_562rwv_k$();
    }
  });
  Object.defineProperty(CouchdbSsmSessionStateListQueryResult.prototype, 'total', {
    configurable: true,
    get: function () {
      return this._get_total__3639312653_aucycz_k$();
    }
  });
  Object.defineProperty(CouchdbSsmSessionStateListQueryResult.prototype, 'items', {
    configurable: true,
    get: function () {
      return this._get_items__3328574481_fzd5gv_k$();
    }
  });
  function CouchdbUserListQueryDTO() {
  }
  CouchdbUserListQueryDTO.$metadata$ = {
    simpleName: 'CouchdbUserListQueryDTO',
    kind: 'interface',
    interfaces: [Query]
  };
  function CouchdbUserListQueryResultDTO() {
  }
  CouchdbUserListQueryResultDTO.$metadata$ = {
    simpleName: 'CouchdbUserListQueryResultDTO',
    kind: 'interface',
    interfaces: [Event]
  };
  function CouchdbUserListQuery(chaincodeUri) {
    this.chaincodeUri_1 = chaincodeUri;
  }
  CouchdbUserListQuery.prototype._get_chaincodeUri__1808286381_twlup9_k$ = function () {
    return this.chaincodeUri_1;
  };
  CouchdbUserListQuery.$metadata$ = {
    simpleName: 'CouchdbUserListQuery',
    kind: 'class',
    interfaces: [CouchdbUserListQueryDTO]
  };
  Object.defineProperty(CouchdbUserListQuery.prototype, 'chaincodeUri', {
    configurable: true,
    get: function () {
      return this._get_chaincodeUri__1808286381_twlup9_k$();
    }
  });
  function CouchdbUserListQueryResult(items) {
    this.items_1 = items;
  }
  CouchdbUserListQueryResult.prototype._get_items__3328574481_fzd5gv_k$ = function () {
    return this.items_1;
  };
  CouchdbUserListQueryResult.$metadata$ = {
    simpleName: 'CouchdbUserListQueryResult',
    kind: 'class',
    interfaces: [CouchdbUserListQueryResultDTO]
  };
  Object.defineProperty(CouchdbUserListQueryResult.prototype, 'items', {
    configurable: true,
    get: function () {
      return this._get_items__3328574481_fzd5gv_k$();
    }
  });
  //region block: exports
  function $jsExportAll$(_) {
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$couchdb = $ssm.couchdb || ($ssm.couchdb = {});
    var $ssm$couchdb$dsl = $ssm$couchdb.dsl || ($ssm$couchdb.dsl = {});
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$couchdb = $ssm.couchdb || ($ssm.couchdb = {});
    var $ssm$couchdb$dsl = $ssm$couchdb.dsl || ($ssm$couchdb.dsl = {});
    var $ssm$couchdb$dsl$model = $ssm$couchdb$dsl.model || ($ssm$couchdb$dsl.model = {});
    $ssm$couchdb$dsl$model.Database = Database;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$couchdb = $ssm.couchdb || ($ssm.couchdb = {});
    var $ssm$couchdb$dsl = $ssm$couchdb.dsl || ($ssm$couchdb.dsl = {});
    var $ssm$couchdb$dsl$model = $ssm$couchdb$dsl.model || ($ssm$couchdb$dsl.model = {});
    $ssm$couchdb$dsl$model.DatabaseChanges = DatabaseChanges;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$couchdb = $ssm.couchdb || ($ssm.couchdb = {});
    var $ssm$couchdb$dsl = $ssm$couchdb.dsl || ($ssm$couchdb.dsl = {});
    var $ssm$couchdb$dsl$model = $ssm$couchdb$dsl.model || ($ssm$couchdb$dsl.model = {});
    $ssm$couchdb$dsl$model.DocType = DocType;
    Object.defineProperty($ssm$couchdb$dsl$model.DocType, 'Admin', {
      configurable: true,
      get: Admin_getInstance
    });
    Object.defineProperty($ssm$couchdb$dsl$model.DocType, 'User', {
      configurable: true,
      get: User_getInstance
    });
    Object.defineProperty($ssm$couchdb$dsl$model.DocType, 'Grant', {
      configurable: true,
      get: Grant_getInstance
    });
    Object.defineProperty($ssm$couchdb$dsl$model.DocType, 'Ssm', {
      configurable: true,
      get: Ssm_getInstance
    });
    Object.defineProperty($ssm$couchdb$dsl$model.DocType, 'State', {
      configurable: true,
      get: State_getInstance
    });
    Object.defineProperty($ssm$couchdb$dsl$model.DocType, 'Chaincode', {
      configurable: true,
      get: Chaincode_getInstance
    });
    $ssm$couchdb$dsl$model.ChaincodeLscc = ChaincodeLscc;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$couchdb = $ssm.couchdb || ($ssm.couchdb = {});
    var $ssm$couchdb$dsl = $ssm$couchdb.dsl || ($ssm$couchdb.dsl = {});
    var $ssm$couchdb$dsl$query = $ssm$couchdb$dsl.query || ($ssm$couchdb$dsl.query = {});
    $ssm$couchdb$dsl$query.CouchdbAdminListQuery = CouchdbAdminListQuery;
    $ssm$couchdb$dsl$query.CouchdbAdminListQueryResult = CouchdbAdminListQueryResult;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$couchdb = $ssm.couchdb || ($ssm.couchdb = {});
    var $ssm$couchdb$dsl = $ssm$couchdb.dsl || ($ssm$couchdb.dsl = {});
    var $ssm$couchdb$dsl$query = $ssm$couchdb$dsl.query || ($ssm$couchdb$dsl.query = {});
    $ssm$couchdb$dsl$query.CouchdbChaincodeListQuery = CouchdbChaincodeListQuery;
    $ssm$couchdb$dsl$query.CouchdbChaincodeListQueryResult = CouchdbChaincodeListQueryResult;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$couchdb = $ssm.couchdb || ($ssm.couchdb = {});
    var $ssm$couchdb$dsl = $ssm$couchdb.dsl || ($ssm$couchdb.dsl = {});
    var $ssm$couchdb$dsl$query = $ssm$couchdb$dsl.query || ($ssm$couchdb$dsl.query = {});
    $ssm$couchdb$dsl$query.CouchdbDatabaseGetChangesQuery = CouchdbDatabaseGetChangesQuery;
    $ssm$couchdb$dsl$query.CouchdbDatabaseGetChangesQueryResult = CouchdbDatabaseGetChangesQueryResult;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$couchdb = $ssm.couchdb || ($ssm.couchdb = {});
    var $ssm$couchdb$dsl = $ssm$couchdb.dsl || ($ssm$couchdb.dsl = {});
    var $ssm$couchdb$dsl$query = $ssm$couchdb$dsl.query || ($ssm$couchdb$dsl.query = {});
    $ssm$couchdb$dsl$query.CouchdbDatabaseGetQuery = CouchdbDatabaseGetQuery;
    $ssm$couchdb$dsl$query.CouchdbDatabaseGetQueryResult = CouchdbDatabaseGetQueryResult;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$couchdb = $ssm.couchdb || ($ssm.couchdb = {});
    var $ssm$couchdb$dsl = $ssm$couchdb.dsl || ($ssm$couchdb.dsl = {});
    var $ssm$couchdb$dsl$query = $ssm$couchdb$dsl.query || ($ssm$couchdb$dsl.query = {});
    $ssm$couchdb$dsl$query.CouchdbDatabaseListQuery = CouchdbDatabaseListQuery;
    $ssm$couchdb$dsl$query.CouchdbDatabaseListQueryResult = CouchdbDatabaseListQueryResult;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$couchdb = $ssm.couchdb || ($ssm.couchdb = {});
    var $ssm$couchdb$dsl = $ssm$couchdb.dsl || ($ssm$couchdb.dsl = {});
    var $ssm$couchdb$dsl$query = $ssm$couchdb$dsl.query || ($ssm$couchdb$dsl.query = {});
    $ssm$couchdb$dsl$query.CouchdbSsmGetQuery = CouchdbSsmGetQuery;
    $ssm$couchdb$dsl$query.CouchdbSsmGetQueryResult = CouchdbSsmGetQueryResult;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$couchdb = $ssm.couchdb || ($ssm.couchdb = {});
    var $ssm$couchdb$dsl = $ssm$couchdb.dsl || ($ssm$couchdb.dsl = {});
    var $ssm$couchdb$dsl$query = $ssm$couchdb$dsl.query || ($ssm$couchdb$dsl.query = {});
    $ssm$couchdb$dsl$query.CouchdbSsmListQuery = CouchdbSsmListQuery;
    $ssm$couchdb$dsl$query.CouchdbSsmListQueryResult = CouchdbSsmListQueryResult;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$couchdb = $ssm.couchdb || ($ssm.couchdb = {});
    var $ssm$couchdb$dsl = $ssm$couchdb.dsl || ($ssm$couchdb.dsl = {});
    var $ssm$couchdb$dsl$query = $ssm$couchdb$dsl.query || ($ssm$couchdb$dsl.query = {});
    $ssm$couchdb$dsl$query.CouchdbSsmSessionStateGetQuery = CouchdbSsmSessionStateGetQuery;
    $ssm$couchdb$dsl$query.CouchdbSsmSessionStateGetQueryResult = CouchdbSsmSessionStateGetQueryResult;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$couchdb = $ssm.couchdb || ($ssm.couchdb = {});
    var $ssm$couchdb$dsl = $ssm$couchdb.dsl || ($ssm$couchdb.dsl = {});
    var $ssm$couchdb$dsl$query = $ssm$couchdb$dsl.query || ($ssm$couchdb$dsl.query = {});
    $ssm$couchdb$dsl$query.CouchdbSsmSessionStateListQuery = CouchdbSsmSessionStateListQuery;
    $ssm$couchdb$dsl$query.CouchdbSsmSessionStateListQueryResult = CouchdbSsmSessionStateListQueryResult;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$couchdb = $ssm.couchdb || ($ssm.couchdb = {});
    var $ssm$couchdb$dsl = $ssm$couchdb.dsl || ($ssm$couchdb.dsl = {});
    var $ssm$couchdb$dsl$query = $ssm$couchdb$dsl.query || ($ssm$couchdb$dsl.query = {});
    $ssm$couchdb$dsl$query.CouchdbUserListQuery = CouchdbUserListQuery;
    $ssm$couchdb$dsl$query.CouchdbUserListQueryResult = CouchdbUserListQueryResult;
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_city_smartb_ssm_ssm_couchdb_dsl.js.map