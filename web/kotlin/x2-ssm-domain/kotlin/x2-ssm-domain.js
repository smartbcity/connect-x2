(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['x2-ssm-domain'] = factory(typeof this['x2-ssm-domain'] === 'undefined' ? {} : this['x2-ssm-domain']);
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
  ErrorSeverityWarning_0.prototype = Object.create(ErrorSeverity_0.prototype);
  ErrorSeverityWarning_0.prototype.constructor = ErrorSeverityWarning_0;
  ErrorSeverityError.prototype = Object.create(ErrorSeverity_0.prototype);
  ErrorSeverityError.prototype.constructor = ErrorSeverityError;
  S2Exception.prototype = Object.create(Exception.prototype);
  S2Exception.prototype.constructor = S2Exception;
  S2NotFoundException.prototype = Object.create(Exception.prototype);
  S2NotFoundException.prototype.constructor = S2NotFoundException;
  SsmSessionState_0.prototype = Object.create(SsmSession_0.prototype);
  SsmSessionState_0.prototype.constructor = SsmSessionState_0;
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
    buffer.append_2(prefix);
    Unit_getInstance();
    var count = 0;
    var tmp0_iterator = _this_.iterator_16();
    $l$break: while (tmp0_iterator.hasNext_0()) {
      var element = tmp0_iterator.next_0();
      count = count + 1 | 0;
      if (count > 1) {
        buffer.append_2(separator);
        Unit_getInstance();
      } else {
      }
      if (limit < 0 ? true : count <= limit) {
        appendElement(buffer, element, transform);
      } else
        break $l$break;
    }
    if (limit >= 0 ? count > limit : false) {
      buffer.append_2(truncated);
      Unit_getInstance();
    }buffer.append_2(postfix);
    Unit_getInstance();
    return buffer;
  }
  function _no_name_provided_(this$0) {
    this._this$0 = this$0;
  }
  _no_name_provided_.prototype.invoke = function (it) {
    return it === this._this$0 ? '(this Collection)' : toString_0(it);
  };
  _no_name_provided_.prototype.invoke_42 = function (p1) {
    return this.invoke((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided_.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function AbstractCollection() {
  }
  AbstractCollection.prototype.contains_2 = function (element) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp;
      if (isInterface(this, Collection)) {
        tmp = this.isEmpty_4();
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
      var tmp0_iterator_1 = this.iterator_16();
      while (tmp0_iterator_1.hasNext_0()) {
        var element_2 = tmp0_iterator_1.next_0();
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
  AbstractCollection.prototype.containsAll_4 = function (elements) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.isEmpty_4();
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
      var tmp0_iterator_1 = elements.iterator_16();
      while (tmp0_iterator_1.hasNext_0()) {
        var element_2 = tmp0_iterator_1.next_0();
        if (!this.contains_2(element_2)) {
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
  AbstractCollection.prototype.isEmpty_4 = function () {
    return this._get_size__14() === 0;
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
      return i.invoke(p1);
    };
  }
  function toString($this, o) {
    return o === $this ? '(this Map)' : toString_0(o);
  }
  function implFindEntry($this, key) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_firstOrNull_0 = $this._get_entries__2();
      var tmp0_iterator_1 = tmp0_firstOrNull_0.iterator_16();
      while (tmp0_iterator_1.hasNext_0()) {
        var element_2 = tmp0_iterator_1.next_0();
        if (equals(element_2._get_key_(), key)) {
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
  _no_name_provided__0.prototype.invoke_1 = function (it) {
    return this._this$0_0.toString_0(it);
  };
  _no_name_provided__0.prototype.invoke_42 = function (p1) {
    return this.invoke_1((!(p1 == null) ? isInterface(p1, Entry) : false) ? p1 : THROW_CCE());
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
  AbstractMap.prototype.containsKey_2 = function (key) {
    return !(implFindEntry(this, key) == null);
  };
  AbstractMap.prototype.containsEntry_3 = function (entry) {
    if (!(!(entry == null) ? isInterface(entry, Entry) : false))
      return false;
    else {
    }
    var key = entry._get_key_();
    var value = entry._get_value_();
    var ourValue = (isInterface(this, Map_0) ? this : THROW_CCE()).get_4(key);
    if (!equals(value, ourValue)) {
      return false;
    }var tmp;
    if (ourValue == null) {
      tmp = !(isInterface(this, Map_0) ? this : THROW_CCE()).containsKey_2(key);
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
    if (!(this._get_size__14() === other._get_size__14()))
      return false;
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_all_0 = other._get_entries__2();
      var tmp;
      if (isInterface(tmp0_all_0, Collection)) {
        tmp = tmp0_all_0.isEmpty_4();
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
      var tmp0_iterator_1 = tmp0_all_0.iterator_16();
      while (tmp0_iterator_1.hasNext_0()) {
        var element_2 = tmp0_iterator_1.next_0();
        if (!this.containsEntry_3(element_2)) {
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
  AbstractMap.prototype.get_4 = function (key) {
    var tmp0_safe_receiver = implFindEntry(this, key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_value_();
  };
  AbstractMap.prototype.hashCode = function () {
    return hashCode(this._get_entries__2());
  };
  AbstractMap.prototype._get_size__14 = function () {
    return this._get_entries__2()._get_size__14();
  };
  AbstractMap.prototype.toString = function () {
    var tmp = this._get_entries__2();
    return joinToString$default(tmp, ', ', '{', '}', 0, null, _no_name_provided_$factory_0(this), 24, null);
  };
  AbstractMap.prototype.toString_0 = function (entry) {
    return toString(this, entry._get_key_()) + '=' + toString(this, entry._get_value_());
  };
  AbstractMap.$metadata$ = {
    simpleName: 'AbstractMap',
    kind: 'class',
    interfaces: [Map_0]
  };
  function _no_name_provided_$factory_0(this$0) {
    var i = new _no_name_provided__0(this$0);
    return function (p1) {
      return i.invoke_1(p1);
    };
  }
  function Companion_1() {
    Companion_instance_0 = this;
  }
  Companion_1.prototype.unorderedHashCode = function (c) {
    var hashCode_0 = 0;
    var tmp0_iterator = c.iterator_16();
    while (tmp0_iterator.hasNext_0()) {
      var element = tmp0_iterator.next_0();
      var tmp = hashCode_0;
      var tmp1_safe_receiver = element;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : hashCode(tmp1_safe_receiver);
      hashCode_0 = tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
    }
    return hashCode_0;
  };
  Companion_1.prototype.setEquals = function (c, other) {
    if (!(c._get_size__14() === other._get_size__14()))
      return false;
    return c.containsAll_4(other);
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
      _this_.append_2(transform(element));
      Unit_getInstance();
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this_.append_2(element);
        Unit_getInstance();
      } else {
        if (element instanceof Char) {
          _this_.append_1(element);
          Unit_getInstance();
        } else {
          {
            _this_.append_2(toString_0(element));
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
    var iterator = collection.iterator_16();
    while (iterator.hasNext_0()) {
      array.push(iterator.next_0());
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
  AbstractEntrySet.prototype.contains_2 = function (element) {
    return this.containsEntry_2(element);
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
    return Companion_getInstance_0().setEquals(this, other);
  };
  AbstractMutableSet.prototype.hashCode = function () {
    return Companion_getInstance_0().unorderedHashCode(this);
  };
  AbstractMutableSet.$metadata$ = {
    simpleName: 'AbstractMutableSet',
    kind: 'class',
    interfaces: [MutableSet]
  };
  function HashCode() {
    HashCode_instance = this;
  }
  HashCode.prototype.equals_1 = function (value1, value2) {
    return equals(value1, value2);
  };
  HashCode.prototype.getHashCode_0 = function (value) {
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
  EntrySet.prototype.containsEntry_2 = function (element) {
    return this._$this.containsEntry_3(element);
  };
  EntrySet.prototype.iterator_16 = function () {
    return this._$this._internalMap.iterator_16();
  };
  EntrySet.prototype._get_size__14 = function () {
    return this._$this._get_size__14();
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
    $this._equality = internalMap._get_equality__0();
    return $this;
  }
  function HashMap_init_$Init$_0($this) {
    HashMap_init_$Init$(new InternalHashCodeMap(HashCode_getInstance()), $this);
    return $this;
  }
  function HashMap_init_$Create$() {
    return HashMap_init_$Init$_0(Object.create(HashMap.prototype));
  }
  HashMap.prototype.containsKey_2 = function (key) {
    return this._internalMap.contains_5(key);
  };
  HashMap.prototype._get_entries__2 = function () {
    if (this.__entries == null) {
      this.__entries = this.createEntrySet();
    }return ensureNotNull(this.__entries);
  };
  HashMap.prototype.createEntrySet = function () {
    return new EntrySet(this);
  };
  HashMap.prototype.get_4 = function (key) {
    return this._internalMap.get_4(key);
  };
  HashMap.prototype._get_size__14 = function () {
    return this._internalMap._get_size__14();
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
    var tmp0_elvis_lhs = getChainOrEntryOrNull($this, $this._equality_0.getHashCode_0(key));
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var chainOrEntry = tmp;
    if (!(!(chainOrEntry == null) ? isArray(chainOrEntry) : false)) {
      var entry = chainOrEntry;
      if ($this._equality_0.equals_1(entry._get_key_(), key)) {
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
        if ($this._equality_0.equals_1(element_2._get_key_(), key)) {
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
  function getChainOrEntryOrNull($this, hashCode_0) {
    var chainOrEntry = $this._backingMap[hashCode_0];
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
  _no_name_provided__1.prototype.hasNext_0 = function () {
    if (this._state === -1)
      this._state = computeNext(this);
    return this._state === 0;
  };
  _no_name_provided__1.prototype.next_0 = function () {
    if (!this.hasNext_0())
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
    this._backingMap = this.createJsMap_0();
    this._size = 0;
  }
  InternalHashCodeMap.prototype._get_equality__0 = function () {
    return this._equality_0;
  };
  InternalHashCodeMap.prototype._get_size__14 = function () {
    return this._size;
  };
  InternalHashCodeMap.prototype.contains_5 = function (key) {
    return !(getEntry(this, key) == null);
  };
  InternalHashCodeMap.prototype.get_4 = function (key) {
    var tmp0_safe_receiver = getEntry(this, key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_value_();
  };
  InternalHashCodeMap.prototype.iterator_16 = function () {
    return new _no_name_provided__1(this);
  };
  InternalHashCodeMap.$metadata$ = {
    simpleName: 'InternalHashCodeMap',
    kind: 'class',
    interfaces: [InternalMap]
  };
  function InternalMap() {
  }
  InternalMap.prototype.createJsMap_0 = function () {
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
  function _get_js_(_this_) {
    return (_this_ instanceof KClassImpl ? _this_ : THROW_CCE())._get_jClass__2();
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
  KClassImpl.prototype._get_jClass__2 = function () {
    return this._jClass;
  };
  KClassImpl.prototype.equals = function (other) {
    var tmp;
    if (other instanceof KClassImpl) {
      tmp = equals(this._get_jClass__2(), other._get_jClass__2());
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  KClassImpl.prototype.hashCode = function () {
    var tmp0_safe_receiver = this._get_simpleName__2();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  KClassImpl.prototype.toString = function () {
    return '' + 'class ' + this._get_simpleName__2();
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
  PrimitiveKClassImpl.prototype._get_simpleName__2 = function () {
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
  NothingKClassImpl.prototype._get_simpleName__2 = function () {
    return this._simpleName;
  };
  NothingKClassImpl.prototype._get_jClass__2 = function () {
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
  SimpleKClassImpl.prototype._get_simpleName__2 = function () {
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
  _no_name_provided__2.prototype.invoke_41 = function (it) {
    return isObject(it);
  };
  _no_name_provided__2.prototype.invoke_42 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__2.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__3() {
  }
  _no_name_provided__3.prototype.invoke_41 = function (it) {
    return isNumber(it);
  };
  _no_name_provided__3.prototype.invoke_42 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__3.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__4() {
  }
  _no_name_provided__4.prototype.invoke_41 = function (it) {
    return !(it == null) ? typeof it === 'boolean' : false;
  };
  _no_name_provided__4.prototype.invoke_42 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__4.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__5() {
  }
  _no_name_provided__5.prototype.invoke_41 = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__5.prototype.invoke_42 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__5.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__6() {
  }
  _no_name_provided__6.prototype.invoke_41 = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__6.prototype.invoke_42 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__6.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__7() {
  }
  _no_name_provided__7.prototype.invoke_41 = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__7.prototype.invoke_42 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__7.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__8() {
  }
  _no_name_provided__8.prototype.invoke_41 = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__8.prototype.invoke_42 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__8.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__9() {
  }
  _no_name_provided__9.prototype.invoke_41 = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__9.prototype.invoke_42 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__9.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__10() {
  }
  _no_name_provided__10.prototype.invoke_41 = function (it) {
    return !(it == null) ? isArray(it) : false;
  };
  _no_name_provided__10.prototype.invoke_42 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__10.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__11() {
  }
  _no_name_provided__11.prototype.invoke_41 = function (it) {
    return !(it == null) ? typeof it === 'string' : false;
  };
  _no_name_provided__11.prototype.invoke_42 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__11.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__12() {
  }
  _no_name_provided__12.prototype.invoke_41 = function (it) {
    return it instanceof Error;
  };
  _no_name_provided__12.prototype.invoke_42 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__12.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__13() {
  }
  _no_name_provided__13.prototype.invoke_41 = function (it) {
    return !(it == null) ? isBooleanArray(it) : false;
  };
  _no_name_provided__13.prototype.invoke_42 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__13.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__14() {
  }
  _no_name_provided__14.prototype.invoke_41 = function (it) {
    return !(it == null) ? isCharArray(it) : false;
  };
  _no_name_provided__14.prototype.invoke_42 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__14.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__15() {
  }
  _no_name_provided__15.prototype.invoke_41 = function (it) {
    return !(it == null) ? isByteArray(it) : false;
  };
  _no_name_provided__15.prototype.invoke_42 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__15.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__16() {
  }
  _no_name_provided__16.prototype.invoke_41 = function (it) {
    return !(it == null) ? isShortArray(it) : false;
  };
  _no_name_provided__16.prototype.invoke_42 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__16.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__17() {
  }
  _no_name_provided__17.prototype.invoke_41 = function (it) {
    return !(it == null) ? isIntArray(it) : false;
  };
  _no_name_provided__17.prototype.invoke_42 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__17.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__18() {
  }
  _no_name_provided__18.prototype.invoke_41 = function (it) {
    return !(it == null) ? isLongArray(it) : false;
  };
  _no_name_provided__18.prototype.invoke_42 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__18.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__19() {
  }
  _no_name_provided__19.prototype.invoke_41 = function (it) {
    return !(it == null) ? isFloatArray(it) : false;
  };
  _no_name_provided__19.prototype.invoke_42 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__19.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__20() {
  }
  _no_name_provided__20.prototype.invoke_41 = function (it) {
    return !(it == null) ? isDoubleArray(it) : false;
  };
  _no_name_provided__20.prototype.invoke_42 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__20.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__21($arity) {
    this._$arity = $arity;
  }
  _no_name_provided__21.prototype.invoke_41 = function (it) {
    var tmp;
    if (typeof it === 'function') {
      tmp = it.length === this._$arity;
    } else {
      tmp = false;
    }
    return tmp;
  };
  _no_name_provided__21.prototype.invoke_42 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__21.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function PrimitiveClasses_0() {
    PrimitiveClasses_instance = this;
    var tmp = this;
    var tmp0_unsafeCast_0 = Object;
    var tmp_0 = tmp0_unsafeCast_0;
    tmp._anyClass = new PrimitiveKClassImpl(tmp_0, 'Any', _no_name_provided_$factory_1());
    var tmp_1 = this;
    var tmp0_unsafeCast_0_0 = Number;
    var tmp_2 = tmp0_unsafeCast_0_0;
    tmp_1._numberClass = new PrimitiveKClassImpl(tmp_2, 'Number', _no_name_provided_$factory_2());
    this._nothingClass = NothingKClassImpl_getInstance();
    var tmp_3 = this;
    var tmp0_unsafeCast_0_1 = Boolean;
    var tmp_4 = tmp0_unsafeCast_0_1;
    tmp_3._booleanClass = new PrimitiveKClassImpl(tmp_4, 'Boolean', _no_name_provided_$factory_3());
    var tmp_5 = this;
    var tmp0_unsafeCast_0_2 = Number;
    var tmp_6 = tmp0_unsafeCast_0_2;
    tmp_5._byteClass = new PrimitiveKClassImpl(tmp_6, 'Byte', _no_name_provided_$factory_4());
    var tmp_7 = this;
    var tmp0_unsafeCast_0_3 = Number;
    var tmp_8 = tmp0_unsafeCast_0_3;
    tmp_7._shortClass = new PrimitiveKClassImpl(tmp_8, 'Short', _no_name_provided_$factory_5());
    var tmp_9 = this;
    var tmp0_unsafeCast_0_4 = Number;
    var tmp_10 = tmp0_unsafeCast_0_4;
    tmp_9._intClass = new PrimitiveKClassImpl(tmp_10, 'Int', _no_name_provided_$factory_6());
    var tmp_11 = this;
    var tmp0_unsafeCast_0_5 = Number;
    var tmp_12 = tmp0_unsafeCast_0_5;
    tmp_11._floatClass = new PrimitiveKClassImpl(tmp_12, 'Float', _no_name_provided_$factory_7());
    var tmp_13 = this;
    var tmp0_unsafeCast_0_6 = Number;
    var tmp_14 = tmp0_unsafeCast_0_6;
    tmp_13._doubleClass = new PrimitiveKClassImpl(tmp_14, 'Double', _no_name_provided_$factory_8());
    var tmp_15 = this;
    var tmp0_unsafeCast_0_7 = Array;
    var tmp_16 = tmp0_unsafeCast_0_7;
    tmp_15._arrayClass = new PrimitiveKClassImpl(tmp_16, 'Array', _no_name_provided_$factory_9());
    var tmp_17 = this;
    var tmp0_unsafeCast_0_8 = String;
    var tmp_18 = tmp0_unsafeCast_0_8;
    tmp_17._stringClass = new PrimitiveKClassImpl(tmp_18, 'String', _no_name_provided_$factory_10());
    var tmp_19 = this;
    var tmp0_unsafeCast_0_9 = Error;
    var tmp_20 = tmp0_unsafeCast_0_9;
    tmp_19._throwableClass = new PrimitiveKClassImpl(tmp_20, 'Throwable', _no_name_provided_$factory_11());
    var tmp_21 = this;
    var tmp0_unsafeCast_0_10 = Array;
    var tmp_22 = tmp0_unsafeCast_0_10;
    tmp_21._booleanArrayClass = new PrimitiveKClassImpl(tmp_22, 'BooleanArray', _no_name_provided_$factory_12());
    var tmp_23 = this;
    var tmp0_unsafeCast_0_11 = Uint16Array;
    var tmp_24 = tmp0_unsafeCast_0_11;
    tmp_23._charArrayClass = new PrimitiveKClassImpl(tmp_24, 'CharArray', _no_name_provided_$factory_13());
    var tmp_25 = this;
    var tmp0_unsafeCast_0_12 = Int8Array;
    var tmp_26 = tmp0_unsafeCast_0_12;
    tmp_25._byteArrayClass = new PrimitiveKClassImpl(tmp_26, 'ByteArray', _no_name_provided_$factory_14());
    var tmp_27 = this;
    var tmp0_unsafeCast_0_13 = Int16Array;
    var tmp_28 = tmp0_unsafeCast_0_13;
    tmp_27._shortArrayClass = new PrimitiveKClassImpl(tmp_28, 'ShortArray', _no_name_provided_$factory_15());
    var tmp_29 = this;
    var tmp0_unsafeCast_0_14 = Int32Array;
    var tmp_30 = tmp0_unsafeCast_0_14;
    tmp_29._intArrayClass = new PrimitiveKClassImpl(tmp_30, 'IntArray', _no_name_provided_$factory_16());
    var tmp_31 = this;
    var tmp0_unsafeCast_0_15 = Array;
    var tmp_32 = tmp0_unsafeCast_0_15;
    tmp_31._longArrayClass = new PrimitiveKClassImpl(tmp_32, 'LongArray', _no_name_provided_$factory_17());
    var tmp_33 = this;
    var tmp0_unsafeCast_0_16 = Float32Array;
    var tmp_34 = tmp0_unsafeCast_0_16;
    tmp_33._floatArrayClass = new PrimitiveKClassImpl(tmp_34, 'FloatArray', _no_name_provided_$factory_18());
    var tmp_35 = this;
    var tmp0_unsafeCast_0_17 = Float64Array;
    var tmp_36 = tmp0_unsafeCast_0_17;
    tmp_35._doubleArrayClass = new PrimitiveKClassImpl(tmp_36, 'DoubleArray', _no_name_provided_$factory_19());
  }
  PrimitiveClasses_0.prototype._get_anyClass_ = function () {
    return this._anyClass;
  };
  PrimitiveClasses_0.prototype._get_numberClass_ = function () {
    return this._numberClass;
  };
  PrimitiveClasses_0.prototype._get_nothingClass_ = function () {
    return this._nothingClass;
  };
  PrimitiveClasses_0.prototype._get_booleanClass_ = function () {
    return this._booleanClass;
  };
  PrimitiveClasses_0.prototype._get_byteClass_ = function () {
    return this._byteClass;
  };
  PrimitiveClasses_0.prototype._get_shortClass_ = function () {
    return this._shortClass;
  };
  PrimitiveClasses_0.prototype._get_intClass_ = function () {
    return this._intClass;
  };
  PrimitiveClasses_0.prototype._get_floatClass_ = function () {
    return this._floatClass;
  };
  PrimitiveClasses_0.prototype._get_doubleClass_ = function () {
    return this._doubleClass;
  };
  PrimitiveClasses_0.prototype._get_arrayClass_ = function () {
    return this._arrayClass;
  };
  PrimitiveClasses_0.prototype._get_stringClass_ = function () {
    return this._stringClass;
  };
  PrimitiveClasses_0.prototype._get_throwableClass_ = function () {
    return this._throwableClass;
  };
  PrimitiveClasses_0.prototype._get_booleanArrayClass_ = function () {
    return this._booleanArrayClass;
  };
  PrimitiveClasses_0.prototype._get_charArrayClass_ = function () {
    return this._charArrayClass;
  };
  PrimitiveClasses_0.prototype._get_byteArrayClass_ = function () {
    return this._byteArrayClass;
  };
  PrimitiveClasses_0.prototype._get_shortArrayClass_ = function () {
    return this._shortArrayClass;
  };
  PrimitiveClasses_0.prototype._get_intArrayClass_ = function () {
    return this._intArrayClass;
  };
  PrimitiveClasses_0.prototype._get_longArrayClass_ = function () {
    return this._longArrayClass;
  };
  PrimitiveClasses_0.prototype._get_floatArrayClass_ = function () {
    return this._floatArrayClass;
  };
  PrimitiveClasses_0.prototype._get_doubleArrayClass_ = function () {
    return this._doubleArrayClass;
  };
  PrimitiveClasses_0.prototype.functionClass = function (arity) {
    var tmp0_elvis_lhs = functionClasses[arity];
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_unsafeCast_0_3 = Function;
      var tmp_0 = tmp0_unsafeCast_0_3;
      var tmp_1 = '' + 'Function' + arity;
      var result_2 = new PrimitiveKClassImpl(tmp_0, tmp_1, _no_name_provided_$factory_20(arity));
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
    get: PrimitiveClasses_0.prototype._get_anyClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'numberClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_numberClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'nothingClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_nothingClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'booleanClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_booleanClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'byteClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_byteClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'shortClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_shortClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'intClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_intClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'floatClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_floatClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'doubleClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_doubleClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'arrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_arrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'stringClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_stringClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'throwableClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_throwableClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'booleanArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_booleanArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'charArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_charArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'byteArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_byteArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'shortArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_shortArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'intArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_intArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'longArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_longArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'floatArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_floatArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'doubleArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_doubleArrayClass_
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
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_2() {
    var i = new _no_name_provided__3();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_3() {
    var i = new _no_name_provided__4();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_4() {
    var i = new _no_name_provided__5();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_5() {
    var i = new _no_name_provided__6();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_6() {
    var i = new _no_name_provided__7();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_7() {
    var i = new _no_name_provided__8();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_8() {
    var i = new _no_name_provided__9();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_9() {
    var i = new _no_name_provided__10();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_10() {
    var i = new _no_name_provided__11();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_11() {
    var i = new _no_name_provided__12();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_12() {
    var i = new _no_name_provided__13();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_13() {
    var i = new _no_name_provided__14();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_14() {
    var i = new _no_name_provided__15();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_15() {
    var i = new _no_name_provided__16();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_16() {
    var i = new _no_name_provided__17();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_17() {
    var i = new _no_name_provided__18();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_18() {
    var i = new _no_name_provided__19();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_19() {
    var i = new _no_name_provided__20();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_20($arity) {
    var i = new _no_name_provided__21($arity);
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function functionClasses$init$() {
    var tmp0_arrayOfNulls_0 = 0;
    return fillArrayVal(Array(tmp0_arrayOfNulls_0), null);
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
  StringBuilder.prototype.append_1 = function (value) {
    var tmp0_this = this;
    tmp0_this._string = tmp0_this._string + value;
    return this;
  };
  StringBuilder.prototype.append_2 = function (value) {
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
  function MutableMap() {
  }
  MutableMap.$metadata$ = {
    simpleName: 'MutableMap',
    kind: 'interface',
    interfaces: [Map_0]
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
          var tmp0_asDynamic_0 = 1;
          var tmp_1 = tmp0_asDynamic_0 / obj1;
          var tmp1_asDynamic_0 = 1;
          tmp_0 = tmp_1 === tmp1_asDynamic_0 / obj2;
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
  function Long() {
  }
  Long.prototype.toInt_4 = function () {
    return this._low;
  };
  Long.$metadata$ = {
    simpleName: 'Long',
    kind: 'class',
    interfaces: [Comparable]
  };
  function imul(a_local, b_local) {
    var lhs = jsBitwiseAnd(a_local, 4.29490176E9) * jsBitwiseAnd(b_local, 65535);
    var rhs = jsBitwiseAnd(a_local, 65535) * b_local;
    return jsBitwiseOr(lhs + rhs, 0);
  }
  function numberToInt(a) {
    var tmp;
    if (a instanceof Long) {
      tmp = a.toInt_4();
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
    var tmp0_unsafeCast_0 = lhs_hack in rhs_hack;
    return tmp0_unsafeCast_0;
  }
  function jsBitwiseOr(lhs_hack, rhs_hack) {
    var tmp0_unsafeCast_0 = lhs_hack | rhs_hack;
    return tmp0_unsafeCast_0;
  }
  function jsTypeOf(value_hack) {
    var tmp0_unsafeCast_0 = typeof value_hack;
    return tmp0_unsafeCast_0;
  }
  function jsDeleteProperty(obj_hack, property_hack) {
    delete obj_hack[property_hack];
  }
  function jsInstanceOf(obj_hack, jsClass_hack) {
    var tmp0_unsafeCast_0 = obj_hack instanceof jsClass_hack;
    return tmp0_unsafeCast_0;
  }
  function jsBitwiseAnd(lhs_hack, rhs_hack) {
    var tmp0_unsafeCast_0 = lhs_hack & rhs_hack;
    return tmp0_unsafeCast_0;
  }
  function Command_0() {
  }
  Command_0.$metadata$ = {
    simpleName: 'Command',
    kind: 'interface',
    interfaces: []
  };
  function Error_0() {
  }
  Error_0.$metadata$ = {
    simpleName: 'Error',
    kind: 'interface',
    interfaces: []
  };
  function ErrorSeverity_0(severity) {
    this._severity = severity;
  }
  ErrorSeverity_0.prototype._get_severity__3 = function () {
    return this._severity;
  };
  ErrorSeverity_0.$metadata$ = {
    simpleName: 'ErrorSeverity',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(ErrorSeverity_0.prototype, 'severity', {
    configurable: true,
    get: ErrorSeverity_0.prototype._get_severity__3
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
  function Event_0() {
  }
  Event_0.$metadata$ = {
    simpleName: 'Event',
    kind: 'interface',
    interfaces: []
  };
  function Page_0() {
  }
  Page_0.$metadata$ = {
    simpleName: 'Page',
    kind: 'interface',
    interfaces: []
  };
  function PageRequest_0() {
  }
  PageRequest_0.$metadata$ = {
    simpleName: 'PageRequest',
    kind: 'interface',
    interfaces: []
  };
  function Query_0() {
  }
  Query_0.$metadata$ = {
    simpleName: 'Query',
    kind: 'interface',
    interfaces: []
  };
  function ErrorBase_0(type, description, date, payload, severity) {
    this._type = type;
    this._description = description;
    this._date = date;
    this._payload = payload;
    this._severity_0 = severity;
  }
  ErrorBase_0.prototype._get_type__0 = function () {
    return this._type;
  };
  ErrorBase_0.prototype._get_description__0 = function () {
    return this._description;
  };
  ErrorBase_0.prototype._get_date__2 = function () {
    return this._date;
  };
  ErrorBase_0.prototype._get_payload__0 = function () {
    return this._payload;
  };
  ErrorBase_0.prototype._get_severity__3 = function () {
    return this._severity_0;
  };
  ErrorBase_0.$metadata$ = {
    simpleName: 'ErrorBase',
    kind: 'class',
    interfaces: [Error_0]
  };
  Object.defineProperty(ErrorBase_0.prototype, 'type', {
    configurable: true,
    get: ErrorBase_0.prototype._get_type__0
  });
  Object.defineProperty(ErrorBase_0.prototype, 'description', {
    configurable: true,
    get: ErrorBase_0.prototype._get_description__0
  });
  Object.defineProperty(ErrorBase_0.prototype, 'date', {
    configurable: true,
    get: ErrorBase_0.prototype._get_date__2
  });
  Object.defineProperty(ErrorBase_0.prototype, 'payload', {
    configurable: true,
    get: ErrorBase_0.prototype._get_payload__0
  });
  Object.defineProperty(ErrorBase_0.prototype, 'severity', {
    configurable: true,
    get: ErrorBase_0.prototype._get_severity__3
  });
  function PageBase_0(page, size, total, list) {
    this._page = page;
    this._size_0 = size;
    this._total = total;
    this._list = list;
  }
  PageBase_0.prototype._get_page__2 = function () {
    return this._page;
  };
  PageBase_0.prototype._get_size__14 = function () {
    return this._size_0;
  };
  PageBase_0.prototype._get_total__0 = function () {
    return this._total;
  };
  PageBase_0.prototype._get_list__0 = function () {
    return this._list;
  };
  PageBase_0.$metadata$ = {
    simpleName: 'PageBase',
    kind: 'class',
    interfaces: [Page_0]
  };
  Object.defineProperty(PageBase_0.prototype, 'page', {
    configurable: true,
    get: PageBase_0.prototype._get_page__2
  });
  Object.defineProperty(PageBase_0.prototype, 'size', {
    configurable: true,
    get: PageBase_0.prototype._get_size__14
  });
  Object.defineProperty(PageBase_0.prototype, 'total', {
    configurable: true,
    get: PageBase_0.prototype._get_total__0
  });
  Object.defineProperty(PageBase_0.prototype, 'list', {
    configurable: true,
    get: PageBase_0.prototype._get_list__0
  });
  function PageRequestBase_0(page, size) {
    this._page_0 = page;
    this._size_1 = size;
  }
  PageRequestBase_0.prototype._get_page__2 = function () {
    return this._page_0;
  };
  PageRequestBase_0.prototype._get_size__14 = function () {
    return this._size_1;
  };
  PageRequestBase_0.$metadata$ = {
    simpleName: 'PageRequestBase',
    kind: 'class',
    interfaces: [PageRequest_0]
  };
  Object.defineProperty(PageRequestBase_0.prototype, 'page', {
    configurable: true,
    get: PageRequestBase_0.prototype._get_page__2
  });
  Object.defineProperty(PageRequestBase_0.prototype, 'size', {
    configurable: true,
    get: PageRequestBase_0.prototype._get_size__14
  });
  function S2Exception(id, error) {
    Exception_init_$Init$_0(error._get_description__0(), this);
    this._id = id;
    this._error = error;
    captureStack(this, S2Exception);
  }
  S2Exception.prototype._get_id__3 = function () {
    return this._id;
  };
  S2Exception.prototype._get_error_ = function () {
    return this._error;
  };
  S2Exception.$metadata$ = {
    simpleName: 'S2Exception',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(S2Exception.prototype, 'id', {
    configurable: true,
    get: S2Exception.prototype._get_id__3
  });
  Object.defineProperty(S2Exception.prototype, 'error', {
    configurable: true,
    get: S2Exception.prototype._get_error_
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
  function F2FunctionRemote_0() {
  }
  F2FunctionRemote_0.$metadata$ = {
    simpleName: 'F2FunctionRemote',
    kind: 'interface',
    interfaces: []
  };
  function F2SupplierRemote_0() {
  }
  F2SupplierRemote_0.$metadata$ = {
    simpleName: 'F2SupplierRemote',
    kind: 'interface',
    interfaces: []
  };
  function F2ConsumerRemote_0() {
  }
  F2ConsumerRemote_0.$metadata$ = {
    simpleName: 'F2ConsumerRemote',
    kind: 'interface',
    interfaces: []
  };
  function Ssm_0(name, transitions) {
    this._name = name;
    this._transitions = transitions;
  }
  Ssm_0.prototype._get_name__10 = function () {
    return this._name;
  };
  Ssm_0.prototype._get_transitions__1 = function () {
    return this._transitions;
  };
  Ssm_0.prototype.component1_7 = function () {
    return this._name;
  };
  Ssm_0.prototype.component2_5 = function () {
    return this._transitions;
  };
  Ssm_0.prototype.copy = function (name, transitions) {
    return new Ssm_0(name, transitions);
  };
  Ssm_0.prototype.copy$default = function (name, transitions, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      name = this._name;
    if (!(($mask0 & 2) === 0))
      transitions = this._transitions;
    return this.copy(name, transitions);
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
    get: Ssm_0.prototype._get_name__10
  });
  Object.defineProperty(Ssm_0.prototype, 'transitions', {
    configurable: true,
    get: Ssm_0.prototype._get_transitions__1
  });
  function SsmAgent(name, pub) {
    this._name_0 = name;
    this._pub = pub;
  }
  SsmAgent.prototype._get_name__10 = function () {
    return this._name_0;
  };
  SsmAgent.prototype._get_pub_ = function () {
    return this._pub;
  };
  SsmAgent.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression_0(this).equals(getKClassFromExpression_0(other)))
      return false;
    if (other instanceof SsmAgent)
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
  SsmAgent.prototype.hashCode = function () {
    var result = getStringHashCode(this._name_0);
    result = imul(31, result) + contentHashCode(this._pub) | 0;
    return result;
  };
  SsmAgent.prototype.component1_7 = function () {
    return this._name_0;
  };
  SsmAgent.prototype.component2_5 = function () {
    return this._pub;
  };
  SsmAgent.prototype.copy_0 = function (name, pub) {
    return new SsmAgent(name, pub);
  };
  SsmAgent.prototype.copy$default_0 = function (name, pub, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      name = this._name_0;
    if (!(($mask0 & 2) === 0))
      pub = this._pub;
    return this.copy_0(name, pub);
  };
  SsmAgent.prototype.toString = function () {
    return '' + 'SsmAgent(name=' + this._name_0 + ', pub=' + toString_1(this._pub) + ')';
  };
  SsmAgent.$metadata$ = {
    simpleName: 'SsmAgent',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(SsmAgent.prototype, 'name', {
    configurable: true,
    get: SsmAgent.prototype._get_name__10
  });
  Object.defineProperty(SsmAgent.prototype, 'pub', {
    configurable: true,
    get: SsmAgent.prototype._get_pub_
  });
  function SsmCommand_0() {
  }
  SsmCommand_0.$metadata$ = {
    simpleName: 'SsmCommand',
    kind: 'interface',
    interfaces: [Command_0]
  };
  function SsmContext_init_$Init$(session, public_0, iteration, private_0, $mask0, $marker, $this) {
    if (!(($mask0 & 8) === 0))
      private_0 = null;
    SsmContext.call($this, session, public_0, iteration, private_0);
    return $this;
  }
  function SsmContext_init_$Create$(session, public_0, iteration, private_0, $mask0, $marker) {
    return SsmContext_init_$Init$(session, public_0, iteration, private_0, $mask0, $marker, Object.create(SsmContext.prototype));
  }
  function SsmContext(session, public_0, iteration, private_0) {
    this._session = session;
    this._public = public_0;
    this._iteration = iteration;
    this._private = private_0;
  }
  SsmContext.prototype._get_session__4 = function () {
    return this._session;
  };
  SsmContext.prototype._get_public__1 = function () {
    return this._public;
  };
  SsmContext.prototype._get_iteration__1 = function () {
    return this._iteration;
  };
  SsmContext.prototype._get_private__1 = function () {
    return this._private;
  };
  SsmContext.prototype.component1_7 = function () {
    return this._session;
  };
  SsmContext.prototype.component2_5 = function () {
    return this._public;
  };
  SsmContext.prototype.component3_2 = function () {
    return this._iteration;
  };
  SsmContext.prototype.component4_1 = function () {
    return this._private;
  };
  SsmContext.prototype.copy_1 = function (session, public_0, iteration, private_0) {
    return new SsmContext(session, public_0, iteration, private_0);
  };
  SsmContext.prototype.copy$default_1 = function (session, public_0, iteration, private_0, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      session = this._session;
    if (!(($mask0 & 2) === 0))
      public_0 = this._public;
    if (!(($mask0 & 4) === 0))
      iteration = this._iteration;
    if (!(($mask0 & 8) === 0))
      private_0 = this._private;
    return this.copy_1(session, public_0, iteration, private_0);
  };
  SsmContext.prototype.toString = function () {
    return '' + 'SsmContext(session=' + this._session + ', public=' + this._public + ', iteration=' + this._iteration + ', private=' + this._private + ')';
  };
  SsmContext.prototype.hashCode = function () {
    var result = getStringHashCode(this._session);
    result = imul(result, 31) + getStringHashCode(this._public) | 0;
    result = imul(result, 31) + this._iteration | 0;
    result = imul(result, 31) + (this._private == null ? 0 : hashCode(this._private)) | 0;
    return result;
  };
  SsmContext.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SsmContext))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof SsmContext ? other : THROW_CCE();
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
  SsmContext.$metadata$ = {
    simpleName: 'SsmContext',
    kind: 'class',
    interfaces: [WithPrivate]
  };
  Object.defineProperty(SsmContext.prototype, 'session', {
    configurable: true,
    get: SsmContext.prototype._get_session__4
  });
  Object.defineProperty(SsmContext.prototype, 'public', {
    configurable: true,
    get: SsmContext.prototype._get_public__1
  });
  Object.defineProperty(SsmContext.prototype, 'iteration', {
    configurable: true,
    get: SsmContext.prototype._get_iteration__1
  });
  Object.defineProperty(SsmContext.prototype, 'private', {
    configurable: true,
    get: SsmContext.prototype._get_private__1
  });
  function SsmGrant(user, iteration, credits) {
    this._user = user;
    this._iteration_0 = iteration;
    this._credits = credits;
  }
  SsmGrant.prototype._get_user__0 = function () {
    return this._user;
  };
  SsmGrant.prototype._get_iteration__1 = function () {
    return this._iteration_0;
  };
  SsmGrant.prototype._get_credits_ = function () {
    return this._credits;
  };
  SsmGrant.prototype.component1_7 = function () {
    return this._user;
  };
  SsmGrant.prototype.component2_5 = function () {
    return this._iteration_0;
  };
  SsmGrant.prototype.component3_2 = function () {
    return this._credits;
  };
  SsmGrant.prototype.copy_2 = function (user, iteration, credits) {
    return new SsmGrant(user, iteration, credits);
  };
  SsmGrant.prototype.copy$default_2 = function (user, iteration, credits, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      user = this._user;
    if (!(($mask0 & 2) === 0))
      iteration = this._iteration_0;
    if (!(($mask0 & 4) === 0))
      credits = this._credits;
    return this.copy_2(user, iteration, credits);
  };
  SsmGrant.prototype.toString = function () {
    return '' + 'SsmGrant(user=' + this._user + ', iteration=' + this._iteration_0 + ', credits=' + this._credits + ')';
  };
  SsmGrant.prototype.hashCode = function () {
    var result = getStringHashCode(this._user);
    result = imul(result, 31) + this._iteration_0 | 0;
    result = imul(result, 31) + hashCode(this._credits) | 0;
    return result;
  };
  SsmGrant.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SsmGrant))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof SsmGrant ? other : THROW_CCE();
    if (!(this._user === tmp0_other_with_cast._user))
      return false;
    if (!(this._iteration_0 === tmp0_other_with_cast._iteration_0))
      return false;
    if (!equals(this._credits, tmp0_other_with_cast._credits))
      return false;
    return true;
  };
  SsmGrant.$metadata$ = {
    simpleName: 'SsmGrant',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(SsmGrant.prototype, 'user', {
    configurable: true,
    get: SsmGrant.prototype._get_user__0
  });
  Object.defineProperty(SsmGrant.prototype, 'iteration', {
    configurable: true,
    get: SsmGrant.prototype._get_iteration__1
  });
  Object.defineProperty(SsmGrant.prototype, 'credits', {
    configurable: true,
    get: SsmGrant.prototype._get_credits_
  });
  function Credit_0(amount) {
    this._amount = amount;
  }
  Credit_0.prototype._get_amount_ = function () {
    return this._amount;
  };
  Credit_0.prototype.component1_7 = function () {
    return this._amount;
  };
  Credit_0.prototype.copy_3 = function (amount) {
    return new Credit_0(amount);
  };
  Credit_0.prototype.copy$default_3 = function (amount, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      amount = this._amount;
    return this.copy_3(amount);
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
    get: Credit_0.prototype._get_amount_
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
    this._ssm = ssm;
    this._session_0 = session;
    this._roles = roles;
    this._public_0 = public_0;
    this._private_0 = private_0;
  }
  SsmSession_0.prototype._get_ssm__3 = function () {
    return this._ssm;
  };
  SsmSession_0.prototype._get_session__4 = function () {
    return this._session_0;
  };
  SsmSession_0.prototype._get_roles__0 = function () {
    return this._roles;
  };
  SsmSession_0.prototype._get_public__1 = function () {
    return this._public_0;
  };
  SsmSession_0.prototype._get_private__1 = function () {
    return this._private_0;
  };
  SsmSession_0.$metadata$ = {
    simpleName: 'SsmSession',
    kind: 'class',
    interfaces: [WithPrivate]
  };
  Object.defineProperty(SsmSession_0.prototype, 'ssm', {
    configurable: true,
    get: SsmSession_0.prototype._get_ssm__3
  });
  Object.defineProperty(SsmSession_0.prototype, 'session', {
    configurable: true,
    get: SsmSession_0.prototype._get_session__4
  });
  Object.defineProperty(SsmSession_0.prototype, 'roles', {
    configurable: true,
    get: SsmSession_0.prototype._get_roles__0
  });
  Object.defineProperty(SsmSession_0.prototype, 'public', {
    configurable: true,
    get: SsmSession_0.prototype._get_public__1
  });
  Object.defineProperty(SsmSession_0.prototype, 'private', {
    configurable: true,
    get: SsmSession_0.prototype._get_private__1
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
    SsmSession_0.call(this, ssm, session, roles, public_0, private_0);
    this._ssm_0 = ssm;
    this._session_1 = session;
    this._roles_0 = roles;
    this._public_1 = public_0;
    this._private_1 = private_0;
    this._origin = origin;
    this._current = current;
    this._iteration_1 = iteration;
  }
  SsmSessionState_0.prototype._get_ssm__3 = function () {
    return this._ssm_0;
  };
  SsmSessionState_0.prototype._get_session__4 = function () {
    return this._session_1;
  };
  SsmSessionState_0.prototype._get_roles__0 = function () {
    return this._roles_0;
  };
  SsmSessionState_0.prototype._get_public__1 = function () {
    return this._public_1;
  };
  SsmSessionState_0.prototype._get_private__1 = function () {
    return this._private_1;
  };
  SsmSessionState_0.prototype._get_origin_ = function () {
    return this._origin;
  };
  SsmSessionState_0.prototype._get_current_ = function () {
    return this._current;
  };
  SsmSessionState_0.prototype._get_iteration__1 = function () {
    return this._iteration_1;
  };
  SsmSessionState_0.prototype.component1_7 = function () {
    return this._ssm_0;
  };
  SsmSessionState_0.prototype.component2_5 = function () {
    return this._session_1;
  };
  SsmSessionState_0.prototype.component3_2 = function () {
    return this._roles_0;
  };
  SsmSessionState_0.prototype.component4_1 = function () {
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
  SsmSessionState_0.prototype.copy_4 = function (ssm, session, roles, public_0, private_0, origin, current, iteration) {
    return new SsmSessionState_0(ssm, session, roles, public_0, private_0, origin, current, iteration);
  };
  SsmSessionState_0.prototype.copy$default_4 = function (ssm, session, roles, public_0, private_0, origin, current, iteration, $mask0, $handler) {
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
    return this.copy_4(ssm, session, roles, public_0, private_0, origin, current, iteration);
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
    interfaces: [WithPrivate]
  };
  Object.defineProperty(SsmSessionState_0.prototype, 'ssm', {
    configurable: true,
    get: SsmSessionState_0.prototype._get_ssm__3
  });
  Object.defineProperty(SsmSessionState_0.prototype, 'session', {
    configurable: true,
    get: SsmSessionState_0.prototype._get_session__4
  });
  Object.defineProperty(SsmSessionState_0.prototype, 'roles', {
    configurable: true,
    get: SsmSessionState_0.prototype._get_roles__0
  });
  Object.defineProperty(SsmSessionState_0.prototype, 'public', {
    configurable: true,
    get: SsmSessionState_0.prototype._get_public__1
  });
  Object.defineProperty(SsmSessionState_0.prototype, 'private', {
    configurable: true,
    get: SsmSessionState_0.prototype._get_private__1
  });
  Object.defineProperty(SsmSessionState_0.prototype, 'origin', {
    configurable: true,
    get: SsmSessionState_0.prototype._get_origin_
  });
  Object.defineProperty(SsmSessionState_0.prototype, 'current', {
    configurable: true,
    get: SsmSessionState_0.prototype._get_current_
  });
  Object.defineProperty(SsmSessionState_0.prototype, 'iteration', {
    configurable: true,
    get: SsmSessionState_0.prototype._get_iteration__1
  });
  function SsmSessionStateLog_0(txId, state) {
    this._txId = txId;
    this._state_0 = state;
  }
  SsmSessionStateLog_0.prototype._get_txId_ = function () {
    return this._txId;
  };
  SsmSessionStateLog_0.prototype._get_state_ = function () {
    return this._state_0;
  };
  SsmSessionStateLog_0.prototype.component1_7 = function () {
    return this._txId;
  };
  SsmSessionStateLog_0.prototype.component2_5 = function () {
    return this._state_0;
  };
  SsmSessionStateLog_0.prototype.copy_5 = function (txId, state) {
    return new SsmSessionStateLog_0(txId, state);
  };
  SsmSessionStateLog_0.prototype.copy$default_5 = function (txId, state, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      txId = this._txId;
    if (!(($mask0 & 2) === 0))
      state = this._state_0;
    return this.copy_5(txId, state);
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
    get: SsmSessionStateLog_0.prototype._get_txId_
  });
  Object.defineProperty(SsmSessionStateLog_0.prototype, 'state', {
    configurable: true,
    get: SsmSessionStateLog_0.prototype._get_state_
  });
  function SsmTransition_0(from, to, role, action) {
    this._from = from;
    this._to = to;
    this._role = role;
    this._action = action;
  }
  SsmTransition_0.prototype._get_from__3 = function () {
    return this._from;
  };
  SsmTransition_0.prototype._get_to__3 = function () {
    return this._to;
  };
  SsmTransition_0.prototype._get_role__1 = function () {
    return this._role;
  };
  SsmTransition_0.prototype._get_action__1 = function () {
    return this._action;
  };
  SsmTransition_0.prototype.component1_7 = function () {
    return this._from;
  };
  SsmTransition_0.prototype.component2_5 = function () {
    return this._to;
  };
  SsmTransition_0.prototype.component3_2 = function () {
    return this._role;
  };
  SsmTransition_0.prototype.component4_1 = function () {
    return this._action;
  };
  SsmTransition_0.prototype.copy_6 = function (from, to, role, action) {
    return new SsmTransition_0(from, to, role, action);
  };
  SsmTransition_0.prototype.copy$default_6 = function (from, to, role, action, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      from = this._from;
    if (!(($mask0 & 2) === 0))
      to = this._to;
    if (!(($mask0 & 4) === 0))
      role = this._role;
    if (!(($mask0 & 8) === 0))
      action = this._action;
    return this.copy_6(from, to, role, action);
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
    get: SsmTransition_0.prototype._get_from__3
  });
  Object.defineProperty(SsmTransition_0.prototype, 'to', {
    configurable: true,
    get: SsmTransition_0.prototype._get_to__3
  });
  Object.defineProperty(SsmTransition_0.prototype, 'role', {
    configurable: true,
    get: SsmTransition_0.prototype._get_role__1
  });
  Object.defineProperty(SsmTransition_0.prototype, 'action', {
    configurable: true,
    get: SsmTransition_0.prototype._get_action__1
  });
  function WithPrivate() {
  }
  WithPrivate.$metadata$ = {
    simpleName: 'WithPrivate',
    kind: 'interface',
    interfaces: []
  };
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
    this._baseUrl = baseUrl;
    this._channelId = channelId;
    this._chaincodeId = chaincodeId;
    this._bearerToken = bearerToken;
    this._name_1 = name;
  }
  SsmGetAdminQuery_0.prototype._get_baseUrl__14 = function () {
    return this._baseUrl;
  };
  SsmGetAdminQuery_0.prototype._get_channelId__14 = function () {
    return this._channelId;
  };
  SsmGetAdminQuery_0.prototype._get_chaincodeId__14 = function () {
    return this._chaincodeId;
  };
  SsmGetAdminQuery_0.prototype._get_bearerToken__14 = function () {
    return this._bearerToken;
  };
  SsmGetAdminQuery_0.prototype._get_name__10 = function () {
    return this._name_1;
  };
  SsmGetAdminQuery_0.$metadata$ = {
    simpleName: 'SsmGetAdminQuery',
    kind: 'class',
    interfaces: [SsmCommand_0]
  };
  Object.defineProperty(SsmGetAdminQuery_0.prototype, 'baseUrl', {
    configurable: true,
    get: SsmGetAdminQuery_0.prototype._get_baseUrl__14
  });
  Object.defineProperty(SsmGetAdminQuery_0.prototype, 'channelId', {
    configurable: true,
    get: SsmGetAdminQuery_0.prototype._get_channelId__14
  });
  Object.defineProperty(SsmGetAdminQuery_0.prototype, 'chaincodeId', {
    configurable: true,
    get: SsmGetAdminQuery_0.prototype._get_chaincodeId__14
  });
  Object.defineProperty(SsmGetAdminQuery_0.prototype, 'bearerToken', {
    configurable: true,
    get: SsmGetAdminQuery_0.prototype._get_bearerToken__14
  });
  Object.defineProperty(SsmGetAdminQuery_0.prototype, 'name', {
    configurable: true,
    get: SsmGetAdminQuery_0.prototype._get_name__10
  });
  function SsmGetAdminResult_0(admin) {
    this._admin = admin;
  }
  SsmGetAdminResult_0.prototype._get_admin_ = function () {
    return this._admin;
  };
  SsmGetAdminResult_0.$metadata$ = {
    simpleName: 'SsmGetAdminResult',
    kind: 'class',
    interfaces: [Event_0]
  };
  Object.defineProperty(SsmGetAdminResult_0.prototype, 'admin', {
    configurable: true,
    get: SsmGetAdminResult_0.prototype._get_admin_
  });
  function SsmGetBlockQuery_init_$Init$(baseUrl, channelId, chaincodeId, bearerToken, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      chaincodeId = null;
    if (!(($mask0 & 8) === 0))
      bearerToken = null;
    SsmGetBlockQuery_0.call($this, baseUrl, channelId, chaincodeId, bearerToken);
    return $this;
  }
  function SsmGetBlockQuery_init_$Create$(baseUrl, channelId, chaincodeId, bearerToken, $mask0, $marker) {
    return SsmGetBlockQuery_init_$Init$(baseUrl, channelId, chaincodeId, bearerToken, $mask0, $marker, Object.create(SsmGetBlockQuery_0.prototype));
  }
  function SsmGetBlockQuery_0(baseUrl, channelId, chaincodeId, bearerToken) {
    this._baseUrl_0 = baseUrl;
    this._channelId_0 = channelId;
    this._chaincodeId_0 = chaincodeId;
    this._bearerToken_0 = bearerToken;
  }
  SsmGetBlockQuery_0.prototype._get_baseUrl__14 = function () {
    return this._baseUrl_0;
  };
  SsmGetBlockQuery_0.prototype._get_channelId__14 = function () {
    return this._channelId_0;
  };
  SsmGetBlockQuery_0.prototype._get_chaincodeId__14 = function () {
    return this._chaincodeId_0;
  };
  SsmGetBlockQuery_0.prototype._get_bearerToken__14 = function () {
    return this._bearerToken_0;
  };
  SsmGetBlockQuery_0.$metadata$ = {
    simpleName: 'SsmGetBlockQuery',
    kind: 'class',
    interfaces: [SsmCommand_0]
  };
  Object.defineProperty(SsmGetBlockQuery_0.prototype, 'baseUrl', {
    configurable: true,
    get: SsmGetBlockQuery_0.prototype._get_baseUrl__14
  });
  Object.defineProperty(SsmGetBlockQuery_0.prototype, 'channelId', {
    configurable: true,
    get: SsmGetBlockQuery_0.prototype._get_channelId__14
  });
  Object.defineProperty(SsmGetBlockQuery_0.prototype, 'chaincodeId', {
    configurable: true,
    get: SsmGetBlockQuery_0.prototype._get_chaincodeId__14
  });
  Object.defineProperty(SsmGetBlockQuery_0.prototype, 'bearerToken', {
    configurable: true,
    get: SsmGetBlockQuery_0.prototype._get_bearerToken__14
  });
  function SsmGetBlockResult_0() {
  }
  SsmGetBlockResult_0.$metadata$ = {
    simpleName: 'SsmGetBlockResult',
    kind: 'class',
    interfaces: [Event_0]
  };
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
    this._baseUrl_1 = baseUrl;
    this._channelId_1 = channelId;
    this._chaincodeId_1 = chaincodeId;
    this._bearerToken_1 = bearerToken;
    this._name_2 = name;
  }
  SsmGetQuery_0.prototype._get_baseUrl__14 = function () {
    return this._baseUrl_1;
  };
  SsmGetQuery_0.prototype._get_channelId__14 = function () {
    return this._channelId_1;
  };
  SsmGetQuery_0.prototype._get_chaincodeId__14 = function () {
    return this._chaincodeId_1;
  };
  SsmGetQuery_0.prototype._get_bearerToken__14 = function () {
    return this._bearerToken_1;
  };
  SsmGetQuery_0.prototype._get_name__10 = function () {
    return this._name_2;
  };
  SsmGetQuery_0.$metadata$ = {
    simpleName: 'SsmGetQuery',
    kind: 'class',
    interfaces: [SsmCommand_0]
  };
  Object.defineProperty(SsmGetQuery_0.prototype, 'baseUrl', {
    configurable: true,
    get: SsmGetQuery_0.prototype._get_baseUrl__14
  });
  Object.defineProperty(SsmGetQuery_0.prototype, 'channelId', {
    configurable: true,
    get: SsmGetQuery_0.prototype._get_channelId__14
  });
  Object.defineProperty(SsmGetQuery_0.prototype, 'chaincodeId', {
    configurable: true,
    get: SsmGetQuery_0.prototype._get_chaincodeId__14
  });
  Object.defineProperty(SsmGetQuery_0.prototype, 'bearerToken', {
    configurable: true,
    get: SsmGetQuery_0.prototype._get_bearerToken__14
  });
  Object.defineProperty(SsmGetQuery_0.prototype, 'name', {
    configurable: true,
    get: SsmGetQuery_0.prototype._get_name__10
  });
  function SsmGetResult_0(ssm) {
    this._ssm_1 = ssm;
  }
  SsmGetResult_0.prototype._get_ssm__3 = function () {
    return this._ssm_1;
  };
  SsmGetResult_0.$metadata$ = {
    simpleName: 'SsmGetResult',
    kind: 'class',
    interfaces: [Event_0]
  };
  Object.defineProperty(SsmGetResult_0.prototype, 'ssm', {
    configurable: true,
    get: SsmGetResult_0.prototype._get_ssm__3
  });
  function SsmGetSessionFirstAndLastTransactionQuery_0(session, baseUrl, channelId, chaincodeId, bearerToken) {
    this._session_2 = session;
    this._baseUrl_2 = baseUrl;
    this._channelId_2 = channelId;
    this._chaincodeId_2 = chaincodeId;
    this._bearerToken_2 = bearerToken;
  }
  SsmGetSessionFirstAndLastTransactionQuery_0.prototype._get_session__4 = function () {
    return this._session_2;
  };
  SsmGetSessionFirstAndLastTransactionQuery_0.prototype._get_baseUrl__14 = function () {
    return this._baseUrl_2;
  };
  SsmGetSessionFirstAndLastTransactionQuery_0.prototype._get_channelId__14 = function () {
    return this._channelId_2;
  };
  SsmGetSessionFirstAndLastTransactionQuery_0.prototype._get_chaincodeId__14 = function () {
    return this._chaincodeId_2;
  };
  SsmGetSessionFirstAndLastTransactionQuery_0.prototype._get_bearerToken__14 = function () {
    return this._bearerToken_2;
  };
  SsmGetSessionFirstAndLastTransactionQuery_0.$metadata$ = {
    simpleName: 'SsmGetSessionFirstAndLastTransactionQuery',
    kind: 'class',
    interfaces: [SsmCommand_0]
  };
  Object.defineProperty(SsmGetSessionFirstAndLastTransactionQuery_0.prototype, 'session', {
    configurable: true,
    get: SsmGetSessionFirstAndLastTransactionQuery_0.prototype._get_session__4
  });
  Object.defineProperty(SsmGetSessionFirstAndLastTransactionQuery_0.prototype, 'baseUrl', {
    configurable: true,
    get: SsmGetSessionFirstAndLastTransactionQuery_0.prototype._get_baseUrl__14
  });
  Object.defineProperty(SsmGetSessionFirstAndLastTransactionQuery_0.prototype, 'channelId', {
    configurable: true,
    get: SsmGetSessionFirstAndLastTransactionQuery_0.prototype._get_channelId__14
  });
  Object.defineProperty(SsmGetSessionFirstAndLastTransactionQuery_0.prototype, 'chaincodeId', {
    configurable: true,
    get: SsmGetSessionFirstAndLastTransactionQuery_0.prototype._get_chaincodeId__14
  });
  Object.defineProperty(SsmGetSessionFirstAndLastTransactionQuery_0.prototype, 'bearerToken', {
    configurable: true,
    get: SsmGetSessionFirstAndLastTransactionQuery_0.prototype._get_bearerToken__14
  });
  function SsmGetSessionFirstAndLastTransactionQueryResult_0(firstTransaction, lastTransaction) {
    this._firstTransaction = firstTransaction;
    this._lastTransaction = lastTransaction;
  }
  SsmGetSessionFirstAndLastTransactionQueryResult_0.prototype._get_firstTransaction_ = function () {
    return this._firstTransaction;
  };
  SsmGetSessionFirstAndLastTransactionQueryResult_0.prototype._get_lastTransaction__1 = function () {
    return this._lastTransaction;
  };
  SsmGetSessionFirstAndLastTransactionQueryResult_0.$metadata$ = {
    simpleName: 'SsmGetSessionFirstAndLastTransactionQueryResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(SsmGetSessionFirstAndLastTransactionQueryResult_0.prototype, 'firstTransaction', {
    configurable: true,
    get: SsmGetSessionFirstAndLastTransactionQueryResult_0.prototype._get_firstTransaction_
  });
  Object.defineProperty(SsmGetSessionFirstAndLastTransactionQueryResult_0.prototype, 'lastTransaction', {
    configurable: true,
    get: SsmGetSessionFirstAndLastTransactionQueryResult_0.prototype._get_lastTransaction__1
  });
  function SsmGetSessionLogsQuery_0(session, baseUrl, channelId, chaincodeId, bearerToken) {
    this._session_3 = session;
    this._baseUrl_3 = baseUrl;
    this._channelId_3 = channelId;
    this._chaincodeId_3 = chaincodeId;
    this._bearerToken_3 = bearerToken;
  }
  SsmGetSessionLogsQuery_0.prototype._get_session__4 = function () {
    return this._session_3;
  };
  SsmGetSessionLogsQuery_0.prototype._get_baseUrl__14 = function () {
    return this._baseUrl_3;
  };
  SsmGetSessionLogsQuery_0.prototype._get_channelId__14 = function () {
    return this._channelId_3;
  };
  SsmGetSessionLogsQuery_0.prototype._get_chaincodeId__14 = function () {
    return this._chaincodeId_3;
  };
  SsmGetSessionLogsQuery_0.prototype._get_bearerToken__14 = function () {
    return this._bearerToken_3;
  };
  SsmGetSessionLogsQuery_0.$metadata$ = {
    simpleName: 'SsmGetSessionLogsQuery',
    kind: 'class',
    interfaces: [SsmCommand_0]
  };
  Object.defineProperty(SsmGetSessionLogsQuery_0.prototype, 'session', {
    configurable: true,
    get: SsmGetSessionLogsQuery_0.prototype._get_session__4
  });
  Object.defineProperty(SsmGetSessionLogsQuery_0.prototype, 'baseUrl', {
    configurable: true,
    get: SsmGetSessionLogsQuery_0.prototype._get_baseUrl__14
  });
  Object.defineProperty(SsmGetSessionLogsQuery_0.prototype, 'channelId', {
    configurable: true,
    get: SsmGetSessionLogsQuery_0.prototype._get_channelId__14
  });
  Object.defineProperty(SsmGetSessionLogsQuery_0.prototype, 'chaincodeId', {
    configurable: true,
    get: SsmGetSessionLogsQuery_0.prototype._get_chaincodeId__14
  });
  Object.defineProperty(SsmGetSessionLogsQuery_0.prototype, 'bearerToken', {
    configurable: true,
    get: SsmGetSessionLogsQuery_0.prototype._get_bearerToken__14
  });
  function SsmGetSessionLogsQueryResult_0(logs) {
    this._logs = logs;
  }
  SsmGetSessionLogsQueryResult_0.prototype._get_logs_ = function () {
    return this._logs;
  };
  SsmGetSessionLogsQueryResult_0.prototype.component1_7 = function () {
    return this._logs;
  };
  SsmGetSessionLogsQueryResult_0.prototype.copy_7 = function (logs) {
    return new SsmGetSessionLogsQueryResult_0(logs);
  };
  SsmGetSessionLogsQueryResult_0.prototype.copy$default_7 = function (logs, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      logs = this._logs;
    return this.copy_7(logs);
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
    get: SsmGetSessionLogsQueryResult_0.prototype._get_logs_
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
    this._baseUrl_4 = baseUrl;
    this._channelId_4 = channelId;
    this._chaincodeId_4 = chaincodeId;
    this._bearerToken_4 = bearerToken;
    this._name_3 = name;
  }
  SsmGetSessionQuery_0.prototype._get_baseUrl__14 = function () {
    return this._baseUrl_4;
  };
  SsmGetSessionQuery_0.prototype._get_channelId__14 = function () {
    return this._channelId_4;
  };
  SsmGetSessionQuery_0.prototype._get_chaincodeId__14 = function () {
    return this._chaincodeId_4;
  };
  SsmGetSessionQuery_0.prototype._get_bearerToken__14 = function () {
    return this._bearerToken_4;
  };
  SsmGetSessionQuery_0.prototype._get_name__10 = function () {
    return this._name_3;
  };
  SsmGetSessionQuery_0.$metadata$ = {
    simpleName: 'SsmGetSessionQuery',
    kind: 'class',
    interfaces: [SsmCommand_0]
  };
  Object.defineProperty(SsmGetSessionQuery_0.prototype, 'baseUrl', {
    configurable: true,
    get: SsmGetSessionQuery_0.prototype._get_baseUrl__14
  });
  Object.defineProperty(SsmGetSessionQuery_0.prototype, 'channelId', {
    configurable: true,
    get: SsmGetSessionQuery_0.prototype._get_channelId__14
  });
  Object.defineProperty(SsmGetSessionQuery_0.prototype, 'chaincodeId', {
    configurable: true,
    get: SsmGetSessionQuery_0.prototype._get_chaincodeId__14
  });
  Object.defineProperty(SsmGetSessionQuery_0.prototype, 'bearerToken', {
    configurable: true,
    get: SsmGetSessionQuery_0.prototype._get_bearerToken__14
  });
  Object.defineProperty(SsmGetSessionQuery_0.prototype, 'name', {
    configurable: true,
    get: SsmGetSessionQuery_0.prototype._get_name__10
  });
  function SsmGetSessionResult_0(session) {
    this._session_4 = session;
  }
  SsmGetSessionResult_0.prototype._get_session__4 = function () {
    return this._session_4;
  };
  SsmGetSessionResult_0.$metadata$ = {
    simpleName: 'SsmGetSessionResult',
    kind: 'class',
    interfaces: [Event_0]
  };
  Object.defineProperty(SsmGetSessionResult_0.prototype, 'session', {
    configurable: true,
    get: SsmGetSessionResult_0.prototype._get_session__4
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
    this._baseUrl_5 = baseUrl;
    this._channelId_5 = channelId;
    this._chaincodeId_5 = chaincodeId;
    this._bearerToken_5 = bearerToken;
    this._name_4 = name;
  }
  SsmGetUserQuery_0.prototype._get_baseUrl__14 = function () {
    return this._baseUrl_5;
  };
  SsmGetUserQuery_0.prototype._get_channelId__14 = function () {
    return this._channelId_5;
  };
  SsmGetUserQuery_0.prototype._get_chaincodeId__14 = function () {
    return this._chaincodeId_5;
  };
  SsmGetUserQuery_0.prototype._get_bearerToken__14 = function () {
    return this._bearerToken_5;
  };
  SsmGetUserQuery_0.prototype._get_name__10 = function () {
    return this._name_4;
  };
  SsmGetUserQuery_0.$metadata$ = {
    simpleName: 'SsmGetUserQuery',
    kind: 'class',
    interfaces: [SsmCommand_0]
  };
  Object.defineProperty(SsmGetUserQuery_0.prototype, 'baseUrl', {
    configurable: true,
    get: SsmGetUserQuery_0.prototype._get_baseUrl__14
  });
  Object.defineProperty(SsmGetUserQuery_0.prototype, 'channelId', {
    configurable: true,
    get: SsmGetUserQuery_0.prototype._get_channelId__14
  });
  Object.defineProperty(SsmGetUserQuery_0.prototype, 'chaincodeId', {
    configurable: true,
    get: SsmGetUserQuery_0.prototype._get_chaincodeId__14
  });
  Object.defineProperty(SsmGetUserQuery_0.prototype, 'bearerToken', {
    configurable: true,
    get: SsmGetUserQuery_0.prototype._get_bearerToken__14
  });
  Object.defineProperty(SsmGetUserQuery_0.prototype, 'name', {
    configurable: true,
    get: SsmGetUserQuery_0.prototype._get_name__10
  });
  function SsmGetUserResult_0(user) {
    this._user_0 = user;
  }
  SsmGetUserResult_0.prototype._get_user__0 = function () {
    return this._user_0;
  };
  SsmGetUserResult_0.$metadata$ = {
    simpleName: 'SsmGetUserResult',
    kind: 'class',
    interfaces: [Event_0]
  };
  Object.defineProperty(SsmGetUserResult_0.prototype, 'user', {
    configurable: true,
    get: SsmGetUserResult_0.prototype._get_user__0
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
    this._baseUrl_6 = baseUrl;
    this._channelId_6 = channelId;
    this._chaincodeId_6 = chaincodeId;
    this._bearerToken_6 = bearerToken;
  }
  SsmListAdminQuery_0.prototype._get_baseUrl__14 = function () {
    return this._baseUrl_6;
  };
  SsmListAdminQuery_0.prototype._get_channelId__14 = function () {
    return this._channelId_6;
  };
  SsmListAdminQuery_0.prototype._get_chaincodeId__14 = function () {
    return this._chaincodeId_6;
  };
  SsmListAdminQuery_0.prototype._get_bearerToken__14 = function () {
    return this._bearerToken_6;
  };
  SsmListAdminQuery_0.$metadata$ = {
    simpleName: 'SsmListAdminQuery',
    kind: 'class',
    interfaces: [SsmCommand_0]
  };
  Object.defineProperty(SsmListAdminQuery_0.prototype, 'baseUrl', {
    configurable: true,
    get: SsmListAdminQuery_0.prototype._get_baseUrl__14
  });
  Object.defineProperty(SsmListAdminQuery_0.prototype, 'channelId', {
    configurable: true,
    get: SsmListAdminQuery_0.prototype._get_channelId__14
  });
  Object.defineProperty(SsmListAdminQuery_0.prototype, 'chaincodeId', {
    configurable: true,
    get: SsmListAdminQuery_0.prototype._get_chaincodeId__14
  });
  Object.defineProperty(SsmListAdminQuery_0.prototype, 'bearerToken', {
    configurable: true,
    get: SsmListAdminQuery_0.prototype._get_bearerToken__14
  });
  function SsmListAdminResult_0(values) {
    this._values = values;
  }
  SsmListAdminResult_0.prototype._get_values__2 = function () {
    return this._values;
  };
  SsmListAdminResult_0.$metadata$ = {
    simpleName: 'SsmListAdminResult',
    kind: 'class',
    interfaces: [Event_0]
  };
  Object.defineProperty(SsmListAdminResult_0.prototype, 'values', {
    configurable: true,
    get: SsmListAdminResult_0.prototype._get_values__2
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
    this._baseUrl_7 = baseUrl;
    this._channelId_7 = channelId;
    this._chaincodeId_7 = chaincodeId;
    this._bearerToken_7 = bearerToken;
  }
  SsmListSessionQuery_0.prototype._get_baseUrl__14 = function () {
    return this._baseUrl_7;
  };
  SsmListSessionQuery_0.prototype._get_channelId__14 = function () {
    return this._channelId_7;
  };
  SsmListSessionQuery_0.prototype._get_chaincodeId__14 = function () {
    return this._chaincodeId_7;
  };
  SsmListSessionQuery_0.prototype._get_bearerToken__14 = function () {
    return this._bearerToken_7;
  };
  SsmListSessionQuery_0.$metadata$ = {
    simpleName: 'SsmListSessionQuery',
    kind: 'class',
    interfaces: [SsmCommand_0]
  };
  Object.defineProperty(SsmListSessionQuery_0.prototype, 'baseUrl', {
    configurable: true,
    get: SsmListSessionQuery_0.prototype._get_baseUrl__14
  });
  Object.defineProperty(SsmListSessionQuery_0.prototype, 'channelId', {
    configurable: true,
    get: SsmListSessionQuery_0.prototype._get_channelId__14
  });
  Object.defineProperty(SsmListSessionQuery_0.prototype, 'chaincodeId', {
    configurable: true,
    get: SsmListSessionQuery_0.prototype._get_chaincodeId__14
  });
  Object.defineProperty(SsmListSessionQuery_0.prototype, 'bearerToken', {
    configurable: true,
    get: SsmListSessionQuery_0.prototype._get_bearerToken__14
  });
  function SsmListSessionResult_0(values) {
    this._values_0 = values;
  }
  SsmListSessionResult_0.prototype._get_values__2 = function () {
    return this._values_0;
  };
  SsmListSessionResult_0.$metadata$ = {
    simpleName: 'SsmListSessionResult',
    kind: 'class',
    interfaces: [Event_0]
  };
  Object.defineProperty(SsmListSessionResult_0.prototype, 'values', {
    configurable: true,
    get: SsmListSessionResult_0.prototype._get_values__2
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
    this._baseUrl_8 = baseUrl;
    this._channelId_8 = channelId;
    this._chaincodeId_8 = chaincodeId;
    this._bearerToken_8 = bearerToken;
  }
  SsmListSsmQuery_0.prototype._get_baseUrl__14 = function () {
    return this._baseUrl_8;
  };
  SsmListSsmQuery_0.prototype._get_channelId__14 = function () {
    return this._channelId_8;
  };
  SsmListSsmQuery_0.prototype._get_chaincodeId__14 = function () {
    return this._chaincodeId_8;
  };
  SsmListSsmQuery_0.prototype._get_bearerToken__14 = function () {
    return this._bearerToken_8;
  };
  SsmListSsmQuery_0.$metadata$ = {
    simpleName: 'SsmListSsmQuery',
    kind: 'class',
    interfaces: [SsmCommand_0]
  };
  Object.defineProperty(SsmListSsmQuery_0.prototype, 'baseUrl', {
    configurable: true,
    get: SsmListSsmQuery_0.prototype._get_baseUrl__14
  });
  Object.defineProperty(SsmListSsmQuery_0.prototype, 'channelId', {
    configurable: true,
    get: SsmListSsmQuery_0.prototype._get_channelId__14
  });
  Object.defineProperty(SsmListSsmQuery_0.prototype, 'chaincodeId', {
    configurable: true,
    get: SsmListSsmQuery_0.prototype._get_chaincodeId__14
  });
  Object.defineProperty(SsmListSsmQuery_0.prototype, 'bearerToken', {
    configurable: true,
    get: SsmListSsmQuery_0.prototype._get_bearerToken__14
  });
  function SsmListSsmResult_0(values) {
    this._values_1 = values;
  }
  SsmListSsmResult_0.prototype._get_values__2 = function () {
    return this._values_1;
  };
  SsmListSsmResult_0.$metadata$ = {
    simpleName: 'SsmListSsmResult',
    kind: 'class',
    interfaces: [Event_0]
  };
  Object.defineProperty(SsmListSsmResult_0.prototype, 'values', {
    configurable: true,
    get: SsmListSsmResult_0.prototype._get_values__2
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
    this._baseUrl_9 = baseUrl;
    this._channelId_9 = channelId;
    this._chaincodeId_9 = chaincodeId;
    this._bearerToken_9 = bearerToken;
  }
  SsmListUserQuery_0.prototype._get_baseUrl__14 = function () {
    return this._baseUrl_9;
  };
  SsmListUserQuery_0.prototype._get_channelId__14 = function () {
    return this._channelId_9;
  };
  SsmListUserQuery_0.prototype._get_chaincodeId__14 = function () {
    return this._chaincodeId_9;
  };
  SsmListUserQuery_0.prototype._get_bearerToken__14 = function () {
    return this._bearerToken_9;
  };
  SsmListUserQuery_0.$metadata$ = {
    simpleName: 'SsmListUserQuery',
    kind: 'class',
    interfaces: [SsmCommand_0]
  };
  Object.defineProperty(SsmListUserQuery_0.prototype, 'baseUrl', {
    configurable: true,
    get: SsmListUserQuery_0.prototype._get_baseUrl__14
  });
  Object.defineProperty(SsmListUserQuery_0.prototype, 'channelId', {
    configurable: true,
    get: SsmListUserQuery_0.prototype._get_channelId__14
  });
  Object.defineProperty(SsmListUserQuery_0.prototype, 'chaincodeId', {
    configurable: true,
    get: SsmListUserQuery_0.prototype._get_chaincodeId__14
  });
  Object.defineProperty(SsmListUserQuery_0.prototype, 'bearerToken', {
    configurable: true,
    get: SsmListUserQuery_0.prototype._get_bearerToken__14
  });
  function SsmListUserResult_0(values) {
    this._values_2 = values;
  }
  SsmListUserResult_0.prototype._get_values__2 = function () {
    return this._values_2;
  };
  SsmListUserResult_0.$metadata$ = {
    simpleName: 'SsmListUserResult',
    kind: 'class',
    interfaces: [Event_0]
  };
  Object.defineProperty(SsmListUserResult_0.prototype, 'values', {
    configurable: true,
    get: SsmListUserResult_0.prototype._get_values__2
  });
  function Ssm_1() {
  }
  Ssm_1.$metadata$ = {
    simpleName: 'Ssm',
    kind: 'interface',
    interfaces: []
  };
  function SsmBase_0(name, version, transitions) {
    this._name_5 = name;
    this._version = version;
    this._transitions_0 = transitions;
  }
  SsmBase_0.prototype._get_name__10 = function () {
    return this._name_5;
  };
  SsmBase_0.prototype._get_version__0 = function () {
    return this._version;
  };
  SsmBase_0.prototype._get_transitions__1 = function () {
    return this._transitions_0;
  };
  SsmBase_0.$metadata$ = {
    simpleName: 'SsmBase',
    kind: 'class',
    interfaces: [Ssm_1]
  };
  Object.defineProperty(SsmBase_0.prototype, 'name', {
    configurable: true,
    get: SsmBase_0.prototype._get_name__10
  });
  Object.defineProperty(SsmBase_0.prototype, 'version', {
    configurable: true,
    get: SsmBase_0.prototype._get_version__0
  });
  Object.defineProperty(SsmBase_0.prototype, 'transitions', {
    configurable: true,
    get: SsmBase_0.prototype._get_transitions__1
  });
  function SsmSession_1() {
  }
  SsmSession_1.$metadata$ = {
    simpleName: 'SsmSession',
    kind: 'interface',
    interfaces: []
  };
  function SsmSessionBase_0(id, channel, creationDate, lastTransaction) {
    this._id_0 = id;
    this._channel = channel;
    this._creationDate = creationDate;
    this._lastTransaction_0 = lastTransaction;
  }
  SsmSessionBase_0.prototype._get_id__3 = function () {
    return this._id_0;
  };
  SsmSessionBase_0.prototype._get_channel__0 = function () {
    return this._channel;
  };
  SsmSessionBase_0.prototype._get_creationDate__0 = function () {
    return this._creationDate;
  };
  SsmSessionBase_0.prototype._get_lastTransaction__1 = function () {
    return this._lastTransaction_0;
  };
  SsmSessionBase_0.$metadata$ = {
    simpleName: 'SsmSessionBase',
    kind: 'class',
    interfaces: [SsmSession_1]
  };
  Object.defineProperty(SsmSessionBase_0.prototype, 'id', {
    configurable: true,
    get: SsmSessionBase_0.prototype._get_id__3
  });
  Object.defineProperty(SsmSessionBase_0.prototype, 'channel', {
    configurable: true,
    get: SsmSessionBase_0.prototype._get_channel__0
  });
  Object.defineProperty(SsmSessionBase_0.prototype, 'creationDate', {
    configurable: true,
    get: SsmSessionBase_0.prototype._get_creationDate__0
  });
  Object.defineProperty(SsmSessionBase_0.prototype, 'lastTransaction', {
    configurable: true,
    get: SsmSessionBase_0.prototype._get_lastTransaction__1
  });
  function SsmTransaction_0() {
  }
  SsmTransaction_0.$metadata$ = {
    simpleName: 'SsmTransaction',
    kind: 'interface',
    interfaces: []
  };
  function SsmTransactionBase_0(id, from, to, date, signer) {
    this._id_1 = id;
    this._from_0 = from;
    this._to_0 = to;
    this._date_0 = date;
    this._signer = signer;
  }
  SsmTransactionBase_0.prototype._get_id__3 = function () {
    return this._id_1;
  };
  SsmTransactionBase_0.prototype._get_from__3 = function () {
    return this._from_0;
  };
  SsmTransactionBase_0.prototype._get_to__3 = function () {
    return this._to_0;
  };
  SsmTransactionBase_0.prototype._get_date__2 = function () {
    return this._date_0;
  };
  SsmTransactionBase_0.prototype._get_signer__0 = function () {
    return this._signer;
  };
  SsmTransactionBase_0.$metadata$ = {
    simpleName: 'SsmTransactionBase',
    kind: 'class',
    interfaces: [SsmTransaction_0]
  };
  Object.defineProperty(SsmTransactionBase_0.prototype, 'id', {
    configurable: true,
    get: SsmTransactionBase_0.prototype._get_id__3
  });
  Object.defineProperty(SsmTransactionBase_0.prototype, 'from', {
    configurable: true,
    get: SsmTransactionBase_0.prototype._get_from__3
  });
  Object.defineProperty(SsmTransactionBase_0.prototype, 'to', {
    configurable: true,
    get: SsmTransactionBase_0.prototype._get_to__3
  });
  Object.defineProperty(SsmTransactionBase_0.prototype, 'date', {
    configurable: true,
    get: SsmTransactionBase_0.prototype._get_date__2
  });
  Object.defineProperty(SsmTransactionBase_0.prototype, 'signer', {
    configurable: true,
    get: SsmTransactionBase_0.prototype._get_signer__0
  });
  function SsmTransition_1() {
  }
  SsmTransition_1.$metadata$ = {
    simpleName: 'SsmTransition',
    kind: 'interface',
    interfaces: []
  };
  function SsmTransitionBase_0(from, to, role, action) {
    this._from_1 = from;
    this._to_1 = to;
    this._role_0 = role;
    this._action_0 = action;
  }
  SsmTransitionBase_0.prototype._get_from__3 = function () {
    return this._from_1;
  };
  SsmTransitionBase_0.prototype._get_to__3 = function () {
    return this._to_1;
  };
  SsmTransitionBase_0.prototype._get_role__1 = function () {
    return this._role_0;
  };
  SsmTransitionBase_0.prototype._get_action__1 = function () {
    return this._action_0;
  };
  SsmTransitionBase_0.$metadata$ = {
    simpleName: 'SsmTransitionBase',
    kind: 'class',
    interfaces: [SsmTransition_1]
  };
  Object.defineProperty(SsmTransitionBase_0.prototype, 'from', {
    configurable: true,
    get: SsmTransitionBase_0.prototype._get_from__3
  });
  Object.defineProperty(SsmTransitionBase_0.prototype, 'to', {
    configurable: true,
    get: SsmTransitionBase_0.prototype._get_to__3
  });
  Object.defineProperty(SsmTransitionBase_0.prototype, 'role', {
    configurable: true,
    get: SsmTransitionBase_0.prototype._get_role__1
  });
  Object.defineProperty(SsmTransitionBase_0.prototype, 'action', {
    configurable: true,
    get: SsmTransitionBase_0.prototype._get_action__1
  });
  function SsmUser_0() {
  }
  SsmUser_0.$metadata$ = {
    simpleName: 'SsmUser',
    kind: 'interface',
    interfaces: []
  };
  function SsmUserBase_0(name, publicKey) {
    this._name_6 = name;
    this._publicKey = publicKey;
  }
  SsmUserBase_0.prototype._get_name__10 = function () {
    return this._name_6;
  };
  SsmUserBase_0.prototype._get_publicKey__0 = function () {
    return this._publicKey;
  };
  SsmUserBase_0.$metadata$ = {
    simpleName: 'SsmUserBase',
    kind: 'class',
    interfaces: [SsmUser_0]
  };
  Object.defineProperty(SsmUserBase_0.prototype, 'name', {
    configurable: true,
    get: SsmUserBase_0.prototype._get_name__10
  });
  Object.defineProperty(SsmUserBase_0.prototype, 'publicKey', {
    configurable: true,
    get: SsmUserBase_0.prototype._get_publicKey__0
  });
  function GetSsmListCommand_0() {
  }
  GetSsmListCommand_0.$metadata$ = {
    simpleName: 'GetSsmListCommand',
    kind: 'interface',
    interfaces: []
  };
  function GetSsmListCommandBase_0(dbName) {
    this._dbName = dbName;
  }
  GetSsmListCommandBase_0.prototype._get_dbName__2 = function () {
    return this._dbName;
  };
  GetSsmListCommandBase_0.$metadata$ = {
    simpleName: 'GetSsmListCommandBase',
    kind: 'class',
    interfaces: [GetSsmListCommand_0]
  };
  Object.defineProperty(GetSsmListCommandBase_0.prototype, 'dbName', {
    configurable: true,
    get: GetSsmListCommandBase_0.prototype._get_dbName__2
  });
  function GetSsmSessionCommand_0() {
  }
  GetSsmSessionCommand_0.$metadata$ = {
    simpleName: 'GetSsmSessionCommand',
    kind: 'interface',
    interfaces: [SsmCommand_0]
  };
  function GetSsmSessionCommandBase_0(name, baseUrl, channelId, chaincodeId, bearerToken) {
    this._name_7 = name;
    this._baseUrl_10 = baseUrl;
    this._channelId_10 = channelId;
    this._chaincodeId_10 = chaincodeId;
    this._bearerToken_10 = bearerToken;
  }
  GetSsmSessionCommandBase_0.prototype._get_name__10 = function () {
    return this._name_7;
  };
  GetSsmSessionCommandBase_0.prototype._get_baseUrl__14 = function () {
    return this._baseUrl_10;
  };
  GetSsmSessionCommandBase_0.prototype._get_channelId__14 = function () {
    return this._channelId_10;
  };
  GetSsmSessionCommandBase_0.prototype._get_chaincodeId__14 = function () {
    return this._chaincodeId_10;
  };
  GetSsmSessionCommandBase_0.prototype._get_bearerToken__14 = function () {
    return this._bearerToken_10;
  };
  GetSsmSessionCommandBase_0.$metadata$ = {
    simpleName: 'GetSsmSessionCommandBase',
    kind: 'class',
    interfaces: [GetSsmSessionCommand_0]
  };
  Object.defineProperty(GetSsmSessionCommandBase_0.prototype, 'name', {
    configurable: true,
    get: GetSsmSessionCommandBase_0.prototype._get_name__10
  });
  Object.defineProperty(GetSsmSessionCommandBase_0.prototype, 'baseUrl', {
    configurable: true,
    get: GetSsmSessionCommandBase_0.prototype._get_baseUrl__14
  });
  Object.defineProperty(GetSsmSessionCommandBase_0.prototype, 'channelId', {
    configurable: true,
    get: GetSsmSessionCommandBase_0.prototype._get_channelId__14
  });
  Object.defineProperty(GetSsmSessionCommandBase_0.prototype, 'chaincodeId', {
    configurable: true,
    get: GetSsmSessionCommandBase_0.prototype._get_chaincodeId__14
  });
  Object.defineProperty(GetSsmSessionCommandBase_0.prototype, 'bearerToken', {
    configurable: true,
    get: GetSsmSessionCommandBase_0.prototype._get_bearerToken__14
  });
  function GetSsmSessionListCommand_0() {
  }
  GetSsmSessionListCommand_0.$metadata$ = {
    simpleName: 'GetSsmSessionListCommand',
    kind: 'interface',
    interfaces: [SsmCommand_0]
  };
  function GetSsmSessionListCommandBase_0(baseUrl, dbName, channelId, chaincodeId, bearerToken, ssm) {
    this._baseUrl_11 = baseUrl;
    this._dbName_0 = dbName;
    this._channelId_11 = channelId;
    this._chaincodeId_11 = chaincodeId;
    this._bearerToken_11 = bearerToken;
    this._ssm_2 = ssm;
  }
  GetSsmSessionListCommandBase_0.prototype._get_baseUrl__14 = function () {
    return this._baseUrl_11;
  };
  GetSsmSessionListCommandBase_0.prototype._get_dbName__2 = function () {
    return this._dbName_0;
  };
  GetSsmSessionListCommandBase_0.prototype._get_channelId__14 = function () {
    return this._channelId_11;
  };
  GetSsmSessionListCommandBase_0.prototype._get_chaincodeId__14 = function () {
    return this._chaincodeId_11;
  };
  GetSsmSessionListCommandBase_0.prototype._get_bearerToken__14 = function () {
    return this._bearerToken_11;
  };
  GetSsmSessionListCommandBase_0.prototype._get_ssm__3 = function () {
    return this._ssm_2;
  };
  GetSsmSessionListCommandBase_0.$metadata$ = {
    simpleName: 'GetSsmSessionListCommandBase',
    kind: 'class',
    interfaces: [GetSsmSessionListCommand_0]
  };
  Object.defineProperty(GetSsmSessionListCommandBase_0.prototype, 'baseUrl', {
    configurable: true,
    get: GetSsmSessionListCommandBase_0.prototype._get_baseUrl__14
  });
  Object.defineProperty(GetSsmSessionListCommandBase_0.prototype, 'dbName', {
    configurable: true,
    get: GetSsmSessionListCommandBase_0.prototype._get_dbName__2
  });
  Object.defineProperty(GetSsmSessionListCommandBase_0.prototype, 'channelId', {
    configurable: true,
    get: GetSsmSessionListCommandBase_0.prototype._get_channelId__14
  });
  Object.defineProperty(GetSsmSessionListCommandBase_0.prototype, 'chaincodeId', {
    configurable: true,
    get: GetSsmSessionListCommandBase_0.prototype._get_chaincodeId__14
  });
  Object.defineProperty(GetSsmSessionListCommandBase_0.prototype, 'bearerToken', {
    configurable: true,
    get: GetSsmSessionListCommandBase_0.prototype._get_bearerToken__14
  });
  Object.defineProperty(GetSsmSessionListCommandBase_0.prototype, 'ssm', {
    configurable: true,
    get: GetSsmSessionListCommandBase_0.prototype._get_ssm__3
  });
  AbstractMap.prototype._get_entries__2 = Map_0.prototype._get_entries__2;
  AbstractMutableMap.prototype._get_entries__2 = MutableMap.prototype._get_entries__2;
  InternalHashCodeMap.prototype.createJsMap_0 = InternalMap.prototype.createJsMap_0;
  KClassImpl.prototype._get_simpleName__2 = KClass.prototype._get_simpleName__2;
  functionClasses = functionClasses$init$();
  buf = new ArrayBuffer(8);
  bufFloat64 = bufFloat64$init$();
  bufInt32 = bufInt32$init$();
  lowIndex = lowIndex$init$();
  highIndex = 1 - lowIndex | 0;
  var $f2 = _.f2 || (_.f2 = {});
  var $f2$dsl = $f2.dsl || ($f2.dsl = {});
  var $f2$dsl$cqrs = $f2$dsl.cqrs || ($f2$dsl.cqrs = {});
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
  var $f2$dsl$function = $f2$dsl.function || ($f2$dsl.function = {});
  var $ssm = _.ssm || (_.ssm = {});
  var $ssm$dsl = $ssm.dsl || ($ssm.dsl = {});
  $ssm$dsl.Ssm = Ssm_0;
  $ssm$dsl.Agent = SsmAgent;
  $ssm$dsl.Context = SsmContext;
  $ssm$dsl.Grant = SsmGrant;
  $ssm$dsl.Credit = Credit_0;
  $ssm$dsl.SsmSession = SsmSession_0;
  $ssm$dsl.SsmSessionState = SsmSessionState_0;
  $ssm$dsl.SsmSessionStateLog = SsmSessionStateLog_0;
  $ssm$dsl.Transition = SsmTransition_0;
  var $ssm$dsl$query = $ssm$dsl.query || ($ssm$dsl.query = {});
  $ssm$dsl$query.SsmGetAdminQuery = SsmGetAdminQuery_0;
  $ssm$dsl$query.SsmGetAdminResult = SsmGetAdminResult_0;
  $ssm$dsl$query.SsmGetBlockQuery = SsmGetBlockQuery_0;
  $ssm$dsl$query.SsmGetBlockResult = SsmGetBlockResult_0;
  $ssm$dsl$query.SsmGetQuery = SsmGetQuery_0;
  $ssm$dsl$query.SsmGetResult = SsmGetResult_0;
  $ssm$dsl$query.SsmGetSessionFirstAndLastTransactionQuery = SsmGetSessionFirstAndLastTransactionQuery_0;
  $ssm$dsl$query.SsmGetSessionFirstAndLastTransactionQueryResult = SsmGetSessionFirstAndLastTransactionQueryResult_0;
  $ssm$dsl$query.SsmGetSessionLogsQuery = SsmGetSessionLogsQuery_0;
  $ssm$dsl$query.SsmGetSessionLogsQueryResult = SsmGetSessionLogsQueryResult_0;
  $ssm$dsl$query.SsmGetSessionQuery = SsmGetSessionQuery_0;
  $ssm$dsl$query.SsmGetSessionResult = SsmGetSessionResult_0;
  $ssm$dsl$query.SsmGetUserQuery = SsmGetUserQuery_0;
  $ssm$dsl$query.SsmGetUserResult = SsmGetUserResult_0;
  $ssm$dsl$query.SsmListAdminQuery = SsmListAdminQuery_0;
  $ssm$dsl$query.SsmListAdminResult = SsmListAdminResult_0;
  $ssm$dsl$query.SsmListSessionQuery = SsmListSessionQuery_0;
  $ssm$dsl$query.SsmListSessionResult = SsmListSessionResult_0;
  $ssm$dsl$query.SsmListSsmQuery = SsmListSsmQuery_0;
  $ssm$dsl$query.SsmListSsmResult = SsmListSsmResult_0;
  $ssm$dsl$query.SsmListUserQuery = SsmListUserQuery_0;
  $ssm$dsl$query.SsmListUserResult = SsmListUserResult_0;
  var $x2 = _.x2 || (_.x2 = {});
  var $x2$api = $x2.api || ($x2.api = {});
  var $x2$api$ssm = $x2$api.ssm || ($x2$api.ssm = {});
  var $x2$api$ssm$model = $x2$api$ssm.model || ($x2$api$ssm.model = {});
  $x2$api$ssm$model.SsmBase = SsmBase_0;
  $x2$api$ssm$model.SsmSessionBase = SsmSessionBase_0;
  $x2$api$ssm$model.SsmTransactionBase = SsmTransactionBase_0;
  $x2$api$ssm$model.SsmTransitionBase = SsmTransitionBase_0;
  $x2$api$ssm$model.SsmUserBase = SsmUserBase_0;
  var $x2$api$ssm$model$features = $x2$api$ssm$model.features || ($x2$api$ssm$model.features = {});
  $x2$api$ssm$model$features.GetSsmListCommandBase = GetSsmListCommandBase_0;
  $x2$api$ssm$model$features.GetSsmSessionCommandBase = GetSsmSessionCommandBase_0;
  $x2$api$ssm$model$features.GetSsmSessionListCommandBase = GetSsmSessionListCommandBase_0;
  return _;
}));
