(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root.kotlin_city_smartb_ssm_ssm_data_dsl = factory(typeof kotlin_city_smartb_ssm_ssm_data_dsl === 'undefined' ? {} : kotlin_city_smartb_ssm_ssm_data_dsl);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  function DataChaincodeListQuery() {
  }
  DataChaincodeListQuery.$metadata$ = {
    simpleName: 'DataChaincodeListQuery',
    kind: 'class',
    interfaces: []
  };
  function DataChaincodeListQueryResult(items) {
    this.items_1 = items;
  }
  DataChaincodeListQueryResult.prototype._get_items__3328574481_fzd5gv_k$ = function () {
    return this.items_1;
  };
  DataChaincodeListQueryResult.$metadata$ = {
    simpleName: 'DataChaincodeListQueryResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(DataChaincodeListQueryResult.prototype, 'items', {
    configurable: true,
    get: function () {
      return this._get_items__3328574481_fzd5gv_k$();
    }
  });
  function DataSsmGetQuery(ssmUri) {
    this.ssmUri_1 = ssmUri;
  }
  DataSsmGetQuery.prototype._get_ssmUri__369740492_644tl8_k$ = function () {
    return this.ssmUri_1;
  };
  DataSsmGetQuery.$metadata$ = {
    simpleName: 'DataSsmGetQuery',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(DataSsmGetQuery.prototype, 'ssmUri', {
    configurable: true,
    get: function () {
      return this._get_ssmUri__369740492_644tl8_k$();
    }
  });
  function DataSsmGetQueryResult(item) {
    this.item_1 = item;
  }
  DataSsmGetQueryResult.prototype._get_item__800109976_d8d4t4_k$ = function () {
    return this.item_1;
  };
  DataSsmGetQueryResult.$metadata$ = {
    simpleName: 'DataSsmGetQueryResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(DataSsmGetQueryResult.prototype, 'item', {
    configurable: true,
    get: function () {
      return this._get_item__800109976_d8d4t4_k$();
    }
  });
  function DataSsmListQuery(chaincodes) {
    this.chaincodes_1 = chaincodes;
  }
  DataSsmListQuery.prototype._get_chaincodes__2504673062_tlw7ve_k$ = function () {
    return this.chaincodes_1;
  };
  DataSsmListQuery.$metadata$ = {
    simpleName: 'DataSsmListQuery',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(DataSsmListQuery.prototype, 'chaincodes', {
    configurable: true,
    get: DataSsmListQuery.prototype._get_chaincodes__2504673062_tlw7ve_k$
  });
  function DataSsmListQueryResult(items) {
    this.items_1 = items;
  }
  DataSsmListQueryResult.prototype._get_items__3328574481_fzd5gv_k$ = function () {
    return this.items_1;
  };
  DataSsmListQueryResult.$metadata$ = {
    simpleName: 'DataSsmListQueryResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(DataSsmListQueryResult.prototype, 'items', {
    configurable: true,
    get: function () {
      return this._get_items__3328574481_fzd5gv_k$();
    }
  });
  function DataSsmSessionGetQuery(sessionName, ssmUri) {
    this.sessionName_1 = sessionName;
    this.ssmUri_1 = ssmUri;
  }
  DataSsmSessionGetQuery.prototype._get_sessionName__951667568_fqlje8_k$ = function () {
    return this.sessionName_1;
  };
  DataSsmSessionGetQuery.prototype._get_ssmUri__369740492_644tl8_k$ = function () {
    return this.ssmUri_1;
  };
  DataSsmSessionGetQuery.$metadata$ = {
    simpleName: 'DataSsmSessionGetQuery',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(DataSsmSessionGetQuery.prototype, 'sessionName', {
    configurable: true,
    get: function () {
      return this._get_sessionName__951667568_fqlje8_k$();
    }
  });
  Object.defineProperty(DataSsmSessionGetQuery.prototype, 'ssmUri', {
    configurable: true,
    get: function () {
      return this._get_ssmUri__369740492_644tl8_k$();
    }
  });
  function DataSsmSessionGetQueryResult(item) {
    this.item_1 = item;
  }
  DataSsmSessionGetQueryResult.prototype._get_item__800109976_d8d4t4_k$ = function () {
    return this.item_1;
  };
  DataSsmSessionGetQueryResult.$metadata$ = {
    simpleName: 'DataSsmSessionGetQueryResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(DataSsmSessionGetQueryResult.prototype, 'item', {
    configurable: true,
    get: function () {
      return this._get_item__800109976_d8d4t4_k$();
    }
  });
  function DataSsmSessionListQuery(ssmUri) {
    this.ssmUri_1 = ssmUri;
  }
  DataSsmSessionListQuery.prototype._get_ssmUri__369740492_644tl8_k$ = function () {
    return this.ssmUri_1;
  };
  DataSsmSessionListQuery.$metadata$ = {
    simpleName: 'DataSsmSessionListQuery',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(DataSsmSessionListQuery.prototype, 'ssmUri', {
    configurable: true,
    get: function () {
      return this._get_ssmUri__369740492_644tl8_k$();
    }
  });
  function DataSsmSessionListQueryResult(items) {
    this.items_1 = items;
  }
  DataSsmSessionListQueryResult.prototype._get_items__3328574481_fzd5gv_k$ = function () {
    return this.items_1;
  };
  DataSsmSessionListQueryResult.$metadata$ = {
    simpleName: 'DataSsmSessionListQueryResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(DataSsmSessionListQueryResult.prototype, 'items', {
    configurable: true,
    get: function () {
      return this._get_items__3328574481_fzd5gv_k$();
    }
  });
  function DataSsmSessionLogGetQuery(sessionName, txId, ssmUri) {
    this.sessionName_1 = sessionName;
    this.txId_1 = txId;
    this.ssmUri_1 = ssmUri;
  }
  DataSsmSessionLogGetQuery.prototype._get_sessionName__951667568_fqlje8_k$ = function () {
    return this.sessionName_1;
  };
  DataSsmSessionLogGetQuery.prototype._get_txId__810360684_degub0_k$ = function () {
    return this.txId_1;
  };
  DataSsmSessionLogGetQuery.prototype._get_ssmUri__369740492_644tl8_k$ = function () {
    return this.ssmUri_1;
  };
  DataSsmSessionLogGetQuery.$metadata$ = {
    simpleName: 'DataSsmSessionLogGetQuery',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(DataSsmSessionLogGetQuery.prototype, 'sessionName', {
    configurable: true,
    get: function () {
      return this._get_sessionName__951667568_fqlje8_k$();
    }
  });
  Object.defineProperty(DataSsmSessionLogGetQuery.prototype, 'txId', {
    configurable: true,
    get: function () {
      return this._get_txId__810360684_degub0_k$();
    }
  });
  Object.defineProperty(DataSsmSessionLogGetQuery.prototype, 'ssmUri', {
    configurable: true,
    get: function () {
      return this._get_ssmUri__369740492_644tl8_k$();
    }
  });
  function DataSsmSessionLogGetQueryResult(item) {
    this.item_1 = item;
  }
  DataSsmSessionLogGetQueryResult.prototype._get_item__800109976_d8d4t4_k$ = function () {
    return this.item_1;
  };
  DataSsmSessionLogGetQueryResult.$metadata$ = {
    simpleName: 'DataSsmSessionLogGetQueryResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(DataSsmSessionLogGetQueryResult.prototype, 'item', {
    configurable: true,
    get: function () {
      return this._get_item__800109976_d8d4t4_k$();
    }
  });
  function DataSsmSessionLogListQuery(sessionName, ssmUri) {
    this.sessionName_1 = sessionName;
    this.ssmUri_1 = ssmUri;
  }
  DataSsmSessionLogListQuery.prototype._get_sessionName__951667568_fqlje8_k$ = function () {
    return this.sessionName_1;
  };
  DataSsmSessionLogListQuery.prototype._get_ssmUri__369740492_644tl8_k$ = function () {
    return this.ssmUri_1;
  };
  DataSsmSessionLogListQuery.$metadata$ = {
    simpleName: 'DataSsmSessionLogListQuery',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(DataSsmSessionLogListQuery.prototype, 'sessionName', {
    configurable: true,
    get: function () {
      return this._get_sessionName__951667568_fqlje8_k$();
    }
  });
  Object.defineProperty(DataSsmSessionLogListQuery.prototype, 'ssmUri', {
    configurable: true,
    get: function () {
      return this._get_ssmUri__369740492_644tl8_k$();
    }
  });
  function SsmSessionLogListQueryResult(items) {
    this.items_1 = items;
  }
  SsmSessionLogListQueryResult.prototype._get_items__3328574481_fzd5gv_k$ = function () {
    return this.items_1;
  };
  SsmSessionLogListQueryResult.$metadata$ = {
    simpleName: 'DataSsmSessionLogListQueryResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(SsmSessionLogListQueryResult.prototype, 'items', {
    configurable: true,
    get: function () {
      return this._get_items__3328574481_fzd5gv_k$();
    }
  });
  function DataChannel(id) {
    this.id_1 = id;
  }
  DataChannel.prototype._get_id__1413120976_ndc34g_k$ = function () {
    return this.id_1;
  };
  DataChannel.$metadata$ = {
    simpleName: 'DataChannel',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(DataChannel.prototype, 'id', {
    configurable: true,
    get: function () {
      return this._get_id__1413120976_ndc34g_k$();
    }
  });
  function DataSsm(uri, ssm, channel, version) {
    this.uri_1 = uri;
    this.ssm_1 = ssm;
    this.channel_1 = channel;
    this.version_1 = version;
  }
  DataSsm.prototype._get_uri__857449637_e6i4dh_k$ = function () {
    return this.uri_1;
  };
  DataSsm.prototype._get_ssm__857391140_e6gv8k_k$ = function () {
    return this.ssm_1;
  };
  DataSsm.prototype._get_channel__3558637166_c6e3yq_k$ = function () {
    return this.channel_1;
  };
  DataSsm.prototype._get_version__140958009_2bx7w9_k$ = function () {
    return this.version_1;
  };
  DataSsm.$metadata$ = {
    simpleName: 'DataSsm',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(DataSsm.prototype, 'uri', {
    configurable: true,
    get: function () {
      return this._get_uri__857449637_e6i4dh_k$();
    }
  });
  Object.defineProperty(DataSsm.prototype, 'ssm', {
    configurable: true,
    get: function () {
      return this._get_ssm__857391140_e6gv8k_k$();
    }
  });
  Object.defineProperty(DataSsm.prototype, 'channel', {
    configurable: true,
    get: function () {
      return this._get_channel__3558637166_c6e3yq_k$();
    }
  });
  Object.defineProperty(DataSsm.prototype, 'version', {
    configurable: true,
    get: function () {
      return this._get_version__140958009_2bx7w9_k$();
    }
  });
  function DataSsmSession(sessionName, state, channel, transaction, ssmUri, transactions) {
    this.sessionName_1 = sessionName;
    this.state_1 = state;
    this.channel_1 = channel;
    this.transaction_1 = transaction;
    this.ssmUri_1 = ssmUri;
    this.transactions_1 = transactions;
  }
  DataSsmSession.prototype._get_sessionName__951667568_fqlje8_k$ = function () {
    return this.sessionName_1;
  };
  DataSsmSession.prototype._get_state__3614753120_b8zcm8_k$ = function () {
    return this.state_1;
  };
  DataSsmSession.prototype._get_channel__3558637166_c6e3yq_k$ = function () {
    return this.channel_1;
  };
  DataSsmSession.prototype._get_transaction__3608298099_bctpcd_k$ = function () {
    return this.transaction_1;
  };
  DataSsmSession.prototype._get_ssmUri__369740492_644tl8_k$ = function () {
    return this.ssmUri_1;
  };
  DataSsmSession.prototype._get_transactions__188093078_33zhjq_k$ = function () {
    return this.transactions_1;
  };
  DataSsmSession.$metadata$ = {
    simpleName: 'DataSsmSession',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(DataSsmSession.prototype, 'sessionName', {
    configurable: true,
    get: function () {
      return this._get_sessionName__951667568_fqlje8_k$();
    }
  });
  Object.defineProperty(DataSsmSession.prototype, 'state', {
    configurable: true,
    get: function () {
      return this._get_state__3614753120_b8zcm8_k$();
    }
  });
  Object.defineProperty(DataSsmSession.prototype, 'channel', {
    configurable: true,
    get: function () {
      return this._get_channel__3558637166_c6e3yq_k$();
    }
  });
  Object.defineProperty(DataSsmSession.prototype, 'transaction', {
    configurable: true,
    get: function () {
      return this._get_transaction__3608298099_bctpcd_k$();
    }
  });
  Object.defineProperty(DataSsmSession.prototype, 'ssmUri', {
    configurable: true,
    get: function () {
      return this._get_ssmUri__369740492_644tl8_k$();
    }
  });
  Object.defineProperty(DataSsmSession.prototype, 'transactions', {
    configurable: true,
    get: function () {
      return this._get_transactions__188093078_33zhjq_k$();
    }
  });
  function DataSsmSessionState(details, transaction) {
    this.details_1 = details;
    this.transaction_1 = transaction;
  }
  DataSsmSessionState.prototype._get_details__3170742543_ilc1dd_k$ = function () {
    return this.details_1;
  };
  DataSsmSessionState.prototype._get_transaction__3608298099_bctpcd_k$ = function () {
    return this.transaction_1;
  };
  DataSsmSessionState.$metadata$ = {
    simpleName: 'DataSsmSessionState',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(DataSsmSessionState.prototype, 'details', {
    configurable: true,
    get: function () {
      return this._get_details__3170742543_ilc1dd_k$();
    }
  });
  Object.defineProperty(DataSsmSessionState.prototype, 'transaction', {
    configurable: true,
    get: function () {
      return this._get_transaction__3608298099_bctpcd_k$();
    }
  });
  function DataSsmUser(agent) {
    this.agent_1 = agent;
  }
  DataSsmUser.prototype._get_agent__3087536492_jyvfkk_k$ = function () {
    return this.agent_1;
  };
  DataSsmUser.$metadata$ = {
    simpleName: 'DataSsmUser',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(DataSsmUser.prototype, 'agent', {
    configurable: true,
    get: function () {
      return this._get_agent__3087536492_jyvfkk_k$();
    }
  });
  //region block: exports
  function $jsExportAll$(_) {
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$data = $ssm.data || ($ssm.data = {});
    var $ssm$data$dsl = $ssm$data.dsl || ($ssm$data.dsl = {});
    var $ssm$data$dsl$features = $ssm$data$dsl.features || ($ssm$data$dsl.features = {});
    var $ssm$data$dsl$features$query = $ssm$data$dsl$features.query || ($ssm$data$dsl$features.query = {});
    $ssm$data$dsl$features$query.DataChaincodeListQuery = DataChaincodeListQuery;
    $ssm$data$dsl$features$query.DataChaincodeListQueryResult = DataChaincodeListQueryResult;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$data = $ssm.data || ($ssm.data = {});
    var $ssm$data$dsl = $ssm$data.dsl || ($ssm$data.dsl = {});
    var $ssm$data$dsl$features = $ssm$data$dsl.features || ($ssm$data$dsl.features = {});
    var $ssm$data$dsl$features$query = $ssm$data$dsl$features.query || ($ssm$data$dsl$features.query = {});
    $ssm$data$dsl$features$query.DataSsmGetQuery = DataSsmGetQuery;
    $ssm$data$dsl$features$query.DataSsmGetQueryResult = DataSsmGetQueryResult;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$data = $ssm.data || ($ssm.data = {});
    var $ssm$data$dsl = $ssm$data.dsl || ($ssm$data.dsl = {});
    var $ssm$data$dsl$features = $ssm$data$dsl.features || ($ssm$data$dsl.features = {});
    var $ssm$data$dsl$features$query = $ssm$data$dsl$features.query || ($ssm$data$dsl$features.query = {});
    $ssm$data$dsl$features$query.DataSsmListQuery = DataSsmListQuery;
    $ssm$data$dsl$features$query.DataSsmListQueryResult = DataSsmListQueryResult;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$data = $ssm.data || ($ssm.data = {});
    var $ssm$data$dsl = $ssm$data.dsl || ($ssm$data.dsl = {});
    var $ssm$data$dsl$features = $ssm$data$dsl.features || ($ssm$data$dsl.features = {});
    var $ssm$data$dsl$features$query = $ssm$data$dsl$features.query || ($ssm$data$dsl$features.query = {});
    $ssm$data$dsl$features$query.DataSsmSessionGetQuery = DataSsmSessionGetQuery;
    $ssm$data$dsl$features$query.DataSsmSessionGetQueryResult = DataSsmSessionGetQueryResult;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$data = $ssm.data || ($ssm.data = {});
    var $ssm$data$dsl = $ssm$data.dsl || ($ssm$data.dsl = {});
    var $ssm$data$dsl$features = $ssm$data$dsl.features || ($ssm$data$dsl.features = {});
    var $ssm$data$dsl$features$query = $ssm$data$dsl$features.query || ($ssm$data$dsl$features.query = {});
    $ssm$data$dsl$features$query.DataSsmSessionListQuery = DataSsmSessionListQuery;
    $ssm$data$dsl$features$query.DataSsmSessionListQueryResult = DataSsmSessionListQueryResult;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$data = $ssm.data || ($ssm.data = {});
    var $ssm$data$dsl = $ssm$data.dsl || ($ssm$data.dsl = {});
    var $ssm$data$dsl$features = $ssm$data$dsl.features || ($ssm$data$dsl.features = {});
    var $ssm$data$dsl$features$query = $ssm$data$dsl$features.query || ($ssm$data$dsl$features.query = {});
    $ssm$data$dsl$features$query.DataSsmSessionLogGetQuery = DataSsmSessionLogGetQuery;
    $ssm$data$dsl$features$query.DataSsmSessionLogGetQueryResult = DataSsmSessionLogGetQueryResult;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$data = $ssm.data || ($ssm.data = {});
    var $ssm$data$dsl = $ssm$data.dsl || ($ssm$data.dsl = {});
    var $ssm$data$dsl$features = $ssm$data$dsl.features || ($ssm$data$dsl.features = {});
    var $ssm$data$dsl$features$query = $ssm$data$dsl$features.query || ($ssm$data$dsl$features.query = {});
    $ssm$data$dsl$features$query.DataSsmSessionLogListQuery = DataSsmSessionLogListQuery;
    $ssm$data$dsl$features$query.SsmSessionLogListQueryResult = SsmSessionLogListQueryResult;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$data = $ssm.data || ($ssm.data = {});
    var $ssm$data$dsl = $ssm$data.dsl || ($ssm$data.dsl = {});
    var $ssm$data$dsl$model = $ssm$data$dsl.model || ($ssm$data$dsl.model = {});
    $ssm$data$dsl$model.DataChannel = DataChannel;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$data = $ssm.data || ($ssm.data = {});
    var $ssm$data$dsl = $ssm$data.dsl || ($ssm$data.dsl = {});
    var $ssm$data$dsl$model = $ssm$data$dsl.model || ($ssm$data$dsl.model = {});
    $ssm$data$dsl$model.DataSsm = DataSsm;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$data = $ssm.data || ($ssm.data = {});
    var $ssm$data$dsl = $ssm$data.dsl || ($ssm$data.dsl = {});
    var $ssm$data$dsl$model = $ssm$data$dsl.model || ($ssm$data$dsl.model = {});
    $ssm$data$dsl$model.DataSsmSession = DataSsmSession;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$data = $ssm.data || ($ssm.data = {});
    var $ssm$data$dsl = $ssm$data.dsl || ($ssm$data.dsl = {});
    var $ssm$data$dsl$model = $ssm$data$dsl.model || ($ssm$data$dsl.model = {});
    $ssm$data$dsl$model.DataSsmSessionState = DataSsmSessionState;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$data = $ssm.data || ($ssm.data = {});
    var $ssm$data$dsl = $ssm$data.dsl || ($ssm$data.dsl = {});
    var $ssm$data$dsl$model = $ssm$data$dsl.model || ($ssm$data$dsl.model = {});
    $ssm$data$dsl$model.DataSsmUser = DataSsmUser;
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$data = $ssm.data || ($ssm.data = {});
    var $ssm$data$dsl = $ssm$data.dsl || ($ssm$data.dsl = {});
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$data = $ssm.data || ($ssm.data = {});
    var $ssm$data$dsl = $ssm$data.dsl || ($ssm$data.dsl = {});
    var $ssm$data$dsl$features = $ssm$data$dsl.features || ($ssm$data$dsl.features = {});
    var $ssm$data$dsl$features$query = $ssm$data$dsl$features.query || ($ssm$data$dsl$features.query = {});
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$data = $ssm.data || ($ssm.data = {});
    var $ssm$data$dsl = $ssm$data.dsl || ($ssm$data.dsl = {});
    var $ssm$data$dsl$features = $ssm$data$dsl.features || ($ssm$data$dsl.features = {});
    var $ssm$data$dsl$features$query = $ssm$data$dsl$features.query || ($ssm$data$dsl$features.query = {});
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$data = $ssm.data || ($ssm.data = {});
    var $ssm$data$dsl = $ssm$data.dsl || ($ssm$data.dsl = {});
    var $ssm$data$dsl$features = $ssm$data$dsl.features || ($ssm$data$dsl.features = {});
    var $ssm$data$dsl$features$query = $ssm$data$dsl$features.query || ($ssm$data$dsl$features.query = {});
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$data = $ssm.data || ($ssm.data = {});
    var $ssm$data$dsl = $ssm$data.dsl || ($ssm$data.dsl = {});
    var $ssm$data$dsl$features = $ssm$data$dsl.features || ($ssm$data$dsl.features = {});
    var $ssm$data$dsl$features$query = $ssm$data$dsl$features.query || ($ssm$data$dsl$features.query = {});
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$data = $ssm.data || ($ssm.data = {});
    var $ssm$data$dsl = $ssm$data.dsl || ($ssm$data.dsl = {});
    var $ssm$data$dsl$features = $ssm$data$dsl.features || ($ssm$data$dsl.features = {});
    var $ssm$data$dsl$features$query = $ssm$data$dsl$features.query || ($ssm$data$dsl$features.query = {});
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$data = $ssm.data || ($ssm.data = {});
    var $ssm$data$dsl = $ssm$data.dsl || ($ssm$data.dsl = {});
    var $ssm$data$dsl$features = $ssm$data$dsl.features || ($ssm$data$dsl.features = {});
    var $ssm$data$dsl$features$query = $ssm$data$dsl$features.query || ($ssm$data$dsl$features.query = {});
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$data = $ssm.data || ($ssm.data = {});
    var $ssm$data$dsl = $ssm$data.dsl || ($ssm$data.dsl = {});
    var $ssm$data$dsl$features = $ssm$data$dsl.features || ($ssm$data$dsl.features = {});
    var $ssm$data$dsl$features$query = $ssm$data$dsl$features.query || ($ssm$data$dsl$features.query = {});
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$data = $ssm.data || ($ssm.data = {});
    var $ssm$data$dsl = $ssm$data.dsl || ($ssm$data.dsl = {});
    var $ssm$data$dsl$features = $ssm$data$dsl.features || ($ssm$data$dsl.features = {});
    var $ssm$data$dsl$features$query = $ssm$data$dsl$features.query || ($ssm$data$dsl$features.query = {});
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$data = $ssm.data || ($ssm.data = {});
    var $ssm$data$dsl = $ssm$data.dsl || ($ssm$data.dsl = {});
    var $ssm$data$dsl$model = $ssm$data$dsl.model || ($ssm$data$dsl.model = {});
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$data = $ssm.data || ($ssm.data = {});
    var $ssm$data$dsl = $ssm$data.dsl || ($ssm$data.dsl = {});
    var $ssm$data$dsl$model = $ssm$data$dsl.model || ($ssm$data$dsl.model = {});
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$data = $ssm.data || ($ssm.data = {});
    var $ssm$data$dsl = $ssm$data.dsl || ($ssm$data.dsl = {});
    var $ssm$data$dsl$model = $ssm$data$dsl.model || ($ssm$data$dsl.model = {});
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$data = $ssm.data || ($ssm.data = {});
    var $ssm$data$dsl = $ssm$data.dsl || ($ssm$data.dsl = {});
    var $ssm$data$dsl$model = $ssm$data$dsl.model || ($ssm$data$dsl.model = {});
    var $ssm = _.ssm || (_.ssm = {});
    var $ssm$data = $ssm.data || ($ssm.data = {});
    var $ssm$data$dsl = $ssm$data.dsl || ($ssm$data.dsl = {});
    var $ssm$data$dsl$model = $ssm$data$dsl.model || ($ssm$data$dsl.model = {});
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_city_smartb_ssm_ssm_data_dsl.js.map