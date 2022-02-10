(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root.kotlin_city_smartb_ssm_ssm_couchdb_dsl = factory(typeof kotlin_city_smartb_ssm_ssm_couchdb_dsl === 'undefined' ? {} : kotlin_city_smartb_ssm_ssm_couchdb_dsl);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  function Database(name) {
    this.name_1 = name;
  }
  Database.prototype._get_name__804168992_das4rk_k$ = function () {
    return this.name_1;
  };
  Database.$metadata$ = {
    simpleName: 'Database',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(Database.prototype, 'name', {
    configurable: true,
    get: function () {
      return this._get_name__804168992_das4rk_k$();
    }
  });
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
    interfaces: []
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
  function CouchdbAdminListQuery(chaincodeUri) {
    this.chaincodeUri_1 = chaincodeUri;
  }
  CouchdbAdminListQuery.prototype._get_chaincodeUri__1808286381_twlup9_k$ = function () {
    return this.chaincodeUri_1;
  };
  CouchdbAdminListQuery.$metadata$ = {
    simpleName: 'CouchdbAdminListQuery',
    kind: 'class',
    interfaces: []
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
    interfaces: []
  };
  Object.defineProperty(CouchdbAdminListQueryResult.prototype, 'items', {
    configurable: true,
    get: function () {
      return this._get_items__3328574481_fzd5gv_k$();
    }
  });
  function CouchdbChaincodeListQuery() {
  }
  CouchdbChaincodeListQuery.$metadata$ = {
    simpleName: 'CouchdbChaincodeListQuery',
    kind: 'class',
    interfaces: []
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
    interfaces: []
  };
  Object.defineProperty(CouchdbChaincodeListQueryResult.prototype, 'items', {
    configurable: true,
    get: function () {
      return this._get_items__3328574481_fzd5gv_k$();
    }
  });
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
    interfaces: []
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
    interfaces: []
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
    interfaces: []
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
    interfaces: []
  };
  Object.defineProperty(CouchdbDatabaseGetQueryResult.prototype, 'item', {
    configurable: true,
    get: function () {
      return this._get_item__800109976_d8d4t4_k$();
    }
  });
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
    interfaces: []
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
  function CouchdbDatabaseListQueryResult(page, pagination) {
    this.page_1 = page;
    this.pagination_1 = pagination;
  }
  CouchdbDatabaseListQueryResult.prototype._get_page__806010268_dbvli4_k$ = function () {
    return this.page_1;
  };
  CouchdbDatabaseListQueryResult.prototype._get_pagination__3982429233_562rwv_k$ = function () {
    return this.pagination_1;
  };
  CouchdbDatabaseListQueryResult.$metadata$ = {
    simpleName: 'CouchdbDatabaseListQueryResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(CouchdbDatabaseListQueryResult.prototype, 'page', {
    configurable: true,
    get: function () {
      return this._get_page__806010268_dbvli4_k$();
    }
  });
  Object.defineProperty(CouchdbDatabaseListQueryResult.prototype, 'pagination', {
    configurable: true,
    get: function () {
      return this._get_pagination__3982429233_562rwv_k$();
    }
  });
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
    interfaces: []
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
    interfaces: []
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
    interfaces: []
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
  function CouchdbSsmListQueryResult(page, pagination) {
    this.page_1 = page;
    this.pagination_1 = pagination;
  }
  CouchdbSsmListQueryResult.prototype._get_page__806010268_dbvli4_k$ = function () {
    return this.page_1;
  };
  CouchdbSsmListQueryResult.prototype._get_pagination__3982429233_562rwv_k$ = function () {
    return this.pagination_1;
  };
  CouchdbSsmListQueryResult.$metadata$ = {
    simpleName: 'CouchdbSsmListQueryResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(CouchdbSsmListQueryResult.prototype, 'page', {
    configurable: true,
    get: function () {
      return this._get_page__806010268_dbvli4_k$();
    }
  });
  Object.defineProperty(CouchdbSsmListQueryResult.prototype, 'pagination', {
    configurable: true,
    get: function () {
      return this._get_pagination__3982429233_562rwv_k$();
    }
  });
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
    interfaces: []
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
    interfaces: []
  };
  Object.defineProperty(CouchdbSsmSessionStateGetQueryResult.prototype, 'item', {
    configurable: true,
    get: function () {
      return this._get_item__800109976_d8d4t4_k$();
    }
  });
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
    interfaces: []
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
  function CouchdbSsmSessionStateListQueryResult(page, pagination) {
    this.page_1 = page;
    this.pagination_1 = pagination;
  }
  CouchdbSsmSessionStateListQueryResult.prototype._get_page__806010268_dbvli4_k$ = function () {
    return this.page_1;
  };
  CouchdbSsmSessionStateListQueryResult.prototype._get_pagination__3982429233_562rwv_k$ = function () {
    return this.pagination_1;
  };
  CouchdbSsmSessionStateListQueryResult.$metadata$ = {
    simpleName: 'CouchdbSsmSessionStateListQueryResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(CouchdbSsmSessionStateListQueryResult.prototype, 'page', {
    configurable: true,
    get: function () {
      return this._get_page__806010268_dbvli4_k$();
    }
  });
  Object.defineProperty(CouchdbSsmSessionStateListQueryResult.prototype, 'pagination', {
    configurable: true,
    get: function () {
      return this._get_pagination__3982429233_562rwv_k$();
    }
  });
  function CouchdbUserListQuery(chaincodeUri) {
    this.chaincodeUri_1 = chaincodeUri;
  }
  CouchdbUserListQuery.prototype._get_chaincodeUri__1808286381_twlup9_k$ = function () {
    return this.chaincodeUri_1;
  };
  CouchdbUserListQuery.$metadata$ = {
    simpleName: 'CouchdbUserListQuery',
    kind: 'class',
    interfaces: []
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
    interfaces: []
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
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$couchdb = $ssm.couchdb || ($ssm.couchdb = {});
    var $ssm$couchdb$dsl = $ssm$couchdb.dsl || ($ssm$couchdb.dsl = {});
    var $ssm$couchdb$dsl$model = $ssm$couchdb$dsl.model || ($ssm$couchdb$dsl.model = {});
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$couchdb = $ssm.couchdb || ($ssm.couchdb = {});
    var $ssm$couchdb$dsl = $ssm$couchdb.dsl || ($ssm$couchdb.dsl = {});
    var $ssm$couchdb$dsl$model = $ssm$couchdb$dsl.model || ($ssm$couchdb$dsl.model = {});
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$couchdb = $ssm.couchdb || ($ssm.couchdb = {});
    var $ssm$couchdb$dsl = $ssm$couchdb.dsl || ($ssm$couchdb.dsl = {});
    var $ssm$couchdb$dsl$query = $ssm$couchdb$dsl.query || ($ssm$couchdb$dsl.query = {});
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$couchdb = $ssm.couchdb || ($ssm.couchdb = {});
    var $ssm$couchdb$dsl = $ssm$couchdb.dsl || ($ssm$couchdb.dsl = {});
    var $ssm$couchdb$dsl$query = $ssm$couchdb$dsl.query || ($ssm$couchdb$dsl.query = {});
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$couchdb = $ssm.couchdb || ($ssm.couchdb = {});
    var $ssm$couchdb$dsl = $ssm$couchdb.dsl || ($ssm$couchdb.dsl = {});
    var $ssm$couchdb$dsl$query = $ssm$couchdb$dsl.query || ($ssm$couchdb$dsl.query = {});
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$couchdb = $ssm.couchdb || ($ssm.couchdb = {});
    var $ssm$couchdb$dsl = $ssm$couchdb.dsl || ($ssm$couchdb.dsl = {});
    var $ssm$couchdb$dsl$query = $ssm$couchdb$dsl.query || ($ssm$couchdb$dsl.query = {});
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$couchdb = $ssm.couchdb || ($ssm.couchdb = {});
    var $ssm$couchdb$dsl = $ssm$couchdb.dsl || ($ssm$couchdb.dsl = {});
    var $ssm$couchdb$dsl$query = $ssm$couchdb$dsl.query || ($ssm$couchdb$dsl.query = {});
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$couchdb = $ssm.couchdb || ($ssm.couchdb = {});
    var $ssm$couchdb$dsl = $ssm$couchdb.dsl || ($ssm$couchdb.dsl = {});
    var $ssm$couchdb$dsl$query = $ssm$couchdb$dsl.query || ($ssm$couchdb$dsl.query = {});
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$couchdb = $ssm.couchdb || ($ssm.couchdb = {});
    var $ssm$couchdb$dsl = $ssm$couchdb.dsl || ($ssm$couchdb.dsl = {});
    var $ssm$couchdb$dsl$query = $ssm$couchdb$dsl.query || ($ssm$couchdb$dsl.query = {});
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$couchdb = $ssm.couchdb || ($ssm.couchdb = {});
    var $ssm$couchdb$dsl = $ssm$couchdb.dsl || ($ssm$couchdb.dsl = {});
    var $ssm$couchdb$dsl$query = $ssm$couchdb$dsl.query || ($ssm$couchdb$dsl.query = {});
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$couchdb = $ssm.couchdb || ($ssm.couchdb = {});
    var $ssm$couchdb$dsl = $ssm$couchdb.dsl || ($ssm$couchdb.dsl = {});
    var $ssm$couchdb$dsl$query = $ssm$couchdb$dsl.query || ($ssm$couchdb$dsl.query = {});
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$couchdb = $ssm.couchdb || ($ssm.couchdb = {});
    var $ssm$couchdb$dsl = $ssm$couchdb.dsl || ($ssm$couchdb.dsl = {});
    var $ssm$couchdb$dsl$query = $ssm$couchdb$dsl.query || ($ssm$couchdb$dsl.query = {});
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_city_smartb_ssm_ssm_couchdb_dsl.js.map