(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['x2-certificate-domain'] = factory(typeof this['x2-certificate-domain'] === 'undefined' ? {} : this['x2-certificate-domain']);
}(this, function (_) {
  'use strict';
  AbstractMutableCollection.prototype = Object.create(AbstractCollection.prototype);
  AbstractMutableCollection.prototype.constructor = AbstractMutableCollection;
  AbstractMutableSet.prototype = Object.create(AbstractMutableCollection.prototype);
  AbstractMutableSet.prototype.constructor = AbstractMutableSet;
  AbstractEntrySet.prototype = Object.create(AbstractMutableSet.prototype);
  AbstractEntrySet.prototype.constructor = AbstractEntrySet;
  AbstractMutableMap.prototype = Object.create(AbstractMap.prototype);
  AbstractMutableMap.prototype.constructor = AbstractMutableMap;
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
  NoSuchElementException.prototype = Object.create(RuntimeException.prototype);
  NoSuchElementException.prototype.constructor = NoSuchElementException;
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
  function joinTo(_this_, buffer, separator, prefix, postfix, limit, truncated, transform) {
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
    l$ret$1: do {
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
        break l$ret$1;
      } else {
      }
      var tmp0_iterator_1 = this.iterator_0_k$();
      while (tmp0_iterator_1.hasNext_0_k$()) {
        var element_2 = tmp0_iterator_1.next_0_k$();
        if (equals(element_2, element)) {
          tmp$ret$0 = true;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = false;
    }
     while (false);
    return tmp$ret$0;
  };
  AbstractCollection.prototype.containsAll_dxd4eo_k$ = function (elements) {
    var tmp$ret$0;
    l$ret$1: do {
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
        break l$ret$1;
      } else {
      }
      var tmp0_iterator_1 = elements.iterator_0_k$();
      while (tmp0_iterator_1.hasNext_0_k$()) {
        var element_2 = tmp0_iterator_1.next_0_k$();
        if (!this.contains_2bq_k$(element_2)) {
          tmp$ret$0 = false;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = true;
    }
     while (false);
    return tmp$ret$0;
  };
  AbstractCollection.prototype.isEmpty_0_k$ = function () {
    return this._get_size__0_k$() === 0;
  };
  AbstractCollection.prototype.toString = function () {
    return joinToString$default(this, ', ', '[', ']', 0, null, _no_name_provided_$factory(this), 24, null);
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
  function toString($this, o) {
    return o === $this ? '(this Map)' : toString_0(o);
  }
  function implFindEntry($this, key) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_firstOrNull_0 = $this._get_entries__0_k$();
      var tmp0_iterator_1 = tmp0_firstOrNull_0.iterator_0_k$();
      while (tmp0_iterator_1.hasNext_0_k$()) {
        var element_2 = tmp0_iterator_1.next_0_k$();
        if (equals(element_2._get_key__0_k$(), key)) {
          tmp$ret$0 = element_2;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = null;
    }
     while (false);
    return tmp$ret$0;
  }
  function Companion_0() {
    Companion_instance = this;
  }
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
    Companion_getInstance();
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
    var ourValue = (isInterface(this, Map_0) ? this : THROW_CCE()).get_2bw_k$(key);
    if (!equals(value, ourValue)) {
      return false;
    }var tmp;
    if (ourValue == null) {
      tmp = !(isInterface(this, Map_0) ? this : THROW_CCE()).containsKey_2bw_k$(key);
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
    l$ret$1: do {
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
        break l$ret$1;
      } else {
      }
      var tmp0_iterator_1 = tmp0_all_0.iterator_0_k$();
      while (tmp0_iterator_1.hasNext_0_k$()) {
        var element_2 = tmp0_iterator_1.next_0_k$();
        if (!this.containsEntry_7gsh9e_k$(element_2)) {
          tmp$ret$0 = false;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = true;
    }
     while (false);
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
    return joinToString$default(tmp, ', ', '{', '}', 0, null, _no_name_provided_$factory_0(this), 24, null);
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
  function Companion_1() {
    Companion_instance_0 = this;
  }
  Companion_1.prototype.unorderedHashCode_dxd51x_k$ = function (c) {
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
  Companion_1.prototype.setEquals_qlktm2_k$ = function (c, other) {
    if (!(c._get_size__0_k$() === other._get_size__0_k$()))
      return false;
    return c.containsAll_dxd4eo_k$(other);
  };
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
  function copyToArrayImpl_0(collection) {
    var array = [];
    var iterator = collection.iterator_0_k$();
    while (iterator.hasNext_0_k$()) {
      array.push(iterator.next_0_k$());
    }
    return array;
  }
  function AbstractMutableCollection() {
    AbstractCollection.call(this);
  }
  AbstractMutableCollection.prototype.toJSON = function () {
    return this.toArray();
  };
  AbstractMutableCollection.$metadata$ = {
    simpleName: 'AbstractMutableCollection',
    kind: 'class',
    interfaces: [MutableCollection]
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
    return Companion_getInstance_0().setEquals_qlktm2_k$(this, other);
  };
  AbstractMutableSet.prototype.hashCode = function () {
    return Companion_getInstance_0().unorderedHashCode_dxd51x_k$(this);
  };
  AbstractMutableSet.$metadata$ = {
    simpleName: 'AbstractMutableSet',
    kind: 'class',
    interfaces: [MutableSet]
  };
  function HashCode() {
    HashCode_instance = this;
  }
  HashCode.prototype.equals_rvz98i_k$ = function (value1, value2) {
    return equals(value1, value2);
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
    this._$this = $outer;
    AbstractEntrySet.call(this);
  }
  EntrySet.prototype.containsEntry_4v0zae_k$ = function (element) {
    return this._$this.containsEntry_7gsh9e_k$(element);
  };
  EntrySet.prototype.iterator_0_k$ = function () {
    return this._$this._internalMap.iterator_0_k$();
  };
  EntrySet.prototype._get_size__0_k$ = function () {
    return this._$this._get_size__0_k$();
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
      var tmp0_unsafeCast_0 = $this._chainOrEntry;
      var chainSize = tmp0_unsafeCast_0.length;
      var tmp0_this = $this;
      tmp0_this._itemIndex = tmp0_this._itemIndex + 1 | 0;
      if (tmp0_this._itemIndex < chainSize)
        return 0;
      else {
      }
    }var tmp1_this = $this;
    tmp1_this._keyIndex = tmp1_this._keyIndex + 1 | 0;
    if (tmp1_this._keyIndex < $this._keys.length) {
      $this._chainOrEntry = $this._this$0_1._backingMap[$this._keys[$this._keyIndex]];
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
    var tmp$ret$0;
    l$ret$1: do {
      var indexedObject = _this_;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element_2 = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if ($this._equality_0.equals_rvz98i_k$(element_2._get_key__0_k$(), key)) {
          tmp$ret$0 = element_2;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = null;
    }
     while (false);
    return tmp$ret$0;
  }
  function getChainOrEntryOrNull($this, hashCode_1) {
    var chainOrEntry = $this._backingMap[hashCode_1];
    return chainOrEntry === undefined ? null : chainOrEntry;
  }
  function _no_name_provided__1(this$0) {
    this._this$0_1 = this$0;
    this._state = -1;
    this._keys = Object.keys(this._this$0_1._backingMap);
    this._keyIndex = -1;
    this._chainOrEntry = null;
    this._isChain = false;
    this._itemIndex = -1;
    this._lastEntry = null;
  }
  _no_name_provided__1.prototype.hasNext_0_k$ = function () {
    if (this._state === -1)
      this._state = computeNext(this);
    return this._state === 0;
  };
  _no_name_provided__1.prototype.next_0_k$ = function () {
    if (!this.hasNext_0_k$())
      throw NoSuchElementException_init_$Create$();
    var tmp;
    if (this._isChain) {
      var tmp0_unsafeCast_0 = this._chainOrEntry;
      tmp = tmp0_unsafeCast_0[this._itemIndex];
    } else {
      var tmp1_unsafeCast_0 = this._chainOrEntry;
      tmp = tmp1_unsafeCast_0;
    }
    var lastEntry = tmp;
    this._lastEntry = lastEntry;
    this._state = -1;
    return lastEntry;
  };
  _no_name_provided__1.$metadata$ = {
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
    return new _no_name_provided__1(this);
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
      tmp = equals(this._get_jClass__0_k$(), other._get_jClass__0_k$());
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
    throw UnsupportedOperationException_init_$Create$("There's no native JS class for Nothing type");
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
    var tmp0_safe_receiver = jClass.$metadata$;
    var tmp0_unsafeCast_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.simpleName;
    tmp._simpleName_0 = tmp0_unsafeCast_0;
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
  function _no_name_provided__2() {
  }
  _no_name_provided__2.prototype.invoke_wi7j7l_k$ = function (it) {
    return isObject(it);
  };
  _no_name_provided__2.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__2.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__3() {
  }
  _no_name_provided__3.prototype.invoke_wi7j7l_k$ = function (it) {
    return isNumber(it);
  };
  _no_name_provided__3.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__3.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__4() {
  }
  _no_name_provided__4.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? typeof it === 'boolean' : false;
  };
  _no_name_provided__4.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__4.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__5() {
  }
  _no_name_provided__5.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
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
    return !(it == null) ? typeof it === 'number' : false;
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
    return !(it == null) ? typeof it === 'number' : false;
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
    return !(it == null) ? isArray(it) : false;
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
    return !(it == null) ? typeof it === 'string' : false;
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
    return it instanceof Error;
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
    return !(it == null) ? isBooleanArray(it) : false;
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
    return !(it == null) ? isCharArray(it) : false;
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
    return !(it == null) ? isByteArray(it) : false;
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
    return !(it == null) ? isShortArray(it) : false;
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
    return !(it == null) ? isIntArray(it) : false;
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
    return !(it == null) ? isLongArray(it) : false;
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
    return !(it == null) ? isFloatArray(it) : false;
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
    return !(it == null) ? isDoubleArray(it) : false;
  };
  _no_name_provided__20.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__20.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__21($arity) {
    this._$arity = $arity;
  }
  _no_name_provided__21.prototype.invoke_wi7j7l_k$ = function (it) {
    var tmp;
    if (typeof it === 'function') {
      tmp = it.length === this._$arity;
    } else {
      tmp = false;
    }
    return tmp;
  };
  _no_name_provided__21.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__21.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function PrimitiveClasses_0() {
    PrimitiveClasses_instance = this;
    var tmp = this;
    var tmp0_unsafeCast_0 = Object;
    tmp._anyClass = new PrimitiveKClassImpl(tmp0_unsafeCast_0, 'Any', _no_name_provided_$factory_1());
    var tmp_0 = this;
    var tmp0_unsafeCast_0_0 = Number;
    tmp_0._numberClass = new PrimitiveKClassImpl(tmp0_unsafeCast_0_0, 'Number', _no_name_provided_$factory_2());
    this._nothingClass = NothingKClassImpl_getInstance();
    var tmp_1 = this;
    var tmp0_unsafeCast_0_1 = Boolean;
    tmp_1._booleanClass = new PrimitiveKClassImpl(tmp0_unsafeCast_0_1, 'Boolean', _no_name_provided_$factory_3());
    var tmp_2 = this;
    var tmp0_unsafeCast_0_2 = Number;
    tmp_2._byteClass = new PrimitiveKClassImpl(tmp0_unsafeCast_0_2, 'Byte', _no_name_provided_$factory_4());
    var tmp_3 = this;
    var tmp0_unsafeCast_0_3 = Number;
    tmp_3._shortClass = new PrimitiveKClassImpl(tmp0_unsafeCast_0_3, 'Short', _no_name_provided_$factory_5());
    var tmp_4 = this;
    var tmp0_unsafeCast_0_4 = Number;
    tmp_4._intClass = new PrimitiveKClassImpl(tmp0_unsafeCast_0_4, 'Int', _no_name_provided_$factory_6());
    var tmp_5 = this;
    var tmp0_unsafeCast_0_5 = Number;
    tmp_5._floatClass = new PrimitiveKClassImpl(tmp0_unsafeCast_0_5, 'Float', _no_name_provided_$factory_7());
    var tmp_6 = this;
    var tmp0_unsafeCast_0_6 = Number;
    tmp_6._doubleClass = new PrimitiveKClassImpl(tmp0_unsafeCast_0_6, 'Double', _no_name_provided_$factory_8());
    var tmp_7 = this;
    var tmp0_unsafeCast_0_7 = Array;
    tmp_7._arrayClass = new PrimitiveKClassImpl(tmp0_unsafeCast_0_7, 'Array', _no_name_provided_$factory_9());
    var tmp_8 = this;
    var tmp0_unsafeCast_0_8 = String;
    tmp_8._stringClass = new PrimitiveKClassImpl(tmp0_unsafeCast_0_8, 'String', _no_name_provided_$factory_10());
    var tmp_9 = this;
    var tmp0_unsafeCast_0_9 = Error;
    tmp_9._throwableClass = new PrimitiveKClassImpl(tmp0_unsafeCast_0_9, 'Throwable', _no_name_provided_$factory_11());
    var tmp_10 = this;
    var tmp0_unsafeCast_0_10 = Array;
    tmp_10._booleanArrayClass = new PrimitiveKClassImpl(tmp0_unsafeCast_0_10, 'BooleanArray', _no_name_provided_$factory_12());
    var tmp_11 = this;
    var tmp0_unsafeCast_0_11 = Uint16Array;
    tmp_11._charArrayClass = new PrimitiveKClassImpl(tmp0_unsafeCast_0_11, 'CharArray', _no_name_provided_$factory_13());
    var tmp_12 = this;
    var tmp0_unsafeCast_0_12 = Int8Array;
    tmp_12._byteArrayClass = new PrimitiveKClassImpl(tmp0_unsafeCast_0_12, 'ByteArray', _no_name_provided_$factory_14());
    var tmp_13 = this;
    var tmp0_unsafeCast_0_13 = Int16Array;
    tmp_13._shortArrayClass = new PrimitiveKClassImpl(tmp0_unsafeCast_0_13, 'ShortArray', _no_name_provided_$factory_15());
    var tmp_14 = this;
    var tmp0_unsafeCast_0_14 = Int32Array;
    tmp_14._intArrayClass = new PrimitiveKClassImpl(tmp0_unsafeCast_0_14, 'IntArray', _no_name_provided_$factory_16());
    var tmp_15 = this;
    var tmp0_unsafeCast_0_15 = Array;
    tmp_15._longArrayClass = new PrimitiveKClassImpl(tmp0_unsafeCast_0_15, 'LongArray', _no_name_provided_$factory_17());
    var tmp_16 = this;
    var tmp0_unsafeCast_0_16 = Float32Array;
    tmp_16._floatArrayClass = new PrimitiveKClassImpl(tmp0_unsafeCast_0_16, 'FloatArray', _no_name_provided_$factory_18());
    var tmp_17 = this;
    var tmp0_unsafeCast_0_17 = Float64Array;
    tmp_17._doubleArrayClass = new PrimitiveKClassImpl(tmp0_unsafeCast_0_17, 'DoubleArray', _no_name_provided_$factory_19());
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
      var tmp0_unsafeCast_0_3 = Function;
      var tmp_0 = '' + 'Function' + arity;
      var result_2 = new PrimitiveKClassImpl(tmp0_unsafeCast_0_3, tmp_0, _no_name_provided_$factory_20(arity));
      var tmp1_asDynamic_0_5 = functionClasses;
      tmp1_asDynamic_0_5[arity] = result_2;
      tmp = result_2;
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
  function _no_name_provided_$factory_1() {
    var i = new _no_name_provided__2();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_2() {
    var i = new _no_name_provided__3();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_3() {
    var i = new _no_name_provided__4();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_4() {
    var i = new _no_name_provided__5();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_5() {
    var i = new _no_name_provided__6();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_6() {
    var i = new _no_name_provided__7();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_7() {
    var i = new _no_name_provided__8();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_8() {
    var i = new _no_name_provided__9();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_9() {
    var i = new _no_name_provided__10();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_10() {
    var i = new _no_name_provided__11();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_11() {
    var i = new _no_name_provided__12();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_12() {
    var i = new _no_name_provided__13();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_13() {
    var i = new _no_name_provided__14();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_14() {
    var i = new _no_name_provided__15();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_15() {
    var i = new _no_name_provided__16();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_16() {
    var i = new _no_name_provided__17();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_17() {
    var i = new _no_name_provided__18();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_18() {
    var i = new _no_name_provided__19();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_19() {
    var i = new _no_name_provided__20();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_20($arity) {
    var i = new _no_name_provided__21($arity);
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function functionClasses$init$() {
    return fillArrayVal(Array(0), null);
  }
  function getKClass_0(jClass) {
    var tmp;
    if (Array.isArray(jClass)) {
      tmp = getKClassM_0(jClass);
    } else {
      tmp = getKClass1_0(jClass);
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
        var tmp0_unsafeCast_0 = NothingKClassImpl_getInstance();
        tmp = tmp0_unsafeCast_0;
        break;
      default:var tmp1_unsafeCast_0 = new ErrorKClass();
        tmp = tmp1_unsafeCast_0;
        break;
    }
    return tmp;
  }
  function getKClass1_0(jClass) {
    if (jClass === String) {
      var tmp0_unsafeCast_0 = PrimitiveClasses_getInstance()._stringClass;
      return tmp0_unsafeCast_0;
    }var metadata = jClass.$metadata$;
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
    var tmp0_subject = typeof e;
    var tmp;
    switch (tmp0_subject) {
      case 'string':
        tmp = PrimitiveClasses_getInstance()._stringClass;
        break;
      case 'number':
        var tmp_0;
        var tmp0_asDynamic_0 = jsBitwiseOr(e, 0);
        if (tmp0_asDynamic_0 === e) {
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
        tmp = tmp_1.functionClass(e.length);
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
                                var jsClass_0 = constructor;
                                tmp_3 = getKClass1_0(jsClass_0);
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
    return tmp1_unsafeCast_0;
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
  function Char() {
  }
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
  var buf;
  var bufFloat64;
  var bufInt32;
  var lowIndex;
  var highIndex;
  function getNumberHashCode(obj) {
    var tmp0_unsafeCast_0 = jsBitwiseOr(obj, 0);
    if (tmp0_unsafeCast_0 === obj) {
      return numberToInt(obj);
    } else {
    }
    bufFloat64[0] = obj;
    return imul(bufInt32[highIndex], 31) + bufInt32[lowIndex] | 0;
  }
  function bufFloat64$init$() {
    var tmp0_unsafeCast_0 = new Float64Array(buf);
    return tmp0_unsafeCast_0;
  }
  function bufInt32$init$() {
    var tmp0_unsafeCast_0 = new Int32Array(buf);
    return tmp0_unsafeCast_0;
  }
  function lowIndex$init$() {
    bufFloat64[0] = -1.0;
    return !(bufInt32[0] === 0) ? 1 : 0;
  }
  function contentEqualsInternal(_this_, other) {
    var a = _this_;
    var b = other;
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
        if (!equals(a[i], b[i])) {
          return false;
        }}
       while (inductionVariable < last);
    return true;
  }
  function contentHashCodeInternal(_this_) {
    var a = _this_;
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
  function getObjectHashCode(obj) {
    if (!jsIn('kotlinHashCodeValue$', obj)) {
      var hash = jsBitwiseOr(Math.random() * 4.294967296E9, 0);
      var descriptor = new Object();
      descriptor.value = hash;
      descriptor.enumerable = false;
      Object.defineProperty(obj, 'kotlinHashCodeValue$', descriptor);
    }var tmp0_unsafeCast_0 = obj['kotlinHashCodeValue$'];
    return tmp0_unsafeCast_0;
  }
  function equals(obj1, obj2) {
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
          var tmp_1 = 1 / obj1;
          tmp_0 = tmp_1 === 1 / obj2;
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
        if (obj) {
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
      var tmp0_unsafeCast_0 = o.toString();
      tmp = tmp0_unsafeCast_0;
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
        var code = str.charCodeAt(i);
        hash = imul(hash, 31) + code | 0;
      }
       while (!(i === last));
    return hash;
  }
  function captureStack(instance, constructorFunction) {
    if (Error.captureStackTrace != null) {
      Error.captureStackTrace(instance, constructorFunction);
    } else {
      instance.stack = (new Error()).stack;
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
    var tmp0_unsafeCast_0 = Object.getPrototypeOf(o).hasOwnProperty(name);
    return tmp0_unsafeCast_0;
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
  function Companion_2() {
    Companion_instance_1 = this;
    this._MIN_VALUE = new Long(0, -2147483648);
    this._MAX_VALUE = new Long(-1, 2147483647);
    this._SIZE_BYTES = 8;
    this._SIZE_BITS = 64;
  }
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
  function Long(low, high) {
    Companion_getInstance_1();
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
        var tmp0_unsafeCast_0 = rem.toString(radix);
        return tmp + tmp0_unsafeCast_0;
      } else {
        return '' + '-' + toStringImpl(negate(_this_), radix);
      }
    }var radixToPower = fromNumber(Math.pow(radix, 6.0));
    var rem_0 = _this_;
    var result = '';
    while (true) {
      var remDiv = rem_0.div_wiekkq_k$(radixToPower);
      var intval = subtract(rem_0, multiply(remDiv, radixToPower)).toInt_0_k$();
      var tmp1_unsafeCast_0 = intval.toString(radix);
      var digits = tmp1_unsafeCast_0;
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
  function isArrayish(o) {
    var tmp;
    if (isJsArray(o)) {
      tmp = true;
    } else {
      var tmp0_unsafeCast_0 = ArrayBuffer.isView(o);
      tmp = tmp0_unsafeCast_0;
    }
    return tmp;
  }
  function isJsArray(obj) {
    var tmp0_unsafeCast_0 = Array.isArray(obj);
    return tmp0_unsafeCast_0;
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
      tmp = !obj.$type$;
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
  function NoSuchElementException() {
    captureStack(this, NoSuchElementException);
  }
  NoSuchElementException.$metadata$ = {
    simpleName: 'NoSuchElementException',
    kind: 'class',
    interfaces: []
  };
  function UnsupportedOperationException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$(message) {
    var tmp = UnsupportedOperationException_init_$Init$(message, Object.create(UnsupportedOperationException.prototype));
    captureStack(tmp, UnsupportedOperationException_init_$Create$);
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
    var tmp0_unsafeCast_0 = jsIn$outlinedJsCode$(lhs_hack, rhs_hack);
    return tmp0_unsafeCast_0;
  }
  function jsBitwiseOr(lhs_hack, rhs_hack) {
    var tmp0_unsafeCast_0 = jsBitwiseOr$outlinedJsCode$_0(lhs_hack, rhs_hack);
    return tmp0_unsafeCast_0;
  }
  function jsTypeOf(value_hack) {
    var tmp0_unsafeCast_0 = jsTypeOf$outlinedJsCode$_1(value_hack);
    return tmp0_unsafeCast_0;
  }
  function jsDeleteProperty(obj_hack, property_hack) {
    jsDeleteProperty$outlinedJsCode$_2(obj_hack, property_hack);
  }
  function jsInstanceOf(obj_hack, jsClass_hack) {
    var tmp0_unsafeCast_0 = jsInstanceOf$outlinedJsCode$_3(obj_hack, jsClass_hack);
    return tmp0_unsafeCast_0;
  }
  function jsBitwiseAnd(lhs_hack, rhs_hack) {
    var tmp0_unsafeCast_0 = jsBitwiseAnd$outlinedJsCode$_4(lhs_hack, rhs_hack);
    return tmp0_unsafeCast_0;
  }
  function jsIn$outlinedJsCode$(lhs_hack, rhs_hack) {
    return lhs_hack in rhs_hack;
  }
  function jsBitwiseOr$outlinedJsCode$_0(lhs_hack, rhs_hack) {
    return lhs_hack | rhs_hack;
  }
  function jsTypeOf$outlinedJsCode$_1(value_hack) {
    return typeof value_hack;
  }
  function jsDeleteProperty$outlinedJsCode$_2(obj_hack, property_hack) {
    return delete obj_hack[property_hack];
  }
  function jsInstanceOf$outlinedJsCode$_3(obj_hack, jsClass_hack) {
    return obj_hack instanceof jsClass_hack;
  }
  function jsBitwiseAnd$outlinedJsCode$_4(lhs_hack, rhs_hack) {
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
    this._value = value;
  }
  AtomicRef.prototype._set_value__iav7o_k$ = function (_set___) {
    this._value = _set___;
  };
  AtomicRef.prototype._get_value__0_k$ = function () {
    return this._value;
  };
  AtomicRef.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this._value === expect))
      return false;
    this._value = update;
    return true;
  };
  AtomicRef.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this._value;
    this._value = value;
    return oldValue;
  };
  AtomicRef.prototype.toString = function () {
    return toString_0(this._value);
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
    this._value_0 = value;
  }
  AtomicBoolean.prototype._set_value__rpwsgn_k$ = function (_set___) {
    this._value_0 = _set___;
  };
  AtomicBoolean.prototype._get_value__0_k$ = function () {
    return this._value_0;
  };
  AtomicBoolean.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this._value_0 === expect))
      return false;
    this._value_0 = update;
    return true;
  };
  AtomicBoolean.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this._value_0;
    this._value_0 = value;
    return oldValue;
  };
  AtomicBoolean.prototype.toString = function () {
    return this._value_0.toString();
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
    this._value_1 = value;
  }
  AtomicInt.prototype._set_value__majfzk_k$ = function (_set___) {
    this._value_1 = _set___;
  };
  AtomicInt.prototype._get_value__0_k$ = function () {
    return this._value_1;
  };
  AtomicInt.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this._value_1 === expect))
      return false;
    this._value_1 = update;
    return true;
  };
  AtomicInt.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this._value_1;
    this._value_1 = value;
    return oldValue;
  };
  AtomicInt.prototype.atomicfu$getAndIncrement = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this._value_1;
    tmp0_this._value_1 = tmp1 + 1 | 0;
    return tmp1;
  };
  AtomicInt.prototype.atomicfu$getAndDecrement = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this._value_1;
    tmp0_this._value_1 = tmp1 - 1 | 0;
    return tmp1;
  };
  AtomicInt.prototype.atomicfu$getAndAdd = function (delta) {
    var oldValue = this._value_1;
    var tmp0_this = this;
    tmp0_this._value_1 = tmp0_this._value_1 + delta | 0;
    return oldValue;
  };
  AtomicInt.prototype.atomicfu$addAndGet = function (delta) {
    var tmp0_this = this;
    tmp0_this._value_1 = tmp0_this._value_1 + delta | 0;
    return this._value_1;
  };
  AtomicInt.prototype.atomicfu$incrementAndGet = function () {
    var tmp0_this = this;
    tmp0_this._value_1 = tmp0_this._value_1 + 1 | 0;
    return tmp0_this._value_1;
  };
  AtomicInt.prototype.atomicfu$decrementAndGet = function () {
    var tmp0_this = this;
    tmp0_this._value_1 = tmp0_this._value_1 - 1 | 0;
    return tmp0_this._value_1;
  };
  AtomicInt.prototype.toString = function () {
    return this._value_1.toString();
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
    this._value_2 = value;
  }
  AtomicLong.prototype._set_value__kdfck9_k$ = function (_set___) {
    this._value_2 = _set___;
  };
  AtomicLong.prototype._get_value__0_k$ = function () {
    return this._value_2;
  };
  AtomicLong.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!this._value_2.equals(expect))
      return false;
    this._value_2 = update;
    return true;
  };
  AtomicLong.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this._value_2;
    this._value_2 = value;
    return oldValue;
  };
  AtomicLong.prototype.atomicfu$getAndIncrement$long = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this._value_2;
    tmp0_this._value_2 = tmp1.inc_0_k$();
    return tmp1;
  };
  AtomicLong.prototype.atomicfu$getAndDecrement$long = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this._value_2;
    tmp0_this._value_2 = tmp1.dec_0_k$();
    return tmp1;
  };
  AtomicLong.prototype.atomicfu$getAndAdd$long = function (delta) {
    var oldValue = this._value_2;
    var tmp0_this = this;
    tmp0_this._value_2 = tmp0_this._value_2.plus_wiekkq_k$(delta);
    return oldValue;
  };
  AtomicLong.prototype.atomicfu$addAndGet$long = function (delta) {
    var tmp0_this = this;
    tmp0_this._value_2 = tmp0_this._value_2.plus_wiekkq_k$(delta);
    return this._value_2;
  };
  AtomicLong.prototype.atomicfu$incrementAndGet$long = function () {
    var tmp0_this = this;
    tmp0_this._value_2 = tmp0_this._value_2.inc_0_k$();
    return tmp0_this._value_2;
  };
  AtomicLong.prototype.atomicfu$decrementAndGet$long = function () {
    var tmp0_this = this;
    tmp0_this._value_2 = tmp0_this._value_2.dec_0_k$();
    return tmp0_this._value_2;
  };
  AtomicLong.prototype.toString = function () {
    return this._value_2.toString();
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
  function ErrorSeverity_0(severity) {
    this._severity = severity;
  }
  ErrorSeverity_0.prototype._get_severity__0_k$ = function () {
    return this._severity;
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
  function ErrorBase_0(type, description, date, payload, severity) {
    this._type = type;
    this._description = description;
    this._date = date;
    this._payload = payload;
    this._severity_0 = severity;
  }
  ErrorBase_0.prototype._get_type__0_k$ = function () {
    return this._type;
  };
  ErrorBase_0.prototype._get_description__0_k$ = function () {
    return this._description;
  };
  ErrorBase_0.prototype._get_date__0_k$ = function () {
    return this._date;
  };
  ErrorBase_0.prototype._get_payload__0_k$ = function () {
    return this._payload;
  };
  ErrorBase_0.prototype._get_severity__0_k$ = function () {
    return this._severity_0;
  };
  ErrorBase_0.$metadata$ = {
    simpleName: 'ErrorBase',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(ErrorBase_0.prototype, 'type', {
    configurable: true,
    get: ErrorBase_0.prototype._get_type__0_k$
  });
  Object.defineProperty(ErrorBase_0.prototype, 'description', {
    configurable: true,
    get: ErrorBase_0.prototype._get_description__0_k$
  });
  Object.defineProperty(ErrorBase_0.prototype, 'date', {
    configurable: true,
    get: ErrorBase_0.prototype._get_date__0_k$
  });
  Object.defineProperty(ErrorBase_0.prototype, 'payload', {
    configurable: true,
    get: ErrorBase_0.prototype._get_payload__0_k$
  });
  Object.defineProperty(ErrorBase_0.prototype, 'severity', {
    configurable: true,
    get: ErrorBase_0.prototype._get_severity__0_k$
  });
  function PageBase_0(page, size, total, list) {
    this._page = page;
    this._size_0 = size;
    this._total = total;
    this._list = list;
  }
  PageBase_0.prototype._get_page__0_k$ = function () {
    return this._page;
  };
  PageBase_0.prototype._get_size__0_k$ = function () {
    return this._size_0;
  };
  PageBase_0.prototype._get_total__0_k$ = function () {
    return this._total;
  };
  PageBase_0.prototype._get_list__0_k$ = function () {
    return this._list;
  };
  PageBase_0.$metadata$ = {
    simpleName: 'PageBase',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(PageBase_0.prototype, 'page', {
    configurable: true,
    get: PageBase_0.prototype._get_page__0_k$
  });
  Object.defineProperty(PageBase_0.prototype, 'size', {
    configurable: true,
    get: PageBase_0.prototype._get_size__0_k$
  });
  Object.defineProperty(PageBase_0.prototype, 'total', {
    configurable: true,
    get: PageBase_0.prototype._get_total__0_k$
  });
  Object.defineProperty(PageBase_0.prototype, 'list', {
    configurable: true,
    get: PageBase_0.prototype._get_list__0_k$
  });
  function PageRequestBase_0(page, size) {
    this._page_0 = page;
    this._size_1 = size;
  }
  PageRequestBase_0.prototype._get_page__0_k$ = function () {
    return this._page_0;
  };
  PageRequestBase_0.prototype._get_size__0_k$ = function () {
    return this._size_1;
  };
  PageRequestBase_0.$metadata$ = {
    simpleName: 'PageRequestBase',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(PageRequestBase_0.prototype, 'page', {
    configurable: true,
    get: PageRequestBase_0.prototype._get_page__0_k$
  });
  Object.defineProperty(PageRequestBase_0.prototype, 'size', {
    configurable: true,
    get: PageRequestBase_0.prototype._get_size__0_k$
  });
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
  function Chaincode_0(id, channelId) {
    this._id_0 = id;
    this._channelId = channelId;
  }
  Chaincode_0.prototype._get_id__0_k$ = function () {
    return this._id_0;
  };
  Chaincode_0.prototype._get_channelId__0_k$ = function () {
    return this._channelId;
  };
  Chaincode_0.prototype.component1 = function () {
    return this._id_0;
  };
  Chaincode_0.prototype.component2 = function () {
    return this._channelId;
  };
  Chaincode_0.prototype.copy = function (id, channelId) {
    return this.copy_jg38oy_k$(id === void 1 ? this._id_0 : id, channelId === void 1 ? this._channelId : channelId);
  };
  Chaincode_0.prototype.copy_jg38oy_k$ = function (id, channelId) {
    return new Chaincode_0(id, channelId);
  };
  Chaincode_0.prototype.copy$default_9kq45a_k$ = function (id, channelId, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      id = this._id_0;
    if (!(($mask0 & 2) === 0))
      channelId = this._channelId;
    return this.copy_jg38oy_k$(id, channelId);
  };
  Chaincode_0.prototype.toString = function () {
    return '' + 'Chaincode(id=' + this._id_0 + ', channelId=' + this._channelId + ')';
  };
  Chaincode_0.prototype.hashCode = function () {
    var result = getStringHashCode(this._id_0);
    result = imul(result, 31) + getStringHashCode(this._channelId) | 0;
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
    if (!(this._id_0 === tmp0_other_with_cast._id_0))
      return false;
    if (!(this._channelId === tmp0_other_with_cast._channelId))
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
  function InvokeReturn_0(status, info, transactionId) {
    this._status = status;
    this._info = info;
    this._transactionId = transactionId;
  }
  InvokeReturn_0.prototype._get_status__0_k$ = function () {
    return this._status;
  };
  InvokeReturn_0.prototype._get_info__0_k$ = function () {
    return this._info;
  };
  InvokeReturn_0.prototype._get_transactionId__0_k$ = function () {
    return this._transactionId;
  };
  InvokeReturn_0.$metadata$ = {
    simpleName: 'InvokeReturn',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(InvokeReturn_0.prototype, 'status', {
    configurable: true,
    get: InvokeReturn_0.prototype._get_status__0_k$
  });
  Object.defineProperty(InvokeReturn_0.prototype, 'info', {
    configurable: true,
    get: InvokeReturn_0.prototype._get_info__0_k$
  });
  Object.defineProperty(InvokeReturn_0.prototype, 'transactionId', {
    configurable: true,
    get: InvokeReturn_0.prototype._get_transactionId__0_k$
  });
  function Ssm_0(name, transitions) {
    this._name = name;
    this._transitions = transitions;
  }
  Ssm_0.prototype._get_name__0_k$ = function () {
    return this._name;
  };
  Ssm_0.prototype._get_transitions__0_k$ = function () {
    return this._transitions;
  };
  Ssm_0.prototype.component1 = function () {
    return this._name;
  };
  Ssm_0.prototype.component2 = function () {
    return this._transitions;
  };
  Ssm_0.prototype.copy = function (name, transitions) {
    return this.copy_ku2l7e_k$(name === void 1 ? this._name : name, transitions === void 1 ? this._transitions : transitions);
  };
  Ssm_0.prototype.copy_ku2l7e_k$ = function (name, transitions) {
    return new Ssm_0(name, transitions);
  };
  Ssm_0.prototype.copy$default_ixi2su_k$ = function (name, transitions, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      name = this._name;
    if (!(($mask0 & 2) === 0))
      transitions = this._transitions;
    return this.copy_ku2l7e_k$(name, transitions);
  };
  Ssm_0.prototype.toString = function () {
    return '' + 'Ssm(name=' + this._name + ', transitions=' + this._transitions + ')';
  };
  Ssm_0.prototype.hashCode = function () {
    var result = getStringHashCode(this._name);
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
    if (!(this._name === tmp0_other_with_cast._name))
      return false;
    if (!equals(this._transitions, tmp0_other_with_cast._transitions))
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
  function SsmAgent_0(name, pub) {
    this._name_0 = name;
    this._pub = pub;
  }
  SsmAgent_0.prototype._get_name__0_k$ = function () {
    return this._name_0;
  };
  SsmAgent_0.prototype._get_pub__0_k$ = function () {
    return this._pub;
  };
  SsmAgent_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression_0(this).equals(getKClassFromExpression_0(other)))
      return false;
    if (other instanceof SsmAgent_0)
      other;
    else
      THROW_CCE();
    Unit_getInstance();
    if (!(this._name_0 === other._name_0))
      return false;
    if (!contentEquals(this._pub, other._pub))
      return false;
    return true;
  };
  SsmAgent_0.prototype.hashCode = function () {
    var result = getStringHashCode(this._name_0);
    result = imul(31, result) + contentHashCode(this._pub) | 0;
    return result;
  };
  SsmAgent_0.prototype.component1 = function () {
    return this._name_0;
  };
  SsmAgent_0.prototype.component2 = function () {
    return this._pub;
  };
  SsmAgent_0.prototype.copy = function (name, pub) {
    return this.copy_nwdxb8_k$(name === void 1 ? this._name_0 : name, pub === void 1 ? this._pub : pub);
  };
  SsmAgent_0.prototype.copy_nwdxb8_k$ = function (name, pub) {
    return new SsmAgent_0(name, pub);
  };
  SsmAgent_0.prototype.copy$default_rtppve_k$ = function (name, pub, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      name = this._name_0;
    if (!(($mask0 & 2) === 0))
      pub = this._pub;
    return this.copy_nwdxb8_k$(name, pub);
  };
  SsmAgent_0.prototype.toString = function () {
    return '' + 'SsmAgent(name=' + this._name_0 + ', pub=' + toString_1(this._pub) + ')';
  };
  SsmAgent_0.$metadata$ = {
    simpleName: 'SsmAgent',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(SsmAgent_0.prototype, 'name', {
    configurable: true,
    get: SsmAgent_0.prototype._get_name__0_k$
  });
  Object.defineProperty(SsmAgent_0.prototype, 'pub', {
    configurable: true,
    get: SsmAgent_0.prototype._get_pub__0_k$
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
    if (!equals(this._private, tmp0_other_with_cast._private))
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
    return this.copy_xg3cec_k$(user === void 1 ? this._user : user, iteration === void 1 ? this._iteration_0 : iteration, credits === void 1 ? this._credits : credits);
  };
  SsmGrant_0.prototype.copy_xg3cec_k$ = function (user, iteration, credits) {
    return new SsmGrant_0(user, iteration, credits);
  };
  SsmGrant_0.prototype.copy$default_zgyp72_k$ = function (user, iteration, credits, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      user = this._user;
    if (!(($mask0 & 2) === 0))
      iteration = this._iteration_0;
    if (!(($mask0 & 4) === 0))
      credits = this._credits;
    return this.copy_xg3cec_k$(user, iteration, credits);
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
    if (!equals(this._credits, tmp0_other_with_cast._credits))
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
      private_0 = HashMap_init_$Create$();
    }SsmSession_0.call($this, ssm, session, roles, public_0, private_0);
    return $this;
  }
  function SsmSession_init_$Create$(ssm, session, roles, public_0, private_0, $mask0, $marker) {
    return SsmSession_init_$Init$(ssm, session, roles, public_0, private_0, $mask0, $marker, Object.create(SsmSession_0.prototype));
  }
  function SsmSession_0(ssm, session, roles, public_0, private_0) {
    var tmp;
    if (private_0 === void 1) {
      tmp = HashMap_init_$Create$();
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
      private_0 = HashMap_init_$Create$();
    }SsmSessionState_0.call($this, ssm, session, roles, public_0, private_0, origin, current, iteration);
    return $this;
  }
  function SsmSessionState_init_$Create$(ssm, session, roles, public_0, private_0, origin, current, iteration, $mask0, $marker) {
    return SsmSessionState_init_$Init$(ssm, session, roles, public_0, private_0, origin, current, iteration, $mask0, $marker, Object.create(SsmSessionState_0.prototype));
  }
  function SsmSessionState_0(ssm, session, roles, public_0, private_0, origin, current, iteration) {
    var tmp;
    if (private_0 === void 1) {
      tmp = HashMap_init_$Create$();
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
    return this.copy_had0og_k$(ssm === void 1 ? this._ssm_0 : ssm, session === void 1 ? this._session_1 : session, roles === void 1 ? this._roles_0 : roles, public_0 === void 1 ? this._public_1 : public_0, private_0 === void 1 ? this._private_1 : private_0, origin === void 1 ? this._origin : origin, current === void 1 ? this._current : current, iteration === void 1 ? this._iteration_1 : iteration);
  };
  SsmSessionState_0.prototype.copy_had0og_k$ = function (ssm, session, roles, public_0, private_0, origin, current, iteration) {
    return new SsmSessionState_0(ssm, session, roles, public_0, private_0, origin, current, iteration);
  };
  SsmSessionState_0.prototype.copy$default_y6ugxf_k$ = function (ssm, session, roles, public_0, private_0, origin, current, iteration, $mask0, $handler) {
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
    return this.copy_had0og_k$(ssm, session, roles, public_0, private_0, origin, current, iteration);
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
    if (!equals(this._roles_0, tmp0_other_with_cast._roles_0))
      return false;
    if (!equals(this._public_1, tmp0_other_with_cast._public_1))
      return false;
    if (!equals(this._private_1, tmp0_other_with_cast._private_1))
      return false;
    if (!equals(this._origin, tmp0_other_with_cast._origin))
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
    return this.copy_kmwkgm_k$(txId === void 1 ? this._txId : txId, state === void 1 ? this._state_0 : state);
  };
  SsmSessionStateLog_0.prototype.copy_kmwkgm_k$ = function (txId, state) {
    return new SsmSessionStateLog_0(txId, state);
  };
  SsmSessionStateLog_0.prototype.copy$default_fskiau_k$ = function (txId, state, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      txId = this._txId;
    if (!(($mask0 & 2) === 0))
      state = this._state_0;
    return this.copy_kmwkgm_k$(txId, state);
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
  function SsmTransition_0(from, to, role, action) {
    this._from = from;
    this._to = to;
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
  SsmTransition_0.prototype.copy = function (from, to, role, action) {
    return this.copy_uo2hk2_k$(from === void 1 ? this._from : from, to === void 1 ? this._to : to, role === void 1 ? this._role : role, action === void 1 ? this._action : action);
  };
  SsmTransition_0.prototype.copy_uo2hk2_k$ = function (from, to, role, action) {
    return new SsmTransition_0(from, to, role, action);
  };
  SsmTransition_0.prototype.copy$default_1pmj36_k$ = function (from, to, role, action, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      from = this._from;
    if (!(($mask0 & 2) === 0))
      to = this._to;
    if (!(($mask0 & 4) === 0))
      role = this._role;
    if (!(($mask0 & 8) === 0))
      action = this._action;
    return this.copy_uo2hk2_k$(from, to, role, action);
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
    this._id_1 = id;
    this._mspid = mspid;
  }
  IdentitiesInfo_0.prototype._get_id__0_k$ = function () {
    return this._id_1;
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
  function SsmGetAdminQuery_init_$Init$(baseUrl, channelId, chaincodeId, bearerToken, name, $mask0, $marker, $this) {
    if (!(($mask0 & 8) === 0))
      bearerToken = null;
    SsmGetAdminQuery_0.call($this, baseUrl, channelId, chaincodeId, bearerToken, name);
    return $this;
  }
  function SsmGetAdminQuery_init_$Create$(baseUrl, channelId, chaincodeId, bearerToken, name, $mask0, $marker) {
    return SsmGetAdminQuery_init_$Init$(baseUrl, channelId, chaincodeId, bearerToken, name, $mask0, $marker, Object.create(SsmGetAdminQuery_0.prototype));
  }
  function SsmGetAdminQuery_0(baseUrl, channelId, chaincodeId, bearerToken, name) {
    var bearerToken_0 = bearerToken === void 1 ? null : bearerToken;
    this._baseUrl = baseUrl;
    this._channelId_0 = channelId;
    this._chaincodeId = chaincodeId;
    this._bearerToken = bearerToken_0;
    this._name_1 = name;
  }
  SsmGetAdminQuery_0.prototype._get_baseUrl__0_k$ = function () {
    return this._baseUrl;
  };
  SsmGetAdminQuery_0.prototype._get_channelId__0_k$ = function () {
    return this._channelId_0;
  };
  SsmGetAdminQuery_0.prototype._get_chaincodeId__0_k$ = function () {
    return this._chaincodeId;
  };
  SsmGetAdminQuery_0.prototype._get_bearerToken__0_k$ = function () {
    return this._bearerToken;
  };
  SsmGetAdminQuery_0.prototype._get_name__0_k$ = function () {
    return this._name_1;
  };
  SsmGetAdminQuery_0.$metadata$ = {
    simpleName: 'SsmGetAdminQuery',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(SsmGetAdminQuery_0.prototype, 'baseUrl', {
    configurable: true,
    get: SsmGetAdminQuery_0.prototype._get_baseUrl__0_k$
  });
  Object.defineProperty(SsmGetAdminQuery_0.prototype, 'channelId', {
    configurable: true,
    get: SsmGetAdminQuery_0.prototype._get_channelId__0_k$
  });
  Object.defineProperty(SsmGetAdminQuery_0.prototype, 'chaincodeId', {
    configurable: true,
    get: SsmGetAdminQuery_0.prototype._get_chaincodeId__0_k$
  });
  Object.defineProperty(SsmGetAdminQuery_0.prototype, 'bearerToken', {
    configurable: true,
    get: SsmGetAdminQuery_0.prototype._get_bearerToken__0_k$
  });
  Object.defineProperty(SsmGetAdminQuery_0.prototype, 'name', {
    configurable: true,
    get: SsmGetAdminQuery_0.prototype._get_name__0_k$
  });
  function SsmGetAdminResult_0(admin) {
    this._admin = admin;
  }
  SsmGetAdminResult_0.prototype._get_admin__0_k$ = function () {
    return this._admin;
  };
  SsmGetAdminResult_0.$metadata$ = {
    simpleName: 'SsmGetAdminResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(SsmGetAdminResult_0.prototype, 'admin', {
    configurable: true,
    get: SsmGetAdminResult_0.prototype._get_admin__0_k$
  });
  function SsmGetQuery_init_$Init$(baseUrl, channelId, chaincodeId, bearerToken, name, $mask0, $marker, $this) {
    if (!(($mask0 & 8) === 0))
      bearerToken = null;
    SsmGetQuery_0.call($this, baseUrl, channelId, chaincodeId, bearerToken, name);
    return $this;
  }
  function SsmGetQuery_init_$Create$(baseUrl, channelId, chaincodeId, bearerToken, name, $mask0, $marker) {
    return SsmGetQuery_init_$Init$(baseUrl, channelId, chaincodeId, bearerToken, name, $mask0, $marker, Object.create(SsmGetQuery_0.prototype));
  }
  function SsmGetQuery_0(baseUrl, channelId, chaincodeId, bearerToken, name) {
    var bearerToken_0 = bearerToken === void 1 ? null : bearerToken;
    this._baseUrl_0 = baseUrl;
    this._channelId_1 = channelId;
    this._chaincodeId_0 = chaincodeId;
    this._bearerToken_0 = bearerToken_0;
    this._name_2 = name;
  }
  SsmGetQuery_0.prototype._get_baseUrl__0_k$ = function () {
    return this._baseUrl_0;
  };
  SsmGetQuery_0.prototype._get_channelId__0_k$ = function () {
    return this._channelId_1;
  };
  SsmGetQuery_0.prototype._get_chaincodeId__0_k$ = function () {
    return this._chaincodeId_0;
  };
  SsmGetQuery_0.prototype._get_bearerToken__0_k$ = function () {
    return this._bearerToken_0;
  };
  SsmGetQuery_0.prototype._get_name__0_k$ = function () {
    return this._name_2;
  };
  SsmGetQuery_0.$metadata$ = {
    simpleName: 'SsmGetQuery',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(SsmGetQuery_0.prototype, 'baseUrl', {
    configurable: true,
    get: SsmGetQuery_0.prototype._get_baseUrl__0_k$
  });
  Object.defineProperty(SsmGetQuery_0.prototype, 'channelId', {
    configurable: true,
    get: SsmGetQuery_0.prototype._get_channelId__0_k$
  });
  Object.defineProperty(SsmGetQuery_0.prototype, 'chaincodeId', {
    configurable: true,
    get: SsmGetQuery_0.prototype._get_chaincodeId__0_k$
  });
  Object.defineProperty(SsmGetQuery_0.prototype, 'bearerToken', {
    configurable: true,
    get: SsmGetQuery_0.prototype._get_bearerToken__0_k$
  });
  Object.defineProperty(SsmGetQuery_0.prototype, 'name', {
    configurable: true,
    get: SsmGetQuery_0.prototype._get_name__0_k$
  });
  function SsmGetResult_0(ssm) {
    this._ssm_1 = ssm;
  }
  SsmGetResult_0.prototype._get_ssm__0_k$ = function () {
    return this._ssm_1;
  };
  SsmGetResult_0.$metadata$ = {
    simpleName: 'SsmGetResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(SsmGetResult_0.prototype, 'ssm', {
    configurable: true,
    get: SsmGetResult_0.prototype._get_ssm__0_k$
  });
  function SsmGetSessionLogsQuery_0(session, baseUrl, channelId, chaincodeId, bearerToken) {
    this._session_2 = session;
    this._baseUrl_1 = baseUrl;
    this._channelId_2 = channelId;
    this._chaincodeId_1 = chaincodeId;
    this._bearerToken_1 = bearerToken;
  }
  SsmGetSessionLogsQuery_0.prototype._get_session__0_k$ = function () {
    return this._session_2;
  };
  SsmGetSessionLogsQuery_0.prototype._get_baseUrl__0_k$ = function () {
    return this._baseUrl_1;
  };
  SsmGetSessionLogsQuery_0.prototype._get_channelId__0_k$ = function () {
    return this._channelId_2;
  };
  SsmGetSessionLogsQuery_0.prototype._get_chaincodeId__0_k$ = function () {
    return this._chaincodeId_1;
  };
  SsmGetSessionLogsQuery_0.prototype._get_bearerToken__0_k$ = function () {
    return this._bearerToken_1;
  };
  SsmGetSessionLogsQuery_0.$metadata$ = {
    simpleName: 'SsmGetSessionLogsQuery',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(SsmGetSessionLogsQuery_0.prototype, 'session', {
    configurable: true,
    get: SsmGetSessionLogsQuery_0.prototype._get_session__0_k$
  });
  Object.defineProperty(SsmGetSessionLogsQuery_0.prototype, 'baseUrl', {
    configurable: true,
    get: SsmGetSessionLogsQuery_0.prototype._get_baseUrl__0_k$
  });
  Object.defineProperty(SsmGetSessionLogsQuery_0.prototype, 'channelId', {
    configurable: true,
    get: SsmGetSessionLogsQuery_0.prototype._get_channelId__0_k$
  });
  Object.defineProperty(SsmGetSessionLogsQuery_0.prototype, 'chaincodeId', {
    configurable: true,
    get: SsmGetSessionLogsQuery_0.prototype._get_chaincodeId__0_k$
  });
  Object.defineProperty(SsmGetSessionLogsQuery_0.prototype, 'bearerToken', {
    configurable: true,
    get: SsmGetSessionLogsQuery_0.prototype._get_bearerToken__0_k$
  });
  function SsmGetSessionLogsQueryResult_0(logs) {
    this._logs = logs;
  }
  SsmGetSessionLogsQueryResult_0.prototype._get_logs__0_k$ = function () {
    return this._logs;
  };
  SsmGetSessionLogsQueryResult_0.prototype.component1 = function () {
    return this._logs;
  };
  SsmGetSessionLogsQueryResult_0.prototype.copy = function (logs) {
    return this.copy_sse2x3_k$(logs === void 1 ? this._logs : logs);
  };
  SsmGetSessionLogsQueryResult_0.prototype.copy_sse2x3_k$ = function (logs) {
    return new SsmGetSessionLogsQueryResult_0(logs);
  };
  SsmGetSessionLogsQueryResult_0.prototype.copy$default_fg1u6k_k$ = function (logs, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      logs = this._logs;
    return this.copy_sse2x3_k$(logs);
  };
  SsmGetSessionLogsQueryResult_0.prototype.toString = function () {
    return '' + 'SsmGetSessionLogsQueryResult(logs=' + this._logs + ')';
  };
  SsmGetSessionLogsQueryResult_0.prototype.hashCode = function () {
    return hashCode(this._logs);
  };
  SsmGetSessionLogsQueryResult_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SsmGetSessionLogsQueryResult_0))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof SsmGetSessionLogsQueryResult_0 ? other : THROW_CCE();
    if (!equals(this._logs, tmp0_other_with_cast._logs))
      return false;
    return true;
  };
  SsmGetSessionLogsQueryResult_0.$metadata$ = {
    simpleName: 'SsmGetSessionLogsQueryResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(SsmGetSessionLogsQueryResult_0.prototype, 'logs', {
    configurable: true,
    get: SsmGetSessionLogsQueryResult_0.prototype._get_logs__0_k$
  });
  function SsmGetSessionQuery_init_$Init$(baseUrl, channelId, chaincodeId, bearerToken, name, $mask0, $marker, $this) {
    if (!(($mask0 & 8) === 0))
      bearerToken = null;
    SsmGetSessionQuery_0.call($this, baseUrl, channelId, chaincodeId, bearerToken, name);
    return $this;
  }
  function SsmGetSessionQuery_init_$Create$(baseUrl, channelId, chaincodeId, bearerToken, name, $mask0, $marker) {
    return SsmGetSessionQuery_init_$Init$(baseUrl, channelId, chaincodeId, bearerToken, name, $mask0, $marker, Object.create(SsmGetSessionQuery_0.prototype));
  }
  function SsmGetSessionQuery_0(baseUrl, channelId, chaincodeId, bearerToken, name) {
    var bearerToken_0 = bearerToken === void 1 ? null : bearerToken;
    this._baseUrl_2 = baseUrl;
    this._channelId_3 = channelId;
    this._chaincodeId_2 = chaincodeId;
    this._bearerToken_2 = bearerToken_0;
    this._name_3 = name;
  }
  SsmGetSessionQuery_0.prototype._get_baseUrl__0_k$ = function () {
    return this._baseUrl_2;
  };
  SsmGetSessionQuery_0.prototype._get_channelId__0_k$ = function () {
    return this._channelId_3;
  };
  SsmGetSessionQuery_0.prototype._get_chaincodeId__0_k$ = function () {
    return this._chaincodeId_2;
  };
  SsmGetSessionQuery_0.prototype._get_bearerToken__0_k$ = function () {
    return this._bearerToken_2;
  };
  SsmGetSessionQuery_0.prototype._get_name__0_k$ = function () {
    return this._name_3;
  };
  SsmGetSessionQuery_0.$metadata$ = {
    simpleName: 'SsmGetSessionQuery',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(SsmGetSessionQuery_0.prototype, 'baseUrl', {
    configurable: true,
    get: SsmGetSessionQuery_0.prototype._get_baseUrl__0_k$
  });
  Object.defineProperty(SsmGetSessionQuery_0.prototype, 'channelId', {
    configurable: true,
    get: SsmGetSessionQuery_0.prototype._get_channelId__0_k$
  });
  Object.defineProperty(SsmGetSessionQuery_0.prototype, 'chaincodeId', {
    configurable: true,
    get: SsmGetSessionQuery_0.prototype._get_chaincodeId__0_k$
  });
  Object.defineProperty(SsmGetSessionQuery_0.prototype, 'bearerToken', {
    configurable: true,
    get: SsmGetSessionQuery_0.prototype._get_bearerToken__0_k$
  });
  Object.defineProperty(SsmGetSessionQuery_0.prototype, 'name', {
    configurable: true,
    get: SsmGetSessionQuery_0.prototype._get_name__0_k$
  });
  function SsmGetSessionResult_0(session) {
    this._session_3 = session;
  }
  SsmGetSessionResult_0.prototype._get_session__0_k$ = function () {
    return this._session_3;
  };
  SsmGetSessionResult_0.$metadata$ = {
    simpleName: 'SsmGetSessionResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(SsmGetSessionResult_0.prototype, 'session', {
    configurable: true,
    get: SsmGetSessionResult_0.prototype._get_session__0_k$
  });
  function SsmGetTransactionQuery_0(id, baseUrl, channelId, chaincodeId, bearerToken) {
    this._id_2 = id;
    this._baseUrl_3 = baseUrl;
    this._channelId_4 = channelId;
    this._chaincodeId_3 = chaincodeId;
    this._bearerToken_3 = bearerToken;
  }
  SsmGetTransactionQuery_0.prototype._get_id__0_k$ = function () {
    return this._id_2;
  };
  SsmGetTransactionQuery_0.prototype._get_baseUrl__0_k$ = function () {
    return this._baseUrl_3;
  };
  SsmGetTransactionQuery_0.prototype._get_channelId__0_k$ = function () {
    return this._channelId_4;
  };
  SsmGetTransactionQuery_0.prototype._get_chaincodeId__0_k$ = function () {
    return this._chaincodeId_3;
  };
  SsmGetTransactionQuery_0.prototype._get_bearerToken__0_k$ = function () {
    return this._bearerToken_3;
  };
  SsmGetTransactionQuery_0.prototype.component1 = function () {
    return this._id_2;
  };
  SsmGetTransactionQuery_0.prototype.component2 = function () {
    return this._baseUrl_3;
  };
  SsmGetTransactionQuery_0.prototype.component3 = function () {
    return this._channelId_4;
  };
  SsmGetTransactionQuery_0.prototype.component4 = function () {
    return this._chaincodeId_3;
  };
  SsmGetTransactionQuery_0.prototype.component5 = function () {
    return this._bearerToken_3;
  };
  SsmGetTransactionQuery_0.prototype.copy = function (id, baseUrl, channelId, chaincodeId, bearerToken) {
    return this.copy_ucggm6_k$(id === void 1 ? this._id_2 : id, baseUrl === void 1 ? this._baseUrl_3 : baseUrl, channelId === void 1 ? this._channelId_4 : channelId, chaincodeId === void 1 ? this._chaincodeId_3 : chaincodeId, bearerToken === void 1 ? this._bearerToken_3 : bearerToken);
  };
  SsmGetTransactionQuery_0.prototype.copy_ucggm6_k$ = function (id, baseUrl, channelId, chaincodeId, bearerToken) {
    return new SsmGetTransactionQuery_0(id, baseUrl, channelId, chaincodeId, bearerToken);
  };
  SsmGetTransactionQuery_0.prototype.copy$default_xhj74u_k$ = function (id, baseUrl, channelId, chaincodeId, bearerToken, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      id = this._id_2;
    if (!(($mask0 & 2) === 0))
      baseUrl = this._baseUrl_3;
    if (!(($mask0 & 4) === 0))
      channelId = this._channelId_4;
    if (!(($mask0 & 8) === 0))
      chaincodeId = this._chaincodeId_3;
    if (!(($mask0 & 16) === 0))
      bearerToken = this._bearerToken_3;
    return this.copy_ucggm6_k$(id, baseUrl, channelId, chaincodeId, bearerToken);
  };
  SsmGetTransactionQuery_0.prototype.toString = function () {
    return '' + 'SsmGetTransactionQuery(id=' + this._id_2 + ', baseUrl=' + this._baseUrl_3 + ', channelId=' + this._channelId_4 + ', chaincodeId=' + this._chaincodeId_3 + ', bearerToken=' + this._bearerToken_3 + ')';
  };
  SsmGetTransactionQuery_0.prototype.hashCode = function () {
    var result = getStringHashCode(this._id_2);
    result = imul(result, 31) + getStringHashCode(this._baseUrl_3) | 0;
    result = imul(result, 31) + (this._channelId_4 == null ? 0 : getStringHashCode(this._channelId_4)) | 0;
    result = imul(result, 31) + (this._chaincodeId_3 == null ? 0 : getStringHashCode(this._chaincodeId_3)) | 0;
    result = imul(result, 31) + (this._bearerToken_3 == null ? 0 : getStringHashCode(this._bearerToken_3)) | 0;
    return result;
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
    if (!(this._baseUrl_3 === tmp0_other_with_cast._baseUrl_3))
      return false;
    if (!(this._channelId_4 == tmp0_other_with_cast._channelId_4))
      return false;
    if (!(this._chaincodeId_3 == tmp0_other_with_cast._chaincodeId_3))
      return false;
    if (!(this._bearerToken_3 == tmp0_other_with_cast._bearerToken_3))
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
  Object.defineProperty(SsmGetTransactionQuery_0.prototype, 'baseUrl', {
    configurable: true,
    get: SsmGetTransactionQuery_0.prototype._get_baseUrl__0_k$
  });
  Object.defineProperty(SsmGetTransactionQuery_0.prototype, 'channelId', {
    configurable: true,
    get: SsmGetTransactionQuery_0.prototype._get_channelId__0_k$
  });
  Object.defineProperty(SsmGetTransactionQuery_0.prototype, 'chaincodeId', {
    configurable: true,
    get: SsmGetTransactionQuery_0.prototype._get_chaincodeId__0_k$
  });
  Object.defineProperty(SsmGetTransactionQuery_0.prototype, 'bearerToken', {
    configurable: true,
    get: SsmGetTransactionQuery_0.prototype._get_bearerToken__0_k$
  });
  function SsmGetTransactionQueryResult_0(transaction) {
    this._transaction = transaction;
  }
  SsmGetTransactionQueryResult_0.prototype._get_transaction__0_k$ = function () {
    return this._transaction;
  };
  SsmGetTransactionQueryResult_0.$metadata$ = {
    simpleName: 'SsmGetTransactionQueryResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(SsmGetTransactionQueryResult_0.prototype, 'transaction', {
    configurable: true,
    get: SsmGetTransactionQueryResult_0.prototype._get_transaction__0_k$
  });
  function SsmGetUserQuery_init_$Init$(baseUrl, channelId, chaincodeId, bearerToken, name, $mask0, $marker, $this) {
    if (!(($mask0 & 8) === 0))
      bearerToken = null;
    SsmGetUserQuery_0.call($this, baseUrl, channelId, chaincodeId, bearerToken, name);
    return $this;
  }
  function SsmGetUserQuery_init_$Create$(baseUrl, channelId, chaincodeId, bearerToken, name, $mask0, $marker) {
    return SsmGetUserQuery_init_$Init$(baseUrl, channelId, chaincodeId, bearerToken, name, $mask0, $marker, Object.create(SsmGetUserQuery_0.prototype));
  }
  function SsmGetUserQuery_0(baseUrl, channelId, chaincodeId, bearerToken, name) {
    var bearerToken_0 = bearerToken === void 1 ? null : bearerToken;
    this._baseUrl_4 = baseUrl;
    this._channelId_5 = channelId;
    this._chaincodeId_4 = chaincodeId;
    this._bearerToken_4 = bearerToken_0;
    this._name_4 = name;
  }
  SsmGetUserQuery_0.prototype._get_baseUrl__0_k$ = function () {
    return this._baseUrl_4;
  };
  SsmGetUserQuery_0.prototype._get_channelId__0_k$ = function () {
    return this._channelId_5;
  };
  SsmGetUserQuery_0.prototype._get_chaincodeId__0_k$ = function () {
    return this._chaincodeId_4;
  };
  SsmGetUserQuery_0.prototype._get_bearerToken__0_k$ = function () {
    return this._bearerToken_4;
  };
  SsmGetUserQuery_0.prototype._get_name__0_k$ = function () {
    return this._name_4;
  };
  SsmGetUserQuery_0.$metadata$ = {
    simpleName: 'SsmGetUserQuery',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(SsmGetUserQuery_0.prototype, 'baseUrl', {
    configurable: true,
    get: SsmGetUserQuery_0.prototype._get_baseUrl__0_k$
  });
  Object.defineProperty(SsmGetUserQuery_0.prototype, 'channelId', {
    configurable: true,
    get: SsmGetUserQuery_0.prototype._get_channelId__0_k$
  });
  Object.defineProperty(SsmGetUserQuery_0.prototype, 'chaincodeId', {
    configurable: true,
    get: SsmGetUserQuery_0.prototype._get_chaincodeId__0_k$
  });
  Object.defineProperty(SsmGetUserQuery_0.prototype, 'bearerToken', {
    configurable: true,
    get: SsmGetUserQuery_0.prototype._get_bearerToken__0_k$
  });
  Object.defineProperty(SsmGetUserQuery_0.prototype, 'name', {
    configurable: true,
    get: SsmGetUserQuery_0.prototype._get_name__0_k$
  });
  function SsmGetUserResult_0(user) {
    this._user_0 = user;
  }
  SsmGetUserResult_0.prototype._get_user__0_k$ = function () {
    return this._user_0;
  };
  SsmGetUserResult_0.$metadata$ = {
    simpleName: 'SsmGetUserResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(SsmGetUserResult_0.prototype, 'user', {
    configurable: true,
    get: SsmGetUserResult_0.prototype._get_user__0_k$
  });
  function SsmListAdminQuery_init_$Init$(baseUrl, channelId, chaincodeId, bearerToken, $mask0, $marker, $this) {
    if (!(($mask0 & 8) === 0))
      bearerToken = null;
    SsmListAdminQuery_0.call($this, baseUrl, channelId, chaincodeId, bearerToken);
    return $this;
  }
  function SsmListAdminQuery_init_$Create$(baseUrl, channelId, chaincodeId, bearerToken, $mask0, $marker) {
    return SsmListAdminQuery_init_$Init$(baseUrl, channelId, chaincodeId, bearerToken, $mask0, $marker, Object.create(SsmListAdminQuery_0.prototype));
  }
  function SsmListAdminQuery_0(baseUrl, channelId, chaincodeId, bearerToken) {
    var bearerToken_0 = bearerToken === void 1 ? null : bearerToken;
    this._baseUrl_5 = baseUrl;
    this._channelId_6 = channelId;
    this._chaincodeId_5 = chaincodeId;
    this._bearerToken_5 = bearerToken_0;
  }
  SsmListAdminQuery_0.prototype._get_baseUrl__0_k$ = function () {
    return this._baseUrl_5;
  };
  SsmListAdminQuery_0.prototype._get_channelId__0_k$ = function () {
    return this._channelId_6;
  };
  SsmListAdminQuery_0.prototype._get_chaincodeId__0_k$ = function () {
    return this._chaincodeId_5;
  };
  SsmListAdminQuery_0.prototype._get_bearerToken__0_k$ = function () {
    return this._bearerToken_5;
  };
  SsmListAdminQuery_0.$metadata$ = {
    simpleName: 'SsmListAdminQuery',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(SsmListAdminQuery_0.prototype, 'baseUrl', {
    configurable: true,
    get: SsmListAdminQuery_0.prototype._get_baseUrl__0_k$
  });
  Object.defineProperty(SsmListAdminQuery_0.prototype, 'channelId', {
    configurable: true,
    get: SsmListAdminQuery_0.prototype._get_channelId__0_k$
  });
  Object.defineProperty(SsmListAdminQuery_0.prototype, 'chaincodeId', {
    configurable: true,
    get: SsmListAdminQuery_0.prototype._get_chaincodeId__0_k$
  });
  Object.defineProperty(SsmListAdminQuery_0.prototype, 'bearerToken', {
    configurable: true,
    get: SsmListAdminQuery_0.prototype._get_bearerToken__0_k$
  });
  function SsmListAdminResult_0(values) {
    this._values = values;
  }
  SsmListAdminResult_0.prototype._get_values__0_k$ = function () {
    return this._values;
  };
  SsmListAdminResult_0.$metadata$ = {
    simpleName: 'SsmListAdminResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(SsmListAdminResult_0.prototype, 'values', {
    configurable: true,
    get: SsmListAdminResult_0.prototype._get_values__0_k$
  });
  function SsmListSessionQuery_init_$Init$(baseUrl, channelId, chaincodeId, bearerToken, $mask0, $marker, $this) {
    if (!(($mask0 & 8) === 0))
      bearerToken = null;
    SsmListSessionQuery_0.call($this, baseUrl, channelId, chaincodeId, bearerToken);
    return $this;
  }
  function SsmListSessionQuery_init_$Create$(baseUrl, channelId, chaincodeId, bearerToken, $mask0, $marker) {
    return SsmListSessionQuery_init_$Init$(baseUrl, channelId, chaincodeId, bearerToken, $mask0, $marker, Object.create(SsmListSessionQuery_0.prototype));
  }
  function SsmListSessionQuery_0(baseUrl, channelId, chaincodeId, bearerToken) {
    var bearerToken_0 = bearerToken === void 1 ? null : bearerToken;
    this._baseUrl_6 = baseUrl;
    this._channelId_7 = channelId;
    this._chaincodeId_6 = chaincodeId;
    this._bearerToken_6 = bearerToken_0;
  }
  SsmListSessionQuery_0.prototype._get_baseUrl__0_k$ = function () {
    return this._baseUrl_6;
  };
  SsmListSessionQuery_0.prototype._get_channelId__0_k$ = function () {
    return this._channelId_7;
  };
  SsmListSessionQuery_0.prototype._get_chaincodeId__0_k$ = function () {
    return this._chaincodeId_6;
  };
  SsmListSessionQuery_0.prototype._get_bearerToken__0_k$ = function () {
    return this._bearerToken_6;
  };
  SsmListSessionQuery_0.$metadata$ = {
    simpleName: 'SsmListSessionQuery',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(SsmListSessionQuery_0.prototype, 'baseUrl', {
    configurable: true,
    get: SsmListSessionQuery_0.prototype._get_baseUrl__0_k$
  });
  Object.defineProperty(SsmListSessionQuery_0.prototype, 'channelId', {
    configurable: true,
    get: SsmListSessionQuery_0.prototype._get_channelId__0_k$
  });
  Object.defineProperty(SsmListSessionQuery_0.prototype, 'chaincodeId', {
    configurable: true,
    get: SsmListSessionQuery_0.prototype._get_chaincodeId__0_k$
  });
  Object.defineProperty(SsmListSessionQuery_0.prototype, 'bearerToken', {
    configurable: true,
    get: SsmListSessionQuery_0.prototype._get_bearerToken__0_k$
  });
  function SsmListSessionResult_0(values) {
    this._values_0 = values;
  }
  SsmListSessionResult_0.prototype._get_values__0_k$ = function () {
    return this._values_0;
  };
  SsmListSessionResult_0.$metadata$ = {
    simpleName: 'SsmListSessionResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(SsmListSessionResult_0.prototype, 'values', {
    configurable: true,
    get: SsmListSessionResult_0.prototype._get_values__0_k$
  });
  function SsmListSsmQuery_init_$Init$(baseUrl, channelId, chaincodeId, bearerToken, $mask0, $marker, $this) {
    if (!(($mask0 & 8) === 0))
      bearerToken = null;
    SsmListSsmQuery_0.call($this, baseUrl, channelId, chaincodeId, bearerToken);
    return $this;
  }
  function SsmListSsmQuery_init_$Create$(baseUrl, channelId, chaincodeId, bearerToken, $mask0, $marker) {
    return SsmListSsmQuery_init_$Init$(baseUrl, channelId, chaincodeId, bearerToken, $mask0, $marker, Object.create(SsmListSsmQuery_0.prototype));
  }
  function SsmListSsmQuery_0(baseUrl, channelId, chaincodeId, bearerToken) {
    var bearerToken_0 = bearerToken === void 1 ? null : bearerToken;
    this._baseUrl_7 = baseUrl;
    this._channelId_8 = channelId;
    this._chaincodeId_7 = chaincodeId;
    this._bearerToken_7 = bearerToken_0;
  }
  SsmListSsmQuery_0.prototype._get_baseUrl__0_k$ = function () {
    return this._baseUrl_7;
  };
  SsmListSsmQuery_0.prototype._get_channelId__0_k$ = function () {
    return this._channelId_8;
  };
  SsmListSsmQuery_0.prototype._get_chaincodeId__0_k$ = function () {
    return this._chaincodeId_7;
  };
  SsmListSsmQuery_0.prototype._get_bearerToken__0_k$ = function () {
    return this._bearerToken_7;
  };
  SsmListSsmQuery_0.$metadata$ = {
    simpleName: 'SsmListSsmQuery',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(SsmListSsmQuery_0.prototype, 'baseUrl', {
    configurable: true,
    get: SsmListSsmQuery_0.prototype._get_baseUrl__0_k$
  });
  Object.defineProperty(SsmListSsmQuery_0.prototype, 'channelId', {
    configurable: true,
    get: SsmListSsmQuery_0.prototype._get_channelId__0_k$
  });
  Object.defineProperty(SsmListSsmQuery_0.prototype, 'chaincodeId', {
    configurable: true,
    get: SsmListSsmQuery_0.prototype._get_chaincodeId__0_k$
  });
  Object.defineProperty(SsmListSsmQuery_0.prototype, 'bearerToken', {
    configurable: true,
    get: SsmListSsmQuery_0.prototype._get_bearerToken__0_k$
  });
  function SsmListSsmResult_0(values) {
    this._values_1 = values;
  }
  SsmListSsmResult_0.prototype._get_values__0_k$ = function () {
    return this._values_1;
  };
  SsmListSsmResult_0.$metadata$ = {
    simpleName: 'SsmListSsmResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(SsmListSsmResult_0.prototype, 'values', {
    configurable: true,
    get: SsmListSsmResult_0.prototype._get_values__0_k$
  });
  function SsmListUserQuery_init_$Init$(baseUrl, channelId, chaincodeId, bearerToken, $mask0, $marker, $this) {
    if (!(($mask0 & 8) === 0))
      bearerToken = null;
    SsmListUserQuery_0.call($this, baseUrl, channelId, chaincodeId, bearerToken);
    return $this;
  }
  function SsmListUserQuery_init_$Create$(baseUrl, channelId, chaincodeId, bearerToken, $mask0, $marker) {
    return SsmListUserQuery_init_$Init$(baseUrl, channelId, chaincodeId, bearerToken, $mask0, $marker, Object.create(SsmListUserQuery_0.prototype));
  }
  function SsmListUserQuery_0(baseUrl, channelId, chaincodeId, bearerToken) {
    var bearerToken_0 = bearerToken === void 1 ? null : bearerToken;
    this._baseUrl_8 = baseUrl;
    this._channelId_9 = channelId;
    this._chaincodeId_8 = chaincodeId;
    this._bearerToken_8 = bearerToken_0;
  }
  SsmListUserQuery_0.prototype._get_baseUrl__0_k$ = function () {
    return this._baseUrl_8;
  };
  SsmListUserQuery_0.prototype._get_channelId__0_k$ = function () {
    return this._channelId_9;
  };
  SsmListUserQuery_0.prototype._get_chaincodeId__0_k$ = function () {
    return this._chaincodeId_8;
  };
  SsmListUserQuery_0.prototype._get_bearerToken__0_k$ = function () {
    return this._bearerToken_8;
  };
  SsmListUserQuery_0.$metadata$ = {
    simpleName: 'SsmListUserQuery',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(SsmListUserQuery_0.prototype, 'baseUrl', {
    configurable: true,
    get: SsmListUserQuery_0.prototype._get_baseUrl__0_k$
  });
  Object.defineProperty(SsmListUserQuery_0.prototype, 'channelId', {
    configurable: true,
    get: SsmListUserQuery_0.prototype._get_channelId__0_k$
  });
  Object.defineProperty(SsmListUserQuery_0.prototype, 'chaincodeId', {
    configurable: true,
    get: SsmListUserQuery_0.prototype._get_chaincodeId__0_k$
  });
  Object.defineProperty(SsmListUserQuery_0.prototype, 'bearerToken', {
    configurable: true,
    get: SsmListUserQuery_0.prototype._get_bearerToken__0_k$
  });
  function SsmListUserResult_0(values) {
    this._values_2 = values;
  }
  SsmListUserResult_0.prototype._get_values__0_k$ = function () {
    return this._values_2;
  };
  SsmListUserResult_0.$metadata$ = {
    simpleName: 'SsmListUserResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(SsmListUserResult_0.prototype, 'values', {
    configurable: true,
    get: SsmListUserResult_0.prototype._get_values__0_k$
  });
  function CanGenerateCertificateQuery_0(sessionState) {
    this._sessionState = sessionState;
  }
  CanGenerateCertificateQuery_0.prototype._get_sessionState__0_k$ = function () {
    return this._sessionState;
  };
  CanGenerateCertificateQuery_0.$metadata$ = {
    simpleName: 'CanGenerateCertificateQuery',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(CanGenerateCertificateQuery_0.prototype, 'sessionState', {
    configurable: true,
    get: CanGenerateCertificateQuery_0.prototype._get_sessionState__0_k$
  });
  function CanGenerateCertificateResult_0(sessionState, canGenerateCertificate) {
    this._sessionState_0 = sessionState;
    this._canGenerateCertificate = canGenerateCertificate;
  }
  CanGenerateCertificateResult_0.prototype._get_sessionState__0_k$ = function () {
    return this._sessionState_0;
  };
  CanGenerateCertificateResult_0.prototype._get_canGenerateCertificate__0_k$ = function () {
    return this._canGenerateCertificate;
  };
  CanGenerateCertificateResult_0.$metadata$ = {
    simpleName: 'CanGenerateCertificateResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(CanGenerateCertificateResult_0.prototype, 'sessionState', {
    configurable: true,
    get: CanGenerateCertificateResult_0.prototype._get_sessionState__0_k$
  });
  Object.defineProperty(CanGenerateCertificateResult_0.prototype, 'canGenerateCertificate', {
    configurable: true,
    get: CanGenerateCertificateResult_0.prototype._get_canGenerateCertificate__0_k$
  });
  function GenerateCertificateFromSessionStateQuery_0(sessionState, lang) {
    this._sessionState_1 = sessionState;
    this._lang = lang;
  }
  GenerateCertificateFromSessionStateQuery_0.prototype._get_sessionState__0_k$ = function () {
    return this._sessionState_1;
  };
  GenerateCertificateFromSessionStateQuery_0.prototype._get_lang__0_k$ = function () {
    return this._lang;
  };
  GenerateCertificateFromSessionStateQuery_0.$metadata$ = {
    simpleName: 'GenerateCertificateFromSessionStateQuery',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(GenerateCertificateFromSessionStateQuery_0.prototype, 'sessionState', {
    configurable: true,
    get: GenerateCertificateFromSessionStateQuery_0.prototype._get_sessionState__0_k$
  });
  Object.defineProperty(GenerateCertificateFromSessionStateQuery_0.prototype, 'lang', {
    configurable: true,
    get: GenerateCertificateFromSessionStateQuery_0.prototype._get_lang__0_k$
  });
  function GenerateCertificateFromSessionStateResult_0(base64Document) {
    this._base64Document = base64Document;
  }
  GenerateCertificateFromSessionStateResult_0.prototype._get_base64Document__0_k$ = function () {
    return this._base64Document;
  };
  GenerateCertificateFromSessionStateResult_0.$metadata$ = {
    simpleName: 'GenerateCertificateFromSessionStateResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(GenerateCertificateFromSessionStateResult_0.prototype, 'base64Document', {
    configurable: true,
    get: GenerateCertificateFromSessionStateResult_0.prototype._get_base64Document__0_k$
  });
  function GenerateCertificatePdfQuery_0(certificate, lang) {
    this._certificate = certificate;
    this._lang_0 = lang;
  }
  GenerateCertificatePdfQuery_0.prototype._get_certificate__0_k$ = function () {
    return this._certificate;
  };
  GenerateCertificatePdfQuery_0.prototype._get_lang__0_k$ = function () {
    return this._lang_0;
  };
  GenerateCertificatePdfQuery_0.$metadata$ = {
    simpleName: 'GenerateCertificatePdfQuery',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(GenerateCertificatePdfQuery_0.prototype, 'certificate', {
    configurable: true,
    get: GenerateCertificatePdfQuery_0.prototype._get_certificate__0_k$
  });
  Object.defineProperty(GenerateCertificatePdfQuery_0.prototype, 'lang', {
    configurable: true,
    get: GenerateCertificatePdfQuery_0.prototype._get_lang__0_k$
  });
  function GenerateCertificatePdfResult_0(base64Document) {
    this._base64Document_0 = base64Document;
  }
  GenerateCertificatePdfResult_0.prototype._get_base64Document__0_k$ = function () {
    return this._base64Document_0;
  };
  GenerateCertificatePdfResult_0.$metadata$ = {
    simpleName: 'GenerateCertificatePdfResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(GenerateCertificatePdfResult_0.prototype, 'base64Document', {
    configurable: true,
    get: GenerateCertificatePdfResult_0.prototype._get_base64Document__0_k$
  });
  AbstractMap.prototype._get_entries__0_k$ = Map_0.prototype._get_entries__0_k$;
  AbstractMutableMap.prototype._get_entries__0_k$ = MutableMap.prototype._get_entries__0_k$;
  InternalHashCodeMap.prototype.createJsMap_0_k$ = InternalMap.prototype.createJsMap_0_k$;
  KClassImpl.prototype._get_simpleName__0_k$ = KClass.prototype._get_simpleName__0_k$;
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
  var $f2$dsl$fnc = $f2$dsl.fnc || ($f2$dsl.fnc = {});
  var $ssm = _.ssm || (_.ssm = {});
  var $ssm$chaincode = $ssm.chaincode || ($ssm.chaincode = {});
  var $ssm$chaincode$dsl = $ssm$chaincode.dsl || ($ssm$chaincode.dsl = {});
  var $ssm$chaincode$dsl$blockchain = $ssm$chaincode$dsl.blockchain || ($ssm$chaincode$dsl.blockchain = {});
  var $x2 = _.x2 || (_.x2 = {});
  var $x2$api = $x2.api || ($x2.api = {});
  var $x2$api$certificate = $x2$api.certificate || ($x2$api.certificate = {});
  var $x2$api$certificate$domain = $x2$api$certificate.domain || ($x2$api$certificate.domain = {});
  var $x2$api$certificate$domain$features = $x2$api$certificate$domain.features || ($x2$api$certificate$domain.features = {});
  var $x2$api$certificate$domain$model = $x2$api$certificate$domain.model || ($x2$api$certificate$domain.model = {});
  var $kotlinx = _.kotlinx || (_.kotlinx = {});
  var $kotlinx$atomicfu = $kotlinx.atomicfu || ($kotlinx.atomicfu = {});
  $kotlinx$atomicfu.atomic$ref$ = atomic;
  $kotlinx$atomicfu.atomic$boolean$ = atomic_1;
  $kotlinx$atomicfu.atomic$int$ = atomic_3;
  $kotlinx$atomicfu.atomic$long$ = atomic_5;
  $f2$dsl$cqrs.ErrorSeverity = ErrorSeverity_0;
  $f2$dsl$cqrs.ErrorSeverityWarning = ErrorSeverityWarning_0;
  $f2$dsl$cqrs.AlertSeverityError = ErrorSeverityError;
  var $f2$dsl$cqrs$base = $f2$dsl$cqrs.base || ($f2$dsl$cqrs.base = {});
  $f2$dsl$cqrs$base.ErrorBase = ErrorBase_0;
  $f2$dsl$cqrs$base.PageBase = PageBase_0;
  $f2$dsl$cqrs$base.PageRequestBase = PageRequestBase_0;
  var $f2$dsl$cqrs$exception = $f2$dsl$cqrs.exception || ($f2$dsl$cqrs.exception = {});
  $f2$dsl$cqrs$exception.R2Exception = S2Exception;
  $f2$dsl$cqrs$exception.R2NotFoundException = S2NotFoundException;
  $ssm$chaincode$dsl.Chaincode = Chaincode_0;
  $ssm$chaincode$dsl.InvokeReturn = InvokeReturn_0;
  $ssm$chaincode$dsl.Ssm = Ssm_0;
  $ssm$chaincode$dsl.SsmAgent = SsmAgent_0;
  $ssm$chaincode$dsl.SsmContext = SsmContext_0;
  $ssm$chaincode$dsl.SsmGrant = SsmGrant_0;
  $ssm$chaincode$dsl.Credit = Credit_0;
  $ssm$chaincode$dsl.SsmSession = SsmSession_0;
  $ssm$chaincode$dsl.SsmSessionState = SsmSessionState_0;
  $ssm$chaincode$dsl.SsmSessionStateLog = SsmSessionStateLog_0;
  $ssm$chaincode$dsl.SsmTransition = SsmTransition_0;
  $ssm$chaincode$dsl$blockchain.Block = Block_0;
  $ssm$chaincode$dsl$blockchain.IdentitiesInfo = IdentitiesInfo_0;
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
  $x2$api$certificate$domain$features.CanGenerateCertificateQuery = CanGenerateCertificateQuery_0;
  $x2$api$certificate$domain$features.CanGenerateCertificateResult = CanGenerateCertificateResult_0;
  $x2$api$certificate$domain$features.GenerateCertificateFromSessionStateQuery = GenerateCertificateFromSessionStateQuery_0;
  $x2$api$certificate$domain$features.GenerateCertificateFromSessionStateResult = GenerateCertificateFromSessionStateResult_0;
  $x2$api$certificate$domain$features.GenerateCertificatePdfQuery = GenerateCertificatePdfQuery_0;
  $x2$api$certificate$domain$features.GenerateCertificatePdfResult = GenerateCertificatePdfResult_0;
  return _;
}));
