(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['x2-ssm-domain'] = factory(typeof this['x2-ssm-domain'] === 'undefined' ? {} : this['x2-ssm-domain']);
}(this, function (_) {
  'use strict';
  IntProgressionIterator.prototype = Object.create(IntIterator.prototype);
  IntProgressionIterator.prototype.constructor = IntProgressionIterator;
  IntRange.prototype = Object.create(IntProgression.prototype);
  IntRange.prototype.constructor = IntRange;
  AbstractMutableCollection.prototype = Object.create(AbstractCollection.prototype);
  AbstractMutableCollection.prototype.constructor = AbstractMutableCollection;
  AbstractMutableList.prototype = Object.create(AbstractMutableCollection.prototype);
  AbstractMutableList.prototype.constructor = AbstractMutableList;
  AbstractMutableSet.prototype = Object.create(AbstractMutableCollection.prototype);
  AbstractMutableSet.prototype.constructor = AbstractMutableSet;
  AbstractEntrySet.prototype = Object.create(AbstractMutableSet.prototype);
  AbstractEntrySet.prototype.constructor = AbstractEntrySet;
  AbstractMutableMap.prototype = Object.create(AbstractMap.prototype);
  AbstractMutableMap.prototype.constructor = AbstractMutableMap;
  ArrayList.prototype = Object.create(AbstractMutableList.prototype);
  ArrayList.prototype.constructor = ArrayList;
  EntrySet.prototype = Object.create(AbstractEntrySet.prototype);
  EntrySet.prototype.constructor = EntrySet;
  HashMap.prototype = Object.create(AbstractMutableMap.prototype);
  HashMap.prototype.constructor = HashMap;
  PrimitiveKClassImpl.prototype = Object.create(KClassImpl.prototype);
  PrimitiveKClassImpl.prototype.constructor = PrimitiveKClassImpl;
  NothingKClassImpl.prototype = Object.create(KClassImpl.prototype);
  NothingKClassImpl.prototype.constructor = NothingKClassImpl;
  SimpleKClassImpl.prototype = Object.create(KClassImpl.prototype);
  SimpleKClassImpl.prototype.constructor = SimpleKClassImpl;
  Long.prototype = Object.create(Number_0.prototype);
  Long.prototype.constructor = Long;
  Exception.prototype = Object.create(Error.prototype);
  Exception.prototype.constructor = Exception;
  RuntimeException.prototype = Object.create(Exception.prototype);
  RuntimeException.prototype.constructor = RuntimeException;
  IllegalArgumentException.prototype = Object.create(RuntimeException.prototype);
  IllegalArgumentException.prototype.constructor = IllegalArgumentException;
  NoSuchElementException.prototype = Object.create(RuntimeException.prototype);
  NoSuchElementException.prototype.constructor = NoSuchElementException;
  IndexOutOfBoundsException.prototype = Object.create(RuntimeException.prototype);
  IndexOutOfBoundsException.prototype.constructor = IndexOutOfBoundsException;
  UnsupportedOperationException.prototype = Object.create(RuntimeException.prototype);
  UnsupportedOperationException.prototype.constructor = UnsupportedOperationException;
  NullPointerException.prototype = Object.create(RuntimeException.prototype);
  NullPointerException.prototype.constructor = NullPointerException;
  ClassCastException.prototype = Object.create(RuntimeException.prototype);
  ClassCastException.prototype.constructor = ClassCastException;
  None.prototype = Object.create(TraceBase.prototype);
  None.prototype.constructor = None;
  ErrorSeverityWarning_0.prototype = Object.create(ErrorSeverity_0.prototype);
  ErrorSeverityWarning_0.prototype.constructor = ErrorSeverityWarning_0;
  ErrorSeverityError.prototype = Object.create(ErrorSeverity_0.prototype);
  ErrorSeverityError.prototype.constructor = ErrorSeverityError;
  S2Exception.prototype = Object.create(Exception.prototype);
  S2Exception.prototype.constructor = S2Exception;
  S2NotFoundException.prototype = Object.create(Exception.prototype);
  S2NotFoundException.prototype.constructor = S2NotFoundException;
  function indexOf(_this_, element) {
    if (element == null) {
      var inductionVariable = 0;
      var last = _this_.length - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (_this_[index] == null) {
            return index;
          }}
         while (inductionVariable <= last);
    } else {
      var inductionVariable_0 = 0;
      var last_0 = _this_.length - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          if (equals_0(element, _this_[index_0])) {
            return index_0;
          }}
         while (inductionVariable_0 <= last_0);
    }
    return -1;
  }
  function joinToString(_this_, separator, prefix, postfix, limit, truncated, transform) {
    return joinTo(_this_, StringBuilder_init_$Create$(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function joinToString$default(_this_, separator, prefix, postfix, limit, truncated, transform, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      separator = ', ';
    if (!(($mask0 & 2) === 0))
      prefix = '';
    if (!(($mask0 & 4) === 0))
      postfix = '';
    if (!(($mask0 & 8) === 0))
      limit = -1;
    if (!(($mask0 & 16) === 0))
      truncated = '...';
    if (!(($mask0 & 32) === 0))
      transform = null;
    return joinToString(_this_, separator, prefix, postfix, limit, truncated, transform);
  }
  function contains(_this_, element) {
    return indexOf(_this_, element) >= 0;
  }
  function joinTo(_this_, buffer, separator, prefix, postfix, limit, truncated, transform) {
    buffer.append_v1o70a_k$(prefix);
    Unit_getInstance();
    var count = 0;
    var indexedObject = _this_;
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$break: while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      count = count + 1 | 0;
      if (count > 1) {
        buffer.append_v1o70a_k$(separator);
        Unit_getInstance();
      } else {
      }
      if (limit < 0 ? true : count <= limit) {
        appendElement(buffer, element, transform);
      } else
        break $l$break;
    }
    if (limit >= 0 ? count > limit : false) {
      buffer.append_v1o70a_k$(truncated);
      Unit_getInstance();
    }buffer.append_v1o70a_k$(postfix);
    Unit_getInstance();
    return buffer;
  }
  function joinToString_0(_this_, separator, prefix, postfix, limit, truncated, transform) {
    return joinTo_0(_this_, StringBuilder_init_$Create$(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function joinToString$default_0(_this_, separator, prefix, postfix, limit, truncated, transform, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      separator = ', ';
    if (!(($mask0 & 2) === 0))
      prefix = '';
    if (!(($mask0 & 4) === 0))
      postfix = '';
    if (!(($mask0 & 8) === 0))
      limit = -1;
    if (!(($mask0 & 16) === 0))
      truncated = '...';
    if (!(($mask0 & 32) === 0))
      transform = null;
    return joinToString_0(_this_, separator, prefix, postfix, limit, truncated, transform);
  }
  function first(_this_) {
    if (_this_.isEmpty_0_k$())
      throw NoSuchElementException_init_$Create$_0('List is empty.');
    return _this_.get_ha5a7z_k$(0);
  }
  function single(_this_) {
    var tmp0_subject = _this_;
    if (isInterface(tmp0_subject, List))
      return single_0(_this_);
    else {
      {
        var iterator = _this_.iterator_0_k$();
        if (!iterator.hasNext_0_k$())
          throw NoSuchElementException_init_$Create$_0('Collection is empty.');
        var single_1 = iterator.next_0_k$();
        if (iterator.hasNext_0_k$())
          throw IllegalArgumentException_init_$Create$('Collection has more than one element.');
        return single_1;
      }
    }
  }
  function joinTo_0(_this_, buffer, separator, prefix, postfix, limit, truncated, transform) {
    buffer.append_v1o70a_k$(prefix);
    Unit_getInstance();
    var count = 0;
    var tmp0_iterator = _this_.iterator_0_k$();
    $l$break: while (tmp0_iterator.hasNext_0_k$()) {
      var element = tmp0_iterator.next_0_k$();
      count = count + 1 | 0;
      if (count > 1) {
        buffer.append_v1o70a_k$(separator);
        Unit_getInstance();
      } else {
      }
      if (limit < 0 ? true : count <= limit) {
        appendElement(buffer, element, transform);
      } else
        break $l$break;
    }
    if (limit >= 0 ? count > limit : false) {
      buffer.append_v1o70a_k$(truncated);
      Unit_getInstance();
    }buffer.append_v1o70a_k$(postfix);
    Unit_getInstance();
    return buffer;
  }
  function single_0(_this_) {
    var tmp0_subject = _this_._get_size__0_k$();
    var tmp;
    switch (tmp0_subject) {
      case 0:
        throw NoSuchElementException_init_$Create$_0('List is empty.');
      case 1:
        tmp = _this_.get_ha5a7z_k$(0);
        break;
      default:throw IllegalArgumentException_init_$Create$('List has more than one element.');
    }
    return tmp;
  }
  function until(_this_, to_0) {
    if (to_0 <= IntCompanionObject_getInstance()._MIN_VALUE)
      return Companion_getInstance_3()._EMPTY;
    return numberRangeToNumber(_this_, to_0 - 1 | 0);
  }
  function coerceAtLeast(_this_, minimumValue) {
    return _this_ < minimumValue ? minimumValue : _this_;
  }
  function coerceAtMost(_this_, maximumValue) {
    return _this_ > maximumValue ? maximumValue : _this_;
  }
  function coerceIn(_this_, minimumValue, maximumValue) {
    if (minimumValue > maximumValue)
      throw IllegalArgumentException_init_$Create$('' + 'Cannot coerce value to an empty range: maximum ' + maximumValue + ' is less than minimum ' + minimumValue + '.');
    if (_this_ < minimumValue)
      return minimumValue;
    if (_this_ > maximumValue)
      return maximumValue;
    return _this_;
  }
  function downTo(_this_, to_0) {
    return Companion_getInstance_2().fromClosedRange_fcwjfj_k$(_this_, to_0, -1);
  }
  function asIterable(_this_) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = new _no_name_provided__1(_this_);
      break $l$block;
    }
    return tmp$ret$0;
  }
  function _no_name_provided__1($this_asIterable) {
    this._$this_asIterable = $this_asIterable;
  }
  _no_name_provided__1.prototype.iterator_2_0_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = this._$this_asIterable.iterator_0_k$();
      break $l$block;
    }
    return tmp$ret$0;
  };
  _no_name_provided__1.prototype.iterator_0_k$ = function () {
    return this.iterator_2_0_k$();
  };
  _no_name_provided__1.$metadata$ = {
    simpleName: '<no name provided>_1',
    kind: 'class',
    interfaces: [Iterable]
  };
  function _no_name_provided_(this$0) {
    this._this$0 = this$0;
  }
  _no_name_provided_.prototype.invoke_2bq_k$ = function (it) {
    return it === this._this$0 ? '(this Collection)' : toString_0(it);
  };
  _no_name_provided_.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_2bq_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided_.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function AbstractCollection() {
  }
  AbstractCollection.prototype.contains_2bq_k$ = function (element) {
    var tmp$ret$0;
    $l$block_2: {
      var tmp;
      if (isInterface(this, Collection)) {
        tmp = this.isEmpty_0_k$();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = false;
        break $l$block_2;
      } else {
      }
      var tmp0_iterator_1 = this.iterator_0_k$();
      while (tmp0_iterator_1.hasNext_0_k$()) {
        var element_2 = tmp0_iterator_1.next_0_k$();
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = equals_0(element_2, element);
          break $l$block_0;
        }
        if (tmp$ret$1) {
          tmp$ret$0 = true;
          break $l$block_2;
        } else {
        }
      }
      tmp$ret$0 = false;
      break $l$block_2;
    }
    return tmp$ret$0;
  };
  AbstractCollection.prototype.containsAll_dxd4eo_k$ = function (elements) {
    var tmp$ret$0;
    $l$block_2: {
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.isEmpty_0_k$();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_2;
      } else {
      }
      var tmp0_iterator_1 = elements.iterator_0_k$();
      while (tmp0_iterator_1.hasNext_0_k$()) {
        var element_2 = tmp0_iterator_1.next_0_k$();
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = this.contains_2bq_k$(element_2);
          break $l$block_0;
        }
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_2;
        } else {
        }
      }
      tmp$ret$0 = true;
      break $l$block_2;
    }
    return tmp$ret$0;
  };
  AbstractCollection.prototype.isEmpty_0_k$ = function () {
    return this._get_size__0_k$() === 0;
  };
  AbstractCollection.prototype.toString = function () {
    return joinToString$default_0(this, ', ', '[', ']', 0, null, _no_name_provided_$factory(this), 24, null);
  };
  AbstractCollection.prototype.toArray = function () {
    return copyToArrayImpl_0(this);
  };
  AbstractCollection.$metadata$ = {
    simpleName: 'AbstractCollection',
    kind: 'class',
    interfaces: [Collection]
  };
  function _no_name_provided_$factory(this$0) {
    var i = new _no_name_provided_(this$0);
    return function (p1) {
      return i.invoke_2bq_k$(p1);
    };
  }
  function Companion_0() {
    Companion_instance = this;
  }
  Companion_0.prototype.checkElementIndex_rvwcgf_k$ = function (index, size) {
    if (index < 0 ? true : index >= size) {
      throw IndexOutOfBoundsException_init_$Create$('' + 'index: ' + index + ', size: ' + size);
    }};
  Companion_0.prototype.checkPositionIndex_rvwcgf_k$ = function (index, size) {
    if (index < 0 ? true : index > size) {
      throw IndexOutOfBoundsException_init_$Create$('' + 'index: ' + index + ', size: ' + size);
    }};
  Companion_0.prototype.orderedHashCode_dxd51x_k$ = function (c) {
    var hashCode_1 = 1;
    var tmp0_iterator = c.iterator_0_k$();
    while (tmp0_iterator.hasNext_0_k$()) {
      var e = tmp0_iterator.next_0_k$();
      var tmp = imul(31, hashCode_1);
      var tmp1_safe_receiver = e;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : hashCode(tmp1_safe_receiver);
      hashCode_1 = tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
    }
    return hashCode_1;
  };
  Companion_0.prototype.orderedEquals_tuq55s_k$ = function (c, other) {
    if (!(c._get_size__0_k$() === other._get_size__0_k$()))
      return false;
    var otherIterator = other.iterator_0_k$();
    var tmp0_iterator = c.iterator_0_k$();
    while (tmp0_iterator.hasNext_0_k$()) {
      var elem = tmp0_iterator.next_0_k$();
      var elemOther = otherIterator.next_0_k$();
      if (!equals_0(elem, elemOther)) {
        return false;
      }}
    return true;
  };
  Companion_0.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion_0();
    return Companion_instance;
  }
  function toString($this, o) {
    return o === $this ? '(this Map)' : toString_0(o);
  }
  function implFindEntry($this, key) {
    var tmp$ret$1;
    $l$block_1: {
      var tmp0_firstOrNull_0 = $this._get_entries__0_k$();
      var tmp0_iterator_1 = tmp0_firstOrNull_0.iterator_0_k$();
      while (tmp0_iterator_1.hasNext_0_k$()) {
        var element_2 = tmp0_iterator_1.next_0_k$();
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = equals_0(element_2._get_key__0_k$(), key);
          break $l$block;
        }
        if (tmp$ret$0) {
          tmp$ret$1 = element_2;
          break $l$block_1;
        } else {
        }
      }
      tmp$ret$1 = null;
      break $l$block_1;
    }
    return tmp$ret$1;
  }
  function Companion_1() {
    Companion_instance_0 = this;
  }
  Companion_1.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_1();
    return Companion_instance_0;
  }
  function _no_name_provided__0(this$0) {
    this._this$0_0 = this$0;
  }
  _no_name_provided__0.prototype.invoke_4v0zae_k$ = function (it) {
    return this._this$0_0.toString_4v0zae_k$(it);
  };
  _no_name_provided__0.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_4v0zae_k$((!(p1 == null) ? isInterface(p1, Entry) : false) ? p1 : THROW_CCE());
  };
  _no_name_provided__0.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function AbstractMap() {
    Companion_getInstance_0();
    this.__keys = null;
    this.__values = null;
  }
  AbstractMap.prototype.containsKey_2bw_k$ = function (key) {
    return !(implFindEntry(this, key) == null);
  };
  AbstractMap.prototype.containsEntry_7gsh9e_k$ = function (entry) {
    if (!(!(entry == null) ? isInterface(entry, Entry) : false))
      return false;
    else {
    }
    var key = entry._get_key__0_k$();
    var value = entry._get_value__0_k$();
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = (isInterface(this, Map_0) ? this : THROW_CCE()).get_2bw_k$(key);
      break $l$block;
    }
    var ourValue = tmp$ret$0;
    if (!equals_0(value, ourValue)) {
      return false;
    }var tmp;
    if (ourValue == null) {
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = (isInterface(this, Map_0) ? this : THROW_CCE()).containsKey_2bw_k$(key);
        break $l$block_0;
      }
      tmp = !tmp$ret$1;
    } else {
      tmp = false;
    }
    if (tmp) {
      return false;
    } else {
    }
    return true;
  };
  AbstractMap.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, Map_0) : false))
      return false;
    else {
    }
    if (!(this._get_size__0_k$() === other._get_size__0_k$()))
      return false;
    var tmp$ret$0;
    $l$block_2: {
      var tmp0_all_0 = other._get_entries__0_k$();
      var tmp;
      if (isInterface(tmp0_all_0, Collection)) {
        tmp = tmp0_all_0.isEmpty_0_k$();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_2;
      } else {
      }
      var tmp0_iterator_1 = tmp0_all_0.iterator_0_k$();
      while (tmp0_iterator_1.hasNext_0_k$()) {
        var element_2 = tmp0_iterator_1.next_0_k$();
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = this.containsEntry_7gsh9e_k$(element_2);
          break $l$block_0;
        }
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_2;
        } else {
        }
      }
      tmp$ret$0 = true;
      break $l$block_2;
    }
    return tmp$ret$0;
  };
  AbstractMap.prototype.get_2bw_k$ = function (key) {
    var tmp0_safe_receiver = implFindEntry(this, key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_value__0_k$();
  };
  AbstractMap.prototype.hashCode = function () {
    return hashCode(this._get_entries__0_k$());
  };
  AbstractMap.prototype._get_size__0_k$ = function () {
    return this._get_entries__0_k$()._get_size__0_k$();
  };
  AbstractMap.prototype.toString = function () {
    var tmp = this._get_entries__0_k$();
    return joinToString$default_0(tmp, ', ', '{', '}', 0, null, _no_name_provided_$factory_0(this), 24, null);
  };
  AbstractMap.prototype.toString_4v0zae_k$ = function (entry) {
    return toString(this, entry._get_key__0_k$()) + '=' + toString(this, entry._get_value__0_k$());
  };
  AbstractMap.$metadata$ = {
    simpleName: 'AbstractMap',
    kind: 'class',
    interfaces: [Map_0]
  };
  function _no_name_provided_$factory_0(this$0) {
    var i = new _no_name_provided__0(this$0);
    return function (p1) {
      return i.invoke_4v0zae_k$(p1);
    };
  }
  function Companion_2() {
    Companion_instance_1 = this;
  }
  Companion_2.prototype.unorderedHashCode_dxd51x_k$ = function (c) {
    var hashCode_1 = 0;
    var tmp0_iterator = c.iterator_0_k$();
    while (tmp0_iterator.hasNext_0_k$()) {
      var element = tmp0_iterator.next_0_k$();
      var tmp = hashCode_1;
      var tmp1_safe_receiver = element;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : hashCode(tmp1_safe_receiver);
      hashCode_1 = tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
    }
    return hashCode_1;
  };
  Companion_2.prototype.setEquals_qlktm2_k$ = function (c, other) {
    if (!(c._get_size__0_k$() === other._get_size__0_k$()))
      return false;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = c.containsAll_dxd4eo_k$(other);
      break $l$block;
    }
    return tmp$ret$0;
  };
  Companion_2.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_2();
    return Companion_instance_1;
  }
  function _get_lastIndex_(_this_) {
    return _this_._get_size__0_k$() - 1 | 0;
  }
  function arrayListOf(elements) {
    return elements.length === 0 ? ArrayList_init_$Create$() : ArrayList_init_$Create$_1(new ArrayAsCollection(elements, true));
  }
  function ArrayAsCollection(values, isVarargs) {
    this._values = values;
    this._isVarargs = isVarargs;
  }
  ArrayAsCollection.prototype._get_size__0_k$ = function () {
    return this._values.length;
  };
  ArrayAsCollection.prototype.isEmpty_0_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_isEmpty_0 = this._values;
      tmp$ret$0 = tmp0_isEmpty_0.length === 0;
      break $l$block;
    }
    return tmp$ret$0;
  };
  ArrayAsCollection.prototype.contains_2c5_k$ = function (element) {
    return contains(this._values, element);
  };
  ArrayAsCollection.prototype.containsAll_dxd41r_k$ = function (elements) {
    var tmp$ret$0;
    $l$block_2: {
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.isEmpty_0_k$();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_2;
      } else {
      }
      var tmp0_iterator_1 = elements.iterator_0_k$();
      while (tmp0_iterator_1.hasNext_0_k$()) {
        var element_2 = tmp0_iterator_1.next_0_k$();
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = this.contains_2c5_k$(element_2);
          break $l$block_0;
        }
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_2;
        } else {
        }
      }
      tmp$ret$0 = true;
      break $l$block_2;
    }
    return tmp$ret$0;
  };
  ArrayAsCollection.prototype.containsAll_dxd4eo_k$ = function (elements) {
    return this.containsAll_dxd41r_k$(elements);
  };
  ArrayAsCollection.prototype.iterator_0_k$ = function () {
    return arrayIterator(this._values);
  };
  ArrayAsCollection.$metadata$ = {
    simpleName: 'ArrayAsCollection',
    kind: 'class',
    interfaces: [Collection]
  };
  function collectionSizeOrDefault(_this_, default_0) {
    var tmp;
    if (isInterface(_this_, Collection)) {
      tmp = _this_._get_size__0_k$();
    } else {
      {
        tmp = default_0;
      }
    }
    return tmp;
  }
  function Sequence() {
  }
  Sequence.$metadata$ = {
    simpleName: 'Sequence',
    kind: 'interface',
    interfaces: []
  };
  function KClassifier() {
  }
  KClassifier.$metadata$ = {
    simpleName: 'KClassifier',
    kind: 'interface',
    interfaces: []
  };
  function appendElement(_this_, element, transform) {
    if (!(transform == null)) {
      _this_.append_v1o70a_k$(transform(element));
      Unit_getInstance();
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this_.append_v1o70a_k$(element);
        Unit_getInstance();
      } else {
        if (element instanceof Char) {
          _this_.append_wi8o78_k$(element);
          Unit_getInstance();
        } else {
          {
            _this_.append_v1o70a_k$(toString_0(element));
            Unit_getInstance();
          }
        }
      }
    }
  }
  function equals(_this_, other, ignoreCase) {
    if (_this_.equals(other))
      return true;
    if (!ignoreCase)
      return false;
    var thisUpper = uppercaseChar(_this_);
    var otherUpper = uppercaseChar(other);
    var tmp;
    if (thisUpper.equals(otherUpper)) {
      tmp = true;
    } else {
      var tmp$ret$3;
      $l$block_2: {
        var tmp$ret$2;
        $l$block_1: {
          var tmp$ret$1;
          $l$block_0: {
            var tmp$ret$0;
            $l$block: {
              var tmp0_asDynamic_0 = thisUpper.toString();
              tmp$ret$0 = tmp0_asDynamic_0;
              break $l$block;
            }
            var tmp1_unsafeCast_0 = tmp$ret$0.toLowerCase();
            tmp$ret$1 = tmp1_unsafeCast_0;
            break $l$block_0;
          }
          tmp$ret$2 = tmp$ret$1;
          break $l$block_1;
        }
        tmp$ret$3 = charSequenceGet(tmp$ret$2, 0);
        break $l$block_2;
      }
      var tmp_0 = tmp$ret$3;
      var tmp$ret$7;
      $l$block_6: {
        var tmp$ret$6;
        $l$block_5: {
          var tmp$ret$5;
          $l$block_4: {
            var tmp$ret$4;
            $l$block_3: {
              var tmp2_asDynamic_0 = otherUpper.toString();
              tmp$ret$4 = tmp2_asDynamic_0;
              break $l$block_3;
            }
            var tmp3_unsafeCast_0 = tmp$ret$4.toLowerCase();
            tmp$ret$5 = tmp3_unsafeCast_0;
            break $l$block_4;
          }
          tmp$ret$6 = tmp$ret$5;
          break $l$block_5;
        }
        tmp$ret$7 = charSequenceGet(tmp$ret$6, 0);
        break $l$block_6;
      }
      tmp = tmp_0.equals(tmp$ret$7);
    }
    return tmp;
  }
  function split(_this_, delimiters, ignoreCase, limit) {
    if (delimiters.length === 1) {
      var delimiter = delimiters[0];
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = charSequenceLength(delimiter) === 0;
        break $l$block;
      }
      if (!tmp$ret$0) {
        return split_0(_this_, delimiter, ignoreCase, limit);
      } else {
      }
    }var tmp$ret$3;
    $l$block_2: {
      var tmp0_map_0 = asIterable(rangesDelimitedBy$default(_this_, delimiters, 0, ignoreCase, limit, 2, null));
      var tmp$ret$2;
      $l$block_1: {
        var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map_0, 10));
        var tmp0_iterator_1_2 = tmp0_map_0.iterator_0_k$();
        while (tmp0_iterator_1_2.hasNext_0_k$()) {
          var item_2_3 = tmp0_iterator_1_2.next_0_k$();
          var tmp$ret$1;
          $l$block_0: {
            tmp$ret$1 = substring(_this_, item_2_3);
            break $l$block_0;
          }
          tmp0_mapTo_0_1.add_2bq_k$(tmp$ret$1);
          Unit_getInstance();
        }
        tmp$ret$2 = tmp0_mapTo_0_1;
        break $l$block_1;
      }
      tmp$ret$3 = tmp$ret$2;
      break $l$block_2;
    }
    return tmp$ret$3;
  }
  function split$default(_this_, delimiters, ignoreCase, limit, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      ignoreCase = false;
    if (!(($mask0 & 4) === 0))
      limit = 0;
    return split(_this_, delimiters, ignoreCase, limit);
  }
  function split_0(_this_, delimiter, ignoreCase, limit) {
    requireNonNegativeLimit(limit);
    var currentOffset = 0;
    var nextIndex = indexOf_0(_this_, delimiter, currentOffset, ignoreCase);
    if (nextIndex === -1 ? true : limit === 1) {
      return listOf(toString_1(_this_));
    }var isLimited = limit > 0;
    var result = ArrayList_init_$Create$_0(isLimited ? coerceAtMost(limit, 10) : 10);
    $l$break: do {
      var tmp$ret$0;
      $l$block: {
        var tmp0_substring_0 = currentOffset;
        var tmp1_substring_0 = nextIndex;
        tmp$ret$0 = toString_1(charSequenceSubSequence(_this_, tmp0_substring_0, tmp1_substring_0));
        break $l$block;
      }
      result.add_2bq_k$(tmp$ret$0);
      Unit_getInstance();
      currentOffset = nextIndex + delimiter.length | 0;
      if (isLimited ? result._get_size__0_k$() === (limit - 1 | 0) : false)
        break $l$break;
      nextIndex = indexOf_0(_this_, delimiter, currentOffset, ignoreCase);
    }
     while (!(nextIndex === -1));
    var tmp$ret$1;
    $l$block_0: {
      var tmp2_substring_0 = currentOffset;
      var tmp3_substring_0 = charSequenceLength(_this_);
      tmp$ret$1 = toString_1(charSequenceSubSequence(_this_, tmp2_substring_0, tmp3_substring_0));
      break $l$block_0;
    }
    result.add_2bq_k$(tmp$ret$1);
    Unit_getInstance();
    return result;
  }
  function substring(_this_, range) {
    return toString_1(charSequenceSubSequence(_this_, range._get_start__0_k$(), range._get_endInclusive__0_k$() + 1 | 0));
  }
  function rangesDelimitedBy(_this_, delimiters, startIndex, ignoreCase, limit) {
    requireNonNegativeLimit(limit);
    var delimitersList = asList(delimiters);
    return new DelimitedRangesSequence(_this_, startIndex, limit, _no_name_provided_$factory_1(delimitersList, ignoreCase));
  }
  function rangesDelimitedBy$default(_this_, delimiters, startIndex, ignoreCase, limit, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startIndex = 0;
    if (!(($mask0 & 4) === 0))
      ignoreCase = false;
    if (!(($mask0 & 8) === 0))
      limit = 0;
    return rangesDelimitedBy(_this_, delimiters, startIndex, ignoreCase, limit);
  }
  function requireNonNegativeLimit(limit) {
    var tmp0_require_0 = limit >= 0;
    {
    }
    var tmp;
    if (!tmp0_require_0) {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = '' + 'Limit must be non-negative, but was ' + limit;
        break $l$block;
      }
      var message_2 = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString_1(message_2));
    }return tmp;
  }
  function indexOf_0(_this_, string, startIndex, ignoreCase) {
    var tmp;
    var tmp_0;
    if (ignoreCase) {
      tmp_0 = true;
    } else {
      tmp_0 = !(typeof _this_ === 'string');
    }
    if (tmp_0) {
      var tmp_1 = charSequenceLength(_this_);
      tmp = indexOf$default_0(_this_, string, startIndex, tmp_1, ignoreCase, false, 16, null);
    } else {
      {
        var tmp$ret$1;
        $l$block_0: {
          var tmp0_nativeIndexOf_0 = _this_;
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = tmp0_nativeIndexOf_0;
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0.indexOf(string, startIndex);
          break $l$block_0;
        }
        tmp = tmp$ret$1;
      }
    }
    return tmp;
  }
  function indexOf$default(_this_, string, startIndex, ignoreCase, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startIndex = 0;
    if (!(($mask0 & 4) === 0))
      ignoreCase = false;
    return indexOf_0(_this_, string, startIndex, ignoreCase);
  }
  function calcNext($this) {
    if ($this._nextSearchIndex < 0) {
      $this._nextState = 0;
      $this._nextItem = null;
    } else {
      var tmp;
      var tmp_0;
      if ($this._this$0_1._limit > 0) {
        var tmp0_this = $this;
        tmp0_this._counter = tmp0_this._counter + 1 | 0;
        tmp_0 = tmp0_this._counter >= $this._this$0_1._limit;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = true;
      } else {
        {
          tmp = $this._nextSearchIndex > charSequenceLength($this._this$0_1._input);
        }
      }
      if (tmp) {
        $this._nextItem = numberRangeToNumber($this._currentStartIndex, _get_lastIndex__0($this._this$0_1._input));
        $this._nextSearchIndex = -1;
      } else {
        {
          var match = $this._this$0_1._getNextMatch($this._this$0_1._input, $this._nextSearchIndex);
          if (match == null) {
            $this._nextItem = numberRangeToNumber($this._currentStartIndex, _get_lastIndex__0($this._this$0_1._input));
            $this._nextSearchIndex = -1;
          } else {
            var tmp1_container = match;
            var index = tmp1_container.component1_0_k$();
            var length = tmp1_container.component2_0_k$();
            $this._nextItem = until($this._currentStartIndex, index);
            $this._currentStartIndex = index + length | 0;
            $this._nextSearchIndex = $this._currentStartIndex + (length === 0 ? 1 : 0) | 0;
          }
        }
      }
      $this._nextState = 1;
    }
  }
  function _no_name_provided__2(this$0) {
    this._this$0_1 = this$0;
    this._nextState = -1;
    this._currentStartIndex = coerceIn(this._this$0_1._startIndex, 0, charSequenceLength(this._this$0_1._input));
    this._nextSearchIndex = this._currentStartIndex;
    this._nextItem = null;
    this._counter = 0;
  }
  _no_name_provided__2.prototype.next_0_k$ = function () {
    if (this._nextState === -1)
      calcNext(this);
    if (this._nextState === 0)
      throw NoSuchElementException_init_$Create$();
    var tmp = this._nextItem;
    var result = tmp instanceof IntRange ? tmp : THROW_CCE();
    this._nextItem = null;
    this._nextState = -1;
    return result;
  };
  _no_name_provided__2.prototype.hasNext_0_k$ = function () {
    if (this._nextState === -1)
      calcNext(this);
    return this._nextState === 1;
  };
  _no_name_provided__2.$metadata$ = {
    kind: 'class',
    interfaces: [Iterator]
  };
  function DelimitedRangesSequence(input, startIndex, limit, getNextMatch) {
    this._input = input;
    this._startIndex = startIndex;
    this._limit = limit;
    this._getNextMatch = getNextMatch;
  }
  DelimitedRangesSequence.prototype.iterator_0_k$ = function () {
    return new _no_name_provided__2(this);
  };
  DelimitedRangesSequence.$metadata$ = {
    simpleName: 'DelimitedRangesSequence',
    kind: 'class',
    interfaces: [Sequence]
  };
  function findAnyOf(_this_, strings, startIndex, ignoreCase, last) {
    if (!ignoreCase ? strings._get_size__0_k$() === 1 : false) {
      var string = single(strings);
      var tmp;
      if (!last) {
        tmp = indexOf$default(_this_, string, startIndex, false, 4, null);
      } else {
        tmp = lastIndexOf$default(_this_, string, startIndex, false, 4, null);
      }
      var index = tmp;
      return index < 0 ? null : to(index, string);
    }var indices = !last ? numberRangeToNumber(coerceAtLeast(startIndex, 0), charSequenceLength(_this_)) : downTo(coerceAtMost(startIndex, _get_lastIndex__0(_this_)), 0);
    if (typeof _this_ === 'string') {
      var inductionVariable = indices._first_0;
      var last_0 = indices._last;
      var step = indices._step_0;
      if ((step > 0 ? inductionVariable <= last_0 : false) ? true : step < 0 ? last_0 <= inductionVariable : false)
        do {
          var index_0 = inductionVariable;
          inductionVariable = inductionVariable + step | 0;
          var tmp$ret$1;
          $l$block_1: {
            var tmp0_iterator_1 = strings.iterator_0_k$();
            while (tmp0_iterator_1.hasNext_0_k$()) {
              var element_2 = tmp0_iterator_1.next_0_k$();
              var tmp$ret$0;
              $l$block: {
                tmp$ret$0 = regionMatches(element_2, 0, _this_, index_0, element_2.length, ignoreCase);
                break $l$block;
              }
              if (tmp$ret$0) {
                tmp$ret$1 = element_2;
                break $l$block_1;
              } else {
              }
            }
            tmp$ret$1 = null;
            break $l$block_1;
          }
          var matchingString = tmp$ret$1;
          if (!(matchingString == null))
            return to(index_0, matchingString);
        }
         while (!(index_0 === last_0));
    } else {
      {
        var inductionVariable_0 = indices._first_0;
        var last_1 = indices._last;
        var step_0 = indices._step_0;
        if ((step_0 > 0 ? inductionVariable_0 <= last_1 : false) ? true : step_0 < 0 ? last_1 <= inductionVariable_0 : false)
          do {
            var index_1 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + step_0 | 0;
            var tmp$ret$3;
            $l$block_4: {
              var tmp0_iterator_1_0 = strings.iterator_0_k$();
              while (tmp0_iterator_1_0.hasNext_0_k$()) {
                var element_2_0 = tmp0_iterator_1_0.next_0_k$();
                var tmp$ret$2;
                $l$block_2: {
                  tmp$ret$2 = regionMatchesImpl(element_2_0, 0, _this_, index_1, element_2_0.length, ignoreCase);
                  break $l$block_2;
                }
                if (tmp$ret$2) {
                  tmp$ret$3 = element_2_0;
                  break $l$block_4;
                } else {
                }
              }
              tmp$ret$3 = null;
              break $l$block_4;
            }
            var matchingString_0 = tmp$ret$3;
            if (!(matchingString_0 == null))
              return to(index_1, matchingString_0);
          }
           while (!(index_1 === last_1));
      }
    }
    return null;
  }
  function indexOf_1(_this_, other, startIndex, endIndex, ignoreCase, last) {
    var indices = !last ? numberRangeToNumber(coerceAtLeast(startIndex, 0), coerceAtMost(endIndex, charSequenceLength(_this_))) : downTo(coerceAtMost(startIndex, _get_lastIndex__0(_this_)), coerceAtLeast(endIndex, 0));
    var tmp;
    if (typeof _this_ === 'string') {
      tmp = typeof other === 'string';
    } else {
      {
        tmp = false;
      }
    }
    if (tmp) {
      var inductionVariable = indices._first_0;
      var last_0 = indices._last;
      var step = indices._step_0;
      if ((step > 0 ? inductionVariable <= last_0 : false) ? true : step < 0 ? last_0 <= inductionVariable : false)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + step | 0;
          if (regionMatches(other, 0, _this_, index, charSequenceLength(other), ignoreCase))
            return index;
        }
         while (!(index === last_0));
    } else {
      {
        var inductionVariable_0 = indices._first_0;
        var last_1 = indices._last;
        var step_0 = indices._step_0;
        if ((step_0 > 0 ? inductionVariable_0 <= last_1 : false) ? true : step_0 < 0 ? last_1 <= inductionVariable_0 : false)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + step_0 | 0;
            if (regionMatchesImpl(other, 0, _this_, index_0, charSequenceLength(other), ignoreCase))
              return index_0;
          }
           while (!(index_0 === last_1));
      }
    }
    return -1;
  }
  function indexOf$default_0(_this_, other, startIndex, endIndex, ignoreCase, last, $mask0, $handler) {
    if (!(($mask0 & 16) === 0))
      last = false;
    return indexOf_1(_this_, other, startIndex, endIndex, ignoreCase, last);
  }
  function _get_lastIndex__0(_this_) {
    return charSequenceLength(_this_) - 1 | 0;
  }
  function lastIndexOf(_this_, string, startIndex, ignoreCase) {
    var tmp;
    var tmp_0;
    if (ignoreCase) {
      tmp_0 = true;
    } else {
      tmp_0 = !(typeof _this_ === 'string');
    }
    if (tmp_0) {
      tmp = indexOf_1(_this_, string, startIndex, 0, ignoreCase, true);
    } else {
      {
        var tmp$ret$1;
        $l$block_0: {
          var tmp0_nativeLastIndexOf_0 = _this_;
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = tmp0_nativeLastIndexOf_0;
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0.lastIndexOf(string, startIndex);
          break $l$block_0;
        }
        tmp = tmp$ret$1;
      }
    }
    return tmp;
  }
  function lastIndexOf$default(_this_, string, startIndex, ignoreCase, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startIndex = _get_lastIndex__0(_this_);
    if (!(($mask0 & 4) === 0))
      ignoreCase = false;
    return lastIndexOf(_this_, string, startIndex, ignoreCase);
  }
  function regionMatchesImpl(_this_, thisOffset, other, otherOffset, length, ignoreCase) {
    if (((otherOffset < 0 ? true : thisOffset < 0) ? true : thisOffset > (charSequenceLength(_this_) - length | 0)) ? true : otherOffset > (charSequenceLength(other) - length | 0)) {
      return false;
    }var inductionVariable = 0;
    if (inductionVariable < length)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals(charSequenceGet(_this_, thisOffset + index | 0), charSequenceGet(other, otherOffset + index | 0), ignoreCase))
          return false;
      }
       while (inductionVariable < length);
    return true;
  }
  function _no_name_provided__3($delimitersList, $ignoreCase) {
    this._$delimitersList = $delimitersList;
    this._$ignoreCase = $ignoreCase;
  }
  _no_name_provided__3.prototype.invoke_w2qdfo_k$ = function ($this$$receiver, currentIndex) {
    var tmp0_safe_receiver = findAnyOf($this$$receiver, this._$delimitersList, currentIndex, this._$ignoreCase, false);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = to(tmp0_safe_receiver._first, tmp0_safe_receiver._second.length);
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  _no_name_provided__3.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isCharSequence(p1) : false) ? p1 : THROW_CCE();
    return this.invoke_w2qdfo_k$(tmp, (!(p2 == null) ? typeof p2 === 'number' : false) ? p2 : THROW_CCE());
  };
  _no_name_provided__3.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_1($delimitersList, $ignoreCase) {
    var i = new _no_name_provided__3($delimitersList, $ignoreCase);
    return function (p1, p2) {
      return i.invoke_w2qdfo_k$(p1, p2);
    };
  }
  function Pair(first_0, second) {
    this._first = first_0;
    this._second = second;
  }
  Pair.prototype.toString = function () {
    return '' + '(' + this._first + ', ' + this._second + ')';
  };
  Pair.prototype.component1_0_k$ = function () {
    return this._first;
  };
  Pair.prototype.component2_0_k$ = function () {
    return this._second;
  };
  Pair.prototype.hashCode = function () {
    var result = this._first == null ? 0 : hashCode(this._first);
    result = imul(result, 31) + (this._second == null ? 0 : hashCode(this._second)) | 0;
    return result;
  };
  Pair.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Pair))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Pair ? other : THROW_CCE();
    if (!equals_0(this._first, tmp0_other_with_cast._first))
      return false;
    if (!equals_0(this._second, tmp0_other_with_cast._second))
      return false;
    return true;
  };
  Pair.$metadata$ = {
    simpleName: 'Pair',
    kind: 'class',
    interfaces: [Serializable]
  };
  function to(_this_, that) {
    return new Pair(_this_, that);
  }
  function _UShort___init__impl_(data) {
    return data;
  }
  function _UShort___get_data__impl_(this_0) {
    return this_0;
  }
  function CharSequence() {
  }
  CharSequence.$metadata$ = {
    simpleName: 'CharSequence',
    kind: 'interface',
    interfaces: []
  };
  function Comparable() {
  }
  Comparable.$metadata$ = {
    simpleName: 'Comparable',
    kind: 'interface',
    interfaces: []
  };
  function Iterator() {
  }
  Iterator.$metadata$ = {
    simpleName: 'Iterator',
    kind: 'interface',
    interfaces: []
  };
  function MutableIterator() {
  }
  MutableIterator.$metadata$ = {
    simpleName: 'MutableIterator',
    kind: 'interface',
    interfaces: [Iterator]
  };
  function Number_0() {
  }
  Number_0.$metadata$ = {
    simpleName: 'Number',
    kind: 'class',
    interfaces: []
  };
  function IntIterator() {
  }
  IntIterator.prototype.next_0_k$ = function () {
    return this.nextInt_0_k$();
  };
  IntIterator.$metadata$ = {
    simpleName: 'IntIterator',
    kind: 'class',
    interfaces: [Iterator]
  };
  function IntProgressionIterator(first_0, last, step) {
    IntIterator.call(this);
    this._step = step;
    this._finalElement = last;
    this._hasNext = this._step > 0 ? first_0 <= last : first_0 >= last;
    this._next = this._hasNext ? first_0 : this._finalElement;
  }
  IntProgressionIterator.prototype.hasNext_0_k$ = function () {
    return this._hasNext;
  };
  IntProgressionIterator.prototype.nextInt_0_k$ = function () {
    var value = this._next;
    if (value === this._finalElement) {
      if (!this._hasNext)
        throw NoSuchElementException_init_$Create$();
      this._hasNext = false;
    } else {
      var tmp0_this = this;
      tmp0_this._next = tmp0_this._next + this._step | 0;
    }
    return value;
  };
  IntProgressionIterator.$metadata$ = {
    simpleName: 'IntProgressionIterator',
    kind: 'class',
    interfaces: []
  };
  function Companion_3() {
    Companion_instance_2 = this;
  }
  Companion_3.prototype.fromClosedRange_fcwjfj_k$ = function (rangeStart, rangeEnd, step) {
    return new IntProgression(rangeStart, rangeEnd, step);
  };
  Companion_3.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_3();
    return Companion_instance_2;
  }
  function IntProgression(start, endInclusive, step) {
    Companion_getInstance_2();
    if (step === 0)
      throw IllegalArgumentException_init_$Create$('Step must be non-zero.');
    if (step === IntCompanionObject_getInstance()._MIN_VALUE)
      throw IllegalArgumentException_init_$Create$('Step must be greater than Int.MIN_VALUE to avoid overflow on negation.');
    this._first_0 = start;
    this._last = getProgressionLastElement(start, endInclusive, step);
    this._step_0 = step;
  }
  IntProgression.prototype._get_first__0_k$ = function () {
    return this._first_0;
  };
  IntProgression.prototype._get_last__0_k$ = function () {
    return this._last;
  };
  IntProgression.prototype.iterator_0_k$ = function () {
    return new IntProgressionIterator(this._first_0, this._last, this._step_0);
  };
  IntProgression.prototype.isEmpty_0_k$ = function () {
    return this._step_0 > 0 ? this._first_0 > this._last : this._first_0 < this._last;
  };
  IntProgression.prototype.equals = function (other) {
    var tmp;
    if (other instanceof IntProgression) {
      tmp = (this.isEmpty_0_k$() ? other.isEmpty_0_k$() : false) ? true : (this._first_0 === other._first_0 ? this._last === other._last : false) ? this._step_0 === other._step_0 : false;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  IntProgression.prototype.hashCode = function () {
    return this.isEmpty_0_k$() ? -1 : imul(31, imul(31, this._first_0) + this._last | 0) + this._step_0 | 0;
  };
  IntProgression.prototype.toString = function () {
    return this._step_0 > 0 ? '' + this._first_0 + '..' + this._last + ' step ' + this._step_0 : '' + this._first_0 + ' downTo ' + this._last + ' step ' + (-this._step_0 | 0);
  };
  IntProgression.$metadata$ = {
    simpleName: 'IntProgression',
    kind: 'class',
    interfaces: [Iterable]
  };
  function ClosedRange() {
  }
  ClosedRange.$metadata$ = {
    simpleName: 'ClosedRange',
    kind: 'interface',
    interfaces: []
  };
  function Companion_4() {
    Companion_instance_3 = this;
    this._EMPTY = new IntRange(1, 0);
  }
  Companion_4.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_4();
    return Companion_instance_3;
  }
  function IntRange(start, endInclusive) {
    Companion_getInstance_3();
    IntProgression.call(this, start, endInclusive, 1);
  }
  IntRange.prototype._get_start__0_k$ = function () {
    return this._get_first__0_k$();
  };
  IntRange.prototype._get_endInclusive__0_k$ = function () {
    return this._get_last__0_k$();
  };
  IntRange.prototype.isEmpty_0_k$ = function () {
    return this._get_first__0_k$() > this._get_last__0_k$();
  };
  IntRange.prototype.equals = function (other) {
    var tmp;
    if (other instanceof IntRange) {
      tmp = (this.isEmpty_0_k$() ? other.isEmpty_0_k$() : false) ? true : this._get_first__0_k$() === other._get_first__0_k$() ? this._get_last__0_k$() === other._get_last__0_k$() : false;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  IntRange.prototype.hashCode = function () {
    return this.isEmpty_0_k$() ? -1 : imul(31, this._get_first__0_k$()) + this._get_last__0_k$() | 0;
  };
  IntRange.prototype.toString = function () {
    return '' + this._get_first__0_k$() + '..' + this._get_last__0_k$();
  };
  IntRange.$metadata$ = {
    simpleName: 'IntRange',
    kind: 'class',
    interfaces: [ClosedRange]
  };
  function Unit() {
    Unit_instance = this;
  }
  Unit.prototype.toString = function () {
    return 'kotlin.Unit';
  };
  Unit.$metadata$ = {
    simpleName: 'Unit',
    kind: 'object',
    interfaces: []
  };
  var Unit_instance;
  function Unit_getInstance() {
    if (Unit_instance == null)
      new Unit();
    return Unit_instance;
  }
  function getProgressionLastElement(start, end, step) {
    var tmp;
    if (step > 0) {
      tmp = start >= end ? end : end - differenceModulo(end, start, step) | 0;
    } else if (step < 0) {
      tmp = start <= end ? end : end + differenceModulo(start, end, -step | 0) | 0;
    } else {
      throw IllegalArgumentException_init_$Create$('Step is zero.');
    }
    return tmp;
  }
  function differenceModulo(a, b, c) {
    return mod(mod(a, c) - mod(b, c) | 0, c);
  }
  function mod(a, b) {
    var mod_0 = a % b;
    return mod_0 >= 0 ? mod_0 : mod_0 + b | 0;
  }
  function IntCompanionObject_0() {
    IntCompanionObject_instance = this;
    this._MIN_VALUE = -2147483648;
    this._MAX_VALUE = 2147483647;
    this._SIZE_BYTES = 4;
    this._SIZE_BITS = 32;
  }
  IntCompanionObject_0.prototype._get_MIN_VALUE__0_k$ = function () {
    return this._MIN_VALUE;
  };
  IntCompanionObject_0.prototype._get_MAX_VALUE__0_k$ = function () {
    return this._MAX_VALUE;
  };
  IntCompanionObject_0.prototype._get_SIZE_BYTES__0_k$ = function () {
    return this._SIZE_BYTES;
  };
  IntCompanionObject_0.prototype._get_SIZE_BITS__0_k$ = function () {
    return this._SIZE_BITS;
  };
  IntCompanionObject_0.$metadata$ = {
    simpleName: 'IntCompanionObject',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(IntCompanionObject_0.prototype, 'MIN_VALUE', {
    configurable: true,
    get: IntCompanionObject_0.prototype._get_MIN_VALUE__0_k$
  });
  Object.defineProperty(IntCompanionObject_0.prototype, 'MAX_VALUE', {
    configurable: true,
    get: IntCompanionObject_0.prototype._get_MAX_VALUE__0_k$
  });
  Object.defineProperty(IntCompanionObject_0.prototype, 'SIZE_BYTES', {
    configurable: true,
    get: IntCompanionObject_0.prototype._get_SIZE_BYTES__0_k$
  });
  Object.defineProperty(IntCompanionObject_0.prototype, 'SIZE_BITS', {
    configurable: true,
    get: IntCompanionObject_0.prototype._get_SIZE_BITS__0_k$
  });
  var IntCompanionObject_instance;
  function IntCompanionObject_getInstance() {
    if (IntCompanionObject_instance == null)
      new IntCompanionObject_0();
    return IntCompanionObject_instance;
  }
  function listOf(element) {
    return arrayListOf([element]);
  }
  function copyToArray_0(collection) {
    var tmp;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = collection;
      break $l$block;
    }
    if (tmp$ret$0.toArray !== undefined) {
      var tmp$ret$2;
      $l$block_1: {
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = collection;
          break $l$block_0;
        }
        var tmp0_unsafeCast_0 = tmp$ret$1.toArray();
        tmp$ret$2 = tmp0_unsafeCast_0;
        break $l$block_1;
      }
      tmp = tmp$ret$2;
    } else {
      {
        var tmp$ret$4;
        $l$block_3: {
          var tmp1_unsafeCast_0 = copyToArrayImpl_0(collection);
          var tmp$ret$3;
          $l$block_2: {
            tmp$ret$3 = tmp1_unsafeCast_0;
            break $l$block_2;
          }
          tmp$ret$4 = tmp$ret$3;
          break $l$block_3;
        }
        tmp = tmp$ret$4;
      }
    }
    return tmp;
  }
  function copyToArrayImpl_0(collection) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = [];
      break $l$block;
    }
    var array = tmp$ret$0;
    var iterator = collection.iterator_0_k$();
    while (iterator.hasNext_0_k$()) {
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = array;
        break $l$block_0;
      }
      tmp$ret$1.push(iterator.next_0_k$());
    }
    return array;
  }
  function AbstractMutableCollection() {
    AbstractCollection.call(this);
  }
  AbstractMutableCollection.prototype.toJSON = function () {
    return this.toArray();
  };
  AbstractMutableCollection.prototype.checkIsMutable_sv8swh_k$ = function () {
  };
  AbstractMutableCollection.$metadata$ = {
    simpleName: 'AbstractMutableCollection',
    kind: 'class',
    interfaces: [MutableCollection]
  };
  function IteratorImpl($outer) {
    this._$this = $outer;
    this._index = 0;
    this._last_0 = -1;
  }
  IteratorImpl.prototype.hasNext_0_k$ = function () {
    return this._index < this._$this._get_size__0_k$();
  };
  IteratorImpl.prototype.next_0_k$ = function () {
    if (!this.hasNext_0_k$())
      throw NoSuchElementException_init_$Create$();
    var tmp = this;
    var tmp0_this = this;
    var tmp1 = tmp0_this._index;
    tmp0_this._index = tmp1 + 1 | 0;
    tmp._last_0 = tmp1;
    return this._$this.get_ha5a7z_k$(this._last_0);
  };
  IteratorImpl.$metadata$ = {
    simpleName: 'IteratorImpl',
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function AbstractMutableList() {
    AbstractMutableCollection.call(this);
    this._modCount = 0;
  }
  AbstractMutableList.prototype._set_modCount__majfzk_k$ = function (_set___) {
    this._modCount = _set___;
  };
  AbstractMutableList.prototype._get_modCount__0_k$ = function () {
    return this._modCount;
  };
  AbstractMutableList.prototype.add_2bq_k$ = function (element) {
    this.checkIsMutable_sv8swh_k$();
    this.add_vz2mgm_k$(this._get_size__0_k$(), element);
    return true;
  };
  AbstractMutableList.prototype.iterator_0_k$ = function () {
    return new IteratorImpl(this);
  };
  AbstractMutableList.prototype.contains_2bq_k$ = function (element) {
    return this.indexOf_2bq_k$(element) >= 0;
  };
  AbstractMutableList.prototype.indexOf_2bq_k$ = function (element) {
    var inductionVariable = 0;
    var last = _get_lastIndex_(this);
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals_0(this.get_ha5a7z_k$(index), element)) {
          return index;
        }}
       while (!(index === last));
    return -1;
  };
  AbstractMutableList.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, List) : false))
      return false;
    else {
    }
    return Companion_getInstance().orderedEquals_tuq55s_k$(this, other);
  };
  AbstractMutableList.prototype.hashCode = function () {
    return Companion_getInstance().orderedHashCode_dxd51x_k$(this);
  };
  AbstractMutableList.$metadata$ = {
    simpleName: 'AbstractMutableList',
    kind: 'class',
    interfaces: [MutableList]
  };
  function AbstractEntrySet() {
    AbstractMutableSet.call(this);
  }
  AbstractEntrySet.prototype.contains_2bq_k$ = function (element) {
    return this.containsEntry_4v0zae_k$(element);
  };
  AbstractEntrySet.$metadata$ = {
    simpleName: 'AbstractEntrySet',
    kind: 'class',
    interfaces: []
  };
  function AbstractMutableMap() {
    AbstractMap.call(this);
    this.__keys_0 = null;
    this.__values_0 = null;
  }
  AbstractMutableMap.$metadata$ = {
    simpleName: 'AbstractMutableMap',
    kind: 'class',
    interfaces: [MutableMap]
  };
  function AbstractMutableSet() {
    AbstractMutableCollection.call(this);
  }
  AbstractMutableSet.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, Set) : false))
      return false;
    else {
    }
    return Companion_getInstance_1().setEquals_qlktm2_k$(this, other);
  };
  AbstractMutableSet.prototype.hashCode = function () {
    return Companion_getInstance_1().unorderedHashCode_dxd51x_k$(this);
  };
  AbstractMutableSet.$metadata$ = {
    simpleName: 'AbstractMutableSet',
    kind: 'class',
    interfaces: [MutableSet]
  };
  function ArrayList_init_$Init$($this) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = [];
      break $l$block;
    }
    ArrayList.call($this, tmp$ret$0);
    return $this;
  }
  function ArrayList_init_$Create$() {
    return ArrayList_init_$Init$(Object.create(ArrayList.prototype));
  }
  function ArrayList_init_$Init$_0(initialCapacity, $this) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = [];
      break $l$block;
    }
    ArrayList.call($this, tmp$ret$0);
    return $this;
  }
  function ArrayList_init_$Create$_0(initialCapacity) {
    return ArrayList_init_$Init$_0(initialCapacity, Object.create(ArrayList.prototype));
  }
  function ArrayList_init_$Init$_1(elements, $this) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = copyToArray_0(elements);
      break $l$block;
    }
    ArrayList.call($this, tmp$ret$0);
    return $this;
  }
  function ArrayList_init_$Create$_1(elements) {
    return ArrayList_init_$Init$_1(elements, Object.create(ArrayList.prototype));
  }
  function rangeCheck($this, index) {
    var tmp$ret$0;
    $l$block: {
      {
      }
      {
        Companion_getInstance().checkElementIndex_rvwcgf_k$(index, $this._get_size__0_k$());
      }
      tmp$ret$0 = index;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function insertionRangeCheck($this, index) {
    var tmp$ret$0;
    $l$block: {
      {
      }
      {
        Companion_getInstance().checkPositionIndex_rvwcgf_k$(index, $this._get_size__0_k$());
      }
      tmp$ret$0 = index;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function ArrayList(array) {
    AbstractMutableList.call(this);
    this._array = array;
    this._isReadOnly = false;
  }
  ArrayList.prototype._get_size__0_k$ = function () {
    return this._array.length;
  };
  ArrayList.prototype.get_ha5a7z_k$ = function (index) {
    var tmp = this._array[rangeCheck(this, index)];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  ArrayList.prototype.add_2bq_k$ = function (element) {
    this.checkIsMutable_sv8swh_k$();
    var tmp$ret$0;
    $l$block: {
      var tmp0_asDynamic_0 = this._array;
      tmp$ret$0 = tmp0_asDynamic_0;
      break $l$block;
    }
    tmp$ret$0.push(element);
    var tmp0_this = this;
    var tmp1 = tmp0_this._get_modCount__0_k$();
    tmp0_this._set_modCount__majfzk_k$(tmp1 + 1 | 0);
    Unit_getInstance();
    return true;
  };
  ArrayList.prototype.add_vz2mgm_k$ = function (index, element) {
    this.checkIsMutable_sv8swh_k$();
    var tmp$ret$0;
    $l$block: {
      var tmp0_asDynamic_0 = this._array;
      tmp$ret$0 = tmp0_asDynamic_0;
      break $l$block;
    }
    tmp$ret$0.splice(insertionRangeCheck(this, index), 0, element);
    var tmp0_this = this;
    var tmp1 = tmp0_this._get_modCount__0_k$();
    tmp0_this._set_modCount__majfzk_k$(tmp1 + 1 | 0);
    Unit_getInstance();
  };
  ArrayList.prototype.indexOf_2bq_k$ = function (element) {
    return indexOf(this._array, element);
  };
  ArrayList.prototype.toString = function () {
    return arrayToString(this._array);
  };
  ArrayList.prototype.toArray_0_k$ = function () {
    return [].slice.call(this._array);
  };
  ArrayList.prototype.toArray = function () {
    return this.toArray_0_k$();
  };
  ArrayList.prototype.checkIsMutable_sv8swh_k$ = function () {
    if (this._isReadOnly)
      throw UnsupportedOperationException_init_$Create$();
  };
  ArrayList.$metadata$ = {
    simpleName: 'ArrayList',
    kind: 'class',
    interfaces: [MutableList, RandomAccess]
  };
  function HashCode() {
    HashCode_instance = this;
  }
  HashCode.prototype.equals_rvz98i_k$ = function (value1, value2) {
    return equals_0(value1, value2);
  };
  HashCode.prototype.getHashCode_wi7j7l_k$ = function (value) {
    var tmp0_safe_receiver = value;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  HashCode.$metadata$ = {
    simpleName: 'HashCode',
    kind: 'object',
    interfaces: [EqualityComparator]
  };
  var HashCode_instance;
  function HashCode_getInstance() {
    if (HashCode_instance == null)
      new HashCode();
    return HashCode_instance;
  }
  function EqualityComparator() {
  }
  EqualityComparator.$metadata$ = {
    simpleName: 'EqualityComparator',
    kind: 'interface',
    interfaces: []
  };
  function EntrySet($outer) {
    this._$this_0 = $outer;
    AbstractEntrySet.call(this);
  }
  EntrySet.prototype.add_qbahou_k$ = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on entries');
  };
  EntrySet.prototype.add_2bq_k$ = function (element) {
    return this.add_qbahou_k$((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  EntrySet.prototype.containsEntry_4v0zae_k$ = function (element) {
    return this._$this_0.containsEntry_7gsh9e_k$(element);
  };
  EntrySet.prototype.iterator_0_k$ = function () {
    return this._$this_0._internalMap.iterator_0_k$();
  };
  EntrySet.prototype._get_size__0_k$ = function () {
    return this._$this_0._get_size__0_k$();
  };
  EntrySet.$metadata$ = {
    simpleName: 'EntrySet',
    kind: 'class',
    interfaces: []
  };
  function HashMap_init_$Init$(internalMap, $this) {
    AbstractMutableMap.call($this);
    HashMap.call($this);
    $this._internalMap = internalMap;
    $this._equality = internalMap._get_equality__0_k$();
    return $this;
  }
  function HashMap_init_$Init$_0($this) {
    HashMap_init_$Init$(new InternalHashCodeMap(HashCode_getInstance()), $this);
    return $this;
  }
  function HashMap_init_$Create$() {
    return HashMap_init_$Init$_0(Object.create(HashMap.prototype));
  }
  HashMap.prototype.containsKey_2bw_k$ = function (key) {
    return this._internalMap.contains_2bw_k$(key);
  };
  HashMap.prototype._get_entries__0_k$ = function () {
    if (this.__entries == null) {
      this.__entries = this.createEntrySet_0_k$();
    }return ensureNotNull(this.__entries);
  };
  HashMap.prototype.createEntrySet_0_k$ = function () {
    return new EntrySet(this);
  };
  HashMap.prototype.get_2bw_k$ = function (key) {
    return this._internalMap.get_2bw_k$(key);
  };
  HashMap.prototype._get_size__0_k$ = function () {
    return this._internalMap._get_size__0_k$();
  };
  function HashMap() {
    this.__entries = null;
  }
  HashMap.$metadata$ = {
    simpleName: 'HashMap',
    kind: 'class',
    interfaces: [MutableMap]
  };
  function computeNext($this) {
    if ($this._chainOrEntry != null ? $this._isChain : false) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_unsafeCast_0 = $this._chainOrEntry;
        tmp$ret$0 = tmp0_unsafeCast_0;
        break $l$block;
      }
      var chainSize = tmp$ret$0.length;
      var tmp0_this = $this;
      tmp0_this._itemIndex = tmp0_this._itemIndex + 1 | 0;
      if (tmp0_this._itemIndex < chainSize)
        return 0;
      else {
      }
    }var tmp1_this = $this;
    tmp1_this._keyIndex = tmp1_this._keyIndex + 1 | 0;
    if (tmp1_this._keyIndex < $this._keys.length) {
      $this._chainOrEntry = $this._this$0_2._backingMap[$this._keys[$this._keyIndex]];
      var tmp = $this;
      var tmp_0 = $this._chainOrEntry;
      tmp._isChain = !(tmp_0 == null) ? isArray(tmp_0) : false;
      $this._itemIndex = 0;
      return 0;
    } else {
      {
        $this._chainOrEntry = null;
        return 1;
      }
    }
  }
  function getEntry($this, key) {
    var tmp0_elvis_lhs = getChainOrEntryOrNull($this, $this._equality_0.getHashCode_wi7j7l_k$(key));
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var chainOrEntry = tmp;
    if (!(!(chainOrEntry == null) ? isArray(chainOrEntry) : false)) {
      var entry = chainOrEntry;
      if ($this._equality_0.equals_rvz98i_k$(entry._get_key__0_k$(), key)) {
        return entry;
      } else {
        return null;
      }
    } else {
      {
        var chain = chainOrEntry;
        return findEntryInChain(chain, $this, key);
      }
    }
  }
  function findEntryInChain(_this_, $this, key) {
    var tmp$ret$1;
    $l$block_1: {
      var indexedObject = _this_;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element_2 = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = $this._equality_0.equals_rvz98i_k$(element_2._get_key__0_k$(), key);
          break $l$block;
        }
        if (tmp$ret$0) {
          tmp$ret$1 = element_2;
          break $l$block_1;
        } else {
        }
      }
      tmp$ret$1 = null;
      break $l$block_1;
    }
    return tmp$ret$1;
  }
  function getChainOrEntryOrNull($this, hashCode_1) {
    var chainOrEntry = $this._backingMap[hashCode_1];
    return chainOrEntry === undefined ? null : chainOrEntry;
  }
  function _no_name_provided__4(this$0) {
    this._this$0_2 = this$0;
    this._state = -1;
    this._keys = Object.keys(this._this$0_2._backingMap);
    this._keyIndex = -1;
    this._chainOrEntry = null;
    this._isChain = false;
    this._itemIndex = -1;
    this._lastEntry = null;
  }
  _no_name_provided__4.prototype.hasNext_0_k$ = function () {
    if (this._state === -1)
      this._state = computeNext(this);
    return this._state === 0;
  };
  _no_name_provided__4.prototype.next_0_k$ = function () {
    if (!this.hasNext_0_k$())
      throw NoSuchElementException_init_$Create$();
    var tmp;
    if (this._isChain) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_unsafeCast_0 = this._chainOrEntry;
        tmp$ret$0 = tmp0_unsafeCast_0;
        break $l$block;
      }
      tmp = tmp$ret$0[this._itemIndex];
    } else {
      var tmp$ret$1;
      $l$block_0: {
        var tmp1_unsafeCast_0 = this._chainOrEntry;
        tmp$ret$1 = tmp1_unsafeCast_0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    }
    var lastEntry = tmp;
    this._lastEntry = lastEntry;
    this._state = -1;
    return lastEntry;
  };
  _no_name_provided__4.$metadata$ = {
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function InternalHashCodeMap(equality) {
    this._equality_0 = equality;
    this._backingMap = this.createJsMap_0_k$();
    this._size = 0;
  }
  InternalHashCodeMap.prototype._get_equality__0_k$ = function () {
    return this._equality_0;
  };
  InternalHashCodeMap.prototype._get_size__0_k$ = function () {
    return this._size;
  };
  InternalHashCodeMap.prototype.contains_2bw_k$ = function (key) {
    return !(getEntry(this, key) == null);
  };
  InternalHashCodeMap.prototype.get_2bw_k$ = function (key) {
    var tmp0_safe_receiver = getEntry(this, key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_value__0_k$();
  };
  InternalHashCodeMap.prototype.iterator_0_k$ = function () {
    return new _no_name_provided__4(this);
  };
  InternalHashCodeMap.$metadata$ = {
    simpleName: 'InternalHashCodeMap',
    kind: 'class',
    interfaces: [InternalMap]
  };
  function InternalMap() {
  }
  InternalMap.prototype.createJsMap_0_k$ = function () {
    var result = Object.create(null);
    result['foo'] = 1;
    jsDeleteProperty(result, 'foo');
    return result;
  };
  InternalMap.$metadata$ = {
    simpleName: 'InternalMap',
    kind: 'interface',
    interfaces: [MutableIterable]
  };
  function RandomAccess() {
  }
  RandomAccess.$metadata$ = {
    simpleName: 'RandomAccess',
    kind: 'interface',
    interfaces: []
  };
  function Serializable() {
  }
  Serializable.$metadata$ = {
    simpleName: 'Serializable',
    kind: 'interface',
    interfaces: []
  };
  function isNaN_0(_this_) {
    return !(_this_ === _this_);
  }
  function _get_js_(_this_) {
    return (_this_ instanceof KClassImpl ? _this_ : THROW_CCE())._get_jClass__0_k$();
  }
  function KClass() {
  }
  KClass.$metadata$ = {
    simpleName: 'KClass',
    kind: 'interface',
    interfaces: [KClassifier]
  };
  function KClassImpl(jClass) {
    this._jClass = jClass;
  }
  KClassImpl.prototype._get_jClass__0_k$ = function () {
    return this._jClass;
  };
  KClassImpl.prototype.equals = function (other) {
    var tmp;
    if (other instanceof KClassImpl) {
      tmp = equals_0(this._get_jClass__0_k$(), other._get_jClass__0_k$());
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  KClassImpl.prototype.hashCode = function () {
    var tmp0_safe_receiver = this._get_simpleName__0_k$();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  KClassImpl.prototype.toString = function () {
    return '' + 'class ' + this._get_simpleName__0_k$();
  };
  KClassImpl.$metadata$ = {
    simpleName: 'KClassImpl',
    kind: 'class',
    interfaces: [KClass]
  };
  function PrimitiveKClassImpl(jClass, givenSimpleName, isInstanceFunction) {
    KClassImpl.call(this, jClass);
    this._givenSimpleName = givenSimpleName;
    this._isInstanceFunction = isInstanceFunction;
  }
  PrimitiveKClassImpl.prototype.equals = function (other) {
    if (!(other instanceof PrimitiveKClassImpl))
      return false;
    else {
    }
    return KClassImpl.prototype.equals.call(this, other) ? this._givenSimpleName === other._givenSimpleName : false;
  };
  PrimitiveKClassImpl.prototype._get_simpleName__0_k$ = function () {
    return this._givenSimpleName;
  };
  PrimitiveKClassImpl.$metadata$ = {
    simpleName: 'PrimitiveKClassImpl',
    kind: 'class',
    interfaces: []
  };
  function NothingKClassImpl() {
    NothingKClassImpl_instance = this;
    KClassImpl.call(this, Object);
    this._simpleName = 'Nothing';
  }
  NothingKClassImpl.prototype._get_simpleName__0_k$ = function () {
    return this._simpleName;
  };
  NothingKClassImpl.prototype._get_jClass__0_k$ = function () {
    throw UnsupportedOperationException_init_$Create$_0("There's no native JS class for Nothing type");
  };
  NothingKClassImpl.prototype.equals = function (other) {
    return other === this;
  };
  NothingKClassImpl.prototype.hashCode = function () {
    return 0;
  };
  NothingKClassImpl.$metadata$ = {
    simpleName: 'NothingKClassImpl',
    kind: 'object',
    interfaces: []
  };
  var NothingKClassImpl_instance;
  function NothingKClassImpl_getInstance() {
    if (NothingKClassImpl_instance == null)
      new NothingKClassImpl();
    return NothingKClassImpl_instance;
  }
  function ErrorKClass() {
  }
  ErrorKClass.prototype.equals = function (other) {
    return other === this;
  };
  ErrorKClass.prototype.hashCode = function () {
    return 0;
  };
  ErrorKClass.$metadata$ = {
    simpleName: 'ErrorKClass',
    kind: 'class',
    interfaces: [KClass]
  };
  function SimpleKClassImpl(jClass) {
    KClassImpl.call(this, jClass);
    var tmp = this;
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = jClass;
        break $l$block;
      }
      var tmp0_safe_receiver = tmp$ret$0.$metadata$;
      var tmp0_unsafeCast_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.simpleName;
      tmp$ret$1 = tmp0_unsafeCast_0;
      break $l$block_0;
    }
    tmp._simpleName_0 = tmp$ret$1;
  }
  SimpleKClassImpl.prototype._get_simpleName__0_k$ = function () {
    return this._simpleName_0;
  };
  SimpleKClassImpl.$metadata$ = {
    simpleName: 'SimpleKClassImpl',
    kind: 'class',
    interfaces: []
  };
  var functionClasses;
  function _no_name_provided__5() {
  }
  _no_name_provided__5.prototype.invoke_wi7j7l_k$ = function (it) {
    return isObject(it);
  };
  _no_name_provided__5.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__5.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__6() {
  }
  _no_name_provided__6.prototype.invoke_wi7j7l_k$ = function (it) {
    return isNumber(it);
  };
  _no_name_provided__6.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__6.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__7() {
  }
  _no_name_provided__7.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? typeof it === 'boolean' : false;
  };
  _no_name_provided__7.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__7.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__8() {
  }
  _no_name_provided__8.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__8.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__8.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__9() {
  }
  _no_name_provided__9.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__9.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__9.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__10() {
  }
  _no_name_provided__10.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__10.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__10.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__11() {
  }
  _no_name_provided__11.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__11.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__11.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__12() {
  }
  _no_name_provided__12.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__12.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__12.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__13() {
  }
  _no_name_provided__13.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isArray(it) : false;
  };
  _no_name_provided__13.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__13.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__14() {
  }
  _no_name_provided__14.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? typeof it === 'string' : false;
  };
  _no_name_provided__14.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__14.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__15() {
  }
  _no_name_provided__15.prototype.invoke_wi7j7l_k$ = function (it) {
    return it instanceof Error;
  };
  _no_name_provided__15.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__15.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__16() {
  }
  _no_name_provided__16.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isBooleanArray(it) : false;
  };
  _no_name_provided__16.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__16.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__17() {
  }
  _no_name_provided__17.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isCharArray(it) : false;
  };
  _no_name_provided__17.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__17.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__18() {
  }
  _no_name_provided__18.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isByteArray(it) : false;
  };
  _no_name_provided__18.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__18.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__19() {
  }
  _no_name_provided__19.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isShortArray(it) : false;
  };
  _no_name_provided__19.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__19.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__20() {
  }
  _no_name_provided__20.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isIntArray(it) : false;
  };
  _no_name_provided__20.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__20.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__21() {
  }
  _no_name_provided__21.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isLongArray(it) : false;
  };
  _no_name_provided__21.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__21.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__22() {
  }
  _no_name_provided__22.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isFloatArray(it) : false;
  };
  _no_name_provided__22.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__22.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__23() {
  }
  _no_name_provided__23.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isDoubleArray(it) : false;
  };
  _no_name_provided__23.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__23.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__24($arity) {
    this._$arity = $arity;
  }
  _no_name_provided__24.prototype.invoke_wi7j7l_k$ = function (it) {
    var tmp;
    if (typeof it === 'function') {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = it;
        break $l$block;
      }
      tmp = tmp$ret$0.length === this._$arity;
    } else {
      tmp = false;
    }
    return tmp;
  };
  _no_name_provided__24.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__24.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function PrimitiveClasses_0() {
    PrimitiveClasses_instance = this;
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = Object;
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    var tmp_0 = tmp$ret$0;
    tmp._anyClass = new PrimitiveKClassImpl(tmp_0, 'Any', _no_name_provided_$factory_2());
    var tmp_1 = this;
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_unsafeCast_0_0 = Number;
      tmp$ret$1 = tmp0_unsafeCast_0_0;
      break $l$block_0;
    }
    var tmp_2 = tmp$ret$1;
    tmp_1._numberClass = new PrimitiveKClassImpl(tmp_2, 'Number', _no_name_provided_$factory_3());
    this._nothingClass = NothingKClassImpl_getInstance();
    var tmp_3 = this;
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_unsafeCast_0_1 = Boolean;
      tmp$ret$2 = tmp0_unsafeCast_0_1;
      break $l$block_1;
    }
    var tmp_4 = tmp$ret$2;
    tmp_3._booleanClass = new PrimitiveKClassImpl(tmp_4, 'Boolean', _no_name_provided_$factory_4());
    var tmp_5 = this;
    var tmp$ret$3;
    $l$block_2: {
      var tmp0_unsafeCast_0_2 = Number;
      tmp$ret$3 = tmp0_unsafeCast_0_2;
      break $l$block_2;
    }
    var tmp_6 = tmp$ret$3;
    tmp_5._byteClass = new PrimitiveKClassImpl(tmp_6, 'Byte', _no_name_provided_$factory_5());
    var tmp_7 = this;
    var tmp$ret$4;
    $l$block_3: {
      var tmp0_unsafeCast_0_3 = Number;
      tmp$ret$4 = tmp0_unsafeCast_0_3;
      break $l$block_3;
    }
    var tmp_8 = tmp$ret$4;
    tmp_7._shortClass = new PrimitiveKClassImpl(tmp_8, 'Short', _no_name_provided_$factory_6());
    var tmp_9 = this;
    var tmp$ret$5;
    $l$block_4: {
      var tmp0_unsafeCast_0_4 = Number;
      tmp$ret$5 = tmp0_unsafeCast_0_4;
      break $l$block_4;
    }
    var tmp_10 = tmp$ret$5;
    tmp_9._intClass = new PrimitiveKClassImpl(tmp_10, 'Int', _no_name_provided_$factory_7());
    var tmp_11 = this;
    var tmp$ret$6;
    $l$block_5: {
      var tmp0_unsafeCast_0_5 = Number;
      tmp$ret$6 = tmp0_unsafeCast_0_5;
      break $l$block_5;
    }
    var tmp_12 = tmp$ret$6;
    tmp_11._floatClass = new PrimitiveKClassImpl(tmp_12, 'Float', _no_name_provided_$factory_8());
    var tmp_13 = this;
    var tmp$ret$7;
    $l$block_6: {
      var tmp0_unsafeCast_0_6 = Number;
      tmp$ret$7 = tmp0_unsafeCast_0_6;
      break $l$block_6;
    }
    var tmp_14 = tmp$ret$7;
    tmp_13._doubleClass = new PrimitiveKClassImpl(tmp_14, 'Double', _no_name_provided_$factory_9());
    var tmp_15 = this;
    var tmp$ret$8;
    $l$block_7: {
      var tmp0_unsafeCast_0_7 = Array;
      tmp$ret$8 = tmp0_unsafeCast_0_7;
      break $l$block_7;
    }
    var tmp_16 = tmp$ret$8;
    tmp_15._arrayClass = new PrimitiveKClassImpl(tmp_16, 'Array', _no_name_provided_$factory_10());
    var tmp_17 = this;
    var tmp$ret$9;
    $l$block_8: {
      var tmp0_unsafeCast_0_8 = String;
      tmp$ret$9 = tmp0_unsafeCast_0_8;
      break $l$block_8;
    }
    var tmp_18 = tmp$ret$9;
    tmp_17._stringClass = new PrimitiveKClassImpl(tmp_18, 'String', _no_name_provided_$factory_11());
    var tmp_19 = this;
    var tmp$ret$10;
    $l$block_9: {
      var tmp0_unsafeCast_0_9 = Error;
      tmp$ret$10 = tmp0_unsafeCast_0_9;
      break $l$block_9;
    }
    var tmp_20 = tmp$ret$10;
    tmp_19._throwableClass = new PrimitiveKClassImpl(tmp_20, 'Throwable', _no_name_provided_$factory_12());
    var tmp_21 = this;
    var tmp$ret$11;
    $l$block_10: {
      var tmp0_unsafeCast_0_10 = Array;
      tmp$ret$11 = tmp0_unsafeCast_0_10;
      break $l$block_10;
    }
    var tmp_22 = tmp$ret$11;
    tmp_21._booleanArrayClass = new PrimitiveKClassImpl(tmp_22, 'BooleanArray', _no_name_provided_$factory_13());
    var tmp_23 = this;
    var tmp$ret$12;
    $l$block_11: {
      var tmp0_unsafeCast_0_11 = Uint16Array;
      tmp$ret$12 = tmp0_unsafeCast_0_11;
      break $l$block_11;
    }
    var tmp_24 = tmp$ret$12;
    tmp_23._charArrayClass = new PrimitiveKClassImpl(tmp_24, 'CharArray', _no_name_provided_$factory_14());
    var tmp_25 = this;
    var tmp$ret$13;
    $l$block_12: {
      var tmp0_unsafeCast_0_12 = Int8Array;
      tmp$ret$13 = tmp0_unsafeCast_0_12;
      break $l$block_12;
    }
    var tmp_26 = tmp$ret$13;
    tmp_25._byteArrayClass = new PrimitiveKClassImpl(tmp_26, 'ByteArray', _no_name_provided_$factory_15());
    var tmp_27 = this;
    var tmp$ret$14;
    $l$block_13: {
      var tmp0_unsafeCast_0_13 = Int16Array;
      tmp$ret$14 = tmp0_unsafeCast_0_13;
      break $l$block_13;
    }
    var tmp_28 = tmp$ret$14;
    tmp_27._shortArrayClass = new PrimitiveKClassImpl(tmp_28, 'ShortArray', _no_name_provided_$factory_16());
    var tmp_29 = this;
    var tmp$ret$15;
    $l$block_14: {
      var tmp0_unsafeCast_0_14 = Int32Array;
      tmp$ret$15 = tmp0_unsafeCast_0_14;
      break $l$block_14;
    }
    var tmp_30 = tmp$ret$15;
    tmp_29._intArrayClass = new PrimitiveKClassImpl(tmp_30, 'IntArray', _no_name_provided_$factory_17());
    var tmp_31 = this;
    var tmp$ret$16;
    $l$block_15: {
      var tmp0_unsafeCast_0_15 = Array;
      tmp$ret$16 = tmp0_unsafeCast_0_15;
      break $l$block_15;
    }
    var tmp_32 = tmp$ret$16;
    tmp_31._longArrayClass = new PrimitiveKClassImpl(tmp_32, 'LongArray', _no_name_provided_$factory_18());
    var tmp_33 = this;
    var tmp$ret$17;
    $l$block_16: {
      var tmp0_unsafeCast_0_16 = Float32Array;
      tmp$ret$17 = tmp0_unsafeCast_0_16;
      break $l$block_16;
    }
    var tmp_34 = tmp$ret$17;
    tmp_33._floatArrayClass = new PrimitiveKClassImpl(tmp_34, 'FloatArray', _no_name_provided_$factory_19());
    var tmp_35 = this;
    var tmp$ret$18;
    $l$block_17: {
      var tmp0_unsafeCast_0_17 = Float64Array;
      tmp$ret$18 = tmp0_unsafeCast_0_17;
      break $l$block_17;
    }
    var tmp_36 = tmp$ret$18;
    tmp_35._doubleArrayClass = new PrimitiveKClassImpl(tmp_36, 'DoubleArray', _no_name_provided_$factory_20());
  }
  PrimitiveClasses_0.prototype._get_anyClass__0_k$ = function () {
    return this._anyClass;
  };
  PrimitiveClasses_0.prototype._get_numberClass__0_k$ = function () {
    return this._numberClass;
  };
  PrimitiveClasses_0.prototype._get_nothingClass__0_k$ = function () {
    return this._nothingClass;
  };
  PrimitiveClasses_0.prototype._get_booleanClass__0_k$ = function () {
    return this._booleanClass;
  };
  PrimitiveClasses_0.prototype._get_byteClass__0_k$ = function () {
    return this._byteClass;
  };
  PrimitiveClasses_0.prototype._get_shortClass__0_k$ = function () {
    return this._shortClass;
  };
  PrimitiveClasses_0.prototype._get_intClass__0_k$ = function () {
    return this._intClass;
  };
  PrimitiveClasses_0.prototype._get_floatClass__0_k$ = function () {
    return this._floatClass;
  };
  PrimitiveClasses_0.prototype._get_doubleClass__0_k$ = function () {
    return this._doubleClass;
  };
  PrimitiveClasses_0.prototype._get_arrayClass__0_k$ = function () {
    return this._arrayClass;
  };
  PrimitiveClasses_0.prototype._get_stringClass__0_k$ = function () {
    return this._stringClass;
  };
  PrimitiveClasses_0.prototype._get_throwableClass__0_k$ = function () {
    return this._throwableClass;
  };
  PrimitiveClasses_0.prototype._get_booleanArrayClass__0_k$ = function () {
    return this._booleanArrayClass;
  };
  PrimitiveClasses_0.prototype._get_charArrayClass__0_k$ = function () {
    return this._charArrayClass;
  };
  PrimitiveClasses_0.prototype._get_byteArrayClass__0_k$ = function () {
    return this._byteArrayClass;
  };
  PrimitiveClasses_0.prototype._get_shortArrayClass__0_k$ = function () {
    return this._shortArrayClass;
  };
  PrimitiveClasses_0.prototype._get_intArrayClass__0_k$ = function () {
    return this._intArrayClass;
  };
  PrimitiveClasses_0.prototype._get_longArrayClass__0_k$ = function () {
    return this._longArrayClass;
  };
  PrimitiveClasses_0.prototype._get_floatArrayClass__0_k$ = function () {
    return this._floatArrayClass;
  };
  PrimitiveClasses_0.prototype._get_doubleArrayClass__0_k$ = function () {
    return this._doubleArrayClass;
  };
  PrimitiveClasses_0.prototype.functionClass = function (arity) {
    var tmp0_elvis_lhs = functionClasses[arity];
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$3;
      $l$block_2: {
        {
        }
        var tmp$ret$2;
        $l$block_1: {
          var tmp$ret$0;
          $l$block: {
            var tmp0_unsafeCast_0_3 = Function;
            tmp$ret$0 = tmp0_unsafeCast_0_3;
            break $l$block;
          }
          var tmp_0 = tmp$ret$0;
          var tmp_1 = '' + 'Function' + arity;
          var result_2 = new PrimitiveKClassImpl(tmp_0, tmp_1, _no_name_provided_$factory_21(arity));
          var tmp$ret$1;
          $l$block_0: {
            var tmp1_asDynamic_0_5 = functionClasses;
            tmp$ret$1 = tmp1_asDynamic_0_5;
            break $l$block_0;
          }
          tmp$ret$1[arity] = result_2;
          tmp$ret$2 = result_2;
          break $l$block_1;
        }
        tmp$ret$3 = tmp$ret$2;
        break $l$block_2;
      }
      tmp = tmp$ret$3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  PrimitiveClasses_0.$metadata$ = {
    simpleName: 'PrimitiveClasses',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(PrimitiveClasses_0.prototype, 'anyClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_anyClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'numberClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_numberClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'nothingClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_nothingClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'booleanClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_booleanClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'byteClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_byteClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'shortClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_shortClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'intClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_intClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'floatClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_floatClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'doubleClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_doubleClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'arrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_arrayClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'stringClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_stringClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'throwableClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_throwableClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'booleanArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_booleanArrayClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'charArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_charArrayClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'byteArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_byteArrayClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'shortArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_shortArrayClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'intArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_intArrayClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'longArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_longArrayClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'floatArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_floatArrayClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'doubleArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_doubleArrayClass__0_k$
  });
  var PrimitiveClasses_instance;
  function PrimitiveClasses_getInstance() {
    if (PrimitiveClasses_instance == null)
      new PrimitiveClasses_0();
    return PrimitiveClasses_instance;
  }
  function _no_name_provided_$factory_2() {
    var i = new _no_name_provided__5();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_3() {
    var i = new _no_name_provided__6();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_4() {
    var i = new _no_name_provided__7();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_5() {
    var i = new _no_name_provided__8();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_6() {
    var i = new _no_name_provided__9();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_7() {
    var i = new _no_name_provided__10();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_8() {
    var i = new _no_name_provided__11();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_9() {
    var i = new _no_name_provided__12();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_10() {
    var i = new _no_name_provided__13();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_11() {
    var i = new _no_name_provided__14();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_12() {
    var i = new _no_name_provided__15();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_13() {
    var i = new _no_name_provided__16();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_14() {
    var i = new _no_name_provided__17();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_15() {
    var i = new _no_name_provided__18();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_16() {
    var i = new _no_name_provided__19();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_17() {
    var i = new _no_name_provided__20();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_18() {
    var i = new _no_name_provided__21();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_19() {
    var i = new _no_name_provided__22();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_20() {
    var i = new _no_name_provided__23();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_21($arity) {
    var i = new _no_name_provided__24($arity);
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function functionClasses$init$() {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = fillArrayVal(Array(0), null);
      break $l$block;
    }
    return tmp$ret$0;
  }
  function getKClass_0(jClass) {
    var tmp;
    if (Array.isArray(jClass)) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = jClass;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp = getKClassM_0(tmp$ret$1);
    } else {
      var tmp$ret$3;
      $l$block_2: {
        var tmp$ret$2;
        $l$block_1: {
          tmp$ret$2 = jClass;
          break $l$block_1;
        }
        tmp$ret$3 = tmp$ret$2;
        break $l$block_2;
      }
      tmp = getKClass1_0(tmp$ret$3);
    }
    return tmp;
  }
  function getKClassM_0(jClasses) {
    var tmp0_subject = jClasses.length;
    var tmp;
    switch (tmp0_subject) {
      case 1:
        tmp = getKClass1_0(jClasses[0]);
        break;
      case 0:
        var tmp$ret$1;
        $l$block_0: {
          var tmp0_unsafeCast_0 = NothingKClassImpl_getInstance();
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = tmp0_unsafeCast_0;
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }

        tmp = tmp$ret$1;
        break;
      default:var tmp$ret$3;
        $l$block_2: {
          var tmp1_unsafeCast_0 = new ErrorKClass();
          var tmp$ret$2;
          $l$block_1: {
            tmp$ret$2 = tmp1_unsafeCast_0;
            break $l$block_1;
          }
          tmp$ret$3 = tmp$ret$2;
          break $l$block_2;
        }

        tmp = tmp$ret$3;
        break;
    }
    return tmp;
  }
  function getKClass1_0(jClass) {
    if (jClass === String) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_unsafeCast_0 = PrimitiveClasses_getInstance()._stringClass;
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = tmp0_unsafeCast_0;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      return tmp$ret$1;
    }var tmp$ret$2;
    $l$block_1: {
      tmp$ret$2 = jClass;
      break $l$block_1;
    }
    var metadata = tmp$ret$2.$metadata$;
    var tmp;
    if (metadata != null) {
      var tmp_0;
      if (metadata.$kClass$ == null) {
        var kClass = new SimpleKClassImpl(jClass);
        metadata.$kClass$ = kClass;
        tmp_0 = kClass;
      } else {
        tmp_0 = metadata.$kClass$;
      }
      tmp = tmp_0;
    } else {
      tmp = new SimpleKClassImpl(jClass);
    }
    return tmp;
  }
  function getKClassFromExpression_0(e) {
    var tmp$ret$3;
    $l$block_2: {
      var tmp0_subject = typeof e;
      var tmp;
      switch (tmp0_subject) {
        case 'string':
          tmp = PrimitiveClasses_getInstance()._stringClass;
          break;
        case 'number':
          var tmp_0;
          var tmp$ret$0;
          $l$block: {
            var tmp0_asDynamic_0 = jsBitwiseOr(e, 0);
            tmp$ret$0 = tmp0_asDynamic_0;
            break $l$block;
          }

          if (tmp$ret$0 === e) {
            tmp_0 = PrimitiveClasses_getInstance()._intClass;
          } else {
            {
              tmp_0 = PrimitiveClasses_getInstance()._doubleClass;
            }
          }

          tmp = tmp_0;
          break;
        case 'boolean':
          tmp = PrimitiveClasses_getInstance()._booleanClass;
          break;
        case 'function':
          var tmp_1 = PrimitiveClasses_getInstance();
          var tmp$ret$1;
          $l$block_0: {
            tmp$ret$1 = e;
            break $l$block_0;
          }

          tmp = tmp_1.functionClass(tmp$ret$1.length);
          break;
        default:var tmp_2;
          if (isBooleanArray(e)) {
            tmp_2 = PrimitiveClasses_getInstance()._booleanArrayClass;
          } else {
            if (isCharArray(e)) {
              tmp_2 = PrimitiveClasses_getInstance()._charArrayClass;
            } else {
              if (isByteArray(e)) {
                tmp_2 = PrimitiveClasses_getInstance()._byteArrayClass;
              } else {
                if (isShortArray(e)) {
                  tmp_2 = PrimitiveClasses_getInstance()._shortArrayClass;
                } else {
                  if (isIntArray(e)) {
                    tmp_2 = PrimitiveClasses_getInstance()._intArrayClass;
                  } else {
                    if (isLongArray(e)) {
                      tmp_2 = PrimitiveClasses_getInstance()._longArrayClass;
                    } else {
                      if (isFloatArray(e)) {
                        tmp_2 = PrimitiveClasses_getInstance()._floatArrayClass;
                      } else {
                        if (isDoubleArray(e)) {
                          tmp_2 = PrimitiveClasses_getInstance()._doubleArrayClass;
                        } else {
                          if (isInterface(e, KClass)) {
                            tmp_2 = getKClass_0(KClass);
                          } else {
                            if (isArray(e)) {
                              tmp_2 = PrimitiveClasses_getInstance()._arrayClass;
                            } else {
                              {
                                var constructor = Object.getPrototypeOf(e).constructor;
                                var tmp_3;
                                if (constructor === Object) {
                                  tmp_3 = PrimitiveClasses_getInstance()._anyClass;
                                } else if (constructor === Error) {
                                  tmp_3 = PrimitiveClasses_getInstance()._throwableClass;
                                } else {
                                  var jsClass = constructor;
                                  tmp_3 = getKClass1_0(jsClass);
                                }
                                tmp_2 = tmp_3;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }

          tmp = tmp_2;
          break;
      }
      var tmp1_unsafeCast_0 = tmp;
      var tmp$ret$2;
      $l$block_1: {
        tmp$ret$2 = tmp1_unsafeCast_0;
        break $l$block_1;
      }
      tmp$ret$3 = tmp$ret$2;
      break $l$block_2;
    }
    return tmp$ret$3;
  }
  function Appendable() {
  }
  Appendable.$metadata$ = {
    simpleName: 'Appendable',
    kind: 'interface',
    interfaces: []
  };
  function StringBuilder_init_$Init$($this) {
    StringBuilder.call($this, '');
    return $this;
  }
  function StringBuilder_init_$Create$() {
    return StringBuilder_init_$Init$(Object.create(StringBuilder.prototype));
  }
  function StringBuilder(content) {
    this._string = !(content === undefined) ? content : '';
  }
  StringBuilder.prototype._get_length__0_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_asDynamic_0 = this._string;
      tmp$ret$0 = tmp0_asDynamic_0;
      break $l$block;
    }
    return tmp$ret$0.length;
  };
  StringBuilder.prototype.get_ha5a7z_k$ = function (index) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_getOrElse_0 = this._string;
      var tmp;
      if (index >= 0 ? index <= _get_lastIndex__0(tmp0_getOrElse_0) : false) {
        tmp = charSequenceGet(tmp0_getOrElse_0, index);
      } else {
        throw IndexOutOfBoundsException_init_$Create$('' + 'index: ' + index + ', length: ' + this._get_length__0_k$() + '}');
      }
      tmp$ret$0 = tmp;
      break $l$block;
    }
    return tmp$ret$0;
  };
  StringBuilder.prototype.subSequence_27zxwg_k$ = function (startIndex, endIndex) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_substring_0 = this._string;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_substring_0;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0.substring(startIndex, endIndex);
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  StringBuilder.prototype.append_wi8o78_k$ = function (value) {
    var tmp0_this = this;
    tmp0_this._string = tmp0_this._string + value;
    return this;
  };
  StringBuilder.prototype.append_v1o70a_k$ = function (value) {
    var tmp0_this = this;
    tmp0_this._string = tmp0_this._string + toString_0(value);
    return this;
  };
  StringBuilder.prototype.toString = function () {
    return this._string;
  };
  StringBuilder.$metadata$ = {
    simpleName: 'StringBuilder',
    kind: 'class',
    interfaces: [Appendable, CharSequence]
  };
  function uppercaseChar(_this_) {
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          var tmp0_asDynamic_0 = _this_.toString();
          tmp$ret$0 = tmp0_asDynamic_0;
          break $l$block;
        }
        var tmp1_unsafeCast_0 = tmp$ret$0.toUpperCase();
        tmp$ret$1 = tmp1_unsafeCast_0;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    var uppercase = tmp$ret$2;
    return uppercase.length > 1 ? _this_ : charSequenceGet(uppercase, 0);
  }
  function regionMatches(_this_, thisOffset, other, otherOffset, length, ignoreCase) {
    return regionMatchesImpl(_this_, thisOffset, other, otherOffset, length, ignoreCase);
  }
  function Companion_5() {
    Companion_instance_4 = this;
    this._MIN_VALUE_0 = new Char(0);
    this._MAX_VALUE_0 = new Char(65535);
    this._MIN_HIGH_SURROGATE = new Char(55296);
    this._MAX_HIGH_SURROGATE = new Char(56319);
    this._MIN_LOW_SURROGATE = new Char(56320);
    this._MAX_LOW_SURROGATE = new Char(57343);
    this._MIN_SURROGATE = new Char(55296);
    this._MAX_SURROGATE = new Char(57343);
    this._SIZE_BYTES_0 = 2;
    this._SIZE_BITS_0 = 16;
  }
  Companion_5.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_5();
    return Companion_instance_4;
  }
  function Char(code) {
    Companion_getInstance_4();
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _UShort___get_data__impl_(code) & 65535;
      break $l$block;
    }
    tmp._value = tmp$ret$0;
  }
  Char.prototype.toInt_0_k$ = function () {
    return this._value;
  };
  Char.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Char))
      return false;
    else {
    }
    return this._value === other._value;
  };
  Char.prototype.hashCode = function () {
    return this._value;
  };
  Char.prototype.toString = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = String.fromCharCode(this._value);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  };
  Char.$metadata$ = {
    simpleName: 'Char',
    kind: 'class',
    interfaces: [Comparable]
  };
  function Iterable() {
  }
  Iterable.$metadata$ = {
    simpleName: 'Iterable',
    kind: 'interface',
    interfaces: []
  };
  function Entry() {
  }
  Entry.$metadata$ = {
    simpleName: 'Entry',
    kind: 'interface',
    interfaces: []
  };
  function Map_0() {
  }
  Map_0.$metadata$ = {
    simpleName: 'Map',
    kind: 'interface',
    interfaces: []
  };
  function List() {
  }
  List.$metadata$ = {
    simpleName: 'List',
    kind: 'interface',
    interfaces: [Collection]
  };
  function MutableList() {
  }
  MutableList.$metadata$ = {
    simpleName: 'MutableList',
    kind: 'interface',
    interfaces: [List, MutableCollection]
  };
  function MutableSet() {
  }
  MutableSet.$metadata$ = {
    simpleName: 'MutableSet',
    kind: 'interface',
    interfaces: [Set, MutableCollection]
  };
  function Set() {
  }
  Set.$metadata$ = {
    simpleName: 'Set',
    kind: 'interface',
    interfaces: [Collection]
  };
  function MutableEntry() {
  }
  MutableEntry.$metadata$ = {
    simpleName: 'MutableEntry',
    kind: 'interface',
    interfaces: [Entry]
  };
  function MutableMap() {
  }
  MutableMap.$metadata$ = {
    simpleName: 'MutableMap',
    kind: 'interface',
    interfaces: [Map_0]
  };
  function Collection() {
  }
  Collection.$metadata$ = {
    simpleName: 'Collection',
    kind: 'interface',
    interfaces: [Iterable]
  };
  function MutableCollection() {
  }
  MutableCollection.$metadata$ = {
    simpleName: 'MutableCollection',
    kind: 'interface',
    interfaces: [Collection, MutableIterable]
  };
  function MutableIterable() {
  }
  MutableIterable.$metadata$ = {
    simpleName: 'MutableIterable',
    kind: 'interface',
    interfaces: [Iterable]
  };
  function toString_0(_this_) {
    var tmp0_safe_receiver = _this_;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toString_1(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs;
  }
  function fillArrayVal(array, initValue) {
    var inductionVariable = 0;
    var last = array.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        array[i] = initValue;
      }
       while (!(i === last));
    return array;
  }
  function arrayIterator(array) {
    return new _no_name_provided__25(array);
  }
  function _no_name_provided__25($array) {
    this._$array = $array;
    this._index_0 = 0;
  }
  _no_name_provided__25.prototype.hasNext_0_k$ = function () {
    return !(this._index_0 === this._$array.length);
  };
  _no_name_provided__25.prototype.next_0_k$ = function () {
    var tmp;
    if (!(this._index_0 === this._$array.length)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this._index_0;
      tmp0_this._index_0 = tmp1 + 1 | 0;
      tmp = this._$array[tmp1];
    } else {
      throw NoSuchElementException_init_$Create$_0('' + this._index_0);
    }
    return tmp;
  };
  _no_name_provided__25.$metadata$ = {
    kind: 'class',
    interfaces: [Iterator]
  };
  var buf;
  var bufFloat64;
  var bufInt32;
  var lowIndex;
  var highIndex;
  function getNumberHashCode(obj) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_unsafeCast_0 = jsBitwiseOr(obj, 0);
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_unsafeCast_0;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    if (tmp$ret$1 === obj) {
      return numberToInt(obj);
    } else {
    }
    bufFloat64[0] = obj;
    return imul(bufInt32[highIndex], 31) + bufInt32[lowIndex] | 0;
  }
  function bufFloat64$init$() {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_unsafeCast_0 = new Float64Array(buf);
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_unsafeCast_0;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  }
  function bufInt32$init$() {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_unsafeCast_0 = new Int32Array(buf);
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_unsafeCast_0;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  }
  function lowIndex$init$() {
    var tmp$ret$1;
    $l$block_0: {
      {
      }
      var tmp$ret$0;
      $l$block: {
        bufFloat64[0] = -1.0;
        tmp$ret$0 = !(bufInt32[0] === 0) ? 1 : 0;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  }
  function charSequenceGet(a, index) {
    var tmp;
    if (isString(a)) {
      var tmp$ret$4;
      $l$block_3: {
        var tmp$ret$1;
        $l$block_0: {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = a;
            break $l$block;
          }
          var tmp0_unsafeCast_0 = tmp$ret$0.charCodeAt(index);
          tmp$ret$1 = tmp0_unsafeCast_0;
          break $l$block_0;
        }
        var tmp1_Char_0 = tmp$ret$1;
        var tmp_0;
        var tmp$ret$2;
        $l$block_1: {
          Companion_getInstance_4();
          var tmp0__get_code__0_1 = new Char(0);
          tmp$ret$2 = tmp0__get_code__0_1.toInt_0_k$();
          break $l$block_1;
        }
        if (tmp1_Char_0 < tmp$ret$2) {
          tmp_0 = true;
        } else {
          {
            var tmp$ret$3;
            $l$block_2: {
              Companion_getInstance_4();
              var tmp1__get_code__0_2 = new Char(65535);
              tmp$ret$3 = tmp1__get_code__0_2.toInt_0_k$();
              break $l$block_2;
            }
            tmp_0 = tmp1_Char_0 > tmp$ret$3;
          }
        }
        if (tmp_0) {
          throw IllegalArgumentException_init_$Create$('' + 'Invalid Char code: ' + tmp1_Char_0);
        } else {
        }
        tmp$ret$4 = numberToChar(tmp1_Char_0);
        break $l$block_3;
      }
      tmp = tmp$ret$4;
    } else {
      tmp = a.get_ha5a7z_k$(index);
    }
    return tmp;
  }
  function isString(a) {
    return typeof a === 'string';
  }
  function charSequenceLength(a) {
    var tmp;
    if (isString(a)) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = a;
          break $l$block;
        }
        var tmp0_unsafeCast_0 = tmp$ret$0.length;
        tmp$ret$1 = tmp0_unsafeCast_0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    } else {
      tmp = a._get_length__0_k$();
    }
    return tmp;
  }
  function charSequenceSubSequence(a, startIndex, endIndex) {
    var tmp;
    if (isString(a)) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = a;
          break $l$block;
        }
        var tmp0_unsafeCast_0 = tmp$ret$0.substring(startIndex, endIndex);
        tmp$ret$1 = tmp0_unsafeCast_0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    } else {
      tmp = a.subSequence_27zxwg_k$(startIndex, endIndex);
    }
    return tmp;
  }
  function contentEqualsInternal(_this_, other) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _this_;
      break $l$block;
    }
    var a = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      tmp$ret$1 = other;
      break $l$block_0;
    }
    var b = tmp$ret$1;
    if (a === b)
      return true;
    if (((a == null ? true : b == null) ? true : !isArrayish(b)) ? true : a.length != b.length)
      return false;
    var inductionVariable = 0;
    var last = a.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals_0(a[i], b[i])) {
          return false;
        }}
       while (inductionVariable < last);
    return true;
  }
  function contentHashCodeInternal(_this_) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _this_;
      break $l$block;
    }
    var a = tmp$ret$0;
    if (a == null)
      return 0;
    var result = 1;
    var inductionVariable = 0;
    var last = a.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result = imul(result, 31) + hashCode(a[i]) | 0;
      }
       while (inductionVariable < last);
    return result;
  }
  function arrayToString(array) {
    return joinToString$default(array, ', ', '[', ']', 0, null, _no_name_provided_$factory_22(), 24, null);
  }
  function _no_name_provided__26() {
  }
  _no_name_provided__26.prototype.invoke_wi7j7l_k$ = function (it) {
    return toString_1(it);
  };
  _no_name_provided__26.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__26.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_22() {
    var i = new _no_name_provided__26();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function getObjectHashCode(obj) {
    if (!jsIn('kotlinHashCodeValue$', obj)) {
      var hash = jsBitwiseOr(Math.random() * 4.294967296E9, 0);
      var descriptor = new Object();
      descriptor.value = hash;
      descriptor.enumerable = false;
      Object.defineProperty(obj, 'kotlinHashCodeValue$', descriptor);
    }var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = obj['kotlinHashCodeValue$'];
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function equals_0(obj1, obj2) {
    if (obj1 == null) {
      return obj2 == null;
    }if (obj2 == null) {
      return false;
    }if (typeof obj1 === 'object' ? typeof obj1.equals === 'function' : false) {
      return obj1.equals(obj2);
    }if (obj1 !== obj1) {
      return obj2 !== obj2;
    }if (typeof obj1 === 'number' ? typeof obj2 === 'number' : false) {
      var tmp;
      if (obj1 === obj2) {
        var tmp_0;
        if (obj1 !== 0) {
          tmp_0 = true;
        } else {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = 1;
            break $l$block;
          }
          var tmp_1 = tmp$ret$0 / obj1;
          var tmp$ret$1;
          $l$block_0: {
            tmp$ret$1 = 1;
            break $l$block_0;
          }
          tmp_0 = tmp_1 === tmp$ret$1 / obj2;
        }
        tmp = tmp_0;
      } else {
        tmp = false;
      }
      return tmp;
    }return obj1 === obj2;
  }
  function hashCode(obj) {
    if (obj == null)
      return 0;
    var tmp0_subject = typeof obj;
    var tmp;
    switch (tmp0_subject) {
      case 'object':
        tmp = 'function' === typeof obj.hashCode ? obj.hashCode() : getObjectHashCode(obj);
        break;
      case 'function':
        tmp = getObjectHashCode(obj);
        break;
      case 'number':
        tmp = getNumberHashCode(obj);
        break;
      case 'boolean':
        var tmp_0;
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = obj;
          break $l$block;
        }

        if (tmp$ret$0) {
          tmp_0 = 1;
        } else {
          {
            tmp_0 = 0;
          }
        }

        tmp = tmp_0;
        break;
      default:tmp = getStringHashCode(String(obj));
        break;
    }
    return tmp;
  }
  function toString_1(o) {
    var tmp;
    if (o == null) {
      tmp = 'null';
    } else if (isArrayish(o)) {
      tmp = '[...]';
    } else {
      var tmp$ret$0;
      $l$block: {
        var tmp0_unsafeCast_0 = o.toString();
        tmp$ret$0 = tmp0_unsafeCast_0;
        break $l$block;
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function getStringHashCode(str) {
    var hash = 0;
    var length = str.length;
    var inductionVariable = 0;
    var last = length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = str;
          break $l$block;
        }
        var code = tmp$ret$0.charCodeAt(i);
        hash = imul(hash, 31) + code | 0;
      }
       while (!(i === last));
    return hash;
  }
  function captureStack(instance, constructorFunction) {
    if (Error.captureStackTrace != null) {
      Error.captureStackTrace(instance, constructorFunction);
    } else {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = instance;
        break $l$block;
      }
      tmp$ret$0.stack = (new Error()).stack;
    }
  }
  function extendThrowable(this_, message, cause) {
    Error.call(this_);
    setPropertiesToThrowableInstance(this_, message, cause);
  }
  function setPropertiesToThrowableInstance(this_, message, cause) {
    if (!hasOwnPrototypeProperty(this_, 'message')) {
      var tmp;
      if (message == null) {
        var tmp_0;
        if (!(message === null)) {
          var tmp0_safe_receiver = cause;
          var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
          tmp_0 = tmp1_elvis_lhs == null ? undefined : tmp1_elvis_lhs;
        } else {
          tmp_0 = undefined;
        }
        tmp = tmp_0;
      } else {
        tmp = message;
      }
      this_.message = tmp;
    }if (!hasOwnPrototypeProperty(this_, 'cause')) {
      this_.cause = cause;
    }this_.name = Object.getPrototypeOf(this_).constructor.name;
  }
  function hasOwnPrototypeProperty(o, name) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = Object.getPrototypeOf(o).hasOwnProperty(name);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function ensureNotNull(v) {
    var tmp;
    if (v == null) {
      THROW_NPE();
    } else {
      tmp = v;
    }
    return tmp;
  }
  function THROW_NPE() {
    throw NullPointerException_init_$Create$();
  }
  function THROW_CCE() {
    throw ClassCastException_init_$Create$();
  }
  function Companion_6() {
    Companion_instance_5 = this;
    this._MIN_VALUE_1 = new Long(0, -2147483648);
    this._MAX_VALUE_1 = new Long(-1, 2147483647);
    this._SIZE_BYTES_1 = 8;
    this._SIZE_BITS_1 = 64;
  }
  Companion_6.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_6();
    return Companion_instance_5;
  }
  function Long(low, high) {
    Companion_getInstance_5();
    Number_0.call(this);
    this._low = low;
    this._high = high;
  }
  Long.prototype.plus_wiekkq_k$ = function (other) {
    return add(this, other);
  };
  Long.prototype.minus_wiekkq_k$ = function (other) {
    return subtract(this, other);
  };
  Long.prototype.div_wiekkq_k$ = function (other) {
    return divide(this, other);
  };
  Long.prototype.inc_0_k$ = function () {
    return this.plus_wiekkq_k$(new Long(1, 0));
  };
  Long.prototype.dec_0_k$ = function () {
    return this.minus_wiekkq_k$(new Long(1, 0));
  };
  Long.prototype.unaryMinus_0_k$ = function () {
    return this.inv_0_k$().plus_wiekkq_k$(new Long(1, 0));
  };
  Long.prototype.inv_0_k$ = function () {
    return new Long(~this._low, ~this._high);
  };
  Long.prototype.toInt_0_k$ = function () {
    return this._low;
  };
  Long.prototype.toDouble_0_k$ = function () {
    return toNumber(this);
  };
  Long.prototype.valueOf = function () {
    return this.toDouble_0_k$();
  };
  Long.prototype.equals = function (other) {
    var tmp;
    if (other instanceof Long) {
      tmp = equalsLong(this, other);
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  Long.prototype.hashCode = function () {
    return hashCode_0(this);
  };
  Long.prototype.toString = function () {
    return toStringImpl(this, 10);
  };
  Long.$metadata$ = {
    simpleName: 'Long',
    kind: 'class',
    interfaces: [Comparable]
  };
  var ZERO;
  var ONE;
  var NEG_ONE;
  var MAX_VALUE;
  var MIN_VALUE;
  var TWO_PWR_24_;
  function compare(_this_, other) {
    if (equalsLong(_this_, other)) {
      return 0;
    }var thisNeg = isNegative(_this_);
    var otherNeg = isNegative(other);
    return (thisNeg ? !otherNeg : false) ? -1 : (!thisNeg ? otherNeg : false) ? 1 : isNegative(subtract(_this_, other)) ? -1 : 1;
  }
  function add(_this_, other) {
    var a48 = _this_._high >>> 16;
    var a32 = _this_._high & 65535;
    var a16 = _this_._low >>> 16;
    var a00 = _this_._low & 65535;
    var b48 = other._high >>> 16;
    var b32 = other._high & 65535;
    var b16 = other._low >>> 16;
    var b00 = other._low & 65535;
    var c48 = 0;
    var c32 = 0;
    var c16 = 0;
    var c00 = 0;
    c00 = c00 + (a00 + b00 | 0) | 0;
    c16 = c16 + (c00 >>> 16) | 0;
    c00 = c00 & 65535;
    c16 = c16 + (a16 + b16 | 0) | 0;
    c32 = c32 + (c16 >>> 16) | 0;
    c16 = c16 & 65535;
    c32 = c32 + (a32 + b32 | 0) | 0;
    c48 = c48 + (c32 >>> 16) | 0;
    c32 = c32 & 65535;
    c48 = c48 + (a48 + b48 | 0) | 0;
    c48 = c48 & 65535;
    return new Long(c16 << 16 | c00, c48 << 16 | c32);
  }
  function subtract(_this_, other) {
    return add(_this_, other.unaryMinus_0_k$());
  }
  function multiply(_this_, other) {
    if (isZero(_this_)) {
      return ZERO;
    } else if (isZero(other)) {
      return ZERO;
    }if (equalsLong(_this_, MIN_VALUE)) {
      return isOdd(other) ? MIN_VALUE : ZERO;
    } else if (equalsLong(other, MIN_VALUE)) {
      return isOdd(_this_) ? MIN_VALUE : ZERO;
    }if (isNegative(_this_)) {
      var tmp;
      if (isNegative(other)) {
        tmp = multiply(negate(_this_), negate(other));
      } else {
        tmp = negate(multiply(negate(_this_), other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(multiply(_this_, negate(other)));
    }if (lessThan(_this_, TWO_PWR_24_) ? lessThan(other, TWO_PWR_24_) : false) {
      return fromNumber(toNumber(_this_) * toNumber(other));
    }var a48 = _this_._high >>> 16;
    var a32 = _this_._high & 65535;
    var a16 = _this_._low >>> 16;
    var a00 = _this_._low & 65535;
    var b48 = other._high >>> 16;
    var b32 = other._high & 65535;
    var b16 = other._low >>> 16;
    var b00 = other._low & 65535;
    var c48 = 0;
    var c32 = 0;
    var c16 = 0;
    var c00 = 0;
    c00 = c00 + imul(a00, b00) | 0;
    c16 = c16 + (c00 >>> 16) | 0;
    c00 = c00 & 65535;
    c16 = c16 + imul(a16, b00) | 0;
    c32 = c32 + (c16 >>> 16) | 0;
    c16 = c16 & 65535;
    c16 = c16 + imul(a00, b16) | 0;
    c32 = c32 + (c16 >>> 16) | 0;
    c16 = c16 & 65535;
    c32 = c32 + imul(a32, b00) | 0;
    c48 = c48 + (c32 >>> 16) | 0;
    c32 = c32 & 65535;
    c32 = c32 + imul(a16, b16) | 0;
    c48 = c48 + (c32 >>> 16) | 0;
    c32 = c32 & 65535;
    c32 = c32 + imul(a00, b32) | 0;
    c48 = c48 + (c32 >>> 16) | 0;
    c32 = c32 & 65535;
    c48 = c48 + (((imul(a48, b00) + imul(a32, b16) | 0) + imul(a16, b32) | 0) + imul(a00, b48) | 0) | 0;
    c48 = c48 & 65535;
    return new Long(c16 << 16 | c00, c48 << 16 | c32);
  }
  function divide(_this_, other) {
    if (isZero(other)) {
      throw Exception_init_$Create$('division by zero');
    } else if (isZero(_this_)) {
      return ZERO;
    }if (equalsLong(_this_, MIN_VALUE)) {
      if (equalsLong(other, ONE) ? true : equalsLong(other, NEG_ONE)) {
        return MIN_VALUE;
      } else if (equalsLong(other, MIN_VALUE)) {
        return ONE;
      } else {
        var halfThis = shiftRight(_this_, 1);
        var approx = shiftLeft(halfThis.div_wiekkq_k$(other), 1);
        if (equalsLong(approx, ZERO)) {
          return isNegative(other) ? ONE : NEG_ONE;
        } else {
          var rem = subtract(_this_, multiply(other, approx));
          return add(approx, rem.div_wiekkq_k$(other));
        }
      }
    } else if (equalsLong(other, MIN_VALUE)) {
      return ZERO;
    }if (isNegative(_this_)) {
      var tmp;
      if (isNegative(other)) {
        tmp = negate(_this_).div_wiekkq_k$(negate(other));
      } else {
        tmp = negate(negate(_this_).div_wiekkq_k$(other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(_this_.div_wiekkq_k$(negate(other)));
    }var res = ZERO;
    var rem_0 = _this_;
    while (greaterThanOrEqual(rem_0, other)) {
      var approxDouble = toNumber(rem_0) / toNumber(other);
      var approx2 = Math.max(1.0, Math.floor(approxDouble));
      var log2 = Math.ceil(Math.log(approx2) / Math.LN2);
      var delta = log2 <= 48.0 ? 1.0 : Math.pow(2.0, log2 - 48);
      var approxRes = fromNumber(approx2);
      var approxRem = multiply(approxRes, other);
      while (isNegative(approxRem) ? true : greaterThan(approxRem, rem_0)) {
        approx2 = approx2 - delta;
        approxRes = fromNumber(approx2);
        approxRem = multiply(approxRes, other);
      }
      if (isZero(approxRes)) {
        approxRes = ONE;
      }res = add(res, approxRes);
      rem_0 = subtract(rem_0, approxRem);
    }
    return res;
  }
  function shiftLeft(_this_, numBits) {
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this_;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this_._low << numBits_0, _this_._high << numBits_0 | _this_._low >>> (32 - numBits_0 | 0));
      } else {
        return new Long(0, _this_._low << (numBits_0 - 32 | 0));
      }
    }
  }
  function shiftRight(_this_, numBits) {
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this_;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this_._low >>> numBits_0 | _this_._high << (32 - numBits_0 | 0), _this_._high >> numBits_0);
      } else {
        return new Long(_this_._high >> (numBits_0 - 32 | 0), _this_._high >= 0 ? 0 : -1);
      }
    }
  }
  function toNumber(_this_) {
    return _this_._high * 4.294967296E9 + getLowBitsUnsigned(_this_);
  }
  function equalsLong(_this_, other) {
    return _this_._high === other._high ? _this_._low === other._low : false;
  }
  function hashCode_0(l) {
    return l._low ^ l._high;
  }
  function toStringImpl(_this_, radix) {
    if (radix < 2 ? true : 36 < radix) {
      throw Exception_init_$Create$('' + 'radix out of range: ' + radix);
    }if (isZero(_this_)) {
      return '0';
    }if (isNegative(_this_)) {
      if (equalsLong(_this_, MIN_VALUE)) {
        var radixLong = fromInt(radix);
        var div = _this_.div_wiekkq_k$(radixLong);
        var rem = subtract(multiply(div, radixLong), _this_).toInt_0_k$();
        var tmp = toStringImpl(div, radix);
        var tmp$ret$1;
        $l$block_0: {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = rem;
            break $l$block;
          }
          var tmp0_unsafeCast_0 = tmp$ret$0.toString(radix);
          tmp$ret$1 = tmp0_unsafeCast_0;
          break $l$block_0;
        }
        return tmp + tmp$ret$1;
      } else {
        return '' + '-' + toStringImpl(negate(_this_), radix);
      }
    }var radixToPower = fromNumber(Math.pow(radix, 6.0));
    var rem_0 = _this_;
    var result = '';
    while (true) {
      var remDiv = rem_0.div_wiekkq_k$(radixToPower);
      var intval = subtract(rem_0, multiply(remDiv, radixToPower)).toInt_0_k$();
      var tmp$ret$3;
      $l$block_2: {
        var tmp$ret$2;
        $l$block_1: {
          tmp$ret$2 = intval;
          break $l$block_1;
        }
        var tmp1_unsafeCast_0 = tmp$ret$2.toString(radix);
        tmp$ret$3 = tmp1_unsafeCast_0;
        break $l$block_2;
      }
      var digits = tmp$ret$3;
      rem_0 = remDiv;
      if (isZero(rem_0)) {
        return digits + result;
      } else {
        while (digits.length < 6) {
          digits = '0' + digits;
        }
        result = digits + result;
      }
    }
  }
  function fromInt(value) {
    return new Long(value, value < 0 ? -1 : 0);
  }
  function isNegative(_this_) {
    return _this_._high < 0;
  }
  function isZero(_this_) {
    return _this_._high === 0 ? _this_._low === 0 : false;
  }
  function isOdd(_this_) {
    return (_this_._low & 1) === 1;
  }
  function negate(_this_) {
    return _this_.unaryMinus_0_k$();
  }
  function lessThan(_this_, other) {
    return compare(_this_, other) < 0;
  }
  function fromNumber(value) {
    if (isNaN_0(value)) {
      return ZERO;
    } else if (value <= -9.223372036854776E18) {
      return MIN_VALUE;
    } else if (value + 1 >= 9.223372036854776E18) {
      return MAX_VALUE;
    } else if (value < 0.0) {
      return negate(fromNumber(-value));
    } else {
      var twoPwr32 = 4.294967296E9;
      return new Long(jsBitwiseOr(value % twoPwr32, 0), jsBitwiseOr(value / twoPwr32, 0));
    }
  }
  function greaterThan(_this_, other) {
    return compare(_this_, other) > 0;
  }
  function greaterThanOrEqual(_this_, other) {
    return compare(_this_, other) >= 0;
  }
  function getLowBitsUnsigned(_this_) {
    return _this_._low >= 0 ? _this_._low : 4.294967296E9 + _this_._low;
  }
  function imul(a_local, b_local) {
    var lhs = jsBitwiseAnd(a_local, 4.29490176E9) * jsBitwiseAnd(b_local, 65535);
    var rhs = jsBitwiseAnd(a_local, 65535) * b_local;
    return jsBitwiseOr(lhs + rhs, 0);
  }
  function numberToInt(a) {
    var tmp;
    if (a instanceof Long) {
      tmp = a.toInt_0_k$();
    } else {
      {
        tmp = doubleToInt(a);
      }
    }
    return tmp;
  }
  function doubleToInt(a) {
    return a > 2.147483647E9 ? 2147483647 : a < -2.147483648E9 ? -2147483648 : jsBitwiseOr(a, 0);
  }
  function toShort(a) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = toShort$outlinedJsCode$(a);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function numberToChar(a) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_toUShort_0 = numberToInt(a);
      tmp$ret$0 = _UShort___init__impl_(toShort(tmp0_toUShort_0));
      break $l$block;
    }
    return new Char(tmp$ret$0);
  }
  function toShort$outlinedJsCode$(a) {
    return a << 16 >> 16;
  }
  function numberRangeToNumber(start, endInclusive) {
    return new IntRange(start, endInclusive);
  }
  function isArrayish(o) {
    var tmp;
    if (isJsArray(o)) {
      tmp = true;
    } else {
      var tmp$ret$0;
      $l$block: {
        var tmp0_unsafeCast_0 = ArrayBuffer.isView(o);
        tmp$ret$0 = tmp0_unsafeCast_0;
        break $l$block;
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function isJsArray(obj) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = Array.isArray(obj);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function isInterface(obj, iface) {
    var tmp0_elvis_lhs = obj.constructor;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var ctor = tmp;
    return isInterfaceImpl(ctor, iface);
  }
  function isInterfaceImpl(ctor, iface) {
    if (ctor === iface)
      return true;
    var metadata = ctor.$metadata$;
    if (!(metadata == null)) {
      var interfaces = metadata.interfaces;
      var indexedObject = interfaces;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var i = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if (isInterfaceImpl(i, iface)) {
          return true;
        }}
    }var superPrototype = !(ctor.prototype == null) ? Object.getPrototypeOf(ctor.prototype) : null;
    var superConstructor = superPrototype != null ? superPrototype.constructor : null;
    return !(superConstructor == null) ? isInterfaceImpl(superConstructor, iface) : false;
  }
  function isArray(obj) {
    var tmp;
    if (isJsArray(obj)) {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = obj;
        break $l$block;
      }
      tmp = !tmp$ret$0.$type$;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function isObject(obj) {
    var objTypeOf = typeof obj;
    var tmp0_subject = objTypeOf;
    switch (tmp0_subject) {
      case 'string':
        return true;
      case 'number':
        return true;
      case 'boolean':
        return true;
      case 'function':
        return true;
      default:return jsInstanceOf(obj, Object);
    }
  }
  function isNumber(a) {
    var tmp;
    if (typeof a === 'number') {
      tmp = true;
    } else {
      tmp = a instanceof Long;
    }
    return tmp;
  }
  function isCharSequence(value) {
    return typeof value === 'string' ? true : isInterface(value, _get_js_(getKClass_0(CharSequence)));
  }
  function isBooleanArray(a) {
    return isJsArray(a) ? a.$type$ === 'BooleanArray' : false;
  }
  function isByteArray(a) {
    return jsInstanceOf(a, Int8Array);
  }
  function isShortArray(a) {
    return jsInstanceOf(a, Int16Array);
  }
  function isCharArray(a) {
    return isJsArray(a) ? a.$type$ === 'CharArray' : false;
  }
  function isIntArray(a) {
    return jsInstanceOf(a, Int32Array);
  }
  function isFloatArray(a) {
    return jsInstanceOf(a, Float32Array);
  }
  function isLongArray(a) {
    return isJsArray(a) ? a.$type$ === 'LongArray' : false;
  }
  function isDoubleArray(a) {
    return jsInstanceOf(a, Float64Array);
  }
  function asList(_this_) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _this_;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return new ArrayList(tmp$ret$1);
  }
  function contentEquals(_this_, other) {
    return contentEqualsInternal(_this_, other);
  }
  function contentHashCode(_this_) {
    return contentHashCodeInternal(_this_);
  }
  function Exception_init_$Init$($this) {
    extendThrowable($this, void 1, void 1);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Init$_0(message, $this) {
    extendThrowable($this, message, void 1);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Create$(message) {
    var tmp = Exception_init_$Init$_0(message, Object.create(Exception.prototype));
    captureStack(tmp, Exception_init_$Create$);
    return tmp;
  }
  function Exception() {
    captureStack(this, Exception);
  }
  Exception.$metadata$ = {
    simpleName: 'Exception',
    kind: 'class',
    interfaces: []
  };
  function IllegalArgumentException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IllegalArgumentException.call($this);
    return $this;
  }
  function IllegalArgumentException_init_$Create$(message) {
    var tmp = IllegalArgumentException_init_$Init$(message, Object.create(IllegalArgumentException.prototype));
    captureStack(tmp, IllegalArgumentException_init_$Create$);
    return tmp;
  }
  function IllegalArgumentException() {
    captureStack(this, IllegalArgumentException);
  }
  IllegalArgumentException.$metadata$ = {
    simpleName: 'IllegalArgumentException',
    kind: 'class',
    interfaces: []
  };
  function NoSuchElementException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NoSuchElementException.call($this);
    return $this;
  }
  function NoSuchElementException_init_$Create$() {
    var tmp = NoSuchElementException_init_$Init$(Object.create(NoSuchElementException.prototype));
    captureStack(tmp, NoSuchElementException_init_$Create$);
    return tmp;
  }
  function NoSuchElementException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    NoSuchElementException.call($this);
    return $this;
  }
  function NoSuchElementException_init_$Create$_0(message) {
    var tmp = NoSuchElementException_init_$Init$_0(message, Object.create(NoSuchElementException.prototype));
    captureStack(tmp, NoSuchElementException_init_$Create$_0);
    return tmp;
  }
  function NoSuchElementException() {
    captureStack(this, NoSuchElementException);
  }
  NoSuchElementException.$metadata$ = {
    simpleName: 'NoSuchElementException',
    kind: 'class',
    interfaces: []
  };
  function RuntimeException_init_$Init$($this) {
    Exception_init_$Init$($this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Init$_0(message, $this) {
    Exception_init_$Init$_0(message, $this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException() {
    captureStack(this, RuntimeException);
  }
  RuntimeException.$metadata$ = {
    simpleName: 'RuntimeException',
    kind: 'class',
    interfaces: []
  };
  function IndexOutOfBoundsException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IndexOutOfBoundsException.call($this);
    return $this;
  }
  function IndexOutOfBoundsException_init_$Create$(message) {
    var tmp = IndexOutOfBoundsException_init_$Init$(message, Object.create(IndexOutOfBoundsException.prototype));
    captureStack(tmp, IndexOutOfBoundsException_init_$Create$);
    return tmp;
  }
  function IndexOutOfBoundsException() {
    captureStack(this, IndexOutOfBoundsException);
  }
  IndexOutOfBoundsException.$metadata$ = {
    simpleName: 'IndexOutOfBoundsException',
    kind: 'class',
    interfaces: []
  };
  function UnsupportedOperationException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$() {
    var tmp = UnsupportedOperationException_init_$Init$(Object.create(UnsupportedOperationException.prototype));
    captureStack(tmp, UnsupportedOperationException_init_$Create$);
    return tmp;
  }
  function UnsupportedOperationException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$_0(message) {
    var tmp = UnsupportedOperationException_init_$Init$_0(message, Object.create(UnsupportedOperationException.prototype));
    captureStack(tmp, UnsupportedOperationException_init_$Create$_0);
    return tmp;
  }
  function UnsupportedOperationException() {
    captureStack(this, UnsupportedOperationException);
  }
  UnsupportedOperationException.$metadata$ = {
    simpleName: 'UnsupportedOperationException',
    kind: 'class',
    interfaces: []
  };
  function NullPointerException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NullPointerException.call($this);
    return $this;
  }
  function NullPointerException_init_$Create$() {
    var tmp = NullPointerException_init_$Init$(Object.create(NullPointerException.prototype));
    captureStack(tmp, NullPointerException_init_$Create$);
    return tmp;
  }
  function NullPointerException() {
    captureStack(this, NullPointerException);
  }
  NullPointerException.$metadata$ = {
    simpleName: 'NullPointerException',
    kind: 'class',
    interfaces: []
  };
  function ClassCastException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    ClassCastException.call($this);
    return $this;
  }
  function ClassCastException_init_$Create$() {
    var tmp = ClassCastException_init_$Init$(Object.create(ClassCastException.prototype));
    captureStack(tmp, ClassCastException_init_$Create$);
    return tmp;
  }
  function ClassCastException() {
    captureStack(this, ClassCastException);
  }
  ClassCastException.$metadata$ = {
    simpleName: 'ClassCastException',
    kind: 'class',
    interfaces: []
  };
  function jsIn(lhs_hack, rhs_hack) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = jsIn$outlinedJsCode$(lhs_hack, rhs_hack);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function jsBitwiseOr(lhs_hack, rhs_hack) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = jsBitwiseOr$outlinedJsCode$(lhs_hack, rhs_hack);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function jsTypeOf(value_hack) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = jsTypeOf$outlinedJsCode$(value_hack);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function jsDeleteProperty(obj_hack, property_hack) {
    jsDeleteProperty$outlinedJsCode$(obj_hack, property_hack);
  }
  function jsInstanceOf(obj_hack, jsClass_hack) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = jsInstanceOf$outlinedJsCode$(obj_hack, jsClass_hack);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function jsBitwiseAnd(lhs_hack, rhs_hack) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = jsBitwiseAnd$outlinedJsCode$(lhs_hack, rhs_hack);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function jsIn$outlinedJsCode$(lhs_hack, rhs_hack) {
    return lhs_hack in rhs_hack;
  }
  function jsBitwiseOr$outlinedJsCode$(lhs_hack, rhs_hack) {
    return lhs_hack | rhs_hack;
  }
  function jsTypeOf$outlinedJsCode$(value_hack) {
    return typeof value_hack;
  }
  function jsDeleteProperty$outlinedJsCode$(obj_hack, property_hack) {
    return delete obj_hack[property_hack];
  }
  function jsInstanceOf$outlinedJsCode$(obj_hack, jsClass_hack) {
    return obj_hack instanceof jsClass_hack;
  }
  function jsBitwiseAnd$outlinedJsCode$(lhs_hack, rhs_hack) {
    return lhs_hack & rhs_hack;
  }
  function None() {
    None_instance = this;
    TraceBase.call(this);
  }
  None.$metadata$ = {
    simpleName: 'None',
    kind: 'object',
    interfaces: []
  };
  var None_instance;
  function None_getInstance() {
    if (None_instance == null)
      new None();
    return None_instance;
  }
  function TraceBase() {
  }
  TraceBase.prototype.atomicfu$Trace$append$1 = function (event) {
  };
  TraceBase.prototype.atomicfu$Trace$append$2 = function (event1, event2) {
  };
  TraceBase.prototype.atomicfu$Trace$append$3 = function (event1, event2, event3) {
  };
  TraceBase.prototype.atomicfu$Trace$append$4 = function (event1, event2, event3, event4) {
  };
  TraceBase.$metadata$ = {
    simpleName: 'TraceBase',
    kind: 'class',
    interfaces: []
  };
  function AtomicRef(value) {
    this._value_0 = value;
  }
  AtomicRef.prototype._set_value__iav7o_k$ = function (_set___) {
    this._value_0 = _set___;
  };
  AtomicRef.prototype._get_value__0_k$ = function () {
    return this._value_0;
  };
  AtomicRef.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this._value_0 === expect))
      return false;
    this._value_0 = update;
    return true;
  };
  AtomicRef.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this._value_0;
    this._value_0 = value;
    return oldValue;
  };
  AtomicRef.prototype.toString = function () {
    return toString_0(this._value_0);
  };
  AtomicRef.$metadata$ = {
    simpleName: 'AtomicRef',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(AtomicRef.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicRef.prototype._get_value__0_k$,
    set: AtomicRef.prototype._set_value__iav7o_k$
  });
  function AtomicBoolean(value) {
    this._value_1 = value;
  }
  AtomicBoolean.prototype._set_value__rpwsgn_k$ = function (_set___) {
    this._value_1 = _set___;
  };
  AtomicBoolean.prototype._get_value__0_k$ = function () {
    return this._value_1;
  };
  AtomicBoolean.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this._value_1 === expect))
      return false;
    this._value_1 = update;
    return true;
  };
  AtomicBoolean.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this._value_1;
    this._value_1 = value;
    return oldValue;
  };
  AtomicBoolean.prototype.toString = function () {
    return this._value_1.toString();
  };
  AtomicBoolean.$metadata$ = {
    simpleName: 'AtomicBoolean',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(AtomicBoolean.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicBoolean.prototype._get_value__0_k$,
    set: AtomicBoolean.prototype._set_value__rpwsgn_k$
  });
  function AtomicInt(value) {
    this._value_2 = value;
  }
  AtomicInt.prototype._set_value__majfzk_k$ = function (_set___) {
    this._value_2 = _set___;
  };
  AtomicInt.prototype._get_value__0_k$ = function () {
    return this._value_2;
  };
  AtomicInt.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this._value_2 === expect))
      return false;
    this._value_2 = update;
    return true;
  };
  AtomicInt.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this._value_2;
    this._value_2 = value;
    return oldValue;
  };
  AtomicInt.prototype.atomicfu$getAndIncrement = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this._value_2;
    tmp0_this._value_2 = tmp1 + 1 | 0;
    return tmp1;
  };
  AtomicInt.prototype.atomicfu$getAndDecrement = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this._value_2;
    tmp0_this._value_2 = tmp1 - 1 | 0;
    return tmp1;
  };
  AtomicInt.prototype.atomicfu$getAndAdd = function (delta) {
    var oldValue = this._value_2;
    var tmp0_this = this;
    tmp0_this._value_2 = tmp0_this._value_2 + delta | 0;
    return oldValue;
  };
  AtomicInt.prototype.atomicfu$addAndGet = function (delta) {
    var tmp0_this = this;
    tmp0_this._value_2 = tmp0_this._value_2 + delta | 0;
    return this._value_2;
  };
  AtomicInt.prototype.atomicfu$incrementAndGet = function () {
    var tmp0_this = this;
    tmp0_this._value_2 = tmp0_this._value_2 + 1 | 0;
    return tmp0_this._value_2;
  };
  AtomicInt.prototype.atomicfu$decrementAndGet = function () {
    var tmp0_this = this;
    tmp0_this._value_2 = tmp0_this._value_2 - 1 | 0;
    return tmp0_this._value_2;
  };
  AtomicInt.prototype.toString = function () {
    return this._value_2.toString();
  };
  AtomicInt.$metadata$ = {
    simpleName: 'AtomicInt',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(AtomicInt.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicInt.prototype._get_value__0_k$,
    set: AtomicInt.prototype._set_value__majfzk_k$
  });
  function AtomicLong(value) {
    this._value_3 = value;
  }
  AtomicLong.prototype._set_value__kdfck9_k$ = function (_set___) {
    this._value_3 = _set___;
  };
  AtomicLong.prototype._get_value__0_k$ = function () {
    return this._value_3;
  };
  AtomicLong.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!this._value_3.equals(expect))
      return false;
    this._value_3 = update;
    return true;
  };
  AtomicLong.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this._value_3;
    this._value_3 = value;
    return oldValue;
  };
  AtomicLong.prototype.atomicfu$getAndIncrement$long = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this._value_3;
    tmp0_this._value_3 = tmp1.inc_0_k$();
    return tmp1;
  };
  AtomicLong.prototype.atomicfu$getAndDecrement$long = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this._value_3;
    tmp0_this._value_3 = tmp1.dec_0_k$();
    return tmp1;
  };
  AtomicLong.prototype.atomicfu$getAndAdd$long = function (delta) {
    var oldValue = this._value_3;
    var tmp0_this = this;
    tmp0_this._value_3 = tmp0_this._value_3.plus_wiekkq_k$(delta);
    return oldValue;
  };
  AtomicLong.prototype.atomicfu$addAndGet$long = function (delta) {
    var tmp0_this = this;
    tmp0_this._value_3 = tmp0_this._value_3.plus_wiekkq_k$(delta);
    return this._value_3;
  };
  AtomicLong.prototype.atomicfu$incrementAndGet$long = function () {
    var tmp0_this = this;
    tmp0_this._value_3 = tmp0_this._value_3.inc_0_k$();
    return tmp0_this._value_3;
  };
  AtomicLong.prototype.atomicfu$decrementAndGet$long = function () {
    var tmp0_this = this;
    tmp0_this._value_3 = tmp0_this._value_3.dec_0_k$();
    return tmp0_this._value_3;
  };
  AtomicLong.prototype.toString = function () {
    return this._value_3.toString();
  };
  AtomicLong.$metadata$ = {
    simpleName: 'AtomicLong',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(AtomicLong.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicLong.prototype._get_value__0_k$,
    set: AtomicLong.prototype._set_value__kdfck9_k$
  });
  function atomic(initial, trace) {
    return atomic_0(initial, trace === void 1 ? None_getInstance() : trace);
  }
  function atomic_0(initial, trace) {
    return new AtomicRef(initial);
  }
  function atomic_1(initial, trace) {
    return atomic_2(initial, trace === void 1 ? None_getInstance() : trace);
  }
  function atomic_2(initial, trace) {
    return new AtomicBoolean(initial);
  }
  function atomic_3(initial, trace) {
    return atomic_4(initial, trace === void 1 ? None_getInstance() : trace);
  }
  function atomic_4(initial, trace) {
    return new AtomicInt(initial);
  }
  function atomic_5(initial, trace) {
    return atomic_6(initial, trace === void 1 ? None_getInstance() : trace);
  }
  function atomic_6(initial, trace) {
    return new AtomicLong(initial);
  }
  function Error_0(type, description, date, payload, severity) {
    this._type = type;
    this._description = description;
    this._date = date;
    this._payload = payload;
    this._severity = severity;
  }
  Error_0.prototype._get_type__0_k$ = function () {
    return this._type;
  };
  Error_0.prototype._get_description__0_k$ = function () {
    return this._description;
  };
  Error_0.prototype._get_date__0_k$ = function () {
    return this._date;
  };
  Error_0.prototype._get_payload__0_k$ = function () {
    return this._payload;
  };
  Error_0.prototype._get_severity__0_k$ = function () {
    return this._severity;
  };
  Error_0.$metadata$ = {
    simpleName: 'Error',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(Error_0.prototype, 'type', {
    configurable: true,
    get: Error_0.prototype._get_type__0_k$
  });
  Object.defineProperty(Error_0.prototype, 'description', {
    configurable: true,
    get: Error_0.prototype._get_description__0_k$
  });
  Object.defineProperty(Error_0.prototype, 'date', {
    configurable: true,
    get: Error_0.prototype._get_date__0_k$
  });
  Object.defineProperty(Error_0.prototype, 'payload', {
    configurable: true,
    get: Error_0.prototype._get_payload__0_k$
  });
  Object.defineProperty(Error_0.prototype, 'severity', {
    configurable: true,
    get: Error_0.prototype._get_severity__0_k$
  });
  function ErrorSeverity_0(severity) {
    this._severity_0 = severity;
  }
  ErrorSeverity_0.prototype._get_severity__0_k$ = function () {
    return this._severity_0;
  };
  ErrorSeverity_0.$metadata$ = {
    simpleName: 'ErrorSeverity',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(ErrorSeverity_0.prototype, 'severity', {
    configurable: true,
    get: ErrorSeverity_0.prototype._get_severity__0_k$
  });
  function ErrorSeverityWarning_0() {
    ErrorSeverity_0.call(this, 'warning');
  }
  ErrorSeverityWarning_0.$metadata$ = {
    simpleName: 'ErrorSeverityWarning',
    kind: 'class',
    interfaces: []
  };
  function ErrorSeverityError() {
    ErrorSeverity_0.call(this, 'error');
  }
  ErrorSeverityError.$metadata$ = {
    simpleName: 'ErrorSeverityError',
    kind: 'class',
    interfaces: []
  };
  function S2Exception(id, error) {
    Exception_init_$Init$_0(error.description, this);
    this._id = id;
    this._error = error;
    captureStack(this, S2Exception);
  }
  S2Exception.prototype._get_id__0_k$ = function () {
    return this._id;
  };
  S2Exception.prototype._get_error__0_k$ = function () {
    return this._error;
  };
  S2Exception.$metadata$ = {
    simpleName: 'S2Exception',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(S2Exception.prototype, 'id', {
    configurable: true,
    get: S2Exception.prototype._get_id__0_k$
  });
  Object.defineProperty(S2Exception.prototype, 'error', {
    configurable: true,
    get: S2Exception.prototype._get_error__0_k$
  });
  function S2NotFoundException(message) {
    Exception_init_$Init$_0(message, this);
    captureStack(this, S2NotFoundException);
  }
  S2NotFoundException.$metadata$ = {
    simpleName: 'S2NotFoundException',
    kind: 'class',
    interfaces: []
  };
  function Page_0(total, list) {
    this._total = total;
    this._list = list;
  }
  Page_0.prototype._get_total__0_k$ = function () {
    return this._total;
  };
  Page_0.prototype._get_list__0_k$ = function () {
    return this._list;
  };
  Page_0.$metadata$ = {
    simpleName: 'Page',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(Page_0.prototype, 'total', {
    configurable: true,
    get: Page_0.prototype._get_total__0_k$
  });
  Object.defineProperty(Page_0.prototype, 'list', {
    configurable: true,
    get: Page_0.prototype._get_list__0_k$
  });
  function OffsetPagination(offset, limit) {
    this._offset = offset;
    this._limit_0 = limit;
  }
  OffsetPagination.prototype._get_offset__0_k$ = function () {
    return this._offset;
  };
  OffsetPagination.prototype._get_limit__0_k$ = function () {
    return this._limit_0;
  };
  OffsetPagination.$metadata$ = {
    simpleName: 'OffsetPagination',
    kind: 'class',
    interfaces: [Pagination]
  };
  Object.defineProperty(OffsetPagination.prototype, 'offset', {
    configurable: true,
    get: OffsetPagination.prototype._get_offset__0_k$
  });
  Object.defineProperty(OffsetPagination.prototype, 'limit', {
    configurable: true,
    get: OffsetPagination.prototype._get_limit__0_k$
  });
  function PagePagination_0(page, size) {
    this._page = page;
    this._size_0 = size;
  }
  PagePagination_0.prototype._get_page__0_k$ = function () {
    return this._page;
  };
  PagePagination_0.prototype._get_size__0_k$ = function () {
    return this._size_0;
  };
  PagePagination_0.$metadata$ = {
    simpleName: 'PagePagination',
    kind: 'class',
    interfaces: [Pagination]
  };
  Object.defineProperty(PagePagination_0.prototype, 'page', {
    configurable: true,
    get: PagePagination_0.prototype._get_page__0_k$
  });
  Object.defineProperty(PagePagination_0.prototype, 'size', {
    configurable: true,
    get: PagePagination_0.prototype._get_size__0_k$
  });
  function Pagination() {
  }
  Pagination.$metadata$ = {
    simpleName: 'Pagination',
    kind: 'interface',
    interfaces: []
  };
  function Block_0(blockId, previousHash, dataHash, transactions) {
    this._blockId = blockId;
    this._previousHash = previousHash;
    this._dataHash = dataHash;
    this._transactions = transactions;
  }
  Block_0.prototype._get_blockId__0_k$ = function () {
    return this._blockId;
  };
  Block_0.prototype._get_previousHash__0_k$ = function () {
    return this._previousHash;
  };
  Block_0.prototype._get_dataHash__0_k$ = function () {
    return this._dataHash;
  };
  Block_0.prototype._get_transactions__0_k$ = function () {
    return this._transactions;
  };
  Block_0.$metadata$ = {
    simpleName: 'Block',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(Block_0.prototype, 'blockId', {
    configurable: true,
    get: Block_0.prototype._get_blockId__0_k$
  });
  Object.defineProperty(Block_0.prototype, 'previousHash', {
    configurable: true,
    get: Block_0.prototype._get_previousHash__0_k$
  });
  Object.defineProperty(Block_0.prototype, 'dataHash', {
    configurable: true,
    get: Block_0.prototype._get_dataHash__0_k$
  });
  Object.defineProperty(Block_0.prototype, 'transactions', {
    configurable: true,
    get: Block_0.prototype._get_transactions__0_k$
  });
  function IdentitiesInfo_0(id, mspid) {
    this._id_0 = id;
    this._mspid = mspid;
  }
  IdentitiesInfo_0.prototype._get_id__0_k$ = function () {
    return this._id_0;
  };
  IdentitiesInfo_0.prototype._get_mspid__0_k$ = function () {
    return this._mspid;
  };
  IdentitiesInfo_0.$metadata$ = {
    simpleName: 'IdentitiesInfo',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(IdentitiesInfo_0.prototype, 'id', {
    configurable: true,
    get: IdentitiesInfo_0.prototype._get_id__0_k$
  });
  Object.defineProperty(IdentitiesInfo_0.prototype, 'mspid', {
    configurable: true,
    get: IdentitiesInfo_0.prototype._get_mspid__0_k$
  });
  function Transaction_0(transactionId, blockId, timestamp, isValid, channelId, creator, nonce, type, validationCode) {
    this._transactionId = transactionId;
    this._blockId_0 = blockId;
    this._timestamp = timestamp;
    this._isValid = isValid;
    this._channelId = channelId;
    this._creator = creator;
    this._nonce = nonce;
    this._type_0 = type;
    this._validationCode = validationCode;
  }
  Transaction_0.prototype._get_transactionId__0_k$ = function () {
    return this._transactionId;
  };
  Transaction_0.prototype._get_blockId__0_k$ = function () {
    return this._blockId_0;
  };
  Transaction_0.prototype._get_timestamp__0_k$ = function () {
    return this._timestamp;
  };
  Transaction_0.prototype._get_isValid__0_k$ = function () {
    return this._isValid;
  };
  Transaction_0.prototype._get_channelId__0_k$ = function () {
    return this._channelId;
  };
  Transaction_0.prototype._get_creator__0_k$ = function () {
    return this._creator;
  };
  Transaction_0.prototype._get_nonce__0_k$ = function () {
    return this._nonce;
  };
  Transaction_0.prototype._get_type__0_k$ = function () {
    return this._type_0;
  };
  Transaction_0.prototype._get_validationCode__0_k$ = function () {
    return this._validationCode;
  };
  Transaction_0.$metadata$ = {
    simpleName: 'Transaction',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(Transaction_0.prototype, 'transactionId', {
    configurable: true,
    get: Transaction_0.prototype._get_transactionId__0_k$
  });
  Object.defineProperty(Transaction_0.prototype, 'blockId', {
    configurable: true,
    get: Transaction_0.prototype._get_blockId__0_k$
  });
  Object.defineProperty(Transaction_0.prototype, 'timestamp', {
    configurable: true,
    get: Transaction_0.prototype._get_timestamp__0_k$
  });
  Object.defineProperty(Transaction_0.prototype, 'isValid', {
    configurable: true,
    get: Transaction_0.prototype._get_isValid__0_k$
  });
  Object.defineProperty(Transaction_0.prototype, 'channelId', {
    configurable: true,
    get: Transaction_0.prototype._get_channelId__0_k$
  });
  Object.defineProperty(Transaction_0.prototype, 'creator', {
    configurable: true,
    get: Transaction_0.prototype._get_creator__0_k$
  });
  Object.defineProperty(Transaction_0.prototype, 'nonce', {
    configurable: true,
    get: Transaction_0.prototype._get_nonce__0_k$
  });
  Object.defineProperty(Transaction_0.prototype, 'type', {
    configurable: true,
    get: Transaction_0.prototype._get_type__0_k$
  });
  Object.defineProperty(Transaction_0.prototype, 'validationCode', {
    configurable: true,
    get: Transaction_0.prototype._get_validationCode__0_k$
  });
  function Companion_7() {
    Companion_instance_6 = this;
  }
  Companion_7.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_6;
  function Companion_getInstance_6() {
    if (Companion_instance_6 == null)
      new Companion_7();
    return Companion_instance_6;
  }
  function Agent(name, pub) {
    Companion_getInstance_6();
    this._name = name;
    this._pub = pub;
  }
  Agent.prototype._get_name__0_k$ = function () {
    return this._name;
  };
  Agent.prototype._get_pub__0_k$ = function () {
    return this._pub;
  };
  Agent.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression_0(this).equals(getKClassFromExpression_0(other)))
      return false;
    if (other instanceof Agent)
      other;
    else
      THROW_CCE();
    Unit_getInstance();
    if (!(this._name === other._name))
      return false;
    if (!contentEquals(this._pub, other._pub))
      return false;
    return true;
  };
  Agent.prototype.hashCode = function () {
    var result = getStringHashCode(this._name);
    result = imul(31, result) + contentHashCode(this._pub) | 0;
    return result;
  };
  Agent.prototype.component1 = function () {
    return this._name;
  };
  Agent.prototype.component2 = function () {
    return this._pub;
  };
  Agent.prototype.copy = function (name, pub) {
    return this.copy_nwdxb8_k$(name === void 1 ? this._name : name, pub === void 1 ? this._pub : pub);
  };
  Agent.prototype.copy_nwdxb8_k$ = function (name, pub) {
    return new Agent(name, pub);
  };
  Agent.prototype.copy$default_rtppve_k$ = function (name, pub, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      name = this._name;
    if (!(($mask0 & 2) === 0))
      pub = this._pub;
    return this.copy_nwdxb8_k$(name, pub);
  };
  Agent.prototype.toString = function () {
    return '' + 'Agent(name=' + this._name + ', pub=' + toString_1(this._pub) + ')';
  };
  Agent.$metadata$ = {
    simpleName: 'Agent',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(Agent.prototype, 'name', {
    configurable: true,
    get: Agent.prototype._get_name__0_k$
  });
  Object.defineProperty(Agent.prototype, 'pub', {
    configurable: true,
    get: Agent.prototype._get_pub__0_k$
  });
  function Chaincode_0(id, channelId) {
    this._id_1 = id;
    this._channelId_0 = channelId;
  }
  Chaincode_0.prototype._get_id__0_k$ = function () {
    return this._id_1;
  };
  Chaincode_0.prototype._get_channelId__0_k$ = function () {
    return this._channelId_0;
  };
  Chaincode_0.prototype.component1 = function () {
    return this._id_1;
  };
  Chaincode_0.prototype.component2 = function () {
    return this._channelId_0;
  };
  Chaincode_0.prototype.copy = function (id, channelId) {
    return this.copy_jg38oy_k$(id === void 1 ? this._id_1 : id, channelId === void 1 ? this._channelId_0 : channelId);
  };
  Chaincode_0.prototype.copy_jg38oy_k$ = function (id, channelId) {
    return new Chaincode_0(id, channelId);
  };
  Chaincode_0.prototype.copy$default_9kq45a_k$ = function (id, channelId, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      id = this._id_1;
    if (!(($mask0 & 2) === 0))
      channelId = this._channelId_0;
    return this.copy_jg38oy_k$(id, channelId);
  };
  Chaincode_0.prototype.toString = function () {
    return '' + 'Chaincode(id=' + this._id_1 + ', channelId=' + this._channelId_0 + ')';
  };
  Chaincode_0.prototype.hashCode = function () {
    var result = getStringHashCode(this._id_1);
    result = imul(result, 31) + getStringHashCode(this._channelId_0) | 0;
    return result;
  };
  Chaincode_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Chaincode_0))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Chaincode_0 ? other : THROW_CCE();
    if (!(this._id_1 === tmp0_other_with_cast._id_1))
      return false;
    if (!(this._channelId_0 === tmp0_other_with_cast._channelId_0))
      return false;
    return true;
  };
  Chaincode_0.$metadata$ = {
    simpleName: 'Chaincode',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(Chaincode_0.prototype, 'id', {
    configurable: true,
    get: Chaincode_0.prototype._get_id__0_k$
  });
  Object.defineProperty(Chaincode_0.prototype, 'channelId', {
    configurable: true,
    get: Chaincode_0.prototype._get_channelId__0_k$
  });
  function Ssm_0(name, transitions) {
    this._name_0 = name;
    this._transitions = transitions;
  }
  Ssm_0.prototype._get_name__0_k$ = function () {
    return this._name_0;
  };
  Ssm_0.prototype._get_transitions__0_k$ = function () {
    return this._transitions;
  };
  Ssm_0.prototype.component1 = function () {
    return this._name_0;
  };
  Ssm_0.prototype.component2 = function () {
    return this._transitions;
  };
  Ssm_0.prototype.copy = function (name, transitions) {
    return this.copy_rikwln_k$(name === void 1 ? this._name_0 : name, transitions === void 1 ? this._transitions : transitions);
  };
  Ssm_0.prototype.copy_rikwln_k$ = function (name, transitions) {
    return new Ssm_0(name, transitions);
  };
  Ssm_0.prototype.copy$default_5owj7_k$ = function (name, transitions, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      name = this._name_0;
    if (!(($mask0 & 2) === 0))
      transitions = this._transitions;
    return this.copy_rikwln_k$(name, transitions);
  };
  Ssm_0.prototype.toString = function () {
    return '' + 'Ssm(name=' + this._name_0 + ', transitions=' + this._transitions + ')';
  };
  Ssm_0.prototype.hashCode = function () {
    var result = getStringHashCode(this._name_0);
    result = imul(result, 31) + hashCode(this._transitions) | 0;
    return result;
  };
  Ssm_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Ssm_0))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Ssm_0 ? other : THROW_CCE();
    if (!(this._name_0 === tmp0_other_with_cast._name_0))
      return false;
    if (!equals_0(this._transitions, tmp0_other_with_cast._transitions))
      return false;
    return true;
  };
  Ssm_0.$metadata$ = {
    simpleName: 'Ssm',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(Ssm_0.prototype, 'name', {
    configurable: true,
    get: Ssm_0.prototype._get_name__0_k$
  });
  Object.defineProperty(Ssm_0.prototype, 'transitions', {
    configurable: true,
    get: Ssm_0.prototype._get_transitions__0_k$
  });
  function SsmContext_init_$Init$(session, public_0, iteration, private_0, $mask0, $marker, $this) {
    if (!(($mask0 & 8) === 0))
      private_0 = null;
    SsmContext_0.call($this, session, public_0, iteration, private_0);
    return $this;
  }
  function SsmContext_init_$Create$(session, public_0, iteration, private_0, $mask0, $marker) {
    return SsmContext_init_$Init$(session, public_0, iteration, private_0, $mask0, $marker, Object.create(SsmContext_0.prototype));
  }
  function SsmContext_0(session, public_0, iteration, private_0) {
    var private_1 = private_0 === void 1 ? null : private_0;
    this._session = session;
    this._public = public_0;
    this._iteration = iteration;
    this._private = private_1;
  }
  SsmContext_0.prototype._get_session__0_k$ = function () {
    return this._session;
  };
  SsmContext_0.prototype._get_public__0_k$ = function () {
    return this._public;
  };
  SsmContext_0.prototype._get_iteration__0_k$ = function () {
    return this._iteration;
  };
  SsmContext_0.prototype._get_private__0_k$ = function () {
    return this._private;
  };
  SsmContext_0.prototype.component1 = function () {
    return this._session;
  };
  SsmContext_0.prototype.component2 = function () {
    return this._public;
  };
  SsmContext_0.prototype.component3 = function () {
    return this._iteration;
  };
  SsmContext_0.prototype.component4 = function () {
    return this._private;
  };
  SsmContext_0.prototype.copy = function (session, public_0, iteration, private_0) {
    return this.copy_gvmg3n_k$(session === void 1 ? this._session : session, public_0 === void 1 ? this._public : public_0, iteration === void 1 ? this._iteration : iteration, private_0 === void 1 ? this._private : private_0);
  };
  SsmContext_0.prototype.copy_gvmg3n_k$ = function (session, public_0, iteration, private_0) {
    return new SsmContext_0(session, public_0, iteration, private_0);
  };
  SsmContext_0.prototype.copy$default_dk1nvh_k$ = function (session, public_0, iteration, private_0, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      session = this._session;
    if (!(($mask0 & 2) === 0))
      public_0 = this._public;
    if (!(($mask0 & 4) === 0))
      iteration = this._iteration;
    if (!(($mask0 & 8) === 0))
      private_0 = this._private;
    return this.copy_gvmg3n_k$(session, public_0, iteration, private_0);
  };
  SsmContext_0.prototype.toString = function () {
    return '' + 'SsmContext(session=' + this._session + ', public=' + this._public + ', iteration=' + this._iteration + ', private=' + this._private + ')';
  };
  SsmContext_0.prototype.hashCode = function () {
    var result = getStringHashCode(this._session);
    result = imul(result, 31) + getStringHashCode(this._public) | 0;
    result = imul(result, 31) + this._iteration | 0;
    result = imul(result, 31) + (this._private == null ? 0 : hashCode(this._private)) | 0;
    return result;
  };
  SsmContext_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SsmContext_0))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof SsmContext_0 ? other : THROW_CCE();
    if (!(this._session === tmp0_other_with_cast._session))
      return false;
    if (!(this._public === tmp0_other_with_cast._public))
      return false;
    if (!(this._iteration === tmp0_other_with_cast._iteration))
      return false;
    if (!equals_0(this._private, tmp0_other_with_cast._private))
      return false;
    return true;
  };
  SsmContext_0.$metadata$ = {
    simpleName: 'SsmContext',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(SsmContext_0.prototype, 'session', {
    configurable: true,
    get: SsmContext_0.prototype._get_session__0_k$
  });
  Object.defineProperty(SsmContext_0.prototype, 'public', {
    configurable: true,
    get: SsmContext_0.prototype._get_public__0_k$
  });
  Object.defineProperty(SsmContext_0.prototype, 'iteration', {
    configurable: true,
    get: SsmContext_0.prototype._get_iteration__0_k$
  });
  Object.defineProperty(SsmContext_0.prototype, 'private', {
    configurable: true,
    get: SsmContext_0.prototype._get_private__0_k$
  });
  function SsmGrant_0(user, iteration, credits) {
    this._user = user;
    this._iteration_0 = iteration;
    this._credits = credits;
  }
  SsmGrant_0.prototype._get_user__0_k$ = function () {
    return this._user;
  };
  SsmGrant_0.prototype._get_iteration__0_k$ = function () {
    return this._iteration_0;
  };
  SsmGrant_0.prototype._get_credits__0_k$ = function () {
    return this._credits;
  };
  SsmGrant_0.prototype.component1 = function () {
    return this._user;
  };
  SsmGrant_0.prototype.component2 = function () {
    return this._iteration_0;
  };
  SsmGrant_0.prototype.component3 = function () {
    return this._credits;
  };
  SsmGrant_0.prototype.copy = function (user, iteration, credits) {
    return this.copy_pfs7m1_k$(user === void 1 ? this._user : user, iteration === void 1 ? this._iteration_0 : iteration, credits === void 1 ? this._credits : credits);
  };
  SsmGrant_0.prototype.copy_pfs7m1_k$ = function (user, iteration, credits) {
    return new SsmGrant_0(user, iteration, credits);
  };
  SsmGrant_0.prototype.copy$default_b864z7_k$ = function (user, iteration, credits, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      user = this._user;
    if (!(($mask0 & 2) === 0))
      iteration = this._iteration_0;
    if (!(($mask0 & 4) === 0))
      credits = this._credits;
    return this.copy_pfs7m1_k$(user, iteration, credits);
  };
  SsmGrant_0.prototype.toString = function () {
    return '' + 'SsmGrant(user=' + this._user + ', iteration=' + this._iteration_0 + ', credits=' + this._credits + ')';
  };
  SsmGrant_0.prototype.hashCode = function () {
    var result = getStringHashCode(this._user);
    result = imul(result, 31) + this._iteration_0 | 0;
    result = imul(result, 31) + hashCode(this._credits) | 0;
    return result;
  };
  SsmGrant_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SsmGrant_0))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof SsmGrant_0 ? other : THROW_CCE();
    if (!(this._user === tmp0_other_with_cast._user))
      return false;
    if (!(this._iteration_0 === tmp0_other_with_cast._iteration_0))
      return false;
    if (!equals_0(this._credits, tmp0_other_with_cast._credits))
      return false;
    return true;
  };
  SsmGrant_0.$metadata$ = {
    simpleName: 'SsmGrant',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(SsmGrant_0.prototype, 'user', {
    configurable: true,
    get: SsmGrant_0.prototype._get_user__0_k$
  });
  Object.defineProperty(SsmGrant_0.prototype, 'iteration', {
    configurable: true,
    get: SsmGrant_0.prototype._get_iteration__0_k$
  });
  Object.defineProperty(SsmGrant_0.prototype, 'credits', {
    configurable: true,
    get: SsmGrant_0.prototype._get_credits__0_k$
  });
  function Credit_0(amount) {
    this._amount = amount;
  }
  Credit_0.prototype._get_amount__0_k$ = function () {
    return this._amount;
  };
  Credit_0.prototype.component1 = function () {
    return this._amount;
  };
  Credit_0.prototype.copy = function (amount) {
    return this.copy_ha5a7z_k$(amount === void 1 ? this._amount : amount);
  };
  Credit_0.prototype.copy_ha5a7z_k$ = function (amount) {
    return new Credit_0(amount);
  };
  Credit_0.prototype.copy$default_l3mjq9_k$ = function (amount, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      amount = this._amount;
    return this.copy_ha5a7z_k$(amount);
  };
  Credit_0.prototype.toString = function () {
    return '' + 'Credit(amount=' + this._amount + ')';
  };
  Credit_0.prototype.hashCode = function () {
    return this._amount;
  };
  Credit_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Credit_0))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Credit_0 ? other : THROW_CCE();
    if (!(this._amount === tmp0_other_with_cast._amount))
      return false;
    return true;
  };
  Credit_0.$metadata$ = {
    simpleName: 'Credit',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(Credit_0.prototype, 'amount', {
    configurable: true,
    get: Credit_0.prototype._get_amount__0_k$
  });
  function SsmSession_init_$Init$(ssm, session, roles, public_0, private_0, $mask0, $marker, $this) {
    if (!(($mask0 & 16) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      $l$block: {
        tmp$ret$0 = HashMap_init_$Create$();
        tmp$ret$0_0 = Unit_getInstance();
        break $l$block;
      }
      private_0 = tmp$ret$0;
    }SsmSession_0.call($this, ssm, session, roles, public_0, private_0);
    return $this;
  }
  function SsmSession_init_$Create$(ssm, session, roles, public_0, private_0, $mask0, $marker) {
    return SsmSession_init_$Init$(ssm, session, roles, public_0, private_0, $mask0, $marker, Object.create(SsmSession_0.prototype));
  }
  function SsmSession_0(ssm, session, roles, public_0, private_0) {
    var tmp;
    if (private_0 === void 1) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      $l$block: {
        tmp$ret$0 = HashMap_init_$Create$();
        tmp$ret$0_0 = Unit_getInstance();
        break $l$block;
      }
      tmp = tmp$ret$0;
    } else {
      tmp = private_0;
    }
    var private_1 = tmp;
    this._ssm = ssm;
    this._session_0 = session;
    this._roles = roles;
    this._public_0 = public_0;
    this._private_0 = private_1;
  }
  SsmSession_0.prototype._get_ssm__0_k$ = function () {
    return this._ssm;
  };
  SsmSession_0.prototype._get_session__0_k$ = function () {
    return this._session_0;
  };
  SsmSession_0.prototype._get_roles__0_k$ = function () {
    return this._roles;
  };
  SsmSession_0.prototype._get_public__0_k$ = function () {
    return this._public_0;
  };
  SsmSession_0.prototype._get_private__0_k$ = function () {
    return this._private_0;
  };
  SsmSession_0.$metadata$ = {
    simpleName: 'SsmSession',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(SsmSession_0.prototype, 'ssm', {
    configurable: true,
    get: SsmSession_0.prototype._get_ssm__0_k$
  });
  Object.defineProperty(SsmSession_0.prototype, 'session', {
    configurable: true,
    get: SsmSession_0.prototype._get_session__0_k$
  });
  Object.defineProperty(SsmSession_0.prototype, 'roles', {
    configurable: true,
    get: SsmSession_0.prototype._get_roles__0_k$
  });
  Object.defineProperty(SsmSession_0.prototype, 'public', {
    configurable: true,
    get: SsmSession_0.prototype._get_public__0_k$
  });
  Object.defineProperty(SsmSession_0.prototype, 'private', {
    configurable: true,
    get: SsmSession_0.prototype._get_private__0_k$
  });
  function SsmSessionState_init_$Init$(ssm, session, roles, public_0, private_0, origin, current, iteration, $mask0, $marker, $this) {
    if (!(($mask0 & 16) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      $l$block: {
        tmp$ret$0 = HashMap_init_$Create$();
        tmp$ret$0_0 = Unit_getInstance();
        break $l$block;
      }
      private_0 = tmp$ret$0;
    }SsmSessionState_0.call($this, ssm, session, roles, public_0, private_0, origin, current, iteration);
    return $this;
  }
  function SsmSessionState_init_$Create$(ssm, session, roles, public_0, private_0, origin, current, iteration, $mask0, $marker) {
    return SsmSessionState_init_$Init$(ssm, session, roles, public_0, private_0, origin, current, iteration, $mask0, $marker, Object.create(SsmSessionState_0.prototype));
  }
  function SsmSessionState_0(ssm, session, roles, public_0, private_0, origin, current, iteration) {
    var tmp;
    if (private_0 === void 1) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      $l$block: {
        tmp$ret$0 = HashMap_init_$Create$();
        tmp$ret$0_0 = Unit_getInstance();
        break $l$block;
      }
      tmp = tmp$ret$0;
    } else {
      tmp = private_0;
    }
    var private_1 = tmp;
    this._ssm_0 = ssm;
    this._session_1 = session;
    this._roles_0 = roles;
    this._public_1 = public_0;
    this._private_1 = private_1;
    this._origin = origin;
    this._current = current;
    this._iteration_1 = iteration;
  }
  SsmSessionState_0.prototype._get_ssm__0_k$ = function () {
    return this._ssm_0;
  };
  SsmSessionState_0.prototype._get_session__0_k$ = function () {
    return this._session_1;
  };
  SsmSessionState_0.prototype._get_roles__0_k$ = function () {
    return this._roles_0;
  };
  SsmSessionState_0.prototype._get_public__0_k$ = function () {
    return this._public_1;
  };
  SsmSessionState_0.prototype._get_private__0_k$ = function () {
    return this._private_1;
  };
  SsmSessionState_0.prototype._get_origin__0_k$ = function () {
    return this._origin;
  };
  SsmSessionState_0.prototype._get_current__0_k$ = function () {
    return this._current;
  };
  SsmSessionState_0.prototype._get_iteration__0_k$ = function () {
    return this._iteration_1;
  };
  SsmSessionState_0.prototype.component1 = function () {
    return this._ssm_0;
  };
  SsmSessionState_0.prototype.component2 = function () {
    return this._session_1;
  };
  SsmSessionState_0.prototype.component3 = function () {
    return this._roles_0;
  };
  SsmSessionState_0.prototype.component4 = function () {
    return this._public_1;
  };
  SsmSessionState_0.prototype.component5 = function () {
    return this._private_1;
  };
  SsmSessionState_0.prototype.component6 = function () {
    return this._origin;
  };
  SsmSessionState_0.prototype.component7 = function () {
    return this._current;
  };
  SsmSessionState_0.prototype.component8 = function () {
    return this._iteration_1;
  };
  SsmSessionState_0.prototype.copy = function (ssm, session, roles, public_0, private_0, origin, current, iteration) {
    return this.copy_o0o7it_k$(ssm === void 1 ? this._ssm_0 : ssm, session === void 1 ? this._session_1 : session, roles === void 1 ? this._roles_0 : roles, public_0 === void 1 ? this._public_1 : public_0, private_0 === void 1 ? this._private_1 : private_0, origin === void 1 ? this._origin : origin, current === void 1 ? this._current : current, iteration === void 1 ? this._iteration_1 : iteration);
  };
  SsmSessionState_0.prototype.copy_o0o7it_k$ = function (ssm, session, roles, public_0, private_0, origin, current, iteration) {
    return new SsmSessionState_0(ssm, session, roles, public_0, private_0, origin, current, iteration);
  };
  SsmSessionState_0.prototype.copy$default_2zzd76_k$ = function (ssm, session, roles, public_0, private_0, origin, current, iteration, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      ssm = this._ssm_0;
    if (!(($mask0 & 2) === 0))
      session = this._session_1;
    if (!(($mask0 & 4) === 0))
      roles = this._roles_0;
    if (!(($mask0 & 8) === 0))
      public_0 = this._public_1;
    if (!(($mask0 & 16) === 0))
      private_0 = this._private_1;
    if (!(($mask0 & 32) === 0))
      origin = this._origin;
    if (!(($mask0 & 64) === 0))
      current = this._current;
    if (!(($mask0 & 128) === 0))
      iteration = this._iteration_1;
    return this.copy_o0o7it_k$(ssm, session, roles, public_0, private_0, origin, current, iteration);
  };
  SsmSessionState_0.prototype.toString = function () {
    return '' + 'SsmSessionState(ssm=' + this._ssm_0 + ', session=' + this._session_1 + ', roles=' + this._roles_0 + ', public=' + this._public_1 + ', private=' + this._private_1 + ', origin=' + this._origin + ', current=' + this._current + ', iteration=' + this._iteration_1 + ')';
  };
  SsmSessionState_0.prototype.hashCode = function () {
    var result = this._ssm_0 == null ? 0 : getStringHashCode(this._ssm_0);
    result = imul(result, 31) + getStringHashCode(this._session_1) | 0;
    result = imul(result, 31) + (this._roles_0 == null ? 0 : hashCode(this._roles_0)) | 0;
    result = imul(result, 31) + (this._public_1 == null ? 0 : hashCode(this._public_1)) | 0;
    result = imul(result, 31) + (this._private_1 == null ? 0 : hashCode(this._private_1)) | 0;
    result = imul(result, 31) + (this._origin == null ? 0 : this._origin.hashCode()) | 0;
    result = imul(result, 31) + this._current | 0;
    result = imul(result, 31) + this._iteration_1 | 0;
    return result;
  };
  SsmSessionState_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SsmSessionState_0))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof SsmSessionState_0 ? other : THROW_CCE();
    if (!(this._ssm_0 == tmp0_other_with_cast._ssm_0))
      return false;
    if (!(this._session_1 === tmp0_other_with_cast._session_1))
      return false;
    if (!equals_0(this._roles_0, tmp0_other_with_cast._roles_0))
      return false;
    if (!equals_0(this._public_1, tmp0_other_with_cast._public_1))
      return false;
    if (!equals_0(this._private_1, tmp0_other_with_cast._private_1))
      return false;
    if (!equals_0(this._origin, tmp0_other_with_cast._origin))
      return false;
    if (!(this._current === tmp0_other_with_cast._current))
      return false;
    if (!(this._iteration_1 === tmp0_other_with_cast._iteration_1))
      return false;
    return true;
  };
  SsmSessionState_0.$metadata$ = {
    simpleName: 'SsmSessionState',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(SsmSessionState_0.prototype, 'ssm', {
    configurable: true,
    get: SsmSessionState_0.prototype._get_ssm__0_k$
  });
  Object.defineProperty(SsmSessionState_0.prototype, 'session', {
    configurable: true,
    get: SsmSessionState_0.prototype._get_session__0_k$
  });
  Object.defineProperty(SsmSessionState_0.prototype, 'roles', {
    configurable: true,
    get: SsmSessionState_0.prototype._get_roles__0_k$
  });
  Object.defineProperty(SsmSessionState_0.prototype, 'public', {
    configurable: true,
    get: SsmSessionState_0.prototype._get_public__0_k$
  });
  Object.defineProperty(SsmSessionState_0.prototype, 'private', {
    configurable: true,
    get: SsmSessionState_0.prototype._get_private__0_k$
  });
  Object.defineProperty(SsmSessionState_0.prototype, 'origin', {
    configurable: true,
    get: SsmSessionState_0.prototype._get_origin__0_k$
  });
  Object.defineProperty(SsmSessionState_0.prototype, 'current', {
    configurable: true,
    get: SsmSessionState_0.prototype._get_current__0_k$
  });
  Object.defineProperty(SsmSessionState_0.prototype, 'iteration', {
    configurable: true,
    get: SsmSessionState_0.prototype._get_iteration__0_k$
  });
  function SsmSessionStateLog_0(txId, state) {
    this._txId = txId;
    this._state_0 = state;
  }
  SsmSessionStateLog_0.prototype._get_txId__0_k$ = function () {
    return this._txId;
  };
  SsmSessionStateLog_0.prototype._get_state__0_k$ = function () {
    return this._state_0;
  };
  SsmSessionStateLog_0.prototype.component1 = function () {
    return this._txId;
  };
  SsmSessionStateLog_0.prototype.component2 = function () {
    return this._state_0;
  };
  SsmSessionStateLog_0.prototype.copy = function (txId, state) {
    return this.copy_edk381_k$(txId === void 1 ? this._txId : txId, state === void 1 ? this._state_0 : state);
  };
  SsmSessionStateLog_0.prototype.copy_edk381_k$ = function (txId, state) {
    return new SsmSessionStateLog_0(txId, state);
  };
  SsmSessionStateLog_0.prototype.copy$default_qcmjzf_k$ = function (txId, state, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      txId = this._txId;
    if (!(($mask0 & 2) === 0))
      state = this._state_0;
    return this.copy_edk381_k$(txId, state);
  };
  SsmSessionStateLog_0.prototype.toString = function () {
    return '' + 'SsmSessionStateLog(txId=' + this._txId + ', state=' + this._state_0 + ')';
  };
  SsmSessionStateLog_0.prototype.hashCode = function () {
    var result = getStringHashCode(this._txId);
    result = imul(result, 31) + this._state_0.hashCode() | 0;
    return result;
  };
  SsmSessionStateLog_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SsmSessionStateLog_0))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof SsmSessionStateLog_0 ? other : THROW_CCE();
    if (!(this._txId === tmp0_other_with_cast._txId))
      return false;
    if (!this._state_0.equals(tmp0_other_with_cast._state_0))
      return false;
    return true;
  };
  SsmSessionStateLog_0.$metadata$ = {
    simpleName: 'SsmSessionStateLog',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(SsmSessionStateLog_0.prototype, 'txId', {
    configurable: true,
    get: SsmSessionStateLog_0.prototype._get_txId__0_k$
  });
  Object.defineProperty(SsmSessionStateLog_0.prototype, 'state', {
    configurable: true,
    get: SsmSessionStateLog_0.prototype._get_state__0_k$
  });
  function SsmTransition_0(from, to_0, role, action) {
    this._from = from;
    this._to = to_0;
    this._role = role;
    this._action = action;
  }
  SsmTransition_0.prototype._get_from__0_k$ = function () {
    return this._from;
  };
  SsmTransition_0.prototype._get_to__0_k$ = function () {
    return this._to;
  };
  SsmTransition_0.prototype._get_role__0_k$ = function () {
    return this._role;
  };
  SsmTransition_0.prototype._get_action__0_k$ = function () {
    return this._action;
  };
  SsmTransition_0.prototype.component1 = function () {
    return this._from;
  };
  SsmTransition_0.prototype.component2 = function () {
    return this._to;
  };
  SsmTransition_0.prototype.component3 = function () {
    return this._role;
  };
  SsmTransition_0.prototype.component4 = function () {
    return this._action;
  };
  SsmTransition_0.prototype.copy = function (from, to_0, role, action) {
    return this.copy_uo2hk2_k$(from === void 1 ? this._from : from, to_0 === void 1 ? this._to : to_0, role === void 1 ? this._role : role, action === void 1 ? this._action : action);
  };
  SsmTransition_0.prototype.copy_uo2hk2_k$ = function (from, to_0, role, action) {
    return new SsmTransition_0(from, to_0, role, action);
  };
  SsmTransition_0.prototype.copy$default_1pmj36_k$ = function (from, to_0, role, action, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      from = this._from;
    if (!(($mask0 & 2) === 0))
      to_0 = this._to;
    if (!(($mask0 & 4) === 0))
      role = this._role;
    if (!(($mask0 & 8) === 0))
      action = this._action;
    return this.copy_uo2hk2_k$(from, to_0, role, action);
  };
  SsmTransition_0.prototype.toString = function () {
    return '' + 'SsmTransition(from=' + this._from + ', to=' + this._to + ', role=' + this._role + ', action=' + this._action + ')';
  };
  SsmTransition_0.prototype.hashCode = function () {
    var result = this._from;
    result = imul(result, 31) + this._to | 0;
    result = imul(result, 31) + getStringHashCode(this._role) | 0;
    result = imul(result, 31) + getStringHashCode(this._action) | 0;
    return result;
  };
  SsmTransition_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SsmTransition_0))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof SsmTransition_0 ? other : THROW_CCE();
    if (!(this._from === tmp0_other_with_cast._from))
      return false;
    if (!(this._to === tmp0_other_with_cast._to))
      return false;
    if (!(this._role === tmp0_other_with_cast._role))
      return false;
    if (!(this._action === tmp0_other_with_cast._action))
      return false;
    return true;
  };
  SsmTransition_0.$metadata$ = {
    simpleName: 'SsmTransition',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(SsmTransition_0.prototype, 'from', {
    configurable: true,
    get: SsmTransition_0.prototype._get_from__0_k$
  });
  Object.defineProperty(SsmTransition_0.prototype, 'to', {
    configurable: true,
    get: SsmTransition_0.prototype._get_to__0_k$
  });
  Object.defineProperty(SsmTransition_0.prototype, 'role', {
    configurable: true,
    get: SsmTransition_0.prototype._get_role__0_k$
  });
  Object.defineProperty(SsmTransition_0.prototype, 'action', {
    configurable: true,
    get: SsmTransition_0.prototype._get_action__0_k$
  });
  function Companion_8() {
    Companion_instance_7 = this;
    this._PARTS = 4;
    this._PREFIX = 'ssm';
  }
  Companion_8.prototype._get_PARTS__0_k$ = function () {
    return this._PARTS;
  };
  Companion_8.prototype._get_PREFIX__0_k$ = function () {
    return this._PREFIX;
  };
  Companion_8.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(Companion_8.prototype, 'PARTS', {
    configurable: true,
    get: Companion_8.prototype._get_PARTS__0_k$
  });
  Object.defineProperty(Companion_8.prototype, 'PREFIX', {
    configurable: true,
    get: Companion_8.prototype._get_PREFIX__0_k$
  });
  var Companion_instance_7;
  function Companion_getInstance_7() {
    if (Companion_instance_7 == null)
      new Companion_8();
    return Companion_instance_7;
  }
  function SsmUri_0(uri) {
    Companion_getInstance_7();
    this._uri = uri;
    var tmp = this;
    tmp._burst = split$default(this._uri, [':'], false, 0, 6, null);
    {
      var tmp_0 = this._burst._get_size__0_k$();
      Companion_getInstance_7();
      var tmp0_require_0 = tmp_0 === 4;
      {
      }
      {
        {
        }
        if (!tmp0_require_0) {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = 'Failed requirement.';
            break $l$block;
          }
          var message_1_1 = tmp$ret$0;
          throw IllegalArgumentException_init_$Create$(toString_1(message_1_1));
        }}
    }
    {
      var tmp_1 = first(this._burst);
      Companion_getInstance_7();
      var tmp1_require_0 = tmp_1 === 'ssm';
      {
      }
      {
        {
        }
        if (!tmp1_require_0) {
          var tmp$ret$1;
          $l$block_0: {
            tmp$ret$1 = 'Failed requirement.';
            break $l$block_0;
          }
          var message_1_1_0 = tmp$ret$1;
          throw IllegalArgumentException_init_$Create$(toString_1(message_1_1_0));
        }}
    }
  }
  SsmUri_0.prototype._get_uri__0_k$ = function () {
    return this._uri;
  };
  SsmUri_0.prototype._get_channelId__0_k$ = function () {
    return this._burst.get_ha5a7z_k$(1);
  };
  SsmUri_0.prototype._get_chaincodeId__0_k$ = function () {
    return this._burst.get_ha5a7z_k$(2);
  };
  SsmUri_0.prototype._get_ssmName__0_k$ = function () {
    return this._burst.get_ha5a7z_k$(3);
  };
  SsmUri_0.prototype._get_ssmVersion__0_k$ = function () {
    return '1.0.0';
  };
  SsmUri_0.prototype.component1 = function () {
    return this._uri;
  };
  SsmUri_0.prototype.copy = function (uri) {
    return this.copy_6wfw3l_k$(uri === void 1 ? this._uri : uri);
  };
  SsmUri_0.prototype.copy_6wfw3l_k$ = function (uri) {
    return new SsmUri_0(uri);
  };
  SsmUri_0.prototype.copy$default_nmiqce_k$ = function (uri, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      uri = this._uri;
    return this.copy_6wfw3l_k$(uri);
  };
  SsmUri_0.prototype.toString = function () {
    return '' + 'SsmUri(uri=' + this._uri + ')';
  };
  SsmUri_0.prototype.hashCode = function () {
    return getStringHashCode(this._uri);
  };
  SsmUri_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SsmUri_0))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof SsmUri_0 ? other : THROW_CCE();
    if (!(this._uri === tmp0_other_with_cast._uri))
      return false;
    return true;
  };
  SsmUri_0.$metadata$ = {
    simpleName: 'SsmUri',
    kind: 'class',
    interfaces: [SsmUriDTO]
  };
  Object.defineProperty(SsmUri_0.prototype, 'uri', {
    configurable: true,
    get: SsmUri_0.prototype._get_uri__0_k$
  });
  Object.defineProperty(SsmUri_0.prototype, 'channelId', {
    configurable: true,
    get: SsmUri_0.prototype._get_channelId__0_k$
  });
  Object.defineProperty(SsmUri_0.prototype, 'chaincodeId', {
    configurable: true,
    get: SsmUri_0.prototype._get_chaincodeId__0_k$
  });
  Object.defineProperty(SsmUri_0.prototype, 'ssmName', {
    configurable: true,
    get: SsmUri_0.prototype._get_ssmName__0_k$
  });
  Object.defineProperty(SsmUri_0.prototype, 'ssmVersion', {
    configurable: true,
    get: SsmUri_0.prototype._get_ssmVersion__0_k$
  });
  function SsmUriDTO() {
  }
  SsmUriDTO.$metadata$ = {
    simpleName: 'SsmUriDTO',
    kind: 'interface',
    interfaces: []
  };
  function SsmGetAdminQuery_0(name) {
    this._name_1 = name;
  }
  SsmGetAdminQuery_0.prototype._get_name__0_k$ = function () {
    return this._name_1;
  };
  SsmGetAdminQuery_0.$metadata$ = {
    simpleName: 'SsmGetAdminQuery',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(SsmGetAdminQuery_0.prototype, 'name', {
    configurable: true,
    get: SsmGetAdminQuery_0.prototype._get_name__0_k$
  });
  function SsmGetAdminResult_0(item) {
    this._item = item;
  }
  SsmGetAdminResult_0.prototype._get_item__0_k$ = function () {
    return this._item;
  };
  SsmGetAdminResult_0.$metadata$ = {
    simpleName: 'SsmGetAdminResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(SsmGetAdminResult_0.prototype, 'item', {
    configurable: true,
    get: SsmGetAdminResult_0.prototype._get_item__0_k$
  });
  function SsmGetQuery_0(name) {
    this._name_2 = name;
  }
  SsmGetQuery_0.prototype._get_name__0_k$ = function () {
    return this._name_2;
  };
  SsmGetQuery_0.$metadata$ = {
    simpleName: 'SsmGetQuery',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(SsmGetQuery_0.prototype, 'name', {
    configurable: true,
    get: SsmGetQuery_0.prototype._get_name__0_k$
  });
  function SsmGetResult_0(item) {
    this._item_0 = item;
  }
  SsmGetResult_0.prototype._get_item__0_k$ = function () {
    return this._item_0;
  };
  SsmGetResult_0.$metadata$ = {
    simpleName: 'SsmGetResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(SsmGetResult_0.prototype, 'item', {
    configurable: true,
    get: SsmGetResult_0.prototype._get_item__0_k$
  });
  function SsmGetSessionLogsQuery_0(ssmUri, sessionName) {
    this._ssmUri = ssmUri;
    this._sessionName = sessionName;
  }
  SsmGetSessionLogsQuery_0.prototype._get_ssmUri__0_k$ = function () {
    return this._ssmUri;
  };
  SsmGetSessionLogsQuery_0.prototype._get_sessionName__0_k$ = function () {
    return this._sessionName;
  };
  SsmGetSessionLogsQuery_0.$metadata$ = {
    simpleName: 'SsmGetSessionLogsQuery',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(SsmGetSessionLogsQuery_0.prototype, 'ssmUri', {
    configurable: true,
    get: SsmGetSessionLogsQuery_0.prototype._get_ssmUri__0_k$
  });
  Object.defineProperty(SsmGetSessionLogsQuery_0.prototype, 'sessionName', {
    configurable: true,
    get: SsmGetSessionLogsQuery_0.prototype._get_sessionName__0_k$
  });
  function SsmGetSessionLogsQueryResult_0(ssmUri, sessionName, logs) {
    this._ssmUri_0 = ssmUri;
    this._sessionName_0 = sessionName;
    this._logs = logs;
  }
  SsmGetSessionLogsQueryResult_0.prototype._get_ssmUri__0_k$ = function () {
    return this._ssmUri_0;
  };
  SsmGetSessionLogsQueryResult_0.prototype._get_sessionName__0_k$ = function () {
    return this._sessionName_0;
  };
  SsmGetSessionLogsQueryResult_0.prototype._get_logs__0_k$ = function () {
    return this._logs;
  };
  SsmGetSessionLogsQueryResult_0.prototype.component1 = function () {
    return this._ssmUri_0;
  };
  SsmGetSessionLogsQueryResult_0.prototype.component2 = function () {
    return this._sessionName_0;
  };
  SsmGetSessionLogsQueryResult_0.prototype.component3 = function () {
    return this._logs;
  };
  SsmGetSessionLogsQueryResult_0.prototype.copy = function (ssmUri, sessionName, logs) {
    return this.copy_iv239m_k$(ssmUri === void 1 ? this._ssmUri_0 : ssmUri, sessionName === void 1 ? this._sessionName_0 : sessionName, logs === void 1 ? this._logs : logs);
  };
  SsmGetSessionLogsQueryResult_0.prototype.copy_iv239m_k$ = function (ssmUri, sessionName, logs) {
    return new SsmGetSessionLogsQueryResult_0(ssmUri, sessionName, logs);
  };
  SsmGetSessionLogsQueryResult_0.prototype.copy$default_5s6c8h_k$ = function (ssmUri, sessionName, logs, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      ssmUri = this._ssmUri_0;
    if (!(($mask0 & 2) === 0))
      sessionName = this._sessionName_0;
    if (!(($mask0 & 4) === 0))
      logs = this._logs;
    return this.copy_iv239m_k$(ssmUri, sessionName, logs);
  };
  SsmGetSessionLogsQueryResult_0.prototype.toString = function () {
    return '' + 'SsmGetSessionLogsQueryResult(ssmUri=' + this._ssmUri_0 + ', sessionName=' + this._sessionName_0 + ', logs=' + this._logs + ')';
  };
  SsmGetSessionLogsQueryResult_0.prototype.hashCode = function () {
    var result = this._ssmUri_0.hashCode();
    result = imul(result, 31) + getStringHashCode(this._sessionName_0) | 0;
    result = imul(result, 31) + hashCode(this._logs) | 0;
    return result;
  };
  SsmGetSessionLogsQueryResult_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SsmGetSessionLogsQueryResult_0))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof SsmGetSessionLogsQueryResult_0 ? other : THROW_CCE();
    if (!this._ssmUri_0.equals(tmp0_other_with_cast._ssmUri_0))
      return false;
    if (!(this._sessionName_0 === tmp0_other_with_cast._sessionName_0))
      return false;
    if (!equals_0(this._logs, tmp0_other_with_cast._logs))
      return false;
    return true;
  };
  SsmGetSessionLogsQueryResult_0.$metadata$ = {
    simpleName: 'SsmGetSessionLogsQueryResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(SsmGetSessionLogsQueryResult_0.prototype, 'ssmUri', {
    configurable: true,
    get: SsmGetSessionLogsQueryResult_0.prototype._get_ssmUri__0_k$
  });
  Object.defineProperty(SsmGetSessionLogsQueryResult_0.prototype, 'sessionName', {
    configurable: true,
    get: SsmGetSessionLogsQueryResult_0.prototype._get_sessionName__0_k$
  });
  Object.defineProperty(SsmGetSessionLogsQueryResult_0.prototype, 'logs', {
    configurable: true,
    get: SsmGetSessionLogsQueryResult_0.prototype._get_logs__0_k$
  });
  function SsmGetSessionQuery_0(sessionName) {
    this._sessionName_1 = sessionName;
  }
  SsmGetSessionQuery_0.prototype._get_sessionName__0_k$ = function () {
    return this._sessionName_1;
  };
  SsmGetSessionQuery_0.$metadata$ = {
    simpleName: 'SsmGetSessionQuery',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(SsmGetSessionQuery_0.prototype, 'sessionName', {
    configurable: true,
    get: SsmGetSessionQuery_0.prototype._get_sessionName__0_k$
  });
  function SsmGetSessionResult_0(item) {
    this._item_1 = item;
  }
  SsmGetSessionResult_0.prototype._get_item__0_k$ = function () {
    return this._item_1;
  };
  SsmGetSessionResult_0.$metadata$ = {
    simpleName: 'SsmGetSessionResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(SsmGetSessionResult_0.prototype, 'item', {
    configurable: true,
    get: SsmGetSessionResult_0.prototype._get_item__0_k$
  });
  function SsmGetTransactionQuery_0(id) {
    this._id_2 = id;
  }
  SsmGetTransactionQuery_0.prototype._get_id__0_k$ = function () {
    return this._id_2;
  };
  SsmGetTransactionQuery_0.prototype.component1 = function () {
    return this._id_2;
  };
  SsmGetTransactionQuery_0.prototype.copy = function (id) {
    return this.copy_6wfw3l_k$(id === void 1 ? this._id_2 : id);
  };
  SsmGetTransactionQuery_0.prototype.copy_6wfw3l_k$ = function (id) {
    return new SsmGetTransactionQuery_0(id);
  };
  SsmGetTransactionQuery_0.prototype.copy$default_nmiqce_k$ = function (id, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      id = this._id_2;
    return this.copy_6wfw3l_k$(id);
  };
  SsmGetTransactionQuery_0.prototype.toString = function () {
    return '' + 'SsmGetTransactionQuery(id=' + this._id_2 + ')';
  };
  SsmGetTransactionQuery_0.prototype.hashCode = function () {
    return getStringHashCode(this._id_2);
  };
  SsmGetTransactionQuery_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SsmGetTransactionQuery_0))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof SsmGetTransactionQuery_0 ? other : THROW_CCE();
    if (!(this._id_2 === tmp0_other_with_cast._id_2))
      return false;
    return true;
  };
  SsmGetTransactionQuery_0.$metadata$ = {
    simpleName: 'SsmGetTransactionQuery',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(SsmGetTransactionQuery_0.prototype, 'id', {
    configurable: true,
    get: SsmGetTransactionQuery_0.prototype._get_id__0_k$
  });
  function SsmGetTransactionQueryResult_0(item) {
    this._item_2 = item;
  }
  SsmGetTransactionQueryResult_0.prototype._get_item__0_k$ = function () {
    return this._item_2;
  };
  SsmGetTransactionQueryResult_0.$metadata$ = {
    simpleName: 'SsmGetTransactionQueryResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(SsmGetTransactionQueryResult_0.prototype, 'item', {
    configurable: true,
    get: SsmGetTransactionQueryResult_0.prototype._get_item__0_k$
  });
  function SsmGetUserQuery_0(name) {
    this._name_3 = name;
  }
  SsmGetUserQuery_0.prototype._get_name__0_k$ = function () {
    return this._name_3;
  };
  SsmGetUserQuery_0.$metadata$ = {
    simpleName: 'SsmGetUserQuery',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(SsmGetUserQuery_0.prototype, 'name', {
    configurable: true,
    get: SsmGetUserQuery_0.prototype._get_name__0_k$
  });
  function SsmGetUserResult_0(item) {
    this._item_3 = item;
  }
  SsmGetUserResult_0.prototype._get_item__0_k$ = function () {
    return this._item_3;
  };
  SsmGetUserResult_0.$metadata$ = {
    simpleName: 'SsmGetUserResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(SsmGetUserResult_0.prototype, 'item', {
    configurable: true,
    get: SsmGetUserResult_0.prototype._get_item__0_k$
  });
  function SsmListAdminQuery_0() {
  }
  SsmListAdminQuery_0.$metadata$ = {
    simpleName: 'SsmListAdminQuery',
    kind: 'class',
    interfaces: []
  };
  function SsmListAdminResult_0(items) {
    this._items = items;
  }
  SsmListAdminResult_0.prototype._get_items__0_k$ = function () {
    return this._items;
  };
  SsmListAdminResult_0.$metadata$ = {
    simpleName: 'SsmListAdminResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(SsmListAdminResult_0.prototype, 'items', {
    configurable: true,
    get: SsmListAdminResult_0.prototype._get_items__0_k$
  });
  function SsmListSessionQuery_0() {
  }
  SsmListSessionQuery_0.$metadata$ = {
    simpleName: 'SsmListSessionQuery',
    kind: 'class',
    interfaces: []
  };
  function SsmListSessionResult_0(items) {
    this._items_0 = items;
  }
  SsmListSessionResult_0.prototype._get_items__0_k$ = function () {
    return this._items_0;
  };
  SsmListSessionResult_0.$metadata$ = {
    simpleName: 'SsmListSessionResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(SsmListSessionResult_0.prototype, 'items', {
    configurable: true,
    get: SsmListSessionResult_0.prototype._get_items__0_k$
  });
  function SsmListSsmQuery_0() {
  }
  SsmListSsmQuery_0.$metadata$ = {
    simpleName: 'SsmListSsmQuery',
    kind: 'class',
    interfaces: []
  };
  function SsmListSsmResult_0(items) {
    this._items_1 = items;
  }
  SsmListSsmResult_0.prototype._get_items__0_k$ = function () {
    return this._items_1;
  };
  SsmListSsmResult_0.$metadata$ = {
    simpleName: 'SsmListSsmResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(SsmListSsmResult_0.prototype, 'items', {
    configurable: true,
    get: SsmListSsmResult_0.prototype._get_items__0_k$
  });
  function SsmListUserQuery_0() {
  }
  SsmListUserQuery_0.$metadata$ = {
    simpleName: 'SsmListUserQuery',
    kind: 'class',
    interfaces: []
  };
  function SsmListUserResult_0(items) {
    this._items_2 = items;
  }
  SsmListUserResult_0.prototype._get_items__0_k$ = function () {
    return this._items_2;
  };
  SsmListUserResult_0.$metadata$ = {
    simpleName: 'SsmListUserResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(SsmListUserResult_0.prototype, 'items', {
    configurable: true,
    get: SsmListUserResult_0.prototype._get_items__0_k$
  });
  function Database_0(name) {
    this._name_4 = name;
  }
  Database_0.prototype._get_name__0_k$ = function () {
    return this._name_4;
  };
  Database_0.$metadata$ = {
    simpleName: 'Database',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(Database_0.prototype, 'name', {
    configurable: true,
    get: Database_0.prototype._get_name__0_k$
  });
  function DatabaseChanges_0(changeEventId, docType, objectId) {
    this._changeEventId = changeEventId;
    this._docType = docType;
    this._objectId = objectId;
  }
  DatabaseChanges_0.prototype._get_changeEventId__0_k$ = function () {
    return this._changeEventId;
  };
  DatabaseChanges_0.prototype._get_docType__0_k$ = function () {
    return this._docType;
  };
  DatabaseChanges_0.prototype._get_objectId__0_k$ = function () {
    return this._objectId;
  };
  DatabaseChanges_0.$metadata$ = {
    simpleName: 'DatabaseChanges',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(DatabaseChanges_0.prototype, 'changeEventId', {
    configurable: true,
    get: DatabaseChanges_0.prototype._get_changeEventId__0_k$
  });
  Object.defineProperty(DatabaseChanges_0.prototype, 'docType', {
    configurable: true,
    get: DatabaseChanges_0.prototype._get_docType__0_k$
  });
  Object.defineProperty(DatabaseChanges_0.prototype, 'objectId', {
    configurable: true,
    get: DatabaseChanges_0.prototype._get_objectId__0_k$
  });
  function CouchdbAdminListQuery_0(chaincodeUri) {
    this._chaincodeUri = chaincodeUri;
  }
  CouchdbAdminListQuery_0.prototype._get_chaincodeUri__0_k$ = function () {
    return this._chaincodeUri;
  };
  CouchdbAdminListQuery_0.$metadata$ = {
    simpleName: 'CouchdbAdminListQuery',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(CouchdbAdminListQuery_0.prototype, 'chaincodeUri', {
    configurable: true,
    get: CouchdbAdminListQuery_0.prototype._get_chaincodeUri__0_k$
  });
  function CouchdbAdminListQueryResult_0(items) {
    this._items_3 = items;
  }
  CouchdbAdminListQueryResult_0.prototype._get_items__0_k$ = function () {
    return this._items_3;
  };
  CouchdbAdminListQueryResult_0.$metadata$ = {
    simpleName: 'CouchdbAdminListQueryResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(CouchdbAdminListQueryResult_0.prototype, 'items', {
    configurable: true,
    get: CouchdbAdminListQueryResult_0.prototype._get_items__0_k$
  });
  function CouchdbChaincodeListQuery_0() {
  }
  CouchdbChaincodeListQuery_0.$metadata$ = {
    simpleName: 'CouchdbChaincodeListQuery',
    kind: 'class',
    interfaces: []
  };
  function CouchdbChaincodeListQueryResult_0(items) {
    this._items_4 = items;
  }
  CouchdbChaincodeListQueryResult_0.prototype._get_items__0_k$ = function () {
    return this._items_4;
  };
  CouchdbChaincodeListQueryResult_0.$metadata$ = {
    simpleName: 'CouchdbChaincodeListQueryResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(CouchdbChaincodeListQueryResult_0.prototype, 'items', {
    configurable: true,
    get: CouchdbChaincodeListQueryResult_0.prototype._get_items__0_k$
  });
  function CouchdbDatabaseGetChangesQuery_0(channelId, chaincodeId, docType, lastEventId, ssmName, sessionName) {
    this._channelId_1 = channelId;
    this._chaincodeId = chaincodeId;
    this._docType_0 = docType;
    this._lastEventId = lastEventId;
    this._ssmName = ssmName;
    this._sessionName_2 = sessionName;
  }
  CouchdbDatabaseGetChangesQuery_0.prototype._get_channelId__0_k$ = function () {
    return this._channelId_1;
  };
  CouchdbDatabaseGetChangesQuery_0.prototype._get_chaincodeId__0_k$ = function () {
    return this._chaincodeId;
  };
  CouchdbDatabaseGetChangesQuery_0.prototype._get_docType__0_k$ = function () {
    return this._docType_0;
  };
  CouchdbDatabaseGetChangesQuery_0.prototype._get_lastEventId__0_k$ = function () {
    return this._lastEventId;
  };
  CouchdbDatabaseGetChangesQuery_0.prototype._get_ssmName__0_k$ = function () {
    return this._ssmName;
  };
  CouchdbDatabaseGetChangesQuery_0.prototype._get_sessionName__0_k$ = function () {
    return this._sessionName_2;
  };
  CouchdbDatabaseGetChangesQuery_0.$metadata$ = {
    simpleName: 'CouchdbDatabaseGetChangesQuery',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(CouchdbDatabaseGetChangesQuery_0.prototype, 'channelId', {
    configurable: true,
    get: CouchdbDatabaseGetChangesQuery_0.prototype._get_channelId__0_k$
  });
  Object.defineProperty(CouchdbDatabaseGetChangesQuery_0.prototype, 'chaincodeId', {
    configurable: true,
    get: CouchdbDatabaseGetChangesQuery_0.prototype._get_chaincodeId__0_k$
  });
  Object.defineProperty(CouchdbDatabaseGetChangesQuery_0.prototype, 'docType', {
    configurable: true,
    get: CouchdbDatabaseGetChangesQuery_0.prototype._get_docType__0_k$
  });
  Object.defineProperty(CouchdbDatabaseGetChangesQuery_0.prototype, 'lastEventId', {
    configurable: true,
    get: CouchdbDatabaseGetChangesQuery_0.prototype._get_lastEventId__0_k$
  });
  Object.defineProperty(CouchdbDatabaseGetChangesQuery_0.prototype, 'ssmName', {
    configurable: true,
    get: CouchdbDatabaseGetChangesQuery_0.prototype._get_ssmName__0_k$
  });
  Object.defineProperty(CouchdbDatabaseGetChangesQuery_0.prototype, 'sessionName', {
    configurable: true,
    get: CouchdbDatabaseGetChangesQuery_0.prototype._get_sessionName__0_k$
  });
  function CouchdbDatabaseGetChangesQueryResult_0(items, lastEventId) {
    this._items_5 = items;
    this._lastEventId_0 = lastEventId;
  }
  CouchdbDatabaseGetChangesQueryResult_0.prototype._get_items__0_k$ = function () {
    return this._items_5;
  };
  CouchdbDatabaseGetChangesQueryResult_0.prototype._get_lastEventId__0_k$ = function () {
    return this._lastEventId_0;
  };
  CouchdbDatabaseGetChangesQueryResult_0.$metadata$ = {
    simpleName: 'CouchdbDatabaseGetChangesQueryResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(CouchdbDatabaseGetChangesQueryResult_0.prototype, 'items', {
    configurable: true,
    get: CouchdbDatabaseGetChangesQueryResult_0.prototype._get_items__0_k$
  });
  Object.defineProperty(CouchdbDatabaseGetChangesQueryResult_0.prototype, 'lastEventId', {
    configurable: true,
    get: CouchdbDatabaseGetChangesQueryResult_0.prototype._get_lastEventId__0_k$
  });
  function CouchdbDatabaseGetQuery_0(channelId, chaincodeId) {
    this._channelId_2 = channelId;
    this._chaincodeId_0 = chaincodeId;
  }
  CouchdbDatabaseGetQuery_0.prototype._get_channelId__0_k$ = function () {
    return this._channelId_2;
  };
  CouchdbDatabaseGetQuery_0.prototype._get_chaincodeId__0_k$ = function () {
    return this._chaincodeId_0;
  };
  CouchdbDatabaseGetQuery_0.$metadata$ = {
    simpleName: 'CouchdbDatabaseGetQuery',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(CouchdbDatabaseGetQuery_0.prototype, 'channelId', {
    configurable: true,
    get: CouchdbDatabaseGetQuery_0.prototype._get_channelId__0_k$
  });
  Object.defineProperty(CouchdbDatabaseGetQuery_0.prototype, 'chaincodeId', {
    configurable: true,
    get: CouchdbDatabaseGetQuery_0.prototype._get_chaincodeId__0_k$
  });
  function CouchdbDatabaseGetQueryResult_0(item) {
    this._item_4 = item;
  }
  CouchdbDatabaseGetQueryResult_0.prototype._get_item__0_k$ = function () {
    return this._item_4;
  };
  CouchdbDatabaseGetQueryResult_0.$metadata$ = {
    simpleName: 'CouchdbDatabaseGetQueryResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(CouchdbDatabaseGetQueryResult_0.prototype, 'item', {
    configurable: true,
    get: CouchdbDatabaseGetQueryResult_0.prototype._get_item__0_k$
  });
  function CouchdbDatabaseListQuery_init_$Init$(pagination, channelId, chaincodeId, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      pagination = null;
    if (!(($mask0 & 2) === 0))
      channelId = null;
    if (!(($mask0 & 4) === 0))
      chaincodeId = null;
    CouchdbDatabaseListQuery_0.call($this, pagination, channelId, chaincodeId);
    return $this;
  }
  function CouchdbDatabaseListQuery_init_$Create$(pagination, channelId, chaincodeId, $mask0, $marker) {
    return CouchdbDatabaseListQuery_init_$Init$(pagination, channelId, chaincodeId, $mask0, $marker, Object.create(CouchdbDatabaseListQuery_0.prototype));
  }
  function CouchdbDatabaseListQuery_0(pagination, channelId, chaincodeId) {
    var pagination_0 = pagination === void 1 ? null : pagination;
    var channelId_0 = channelId === void 1 ? null : channelId;
    var chaincodeId_0 = chaincodeId === void 1 ? null : chaincodeId;
    this._pagination = pagination_0;
    this._channelId_3 = channelId_0;
    this._chaincodeId_1 = chaincodeId_0;
  }
  CouchdbDatabaseListQuery_0.prototype._get_pagination__0_k$ = function () {
    return this._pagination;
  };
  CouchdbDatabaseListQuery_0.prototype._get_channelId__0_k$ = function () {
    return this._channelId_3;
  };
  CouchdbDatabaseListQuery_0.prototype._get_chaincodeId__0_k$ = function () {
    return this._chaincodeId_1;
  };
  CouchdbDatabaseListQuery_0.$metadata$ = {
    simpleName: 'CouchdbDatabaseListQuery',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(CouchdbDatabaseListQuery_0.prototype, 'pagination', {
    configurable: true,
    get: CouchdbDatabaseListQuery_0.prototype._get_pagination__0_k$
  });
  Object.defineProperty(CouchdbDatabaseListQuery_0.prototype, 'channelId', {
    configurable: true,
    get: CouchdbDatabaseListQuery_0.prototype._get_channelId__0_k$
  });
  Object.defineProperty(CouchdbDatabaseListQuery_0.prototype, 'chaincodeId', {
    configurable: true,
    get: CouchdbDatabaseListQuery_0.prototype._get_chaincodeId__0_k$
  });
  function CouchdbDatabaseListQueryResult_0(page, pagination) {
    this._page_0 = page;
    this._pagination_0 = pagination;
  }
  CouchdbDatabaseListQueryResult_0.prototype._get_page__0_k$ = function () {
    return this._page_0;
  };
  CouchdbDatabaseListQueryResult_0.prototype._get_pagination__0_k$ = function () {
    return this._pagination_0;
  };
  CouchdbDatabaseListQueryResult_0.$metadata$ = {
    simpleName: 'CouchdbDatabaseListQueryResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(CouchdbDatabaseListQueryResult_0.prototype, 'page', {
    configurable: true,
    get: CouchdbDatabaseListQueryResult_0.prototype._get_page__0_k$
  });
  Object.defineProperty(CouchdbDatabaseListQueryResult_0.prototype, 'pagination', {
    configurable: true,
    get: CouchdbDatabaseListQueryResult_0.prototype._get_pagination__0_k$
  });
  function CouchdbSsmGetQuery_0(channelId, chaincodeId, ssmName) {
    this._channelId_4 = channelId;
    this._chaincodeId_2 = chaincodeId;
    this._ssmName_0 = ssmName;
  }
  CouchdbSsmGetQuery_0.prototype._get_channelId__0_k$ = function () {
    return this._channelId_4;
  };
  CouchdbSsmGetQuery_0.prototype._get_chaincodeId__0_k$ = function () {
    return this._chaincodeId_2;
  };
  CouchdbSsmGetQuery_0.prototype._get_ssmName__0_k$ = function () {
    return this._ssmName_0;
  };
  CouchdbSsmGetQuery_0.$metadata$ = {
    simpleName: 'CouchdbSsmGetQuery',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(CouchdbSsmGetQuery_0.prototype, 'channelId', {
    configurable: true,
    get: CouchdbSsmGetQuery_0.prototype._get_channelId__0_k$
  });
  Object.defineProperty(CouchdbSsmGetQuery_0.prototype, 'chaincodeId', {
    configurable: true,
    get: CouchdbSsmGetQuery_0.prototype._get_chaincodeId__0_k$
  });
  Object.defineProperty(CouchdbSsmGetQuery_0.prototype, 'ssmName', {
    configurable: true,
    get: CouchdbSsmGetQuery_0.prototype._get_ssmName__0_k$
  });
  function CouchdbSsmGetQueryResult_0(uri, item) {
    this._uri_0 = uri;
    this._item_5 = item;
  }
  CouchdbSsmGetQueryResult_0.prototype._get_uri__0_k$ = function () {
    return this._uri_0;
  };
  CouchdbSsmGetQueryResult_0.prototype._get_item__0_k$ = function () {
    return this._item_5;
  };
  CouchdbSsmGetQueryResult_0.$metadata$ = {
    simpleName: 'CouchdbSsmGetQueryResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(CouchdbSsmGetQueryResult_0.prototype, 'uri', {
    configurable: true,
    get: CouchdbSsmGetQueryResult_0.prototype._get_uri__0_k$
  });
  Object.defineProperty(CouchdbSsmGetQueryResult_0.prototype, 'item', {
    configurable: true,
    get: CouchdbSsmGetQueryResult_0.prototype._get_item__0_k$
  });
  function CouchdbSsmListQuery_0(pagination, channelId, chaincodeId) {
    this._pagination_1 = pagination;
    this._channelId_5 = channelId;
    this._chaincodeId_3 = chaincodeId;
  }
  CouchdbSsmListQuery_0.prototype._get_pagination__0_k$ = function () {
    return this._pagination_1;
  };
  CouchdbSsmListQuery_0.prototype._get_channelId__0_k$ = function () {
    return this._channelId_5;
  };
  CouchdbSsmListQuery_0.prototype._get_chaincodeId__0_k$ = function () {
    return this._chaincodeId_3;
  };
  CouchdbSsmListQuery_0.$metadata$ = {
    simpleName: 'CouchdbSsmListQuery',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(CouchdbSsmListQuery_0.prototype, 'pagination', {
    configurable: true,
    get: CouchdbSsmListQuery_0.prototype._get_pagination__0_k$
  });
  Object.defineProperty(CouchdbSsmListQuery_0.prototype, 'channelId', {
    configurable: true,
    get: CouchdbSsmListQuery_0.prototype._get_channelId__0_k$
  });
  Object.defineProperty(CouchdbSsmListQuery_0.prototype, 'chaincodeId', {
    configurable: true,
    get: CouchdbSsmListQuery_0.prototype._get_chaincodeId__0_k$
  });
  function CouchdbSsmListQueryResult_0(page, pagination) {
    this._page_1 = page;
    this._pagination_2 = pagination;
  }
  CouchdbSsmListQueryResult_0.prototype._get_page__0_k$ = function () {
    return this._page_1;
  };
  CouchdbSsmListQueryResult_0.prototype._get_pagination__0_k$ = function () {
    return this._pagination_2;
  };
  CouchdbSsmListQueryResult_0.$metadata$ = {
    simpleName: 'CouchdbSsmListQueryResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(CouchdbSsmListQueryResult_0.prototype, 'page', {
    configurable: true,
    get: CouchdbSsmListQueryResult_0.prototype._get_page__0_k$
  });
  Object.defineProperty(CouchdbSsmListQueryResult_0.prototype, 'pagination', {
    configurable: true,
    get: CouchdbSsmListQueryResult_0.prototype._get_pagination__0_k$
  });
  function CouchdbSsmSessionStateGetQuery_0(chaincodeUri, ssmName, sessionName) {
    this._chaincodeUri_0 = chaincodeUri;
    this._ssmName_1 = ssmName;
    this._sessionName_3 = sessionName;
  }
  CouchdbSsmSessionStateGetQuery_0.prototype._get_chaincodeUri__0_k$ = function () {
    return this._chaincodeUri_0;
  };
  CouchdbSsmSessionStateGetQuery_0.prototype._get_ssmName__0_k$ = function () {
    return this._ssmName_1;
  };
  CouchdbSsmSessionStateGetQuery_0.prototype._get_sessionName__0_k$ = function () {
    return this._sessionName_3;
  };
  CouchdbSsmSessionStateGetQuery_0.$metadata$ = {
    simpleName: 'CouchdbSsmSessionStateGetQuery',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(CouchdbSsmSessionStateGetQuery_0.prototype, 'chaincodeUri', {
    configurable: true,
    get: CouchdbSsmSessionStateGetQuery_0.prototype._get_chaincodeUri__0_k$
  });
  Object.defineProperty(CouchdbSsmSessionStateGetQuery_0.prototype, 'ssmName', {
    configurable: true,
    get: CouchdbSsmSessionStateGetQuery_0.prototype._get_ssmName__0_k$
  });
  Object.defineProperty(CouchdbSsmSessionStateGetQuery_0.prototype, 'sessionName', {
    configurable: true,
    get: CouchdbSsmSessionStateGetQuery_0.prototype._get_sessionName__0_k$
  });
  function CouchdbSsmSessionStateGetQueryResult_0(item) {
    this._item_6 = item;
  }
  CouchdbSsmSessionStateGetQueryResult_0.prototype._get_item__0_k$ = function () {
    return this._item_6;
  };
  CouchdbSsmSessionStateGetQueryResult_0.$metadata$ = {
    simpleName: 'CouchdbSsmSessionStateGetQueryResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(CouchdbSsmSessionStateGetQueryResult_0.prototype, 'item', {
    configurable: true,
    get: CouchdbSsmSessionStateGetQueryResult_0.prototype._get_item__0_k$
  });
  function CouchdbSsmSessionStateListQuery_init_$Init$(pagination, chaincodeUri, ssm, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      pagination = null;
    if (!(($mask0 & 4) === 0))
      ssm = null;
    CouchdbSsmSessionStateListQuery_0.call($this, pagination, chaincodeUri, ssm);
    return $this;
  }
  function CouchdbSsmSessionStateListQuery_init_$Create$(pagination, chaincodeUri, ssm, $mask0, $marker) {
    return CouchdbSsmSessionStateListQuery_init_$Init$(pagination, chaincodeUri, ssm, $mask0, $marker, Object.create(CouchdbSsmSessionStateListQuery_0.prototype));
  }
  function CouchdbSsmSessionStateListQuery_0(pagination, chaincodeUri, ssm) {
    var pagination_0 = pagination === void 1 ? null : pagination;
    var ssm_0 = ssm === void 1 ? null : ssm;
    this._pagination_3 = pagination_0;
    this._chaincodeUri_1 = chaincodeUri;
    this._ssm_1 = ssm_0;
  }
  CouchdbSsmSessionStateListQuery_0.prototype._get_pagination__0_k$ = function () {
    return this._pagination_3;
  };
  CouchdbSsmSessionStateListQuery_0.prototype._get_chaincodeUri__0_k$ = function () {
    return this._chaincodeUri_1;
  };
  CouchdbSsmSessionStateListQuery_0.prototype._get_ssm__0_k$ = function () {
    return this._ssm_1;
  };
  CouchdbSsmSessionStateListQuery_0.$metadata$ = {
    simpleName: 'CouchdbSsmSessionStateListQuery',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(CouchdbSsmSessionStateListQuery_0.prototype, 'pagination', {
    configurable: true,
    get: CouchdbSsmSessionStateListQuery_0.prototype._get_pagination__0_k$
  });
  Object.defineProperty(CouchdbSsmSessionStateListQuery_0.prototype, 'chaincodeUri', {
    configurable: true,
    get: CouchdbSsmSessionStateListQuery_0.prototype._get_chaincodeUri__0_k$
  });
  Object.defineProperty(CouchdbSsmSessionStateListQuery_0.prototype, 'ssm', {
    configurable: true,
    get: CouchdbSsmSessionStateListQuery_0.prototype._get_ssm__0_k$
  });
  function CouchdbSsmSessionStateListQueryResult_0(page, pagination) {
    this._page_2 = page;
    this._pagination_4 = pagination;
  }
  CouchdbSsmSessionStateListQueryResult_0.prototype._get_page__0_k$ = function () {
    return this._page_2;
  };
  CouchdbSsmSessionStateListQueryResult_0.prototype._get_pagination__0_k$ = function () {
    return this._pagination_4;
  };
  CouchdbSsmSessionStateListQueryResult_0.$metadata$ = {
    simpleName: 'CouchdbSsmSessionStateListQueryResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(CouchdbSsmSessionStateListQueryResult_0.prototype, 'page', {
    configurable: true,
    get: CouchdbSsmSessionStateListQueryResult_0.prototype._get_page__0_k$
  });
  Object.defineProperty(CouchdbSsmSessionStateListQueryResult_0.prototype, 'pagination', {
    configurable: true,
    get: CouchdbSsmSessionStateListQueryResult_0.prototype._get_pagination__0_k$
  });
  function CouchdbUserListQuery_0(chaincodeUri) {
    this._chaincodeUri_2 = chaincodeUri;
  }
  CouchdbUserListQuery_0.prototype._get_chaincodeUri__0_k$ = function () {
    return this._chaincodeUri_2;
  };
  CouchdbUserListQuery_0.$metadata$ = {
    simpleName: 'CouchdbUserListQuery',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(CouchdbUserListQuery_0.prototype, 'chaincodeUri', {
    configurable: true,
    get: CouchdbUserListQuery_0.prototype._get_chaincodeUri__0_k$
  });
  function CouchdbUserListQueryResult_0(items) {
    this._items_6 = items;
  }
  CouchdbUserListQueryResult_0.prototype._get_items__0_k$ = function () {
    return this._items_6;
  };
  CouchdbUserListQueryResult_0.$metadata$ = {
    simpleName: 'CouchdbUserListQueryResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(CouchdbUserListQueryResult_0.prototype, 'items', {
    configurable: true,
    get: CouchdbUserListQueryResult_0.prototype._get_items__0_k$
  });
  function DataChaincodeListQuery_0() {
  }
  DataChaincodeListQuery_0.$metadata$ = {
    simpleName: 'DataChaincodeListQuery',
    kind: 'class',
    interfaces: []
  };
  function DataChaincodeListQueryResult_0(items) {
    this._items_7 = items;
  }
  DataChaincodeListQueryResult_0.prototype._get_items__0_k$ = function () {
    return this._items_7;
  };
  DataChaincodeListQueryResult_0.$metadata$ = {
    simpleName: 'DataChaincodeListQueryResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(DataChaincodeListQueryResult_0.prototype, 'items', {
    configurable: true,
    get: DataChaincodeListQueryResult_0.prototype._get_items__0_k$
  });
  function DataSsmGetQuery_0(ssmUri) {
    this._ssmUri_1 = ssmUri;
  }
  DataSsmGetQuery_0.prototype._get_ssmUri__0_k$ = function () {
    return this._ssmUri_1;
  };
  DataSsmGetQuery_0.$metadata$ = {
    simpleName: 'DataSsmGetQuery',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(DataSsmGetQuery_0.prototype, 'ssmUri', {
    configurable: true,
    get: DataSsmGetQuery_0.prototype._get_ssmUri__0_k$
  });
  function DataSsmGetQueryResult_0(item) {
    this._item_7 = item;
  }
  DataSsmGetQueryResult_0.prototype._get_item__0_k$ = function () {
    return this._item_7;
  };
  DataSsmGetQueryResult_0.$metadata$ = {
    simpleName: 'DataSsmGetQueryResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(DataSsmGetQueryResult_0.prototype, 'item', {
    configurable: true,
    get: DataSsmGetQueryResult_0.prototype._get_item__0_k$
  });
  function DataSsmListQuery_0(chaincodes) {
    this._chaincodes = chaincodes;
  }
  DataSsmListQuery_0.prototype._get_chaincodes__0_k$ = function () {
    return this._chaincodes;
  };
  DataSsmListQuery_0.$metadata$ = {
    simpleName: 'DataSsmListQuery',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(DataSsmListQuery_0.prototype, 'chaincodes', {
    configurable: true,
    get: DataSsmListQuery_0.prototype._get_chaincodes__0_k$
  });
  function DataSsmListQueryResult_0(items) {
    this._items_8 = items;
  }
  DataSsmListQueryResult_0.prototype._get_items__0_k$ = function () {
    return this._items_8;
  };
  DataSsmListQueryResult_0.$metadata$ = {
    simpleName: 'DataSsmListQueryResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(DataSsmListQueryResult_0.prototype, 'items', {
    configurable: true,
    get: DataSsmListQueryResult_0.prototype._get_items__0_k$
  });
  function DataSsmSessionGetQuery_0(sessionName, ssmUri) {
    this._sessionName_4 = sessionName;
    this._ssmUri_2 = ssmUri;
  }
  DataSsmSessionGetQuery_0.prototype._get_sessionName__0_k$ = function () {
    return this._sessionName_4;
  };
  DataSsmSessionGetQuery_0.prototype._get_ssmUri__0_k$ = function () {
    return this._ssmUri_2;
  };
  DataSsmSessionGetQuery_0.$metadata$ = {
    simpleName: 'DataSsmSessionGetQuery',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(DataSsmSessionGetQuery_0.prototype, 'sessionName', {
    configurable: true,
    get: DataSsmSessionGetQuery_0.prototype._get_sessionName__0_k$
  });
  Object.defineProperty(DataSsmSessionGetQuery_0.prototype, 'ssmUri', {
    configurable: true,
    get: DataSsmSessionGetQuery_0.prototype._get_ssmUri__0_k$
  });
  function DataSsmSessionGetQueryResult_0(item) {
    this._item_8 = item;
  }
  DataSsmSessionGetQueryResult_0.prototype._get_item__0_k$ = function () {
    return this._item_8;
  };
  DataSsmSessionGetQueryResult_0.$metadata$ = {
    simpleName: 'DataSsmSessionGetQueryResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(DataSsmSessionGetQueryResult_0.prototype, 'item', {
    configurable: true,
    get: DataSsmSessionGetQueryResult_0.prototype._get_item__0_k$
  });
  function DataSsmSessionListQuery_0(ssmUri) {
    this._ssmUri_3 = ssmUri;
  }
  DataSsmSessionListQuery_0.prototype._get_ssmUri__0_k$ = function () {
    return this._ssmUri_3;
  };
  DataSsmSessionListQuery_0.$metadata$ = {
    simpleName: 'DataSsmSessionListQuery',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(DataSsmSessionListQuery_0.prototype, 'ssmUri', {
    configurable: true,
    get: DataSsmSessionListQuery_0.prototype._get_ssmUri__0_k$
  });
  function DataSsmSessionListQueryResult_0(items) {
    this._items_9 = items;
  }
  DataSsmSessionListQueryResult_0.prototype._get_items__0_k$ = function () {
    return this._items_9;
  };
  DataSsmSessionListQueryResult_0.$metadata$ = {
    simpleName: 'DataSsmSessionListQueryResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(DataSsmSessionListQueryResult_0.prototype, 'items', {
    configurable: true,
    get: DataSsmSessionListQueryResult_0.prototype._get_items__0_k$
  });
  function DataSsmSessionLogGetQuery_0(sessionName, txId, ssmUri) {
    this._sessionName_5 = sessionName;
    this._txId_0 = txId;
    this._ssmUri_4 = ssmUri;
  }
  DataSsmSessionLogGetQuery_0.prototype._get_sessionName__0_k$ = function () {
    return this._sessionName_5;
  };
  DataSsmSessionLogGetQuery_0.prototype._get_txId__0_k$ = function () {
    return this._txId_0;
  };
  DataSsmSessionLogGetQuery_0.prototype._get_ssmUri__0_k$ = function () {
    return this._ssmUri_4;
  };
  DataSsmSessionLogGetQuery_0.$metadata$ = {
    simpleName: 'DataSsmSessionLogGetQuery',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(DataSsmSessionLogGetQuery_0.prototype, 'sessionName', {
    configurable: true,
    get: DataSsmSessionLogGetQuery_0.prototype._get_sessionName__0_k$
  });
  Object.defineProperty(DataSsmSessionLogGetQuery_0.prototype, 'txId', {
    configurable: true,
    get: DataSsmSessionLogGetQuery_0.prototype._get_txId__0_k$
  });
  Object.defineProperty(DataSsmSessionLogGetQuery_0.prototype, 'ssmUri', {
    configurable: true,
    get: DataSsmSessionLogGetQuery_0.prototype._get_ssmUri__0_k$
  });
  function DataSsmSessionLogGetQueryResult_0(item) {
    this._item_9 = item;
  }
  DataSsmSessionLogGetQueryResult_0.prototype._get_item__0_k$ = function () {
    return this._item_9;
  };
  DataSsmSessionLogGetQueryResult_0.$metadata$ = {
    simpleName: 'DataSsmSessionLogGetQueryResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(DataSsmSessionLogGetQueryResult_0.prototype, 'item', {
    configurable: true,
    get: DataSsmSessionLogGetQueryResult_0.prototype._get_item__0_k$
  });
  function DataSsmSessionLogListQuery_0(sessionName, ssmUri) {
    this._sessionName_6 = sessionName;
    this._ssmUri_5 = ssmUri;
  }
  DataSsmSessionLogListQuery_0.prototype._get_sessionName__0_k$ = function () {
    return this._sessionName_6;
  };
  DataSsmSessionLogListQuery_0.prototype._get_ssmUri__0_k$ = function () {
    return this._ssmUri_5;
  };
  DataSsmSessionLogListQuery_0.$metadata$ = {
    simpleName: 'DataSsmSessionLogListQuery',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(DataSsmSessionLogListQuery_0.prototype, 'sessionName', {
    configurable: true,
    get: DataSsmSessionLogListQuery_0.prototype._get_sessionName__0_k$
  });
  Object.defineProperty(DataSsmSessionLogListQuery_0.prototype, 'ssmUri', {
    configurable: true,
    get: DataSsmSessionLogListQuery_0.prototype._get_ssmUri__0_k$
  });
  function DataSsmSessionLogListQueryResult(items) {
    this._items_10 = items;
  }
  DataSsmSessionLogListQueryResult.prototype._get_items__0_k$ = function () {
    return this._items_10;
  };
  DataSsmSessionLogListQueryResult.$metadata$ = {
    simpleName: 'DataSsmSessionLogListQueryResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(DataSsmSessionLogListQueryResult.prototype, 'items', {
    configurable: true,
    get: DataSsmSessionLogListQueryResult.prototype._get_items__0_k$
  });
  function DataChannel_0(id) {
    this._id_3 = id;
  }
  DataChannel_0.prototype._get_id__0_k$ = function () {
    return this._id_3;
  };
  DataChannel_0.$metadata$ = {
    simpleName: 'DataChannel',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(DataChannel_0.prototype, 'id', {
    configurable: true,
    get: DataChannel_0.prototype._get_id__0_k$
  });
  function DataSsm_0(uri, ssm, channel, version) {
    this._uri_1 = uri;
    this._ssm_2 = ssm;
    this._channel = channel;
    this._version = version;
  }
  DataSsm_0.prototype._get_uri__0_k$ = function () {
    return this._uri_1;
  };
  DataSsm_0.prototype._get_ssm__0_k$ = function () {
    return this._ssm_2;
  };
  DataSsm_0.prototype._get_channel__0_k$ = function () {
    return this._channel;
  };
  DataSsm_0.prototype._get_version__0_k$ = function () {
    return this._version;
  };
  DataSsm_0.$metadata$ = {
    simpleName: 'DataSsm',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(DataSsm_0.prototype, 'uri', {
    configurable: true,
    get: DataSsm_0.prototype._get_uri__0_k$
  });
  Object.defineProperty(DataSsm_0.prototype, 'ssm', {
    configurable: true,
    get: DataSsm_0.prototype._get_ssm__0_k$
  });
  Object.defineProperty(DataSsm_0.prototype, 'channel', {
    configurable: true,
    get: DataSsm_0.prototype._get_channel__0_k$
  });
  Object.defineProperty(DataSsm_0.prototype, 'version', {
    configurable: true,
    get: DataSsm_0.prototype._get_version__0_k$
  });
  function DataSsmSession_0(sessionName, state, channel, transaction, ssmUri, transactions) {
    this._sessionName_7 = sessionName;
    this._state_1 = state;
    this._channel_0 = channel;
    this._transaction = transaction;
    this._ssmUri_6 = ssmUri;
    this._transactions_0 = transactions;
  }
  DataSsmSession_0.prototype._get_sessionName__0_k$ = function () {
    return this._sessionName_7;
  };
  DataSsmSession_0.prototype._get_state__0_k$ = function () {
    return this._state_1;
  };
  DataSsmSession_0.prototype._get_channel__0_k$ = function () {
    return this._channel_0;
  };
  DataSsmSession_0.prototype._get_transaction__0_k$ = function () {
    return this._transaction;
  };
  DataSsmSession_0.prototype._get_ssmUri__0_k$ = function () {
    return this._ssmUri_6;
  };
  DataSsmSession_0.prototype._get_transactions__0_k$ = function () {
    return this._transactions_0;
  };
  DataSsmSession_0.$metadata$ = {
    simpleName: 'DataSsmSession',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(DataSsmSession_0.prototype, 'sessionName', {
    configurable: true,
    get: DataSsmSession_0.prototype._get_sessionName__0_k$
  });
  Object.defineProperty(DataSsmSession_0.prototype, 'state', {
    configurable: true,
    get: DataSsmSession_0.prototype._get_state__0_k$
  });
  Object.defineProperty(DataSsmSession_0.prototype, 'channel', {
    configurable: true,
    get: DataSsmSession_0.prototype._get_channel__0_k$
  });
  Object.defineProperty(DataSsmSession_0.prototype, 'transaction', {
    configurable: true,
    get: DataSsmSession_0.prototype._get_transaction__0_k$
  });
  Object.defineProperty(DataSsmSession_0.prototype, 'ssmUri', {
    configurable: true,
    get: DataSsmSession_0.prototype._get_ssmUri__0_k$
  });
  Object.defineProperty(DataSsmSession_0.prototype, 'transactions', {
    configurable: true,
    get: DataSsmSession_0.prototype._get_transactions__0_k$
  });
  function DataSsmSessionState_0(details, transaction) {
    this._details = details;
    this._transaction_0 = transaction;
  }
  DataSsmSessionState_0.prototype._get_details__0_k$ = function () {
    return this._details;
  };
  DataSsmSessionState_0.prototype._get_transaction__0_k$ = function () {
    return this._transaction_0;
  };
  DataSsmSessionState_0.$metadata$ = {
    simpleName: 'DataSsmSessionState',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(DataSsmSessionState_0.prototype, 'details', {
    configurable: true,
    get: DataSsmSessionState_0.prototype._get_details__0_k$
  });
  Object.defineProperty(DataSsmSessionState_0.prototype, 'transaction', {
    configurable: true,
    get: DataSsmSessionState_0.prototype._get_transaction__0_k$
  });
  function DataSsmUser_0(agent) {
    this._agent = agent;
  }
  DataSsmUser_0.prototype._get_agent__0_k$ = function () {
    return this._agent;
  };
  DataSsmUser_0.$metadata$ = {
    simpleName: 'DataSsmUser',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(DataSsmUser_0.prototype, 'agent', {
    configurable: true,
    get: DataSsmUser_0.prototype._get_agent__0_k$
  });
  InternalHashCodeMap.prototype.createJsMap_0_k$ = InternalMap.prototype.createJsMap_0_k$;
  functionClasses = functionClasses$init$();
  buf = new ArrayBuffer(8);
  bufFloat64 = bufFloat64$init$();
  bufInt32 = bufInt32$init$();
  lowIndex = lowIndex$init$();
  highIndex = 1 - lowIndex | 0;
  ZERO = fromInt(0);
  ONE = fromInt(1);
  NEG_ONE = fromInt(-1);
  MAX_VALUE = new Long(-1, 2147483647);
  MIN_VALUE = new Long(0, -2147483648);
  TWO_PWR_24_ = fromInt(16777216);
  var $f2 = _.f2 || (_.f2 = {});
  var $f2$dsl = $f2.dsl || ($f2.dsl = {});
  var $f2$dsl$cqrs = $f2$dsl.cqrs || ($f2$dsl.cqrs = {});
  var $f2$dsl$cqrs$error = $f2$dsl$cqrs.error || ($f2$dsl$cqrs.error = {});
  var $f2$dsl$cqrs$page = $f2$dsl$cqrs.page || ($f2$dsl$cqrs.page = {});
  var $f2$dsl$fnc = $f2$dsl.fnc || ($f2$dsl.fnc = {});
  var $ssm = _.ssm || (_.ssm = {});
  var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
  var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
  var $ssm$chaincode$dsl$blockchain = $ssm$chaincode$dsl.blockchain || ($ssm$chaincode$dsl.blockchain = {});
  var $ssm$chaincode$dsl$config = $ssm$chaincode$dsl.config || ($ssm$chaincode$dsl.config = {});
  var $ssm$chaincode$dsl$model = $ssm$chaincode$dsl.model || ($ssm$chaincode$dsl.model = {});
  var $ssm$couchdb = $ssm.couchdb || ($ssm.couchdb = {});
  var $ssm$couchdb$dsl = $ssm$couchdb.dsl || ($ssm$couchdb.dsl = {});
  var $ssm$couchdb$dsl$model = $ssm$couchdb$dsl.model || ($ssm$couchdb$dsl.model = {});
  var $ssm$couchdb$dsl$query = $ssm$couchdb$dsl.query || ($ssm$couchdb$dsl.query = {});
  var $ssm$data = $ssm.data || ($ssm.data = {});
  var $ssm$data$dsl = $ssm$data.dsl || ($ssm$data.dsl = {});
  var $ssm$data$dsl$features = $ssm$data$dsl.features || ($ssm$data$dsl.features = {});
  var $ssm$data$dsl$features$query = $ssm$data$dsl$features.query || ($ssm$data$dsl$features.query = {});
  var $ssm$data$dsl$model = $ssm$data$dsl.model || ($ssm$data$dsl.model = {});
  var $kotlinx = _.kotlinx || (_.kotlinx = {});
  var $kotlinx$atomicfu = $kotlinx.atomicfu || ($kotlinx.atomicfu = {});
  $kotlinx$atomicfu.atomic$ref$ = atomic;
  $kotlinx$atomicfu.atomic$boolean$ = atomic_1;
  $kotlinx$atomicfu.atomic$int$ = atomic_3;
  $kotlinx$atomicfu.atomic$long$ = atomic_5;
  $f2$dsl$cqrs$error.Error = Error_0;
  $f2$dsl$cqrs$error.ErrorSeverity = ErrorSeverity_0;
  $f2$dsl$cqrs$error.ErrorSeverityWarning = ErrorSeverityWarning_0;
  $f2$dsl$cqrs$error.AlertSeverityError = ErrorSeverityError;
  var $f2$dsl$cqrs$exception = $f2$dsl$cqrs.exception || ($f2$dsl$cqrs.exception = {});
  $f2$dsl$cqrs$exception.R2Exception = S2Exception;
  $f2$dsl$cqrs$exception.R2NotFoundException = S2NotFoundException;
  $f2$dsl$cqrs$page.Page = Page_0;
  $f2$dsl$cqrs$page.OffsetRequest = OffsetPagination;
  $f2$dsl$cqrs$page.PagePagination = PagePagination_0;
  $ssm$chaincode$dsl$blockchain.Block = Block_0;
  $ssm$chaincode$dsl$blockchain.IdentitiesInfo = IdentitiesInfo_0;
  $ssm$chaincode$dsl$blockchain.Transaction = Transaction_0;
  $ssm$chaincode$dsl$model.SsmAgent = Agent;
  $ssm$chaincode$dsl$model.Chaincode = Chaincode_0;
  $ssm$chaincode$dsl$model.Ssm = Ssm_0;
  $ssm$chaincode$dsl$model.SsmContext = SsmContext_0;
  $ssm$chaincode$dsl$model.SsmGrant = SsmGrant_0;
  $ssm$chaincode$dsl$model.Credit = Credit_0;
  $ssm$chaincode$dsl$model.SsmSession = SsmSession_0;
  $ssm$chaincode$dsl$model.SsmSessionState = SsmSessionState_0;
  $ssm$chaincode$dsl$model.SsmSessionStateLog = SsmSessionStateLog_0;
  $ssm$chaincode$dsl$model.SsmTransition = SsmTransition_0;
  var $ssm$chaincode$dsl$model$uri = $ssm$chaincode$dsl$model.uri || ($ssm$chaincode$dsl$model.uri = {});
  $ssm$chaincode$dsl$model$uri.SsmUri = SsmUri_0;
  var $ssm$chaincode$dsl$query = $ssm$chaincode$dsl.query || ($ssm$chaincode$dsl.query = {});
  $ssm$chaincode$dsl$query.SsmGetAdminQuery = SsmGetAdminQuery_0;
  $ssm$chaincode$dsl$query.SsmGetAdminResult = SsmGetAdminResult_0;
  $ssm$chaincode$dsl$query.SsmGetQuery = SsmGetQuery_0;
  $ssm$chaincode$dsl$query.SsmGetResult = SsmGetResult_0;
  $ssm$chaincode$dsl$query.SsmGetSessionLogsQuery = SsmGetSessionLogsQuery_0;
  $ssm$chaincode$dsl$query.SsmGetSessionLogsQueryResult = SsmGetSessionLogsQueryResult_0;
  $ssm$chaincode$dsl$query.SsmGetSessionQuery = SsmGetSessionQuery_0;
  $ssm$chaincode$dsl$query.SsmGetSessionResult = SsmGetSessionResult_0;
  $ssm$chaincode$dsl$query.SsmGetTransactionQuery = SsmGetTransactionQuery_0;
  $ssm$chaincode$dsl$query.SsmGetTransactionQueryResult = SsmGetTransactionQueryResult_0;
  $ssm$chaincode$dsl$query.SsmGetUserQuery = SsmGetUserQuery_0;
  $ssm$chaincode$dsl$query.SsmGetUserResult = SsmGetUserResult_0;
  $ssm$chaincode$dsl$query.SsmListAdminQuery = SsmListAdminQuery_0;
  $ssm$chaincode$dsl$query.SsmListAdminResult = SsmListAdminResult_0;
  $ssm$chaincode$dsl$query.SsmListSessionQuery = SsmListSessionQuery_0;
  $ssm$chaincode$dsl$query.SsmListSessionResult = SsmListSessionResult_0;
  $ssm$chaincode$dsl$query.SsmListSsmQuery = SsmListSsmQuery_0;
  $ssm$chaincode$dsl$query.SsmListSsmResult = SsmListSsmResult_0;
  $ssm$chaincode$dsl$query.SsmListUserQuery = SsmListUserQuery_0;
  $ssm$chaincode$dsl$query.SsmListUserResult = SsmListUserResult_0;
  $ssm$couchdb$dsl$model.Database = Database_0;
  $ssm$couchdb$dsl$model.DatabaseChanges = DatabaseChanges_0;
  $ssm$couchdb$dsl$query.CouchdbAdminListQuery = CouchdbAdminListQuery_0;
  $ssm$couchdb$dsl$query.CouchdbAdminListQueryResult = CouchdbAdminListQueryResult_0;
  $ssm$couchdb$dsl$query.CouchdbChaincodeListQuery = CouchdbChaincodeListQuery_0;
  $ssm$couchdb$dsl$query.CouchdbChaincodeListQueryResult = CouchdbChaincodeListQueryResult_0;
  $ssm$couchdb$dsl$query.CouchdbDatabaseGetChangesQuery = CouchdbDatabaseGetChangesQuery_0;
  $ssm$couchdb$dsl$query.CouchdbDatabaseGetChangesQueryResult = CouchdbDatabaseGetChangesQueryResult_0;
  $ssm$couchdb$dsl$query.CouchdbDatabaseGetQuery = CouchdbDatabaseGetQuery_0;
  $ssm$couchdb$dsl$query.CouchdbDatabaseGetQueryResult = CouchdbDatabaseGetQueryResult_0;
  $ssm$couchdb$dsl$query.CouchdbDatabaseListQuery = CouchdbDatabaseListQuery_0;
  $ssm$couchdb$dsl$query.CouchdbDatabaseListQueryResult = CouchdbDatabaseListQueryResult_0;
  $ssm$couchdb$dsl$query.CouchdbSsmGetQuery = CouchdbSsmGetQuery_0;
  $ssm$couchdb$dsl$query.CouchdbSsmGetQueryResult = CouchdbSsmGetQueryResult_0;
  $ssm$couchdb$dsl$query.CouchdbSsmListQuery = CouchdbSsmListQuery_0;
  $ssm$couchdb$dsl$query.CouchdbSsmListQueryResult = CouchdbSsmListQueryResult_0;
  $ssm$couchdb$dsl$query.CouchdbSsmSessionStateGetQuery = CouchdbSsmSessionStateGetQuery_0;
  $ssm$couchdb$dsl$query.CouchdbSsmSessionStateGetQueryResult = CouchdbSsmSessionStateGetQueryResult_0;
  $ssm$couchdb$dsl$query.CouchdbSsmSessionStateListQuery = CouchdbSsmSessionStateListQuery_0;
  $ssm$couchdb$dsl$query.CouchdbSsmSessionStateListQueryResult = CouchdbSsmSessionStateListQueryResult_0;
  $ssm$couchdb$dsl$query.CouchdbUserListQuery = CouchdbUserListQuery_0;
  $ssm$couchdb$dsl$query.CouchdbUserListQueryResult = CouchdbUserListQueryResult_0;
  $ssm$data$dsl$features$query.DataChaincodeListQuery = DataChaincodeListQuery_0;
  $ssm$data$dsl$features$query.DataChaincodeListQueryResult = DataChaincodeListQueryResult_0;
  $ssm$data$dsl$features$query.DataSsmGetQuery = DataSsmGetQuery_0;
  $ssm$data$dsl$features$query.DataSsmGetQueryResult = DataSsmGetQueryResult_0;
  $ssm$data$dsl$features$query.DataSsmListQuery = DataSsmListQuery_0;
  $ssm$data$dsl$features$query.DataSsmListQueryResult = DataSsmListQueryResult_0;
  $ssm$data$dsl$features$query.DataSsmSessionGetQuery = DataSsmSessionGetQuery_0;
  $ssm$data$dsl$features$query.DataSsmSessionGetQueryResult = DataSsmSessionGetQueryResult_0;
  $ssm$data$dsl$features$query.DataSsmSessionListQuery = DataSsmSessionListQuery_0;
  $ssm$data$dsl$features$query.DataSsmSessionListQueryResult = DataSsmSessionListQueryResult_0;
  $ssm$data$dsl$features$query.DataSsmSessionLogGetQuery = DataSsmSessionLogGetQuery_0;
  $ssm$data$dsl$features$query.DataSsmSessionLogGetQueryResult = DataSsmSessionLogGetQueryResult_0;
  $ssm$data$dsl$features$query.DataSsmSessionLogListQuery = DataSsmSessionLogListQuery_0;
  $ssm$data$dsl$features$query.SsmSessionLogListQueryResult = DataSsmSessionLogListQueryResult;
  $ssm$data$dsl$model.DataChannel = DataChannel_0;
  $ssm$data$dsl$model.DataSsm = DataSsm_0;
  $ssm$data$dsl$model.DataSsmSession = DataSsmSession_0;
  $ssm$data$dsl$model.DataSsmSessionState = DataSsmSessionState_0;
  $ssm$data$dsl$model.DataSsmUser = DataSsmUser_0;
  return _;
}));

//# sourceMappingURL=x2-ssm-domain.js.map