(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin_city_smartb_f2_f2_dsl_cqrs.js', './kotlin_city_smartb_f2_f2_dsl_function.js', './kotlin_city_smartb_ssm_ssm_chaincode_dsl.js', './kotlin_city_smartb_ssm_ssm_couchdb_dsl.js', './kotlin_city_smartb_ssm_ssm_data_dsl.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin_city_smartb_f2_f2_dsl_cqrs.js'), require('./kotlin_city_smartb_f2_f2_dsl_function.js'), require('./kotlin_city_smartb_ssm_ssm_chaincode_dsl.js'), require('./kotlin_city_smartb_ssm_ssm_couchdb_dsl.js'), require('./kotlin_city_smartb_ssm_ssm_data_dsl.js'));
  else {
    if (typeof kotlin_city_smartb_f2_f2_dsl_cqrs === 'undefined') {
      throw new Error("Error loading module 'x2-ssm-domain'. Its dependency 'kotlin_city_smartb_f2_f2_dsl_cqrs' was not found. Please, check whether 'kotlin_city_smartb_f2_f2_dsl_cqrs' is loaded prior to 'x2-ssm-domain'.");
    }
    if (typeof kotlin_city_smartb_f2_f2_dsl_function === 'undefined') {
      throw new Error("Error loading module 'x2-ssm-domain'. Its dependency 'kotlin_city_smartb_f2_f2_dsl_function' was not found. Please, check whether 'kotlin_city_smartb_f2_f2_dsl_function' is loaded prior to 'x2-ssm-domain'.");
    }
    if (typeof kotlin_city_smartb_ssm_ssm_chaincode_dsl === 'undefined') {
      throw new Error("Error loading module 'x2-ssm-domain'. Its dependency 'kotlin_city_smartb_ssm_ssm_chaincode_dsl' was not found. Please, check whether 'kotlin_city_smartb_ssm_ssm_chaincode_dsl' is loaded prior to 'x2-ssm-domain'.");
    }
    if (typeof kotlin_city_smartb_ssm_ssm_couchdb_dsl === 'undefined') {
      throw new Error("Error loading module 'x2-ssm-domain'. Its dependency 'kotlin_city_smartb_ssm_ssm_couchdb_dsl' was not found. Please, check whether 'kotlin_city_smartb_ssm_ssm_couchdb_dsl' is loaded prior to 'x2-ssm-domain'.");
    }
    if (typeof kotlin_city_smartb_ssm_ssm_data_dsl === 'undefined') {
      throw new Error("Error loading module 'x2-ssm-domain'. Its dependency 'kotlin_city_smartb_ssm_ssm_data_dsl' was not found. Please, check whether 'kotlin_city_smartb_ssm_ssm_data_dsl' is loaded prior to 'x2-ssm-domain'.");
    }
    root['x2-ssm-domain'] = factory(typeof this['x2-ssm-domain'] === 'undefined' ? {} : this['x2-ssm-domain'], kotlin_city_smartb_f2_f2_dsl_cqrs, kotlin_city_smartb_f2_f2_dsl_function, kotlin_city_smartb_ssm_ssm_chaincode_dsl, kotlin_city_smartb_ssm_ssm_couchdb_dsl, kotlin_city_smartb_ssm_ssm_data_dsl);
  }
}(this, function (_, kotlin_city_smartb_f2_f2_dsl_cqrs, kotlin_city_smartb_f2_f2_dsl_function, kotlin_city_smartb_ssm_ssm_chaincode_dsl, kotlin_city_smartb_ssm_ssm_couchdb_dsl, kotlin_city_smartb_ssm_ssm_data_dsl) {
  'use strict';
  //region block: pre-declaration
  //endregion
  function ProtocoleFilterDTO() {
  }
  ProtocoleFilterDTO.$metadata$ = {
    simpleName: 'ProtocoleFilterDTO',
    kind: 'interface',
    interfaces: []
  };
  function X2SessionPageQueryDTO() {
  }
  X2SessionPageQueryDTO.$metadata$ = {
    simpleName: 'X2SessionPageQueryDTO',
    kind: 'interface',
    interfaces: []
  };
  function X2SessionPerStateStatsResultDTO() {
  }
  X2SessionPerStateStatsResultDTO.$metadata$ = {
    simpleName: 'X2SessionPerStateStatsResultDTO',
    kind: 'interface',
    interfaces: [StatsResultDTO]
  };
  function X2SessionStatePerIntervalStatsResultDTO() {
  }
  X2SessionStatePerIntervalStatsResultDTO.$metadata$ = {
    simpleName: 'X2SessionStatePerIntervalStatsResultDTO',
    kind: 'interface',
    interfaces: [StatsResultDTO]
  };
  function StatsResultDTO() {
  }
  StatsResultDTO.$metadata$ = {
    simpleName: 'StatsResultDTO',
    kind: 'interface',
    interfaces: []
  };
  function CellDTO() {
  }
  CellDTO.$metadata$ = {
    simpleName: 'CellDTO',
    kind: 'interface',
    interfaces: []
  };
  //region block: exports
  function $jsExportAll$(_) {
    var $x2 = _.x2 || (_.x2 = {});
    var $x2$api = $x2.api || ($x2.api = {});
    var $x2$api$ssm = $x2$api.ssm || ($x2$api.ssm = {});
    var $x2$api$ssm$domain = $x2$api$ssm.domain || ($x2$api$ssm.domain = {});
    var $x2$api$ssm$domain$query = $x2$api$ssm$domain.query || ($x2$api$ssm$domain.query = {});
    var $x2 = _.x2 || (_.x2 = {});
    var $x2$api = $x2.api || ($x2.api = {});
    var $x2$api$ssm = $x2$api.ssm || ($x2$api.ssm = {});
    var $x2$api$ssm$domain = $x2$api$ssm.domain || ($x2$api$ssm.domain = {});
    var $x2$api$ssm$domain$query = $x2$api$ssm$domain.query || ($x2$api$ssm$domain.query = {});
    var $x2 = _.x2 || (_.x2 = {});
    var $x2$api = $x2.api || ($x2.api = {});
    var $x2$api$ssm = $x2$api.ssm || ($x2$api.ssm = {});
    var $x2$api$ssm$domain = $x2$api$ssm.domain || ($x2$api$ssm.domain = {});
    var $x2$api$ssm$domain$query = $x2$api$ssm$domain.query || ($x2$api$ssm$domain.query = {});
    var $x2 = _.x2 || (_.x2 = {});
    var $x2$api = $x2.api || ($x2.api = {});
    var $x2$api$ssm = $x2$api.ssm || ($x2$api.ssm = {});
    var $x2$api$ssm$domain = $x2$api$ssm.domain || ($x2$api$ssm.domain = {});
    var $x2$api$ssm$domain$query = $x2$api$ssm$domain.query || ($x2$api$ssm$domain.query = {});
    var $x2 = _.x2 || (_.x2 = {});
    var $x2$api = $x2.api || ($x2.api = {});
    var $x2$api$ssm = $x2$api.ssm || ($x2$api.ssm = {});
    var $x2$api$ssm$domain = $x2$api$ssm.domain || ($x2$api$ssm.domain = {});
    var $x2$api$ssm$domain$stats = $x2$api$ssm$domain.stats || ($x2$api$ssm$domain.stats = {});
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

//# sourceMappingURL=x2-ssm-domain.js.map