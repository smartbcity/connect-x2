(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin_kotlin.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin_kotlin.js'));
  else {
    if (typeof kotlin_kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin_city_smartb_f2_f2_dsl_cqrs'. Its dependency 'kotlin_kotlin' was not found. Please, check whether 'kotlin_kotlin' is loaded prior to 'kotlin_city_smartb_f2_f2_dsl_cqrs'.");
    }
    root.kotlin_city_smartb_f2_f2_dsl_cqrs = factory(typeof kotlin_city_smartb_f2_f2_dsl_cqrs === 'undefined' ? {} : kotlin_city_smartb_f2_f2_dsl_cqrs, kotlin_kotlin);
  }
}(this, function (_, kotlin_kotlin) {
  //region block: imports
  var Exception = kotlin_kotlin.$crossModule$.Exception;
  var Exception_init_$Init$ = kotlin_kotlin.$crossModule$.Exception_init_$Init$;
  var captureStack = kotlin_kotlin.$crossModule$.captureStack;
  //endregion
  'use strict';
  //region block: pre-declaration
  ErrorSeverityWarning.prototype = Object.create(ErrorSeverity.prototype);
  ErrorSeverityWarning.prototype.constructor = ErrorSeverityWarning;
  AlertSeverityError.prototype = Object.create(ErrorSeverity.prototype);
  AlertSeverityError.prototype.constructor = AlertSeverityError;
  R2Exception.prototype = Object.create(Exception.prototype);
  R2Exception.prototype.constructor = R2Exception;
  R2NotFoundException.prototype = Object.create(Exception.prototype);
  R2NotFoundException.prototype.constructor = R2NotFoundException;
  //endregion
  function Error_0(type, description, date, payload, severity) {
    this.type_1 = type;
    this.description_1 = description;
    this.date_1 = date;
    this.payload_1 = payload;
    this.severity_1 = severity;
  }
  Error_0.prototype._get_type__810427985_deia8h_k$ = function () {
    return this.type_1;
  };
  Error_0.prototype._get_description__4027823381_4f1tkb_k$ = function () {
    return this.description_1;
  };
  Error_0.prototype._get_date__794940509_d5ac0t_k$ = function () {
    return this.date_1;
  };
  Error_0.prototype._get_payload__3508054851_d0i9j1_k$ = function () {
    return this.payload_1;
  };
  Error_0.prototype._get_severity__64506990_12elwu_k$ = function () {
    return this.severity_1;
  };
  Error_0.$metadata$ = {
    simpleName: 'Error',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(Error_0.prototype, 'type', {
    configurable: true,
    get: function () {
      return this._get_type__810427985_deia8h_k$();
    }
  });
  Object.defineProperty(Error_0.prototype, 'description', {
    configurable: true,
    get: function () {
      return this._get_description__4027823381_4f1tkb_k$();
    }
  });
  Object.defineProperty(Error_0.prototype, 'date', {
    configurable: true,
    get: function () {
      return this._get_date__794940509_d5ac0t_k$();
    }
  });
  Object.defineProperty(Error_0.prototype, 'payload', {
    configurable: true,
    get: function () {
      return this._get_payload__3508054851_d0i9j1_k$();
    }
  });
  Object.defineProperty(Error_0.prototype, 'severity', {
    configurable: true,
    get: function () {
      return this._get_severity__64506990_12elwu_k$();
    }
  });
  function ErrorSeverity(severity) {
    this.severity_1 = severity;
  }
  ErrorSeverity.prototype._get_severity__64506990_12elwu_k$ = function () {
    return this.severity_1;
  };
  ErrorSeverity.$metadata$ = {
    simpleName: 'ErrorSeverity',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(ErrorSeverity.prototype, 'severity', {
    configurable: true,
    get: ErrorSeverity.prototype._get_severity__64506990_12elwu_k$
  });
  function ErrorSeverityWarning() {
    ErrorSeverity.call(this, 'warning');
  }
  ErrorSeverityWarning.$metadata$ = {
    simpleName: 'ErrorSeverityWarning',
    kind: 'class',
    interfaces: []
  };
  function AlertSeverityError() {
    ErrorSeverity.call(this, 'error');
  }
  AlertSeverityError.$metadata$ = {
    simpleName: 'ErrorSeverityError',
    kind: 'class',
    interfaces: []
  };
  function R2Exception(id, error) {
    Exception_init_$Init$(error.description, this);
    this.id_1 = id;
    this.error_1 = error;
    captureStack(this, R2Exception);
  }
  R2Exception.prototype._get_id__1413120976_ndc34g_k$ = function () {
    return this.id_1;
  };
  R2Exception.prototype._get_error__3212600009_hwevxz_k$ = function () {
    return this.error_1;
  };
  R2Exception.$metadata$ = {
    simpleName: 'S2Exception',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(R2Exception.prototype, 'id', {
    configurable: true,
    get: R2Exception.prototype._get_id__1413120976_ndc34g_k$
  });
  Object.defineProperty(R2Exception.prototype, 'error', {
    configurable: true,
    get: R2Exception.prototype._get_error__3212600009_hwevxz_k$
  });
  function R2NotFoundException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, R2NotFoundException);
  }
  R2NotFoundException.$metadata$ = {
    simpleName: 'S2NotFoundException',
    kind: 'class',
    interfaces: []
  };
  function Page(total, list) {
    this.total_1 = total;
    this.list_1 = list;
  }
  Page.prototype._get_total__3639312653_aucycz_k$ = function () {
    return this.total_1;
  };
  Page.prototype._get_list__802566509_d9tsa5_k$ = function () {
    return this.list_1;
  };
  Page.$metadata$ = {
    simpleName: 'Page',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(Page.prototype, 'total', {
    configurable: true,
    get: function () {
      return this._get_total__3639312653_aucycz_k$();
    }
  });
  Object.defineProperty(Page.prototype, 'list', {
    configurable: true,
    get: function () {
      return this._get_list__802566509_d9tsa5_k$();
    }
  });
  function OffsetRequest(offset, limit) {
    this.offset_1 = offset;
    this.limit_1 = limit;
  }
  OffsetRequest.prototype._get_offset__736931032_c6qzmg_k$ = function () {
    return this.offset_1;
  };
  OffsetRequest.prototype._get_limit__3404537718_eq4zuy_k$ = function () {
    return this.limit_1;
  };
  OffsetRequest.$metadata$ = {
    simpleName: 'OffsetPagination',
    kind: 'class',
    interfaces: [Pagination]
  };
  Object.defineProperty(OffsetRequest.prototype, 'offset', {
    configurable: true,
    get: function () {
      return this._get_offset__736931032_c6qzmg_k$();
    }
  });
  Object.defineProperty(OffsetRequest.prototype, 'limit', {
    configurable: true,
    get: function () {
      return this._get_limit__3404537718_eq4zuy_k$();
    }
  });
  function PagePagination(page, size) {
    this.page_1 = page;
    this.size_1 = size;
  }
  PagePagination.prototype._get_page__806010268_dbvli4_k$ = function () {
    return this.page_1;
  };
  PagePagination.prototype._get_size__809037418_ddoh9m_k$ = function () {
    return this.size_1;
  };
  PagePagination.$metadata$ = {
    simpleName: 'PagePagination',
    kind: 'class',
    interfaces: [Pagination]
  };
  Object.defineProperty(PagePagination.prototype, 'page', {
    configurable: true,
    get: function () {
      return this._get_page__806010268_dbvli4_k$();
    }
  });
  Object.defineProperty(PagePagination.prototype, 'size', {
    configurable: true,
    get: function () {
      return this._get_size__809037418_ddoh9m_k$();
    }
  });
  function Pagination() {
  }
  Pagination.$metadata$ = {
    simpleName: 'Pagination',
    kind: 'interface',
    interfaces: []
  };
  //region block: exports
  function $jsExportAll$(_) {
    var $f2 = _.f2 || (_.f2 = {});
    var $f2$dsl = $f2.dsl || ($f2.dsl = {});
    var $f2$dsl$cqrs = $f2$dsl.cqrs || ($f2$dsl.cqrs = {});
    var $f2$dsl$cqrs$error = $f2$dsl$cqrs.error || ($f2$dsl$cqrs.error = {});
    $f2$dsl$cqrs$error.Error = Error_0;
    $f2$dsl$cqrs$error.ErrorSeverity = ErrorSeverity;
    $f2$dsl$cqrs$error.ErrorSeverityWarning = ErrorSeverityWarning;
    $f2$dsl$cqrs$error.AlertSeverityError = AlertSeverityError;
    var $f2 = _.f2 || (_.f2 = {});
    var $f2$dsl = $f2.dsl || ($f2.dsl = {});
    var $f2$dsl$cqrs = $f2$dsl.cqrs || ($f2$dsl.cqrs = {});
    var $f2$dsl$cqrs$exception = $f2$dsl$cqrs.exception || ($f2$dsl$cqrs.exception = {});
    $f2$dsl$cqrs$exception.R2Exception = R2Exception;
    var $f2 = _.f2 || (_.f2 = {});
    var $f2$dsl = $f2.dsl || ($f2.dsl = {});
    var $f2$dsl$cqrs = $f2$dsl.cqrs || ($f2$dsl.cqrs = {});
    var $f2$dsl$cqrs$exception = $f2$dsl$cqrs.exception || ($f2$dsl$cqrs.exception = {});
    $f2$dsl$cqrs$exception.R2NotFoundException = R2NotFoundException;
    var $f2 = _.f2 || (_.f2 = {});
    var $f2$dsl = $f2.dsl || ($f2.dsl = {});
    var $f2$dsl$cqrs = $f2$dsl.cqrs || ($f2$dsl.cqrs = {});
    var $f2$dsl$cqrs$page = $f2$dsl$cqrs.page || ($f2$dsl$cqrs.page = {});
    $f2$dsl$cqrs$page.Page = Page;
    var $f2 = _.f2 || (_.f2 = {});
    var $f2$dsl = $f2.dsl || ($f2.dsl = {});
    var $f2$dsl$cqrs = $f2$dsl.cqrs || ($f2$dsl.cqrs = {});
    var $f2$dsl$cqrs$page = $f2$dsl$cqrs.page || ($f2$dsl$cqrs.page = {});
    $f2$dsl$cqrs$page.OffsetRequest = OffsetRequest;
    $f2$dsl$cqrs$page.PagePagination = PagePagination;
    var $f2 = _.f2 || (_.f2 = {});
    var $f2$dsl = $f2.dsl || ($f2.dsl = {});
    var $f2$dsl$cqrs = $f2$dsl.cqrs || ($f2$dsl.cqrs = {});
    var $f2 = _.f2 || (_.f2 = {});
    var $f2$dsl = $f2.dsl || ($f2.dsl = {});
    var $f2$dsl$cqrs = $f2$dsl.cqrs || ($f2$dsl.cqrs = {});
    var $f2 = _.f2 || (_.f2 = {});
    var $f2$dsl = $f2.dsl || ($f2.dsl = {});
    var $f2$dsl$cqrs = $f2$dsl.cqrs || ($f2$dsl.cqrs = {});
    var $f2 = _.f2 || (_.f2 = {});
    var $f2$dsl = $f2.dsl || ($f2.dsl = {});
    var $f2$dsl$cqrs = $f2$dsl.cqrs || ($f2$dsl.cqrs = {});
    var $f2 = _.f2 || (_.f2 = {});
    var $f2$dsl = $f2.dsl || ($f2.dsl = {});
    var $f2$dsl$cqrs = $f2$dsl.cqrs || ($f2$dsl.cqrs = {});
    var $f2$dsl$cqrs$error = $f2$dsl$cqrs.error || ($f2$dsl$cqrs.error = {});
    var $f2 = _.f2 || (_.f2 = {});
    var $f2$dsl = $f2.dsl || ($f2.dsl = {});
    var $f2$dsl$cqrs = $f2$dsl.cqrs || ($f2$dsl.cqrs = {});
    var $f2$dsl$cqrs$page = $f2$dsl$cqrs.page || ($f2$dsl$cqrs.page = {});
    var $f2 = _.f2 || (_.f2 = {});
    var $f2$dsl = $f2.dsl || ($f2.dsl = {});
    var $f2$dsl$cqrs = $f2$dsl.cqrs || ($f2$dsl.cqrs = {});
    var $f2$dsl$cqrs$page = $f2$dsl$cqrs.page || ($f2$dsl$cqrs.page = {});
    var $f2 = _.f2 || (_.f2 = {});
    var $f2$dsl = $f2.dsl || ($f2.dsl = {});
    var $f2$dsl$cqrs = $f2$dsl.cqrs || ($f2$dsl.cqrs = {});
    var $f2$dsl$cqrs$page = $f2$dsl$cqrs.page || ($f2$dsl$cqrs.page = {});
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_city_smartb_f2_f2_dsl_cqrs.js.map