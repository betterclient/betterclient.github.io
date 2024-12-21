"use strict";
(function(module) {
    if (typeof define === 'function' && define.amd) {
        define(['exports'], function(exports)  {
            module(exports);
        });
    } else if (typeof exports === 'object' && exports !== null && typeof exports.nodeName !== 'string') {
        module(exports);
    } else {
        module(typeof self !== 'undefined' ? self : this);
}
}(function($rt_exports) {
let $rt_seed = 2463534242,
$rt_nextId = () => {
    let x = $rt_seed;
    x ^= x << 13;
    x ^= x >>> 17;
    x ^= x << 5;
    $rt_seed = x;
    return x;
},
$rt_wrapFunction0 = f => function() {
    return f(this);
},
$rt_wrapFunction1 = f => function(p1) {
    return f(this, p1);
},
$rt_wrapFunction2 = f => function(p1, p2) {
    return f(this, p1, p2);
},
$rt_mainStarter = f => (args, callback) => {
    if (!args) {
        args = [];
    }
    let javaArgs = $rt_createArray($rt_objcls(), args.length);
    for (let i = 0;i < args.length;++i) {
        javaArgs.data[i] = $rt_str(args[i]);
    }
    $rt_startThread(() => {
        f.call(null, javaArgs);
    }, callback);
},
$rt_eraseClinit = target => target.$clinit = () => {
},
$dbg_class = obj => {
    let cls = obj.constructor;
    let arrayDegree = 0;
    while (cls.$meta && cls.$meta.item) {
        ++arrayDegree;
        cls = cls.$meta.item;
    }
    let clsName = "";
    if (cls.$meta.primitive) {
        clsName = cls.$meta.name;
    } else {
        clsName = cls.$meta ? cls.$meta.name || "a/" + cls.name : "@" + cls.name;
    }
    while (arrayDegree-- > 0) {
        clsName += "[]";
    }
    return clsName;
},
$rt_classWithoutFields = superclass => {
    if (superclass === 0) {
        return function() {
        };
    }
    if (superclass === void 0) {
        superclass = $rt_objcls();
    }
    return function() {
        superclass.call(this);
    };
},
$rt_cls = cls => jl_Class_getClass(cls),
$rt_objcls = () => jl_Object,
$rt_callWithReceiver = f => function() {
    return f.apply(null, [this].concat(Array.prototype.slice.call(arguments)));
},
$rt_createcls = () => {
    return { $array : null, classObject : null, $meta : { supertypes : [], superclass : null } };
},
$rt_createPrimitiveCls = (name, binaryName) => {
    let cls = $rt_createcls();
    cls.$meta.primitive = true;
    cls.$meta.name = name;
    cls.$meta.binaryName = binaryName;
    cls.$meta.enum = false;
    cls.$meta.item = null;
    cls.$meta.simpleName = null;
    cls.$meta.declaringClass = null;
    cls.$meta.enclosingClass = null;
    return cls;
},
$rt_booleancls = $rt_createPrimitiveCls("boolean", "Z"),
$rt_charcls = $rt_createPrimitiveCls("char", "C"),
$rt_bytecls = $rt_createPrimitiveCls("byte", "B"),
$rt_shortcls = $rt_createPrimitiveCls("short", "S"),
$rt_intcls = $rt_createPrimitiveCls("int", "I"),
$rt_longcls = $rt_createPrimitiveCls("long", "J"),
$rt_floatcls = $rt_createPrimitiveCls("float", "F"),
$rt_doublecls = $rt_createPrimitiveCls("double", "D"),
$rt_voidcls = $rt_createPrimitiveCls("void", "V"),
$rt_numberConversionBuffer = new ArrayBuffer(16),
$rt_numberConversionView = new DataView($rt_numberConversionBuffer),
$rt_numberConversionDoubleArray = new Float64Array($rt_numberConversionBuffer),
$rt_doubleToRawLongBits,
$rt_longBitsToDouble;
if (typeof BigInt !== 'function') {
    $rt_doubleToRawLongBits = n => {
        $rt_numberConversionView.setFloat64(0, n, true);
        return new Long($rt_numberConversionView.getInt32(0, true), $rt_numberConversionView.getInt32(4, true));
    };
    $rt_longBitsToDouble = n => {
        $rt_numberConversionView.setInt32(0, n.lo, true);
        $rt_numberConversionView.setInt32(4, n.hi, true);
        return $rt_numberConversionView.getFloat64(0, true);
    };
} else if (typeof BigInt64Array !== 'function') {
    $rt_doubleToRawLongBits = n => {
        $rt_numberConversionView.setFloat64(0, n, true);
        let lo = $rt_numberConversionView.getInt32(0, true);
        let hi = $rt_numberConversionView.getInt32(4, true);
        return BigInt.asIntN(64, BigInt.asUintN(32, BigInt(lo)) | BigInt(hi) << BigInt(32));
    };
    $rt_longBitsToDouble = n => {
        $rt_numberConversionView.setFloat64(0, n, true);
        let lo = $rt_numberConversionView.getInt32(0, true);
        let hi = $rt_numberConversionView.getInt32(4, true);
        return BigInt.asIntN(64, BigInt.asUintN(32, BigInt(lo)) | BigInt(hi) << BigInt(32));
    };
} else {
    let $rt_numberConversionLongArray = new BigInt64Array($rt_numberConversionBuffer);
    $rt_doubleToRawLongBits = n => {
        $rt_numberConversionDoubleArray[0] = n;
        return $rt_numberConversionLongArray[0];
    };
    $rt_longBitsToDouble = n => {
        $rt_numberConversionLongArray[0] = n;
        return $rt_numberConversionDoubleArray[0];
    };
}
let $rt_compare = (a, b) => a > b ? 1 : a < b ?  -1 : a === b ? 0 : 1,
$rt_imul = Math.imul || function(a, b) {
    let ah = a >>> 16 & 0xFFFF;
    let al = a & 0xFFFF;
    let bh = b >>> 16 & 0xFFFF;
    let bl = b & 0xFFFF;
    return al * bl + (ah * bl + al * bh << 16 >>> 0) | 0;
},
$rt_udiv = (a, b) => (a >>> 0) / (b >>> 0) >>> 0,
$rt_umod = (a, b) => (a >>> 0) % (b >>> 0) >>> 0,
$rt_ucmp = (a, b) => {
    a >>>= 0;
    b >>>= 0;
    return a < b ?  -1 : a > b ? 1 : 0;
},
Long_ZERO = BigInt(0),
Long_create = (lo, hi) => BigInt.asIntN(64, BigInt.asUintN(64, BigInt(lo)) | BigInt.asUintN(64, BigInt(hi) << BigInt(32))),
Long_fromInt = val => BigInt.asIntN(64, BigInt(val | 0)),
Long_fromNumber = val => BigInt.asIntN(64, BigInt(val >= 0 ? Math.floor(val) : Math.ceil(val))),
Long_toNumber = val => Number(val),
Long_hi = val => Number(BigInt.asIntN(64, val >> BigInt(32))) | 0,
Long_lo = val => Number(BigInt.asIntN(32, val)) | 0,
Long_eq = (a, b) => a === b,
Long_ne = (a, b) => a !== b,
Long_gt = (a, b) => a > b,
Long_ge = (a, b) => a >= b,
Long_lt = (a, b) => a < b,
Long_le = (a, b) => a <= b,
Long_add = (a, b) => BigInt.asIntN(64, a + b),
Long_neg = a => BigInt.asIntN(64,  -a),
Long_sub = (a, b) => BigInt.asIntN(64, a - b),
Long_compare = (a, b) => a < b ?  -1 : a > b ? 1 : 0,
Long_ucompare = (a, b) => {
    a = BigInt.asUintN(64, a);
    b = BigInt.asUintN(64, b);
    return a < b ?  -1 : a > b ? 1 : 0;
},
Long_mul = (a, b) => BigInt.asIntN(64, a * b),
Long_div = (a, b) => BigInt.asIntN(64, a / b),
Long_udiv = (a, b) => BigInt.asIntN(64, BigInt.asUintN(64, a) / BigInt.asUintN(64, b)),
Long_rem = (a, b) => BigInt.asIntN(64, a % b),
Long_urem = (a, b) => BigInt.asIntN(64, BigInt.asUintN(64, a) % BigInt.asUintN(64, b)),
Long_and = (a, b) => BigInt.asIntN(64, a & b),
Long_or = (a, b) => BigInt.asIntN(64, a | b),
Long_xor = (a, b) => BigInt.asIntN(64, a ^ b),
Long_shl = (a, b) => BigInt.asIntN(64, a << BigInt(b & 63)),
Long_shr = (a, b) => BigInt.asIntN(64, a >> BigInt(b & 63)),
Long_shru = (a, b) => BigInt.asIntN(64, BigInt.asUintN(64, a) >> BigInt(b & 63)),
$rt_createArray = (cls, sz) => {
    let data = new Array(sz);
    data.fill(null);
    return new ($rt_arraycls(cls))(data);
},
$rt_wrapArray = (cls, data) => new ($rt_arraycls(cls))(data),
$rt_createLongArray,
$rt_createLongArrayFromData;
if (typeof BigInt64Array !== 'function') {
    $rt_createLongArray = sz => {
        let data = new Array(sz);
        let arr = new $rt_longArrayCls(data);
        data.fill(Long_ZERO);
        return arr;
    };
    $rt_createLongArrayFromData = init => new $rt_longArrayCls(init);
} else {
    $rt_createLongArray = sz => new $rt_longArrayCls(new BigInt64Array(sz));
    $rt_createLongArrayFromData = data => {
        let buffer = new BigInt64Array(data.length);
        buffer.set(data);
        return new $rt_longArrayCls(buffer);
    };
}
let $rt_createCharArray = sz => new $rt_charArrayCls(new Uint16Array(sz)),
$rt_createCharArrayFromData = data => {
    let buffer = new Uint16Array(data.length);
    buffer.set(data);
    return new $rt_charArrayCls(buffer);
},
$rt_createShortArrayFromData = data => {
    let buffer = new Int16Array(data.length);
    buffer.set(data);
    return new $rt_shortArrayCls(buffer);
},
$rt_createIntArray = sz => new $rt_intArrayCls(new Int32Array(sz)),
$rt_createIntArrayFromData = data => {
    let buffer = new Int32Array(data.length);
    buffer.set(data);
    return new $rt_intArrayCls(buffer);
},
$rt_arraycls = cls => {
    let result = cls.$array;
    if (result === null) {
        function JavaArray(data) {
            ($rt_objcls()).call(this);
            this.data = data;
        }
        JavaArray.prototype = Object.create(($rt_objcls()).prototype);
        JavaArray.prototype.type = cls;
        JavaArray.prototype.constructor = JavaArray;
        JavaArray.prototype.toString = function() {
            let str = "[";
            for (let i = 0;i < this.data.length;++i) {
                if (i > 0) {
                    str += ", ";
                }
                str += this.data[i].toString();
            }
            str += "]";
            return str;
        };
        JavaArray.prototype.$clone0 = function() {
            let dataCopy;
            if ('slice' in this.data) {
                dataCopy = this.data.slice();
            } else {
                dataCopy = new this.data.constructor(this.data.length);
                for (let i = 0;i < dataCopy.length;++i) {
                    dataCopy[i] = this.data[i];
                }
            }
            return new ($rt_arraycls(this.type))(dataCopy);
        };
        let name = "[" + cls.$meta.binaryName;
        JavaArray.$meta = { item : cls, supertypes : [$rt_objcls()], primitive : false, superclass : $rt_objcls(), name : name, binaryName : name, enum : false, simpleName : null, declaringClass : null, enclosingClass : null };
        JavaArray.classObject = null;
        JavaArray.$array = null;
        result = JavaArray;
        cls.$array = JavaArray;
    }
    return result;
},
$rt_stringPool_instance,
$rt_stringPool = strings => {
    $rt_stringClassInit();
    $rt_stringPool_instance = new Array(strings.length);
    for (let i = 0;i < strings.length;++i) {
        $rt_stringPool_instance[i] = $rt_intern($rt_str(strings[i]));
    }
},
$rt_s = index => $rt_stringPool_instance[index],
$rt_charArrayToString = (array, offset, count) => {
    let result = "";
    let limit = offset + count;
    for (let i = offset;i < limit;i = i + 1024 | 0) {
        let next = Math.min(limit, i + 1024 | 0);
        result += String.fromCharCode.apply(null, array.subarray(i, next));
    }
    return result;
},
$rt_str = str => str === null ? null : jl_String__init_(str),
$rt_ustr = str => str === null ? null : str.$nativeString,
$rt_stringClassInit = () => (() => {})(),
$rt_intern;
{
    $rt_intern = str => str;
}
let $rt_isInstance = (obj, cls) => obj instanceof $rt_objcls() && !!obj.constructor.$meta && $rt_isAssignable(obj.constructor, cls),
$rt_isAssignable = (from, to) => {
    if (from === to) {
        return true;
    }
    let map = from.$meta.assignableCache;
    if (typeof map === 'undefined') {
        map = new Map();
        from.$meta.assignableCache = map;
    }
    let cachedResult = map.get(to);
    if (typeof cachedResult !== 'undefined') {
        return cachedResult;
    }
    if (to.$meta.item !== null) {
        let result = from.$meta.item !== null && $rt_isAssignable(from.$meta.item, to.$meta.item);
        map.set(to, result);
        return result;
    }
    let supertypes = from.$meta.supertypes;
    for (let i = 0;i < supertypes.length;i = i + 1 | 0) {
        if ($rt_isAssignable(supertypes[i], to)) {
            map.set(to, true);
            return true;
        }
    }
    map.set(to, false);
    return false;
},
$rt_throw = ex => {
    throw $rt_exception(ex);
},
$rt_javaExceptionProp = Symbol("javaException"),
$rt_exception = ex => {
    let err = ex.$jsException;
    if (!err) {
        let javaCause = $rt_throwableCause(ex);
        let jsCause = javaCause !== null ? javaCause.$jsException : void 0;
        let cause = typeof jsCause === "object" ? { cause : jsCause } : void 0;
        err = new JavaError("Java exception thrown", cause);
        if (typeof Error.captureStackTrace === "function") {
            Error.captureStackTrace(err);
        }
        err[$rt_javaExceptionProp] = ex;
        ex.$jsException = err;
        $rt_fillStack(err, ex);
    }
    return err;
},
$rt_fillStack = (err, ex) => {
    if (typeof $rt_decodeStack === "function" && err.stack) {
        let stack = $rt_decodeStack(err.stack);
        let javaStack = $rt_createArray($rt_stecls(), stack.length);
        let elem;
        let noStack = false;
        for (let i = 0;i < stack.length;++i) {
            let element = stack[i];
            elem = $rt_createStackElement($rt_str(element.className), $rt_str(element.methodName), $rt_str(element.fileName), element.lineNumber);
            if (elem == null) {
                noStack = true;
                break;
            }
            javaStack.data[i] = elem;
        }
        if (!noStack) {
            $rt_setStack(ex, javaStack);
        }
    }
},
JavaError;
if (typeof Reflect === 'object') {
    let defaultMessage = Symbol("defaultMessage");
    JavaError = function JavaError(message, cause) {
        let self = Reflect.construct(Error, [void 0, cause], JavaError);
        Object.setPrototypeOf(self, JavaError.prototype);
        self[defaultMessage] = message;
        return self;
    }
    ;
    JavaError.prototype = Object.create(Error.prototype, { constructor : { configurable : true, writable : true, value : JavaError }, message : { get() {
        try {
            let javaException = this[$rt_javaExceptionProp];
            if (typeof javaException === 'object') {
                let javaMessage = $rt_throwableMessage(javaException);
                if (typeof javaMessage === "object") {
                    return javaMessage !== null ? javaMessage.toString() : null;
                }
            }
            return this[defaultMessage];
        } catch (e){
            return "Exception occurred trying to extract Java exception message: " + e;
        }
    } } });
} else {
    JavaError = Error;
}
let $rt_javaException = e => e instanceof Error && typeof e[$rt_javaExceptionProp] === 'object' ? e[$rt_javaExceptionProp] : null,
$rt_wrapException = err => {
    let ex = err[$rt_javaExceptionProp];
    if (!ex) {
        ex = $rt_createException($rt_str("(JavaScript) " + err.toString()));
        err[$rt_javaExceptionProp] = ex;
        ex.$jsException = err;
        $rt_fillStack(err, ex);
    }
    return ex;
},
$rt_createException = message => jl_RuntimeException__init_1(message),
$rt_throwableMessage = t => jl_Throwable_getMessage(t),
$rt_throwableCause = t => jl_Throwable_getCause(t),
$rt_stecls = () => $rt_objcls(),
$rt_createStackElement = (className, methodName, fileName, lineNumber) => {
    {
        return null;
    }
},
$rt_setStack = (e, stack) => {
},
$rt_packageData = null,
$rt_packages = data => {
    let i = 0;
    let packages = new Array(data.length);
    for (let j = 0;j < data.length;++j) {
        let prefixIndex = data[i++];
        let prefix = prefixIndex >= 0 ? packages[prefixIndex] : "";
        packages[j] = prefix + data[i++] + ".";
    }
    $rt_packageData = packages;
},
$rt_metadata = data => {
    let packages = $rt_packageData;
    let i = 0;
    while (i < data.length) {
        let cls = data[i++];
        cls.$meta = {  };
        let m = cls.$meta;
        let className = data[i++];
        m.name = className !== 0 ? className : null;
        if (m.name !== null) {
            let packageIndex = data[i++];
            if (packageIndex >= 0) {
                m.name = packages[packageIndex] + m.name;
            }
        }
        m.binaryName = "L" + m.name + ";";
        let superclass = data[i++];
        m.superclass = superclass !== 0 ? superclass : null;
        m.supertypes = data[i++];
        if (m.superclass) {
            m.supertypes.push(m.superclass);
            cls.prototype = Object.create(m.superclass.prototype);
        } else {
            cls.prototype = {  };
        }
        let flags = data[i++];
        m.enum = (flags & 8) !== 0;
        m.flags = flags;
        m.primitive = false;
        m.item = null;
        cls.prototype.constructor = cls;
        cls.classObject = null;
        m.accessLevel = data[i++];
        let innerClassInfo = data[i++];
        if (innerClassInfo === 0) {
            m.simpleName = null;
            m.declaringClass = null;
            m.enclosingClass = null;
        } else {
            let enclosingClass = innerClassInfo[0];
            m.enclosingClass = enclosingClass !== 0 ? enclosingClass : null;
            let declaringClass = innerClassInfo[1];
            m.declaringClass = declaringClass !== 0 ? declaringClass : null;
            let simpleName = innerClassInfo[2];
            m.simpleName = simpleName !== 0 ? simpleName : null;
        }
        let clinit = data[i++];
        cls.$clinit = clinit !== 0 ? clinit : function() {
        };
        let virtualMethods = data[i++];
        if (virtualMethods !== 0) {
            for (let j = 0;j < virtualMethods.length;j += 2) {
                let name = virtualMethods[j];
                let func = virtualMethods[j + 1];
                if (typeof name === 'string') {
                    name = [name];
                }
                for (let k = 0;k < name.length;++k) {
                    cls.prototype[name[k]] = func;
                }
            }
        }
        cls.$array = null;
    }
},
$rt_startThread = (runner, callback) => {
    let result;
    try {
        result = runner();
    } catch (e){
        result = e;
    }
    if (typeof callback !== 'undefined') {
        callback(result);
    } else if (result instanceof Error) {
        throw result;
    }
};
function jl_Object() {
    this.$id$ = 0;
}
let jl_Object__init_ = $this => {
    return;
},
jl_Object__init_0 = () => {
    let var_0 = new jl_Object();
    jl_Object__init_(var_0);
    return var_0;
},
jl_Object_getClass = $this => {
    return jl_Class_getClass($this.constructor);
},
jl_Object_toString = $this => {
    let var$1, var$2, var$3;
    var$1 = jl_Class_getName(jl_Object_getClass($this));
    var$2 = $this;
    if (!var$2.$id$)
        var$2.$id$ = $rt_nextId();
    var$2 = jl_Integer_toHexString($this.$id$);
    var$3 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$3);
    var$1 = jl_StringBuilder_append(var$3, var$1);
    jl_AbstractStringBuilder_append(var$1, 64);
    jl_StringBuilder_append(var$1, var$2);
    return jl_AbstractStringBuilder_toString(var$3);
},
jl_Object_clone = $this => {
    let $result, var$2, var$3;
    if (!$rt_isInstance($this, jl_Cloneable) && $this.constructor.$meta.item === null) {
        $result = new jl_CloneNotSupportedException;
        jl_Exception__init_($result);
        $rt_throw($result);
    }
    $result = otp_Platform_clone($this);
    var$2 = $result;
    var$3 = $rt_nextId();
    var$2.$id$ = var$3;
    return $result;
},
jlr_AnnotatedElement = $rt_classWithoutFields(0),
jlr_Type = $rt_classWithoutFields(0);
function jl_Class() {
    let a = this; jl_Object.call(a);
    a.$name = null;
    a.$platformClass = null;
}
let jl_Class_getClass = $cls => {
    let $result;
    if ($cls === null)
        return null;
    $result = $cls.classObject;
    if ($result === null) {
        $result = new jl_Class;
        $result.$platformClass = $cls;
        $cls.classObject = $result;
    }
    return $result;
},
jl_Class_toString = $this => {
    let var$1, var$2, var$3;
    var$1 = (!($this.$platformClass.$meta.flags & 2) ? 0 : 1) ? $rt_s(0) : !jl_Class_isPrimitive($this) ? $rt_s(1) : $rt_s(2);
    var$2 = jl_Class_getName($this);
    var$3 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$3);
    jl_StringBuilder_append(jl_StringBuilder_append(var$3, var$1), var$2);
    return jl_AbstractStringBuilder_toString(var$3);
},
jl_Class_getName = $this => {
    if ($this.$name === null)
        $this.$name = $rt_str($this.$platformClass.$meta.name);
    return $this.$name;
},
jl_Class_isPrimitive = $this => {
    return $this.$platformClass.$meta.primitive ? 1 : 0;
},
jl_Class_getComponentType = $this => {
    return jl_Class_getClass($this.$platformClass.$meta.item);
},
otji_JS = $rt_classWithoutFields(),
otji_JS_function = (var$1, var$2) => {
    let name = 'jso$functor$' + var$2;
    let result = var$1[name];
    if (typeof result !== 'function') {
        let fn = function() {
            return var$1[var$2].apply(var$1, arguments);
        };
        result = () => fn;
        var$1[name] = result;
    }
    return result();
},
otp_Platform = $rt_classWithoutFields(),
otp_Platform_clone = var$1 => {
    let copy = new var$1.constructor();
    for (let field in var$1) {
        if (var$1.hasOwnProperty(field)) {
            copy[field] = var$1[field];
        }
    }
    return copy;
},
otp_Platform_isAssignable = (var$1, var$2) => {
    let $supertypes, $i;
    if (var$1 === var$2)
        return 1;
    $supertypes = var$1.$meta.supertypes;
    $i = 0;
    while ($i < $supertypes.length) {
        if (otp_Platform_isAssignable($supertypes[$i], var$2))
            return 1;
        $i = $i + 1 | 0;
    }
    return 0;
};
function jl_Throwable() {
    let a = this; jl_Object.call(a);
    a.$message = null;
    a.$cause = null;
    a.$suppressionEnabled = 0;
    a.$writableStackTrace = 0;
}
let jl_Throwable_fillInStackTrace = $this => {
    return $this;
},
jl_Throwable_getMessage = $this => {
    return $this.$message;
},
jl_Throwable_getCause = $this => {
    let var$1;
    var$1 = $this.$cause;
    if (var$1 === $this)
        var$1 = null;
    return var$1;
},
jl_Exception = $rt_classWithoutFields(jl_Throwable),
jl_Exception__init_ = $this => {
    $this.$suppressionEnabled = 1;
    $this.$writableStackTrace = 1;
},
jl_Exception__init_0 = () => {
    let var_0 = new jl_Exception();
    jl_Exception__init_(var_0);
    return var_0;
},
jl_RuntimeException = $rt_classWithoutFields(jl_Exception),
jl_RuntimeException__init_0 = $this => {
    jl_Exception__init_($this);
},
jl_RuntimeException__init_2 = () => {
    let var_0 = new jl_RuntimeException();
    jl_RuntimeException__init_0(var_0);
    return var_0;
},
jl_RuntimeException__init_ = ($this, $message) => {
    $this.$suppressionEnabled = 1;
    $this.$writableStackTrace = 1;
    $this.$message = $message;
},
jl_RuntimeException__init_1 = var_0 => {
    let var_1 = new jl_RuntimeException();
    jl_RuntimeException__init_(var_1, var_0);
    return var_1;
},
jl_ClassCastException = $rt_classWithoutFields(jl_RuntimeException),
ji_Serializable = $rt_classWithoutFields(0),
jl_Comparable = $rt_classWithoutFields(0),
jl_CharSequence = $rt_classWithoutFields(0);
function jl_String() {
    jl_Object.call(this);
    this.$hashCode0 = 0;
}
let jl_String_EMPTY_CHARS = null,
jl_String_EMPTY = null,
jl_String_CASE_INSENSITIVE_ORDER = null,
jl_String__init_0 = ($this, $characters) => {
    $this.$nativeString = $rt_charArrayToString($characters.data, 0, $characters.data.length);
},
jl_String__init_1 = var_0 => {
    let var_1 = new jl_String();
    jl_String__init_0(var_1, var_0);
    return var_1;
},
jl_String__init_2 = (var$0, var$1) => {
    var$0.$nativeString = var$1;
},
jl_String__init_ = var_0 => {
    let var_1 = new jl_String();
    jl_String__init_2(var_1, var_0);
    return var_1;
},
jl_String_charAt = (var$0, var$1) => {
    let var$2;
    if (var$1 >= 0 && var$1 < var$0.$nativeString.length)
        return var$0.$nativeString.charCodeAt(var$1);
    var$2 = new jl_StringIndexOutOfBoundsException;
    jl_Exception__init_(var$2);
    $rt_throw(var$2);
},
jl_String_length = $this => {
    return $this.$nativeString.length;
},
jl_String_isEmpty = $this => {
    return $this.$nativeString.length ? 0 : 1;
},
jl_String_indexOf = ($this, $ch, $fromIndex) => {
    let $i, $bmpChar, $hi, $lo;
    $i = jl_Math_max(0, $fromIndex);
    if ($ch < 65536) {
        $bmpChar = $ch & 65535;
        while (true) {
            if ($i >= $this.$nativeString.length)
                return (-1);
            if ($this.$nativeString.charCodeAt($i) == $bmpChar)
                break;
            $i = $i + 1 | 0;
        }
        return $i;
    }
    $hi = jl_Character_highSurrogate($ch);
    $lo = jl_Character_lowSurrogate($ch);
    while (true) {
        if ($i >= ($this.$nativeString.length - 1 | 0))
            return (-1);
        if ($this.$nativeString.charCodeAt($i) == $hi && $this.$nativeString.charCodeAt(($i + 1 | 0)) == $lo)
            break;
        $i = $i + 1 | 0;
    }
    return $i;
},
jl_String_substring = ($this, $beginIndex, $endIndex) => {
    let $length, var$4, var$5;
    $length = $this.$nativeString.length;
    var$4 = $rt_compare($beginIndex, $endIndex);
    if (!var$4)
        return jl_String_EMPTY;
    if (!$beginIndex && $endIndex == $length)
        return $this;
    if ($beginIndex >= 0 && var$4 <= 0 && $endIndex <= $length)
        return jl_String__init_($this.$nativeString.substring($beginIndex, $endIndex));
    var$5 = new jl_StringIndexOutOfBoundsException;
    jl_Exception__init_(var$5);
    $rt_throw(var$5);
},
jl_String_substring0 = ($this, $beginIndex) => {
    return jl_String_substring($this, $beginIndex, $this.$nativeString.length);
},
jl_String_toString = $this => {
    return $this;
},
jl_String_valueOf0 = $obj => {
    return $obj === null ? $rt_s(3) : $obj.$toString();
},
jl_String_valueOf = $c => {
    let var$2, var$3;
    var$2 = new jl_String;
    var$3 = $rt_createCharArray(1);
    var$3.data[0] = $c;
    jl_String__init_0(var$2, var$3);
    return var$2;
},
jl_String_valueOf1 = $i => {
    let var$2;
    var$2 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$2);
    return jl_AbstractStringBuilder_toString(jl_StringBuilder_append0(var$2, $i));
},
jl_String_equals = ($this, $other) => {
    let $str;
    if ($this === $other)
        return 1;
    if (!($other instanceof jl_String))
        return 0;
    $str = $other;
    return $this.$nativeString !== $str.$nativeString ? 0 : 1;
},
jl_String_hashCode = $this => {
    let $i;
    a: {
        if (!$this.$hashCode0) {
            $i = 0;
            while (true) {
                if ($i >= $this.$nativeString.length)
                    break a;
                $this.$hashCode0 = (31 * $this.$hashCode0 | 0) + $this.$nativeString.charCodeAt($i) | 0;
                $i = $i + 1 | 0;
            }
        }
    }
    return $this.$hashCode0;
},
jl_String_format = ($format, $args) => {
    let var$3, var$4, var$5, $$je;
    var$3 = new ju_Formatter;
    var$4 = ju_Locale_getDefault();
    var$5 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$5);
    var$3.$out0 = var$5;
    var$3.$locale1 = var$4;
    ju_Formatter_requireOpen(var$3);
    a: {
        try {
            if ($args === null)
                $args = $rt_createArray(jl_Object, 1);
            ju_Formatter$FormatWriter_write(ju_Formatter$FormatWriter__init_0(var$3, var$3.$out0, var$4, $format, $args));
            break a;
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            if ($$je instanceof ji_IOException) {
                $format = $$je;
            } else {
                throw $$e;
            }
        }
        var$3.$ioException = $format;
    }
    ju_Formatter_requireOpen(var$3);
    return jl_AbstractStringBuilder_toString(var$3.$out0);
},
jl_String__clinit_ = () => {
    let var$1;
    jl_String_EMPTY_CHARS = $rt_createCharArray(0);
    var$1 = new jl_String;
    var$1.$nativeString = "";
    jl_String_EMPTY = var$1;
    jl_String_CASE_INSENSITIVE_ORDER = new jl_String$_clinit_$lambda$_115_0;
},
jl_Number = $rt_classWithoutFields();
function jl_Integer() {
    jl_Number.call(this);
    this.$value = 0;
}
let jl_Integer_TYPE = null,
jl_Integer_integerCache = null,
jl_Integer__init_0 = ($this, $value) => {
    $this.$value = $value;
},
jl_Integer__init_ = var_0 => {
    let var_1 = new jl_Integer();
    jl_Integer__init_0(var_1, var_0);
    return var_1;
},
jl_Integer_toHexString = $i => {
    return otci_IntegerUtil_toUnsignedLogRadixString($i, 4);
},
jl_Integer_toString = $i => {
    return (jl_AbstractStringBuilder_append1(jl_AbstractStringBuilder__init_1(20), $i, 10)).$toString();
},
jl_Integer_parseIntImpl = ($s, $beginIndex, $endIndex, $radix) => {
    let $negative, var$6, $value, $maxValue, var$9, $digit, var$11, var$12;
    if ($beginIndex == $endIndex) {
        $s = new jl_NumberFormatException;
        jl_RuntimeException__init_($s, $rt_s(4));
        $rt_throw($s);
    }
    if ($radix >= 2 && $radix <= 36) {
        a: {
            $negative = 0;
            $s = $s;
            switch (jl_String_charAt($s, $beginIndex)) {
                case 43:
                    var$6 = $beginIndex + 1 | 0;
                    break a;
                case 45:
                    $negative = 1;
                    var$6 = $beginIndex + 1 | 0;
                    break a;
                default:
            }
            var$6 = $beginIndex;
        }
        $value = 0;
        $maxValue = 1 + (2147483647 / $radix | 0) | 0;
        if (var$6 == $endIndex) {
            $s = new jl_NumberFormatException;
            jl_Exception__init_($s);
            $rt_throw($s);
        }
        while (var$6 < $endIndex) {
            var$9 = var$6 + 1 | 0;
            $digit = jl_String_charAt($s, var$6);
            $digit = $digit >= 48 && $digit <= 57 ? $digit - 48 | 0 : $digit >= 97 && $digit <= 122 ? ($digit - 97 | 0) + 10 | 0 : $digit >= 65 && $digit <= 90 ? ($digit - 65 | 0) + 10 | 0 : (-1);
            if ($digit < 0) {
                var$11 = new jl_NumberFormatException;
                $s = jl_String_valueOf0(jl_String_substring($s, $beginIndex, $endIndex));
                var$12 = new jl_StringBuilder;
                jl_AbstractStringBuilder__init_(var$12);
                jl_StringBuilder_append(jl_StringBuilder_append(var$12, $rt_s(5)), $s);
                jl_RuntimeException__init_(var$11, jl_AbstractStringBuilder_toString(var$12));
                $rt_throw(var$11);
            }
            if ($digit >= $radix) {
                var$11 = new jl_NumberFormatException;
                $s = jl_String_valueOf0(jl_String_substring($s, $beginIndex, $endIndex));
                var$12 = new jl_StringBuilder;
                jl_AbstractStringBuilder__init_(var$12);
                jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(var$12, $rt_s(6)), $radix), $rt_s(7)), $s);
                jl_RuntimeException__init_(var$11, jl_AbstractStringBuilder_toString(var$12));
                $rt_throw(var$11);
            }
            if ($value > $maxValue) {
                $s = new jl_NumberFormatException;
                jl_RuntimeException__init_($s, $rt_s(8));
                $rt_throw($s);
            }
            $value = $rt_imul($radix, $value) + $digit | 0;
            if ($value < 0) {
                if (var$9 == $endIndex && $value == (-2147483648) && $negative)
                    return (-2147483648);
                var$11 = new jl_NumberFormatException;
                $s = jl_String_valueOf0(jl_String_substring($s, $beginIndex, $endIndex));
                var$12 = new jl_StringBuilder;
                jl_AbstractStringBuilder__init_(var$12);
                jl_StringBuilder_append(jl_StringBuilder_append(var$12, $rt_s(9)), $s);
                jl_RuntimeException__init_(var$11, jl_AbstractStringBuilder_toString(var$12));
                $rt_throw(var$11);
            }
            var$6 = var$9;
        }
        if ($negative)
            $value =  -$value | 0;
        return $value;
    }
    $s = new jl_NumberFormatException;
    var$11 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$11);
    jl_StringBuilder_append0(jl_StringBuilder_append(var$11, $rt_s(10)), $radix);
    jl_RuntimeException__init_($s, jl_AbstractStringBuilder_toString(var$11));
    $rt_throw($s);
},
jl_Integer_parseInt = $s => {
    if ($s !== null)
        return jl_Integer_parseIntImpl($s, 0, $s.$nativeString.length, 10);
    $s = new jl_NumberFormatException;
    jl_RuntimeException__init_($s, $rt_s(11));
    $rt_throw($s);
},
jl_Integer_valueOf = $i => {
    let var$2, var$3;
    if ($i >= (-128) && $i <= 127) {
        a: {
            if (jl_Integer_integerCache === null) {
                jl_Integer_integerCache = $rt_createArray(jl_Integer, 256);
                var$2 = 0;
                while (true) {
                    var$3 = jl_Integer_integerCache.data;
                    if (var$2 >= var$3.length)
                        break a;
                    var$3[var$2] = jl_Integer__init_(var$2 - 128 | 0);
                    var$2 = var$2 + 1 | 0;
                }
            }
        }
        return jl_Integer_integerCache.data[$i + 128 | 0];
    }
    return jl_Integer__init_($i);
},
jl_Integer_toString0 = $this => {
    return jl_Integer_toString($this.$value);
},
jl_Integer_numberOfLeadingZeros = $i => {
    let $n, var$3;
    if (!$i)
        return 32;
    $n = 0;
    var$3 = $i >>> 16 | 0;
    if (var$3)
        $n = 16;
    else
        var$3 = $i;
    $i = var$3 >>> 8 | 0;
    if (!$i)
        $i = var$3;
    else
        $n = $n | 8;
    var$3 = $i >>> 4 | 0;
    if (!var$3)
        var$3 = $i;
    else
        $n = $n | 4;
    $i = var$3 >>> 2 | 0;
    if (!$i)
        $i = var$3;
    else
        $n = $n | 2;
    if ($i >>> 1 | 0)
        $n = $n | 1;
    return (32 - $n | 0) - 1 | 0;
},
jl_Integer__clinit_ = () => {
    jl_Integer_TYPE = $rt_cls($rt_intcls);
};
function jl_AbstractStringBuilder() {
    let a = this; jl_Object.call(a);
    a.$buffer = null;
    a.$length0 = 0;
}
let jl_AbstractStringBuilder__init_ = $this => {
    jl_AbstractStringBuilder__init_0($this, 16);
},
jl_AbstractStringBuilder__init_2 = () => {
    let var_0 = new jl_AbstractStringBuilder();
    jl_AbstractStringBuilder__init_(var_0);
    return var_0;
},
jl_AbstractStringBuilder__init_0 = ($this, $capacity) => {
    $this.$buffer = $rt_createCharArray($capacity);
},
jl_AbstractStringBuilder__init_1 = var_0 => {
    let var_1 = new jl_AbstractStringBuilder();
    jl_AbstractStringBuilder__init_0(var_1, var_0);
    return var_1;
},
jl_AbstractStringBuilder_append0 = ($this, $string) => {
    return $this.$insert($this.$length0, $string);
},
jl_AbstractStringBuilder_insert = ($this, $index, $string) => {
    let $i, $i_0, var$5, var$6;
    if ($index >= 0 && $index <= $this.$length0) {
        if ($string === null)
            $string = $rt_s(3);
        else if (jl_String_isEmpty($string))
            return $this;
        $this.$ensureCapacity($this.$length0 + $string.$nativeString.length | 0);
        $i = $this.$length0 - 1 | 0;
        while ($i >= $index) {
            $this.$buffer.data[$i + $string.$nativeString.length | 0] = $this.$buffer.data[$i];
            $i = $i + (-1) | 0;
        }
        $this.$length0 = $this.$length0 + $string.$nativeString.length | 0;
        $i_0 = 0;
        while ($i_0 < $string.$nativeString.length) {
            var$5 = $this.$buffer.data;
            var$6 = $index + 1 | 0;
            var$5[$index] = jl_String_charAt($string, $i_0);
            $i_0 = $i_0 + 1 | 0;
            $index = var$6;
        }
        return $this;
    }
    $string = new jl_StringIndexOutOfBoundsException;
    jl_Exception__init_($string);
    $rt_throw($string);
},
jl_AbstractStringBuilder_append1 = ($this, $value, $radix) => {
    return jl_AbstractStringBuilder_insert1($this, $this.$length0, $value, $radix);
},
jl_AbstractStringBuilder_insert1 = ($this, $target, $value, $radix) => {
    let $positive, var$5, var$6, $pos, $sz, $posLimit, var$10;
    $positive = 1;
    if ($value < 0) {
        $positive = 0;
        $value =  -$value | 0;
    }
    a: {
        if ($rt_ucmp($value, $radix) < 0) {
            if ($positive)
                jl_AbstractStringBuilder_insertSpace($this, $target, $target + 1 | 0);
            else {
                jl_AbstractStringBuilder_insertSpace($this, $target, $target + 2 | 0);
                var$5 = $this.$buffer.data;
                var$6 = $target + 1 | 0;
                var$5[$target] = 45;
                $target = var$6;
            }
            $this.$buffer.data[$target] = jl_Character_forDigit($value, $radix);
        } else {
            $pos = 1;
            $sz = 1;
            $posLimit = $rt_udiv((-1), $radix);
            b: {
                while (true) {
                    var$10 = $rt_imul($pos, $radix);
                    if ($rt_ucmp(var$10, $value) > 0) {
                        var$10 = $pos;
                        break b;
                    }
                    $sz = $sz + 1 | 0;
                    if ($rt_ucmp(var$10, $posLimit) > 0)
                        break;
                    $pos = var$10;
                }
            }
            if (!$positive)
                $sz = $sz + 1 | 0;
            jl_AbstractStringBuilder_insertSpace($this, $target, $target + $sz | 0);
            if ($positive)
                $positive = $target;
            else {
                var$5 = $this.$buffer.data;
                $positive = $target + 1 | 0;
                var$5[$target] = 45;
            }
            while (true) {
                if (!var$10)
                    break a;
                var$5 = $this.$buffer.data;
                $target = $positive + 1 | 0;
                var$5[$positive] = jl_Character_forDigit($rt_udiv($value, var$10), $radix);
                $value = $rt_umod($value, var$10);
                var$10 = $rt_udiv(var$10, $radix);
                $positive = $target;
            }
        }
    }
    return $this;
},
jl_AbstractStringBuilder_append = ($this, $c) => {
    return $this.$insert1($this.$length0, $c);
},
jl_AbstractStringBuilder_insert0 = ($this, $index, $c) => {
    jl_AbstractStringBuilder_insertSpace($this, $index, $index + 1 | 0);
    $this.$buffer.data[$index] = $c;
    return $this;
},
jl_AbstractStringBuilder_ensureCapacity = ($this, $capacity) => {
    let var$2, $newLength, var$4, var$5, var$6;
    var$2 = $this.$buffer.data.length;
    if (var$2 >= $capacity)
        return;
    $newLength = var$2 >= 1073741823 ? 2147483647 : jl_Math_max($capacity, jl_Math_max(var$2 * 2 | 0, 5));
    var$4 = $this.$buffer.data;
    var$5 = $rt_createCharArray($newLength);
    var$6 = var$5.data;
    $capacity = jl_Math_min($newLength, var$4.length);
    var$2 = 0;
    while (var$2 < $capacity) {
        var$6[var$2] = var$4[var$2];
        var$2 = var$2 + 1 | 0;
    }
    $this.$buffer = var$5;
},
jl_AbstractStringBuilder_toString = $this => {
    let var$1, var$2, var$3, var$4, var$5;
    var$1 = new jl_String;
    var$2 = $this.$buffer;
    var$3 = var$2.data;
    var$4 = $this.$length0;
    var$5 = var$3.length;
    if (var$4 >= 0 && var$4 <= (var$5 - 0 | 0)) {
        var$1.$nativeString = $rt_charArrayToString(var$2.data, 0, var$4);
        return var$1;
    }
    var$1 = new jl_IndexOutOfBoundsException;
    jl_Exception__init_(var$1);
    $rt_throw(var$1);
},
jl_AbstractStringBuilder_insertSpace = ($this, $start, $end) => {
    let var$3, $sz, $i, var$6;
    var$3 = $this.$length0;
    $sz = var$3 - $start | 0;
    $this.$ensureCapacity((var$3 + $end | 0) - $start | 0);
    $i = $sz - 1 | 0;
    while ($i >= 0) {
        var$6 = $this.$buffer.data;
        var$6[$end + $i | 0] = var$6[$start + $i | 0];
        $i = $i + (-1) | 0;
    }
    $this.$length0 = $this.$length0 + ($end - $start | 0) | 0;
},
jl_Appendable = $rt_classWithoutFields(0),
jl_StringBuilder = $rt_classWithoutFields(jl_AbstractStringBuilder),
jl_StringBuilder__init_ = $this => {
    jl_AbstractStringBuilder__init_($this);
},
jl_StringBuilder__init_0 = () => {
    let var_0 = new jl_StringBuilder();
    jl_StringBuilder__init_(var_0);
    return var_0;
},
jl_StringBuilder_append = ($this, $obj) => {
    let var$2, var$3;
    var$2 = $this.$length0;
    var$3 = $this;
    $obj = $obj === null ? $rt_s(3) : $obj;
    jl_AbstractStringBuilder_insert(var$3, var$2, $obj);
    return $this;
},
jl_StringBuilder_append3 = ($this, $string) => {
    jl_AbstractStringBuilder_append0($this, $string);
    return $this;
},
jl_StringBuilder_append0 = ($this, $value) => {
    jl_AbstractStringBuilder_append1($this, $value, 10);
    return $this;
},
jl_StringBuilder_append2 = ($this, $c) => {
    jl_AbstractStringBuilder_append($this, $c);
    return $this;
},
jl_StringBuilder_append1 = ($this, $s) => {
    let var$2, var$3, var$4, var$5, var$6, var$7;
    var$2 = 0;
    var$3 = $s.$length();
    var$4 = $this;
    var$5 = var$4.$length0;
    var$4 = var$4;
    if (var$2 <= var$3 && var$3 <= $s.$length()) {
        jl_AbstractStringBuilder_insertSpace(var$4, var$5, (var$5 + var$3 | 0) - var$2 | 0);
        while (var$2 < var$3) {
            var$6 = var$4.$buffer.data;
            var$7 = var$5 + 1 | 0;
            var$6[var$5] = $s.$charAt(var$2);
            var$2 = var$2 + 1 | 0;
            var$5 = var$7;
        }
        return $this;
    }
    $s = new jl_IndexOutOfBoundsException;
    jl_RuntimeException__init_0($s);
    $rt_throw($s);
},
jl_StringBuilder_setLength = ($this, var$1) => {
    $this.$length0 = var$1;
},
jl_StringBuilder_charAt = ($this, var$1) => {
    let var$2;
    if (var$1 >= 0 && var$1 < $this.$length0)
        return $this.$buffer.data[var$1];
    var$2 = new jl_IndexOutOfBoundsException;
    jl_Exception__init_(var$2);
    $rt_throw(var$2);
},
jl_StringBuilder_length = $this => {
    return $this.$length0;
},
jl_StringBuilder_toString = $this => {
    return jl_AbstractStringBuilder_toString($this);
},
jl_StringBuilder_ensureCapacity = ($this, var$1) => {
    jl_AbstractStringBuilder_ensureCapacity($this, var$1);
},
jl_StringBuilder_insert = ($this, var$1, var$2) => {
    jl_AbstractStringBuilder_insert0($this, var$1, var$2);
    return $this;
},
jl_StringBuilder_insert0 = ($this, var$1, var$2) => {
    jl_AbstractStringBuilder_insert($this, var$1, var$2);
    return $this;
},
igbs_Main = $rt_classWithoutFields(),
igbs_Main_last = 0,
igbs_Main_pointsCurrent = 0,
igbs_Main_$callClinit = () => {
    igbs_Main_$callClinit = $rt_eraseClinit(igbs_Main);
    igbs_Main__clinit_();
},
igbs_Main_main = $args => {
    let $document, var$3, var$4;
    igbs_Main_$callClinit();
    $document = otjdh_HTMLDocument_current();
    igbs_Main_startGame();
    var$3 = $document.getElementById("guess");
    var$4 = new igbs_Main$main$lambda$_1_0;
    var$3.addEventListener("click", otji_JS_function(otji_JSWrapper_unwrap(var$4), "handleEvent"));
},
igbs_Main_startGame = () => {
    let $document, var$2, var$3, var$4;
    igbs_Main_$callClinit();
    $document = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_($document);
    var$2 = 0;
    while (var$2 < 8) {
        jl_StringBuilder_append0($document, jl_Math_randomImpl() * 10.0 | 0);
        var$2 = var$2 + 1 | 0;
    }
    var$3 = jl_AbstractStringBuilder_toString($document);
    igbs_Main_last = jl_Integer_parseInt(var$3);
    $document = otjdh_HTMLDocument_current();
    var$4 = igbs_Main_hash$js_body$_6($rt_ustr(var$3));
    var$3 = new igbs_Main$startGame$lambda$_4_0;
    var$3.$_0 = $document;
    var$4.then(otji_JS_function(otji_JSWrapper_unwrap(var$3), "apply"));
},
igbs_Main__clinit_ = () => {
    jl_String__clinit_();
    jl_Integer__clinit_();
    jl_Character__clinit_();
    jl_Boolean__clinit_();
    jl_Byte__clinit_();
    jl_Short__clinit_();
    jl_Long__clinit_();
    jt_DecimalFormat__clinit_();
    jl_Double__clinit_();
    jl_Float__clinit_();
    jm_BigInteger__clinit_();
    jm_RoundingMode__clinit_();
    jt_DecimalFormat$Constants__clinit_();
    otcit_DoubleAnalyzer__clinit_();
    jm_Conversion__clinit_();
    igbs_Main_last = 0;
    igbs_Main_pointsCurrent = 0;
},
igbs_Main_hash$js_body$_6 = var$1 => {
    if (!igbs_Main_hash$js_body$_6.$native) {
        igbs_Main_hash$js_body$_6.$native = function(_0) {
            return (function(to) {
                return (async function() {
                    const encoder = new TextEncoder();
                    const data = encoder.encode(to);
                    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
                    const hashArray = Array.from(new Uint8Array(hashBuffer));
                    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
                    return hashHex;
                })();

            })(_0);
        };
        igbs_Main_hash$js_body$_6 = igbs_Main_hash$js_body$_6.$native;
    }
    return igbs_Main_hash$js_body$_6(var$1);
},
otci_IntegerUtil = $rt_classWithoutFields(),
otci_IntegerUtil_toUnsignedLogRadixString = (var$1, $radixLog2) => {
    let $radix, $mask, $sz, $chars, var$7, $pos, $target, $target_0;
    if (!var$1)
        return $rt_s(12);
    $radix = 1 << $radixLog2;
    $mask = $radix - 1 | 0;
    $sz = (((32 - jl_Integer_numberOfLeadingZeros(var$1) | 0) + $radixLog2 | 0) - 1 | 0) / $radixLog2 | 0;
    $chars = $rt_createCharArray($sz);
    var$7 = $chars.data;
    $pos = $rt_imul($sz - 1 | 0, $radixLog2);
    $target = 0;
    while ($pos >= 0) {
        $target_0 = $target + 1 | 0;
        var$7[$target] = jl_Character_forDigit((var$1 >>> $pos | 0) & $mask, $radix);
        $pos = $pos - $radixLog2 | 0;
        $target = $target_0;
    }
    return jl_String__init_1($chars);
},
otj_JSObject = $rt_classWithoutFields(0),
otjdx_Node = $rt_classWithoutFields(0),
otjdx_Document = $rt_classWithoutFields(0),
otjde_EventTarget = $rt_classWithoutFields(0),
otjdh_HTMLDocument = $rt_classWithoutFields(),
otjdh_HTMLDocument_current = () => {
    return window.document;
},
otjde_EventListener = $rt_classWithoutFields(0),
igbs_Main$main$lambda$_1_0 = $rt_classWithoutFields(),
igbs_Main$main$lambda$_1_0_handleEvent$exported$0 = (var$1, var$2) => {
    let var$3, var$4, var$5, var$6, var$7, var$8, var$9;
    var$1;
    igbs_Main_$callClinit();
    var$1 = otjdh_HTMLDocument_current();
    var$3 = jl_Integer_parseInt($rt_str(var$1.getElementById("text").value));
    var$4 = igbs_Main_last;
    var$2 = jl_String_valueOf1(jl_Math_abs(var$3));
    var$5 = jl_String_valueOf1(jl_Math_abs(var$4));
    var$6 = $rt_createArray(jl_Object, 1);
    var$6.data[0] = jl_Integer_valueOf(jl_Integer_parseInt(var$2));
    var$2 = jl_String_format($rt_s(13), var$6);
    var$6 = $rt_createArray(jl_Object, 1);
    var$6.data[0] = jl_Integer_valueOf(jl_Integer_parseInt(var$5));
    var$5 = jl_String_format($rt_s(13), var$6);
    var$7 = 0;
    var$8 = 0;
    while (var$8 < 8) {
        if (jl_String_charAt(var$2, var$8) == jl_String_charAt(var$5, var$8))
            var$7 = var$7 + 1 | 0;
        var$8 = var$8 + 1 | 0;
    }
    var$9 = var$1.getElementById("guessinfo");
    var$4 = igbs_Main_last;
    var$8 = igbs_Main_pointsCurrent + var$7 | 0;
    igbs_Main_pointsCurrent = var$8;
    var$1 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$1);
    jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(var$1, $rt_s(14)), var$3), $rt_s(15)), var$4), $rt_s(16)), var$7), $rt_s(17)), var$8);
    var$1 = $rt_ustr(jl_AbstractStringBuilder_toString(var$1));
    var$9.innerText = var$1;
    igbs_Main_startGame();
};
function otji_JSWrapper() {
    jl_Object.call(this);
    this.$js = null;
}
let otji_JSWrapper__init_0 = ($this, $js) => {
    $this.$js = $js;
},
otji_JSWrapper__init_ = var_0 => {
    let var_1 = new otji_JSWrapper();
    otji_JSWrapper__init_0(var_1, var_0);
    return var_1;
},
otji_JSWrapper_wrap = $jsNumber => {
    let $type, $isObject, $wrappers, $existingRef, $existing, $wrapper, $stringWrappers, $stringFinalizationRegistry, $wrapperAsJs, $numberWrappers, $numberFinalizationRegistry;
    if ($jsNumber === null)
        return null;
    $type = $rt_str(typeof $jsNumber);
    $isObject = !jl_String_equals($type, $rt_s(18)) && !jl_String_equals($type, $rt_s(19)) ? 0 : 1;
    otji_JSWrapper$Helper_$callClinit();
    $wrappers = otji_JSWrapper$Helper_wrappers;
    if ($wrappers !== null) {
        if ($isObject) {
            $existingRef = $wrappers.get($jsNumber);
            $existing = (typeof $existingRef == 'undefined' ? 1 : 0) ? void 0 : $existingRef.deref();
            if (!(typeof $existing == 'undefined' ? 1 : 0))
                return $existing;
            $wrapper = otji_JSWrapper__init_($jsNumber);
            $wrappers.set($jsNumber, new WeakRef($wrapper));
            return $wrapper;
        }
        if (jl_String_equals($type, $rt_s(20))) {
            $stringWrappers = otji_JSWrapper$Helper_stringWrappers;
            $stringFinalizationRegistry = otji_JSWrapper$Helper_stringFinalizationRegistry;
            $existingRef = $stringWrappers.get($jsNumber);
            $existing = (typeof $existingRef == 'undefined' ? 1 : 0) ? void 0 : $existingRef.deref();
            if (!(typeof $existing == 'undefined' ? 1 : 0))
                return $existing;
            $wrapper = otji_JSWrapper__init_($jsNumber);
            $wrapperAsJs = $wrapper;
            $stringWrappers.set($jsNumber, new WeakRef($wrapperAsJs));
            otji_JSWrapper_register$js_body$_4($stringFinalizationRegistry, $wrapperAsJs, $jsNumber);
            return $wrapper;
        }
        if (jl_String_equals($type, $rt_s(21))) {
            $numberWrappers = otji_JSWrapper$Helper_numberWrappers;
            $numberFinalizationRegistry = otji_JSWrapper$Helper_numberFinalizationRegistry;
            $existingRef = $numberWrappers.get($jsNumber);
            $existing = (typeof $existingRef == 'undefined' ? 1 : 0) ? void 0 : $existingRef.deref();
            if (!(typeof $existing == 'undefined' ? 1 : 0))
                return $existing;
            $wrapper = otji_JSWrapper__init_($jsNumber);
            $wrapperAsJs = $wrapper;
            $numberWrappers.set($jsNumber, new WeakRef($wrapperAsJs));
            otji_JSWrapper_register$js_body$_4($numberFinalizationRegistry, $wrapperAsJs, $jsNumber);
            return $wrapper;
        }
        if (jl_String_equals($type, $rt_s(22))) {
            $existingRef = otji_JSWrapper$Helper_undefinedWrapper;
            $existing = $existingRef === null ? void 0 : $existingRef.deref();
            if (!(typeof $existing == 'undefined' ? 1 : 0))
                return $existing;
            $wrapper = otji_JSWrapper__init_($jsNumber);
            otji_JSWrapper$Helper_undefinedWrapper = new WeakRef($wrapper);
            return $wrapper;
        }
    }
    return otji_JSWrapper__init_($jsNumber);
},
otji_JSWrapper_unwrap = $o => {
    if ($o === null)
        return null;
    return !($o instanceof otji_JSWrapper) ? $o : $o.$js;
},
otji_JSWrapper_jsToJava = $o => {
    if ($o === null)
        return null;
    return $o instanceof $rt_objcls() ? $o : otji_JSWrapper_wrap($o);
},
otji_JSWrapper_toString = $this => {
    return (typeof $this.$js == 'undefined' ? 1 : 0) ? $rt_s(22) : $rt_str($this.$js.toString());
},
otji_JSWrapper_register$js_body$_4 = (var$1, var$2, var$3) => {
    return var$1.register(var$2, var$3);
},
ju_Comparator = $rt_classWithoutFields(0),
jl_String$_clinit_$lambda$_115_0 = $rt_classWithoutFields(),
jl_Character = $rt_classWithoutFields(),
jl_Character_TYPE = null,
jl_Character_characterCache = null,
jl_Character_isValidCodePoint = var$1 => {
    return var$1 >= 0 && var$1 <= 1114111 ? 1 : 0;
},
jl_Character_highSurrogate = $codePoint => {
    return (55296 | ($codePoint - 65536 | 0) >> 10 & 1023) & 65535;
},
jl_Character_lowSurrogate = $codePoint => {
    return (56320 | $codePoint & 1023) & 65535;
},
jl_Character_forDigit = ($digit, $radix) => {
    if ($radix >= 2 && $radix <= 36 && $digit >= 0 && $digit < $radix)
        return $digit < 10 ? (48 + $digit | 0) & 65535 : ((97 + $digit | 0) - 10 | 0) & 65535;
    return 0;
},
jl_Character__clinit_ = () => {
    jl_Character_TYPE = $rt_cls($rt_charcls);
    jl_Character_characterCache = $rt_createArray(jl_Character, 128);
},
otjf_JSMapping = $rt_classWithoutFields(0);
function igbs_Main$startGame$lambda$_4_0() {
    jl_Object.call(this);
    this.$_0 = null;
}
let igbs_Main$startGame$lambda$_4_0_apply$exported$0 = (var$1, var$2) => {
    var$2 = otji_JSWrapper_jsToJava(var$2);
    var$1 = var$1.$_0;
    igbs_Main_$callClinit();
    var$1 = var$1.getElementById("target");
    var$2 = $rt_ustr(var$2.$toString());
    var$1.innerText = var$2;
    return null;
},
ju_Objects = $rt_classWithoutFields(),
jur_RandomGenerator = $rt_classWithoutFields(0),
ju_Random = $rt_classWithoutFields(),
jl_IndexOutOfBoundsException = $rt_classWithoutFields(jl_RuntimeException),
jl_IllegalArgumentException = $rt_classWithoutFields(jl_RuntimeException),
jl_IllegalArgumentException__init_ = ($this, $message) => {
    jl_RuntimeException__init_($this, $message);
},
jl_IllegalArgumentException__init_0 = var_0 => {
    let var_1 = new jl_IllegalArgumentException();
    jl_IllegalArgumentException__init_(var_1, var_0);
    return var_1;
},
jl_NumberFormatException = $rt_classWithoutFields(jl_IllegalArgumentException),
otjc_JSObjects = $rt_classWithoutFields(),
otji_JSWrapper$Helper = $rt_classWithoutFields(),
otji_JSWrapper$Helper_hashCodes = null,
otji_JSWrapper$Helper_wrappers = null,
otji_JSWrapper$Helper_stringWrappers = null,
otji_JSWrapper$Helper_numberWrappers = null,
otji_JSWrapper$Helper_undefinedWrapper = null,
otji_JSWrapper$Helper_stringFinalizationRegistry = null,
otji_JSWrapper$Helper_numberFinalizationRegistry = null,
otji_JSWrapper$Helper_$callClinit = () => {
    otji_JSWrapper$Helper_$callClinit = $rt_eraseClinit(otji_JSWrapper$Helper);
    otji_JSWrapper$Helper__clinit_();
},
otji_JSWrapper$Helper__clinit_ = () => {
    let var$1;
    otji_JSWrapper$Helper_hashCodes = new WeakMap();
    otji_JSWrapper$Helper_wrappers = !(typeof WeakRef !== 'undefined' ? 1 : 0) ? null : new WeakMap();
    otji_JSWrapper$Helper_stringWrappers = !(typeof WeakRef !== 'undefined' ? 1 : 0) ? null : new Map();
    otji_JSWrapper$Helper_numberWrappers = !(typeof WeakRef !== 'undefined' ? 1 : 0) ? null : new Map();
    if (otji_JSWrapper$Helper_stringWrappers === null)
        var$1 = null;
    else {
        var$1 = new otji_JSWrapper$Helper$_clinit_$lambda$_3_0;
        var$1 = new FinalizationRegistry(otji_JS_function(otji_JSWrapper_unwrap(var$1), "accept"));
    }
    otji_JSWrapper$Helper_stringFinalizationRegistry = var$1;
    if (otji_JSWrapper$Helper_numberWrappers === null)
        var$1 = null;
    else {
        var$1 = new otji_JSWrapper$Helper$_clinit_$lambda$_3_1;
        var$1 = new FinalizationRegistry(otji_JS_function(otji_JSWrapper_unwrap(var$1), "accept"));
    }
    otji_JSWrapper$Helper_numberFinalizationRegistry = var$1;
},
otjc_JSUndefined = $rt_classWithoutFields(),
otjc_JSWeakRef = $rt_classWithoutFields(),
otjc_JSFinalizationRegistryConsumer = $rt_classWithoutFields(0),
otji_JSWrapper$Helper$_clinit_$lambda$_3_0 = $rt_classWithoutFields(),
otji_JSWrapper$Helper$_clinit_$lambda$_3_0_accept$exported$0 = (var$1, var$2) => {
    var$2 = otji_JSWrapper_jsToJava(var$2);
    var$1;
    otji_JSWrapper$Helper_$callClinit();
    var$1 = otji_JSWrapper$Helper_stringWrappers;
    var$2 = otji_JSWrapper_unwrap(var$2);
    var$1.delete(var$2);
},
otji_JSWrapper$Helper$_clinit_$lambda$_3_1 = $rt_classWithoutFields(),
otji_JSWrapper$Helper$_clinit_$lambda$_3_1_accept$exported$0 = (var$1, var$2) => {
    var$2 = otji_JSWrapper_jsToJava(var$2);
    var$1;
    otji_JSWrapper$Helper_$callClinit();
    var$1 = otji_JSWrapper$Helper_numberWrappers;
    var$2 = otji_JSWrapper_unwrap(var$2);
    var$1.delete(var$2);
},
jl_StringIndexOutOfBoundsException = $rt_classWithoutFields(jl_IndexOutOfBoundsException),
jl_Math = $rt_classWithoutFields(),
jl_Math_randomImpl = () => {
    return Math.random();
},
jl_Math_min = ($a, $b) => {
    if ($a < $b)
        $b = $a;
    return $b;
},
jl_Math_max = ($a, $b) => {
    if ($a > $b)
        $b = $a;
    return $b;
},
jl_Math_abs = $n => {
    if ($n < 0)
        $n =  -$n | 0;
    return $n;
},
jl_Math_abs0 = $n => {
    if (Long_lt($n, Long_ZERO))
        $n = Long_neg($n);
    return $n;
},
jl_Math_absImpl = var$1 => {
    return Math.abs(var$1);
},
jl_AutoCloseable = $rt_classWithoutFields(0),
ji_Closeable = $rt_classWithoutFields(0),
ji_Flushable = $rt_classWithoutFields(0);
function ju_Formatter() {
    let a = this; jl_Object.call(a);
    a.$locale1 = null;
    a.$out0 = null;
    a.$ioException = null;
}
let ju_Formatter_requireOpen = $this => {
    let var$1;
    if ($this.$out0 !== null)
        return;
    var$1 = new ju_FormatterClosedException;
    jl_Exception__init_(var$1);
    $rt_throw(var$1);
},
jl_Cloneable = $rt_classWithoutFields(0);
function ju_Locale() {
    let a = this; jl_Object.call(a);
    a.$countryCode = null;
    a.$languageCode = null;
    a.$variantCode = null;
}
let ju_Locale_defaultLocale = null,
ju_Locale_CANADA = null,
ju_Locale_CANADA_FRENCH = null,
ju_Locale_CHINA = null,
ju_Locale_CHINESE = null,
ju_Locale_ENGLISH = null,
ju_Locale_FRANCE = null,
ju_Locale_FRENCH = null,
ju_Locale_GERMAN = null,
ju_Locale_GERMANY = null,
ju_Locale_ITALIAN = null,
ju_Locale_ITALY = null,
ju_Locale_JAPAN = null,
ju_Locale_JAPANESE = null,
ju_Locale_KOREA = null,
ju_Locale_KOREAN = null,
ju_Locale_PRC = null,
ju_Locale_SIMPLIFIED_CHINESE = null,
ju_Locale_TAIWAN = null,
ju_Locale_TRADITIONAL_CHINESE = null,
ju_Locale_UK = null,
ju_Locale_US = null,
ju_Locale_ROOT = null,
ju_Locale_$callClinit = () => {
    ju_Locale_$callClinit = $rt_eraseClinit(ju_Locale);
    ju_Locale__clinit_();
},
ju_Locale__init_2 = ($this, $language, $country) => {
    ju_Locale_$callClinit();
    ju_Locale__init_0($this, $language, $country, $rt_s(2));
},
ju_Locale__init_ = (var_0, var_1) => {
    let var_2 = new ju_Locale();
    ju_Locale__init_2(var_2, var_0, var_1);
    return var_2;
},
ju_Locale__init_0 = ($this, $language, $country, $variant) => {
    ju_Locale_$callClinit();
    if ($language !== null && $country !== null && $variant !== null) {
        if (jl_String_isEmpty($language) && jl_String_isEmpty($country)) {
            $this.$languageCode = $rt_s(2);
            $this.$countryCode = $rt_s(2);
            $this.$variantCode = $variant;
            return;
        }
        $this.$languageCode = $language;
        $this.$countryCode = $country;
        $this.$variantCode = $variant;
        return;
    }
    $language = new jl_NullPointerException;
    jl_Exception__init_($language);
    $rt_throw($language);
},
ju_Locale__init_1 = (var_0, var_1, var_2) => {
    let var_3 = new ju_Locale();
    ju_Locale__init_0(var_3, var_0, var_1, var_2);
    return var_3;
},
ju_Locale_getDefault = () => {
    ju_Locale_$callClinit();
    return ju_Locale_defaultLocale;
},
ju_Locale__clinit_ = () => {
    let $localeName, $countryIndex;
    ju_Locale_CANADA = ju_Locale__init_($rt_s(23), $rt_s(24));
    ju_Locale_CANADA_FRENCH = ju_Locale__init_($rt_s(25), $rt_s(24));
    ju_Locale_CHINA = ju_Locale__init_($rt_s(26), $rt_s(27));
    ju_Locale_CHINESE = ju_Locale__init_($rt_s(26), $rt_s(2));
    ju_Locale_ENGLISH = ju_Locale__init_($rt_s(23), $rt_s(2));
    ju_Locale_FRANCE = ju_Locale__init_($rt_s(25), $rt_s(28));
    ju_Locale_FRENCH = ju_Locale__init_($rt_s(25), $rt_s(2));
    ju_Locale_GERMAN = ju_Locale__init_($rt_s(29), $rt_s(2));
    ju_Locale_GERMANY = ju_Locale__init_($rt_s(29), $rt_s(30));
    ju_Locale_ITALIAN = ju_Locale__init_($rt_s(31), $rt_s(2));
    ju_Locale_ITALY = ju_Locale__init_($rt_s(31), $rt_s(32));
    ju_Locale_JAPAN = ju_Locale__init_($rt_s(33), $rt_s(34));
    ju_Locale_JAPANESE = ju_Locale__init_($rt_s(33), $rt_s(2));
    ju_Locale_KOREA = ju_Locale__init_($rt_s(35), $rt_s(36));
    ju_Locale_KOREAN = ju_Locale__init_($rt_s(35), $rt_s(2));
    ju_Locale_PRC = ju_Locale__init_($rt_s(26), $rt_s(27));
    ju_Locale_SIMPLIFIED_CHINESE = ju_Locale__init_($rt_s(26), $rt_s(27));
    ju_Locale_TAIWAN = ju_Locale__init_($rt_s(26), $rt_s(37));
    ju_Locale_TRADITIONAL_CHINESE = ju_Locale__init_($rt_s(26), $rt_s(37));
    ju_Locale_UK = ju_Locale__init_($rt_s(23), $rt_s(38));
    ju_Locale_US = ju_Locale__init_($rt_s(23), $rt_s(39));
    ju_Locale_ROOT = ju_Locale__init_($rt_s(2), $rt_s(2));
    if (otciu_CLDRHelper_$$metadata$$10 === null)
        otciu_CLDRHelper_$$metadata$$10 = otciu_CLDRHelper_getDefaultLocale$$create();
    $localeName = (otciu_CLDRHelper_$$metadata$$10.value !== null ? $rt_str(otciu_CLDRHelper_$$metadata$$10.value) : null);
    $countryIndex = jl_String_indexOf($localeName, 95, 0);
    ju_Locale_defaultLocale = ju_Locale__init_1(jl_String_substring($localeName, 0, $countryIndex), jl_String_substring0($localeName, $countryIndex + 1 | 0), $rt_s(2));
};
function ju_Formatter$FormatWriter() {
    let a = this; jl_Object.call(a);
    a.$formatter = null;
    a.$out = null;
    a.$locale = null;
    a.$format2 = null;
    a.$args = null;
    a.$index0 = 0;
    a.$formatSpecifierStart = 0;
    a.$defaultArgumentIndex = 0;
    a.$argumentIndex = 0;
    a.$previousArgumentIndex = 0;
    a.$width = 0;
    a.$precision0 = 0;
    a.$flags = 0;
}
let ju_Formatter$FormatWriter__init_ = ($this, $formatter, $out, $locale, $format, $args) => {
    $this.$formatter = $formatter;
    $this.$out = $out;
    $this.$locale = $locale;
    $this.$format2 = $format;
    $this.$args = $args;
},
ju_Formatter$FormatWriter__init_0 = (var_0, var_1, var_2, var_3, var_4) => {
    let var_5 = new ju_Formatter$FormatWriter();
    ju_Formatter$FormatWriter__init_(var_5, var_0, var_1, var_2, var_3, var_4);
    return var_5;
},
ju_Formatter$FormatWriter_write = $this => {
    let $next, var$2, var$3, $specifier, var$5;
    a: while (true) {
        $next = jl_String_indexOf($this.$format2, 37, $this.$index0);
        if ($next < 0) {
            var$2 = $this.$out;
            var$3 = jl_String_substring0($this.$format2, $this.$index0);
            jl_StringBuilder_append1(var$2, var$3);
            return;
        }
        var$2 = $this.$out;
        var$3 = jl_String_substring($this.$format2, $this.$index0, $next);
        jl_StringBuilder_append1(var$2, var$3);
        $next = $next + 1 | 0;
        $this.$index0 = $next;
        $this.$formatSpecifierStart = $next;
        $specifier = ju_Formatter$FormatWriter_parseFormatSpecifier($this);
        if ($this.$flags & 256)
            $this.$argumentIndex = jl_Math_max(0, $this.$previousArgumentIndex);
        if ($this.$argumentIndex == (-1)) {
            var$5 = $this.$defaultArgumentIndex;
            $this.$defaultArgumentIndex = var$5 + 1 | 0;
            $this.$argumentIndex = var$5;
        }
        b: {
            $this.$previousArgumentIndex = $this.$argumentIndex;
            switch ($specifier) {
                case 66:
                    break;
                case 67:
                    ju_Formatter$FormatWriter_formatChar($this, $specifier, 1);
                    break b;
                case 68:
                    ju_Formatter$FormatWriter_formatDecimalInt($this, $specifier, 1);
                    break b;
                case 69:
                case 70:
                case 71:
                case 73:
                case 74:
                case 75:
                case 76:
                case 77:
                case 78:
                case 80:
                case 81:
                case 82:
                case 84:
                case 85:
                case 86:
                case 87:
                case 89:
                case 90:
                case 91:
                case 92:
                case 93:
                case 94:
                case 95:
                case 96:
                case 97:
                case 101:
                case 103:
                case 105:
                case 106:
                case 107:
                case 108:
                case 109:
                case 110:
                case 112:
                case 113:
                case 114:
                case 116:
                case 117:
                case 118:
                case 119:
                    break a;
                case 72:
                    ju_Formatter$FormatWriter_formatHex($this, $specifier, 1);
                    break b;
                case 79:
                    ju_Formatter$FormatWriter_formatRadixInt($this, $specifier, 3, 1);
                    break b;
                case 83:
                    ju_Formatter$FormatWriter_formatString($this, $specifier, 1);
                    break b;
                case 88:
                    ju_Formatter$FormatWriter_formatRadixInt($this, $specifier, 4, 1);
                    break b;
                case 98:
                    ju_Formatter$FormatWriter_formatBoolean($this, $specifier, 0);
                    break b;
                case 99:
                    ju_Formatter$FormatWriter_formatChar($this, $specifier, 0);
                    break b;
                case 100:
                    ju_Formatter$FormatWriter_formatDecimalInt($this, $specifier, 0);
                    break b;
                case 102:
                    ju_Formatter$FormatWriter_formatFloat($this, $specifier, 0);
                    break b;
                case 104:
                    ju_Formatter$FormatWriter_formatHex($this, $specifier, 0);
                    break b;
                case 111:
                    ju_Formatter$FormatWriter_formatRadixInt($this, $specifier, 3, 0);
                    break b;
                case 115:
                    ju_Formatter$FormatWriter_formatString($this, $specifier, 0);
                    break b;
                case 120:
                    ju_Formatter$FormatWriter_formatRadixInt($this, $specifier, 4, 0);
                    break b;
                default:
                    break a;
            }
            ju_Formatter$FormatWriter_formatBoolean($this, $specifier, 1);
        }
    }
    $rt_throw(ju_UnknownFormatConversionException__init_0(jl_String_valueOf($specifier)));
},
ju_Formatter$FormatWriter_formatFloat = ($this, $specifier, $upperCase) => {
    let $decimalSize, $arg, $negative, $format, var$7, var$8, var$9, var$10, var$11, var$12;
    ju_Formatter$FormatWriter_verifyFlags($this, $specifier, 507);
    $decimalSize = $this.$flags;
    if ($decimalSize & 8 && $decimalSize & 16)
        $rt_throw(ju_IllegalFormatFlagsException__init_($rt_s(40)));
    if ($decimalSize & 32 && $decimalSize & 1)
        $rt_throw(ju_IllegalFormatFlagsException__init_($rt_s(41)));
    if ($decimalSize & 1 && $this.$width < 0)
        $rt_throw(ju_MissingFormatWidthException__init_(jl_String_substring($this.$format2, $this.$formatSpecifierStart, $this.$index0)));
    if ($this.$precision0 == (-1))
        $this.$precision0 = 6;
    $arg = $this.$args.data[$this.$argumentIndex];
    if ($arg instanceof jl_Double)
        $negative = $arg.$doubleValue() >= 0.0 ? 0 : 1;
    else if ($arg instanceof jl_Float)
        $negative = $arg.$floatValue() >= 0.0 ? 0 : 1;
    else {
        if (!($arg instanceof jm_BigDecimal))
            $rt_throw(ju_IllegalFormatConversionException__init_($specifier, $arg !== null ? jl_Object_getClass($arg) : null));
        $negative = $arg.$signum() >= 0 ? 0 : 1;
    }
    $format = jt_DecimalFormat__init_(otciu_CLDRHelper_resolveNumberFormat((ju_Locale_getDefault()).$languageCode, (ju_Locale_getDefault()).$countryCode), jt_DecimalFormatSymbols__init_(ju_Locale_getDefault()));
    $format.$symbols = jt_DecimalFormatSymbols_clone(jt_DecimalFormatSymbols__init_($this.$locale));
    $decimalSize = $this.$width;
    if ($decimalSize != (-1)) {
        $specifier = $this.$precision0;
        if ($specifier > 0)
            $decimalSize = $decimalSize - ($specifier + 1 | 0) | 0;
        if ($negative)
            $decimalSize = !($this.$flags & 128) ? $decimalSize + (-1) | 0 : $decimalSize + (-2) | 0;
        else if ($this.$flags & 24)
            $decimalSize = $decimalSize + (-1) | 0;
        if ($this.$flags & 64)
            $decimalSize = $decimalSize - ($decimalSize / ($format.$groupingSize + 1 | 0) | 0) | 0;
        var$7 = $format;
        jt_NumberFormat_setMaximumIntegerDigits(var$7, $decimalSize);
        if ($this.$flags & 32)
            jt_NumberFormat_setMinimumIntegerDigits(var$7, $decimalSize);
    }
    $specifier = $this.$precision0;
    var$7 = $format;
    jt_NumberFormat_setMaximumFractionDigits(var$7, $specifier);
    jt_NumberFormat_setMinimumFractionDigits(var$7, $this.$precision0);
    $specifier = $this.$flags;
    var$7.$groupingUsed = !($specifier & 64) ? 0 : 1;
    if ($specifier & 128) {
        $format.$negativePrefix = jt_DecimalFormat_textToFields($format, $rt_s(42));
        $format.$negativeSuffix = jt_DecimalFormat_textToFields($format, $rt_s(43));
    }
    $specifier = $this.$flags;
    if ($specifier & 8)
        jt_DecimalFormat_setPositivePrefix($format, $rt_s(44));
    else if ($specifier & 16)
        jt_DecimalFormat_setPositivePrefix($format, $rt_s(45));
    var$7 = new jl_StringBuffer;
    jl_AbstractStringBuilder__init_(var$7);
    var$8 = new jt_FieldPosition;
    var$8.$myField = 0;
    $format = $format;
    if ($arg instanceof jm_BigDecimal)
        var$7 = jt_DecimalFormat_format($format, $arg, var$7, var$8);
    else if ($arg instanceof jm_BigInteger) {
        $arg = $arg;
        var$9 = new jm_BigDecimal;
        jm_BigDecimal_$callClinit();
        jm_BigDecimal__init_2(var$9, $arg, 0);
        var$7 = jt_DecimalFormat_format($format, var$9, var$7, var$8);
    } else {
        if (!($arg instanceof jl_Number)) {
            $arg = new jl_IllegalArgumentException;
            jl_Exception__init_($arg);
            $rt_throw($arg);
        }
        $specifier = $arg.$value;
        var$10 = $specifier;
        var$11 = Long_fromInt($specifier);
        if (var$10 !== Long_toNumber(var$11))
            var$7 = jt_DecimalFormat_format0($format, var$10, var$7, var$8);
        else {
            $arg = $format;
            if ($arg.$exponentDigits <= 0) {
                var$12 = jl_Math_abs0(var$11);
                jt_DecimalFormat_formatRegular0($arg, var$12, jt_DecimalFormat_fastLn10($arg, var$12), Long_lt(var$11, Long_ZERO) ? 0 : 1, var$7);
            } else {
                var$12 = jl_Math_abs0(var$11);
                jt_DecimalFormat_formatExponent($arg, var$12, jt_DecimalFormat_fastLn10($arg, var$12), Long_lt(var$11, Long_ZERO) ? 0 : 1, var$7);
            }
        }
    }
    $arg = jl_AbstractStringBuilder_toString(var$7);
    $this.$precision0 = (-1);
    ju_Formatter$FormatWriter_formatGivenString($this, $upperCase, $arg);
},
ju_Formatter$FormatWriter_formatBoolean = ($this, $specifier, $upperCase) => {
    let $arg;
    ju_Formatter$FormatWriter_verifyFlagsForGeneralFormat($this, $specifier);
    $arg = $this.$args.data[$this.$argumentIndex];
    ju_Formatter$FormatWriter_formatGivenString($this, $upperCase, !($arg instanceof jl_Boolean ? $arg.$booleanValue() : $arg === null ? 0 : 1) ? $rt_s(46) : $rt_s(47));
},
ju_Formatter$FormatWriter_formatHex = ($this, $specifier, $upperCase) => {
    let $arg;
    ju_Formatter$FormatWriter_verifyFlagsForGeneralFormat($this, $specifier);
    $arg = $this.$args.data[$this.$argumentIndex];
    ju_Formatter$FormatWriter_formatGivenString($this, $upperCase, $arg === null ? $rt_s(3) : jl_Integer_toHexString($arg.$value));
},
ju_Formatter$FormatWriter_formatString = ($this, $specifier, $upperCase) => {
    let $arg, $flagsToPass;
    ju_Formatter$FormatWriter_verifyFlagsForGeneralFormat($this, $specifier);
    $arg = $this.$args.data[$this.$argumentIndex];
    if (!$rt_isInstance($arg, ju_Formattable))
        ju_Formatter$FormatWriter_formatGivenString($this, $upperCase, jl_String_valueOf0($arg));
    else {
        $flagsToPass = $this.$flags & 7;
        if ($upperCase)
            $flagsToPass = $flagsToPass | 2;
        $arg.$formatTo($this.$formatter, $flagsToPass, $this.$width, $this.$precision0);
    }
},
ju_Formatter$FormatWriter_formatChar = ($this, $specifier, $upperCase) => {
    let $arg, $c, var$5, var$6;
    ju_Formatter$FormatWriter_verifyFlags($this, $specifier, 259);
    $arg = $this.$args.data[$this.$argumentIndex];
    $c = $this.$precision0;
    if ($c >= 0)
        $rt_throw(ju_IllegalFormatPrecisionException__init_($c));
    if ($arg instanceof jl_Character)
        $c = $arg.$charValue();
    else if ($arg instanceof jl_Byte)
        $c = $arg.$byteValue() & 65535;
    else if ($arg instanceof jl_Short)
        $c = $arg.$shortValue() & 65535;
    else {
        if (!($arg instanceof jl_Integer)) {
            if ($arg === null) {
                ju_Formatter$FormatWriter_formatGivenString($this, $upperCase, $rt_s(3));
                return;
            }
            $rt_throw(ju_IllegalFormatConversionException__init_($specifier, jl_Object_getClass($arg)));
        }
        $c = $arg.$value;
        if (!jl_Character_isValidCodePoint($c)) {
            var$5 = new ju_IllegalFormatCodePointException;
            $arg = new jl_StringBuilder;
            jl_AbstractStringBuilder__init_($arg);
            jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append($arg, $rt_s(48)), $c), $rt_s(49));
            jl_RuntimeException__init_(var$5, jl_AbstractStringBuilder_toString($arg));
            var$5.$codePoint = $c;
            $rt_throw(var$5);
        }
    }
    $arg = new jl_String;
    if (!jl_Character_isValidCodePoint($c)) {
        $arg = new jl_IllegalArgumentException;
        jl_Exception__init_($arg);
        $rt_throw($arg);
    }
    if ($c < 65536) {
        var$6 = $rt_createCharArray(1);
        var$6.data[0] = $c & 65535;
    } else
        var$6 = $rt_createCharArrayFromData([jl_Character_highSurrogate($c), jl_Character_lowSurrogate($c)]);
    jl_String__init_0($arg, var$6);
    ju_Formatter$FormatWriter_formatGivenString($this, $upperCase, $arg);
},
ju_Formatter$FormatWriter_formatDecimalInt = ($this, $specifier, $upperCase) => {
    let $arg, $value, $str, $negative, $value_0, var$8, $prev, $sb, $additionalSymbols, var$12, $i, var$14, var$15, var$16, $valueSb, $separator, $size, $i_0;
    ju_Formatter$FormatWriter_verifyFlags($this, $specifier, 507);
    ju_Formatter$FormatWriter_verifyIntFlags($this);
    $arg = $this.$args.data[$this.$argumentIndex];
    if (!($arg instanceof jl_Long)) {
        if (!($arg instanceof jl_Integer) && !($arg instanceof jl_Byte) && !($arg instanceof jl_Short))
            $rt_throw(ju_IllegalFormatConversionException__init_($specifier, $arg === null ? null : jl_Object_getClass($arg)));
        $value = $arg.$value;
        $str = jl_Integer_toString(jl_Math_abs($value));
        $negative = $value >= 0 ? 0 : 1;
    } else {
        $value_0 = $arg.$longValue();
        var$8 = jl_Math_abs0($value_0);
        $str = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_($str);
        $prev = $str.$length0;
        $sb = $str;
        $additionalSymbols = 1;
        if (Long_lt(var$8, Long_ZERO)) {
            $additionalSymbols = 0;
            var$8 = Long_neg(var$8);
        }
        a: {
            if (jl_Long_compareUnsigned(var$8, Long_fromInt(10)) < 0) {
                if ($additionalSymbols)
                    jl_AbstractStringBuilder_insertSpace($sb, $prev, $prev + 1 | 0);
                else {
                    jl_AbstractStringBuilder_insertSpace($sb, $prev, $prev + 2 | 0);
                    var$12 = $sb.$buffer.data;
                    $negative = $prev + 1 | 0;
                    var$12[$prev] = 45;
                    $prev = $negative;
                }
                $sb.$buffer.data[$prev] = jl_Character_forDigit(Long_lo(var$8), 10);
            } else {
                $i = 1;
                var$14 = Long_fromInt(1);
                var$15 = jl_Long_divideUnsigned(Long_fromInt(-1), Long_fromInt(10));
                b: {
                    while (true) {
                        var$16 = Long_mul(var$14, Long_fromInt(10));
                        if (jl_Long_compareUnsigned(var$16, var$8) > 0) {
                            var$16 = var$14;
                            break b;
                        }
                        $i = $i + 1 | 0;
                        if (jl_Long_compareUnsigned(var$16, var$15) > 0)
                            break;
                        var$14 = var$16;
                    }
                }
                if (!$additionalSymbols)
                    $i = $i + 1 | 0;
                jl_AbstractStringBuilder_insertSpace($sb, $prev, $prev + $i | 0);
                if ($additionalSymbols)
                    $negative = $prev;
                else {
                    var$12 = $sb.$buffer.data;
                    $negative = $prev + 1 | 0;
                    var$12[$prev] = 45;
                }
                while (true) {
                    if (Long_eq(var$16, Long_ZERO))
                        break a;
                    var$12 = $sb.$buffer.data;
                    $prev = $negative + 1 | 0;
                    var$12[$negative] = jl_Character_forDigit(Long_lo((jl_Long_divideUnsigned(var$8, var$16))), 10);
                    var$8 = jl_Long_remainderUnsigned(var$8, var$16);
                    var$16 = jl_Long_divideUnsigned(var$16, Long_fromInt(10));
                    $negative = $prev;
                }
            }
        }
        $str = jl_AbstractStringBuilder_toString($str);
        $negative = Long_ge($value_0, Long_ZERO) ? 0 : 1;
    }
    $additionalSymbols = 0;
    $sb = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_($sb);
    if ($negative) {
        if (!($this.$flags & 128)) {
            jl_AbstractStringBuilder_append($sb, 45);
            $additionalSymbols = 1;
        } else {
            jl_AbstractStringBuilder_append($sb, 40);
            $additionalSymbols = 2;
        }
    } else {
        $specifier = $this.$flags;
        if ($specifier & 8) {
            jl_AbstractStringBuilder_append($sb, 43);
            $additionalSymbols = 1;
        } else if ($specifier & 16) {
            jl_AbstractStringBuilder_append($sb, 32);
            $additionalSymbols = 1;
        }
    }
    $valueSb = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_($valueSb);
    if (!($this.$flags & 64))
        jl_AbstractStringBuilder_append0($valueSb, $str);
    else {
        $separator = (jt_DecimalFormatSymbols__init_($this.$locale)).$groupingSeparator;
        $arg = $this.$locale;
        $size = (jt_DecimalFormat__init_(otciu_CLDRHelper_resolveNumberFormat($arg.$languageCode, $arg.$countryCode), jt_DecimalFormatSymbols__init_($arg))).$groupingSize;
        $i = $str.$nativeString.length % $size | 0;
        if (!$i)
            $i = $size;
        $prev = 0;
        while ($i < $str.$nativeString.length) {
            jl_AbstractStringBuilder_append0($valueSb, jl_String_substring($str, $prev, $i));
            jl_AbstractStringBuilder_append($valueSb, $separator);
            $i_0 = $i + $size | 0;
            $prev = $i;
            $i = $i_0;
        }
        jl_AbstractStringBuilder_append0($valueSb, jl_String_substring0($str, $prev));
    }
    c: {
        if ($this.$flags & 32) {
            $i = $valueSb.$length0 + $additionalSymbols | 0;
            while (true) {
                if ($i >= $this.$width)
                    break c;
                jl_AbstractStringBuilder_append($sb, jl_Character_forDigit(0, 10));
                $i = $i + 1 | 0;
            }
        }
    }
    jl_StringBuilder_append1($sb, $valueSb);
    if ($negative && $this.$flags & 128)
        jl_AbstractStringBuilder_append($sb, 41);
    ju_Formatter$FormatWriter_formatGivenString($this, $upperCase, jl_AbstractStringBuilder_toString($sb));
},
ju_Formatter$FormatWriter_formatRadixInt = ($this, $specifier, $radixLog2, $upperCase) => {
    let $arg, var$5, $str, $i, var$8, var$9, var$10, var$11, var$12, $sb, $prefix;
    ju_Formatter$FormatWriter_verifyFlags($this, $specifier, 423);
    ju_Formatter$FormatWriter_verifyIntFlags($this);
    $arg = $this.$args.data[$this.$argumentIndex];
    if ($arg instanceof jl_Long) {
        var$5 = $arg.$longValue();
        if (Long_eq(var$5, Long_ZERO))
            $str = $rt_s(12);
        else {
            $specifier = 1 << $radixLog2;
            $i = $specifier - 1 | 0;
            var$8 = (((64 - jl_Long_numberOfLeadingZeros(var$5) | 0) + $radixLog2 | 0) - 1 | 0) / $radixLog2 | 0;
            var$9 = $rt_createCharArray(var$8);
            var$10 = var$9.data;
            var$8 = $rt_imul(var$8 - 1 | 0, $radixLog2);
            var$11 = 0;
            while (var$8 >= 0) {
                var$12 = var$11 + 1 | 0;
                var$10[var$11] = jl_Character_forDigit(Long_lo(Long_shru(var$5, var$8)) & $i, $specifier);
                var$8 = var$8 - $radixLog2 | 0;
                var$11 = var$12;
            }
            $str = jl_String__init_1(var$9);
        }
    } else if ($arg instanceof jl_Integer)
        $str = otci_IntegerUtil_toUnsignedLogRadixString($arg.$value, $radixLog2);
    else if ($arg instanceof jl_Short)
        $str = otci_IntegerUtil_toUnsignedLogRadixString($arg.$shortValue() & 65535, $radixLog2);
    else {
        if (!($arg instanceof jl_Byte))
            $rt_throw(ju_IllegalFormatConversionException__init_($specifier, $arg === null ? null : jl_Object_getClass($arg)));
        $str = otci_IntegerUtil_toUnsignedLogRadixString($arg.$byteValue() & 255, $radixLog2);
    }
    $sb = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_($sb);
    if ($this.$flags & 4) {
        $prefix = $radixLog2 != 4 ? $rt_s(12) : $rt_s(50);
        $arg = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_($arg);
        jl_StringBuilder_append(jl_StringBuilder_append($arg, $prefix), $str);
        $str = jl_AbstractStringBuilder_toString($arg);
    }
    a: {
        if ($this.$flags & 32) {
            $i = $str.$nativeString.length;
            while (true) {
                if ($i >= $this.$width)
                    break a;
                jl_AbstractStringBuilder_append($sb, jl_Character_forDigit(0, 10));
                $i = $i + 1 | 0;
            }
        }
    }
    jl_AbstractStringBuilder_append0($sb, $str);
    ju_Formatter$FormatWriter_formatGivenString($this, $upperCase, jl_AbstractStringBuilder_toString($sb));
},
ju_Formatter$FormatWriter_verifyIntFlags = $this => {
    let var$1, var$2;
    var$1 = $this.$flags;
    if (var$1 & 8 && var$1 & 16)
        $rt_throw(ju_IllegalFormatFlagsException__init_($rt_s(40)));
    if (var$1 & 32 && var$1 & 1)
        $rt_throw(ju_IllegalFormatFlagsException__init_($rt_s(41)));
    var$2 = $this.$precision0;
    if (var$2 >= 0)
        $rt_throw(ju_IllegalFormatPrecisionException__init_(var$2));
    if (var$1 & 1 && $this.$width < 0)
        $rt_throw(ju_MissingFormatWidthException__init_(jl_String_substring($this.$format2, $this.$formatSpecifierStart, $this.$index0)));
},
ju_Formatter$FormatWriter_formatGivenString = ($this, $upperCase, $str) => {
    let var$3, var$4;
    var$3 = $this.$precision0;
    if (var$3 > 0 && var$3 < $str.$nativeString.length)
        $str = jl_String_substring($str, 0, $this.$precision0);
    if ($upperCase) {
        var$4 = $str.$nativeString.toUpperCase();
        if (var$4 !== $str.$nativeString)
            $str = jl_String__init_(var$4);
    }
    if (!($this.$flags & 1)) {
        ju_Formatter$FormatWriter_mayBeAppendSpaces($this, $str);
        jl_StringBuilder_append1($this.$out, $str);
    } else {
        jl_StringBuilder_append1($this.$out, $str);
        ju_Formatter$FormatWriter_mayBeAppendSpaces($this, $str);
    }
},
ju_Formatter$FormatWriter_verifyFlagsForGeneralFormat = ($this, $conversion) => {
    ju_Formatter$FormatWriter_verifyFlags($this, $conversion, 263);
},
ju_Formatter$FormatWriter_verifyFlags = ($this, $conversion, $mask) => {
    let var$3, var$4, var$5, var$6, var$7;
    var$3 = $this.$flags;
    if ((var$3 | $mask) == $mask)
        return;
    var$4 = new ju_FormatFlagsConversionMismatchException;
    $mask = var$3 & ($mask ^ (-1));
    if (!$mask)
        $mask = 32;
    else {
        var$5 = 0;
        var$3 = $mask << 16;
        if (var$3)
            var$5 = 16;
        else
            var$3 = $mask;
        $mask = var$3 << 8;
        if (!$mask)
            $mask = var$3;
        else
            var$5 = var$5 | 8;
        var$3 = $mask << 4;
        if (!var$3)
            var$3 = $mask;
        else
            var$5 = var$5 | 4;
        $mask = var$3 << 2;
        if (!$mask)
            $mask = var$3;
        else
            var$5 = var$5 | 2;
        if ($mask << 1)
            var$5 = var$5 | 1;
        $mask = (32 - var$5 | 0) - 1 | 0;
    }
    var$6 = jl_String_valueOf(jl_String_charAt($rt_s(51), $mask));
    var$7 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$7);
    jl_AbstractStringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$7, $rt_s(52)), var$6), $rt_s(53)), $conversion);
    jl_RuntimeException__init_(var$4, jl_AbstractStringBuilder_toString(var$7));
    var$4.$flags0 = var$6;
    var$4.$conversion0 = $conversion;
    $rt_throw(var$4);
},
ju_Formatter$FormatWriter_mayBeAppendSpaces = ($this, $str) => {
    let $diff, $sb, $i;
    if ($this.$width > $str.$nativeString.length) {
        $diff = $this.$width - $str.$nativeString.length | 0;
        $sb = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_0($sb, $diff);
        $i = 0;
        while ($i < $diff) {
            jl_AbstractStringBuilder_append($sb, 32);
            $i = $i + 1 | 0;
        }
        jl_StringBuilder_append1($this.$out, $sb);
    }
},
ju_Formatter$FormatWriter_parseFormatSpecifier = $this => {
    let $c, $n, var$3, var$4, var$5, var$6;
    $this.$flags = 0;
    $this.$argumentIndex = (-1);
    $this.$width = (-1);
    $this.$precision0 = (-1);
    $c = jl_String_charAt($this.$format2, $this.$index0);
    if ($c != 48 && ju_Formatter$FormatWriter_isDigit($c)) {
        $n = ju_Formatter$FormatWriter_readInt($this);
        if ($this.$index0 < $this.$format2.$nativeString.length && jl_String_charAt($this.$format2, $this.$index0) == 36) {
            $this.$index0 = $this.$index0 + 1 | 0;
            $this.$argumentIndex = $n - 1 | 0;
        } else
            $this.$width = $n;
    }
    a: {
        b: {
            while (true) {
                if ($this.$index0 >= $this.$format2.$nativeString.length)
                    break a;
                c: {
                    $c = jl_String_charAt($this.$format2, $this.$index0);
                    switch ($c) {
                        case 32:
                            break;
                        case 33:
                        case 34:
                        case 36:
                        case 37:
                        case 38:
                        case 39:
                        case 41:
                        case 42:
                        case 46:
                        case 47:
                        case 49:
                        case 50:
                        case 51:
                        case 52:
                        case 53:
                        case 54:
                        case 55:
                        case 56:
                        case 57:
                        case 58:
                        case 59:
                            break b;
                        case 35:
                            $n = 4;
                            break c;
                        case 40:
                            $n = 128;
                            break c;
                        case 43:
                            $n = 8;
                            break c;
                        case 44:
                            $n = 64;
                            break c;
                        case 45:
                            $n = 1;
                            break c;
                        case 48:
                            $n = 32;
                            break c;
                        case 60:
                            $n = 256;
                            break c;
                        default:
                            break b;
                    }
                    $n = 16;
                }
                var$3 = $this.$flags;
                if (var$3 & $n)
                    break;
                $this.$flags = var$3 | $n;
                $this.$index0 = $this.$index0 + 1 | 0;
            }
            var$4 = new ju_DuplicateFormatFlagsException;
            var$5 = jl_String_valueOf($c);
            var$6 = new jl_StringBuilder;
            jl_AbstractStringBuilder__init_(var$6);
            jl_StringBuilder_append(jl_StringBuilder_append(var$6, $rt_s(54)), var$5);
            jl_RuntimeException__init_(var$4, jl_AbstractStringBuilder_toString(var$6));
            var$4.$flags2 = var$5;
            $rt_throw(var$4);
        }
    }
    if ($this.$width < 0 && $this.$index0 < $this.$format2.$nativeString.length && ju_Formatter$FormatWriter_isDigit(jl_String_charAt($this.$format2, $this.$index0)))
        $this.$width = ju_Formatter$FormatWriter_readInt($this);
    if ($this.$index0 < $this.$format2.$nativeString.length && jl_String_charAt($this.$format2, $this.$index0) == 46) {
        $c = $this.$index0 + 1 | 0;
        $this.$index0 = $c;
        if ($c < $this.$format2.$nativeString.length && ju_Formatter$FormatWriter_isDigit(jl_String_charAt($this.$format2, $this.$index0)))
            $this.$precision0 = ju_Formatter$FormatWriter_readInt($this);
        else
            $rt_throw(ju_UnknownFormatConversionException__init_0(jl_String_valueOf(jl_String_charAt($this.$format2, $this.$index0 - 1 | 0))));
    }
    if ($this.$index0 < $this.$format2.$nativeString.length) {
        var$4 = $this.$format2;
        $n = $this.$index0;
        $this.$index0 = $n + 1 | 0;
        return jl_String_charAt(var$4, $n);
    }
    var$4 = new ju_UnknownFormatConversionException;
    var$5 = $this.$format2;
    ju_UnknownFormatConversionException__init_(var$4, jl_String_valueOf(jl_String_charAt(var$5, var$5.$nativeString.length - 1 | 0)));
    $rt_throw(var$4);
},
ju_Formatter$FormatWriter_readInt = $this => {
    let $result, var$2, var$3, var$4;
    $result = 0;
    while ($this.$index0 < $this.$format2.$nativeString.length && ju_Formatter$FormatWriter_isDigit(jl_String_charAt($this.$format2, $this.$index0))) {
        var$2 = $result * 10 | 0;
        var$3 = $this.$format2;
        var$4 = $this.$index0;
        $this.$index0 = var$4 + 1 | 0;
        $result = var$2 + (jl_String_charAt(var$3, var$4) - 48 | 0) | 0;
    }
    return $result;
},
ju_Formatter$FormatWriter_isDigit = $c => {
    return $c >= 48 && $c <= 57 ? 1 : 0;
},
ji_IOException = $rt_classWithoutFields(jl_Exception),
jl_IllegalStateException = $rt_classWithoutFields(jl_RuntimeException),
ju_FormatterClosedException = $rt_classWithoutFields(jl_IllegalStateException),
otciu_CLDRHelper = $rt_classWithoutFields(),
otciu_CLDRHelper_$$metadata$$0 = null,
otciu_CLDRHelper_$$metadata$$10 = null,
otciu_CLDRHelper_$$metadata$$17 = null,
otciu_CLDRHelper_$$metadata$$20 = null,
otciu_CLDRHelper_$$metadata$$21 = null,
otciu_CLDRHelper_getCode = ($language, $country) => {
    let var$3;
    if (!jl_String_isEmpty($country)) {
        var$3 = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_(var$3);
        $language = jl_StringBuilder_append(var$3, $language);
        jl_AbstractStringBuilder_append($language, 45);
        jl_StringBuilder_append($language, $country);
        $language = jl_AbstractStringBuilder_toString(var$3);
    }
    return $language;
},
otciu_CLDRHelper_resolveNumberFormat = ($language, $country) => {
    let var$3;
    if (otciu_CLDRHelper_$$metadata$$17 === null)
        otciu_CLDRHelper_$$metadata$$17 = otciu_CLDRHelper_getNumberFormatMap$$create();
    var$3 = otciu_CLDRHelper_$$metadata$$17;
    $country = otciu_CLDRHelper_getCode($language, $country);
    return ((var$3.hasOwnProperty($rt_ustr($country)) ? var$3[$rt_ustr($country)] : var$3.hasOwnProperty($rt_ustr($language)) ? var$3[$rt_ustr($language)] : var$3.root).value !== null ? $rt_str((var$3.hasOwnProperty($rt_ustr($country)) ? var$3[$rt_ustr($country)] : var$3.hasOwnProperty($rt_ustr($language)) ? var$3[$rt_ustr($language)] : var$3.root).value) : null);
},
otciu_CLDRHelper_getLikelySubtagsMap$$create = () => {
    return {"ksh": {"value" : "ksh-Latn-DE"}, "ksj": {"value" : "ksj-Latn-ZZ"}, "tdu": {"value" : "tdu-Latn-MY"}, "cch": {"value" : "cch-Latn-NG"}, "und-Khar": {"value" : "pra-Khar-PK"}, "gkn": {"value" : "gkn-Latn-ZZ"}, "ksr": {"value" : "ksr-Latn-ZZ"}, "und-Mani": {"value" : "xmn-Mani-CN"}, "gkp": {"value" : "gkp-Latn-ZZ"}, "xmf": {"value" : "xmf-Geor-GE"}, "ccp": {"value" : "ccp-Cakm-BD"}, "ted": {"value" : "ted-Latn-ZZ"}, "und-Mand": {"value" : "myz-Mand-IR"}, "ktb": {"value" : "ktb-Ethi-ZZ"}, "xmn": {"value"
    : "xmn-Mani-CN"}, "sd-Sind": {"value" : "sd-Sind-IN"}, "xmr": {"value" : "xmr-Merc-SD"}, "tem": {"value" : "tem-Latn-SL"}, "und-Mroo": {"value" : "mro-Mroo-BD"}, "teo": {"value" : "teo-Latn-UG"}, "tet": {"value" : "tet-Latn-TL"}, "ktm": {"value" : "ktm-Latn-ZZ"}, "glk": {"value" : "glk-Arab-IR"}, "kto": {"value" : "kto-Latn-ZZ"}, "ktr": {"value" : "ktr-Latn-MY"}, "und-Soyo": {"value" : "cmg-Soyo-MN"}, "xna": {"value" : "xna-Narb-SA"}, "tfi": {"value" : "tfi-Latn-ZZ"}, "kub": {"value" : "kub-Latn-ZZ"}, "kue":
    {"value" : "kue-Latn-ZZ"}, "kud": {"value" : "kud-Latn-ZZ"}, "xnr": {"value" : "xnr-Deva-IN"}, "ceb": {"value" : "ceb-Latn-PH"}, "kuj": {"value" : "kuj-Latn-ZZ"}, "kum": {"value" : "kum-Cyrl-RU"}, "kun": {"value" : "kun-Latn-ZZ"}, "gmm": {"value" : "gmm-Latn-ZZ"}, "kup": {"value" : "kup-Latn-ZZ"}, "kus": {"value" : "kus-Latn-ZZ"}, "gmv": {"value" : "gmv-Ethi-ZZ"}, "tgc": {"value" : "tgc-Latn-ZZ"}, "xog": {"value" : "xog-Latn-UG"}, "und-Arab-YT": {"value" : "swb-Arab-YT"}, "und-Latn-ET": {"value" : "en-Latn-ET"}
    , "xon": {"value" : "xon-Latn-ZZ"}, "ha-CM": {"value" : "ha-Arab-CM"}, "gnd": {"value" : "gnd-Latn-ZZ"}, "kvg": {"value" : "kvg-Latn-ZZ"}, "tgo": {"value" : "tgo-Latn-ZZ"}, "cfa": {"value" : "cfa-Latn-ZZ"}, "gng": {"value" : "gng-Latn-ZZ"}, "tgu": {"value" : "tgu-Latn-ZZ"}, "und-Latn-GE": {"value" : "ku-Latn-GE"}, "kvr": {"value" : "kvr-Latn-ID"}, "kvx": {"value" : "kvx-Arab-PK"}, "und-Gujr": {"value" : "gu-Gujr-IN"}, "thl": {"value" : "thl-Deva-NP"}, "xpr": {"value" : "xpr-Prti-IR"}, "thq": {"value" : "thq-Deva-NP"}
    , "god": {"value" : "god-Latn-ZZ"}, "gof": {"value" : "gof-Ethi-ZZ"}, "kwj": {"value" : "kwj-Latn-ZZ"}, "ky-Arab": {"value" : "ky-Arab-CN"}, "thr": {"value" : "thr-Deva-NP"}, "goi": {"value" : "goi-Latn-ZZ"}, "cgg": {"value" : "cgg-Latn-UG"}, "kwo": {"value" : "kwo-Latn-ZZ"}, "gom": {"value" : "gom-Deva-IN"}, "kwq": {"value" : "kwq-Latn-ZZ"}, "gon": {"value" : "gon-Telu-IN"}, "gos": {"value" : "gos-Latn-NL"}, "gor": {"value" : "gor-Latn-ID"}, "und-Latn-CY": {"value" : "tr-Latn-CY"}, "got": {"value" : "got-Goth-UA"}
    , "tif": {"value" : "tif-Latn-ZZ"}, "tig": {"value" : "tig-Ethi-ER"}, "kxa": {"value" : "kxa-Latn-ZZ"}, "kxc": {"value" : "kxc-Ethi-ZZ"}, "pag": {"value" : "pag-Latn-PH"}, "tik": {"value" : "tik-Latn-ZZ"}, "kxe": {"value" : "kxe-Latn-ZZ"}, "tim": {"value" : "tim-Latn-ZZ"}, "pal": {"value" : "pal-Phli-IR"}, "tio": {"value" : "tio-Latn-ZZ"}, "pam": {"value" : "pam-Latn-PH"}, "und-Marc": {"value" : "bo-Marc-CN"}, "pap": {"value" : "pap-Latn-AW"}, "und-Latn-CN": {"value" : "za-Latn-CN"}, "tiv": {"value" : "tiv-Latn-NG"}
    , "kxm": {"value" : "kxm-Thai-TH"}, "kxp": {"value" : "kxp-Arab-PK"}, "pau": {"value" : "pau-Latn-PW"}, "chk": {"value" : "chk-Latn-FM"}, "chm": {"value" : "chm-Cyrl-RU"}, "xrb": {"value" : "xrb-Latn-ZZ"}, "chp": {"value" : "chp-Latn-CA"}, "cho": {"value" : "cho-Latn-US"}, "kxw": {"value" : "kxw-Latn-ZZ"}, "und-Latn-DZ": {"value" : "fr-Latn-DZ"}, "chr": {"value" : "chr-Cher-US"}, "kxz": {"value" : "kxz-Latn-ZZ"}, "und-Batk": {"value" : "bbc-Batk-ID"}, "und-Bass": {"value" : "bsq-Bass-LR"}, "kye": {"value"
    : "kye-Latn-ZZ"}, "pbi": {"value" : "pbi-Latn-ZZ"}, "und-Deva-MU": {"value" : "bho-Deva-MU"}, "cic": {"value" : "cic-Latn-US"}, "und-Sgnw": {"value" : "ase-Sgnw-US"}, "xsa": {"value" : "xsa-Sarb-YE"}, "kyx": {"value" : "kyx-Latn-ZZ"}, "xsi": {"value" : "xsi-Latn-ZZ"}, "pcd": {"value" : "pcd-Latn-FR"}, "und-Latn-AM": {"value" : "ku-Latn-AM"}, "xsm": {"value" : "xsm-Latn-ZZ"}, "tkl": {"value" : "tkl-Latn-TK"}, "und-Thai-CN": {"value" : "lcp-Thai-CN"}, "grb": {"value" : "grb-Latn-ZZ"}, "xsr": {"value" : "xsr-Deva-NP"}
    , "und-Latn-AF": {"value" : "tk-Latn-AF"}, "grc": {"value" : "grc-Cprt-CY"}, "kzj": {"value" : "kzj-Latn-MY"}, "tkr": {"value" : "tkr-Latn-AZ"}, "cja": {"value" : "cja-Arab-KH"}, "pcm": {"value" : "pcm-Latn-NG"}, "tkt": {"value" : "tkt-Deva-NP"}, "und-Olck": {"value" : "sat-Olck-IN"}, "kzr": {"value" : "kzr-Latn-ZZ"}, "kzt": {"value" : "kzt-Latn-MY"}, "cjm": {"value" : "cjm-Cham-VN"}, "grt": {"value" : "grt-Beng-IN"}, "und-Arab-TJ": {"value" : "fa-Arab-TJ"}, "und-Arab-TG": {"value" : "apd-Arab-TG"}, "und-Arab-TH":
    {"value" : "mfa-Arab-TH"}, "und-Deva-PK": {"value" : "btv-Deva-PK"}, "grw": {"value" : "grw-Latn-ZZ"}, "cjv": {"value" : "cjv-Latn-ZZ"}, "pdc": {"value" : "pdc-Latn-US"}, "tlf": {"value" : "tlf-Latn-ZZ"}, "und-Arab-TR": {"value" : "az-Arab-TR"}, "ckb": {"value" : "ckb-Arab-IQ"}, "tly": {"value" : "tly-Latn-AZ"}, "pdt": {"value" : "pdt-Latn-CA"}, "tlx": {"value" : "tlx-Latn-ZZ"}, "ckl": {"value" : "ckl-Latn-ZZ"}, "cko": {"value" : "cko-Latn-ZZ"}, "gsw": {"value" : "gsw-Latn-CH"}, "ped": {"value" : "ped-Latn-ZZ"}
    , "tmh": {"value" : "tmh-Latn-NE"}, "cky": {"value" : "cky-Latn-ZZ"}, "kk-Arab": {"value" : "kk-Arab-CN"}, "und-Runr": {"value" : "non-Runr-SE"}, "cla": {"value" : "cla-Latn-ZZ"}, "peo": {"value" : "peo-Xpeo-IR"}, "tmy": {"value" : "tmy-Latn-ZZ"}, "pex": {"value" : "pex-Latn-ZZ"}, "ky-TR": {"value" : "ky-Latn-TR"}, "tnh": {"value" : "tnh-Latn-ZZ"}, "guc": {"value" : "guc-Latn-CO"}, "gub": {"value" : "gub-Latn-BR"}, "gud": {"value" : "gud-Latn-ZZ"}, "pfl": {"value" : "pfl-Latn-DE"}, "cme": {"value" : "cme-Latn-ZZ"}
    , "cmg": {"value" : "cmg-Soyo-MN"}, "gur": {"value" : "gur-Latn-GH"}, "xwe": {"value" : "xwe-Latn-ZZ"}, "guw": {"value" : "guw-Latn-ZZ"}, "tof": {"value" : "tof-Latn-ZZ"}, "gux": {"value" : "gux-Latn-ZZ"}, "guz": {"value" : "guz-Latn-KE"}, "tog": {"value" : "tog-Latn-MW"}, "gvf": {"value" : "gvf-Latn-ZZ"}, "toq": {"value" : "toq-Latn-ZZ"}, "gvr": {"value" : "gvr-Deva-NP"}, "und-Guru": {"value" : "pa-Guru-IN"}, "gvs": {"value" : "gvs-Latn-ZZ"}, "tpi": {"value" : "tpi-Latn-PG"}, "tpm": {"value" : "tpm-Latn-ZZ"}
    , "und-Tfng": {"value" : "zgh-Tfng-MA"}, "gwc": {"value" : "gwc-Arab-ZZ"}, "und-Arab-PK": {"value" : "ur-Arab-PK"}, "phl": {"value" : "phl-Arab-ZZ"}, "und-Aghb": {"value" : "lez-Aghb-RU"}, "phn": {"value" : "phn-Phnx-LB"}, "gwi": {"value" : "gwi-Latn-CA"}, "tpz": {"value" : "tpz-Latn-ZZ"}, "cop": {"value" : "cop-Copt-EG"}, "gwt": {"value" : "gwt-Arab-ZZ"}, "lab": {"value" : "lab-Lina-GR"}, "lad": {"value" : "lad-Hebr-IL"}, "lah": {"value" : "lah-Arab-PK"}, "pil": {"value" : "pil-Latn-ZZ"}, "lag": {"value"
    : "lag-Latn-TZ"}, "tqo": {"value" : "tqo-Latn-ZZ"}, "laj": {"value" : "laj-Latn-UG"}, "pip": {"value" : "pip-Latn-ZZ"}, "und-Khmr": {"value" : "km-Khmr-KH"}, "las": {"value" : "las-Latn-ZZ"}, "sd-Deva": {"value" : "sd-Deva-IN"}, "und-Khoj": {"value" : "sd-Khoj-IN"}, "cps": {"value" : "cps-Latn-PH"}, "kk-AF": {"value" : "kk-Arab-AF"}, "und-Arab-MU": {"value" : "ur-Arab-MU"}, "lbe": {"value" : "lbe-Cyrl-RU"}, "und-Arab-NG": {"value" : "ha-Arab-NG"}, "gyi": {"value" : "gyi-Latn-ZZ"}, "tru": {"value" : "tru-Latn-TR"}
    , "trw": {"value" : "trw-Arab-ZZ"}, "trv": {"value" : "trv-Latn-TW"}, "lbu": {"value" : "lbu-Latn-ZZ"}, "lbw": {"value" : "lbw-Latn-ID"}, "tsd": {"value" : "tsd-Grek-GR"}, "tsf": {"value" : "tsf-Deva-NP"}, "pka": {"value" : "pka-Brah-IN"}, "tsg": {"value" : "tsg-Latn-PH"}, "tsj": {"value" : "tsj-Tibt-BT"}, "und-Deva-FJ": {"value" : "hif-Deva-FJ"}, "pko": {"value" : "pko-Latn-KE"}, "lcm": {"value" : "lcm-Latn-ZZ"}, "crh": {"value" : "crh-Cyrl-UA"}, "lcp": {"value" : "lcp-Thai-CN"}, "tsw": {"value" : "tsw-Latn-ZZ"}
    , "crj": {"value" : "crj-Cans-CA"}, "crl": {"value" : "crl-Cans-CA"}, "und-Arab-MN": {"value" : "kk-Arab-MN"}, "crk": {"value" : "crk-Cans-CA"}, "crm": {"value" : "crm-Cans-CA"}, "und-Arab-MM": {"value" : "rhg-Arab-MM"}, "pla": {"value" : "pla-Latn-ZZ"}, "tte": {"value" : "tte-Latn-ZZ"}, "crs": {"value" : "crs-Latn-SC"}, "ttd": {"value" : "ttd-Latn-ZZ"}, "ldb": {"value" : "ldb-Latn-ZZ"}, "ttj": {"value" : "ttj-Latn-UG"}, "kk-CN": {"value" : "kk-Arab-CN"}, "und-Yiii": {"value" : "ii-Yiii-CN"}, "tts": {"value"
    : "tts-Thai-TH"}, "csb": {"value" : "csb-Latn-PL"}, "ttr": {"value" : "ttr-Latn-ZZ"}, "ttt": {"value" : "ttt-Latn-AZ"}, "csw": {"value" : "csw-Cans-CA"}, "tuh": {"value" : "tuh-Latn-ZZ"}, "led": {"value" : "led-Latn-ZZ"}, "tul": {"value" : "tul-Latn-ZZ"}, "lee": {"value" : "lee-Latn-ZZ"}, "tum": {"value" : "tum-Latn-MW"}, "und-Arab-KH": {"value" : "cja-Arab-KH"}, "tuq": {"value" : "tuq-Latn-ZZ"}, "ctd": {"value" : "ctd-Pauc-MM"}, "lem": {"value" : "lem-Latn-ZZ"}, "lep": {"value" : "lep-Lepc-IN"}, "pms":
    {"value" : "pms-Latn-IT"}, "leq": {"value" : "leq-Latn-ZZ"}, "und-Pauc": {"value" : "ctd-Pauc-MM"}, "und-Sogo": {"value" : "sog-Sogo-UZ"}, "leu": {"value" : "leu-Latn-ZZ"}, "lez": {"value" : "lez-Cyrl-RU"}, "tvd": {"value" : "tvd-Latn-ZZ"}, "mn-CN": {"value" : "mn-Mong-CN"}, "sr-TR": {"value" : "sr-Latn-TR"}, "png": {"value" : "png-Latn-ZZ"}, "tvl": {"value" : "tvl-Latn-TV"}, "und-Brah": {"value" : "pka-Brah-IN"}, "und-Brai": {"value" : "fr-Brai-FR"}, "pnn": {"value" : "pnn-Latn-ZZ"}, "tvu": {"value" : "tvu-Latn-ZZ"}
    , "pnt": {"value" : "pnt-Grek-GR"}, "uz-CN": {"value" : "uz-Cyrl-CN"}, "ha-SD": {"value" : "ha-Arab-SD"}, "twh": {"value" : "twh-Latn-ZZ"}, "und-Takr": {"value" : "doi-Takr-IN"}, "lgg": {"value" : "lgg-Latn-ZZ"}, "pon": {"value" : "pon-Latn-FM"}, "twq": {"value" : "twq-Latn-NE"}, "und-Arab-ID": {"value" : "ms-Arab-ID"}, "und-Arab-IN": {"value" : "ur-Arab-IN"}, "ppa": {"value" : "ppa-Deva-IN"}, "txg": {"value" : "txg-Tang-CN"}, "yam": {"value" : "yam-Latn-ZZ"}, "und-Talu": {"value" : "khb-Talu-CN"}, "yao":
    {"value" : "yao-Latn-MZ"}, "yap": {"value" : "yap-Latn-FM"}, "yas": {"value" : "yas-Latn-ZZ"}, "yat": {"value" : "yat-Latn-ZZ"}, "ppo": {"value" : "ppo-Latn-ZZ"}, "yav": {"value" : "yav-Latn-CM"}, "yay": {"value" : "yay-Latn-ZZ"}, "yaz": {"value" : "yaz-Latn-ZZ"}, "und-Tale": {"value" : "tdd-Tale-CN"}, "ybb": {"value" : "ybb-Latn-CM"}, "yba": {"value" : "yba-Latn-ZZ"}, "tya": {"value" : "tya-Latn-ZZ"}, "lia": {"value" : "lia-Latn-ZZ"}, "lid": {"value" : "lid-Latn-ZZ"}, "und-Latn-TW": {"value" : "trv-Latn-TW"}
    , "lif": {"value" : "lif-Deva-NP"}, "lih": {"value" : "lih-Latn-ZZ"}, "lig": {"value" : "lig-Latn-ZZ"}, "lij": {"value" : "lij-Latn-IT"}, "hag": {"value" : "hag-Latn-ZZ"}, "und-Latn-TN": {"value" : "fr-Latn-TN"}, "tyv": {"value" : "tyv-Cyrl-RU"}, "yby": {"value" : "yby-Latn-ZZ"}, "und-Arab-GB": {"value" : "ks-Arab-GB"}, "hak": {"value" : "hak-Hans-CN"}, "und-Taml": {"value" : "ta-Taml-IN"}, "ham": {"value" : "ham-Latn-ZZ"}, "lis": {"value" : "lis-Lisu-CN"}, "und-Latn-SY": {"value" : "fr-Latn-SY"}, "ky-Latn":
    {"value" : "ky-Latn-TR"}, "pra": {"value" : "pra-Khar-PK"}, "haw": {"value" : "haw-Latn-US"}, "haz": {"value" : "haz-Arab-AF"}, "ku-LB": {"value" : "ku-Arab-LB"}, "prd": {"value" : "prd-Arab-IR"}, "prg": {"value" : "prg-Latn-001"}, "tzm": {"value" : "tzm-Latn-MA"}, "hbb": {"value" : "hbb-Latn-ZZ"}, "und-Latn-UA": {"value" : "pl-Latn-UA"}, "ljp": {"value" : "ljp-Latn-ID"}, "und-Tang": {"value" : "txg-Tang-CN"}, "yue-Hans": {"value" : "yue-Hans-CN"}, "und-Latn-RU": {"value" : "krl-Latn-RU"}, "lki": {"value"
    : "lki-Arab-IR"}, "pss": {"value" : "pss-Latn-ZZ"}, "lkt": {"value" : "lkt-Latn-US"}, "sr-RO": {"value" : "sr-Latn-RO"}, "und-Arab-CN": {"value" : "ug-Arab-CN"}, "lle": {"value" : "lle-Latn-ZZ"}, "und-Cyrl": {"value" : "ru-Cyrl-RU"}, "uz-AF": {"value" : "uz-Arab-AF"}, "yer": {"value" : "yer-Latn-ZZ"}, "und-Beng": {"value" : "bn-Beng-BD"}, "ptp": {"value" : "ptp-Latn-ZZ"}, "lln": {"value" : "lln-Latn-ZZ"}, "sr-RU": {"value" : "sr-Latn-RU"}, "hdy": {"value" : "hdy-Ethi-ZZ"}, "unr-NP": {"value" : "unr-Deva-NP"}
    , "und-Mend": {"value" : "men-Mend-SL"}, "lmn": {"value" : "lmn-Telu-IN"}, "lmp": {"value" : "lmp-Latn-ZZ"}, "lmo": {"value" : "lmo-Latn-IT"}, "puu": {"value" : "puu-Latn-GA"}, "und-Arab-CC": {"value" : "ms-Arab-CC"}, "pal-Phlp": {"value" : "pal-Phlp-CN"}, "ygr": {"value" : "ygr-Latn-ZZ"}, "ygw": {"value" : "ygw-Latn-ZZ"}, "lns": {"value" : "lns-Latn-ZZ"}, "ky-CN": {"value" : "ky-Arab-CN"}, "lnu": {"value" : "lnu-Latn-ZZ"}, "pwa": {"value" : "pwa-Latn-ZZ"}, "und-Chrs": {"value" : "xco-Chrs-UZ"}, "und-Mahj":
    {"value" : "hi-Mahj-IN"}, "rif-NL": {"value" : "rif-Latn-NL"}, "loj": {"value" : "loj-Latn-ZZ"}, "lol": {"value" : "lol-Latn-CD"}, "lok": {"value" : "lok-Latn-ZZ"}, "lor": {"value" : "lor-Latn-ZZ"}, "und-Sora": {"value" : "srb-Sora-IN"}, "los": {"value" : "los-Latn-ZZ"}, "loz": {"value" : "loz-Latn-ZM"}, "und-202": {"value" : "en-Latn-NG"}, "und-Latn-MR": {"value" : "fr-Latn-MR"}, "ku-Yezi": {"value" : "ku-Yezi-GE"}, "hhy": {"value" : "hhy-Latn-ZZ"}, "hia": {"value" : "hia-Latn-ZZ"}, "hif": {"value" : "hif-Latn-FJ"}
    , "dad": {"value" : "dad-Latn-ZZ"}, "hih": {"value" : "hih-Latn-ZZ"}, "hig": {"value" : "hig-Latn-ZZ"}, "daf": {"value" : "daf-Latn-ZZ"}, "ubu": {"value" : "ubu-Latn-ZZ"}, "dah": {"value" : "dah-Latn-ZZ"}, "hil": {"value" : "hil-Latn-PH"}, "dag": {"value" : "dag-Latn-ZZ"}, "und-Mero": {"value" : "xmr-Mero-SD"}, "dak": {"value" : "dak-Latn-US"}, "und-Merc": {"value" : "xmr-Merc-SD"}, "dar": {"value" : "dar-Cyrl-RU"}, "dav": {"value" : "dav-Latn-KE"}, "lrc": {"value" : "lrc-Arab-IR"}, "yko": {"value" : "yko-Latn-ZZ"}
    , "und-Latn-MK": {"value" : "sq-Latn-MK"}, "und-Latn-MM": {"value" : "kac-Latn-MM"}, "dbd": {"value" : "dbd-Latn-ZZ"}, "und-Latn-MO": {"value" : "pt-Latn-MO"}, "und-Latn-MA": {"value" : "fr-Latn-MA"}, "und-Bali": {"value" : "ban-Bali-ID"}, "und-Tavt": {"value" : "blt-Tavt-VN"}, "dbq": {"value" : "dbq-Latn-ZZ"}, "yle": {"value" : "yle-Latn-ZZ"}, "ylg": {"value" : "ylg-Latn-ZZ"}, "und-Maka": {"value" : "mak-Maka-ID"}, "yll": {"value" : "yll-Latn-ZZ"}, "udm": {"value" : "udm-Cyrl-RU"}, "dcc": {"value" : "dcc-Arab-IN"}
    , "yml": {"value" : "yml-Latn-ZZ"}, "hla": {"value" : "hla-Latn-ZZ"}, "und-Latn-IR": {"value" : "tk-Latn-IR"}, "ltg": {"value" : "ltg-Latn-LV"}, "und-Latn-KM": {"value" : "fr-Latn-KM"}, "ddn": {"value" : "ddn-Latn-ZZ"}, "hlu": {"value" : "hlu-Hluw-TR"}, "lua": {"value" : "lua-Latn-CD"}, "und-Bamu": {"value" : "bax-Bamu-CM"}, "hmd": {"value" : "hmd-Plrd-CN"}, "ded": {"value" : "ded-Latn-ZZ"}, "luo": {"value" : "luo-Latn-KE"}, "und-142": {"value" : "zh-Hans-CN"}, "und-143": {"value" : "uz-Latn-UZ"}, "den":
    {"value" : "den-Latn-CA"}, "und-Gran": {"value" : "sa-Gran-IN"}, "hmt": {"value" : "hmt-Latn-ZZ"}, "uga": {"value" : "uga-Ugar-SY"}, "luz": {"value" : "luz-Arab-IR"}, "luy": {"value" : "luy-Latn-KE"}, "und-145": {"value" : "ar-Arab-SA"}, "und-Cakm": {"value" : "ccp-Cakm-BD"}, "und-Dupl": {"value" : "fr-Dupl-FR"}, "yon": {"value" : "yon-Latn-ZZ"}, "ug-MN": {"value" : "ug-Cyrl-MN"}, "hne": {"value" : "hne-Deva-IN"}, "hnd": {"value" : "hnd-Arab-PK"}, "hnj": {"value" : "hnj-Hmng-LA"}, "hno": {"value" : "hno-Arab-PK"}
    , "hnn": {"value" : "hnn-Latn-PH"}, "ug-KZ": {"value" : "ug-Cyrl-KZ"}, "und-154": {"value" : "en-Latn-GB"}, "und-155": {"value" : "de-Latn-DE"}, "und-150": {"value" : "ru-Cyrl-RU"}, "und-151": {"value" : "ru-Cyrl-RU"}, "und-Sylo": {"value" : "syl-Sylo-BD"}, "hoc": {"value" : "hoc-Deva-IN"}, "dga": {"value" : "dga-Latn-ZZ"}, "lwl": {"value" : "lwl-Thai-TH"}, "und-Ital": {"value" : "ett-Ital-IT"}, "hoj": {"value" : "hoj-Deva-IN"}, "dgh": {"value" : "dgh-Latn-ZZ"}, "dgi": {"value" : "dgi-Latn-ZZ"}, "dgl": {"value"
    : "dgl-Arab-ZZ"}, "hot": {"value" : "hot-Latn-ZZ"}, "dgr": {"value" : "dgr-Latn-CA"}, "dgz": {"value" : "dgz-Latn-ZZ"}, "yrb": {"value" : "yrb-Latn-ZZ"}, "yre": {"value" : "yre-Latn-ZZ"}, "und-Lyci": {"value" : "xlc-Lyci-TR"}, "und-Cans": {"value" : "cr-Cans-CA"}, "und-Hluw": {"value" : "hlu-Hluw-TR"}, "und-Nand": {"value" : "sa-Nand-IN"}, "yrl": {"value" : "yrl-Latn-BR"}, "dia": {"value" : "dia-Latn-ZZ"}, "und-Grek": {"value" : "el-Grek-GR"}, "und-Mong": {"value" : "mn-Mong-CN"}, "und-Lydi": {"value" :
    "xld-Lydi-TR"}, "yss": {"value" : "yss-Latn-ZZ"}, "und-Newa": {"value" : "new-Newa-NP"}, "lzh": {"value" : "lzh-Hans-CN"}, "dje": {"value" : "dje-Latn-NE"}, "lzz": {"value" : "lzz-Latn-TR"}, "uli": {"value" : "uli-Latn-FM"}, "hsb": {"value" : "hsb-Latn-DE"}, "und-Xsux": {"value" : "akk-Xsux-IQ"}, "hsn": {"value" : "hsn-Hans-CN"}, "und-Cari": {"value" : "xcr-Cari-TR"}, "und-Syrc": {"value" : "syr-Syrc-IQ"}, "yua": {"value" : "yua-Latn-MX"}, "yue": {"value" : "yue-Hant-HK"}, "umb": {"value" : "umb-Latn-AO"}
    , "yuj": {"value" : "yuj-Latn-ZZ"}, "yut": {"value" : "yut-Latn-ZZ"}, "yuw": {"value" : "yuw-Latn-ZZ"}, "und-Bopo": {"value" : "zh-Bopo-TW"}, "und-Yezi": {"value" : "ku-Yezi-GE"}, "und": {"value" : "en-Latn-US"}, "und-Egyp": {"value" : "egy-Egyp-EG"}, "und-Tglg": {"value" : "fil-Tglg-PH"}, "unr": {"value" : "unr-Beng-IN"}, "hui": {"value" : "hui-Latn-ZZ"}, "und-Elba": {"value" : "sq-Elba-AL"}, "unx": {"value" : "unx-Beng-IN"}, "und-Narb": {"value" : "xna-Narb-SA"}, "pa-PK": {"value" : "pa-Arab-PK"}, "und-Hebr-CA":
    {"value" : "yi-Hebr-CA"}, "uok": {"value" : "uok-Latn-ZZ"}, "und-Geor": {"value" : "ka-Geor-GE"}, "und-Shrd": {"value" : "sa-Shrd-IN"}, "dnj": {"value" : "dnj-Latn-CI"}, "und-Diak": {"value" : "dv-Diak-MV"}, "dob": {"value" : "dob-Latn-ZZ"}, "und-Mymr-TH": {"value" : "mnw-Mymr-TH"}, "doi": {"value" : "doi-Arab-IN"}, "dop": {"value" : "dop-Latn-ZZ"}, "und-Sund": {"value" : "su-Sund-ID"}, "dow": {"value" : "dow-Latn-ZZ"}, "sr-ME": {"value" : "sr-Latn-ME"}, "und-Hung": {"value" : "hu-Hung-HU"}, "mad": {"value"
    : "mad-Latn-ID"}, "mag": {"value" : "mag-Deva-IN"}, "maf": {"value" : "maf-Latn-CM"}, "mai": {"value" : "mai-Deva-IN"}, "mak": {"value" : "mak-Latn-ID"}, "man": {"value" : "man-Latn-GM"}, "mas": {"value" : "mas-Latn-KE"}, "maw": {"value" : "maw-Latn-ZZ"}, "maz": {"value" : "maz-Latn-MX"}, "uri": {"value" : "uri-Latn-ZZ"}, "mbh": {"value" : "mbh-Latn-ZZ"}, "urt": {"value" : "urt-Latn-ZZ"}, "mbo": {"value" : "mbo-Latn-ZZ"}, "urw": {"value" : "urw-Latn-ZZ"}, "mbq": {"value" : "mbq-Latn-ZZ"}, "mbu": {"value"
    : "mbu-Latn-ZZ"}, "und-Hebr-GB": {"value" : "yi-Hebr-GB"}, "usa": {"value" : "usa-Latn-ZZ"}, "mbw": {"value" : "mbw-Latn-ZZ"}, "mci": {"value" : "mci-Latn-ZZ"}, "dri": {"value" : "dri-Latn-ZZ"}, "mcq": {"value" : "mcq-Latn-ZZ"}, "drh": {"value" : "drh-Mong-CN"}, "mcp": {"value" : "mcp-Latn-ZZ"}, "mcr": {"value" : "mcr-Latn-ZZ"}, "mcu": {"value" : "mcu-Latn-ZZ"}, "drs": {"value" : "drs-Ethi-ZZ"}, "mda": {"value" : "mda-Latn-ZZ"}, "mdf": {"value" : "mdf-Cyrl-RU"}, "mde": {"value" : "mde-Arab-ZZ"}, "mdh": {"value"
    : "mdh-Latn-PH"}, "dsb": {"value" : "dsb-Latn-DE"}, "mdj": {"value" : "mdj-Latn-ZZ"}, "utr": {"value" : "utr-Latn-ZZ"}, "mdr": {"value" : "mdr-Latn-ID"}, "mdx": {"value" : "mdx-Ethi-ZZ"}, "mee": {"value" : "mee-Latn-ZZ"}, "med": {"value" : "med-Latn-ZZ"}, "mek": {"value" : "mek-Latn-ZZ"}, "men": {"value" : "men-Latn-SL"}, "az-RU": {"value" : "az-Cyrl-RU"}, "mis-Medf": {"value" : "mis-Medf-NG"}, "mer": {"value" : "mer-Latn-KE"}, "dtm": {"value" : "dtm-Latn-ML"}, "meu": {"value" : "meu-Latn-ZZ"}, "met": {"value"
    : "met-Latn-ZZ"}, "dtp": {"value" : "dtp-Latn-MY"}, "dts": {"value" : "dts-Latn-ZZ"}, "uvh": {"value" : "uvh-Latn-ZZ"}, "dty": {"value" : "dty-Deva-NP"}, "mfa": {"value" : "mfa-Arab-TH"}, "uvl": {"value" : "uvl-Latn-ZZ"}, "mfe": {"value" : "mfe-Latn-MU"}, "dua": {"value" : "dua-Latn-CM"}, "dud": {"value" : "dud-Latn-ZZ"}, "duc": {"value" : "duc-Latn-ZZ"}, "mfn": {"value" : "mfn-Latn-ZZ"}, "dug": {"value" : "dug-Latn-ZZ"}, "mfo": {"value" : "mfo-Latn-ZZ"}, "mfq": {"value" : "mfq-Latn-ZZ"}, "und-Phag": {"value"
    : "lzh-Phag-CN"}, "dva": {"value" : "dva-Latn-ZZ"}, "mgh": {"value" : "mgh-Latn-MZ"}, "mgl": {"value" : "mgl-Latn-ZZ"}, "mgo": {"value" : "mgo-Latn-CM"}, "mgp": {"value" : "mgp-Deva-NP"}, "mgy": {"value" : "mgy-Latn-TZ"}, "zag": {"value" : "zag-Latn-SD"}, "mhi": {"value" : "mhi-Latn-ZZ"}, "mhl": {"value" : "mhl-Latn-ZZ"}, "dww": {"value" : "dww-Latn-ZZ"}, "mif": {"value" : "mif-Latn-ZZ"}, "und-Mymr-IN": {"value" : "kht-Mymr-IN"}, "min": {"value" : "min-Latn-ID"}, "mis": {"value" : "mis-Hatr-IQ"}, "ian":
    {"value" : "ian-Latn-ZZ"}, "miw": {"value" : "miw-Latn-ZZ"}, "iar": {"value" : "iar-Latn-ZZ"}, "uz-Arab": {"value" : "uz-Arab-AF"}, "ibb": {"value" : "ibb-Latn-NG"}, "iba": {"value" : "iba-Latn-MY"}, "dyo": {"value" : "dyo-Latn-SN"}, "dyu": {"value" : "dyu-Latn-BF"}, "iby": {"value" : "iby-Latn-ZZ"}, "zdj": {"value" : "zdj-Arab-KM"}, "ica": {"value" : "ica-Latn-ZZ"}, "mki": {"value" : "mki-Arab-ZZ"}, "und-Wcho": {"value" : "nnp-Wcho-IN"}, "ich": {"value" : "ich-Latn-ZZ"}, "mkl": {"value" : "mkl-Latn-ZZ"}
    , "dzg": {"value" : "dzg-Latn-ZZ"}, "mkp": {"value" : "mkp-Latn-ZZ"}, "zea": {"value" : "zea-Latn-NL"}, "mkw": {"value" : "mkw-Latn-ZZ"}, "mle": {"value" : "mle-Latn-ZZ"}, "idd": {"value" : "idd-Latn-ZZ"}, "idi": {"value" : "idi-Latn-ZZ"}, "lif-Limb": {"value" : "lif-Limb-IN"}, "mlp": {"value" : "mlp-Latn-ZZ"}, "mls": {"value" : "mls-Latn-SD"}, "idu": {"value" : "idu-Latn-ZZ"}, "quc": {"value" : "quc-Latn-GT"}, "qug": {"value" : "qug-Latn-EC"}, "und-Jamo": {"value" : "ko-Jamo-KR"}, "mmo": {"value" : "mmo-Latn-ZZ"}
    , "mmu": {"value" : "mmu-Latn-ZZ"}, "mmx": {"value" : "mmx-Latn-ZZ"}, "zgh": {"value" : "zgh-Tfng-MA"}, "mna": {"value" : "mna-Latn-ZZ"}, "mnf": {"value" : "mnf-Latn-ZZ"}, "ife": {"value" : "ife-Latn-TG"}, "mni": {"value" : "mni-Beng-IN"}, "mnw": {"value" : "mnw-Mymr-MM"}, "moa": {"value" : "moa-Latn-ZZ"}, "moe": {"value" : "moe-Latn-CA"}, "igb": {"value" : "igb-Latn-ZZ"}, "ige": {"value" : "ige-Latn-ZZ"}, "moh": {"value" : "moh-Latn-CA"}, "und-Hebr-SE": {"value" : "yi-Hebr-SE"}, "zhx": {"value" : "zhx-Nshu-CN"}
    , "mos": {"value" : "mos-Latn-BF"}, "und-Shaw": {"value" : "en-Shaw-GB"}, "zia": {"value" : "zia-Latn-ZZ"}, "mox": {"value" : "mox-Latn-ZZ"}, "vag": {"value" : "vag-Latn-ZZ"}, "vai": {"value" : "vai-Vaii-LR"}, "van": {"value" : "van-Latn-ZZ"}, "mpp": {"value" : "mpp-Latn-ZZ"}, "mpt": {"value" : "mpt-Latn-ZZ"}, "mps": {"value" : "mps-Latn-ZZ"}, "mpx": {"value" : "mpx-Latn-ZZ"}, "und-Hebr-US": {"value" : "yi-Hebr-US"}, "hi-Latn": {"value" : "hi-Latn-IN"}, "mql": {"value" : "mql-Latn-ZZ"}, "und-Hebr-UA": {"value"
    : "yi-Hebr-UA"}, "mrd": {"value" : "mrd-Deva-NP"}, "zkt": {"value" : "zkt-Kits-CN"}, "mrj": {"value" : "mrj-Cyrl-RU"}, "ijj": {"value" : "ijj-Latn-ZZ"}, "mro": {"value" : "mro-Mroo-BD"}, "und-Modi": {"value" : "mr-Modi-IN"}, "ebu": {"value" : "ebu-Latn-KE"}, "zlm": {"value" : "zlm-Latn-TG"}, "arc-Palm": {"value" : "arc-Palm-SY"}, "ikk": {"value" : "ikk-Latn-ZZ"}, "ikt": {"value" : "ikt-Latn-CA"}, "ikw": {"value" : "ikw-Latn-ZZ"}, "vec": {"value" : "vec-Latn-IT"}, "ikx": {"value" : "ikx-Latn-ZZ"}, "zmi":
    {"value" : "zmi-Latn-MY"}, "mtc": {"value" : "mtc-Latn-ZZ"}, "mtf": {"value" : "mtf-Latn-ZZ"}, "vep": {"value" : "vep-Latn-RU"}, "zh-Bopo": {"value" : "zh-Bopo-TW"}, "mti": {"value" : "mti-Latn-ZZ"}, "und-Ethi": {"value" : "am-Ethi-ET"}, "mtr": {"value" : "mtr-Deva-IN"}, "und-Thai-LA": {"value" : "kdt-Thai-LA"}, "ilo": {"value" : "ilo-Latn-PH"}, "zne": {"value" : "zne-Latn-ZZ"}, "mua": {"value" : "mua-Latn-CM"}, "und-Thai-KH": {"value" : "kdt-Thai-KH"}, "imo": {"value" : "imo-Latn-ZZ"}, "mus": {"value" :
    "mus-Latn-US"}, "mur": {"value" : "mur-Latn-ZZ"}, "mva": {"value" : "mva-Latn-ZZ"}, "inh": {"value" : "inh-Cyrl-RU"}, "mvn": {"value" : "mvn-Latn-ZZ"}, "efi": {"value" : "efi-Latn-NG"}, "mvy": {"value" : "mvy-Arab-PK"}, "und-Java": {"value" : "jv-Java-ID"}, "mwk": {"value" : "mwk-Latn-ML"}, "mwr": {"value" : "mwr-Deva-IN"}, "und-021": {"value" : "en-Latn-US"}, "egl": {"value" : "egl-Latn-IT"}, "mww": {"value" : "mww-Hmnp-US"}, "mwv": {"value" : "mwv-Latn-ID"}, "iou": {"value" : "iou-Latn-ZZ"}, "und-029":
    {"value" : "es-Latn-CU"}, "vic": {"value" : "vic-Latn-SX"}, "egy": {"value" : "egy-Egyp-EG"}, "und-Ugar": {"value" : "uga-Ugar-SY"}, "mxc": {"value" : "mxc-Latn-ZW"}, "raj": {"value" : "raj-Deva-IN"}, "rai": {"value" : "rai-Latn-ZZ"}, "rao": {"value" : "rao-Latn-ZZ"}, "viv": {"value" : "viv-Latn-ZZ"}, "mxm": {"value" : "mxm-Latn-ZZ"}, "und-034": {"value" : "hi-Deva-IN"}, "und-030": {"value" : "zh-Hans-CN"}, "und-039": {"value" : "it-Latn-IT"}, "und-035": {"value" : "id-Latn-ID"}, "ug-Cyrl": {"value" : "ug-Cyrl-KZ"}
    , "myk": {"value" : "myk-Latn-ZZ"}, "mym": {"value" : "mym-Ethi-ZZ"}, "aai": {"value" : "aai-Latn-ZZ"}, "aak": {"value" : "aak-Latn-ZZ"}, "myw": {"value" : "myw-Latn-ZZ"}, "myv": {"value" : "myv-Cyrl-RU"}, "myx": {"value" : "myx-Latn-UG"}, "myz": {"value" : "myz-Mand-IR"}, "und-Sinh": {"value" : "si-Sinh-LK"}, "und-Sind": {"value" : "sd-Sind-IN"}, "aau": {"value" : "aau-Latn-ZZ"}, "rcf": {"value" : "rcf-Latn-RE"}, "und-Orkh": {"value" : "otk-Orkh-MN"}, "mzk": {"value" : "mzk-Latn-ZZ"}, "mzn": {"value" :
    "mzn-Arab-IR"}, "iri": {"value" : "iri-Latn-ZZ"}, "mzm": {"value" : "mzm-Latn-ZZ"}, "mzp": {"value" : "mzp-Latn-ZZ"}, "und-053": {"value" : "en-Latn-AU"}, "abi": {"value" : "abi-Latn-ZZ"}, "und-054": {"value" : "en-Latn-PG"}, "mzw": {"value" : "mzw-Latn-ZZ"}, "mzz": {"value" : "mzz-Latn-ZZ"}, "abr": {"value" : "abr-Latn-GH"}, "abq": {"value" : "abq-Cyrl-ZZ"}, "abt": {"value" : "abt-Latn-ZZ"}, "und-057": {"value" : "en-Latn-GU"}, "aby": {"value" : "aby-Latn-ZZ"}, "eka": {"value" : "eka-Latn-ZZ"}, "vls": {"value"
    : "vls-Latn-BE"}, "ace": {"value" : "ace-Latn-ID"}, "acd": {"value" : "acd-Latn-ZZ"}, "ach": {"value" : "ach-Latn-UG"}, "vmf": {"value" : "vmf-Latn-DE"}, "eky": {"value" : "eky-Kali-MM"}, "rej": {"value" : "rej-Latn-ID"}, "rel": {"value" : "rel-Latn-ZZ"}, "ada": {"value" : "ada-Latn-GH"}, "res": {"value" : "res-Latn-ZZ"}, "vmw": {"value" : "vmw-Latn-MZ"}, "ade": {"value" : "ade-Latn-ZZ"}, "adj": {"value" : "adj-Latn-ZZ"}, "und-Hira": {"value" : "ja-Hira-JP"}, "adp": {"value" : "adp-Tibt-BT"}, "adz": {"value"
    : "adz-Latn-ZZ"}, "ady": {"value" : "ady-Cyrl-RU"}, "ema": {"value" : "ema-Latn-ZZ"}, "und-Deva": {"value" : "hi-Deva-IN"}, "aeb": {"value" : "aeb-Arab-TN"}, "emi": {"value" : "emi-Latn-ZZ"}, "und-009": {"value" : "en-Latn-AU"}, "aey": {"value" : "aey-Latn-ZZ"}, "und-002": {"value" : "en-Latn-NG"}, "und-003": {"value" : "en-Latn-US"}, "und-005": {"value" : "pt-Latn-BR"}, "rgn": {"value" : "rgn-Latn-IT"}, "vot": {"value" : "vot-Latn-RU"}, "enn": {"value" : "enn-Latn-ZZ"}, "enq": {"value" : "enq-Latn-ZZ"}
    , "und-011": {"value" : "en-Latn-NG"}, "rhg": {"value" : "rhg-Arab-MM"}, "und-017": {"value" : "sw-Latn-CD"}, "und-018": {"value" : "en-Latn-ZA"}, "und-019": {"value" : "en-Latn-US"}, "und-013": {"value" : "es-Latn-MX"}, "und-014": {"value" : "sw-Latn-TZ"}, "und-015": {"value" : "ar-Arab-EG"}, "agc": {"value" : "agc-Latn-ZZ"}, "und-Zanb": {"value" : "cmg-Zanb-MN"}, "iwm": {"value" : "iwm-Latn-ZZ"}, "agd": {"value" : "agd-Latn-ZZ"}, "agg": {"value" : "agg-Latn-ZZ"}, "iws": {"value" : "iws-Latn-ZZ"}, "agm":
    {"value" : "agm-Latn-ZZ"}, "ago": {"value" : "ago-Latn-ZZ"}, "agq": {"value" : "agq-Latn-CM"}, "ria": {"value" : "ria-Latn-IN"}, "rif": {"value" : "rif-Tfng-MA"}, "nac": {"value" : "nac-Latn-ZZ"}, "naf": {"value" : "naf-Latn-ZZ"}, "nak": {"value" : "nak-Latn-ZZ"}, "nan": {"value" : "nan-Hans-CN"}, "aha": {"value" : "aha-Latn-ZZ"}, "nap": {"value" : "nap-Latn-IT"}, "naq": {"value" : "naq-Latn-NA"}, "zza": {"value" : "zza-Latn-TR"}, "nas": {"value" : "nas-Latn-ZZ"}, "ahl": {"value" : "ahl-Latn-ZZ"}, "en-Shaw":
    {"value" : "en-Shaw-GB"}, "und-Copt": {"value" : "cop-Copt-EG"}, "aho": {"value" : "aho-Ahom-IN"}, "vro": {"value" : "vro-Latn-EE"}, "rjs": {"value" : "rjs-Deva-NP"}, "nca": {"value" : "nca-Latn-ZZ"}, "ncf": {"value" : "ncf-Latn-ZZ"}, "nce": {"value" : "nce-Latn-ZZ"}, "nch": {"value" : "nch-Latn-MX"}, "izh": {"value" : "izh-Latn-RU"}, "izi": {"value" : "izi-Latn-ZZ"}, "rkt": {"value" : "rkt-Beng-BD"}, "nco": {"value" : "nco-Latn-ZZ"}, "eri": {"value" : "eri-Latn-ZZ"}, "ajg": {"value" : "ajg-Latn-ZZ"}, "ncu":
    {"value" : "ncu-Latn-ZZ"}, "ndc": {"value" : "ndc-Latn-MZ"}, "esg": {"value" : "esg-Gonm-IN"}, "nds": {"value" : "nds-Latn-DE"}, "akk": {"value" : "akk-Xsux-IQ"}, "esu": {"value" : "esu-Latn-US"}, "neb": {"value" : "neb-Latn-ZZ"}, "rmf": {"value" : "rmf-Latn-FI"}, "und-061": {"value" : "sm-Latn-WS"}, "und-Limb": {"value" : "lif-Limb-IN"}, "vun": {"value" : "vun-Latn-TZ"}, "ff-Adlm": {"value" : "ff-Adlm-GN"}, "vut": {"value" : "vut-Latn-ZZ"}, "rmo": {"value" : "rmo-Latn-CH"}, "ala": {"value" : "ala-Latn-ZZ"}
    , "rmt": {"value" : "rmt-Arab-IR"}, "rmu": {"value" : "rmu-Latn-SE"}, "ali": {"value" : "ali-Latn-ZZ"}, "nex": {"value" : "nex-Latn-ZZ"}, "new": {"value" : "new-Deva-NP"}, "aln": {"value" : "aln-Latn-XK"}, "etr": {"value" : "etr-Latn-ZZ"}, "und-Rohg": {"value" : "rhg-Rohg-MM"}, "ett": {"value" : "ett-Ital-IT"}, "rna": {"value" : "rna-Latn-ZZ"}, "etu": {"value" : "etu-Latn-ZZ"}, "alt": {"value" : "alt-Cyrl-RU"}, "etx": {"value" : "etx-Latn-ZZ"}, "rng": {"value" : "rng-Latn-MZ"}, "und-Linb": {"value" : "grc-Linb-GR"}
    , "und-Lina": {"value" : "lab-Lina-GR"}, "und-Jpan": {"value" : "ja-Jpan-JP"}, "man-GN": {"value" : "man-Nkoo-GN"}, "nfr": {"value" : "nfr-Latn-ZZ"}, "amm": {"value" : "amm-Latn-ZZ"}, "und-Arab": {"value" : "ar-Arab-EG"}, "amo": {"value" : "amo-Latn-NG"}, "amn": {"value" : "amn-Latn-ZZ"}, "rob": {"value" : "rob-Latn-ID"}, "amp": {"value" : "amp-Latn-ZZ"}, "ngb": {"value" : "ngb-Latn-ZZ"}, "rof": {"value" : "rof-Latn-TZ"}, "nga": {"value" : "nga-Latn-ZZ"}, "ngl": {"value" : "ngl-Latn-MZ"}, "roo": {"value"
    : "roo-Latn-ZZ"}, "anc": {"value" : "anc-Latn-ZZ"}, "ank": {"value" : "ank-Latn-ZZ"}, "ann": {"value" : "ann-Latn-ZZ"}, "und-Bhks": {"value" : "sa-Bhks-IN"}, "nhb": {"value" : "nhb-Latn-ZZ"}, "nhe": {"value" : "nhe-Latn-MX"}, "any": {"value" : "any-Latn-ZZ"}, "und-Orya": {"value" : "or-Orya-IN"}, "ewo": {"value" : "ewo-Latn-CM"}, "nhw": {"value" : "nhw-Latn-MX"}, "aoj": {"value" : "aoj-Latn-ZZ"}, "aom": {"value" : "aom-Latn-ZZ"}, "zh-Hanb": {"value" : "zh-Hanb-TW"}, "und-Kits": {"value" : "zkt-Kits-CN"}
    , "jab": {"value" : "jab-Latn-ZZ"}, "nif": {"value" : "nif-Latn-ZZ"}, "aoz": {"value" : "aoz-Latn-ID"}, "nij": {"value" : "nij-Latn-ID"}, "nii": {"value" : "nii-Latn-ZZ"}, "zh-PH": {"value" : "zh-Hant-PH"}, "nin": {"value" : "nin-Latn-ZZ"}, "zh-Hant": {"value" : "zh-Hant-TW"}, "zh-PF": {"value" : "zh-Hant-PF"}, "und-Ahom": {"value" : "aho-Ahom-IN"}, "apd": {"value" : "apd-Arab-TG"}, "apc": {"value" : "apc-Arab-ZZ"}, "ape": {"value" : "ape-Latn-ZZ"}, "jam": {"value" : "jam-Latn-JM"}, "zh-PA": {"value" : "zh-Hant-PA"}
    , "niu": {"value" : "niu-Latn-NU"}, "niz": {"value" : "niz-Latn-ZZ"}, "niy": {"value" : "niy-Latn-ZZ"}, "ext": {"value" : "ext-Latn-ES"}, "apr": {"value" : "apr-Latn-ZZ"}, "aps": {"value" : "aps-Latn-ZZ"}, "apz": {"value" : "apz-Latn-ZZ"}, "rro": {"value" : "rro-Latn-ZZ"}, "njo": {"value" : "njo-Latn-IN"}, "jbo": {"value" : "jbo-Latn-001"}, "jbu": {"value" : "jbu-Latn-ZZ"}, "zh-MO": {"value" : "zh-Hant-MO"}, "nkg": {"value" : "nkg-Latn-ZZ"}, "zh-MY": {"value" : "zh-Hant-MY"}, "arc": {"value" : "arc-Armi-IR"}
    , "nko": {"value" : "nko-Latn-ZZ"}, "arh": {"value" : "arh-Latn-ZZ"}, "pa-Arab": {"value" : "pa-Arab-PK"}, "und-Mtei": {"value" : "mni-Mtei-IN"}, "arn": {"value" : "arn-Latn-CL"}, "aro": {"value" : "aro-Latn-BO"}, "und-Cyrl-RO": {"value" : "bg-Cyrl-RO"}, "arq": {"value" : "arq-Arab-DZ"}, "ars": {"value" : "ars-Arab-SA"}, "arz": {"value" : "arz-Arab-EG"}, "ary": {"value" : "ary-Arab-MA"}, "rtm": {"value" : "rtm-Latn-FJ"}, "asa": {"value" : "asa-Latn-TZ"}, "und-Grek-TR": {"value" : "bgx-Grek-TR"}, "ase": {"value"
    : "ase-Sgnw-US"}, "asg": {"value" : "asg-Latn-ZZ"}, "aso": {"value" : "aso-Latn-ZZ"}, "ast": {"value" : "ast-Latn-ES"}, "rue": {"value" : "rue-Cyrl-UA"}, "rug": {"value" : "rug-Latn-SB"}, "nmg": {"value" : "nmg-Latn-CM"}, "ata": {"value" : "ata-Latn-ZZ"}, "jen": {"value" : "jen-Latn-ZZ"}, "atg": {"value" : "atg-Latn-ZZ"}, "atj": {"value" : "atj-Latn-CA"}, "nmz": {"value" : "nmz-Latn-ZZ"}, "unr-Deva": {"value" : "unr-Deva-NP"}, "nnf": {"value" : "nnf-Latn-ZZ"}, "nnh": {"value" : "nnh-Latn-CM"}, "nnk": {"value"
    : "nnk-Latn-ZZ"}, "nnm": {"value" : "nnm-Latn-ZZ"}, "nnp": {"value" : "nnp-Wcho-IN"}, "az-IR": {"value" : "az-Arab-IR"}, "und-Adlm": {"value" : "ff-Adlm-GN"}, "az-IQ": {"value" : "az-Arab-IQ"}, "und-Nbat": {"value" : "arc-Nbat-JO"}, "sd-Khoj": {"value" : "sd-Khoj-IN"}, "nod": {"value" : "nod-Lana-TH"}, "auy": {"value" : "auy-Latn-ZZ"}, "noe": {"value" : "noe-Deva-IN"}, "rwk": {"value" : "rwk-Latn-TZ"}, "und-Cyrl-MD": {"value" : "uk-Cyrl-MD"}, "rwo": {"value" : "rwo-Latn-ZZ"}, "non": {"value" : "non-Runr-SE"}
    , "nop": {"value" : "nop-Latn-ZZ"}, "jgk": {"value" : "jgk-Latn-ZZ"}, "jgo": {"value" : "jgo-Latn-CM"}, "und-Vaii": {"value" : "vai-Vaii-LR"}, "nou": {"value" : "nou-Latn-ZZ"}, "avl": {"value" : "avl-Arab-ZZ"}, "avn": {"value" : "avn-Latn-ZZ"}, "wae": {"value" : "wae-Latn-CH"}, "avt": {"value" : "avt-Latn-ZZ"}, "avu": {"value" : "avu-Latn-ZZ"}, "waj": {"value" : "waj-Latn-ZZ"}, "wal": {"value" : "wal-Ethi-ET"}, "wan": {"value" : "wan-Latn-ZZ"}, "zh-HK": {"value" : "zh-Hant-HK"}, "war": {"value" : "war-Latn-PH"}
    , "awa": {"value" : "awa-Deva-IN"}, "und-Plrd": {"value" : "hmd-Plrd-CN"}, "awb": {"value" : "awb-Latn-ZZ"}, "awo": {"value" : "awo-Latn-ZZ"}, "und-Knda": {"value" : "kn-Knda-IN"}, "zh-ID": {"value" : "zh-Hant-ID"}, "jib": {"value" : "jib-Latn-ZZ"}, "awx": {"value" : "awx-Latn-ZZ"}, "wbp": {"value" : "wbp-Latn-AU"}, "und-Sidd": {"value" : "sa-Sidd-IN"}, "fab": {"value" : "fab-Latn-ZZ"}, "wbr": {"value" : "wbr-Deva-IN"}, "faa": {"value" : "faa-Latn-ZZ"}, "wbq": {"value" : "wbq-Telu-IN"}, "und-Kali": {"value"
    : "eky-Kali-MM"}, "fag": {"value" : "fag-Latn-ZZ"}, "nqo": {"value" : "nqo-Nkoo-GN"}, "fai": {"value" : "fai-Latn-ZZ"}, "ryu": {"value" : "ryu-Kana-JP"}, "fan": {"value" : "fan-Latn-GQ"}, "wci": {"value" : "wci-Latn-ZZ"}, "nrb": {"value" : "nrb-Latn-ZZ"}, "und-Phlp": {"value" : "pal-Phlp-CN"}, "ayb": {"value" : "ayb-Latn-ZZ"}, "und-Phli": {"value" : "pal-Phli-IR"}, "cu-Glag": {"value" : "cu-Glag-BG"}, "und-Cyrl-XK": {"value" : "sr-Cyrl-XK"}, "az-Arab": {"value" : "az-Arab-IR"}, "ks-Deva": {"value" : "ks-Deva-IN"}
    , "und-Thai": {"value" : "th-Thai-TH"}, "nsk": {"value" : "nsk-Cans-CA"}, "nsn": {"value" : "nsn-Latn-ZZ"}, "nso": {"value" : "nso-Latn-ZA"}, "und-Thaa": {"value" : "dv-Thaa-MV"}, "und-Nshu": {"value" : "zhx-Nshu-CN"}, "nss": {"value" : "nss-Latn-ZZ"}, "zh-VN": {"value" : "zh-Hant-VN"}, "und-Hmnp": {"value" : "mww-Hmnp-US"}, "und-Kana": {"value" : "ja-Kana-JP"}, "und-Hmng": {"value" : "hnj-Hmng-LA"}, "wer": {"value" : "wer-Latn-ZZ"}, "zh-TW": {"value" : "zh-Hant-TW"}, "ntm": {"value" : "ntm-Latn-ZZ"}, "ntr":
    {"value" : "ntr-Latn-ZZ"}, "zh-US": {"value" : "zh-Hant-US"}, "und-Xpeo": {"value" : "peo-Xpeo-IR"}, "jmc": {"value" : "jmc-Latn-TZ"}, "nui": {"value" : "nui-Latn-ZZ"}, "jml": {"value" : "jml-Deva-NP"}, "nup": {"value" : "nup-Latn-ZZ"}, "und-Cyrl-SK": {"value" : "uk-Cyrl-SK"}, "nus": {"value" : "nus-Latn-SS"}, "nuv": {"value" : "nuv-Latn-ZZ"}, "nux": {"value" : "nux-Latn-ZZ"}, "zh-TH": {"value" : "zh-Hant-TH"}, "wgi": {"value" : "wgi-Latn-ZZ"}, "und-Phnx": {"value" : "phn-Phnx-LB"}, "und-Cyrl-TR": {"value"
    : "kbd-Cyrl-TR"}, "ffi": {"value" : "ffi-Latn-ZZ"}, "und-Elym": {"value" : "arc-Elym-IR"}, "ffm": {"value" : "ffm-Latn-ML"}, "und-Rjng": {"value" : "rej-Rjng-ID"}, "whg": {"value" : "whg-Latn-ZZ"}, "nwb": {"value" : "nwb-Latn-ZZ"}, "zh-SR": {"value" : "zh-Hant-SR"}, "wib": {"value" : "wib-Latn-ZZ"}, "und-Hebr": {"value" : "he-Hebr-IL"}, "saf": {"value" : "saf-Latn-GH"}, "sah": {"value" : "sah-Cyrl-RU"}, "saq": {"value" : "saq-Latn-KE"}, "wiu": {"value" : "wiu-Latn-ZZ"}, "sas": {"value" : "sas-Latn-ID"},
    "wiv": {"value" : "wiv-Latn-ZZ"}, "nxq": {"value" : "nxq-Latn-CN"}, "sat": {"value" : "sat-Olck-IN"}, "nxr": {"value" : "nxr-Latn-ZZ"}, "sav": {"value" : "sav-Latn-SN"}, "saz": {"value" : "saz-Saur-IN"}, "wja": {"value" : "wja-Latn-ZZ"}, "sba": {"value" : "sba-Latn-ZZ"}, "sbe": {"value" : "sbe-Latn-ZZ"}, "wji": {"value" : "wji-Latn-ZZ"}, "mn-Mong": {"value" : "mn-Mong-CN"}, "und-419": {"value" : "es-Latn-419"}, "fia": {"value" : "fia-Arab-SD"}, "sbp": {"value" : "sbp-Latn-TZ"}, "und-NO": {"value" : "nb-Latn-NO"}
    , "nyn": {"value" : "nyn-Latn-UG"}, "nym": {"value" : "nym-Latn-TZ"}, "und-NL": {"value" : "nl-Latn-NL"}, "und-NP": {"value" : "ne-Deva-NP"}, "fil": {"value" : "fil-Latn-PH"}, "bal": {"value" : "bal-Arab-PK"}, "ban": {"value" : "ban-Latn-ID"}, "bap": {"value" : "bap-Deva-NP"}, "fit": {"value" : "fit-Latn-SE"}, "bar": {"value" : "bar-Latn-AT"}, "bas": {"value" : "bas-Latn-CM"}, "bav": {"value" : "bav-Latn-ZZ"}, "bax": {"value" : "bax-Bamu-CM"}, "jra": {"value" : "jra-Latn-ZZ"}, "sck": {"value" : "sck-Deva-IN"}
    , "nzi": {"value" : "nzi-Latn-GH"}, "scl": {"value" : "scl-Arab-ZZ"}, "sco": {"value" : "sco-Latn-GB"}, "scn": {"value" : "scn-Latn-IT"}, "aa": {"value" : "aa-Latn-ET"}, "bba": {"value" : "bba-Latn-ZZ"}, "und-MN": {"value" : "mn-Cyrl-MN"}, "ab": {"value" : "ab-Cyrl-GE"}, "und-MM": {"value" : "my-Mymr-MM"}, "und-Osma": {"value" : "so-Osma-SO"}, "bbc": {"value" : "bbc-Latn-ID"}, "scs": {"value" : "scs-Latn-CA"}, "und-ML": {"value" : "bm-Latn-ML"}, "bbb": {"value" : "bbb-Latn-ZZ"}, "und-MK": {"value" : "mk-Cyrl-MK"}
    , "ae": {"value" : "ae-Avst-IR"}, "und-MR": {"value" : "ar-Arab-MR"}, "af": {"value" : "af-Latn-ZA"}, "bbd": {"value" : "bbd-Latn-ZZ"}, "und-MQ": {"value" : "fr-Latn-MQ"}, "und-Wara": {"value" : "hoc-Wara-IN"}, "und-MO": {"value" : "zh-Hant-MO"}, "und-MV": {"value" : "dv-Thaa-MV"}, "und-MU": {"value" : "mfe-Latn-MU"}, "ak": {"value" : "ak-Latn-GH"}, "und-MT": {"value" : "mt-Latn-MT"}, "bbj": {"value" : "bbj-Latn-CM"}, "am": {"value" : "am-Ethi-ET"}, "und-MZ": {"value" : "pt-Latn-MZ"}, "an": {"value" : "an-Latn-ES"}
    , "und-MY": {"value" : "ms-Latn-MY"}, "und-MX": {"value" : "es-Latn-MX"}, "ar": {"value" : "ar-Arab-EG"}, "bbp": {"value" : "bbp-Latn-ZZ"}, "as": {"value" : "as-Beng-IN"}, "bbr": {"value" : "bbr-Latn-ZZ"}, "sdc": {"value" : "sdc-Latn-IT"}, "und-NC": {"value" : "fr-Latn-NC"}, "av": {"value" : "av-Cyrl-RU"}, "sdh": {"value" : "sdh-Arab-IR"}, "und-NA": {"value" : "af-Latn-NA"}, "ay": {"value" : "ay-Latn-BO"}, "az": {"value" : "az-Latn-AZ"}, "und-NE": {"value" : "ha-Latn-NE"}, "und-NI": {"value" : "es-Latn-NI"}
    , "ba": {"value" : "ba-Cyrl-RU"}, "wls": {"value" : "wls-Latn-WF"}, "und-Kore": {"value" : "ko-Kore-KR"}, "und-LK": {"value" : "si-Sinh-LK"}, "be": {"value" : "be-Cyrl-BY"}, "bcf": {"value" : "bcf-Latn-ZZ"}, "bg": {"value" : "bg-Cyrl-BG"}, "bch": {"value" : "bch-Latn-ZZ"}, "bi": {"value" : "bi-Latn-VU"}, "und-LU": {"value" : "fr-Latn-LU"}, "bci": {"value" : "bci-Latn-CI"}, "und-LT": {"value" : "lt-Latn-LT"}, "und-LS": {"value" : "st-Latn-LS"}, "bm": {"value" : "bm-Latn-ML"}, "bcn": {"value" : "bcn-Latn-ZZ"}
    , "bn": {"value" : "bn-Beng-BD"}, "und-LY": {"value" : "ar-Arab-LY"}, "bcm": {"value" : "bcm-Latn-ZZ"}, "bo": {"value" : "bo-Tibt-CN"}, "bco": {"value" : "bco-Latn-ZZ"}, "und-LV": {"value" : "lv-Latn-LV"}, "br": {"value" : "br-Latn-FR"}, "bcq": {"value" : "bcq-Ethi-ZZ"}, "bs": {"value" : "bs-Latn-BA"}, "bcu": {"value" : "bcu-Latn-ZZ"}, "sef": {"value" : "sef-Latn-CI"}, "und-MA": {"value" : "ar-Arab-MA"}, "sei": {"value" : "sei-Latn-MX"}, "seh": {"value" : "seh-Latn-MZ"}, "und-MF": {"value" : "fr-Latn-MF"}
    , "wmo": {"value" : "wmo-Latn-ZZ"}, "und-ME": {"value" : "sr-Latn-ME"}, "und-MD": {"value" : "ro-Latn-MD"}, "und-MC": {"value" : "fr-Latn-MC"}, "ca": {"value" : "ca-Latn-ES"}, "und-MG": {"value" : "mg-Latn-MG"}, "ses": {"value" : "ses-Latn-ML"}, "ce": {"value" : "ce-Cyrl-RU"}, "und-Cyrl-BA": {"value" : "sr-Cyrl-BA"}, "bdd": {"value" : "bdd-Latn-ZZ"}, "und-KP": {"value" : "ko-Kore-KP"}, "ch": {"value" : "ch-Latn-GU"}, "und-KM": {"value" : "ar-Arab-KM"}, "und-KR": {"value" : "ko-Kore-KR"}, "co": {"value" :
    "co-Latn-FR"}, "flr": {"value" : "flr-Latn-ZZ"}, "und-KW": {"value" : "ar-Arab-KW"}, "wnc": {"value" : "wnc-Latn-ZZ"}, "und-Dogr": {"value" : "doi-Dogr-IN"}, "cr": {"value" : "cr-Cans-CA"}, "cs": {"value" : "cs-Latn-CZ"}, "cu": {"value" : "cu-Cyrl-RU"}, "und-KZ": {"value" : "ru-Cyrl-KZ"}, "cv": {"value" : "cv-Cyrl-RU"}, "wni": {"value" : "wni-Arab-KM"}, "und-LA": {"value" : "lo-Laoo-LA"}, "cy": {"value" : "cy-Latn-GB"}, "und-LB": {"value" : "ar-Arab-LB"}, "und-LI": {"value" : "de-Latn-LI"}, "da": {"value"
    : "da-Latn-DK"}, "und-Cyrl-AL": {"value" : "mk-Cyrl-AL"}, "wnu": {"value" : "wnu-Latn-ZZ"}, "de": {"value" : "de-Latn-DE"}, "bef": {"value" : "bef-Latn-ZZ"}, "beh": {"value" : "beh-Latn-ZZ"}, "und-JO": {"value" : "ar-Arab-JO"}, "bej": {"value" : "bej-Arab-SD"}, "fmp": {"value" : "fmp-Latn-ZZ"}, "jut": {"value" : "jut-Latn-DK"}, "bem": {"value" : "bem-Latn-ZM"}, "und-JP": {"value" : "ja-Jpan-JP"}, "wob": {"value" : "wob-Latn-ZZ"}, "sga": {"value" : "sga-Ogam-IE"}, "bet": {"value" : "bet-Latn-ZZ"}, "dv": {"value"
    : "dv-Thaa-MV"}, "bex": {"value" : "bex-Latn-ZZ"}, "bew": {"value" : "bew-Latn-ID"}, "bez": {"value" : "bez-Latn-TZ"}, "dz": {"value" : "dz-Tibt-BT"}, "ms-ID": {"value" : "ms-Latn-ID"}, "wos": {"value" : "wos-Latn-ZZ"}, "und-KH": {"value" : "km-Khmr-KH"}, "und-KG": {"value" : "ky-Cyrl-KG"}, "sgs": {"value" : "sgs-Latn-LT"}, "und-KE": {"value" : "sw-Latn-KE"}, "ee": {"value" : "ee-Latn-GH"}, "bfd": {"value" : "bfd-Latn-CM"}, "sgw": {"value" : "sgw-Ethi-ZZ"}, "und-IN": {"value" : "hi-Deva-IN"}, "und-IL": {"value"
    : "he-Hebr-IL"}, "el": {"value" : "el-Grek-GR"}, "sgz": {"value" : "sgz-Latn-ZZ"}, "und-IR": {"value" : "fa-Arab-IR"}, "en": {"value" : "en-Latn-US"}, "und-IQ": {"value" : "ar-Arab-IQ"}, "und-Perm": {"value" : "kv-Perm-RU"}, "eo": {"value" : "eo-Latn-001"}, "bfq": {"value" : "bfq-Taml-IN"}, "es": {"value" : "es-Latn-ES"}, "und-IT": {"value" : "it-Latn-IT"}, "et": {"value" : "et-Latn-EE"}, "und-IS": {"value" : "is-Latn-IS"}, "eu": {"value" : "eu-Latn-ES"}, "bft": {"value" : "bft-Arab-PK"}, "bfy": {"value"
    : "bfy-Deva-IN"}, "shi": {"value" : "shi-Tfng-MA"}, "shk": {"value" : "shk-Latn-ZZ"}, "shn": {"value" : "shn-Mymr-MM"}, "fod": {"value" : "fod-Latn-ZZ"}, "fa": {"value" : "fa-Arab-IR"}, "bgc": {"value" : "bgc-Deva-IN"}, "ff": {"value" : "ff-Latn-SN"}, "shu": {"value" : "shu-Arab-ZZ"}, "fi": {"value" : "fi-Latn-FI"}, "fj": {"value" : "fj-Latn-FJ"}, "fon": {"value" : "fon-Latn-BJ"}, "und-HM": {"value" : "und-Latn-HM"}, "und-HK": {"value" : "zh-Hant-HK"}, "bgn": {"value" : "bgn-Arab-PK"}, "for": {"value" :
    "for-Latn-ZZ"}, "fo": {"value" : "fo-Latn-FO"}, "und-HN": {"value" : "es-Latn-HN"}, "fr": {"value" : "fr-Latn-FR"}, "und-HU": {"value" : "hu-Latn-HU"}, "und-HT": {"value" : "ht-Latn-HT"}, "ku-Arab": {"value" : "ku-Arab-IQ"}, "sid": {"value" : "sid-Latn-ET"}, "und-HR": {"value" : "hr-Latn-HR"}, "sig": {"value" : "sig-Latn-ZZ"}, "bgx": {"value" : "bgx-Grek-TR"}, "fy": {"value" : "fy-Latn-NL"}, "sim": {"value" : "sim-Latn-ZZ"}, "sil": {"value" : "sil-Latn-ZZ"}, "fpe": {"value" : "fpe-Latn-ZZ"}, "ga": {"value"
    : "ga-Latn-IE"}, "bhb": {"value" : "bhb-Deva-IN"}, "gd": {"value" : "gd-Latn-GB"}, "und-ID": {"value" : "id-Latn-ID"}, "und-IC": {"value" : "es-Latn-IC"}, "bhg": {"value" : "bhg-Latn-ZZ"}, "und-GH": {"value" : "ak-Latn-GH"}, "bhi": {"value" : "bhi-Deva-IN"}, "und-GF": {"value" : "fr-Latn-GF"}, "und-GE": {"value" : "ka-Geor-GE"}, "und-GL": {"value" : "kl-Latn-GL"}, "gl": {"value" : "gl-Latn-ES"}, "bhl": {"value" : "bhl-Latn-ZZ"}, "gn": {"value" : "gn-Latn-PY"}, "bho": {"value" : "bho-Deva-IN"}, "und-GP":
    {"value" : "fr-Latn-GP"}, "und-GN": {"value" : "fr-Latn-GN"}, "und-GT": {"value" : "es-Latn-GT"}, "und-GS": {"value" : "und-Latn-GS"}, "gu": {"value" : "gu-Gujr-IN"}, "und-GR": {"value" : "el-Grek-GR"}, "gv": {"value" : "gv-Latn-IM"}, "und-GQ": {"value" : "es-Latn-GQ"}, "und-Palm": {"value" : "arc-Palm-SY"}, "und-GW": {"value" : "pt-Latn-GW"}, "bhy": {"value" : "bhy-Latn-ZZ"}, "ha": {"value" : "ha-Latn-NG"}, "wrs": {"value" : "wrs-Latn-ZZ"}, "bib": {"value" : "bib-Latn-ZZ"}, "sjr": {"value" : "sjr-Latn-ZZ"}
    , "he": {"value" : "he-Hebr-IL"}, "big": {"value" : "big-Latn-ZZ"}, "hi": {"value" : "hi-Deva-IN"}, "und-Cyrl-GE": {"value" : "ab-Cyrl-GE"}, "bik": {"value" : "bik-Latn-PH"}, "bin": {"value" : "bin-Latn-NG"}, "und-Cham": {"value" : "cjm-Cham-VN"}, "und-FI": {"value" : "fi-Latn-FI"}, "bim": {"value" : "bim-Latn-ZZ"}, "ho": {"value" : "ho-Latn-PG"}, "tg-PK": {"value" : "tg-Arab-PK"}, "und-FO": {"value" : "fo-Latn-FO"}, "bio": {"value" : "bio-Latn-ZZ"}, "fqs": {"value" : "fqs-Latn-ZZ"}, "hr": {"value" : "hr-Latn-HR"}
    , "skc": {"value" : "skc-Latn-ZZ"}, "wsg": {"value" : "wsg-Gong-IN"}, "biq": {"value" : "biq-Latn-ZZ"}, "ht": {"value" : "ht-Latn-HT"}, "hu": {"value" : "hu-Latn-HU"}, "und-FR": {"value" : "fr-Latn-FR"}, "wsk": {"value" : "wsk-Latn-ZZ"}, "hy": {"value" : "hy-Armn-AM"}, "hz": {"value" : "hz-Latn-NA"}, "frc": {"value" : "frc-Latn-US"}, "ia": {"value" : "ia-Latn-001"}, "sks": {"value" : "sks-Latn-ZZ"}, "id": {"value" : "id-Latn-ID"}, "skr": {"value" : "skr-Arab-PK"}, "ig": {"value" : "ig-Latn-NG"}, "und-GA":
    {"value" : "fr-Latn-GA"}, "bji": {"value" : "bji-Ethi-ZZ"}, "ii": {"value" : "ii-Yiii-CN"}, "bjh": {"value" : "bjh-Latn-ZZ"}, "und-EE": {"value" : "et-Latn-EE"}, "ik": {"value" : "ik-Latn-US"}, "bjj": {"value" : "bjj-Deva-IN"}, "und-EC": {"value" : "es-Latn-EC"}, "und-Cprt": {"value" : "grc-Cprt-CY"}, "frp": {"value" : "frp-Latn-FR"}, "in": {"value" : "in-Latn-ID"}, "bjo": {"value" : "bjo-Latn-ZZ"}, "frs": {"value" : "frs-Latn-DE"}, "io": {"value" : "io-Latn-001"}, "und-EH": {"value" : "ar-Arab-EH"}, "bjn":
    {"value" : "bjn-Latn-ID"}, "frr": {"value" : "frr-Latn-DE"}, "und-EG": {"value" : "ar-Arab-EG"}, "is": {"value" : "is-Latn-IS"}, "sld": {"value" : "sld-Latn-ZZ"}, "bjr": {"value" : "bjr-Latn-ZZ"}, "it": {"value" : "it-Latn-IT"}, "iu": {"value" : "iu-Cans-CA"}, "und-ER": {"value" : "ti-Ethi-ER"}, "bjt": {"value" : "bjt-Latn-SN"}, "iw": {"value" : "iw-Hebr-IL"}, "und-Tirh": {"value" : "mai-Tirh-IN"}, "sli": {"value" : "sli-Latn-PL"}, "und-EU": {"value" : "en-Latn-GB"}, "wtm": {"value" : "wtm-Deva-IN"}, "sll":
    {"value" : "sll-Latn-ZZ"}, "und-ET": {"value" : "am-Ethi-ET"}, "bjz": {"value" : "bjz-Latn-ZZ"}, "und-ES": {"value" : "es-Latn-ES"}, "und-EZ": {"value" : "de-Latn-EZ"}, "ja": {"value" : "ja-Jpan-JP"}, "zh-GF": {"value" : "zh-Hant-GF"}, "bkc": {"value" : "bkc-Latn-ZZ"}, "zh-GB": {"value" : "zh-Hant-GB"}, "und-Cyrl-GR": {"value" : "mk-Cyrl-GR"}, "ji": {"value" : "ji-Hebr-UA"}, "und-DE": {"value" : "de-Latn-DE"}, "sly": {"value" : "sly-Latn-ID"}, "bkm": {"value" : "bkm-Latn-CM"}, "sma": {"value" : "sma-Latn-SE"}
    , "bkq": {"value" : "bkq-Latn-ZZ"}, "und-DK": {"value" : "da-Latn-DK"}, "und-DJ": {"value" : "aa-Latn-DJ"}, "bkv": {"value" : "bkv-Latn-ZZ"}, "jv": {"value" : "jv-Latn-ID"}, "bku": {"value" : "bku-Latn-PH"}, "jw": {"value" : "jw-Latn-ID"}, "und-DO": {"value" : "es-Latn-DO"}, "smj": {"value" : "smj-Latn-SE"}, "smn": {"value" : "smn-Latn-FI"}, "ka": {"value" : "ka-Geor-GE"}, "smq": {"value" : "smq-Latn-ZZ"}, "wuu": {"value" : "wuu-Hans-CN"}, "smp": {"value" : "smp-Samr-IL"}, "sms": {"value" : "sms-Latn-FI"}
    , "wuv": {"value" : "wuv-Latn-ZZ"}, "und-DZ": {"value" : "ar-Arab-DZ"}, "kg": {"value" : "kg-Latn-CD"}, "und-EA": {"value" : "es-Latn-EA"}, "ki": {"value" : "ki-Latn-KE"}, "kj": {"value" : "kj-Latn-NA"}, "kk": {"value" : "kk-Cyrl-KZ"}, "man-Nkoo": {"value" : "man-Nkoo-GN"}, "und-CD": {"value" : "sw-Latn-CD"}, "kl": {"value" : "kl-Latn-GL"}, "und-Telu": {"value" : "te-Telu-IN"}, "km": {"value" : "km-Khmr-KH"}, "kn": {"value" : "kn-Knda-IN"}, "ko": {"value" : "ko-Kore-KR"}, "und-CH": {"value" : "de-Latn-CH"}
    , "und-CG": {"value" : "fr-Latn-CG"}, "und-CF": {"value" : "fr-Latn-CF"}, "kr": {"value" : "kr-Latn-ZZ"}, "ks": {"value" : "ks-Arab-IN"}, "und-CL": {"value" : "es-Latn-CL"}, "snc": {"value" : "snc-Latn-ZZ"}, "ku": {"value" : "ku-Latn-TR"}, "blt": {"value" : "blt-Tavt-VN"}, "kv": {"value" : "kv-Cyrl-RU"}, "und-CI": {"value" : "fr-Latn-CI"}, "kw": {"value" : "kw-Latn-GB"}, "und-CP": {"value" : "und-Latn-CP"}, "und-CO": {"value" : "es-Latn-CO"}, "ky": {"value" : "ky-Cyrl-KG"}, "und-CN": {"value" : "zh-Hans-CN"}
    , "und-CM": {"value" : "fr-Latn-CM"}, "snk": {"value" : "snk-Latn-ML"}, "fub": {"value" : "fub-Arab-CM"}, "und-CR": {"value" : "es-Latn-CR"}, "fud": {"value" : "fud-Latn-WF"}, "snp": {"value" : "snp-Latn-ZZ"}, "la": {"value" : "la-Latn-VA"}, "und-CW": {"value" : "pap-Latn-CW"}, "fuf": {"value" : "fuf-Latn-GN"}, "lb": {"value" : "lb-Latn-LU"}, "und-CV": {"value" : "pt-Latn-CV"}, "fue": {"value" : "fue-Latn-ZZ"}, "und-CU": {"value" : "es-Latn-CU"}, "fuh": {"value" : "fuh-Latn-ZZ"}, "und-CZ": {"value" : "cs-Latn-CZ"}
    , "lg": {"value" : "lg-Latn-UG"}, "und-CY": {"value" : "el-Grek-CY"}, "bmh": {"value" : "bmh-Latn-ZZ"}, "snx": {"value" : "snx-Latn-ZZ"}, "li": {"value" : "li-Latn-NL"}, "sny": {"value" : "sny-Latn-ZZ"}, "wwa": {"value" : "wwa-Latn-ZZ"}, "bmk": {"value" : "bmk-Latn-ZZ"}, "und-Cher": {"value" : "chr-Cher-US"}, "fur": {"value" : "fur-Latn-IT"}, "ln": {"value" : "ln-Latn-CD"}, "und-BA": {"value" : "bs-Latn-BA"}, "fuq": {"value" : "fuq-Latn-NE"}, "lo": {"value" : "lo-Laoo-LA"}, "und-BG": {"value" : "bg-Cyrl-BG"}
    , "und-BF": {"value" : "fr-Latn-BF"}, "fuv": {"value" : "fuv-Latn-NG"}, "und-BE": {"value" : "nl-Latn-BE"}, "bmq": {"value" : "bmq-Latn-ML"}, "und-BD": {"value" : "bn-Beng-BD"}, "lt": {"value" : "lt-Latn-LT"}, "lu": {"value" : "lu-Latn-CD"}, "und-BJ": {"value" : "fr-Latn-BJ"}, "lv": {"value" : "lv-Latn-LV"}, "ogc": {"value" : "ogc-Latn-ZZ"}, "sog": {"value" : "sog-Sogd-UZ"}, "und-BI": {"value" : "rn-Latn-BI"}, "bmu": {"value" : "bmu-Latn-ZZ"}, "fuy": {"value" : "fuy-Latn-ZZ"}, "und-BH": {"value" : "ar-Arab-BH"}
    , "und-BO": {"value" : "es-Latn-BO"}, "und-BN": {"value" : "ms-Latn-BN"}, "sok": {"value" : "sok-Latn-ZZ"}, "und-BL": {"value" : "fr-Latn-BL"}, "und-BR": {"value" : "pt-Latn-BR"}, "und-BQ": {"value" : "pap-Latn-BQ"}, "soq": {"value" : "soq-Latn-ZZ"}, "und-BV": {"value" : "und-Latn-BV"}, "und-BT": {"value" : "dz-Tibt-BT"}, "sou": {"value" : "sou-Thai-TH"}, "bng": {"value" : "bng-Latn-ZZ"}, "mg": {"value" : "mg-Latn-MG"}, "und-BY": {"value" : "be-Cyrl-BY"}, "und-Glag": {"value" : "cu-Glag-BG"}, "mh": {"value"
    : "mh-Latn-MH"}, "mi": {"value" : "mi-Latn-NZ"}, "soy": {"value" : "soy-Latn-ZZ"}, "mk": {"value" : "mk-Cyrl-MK"}, "ml": {"value" : "ml-Mlym-IN"}, "bnm": {"value" : "bnm-Latn-ZZ"}, "mn": {"value" : "mn-Cyrl-MN"}, "mo": {"value" : "mo-Latn-RO"}, "und-Prti": {"value" : "xpr-Prti-IR"}, "fvr": {"value" : "fvr-Latn-SD"}, "und-AF": {"value" : "fa-Arab-AF"}, "bnp": {"value" : "bnp-Latn-ZZ"}, "mr": {"value" : "mr-Deva-IN"}, "und-AE": {"value" : "ar-Arab-AE"}, "ms": {"value" : "ms-Latn-MY"}, "spd": {"value" : "spd-Latn-ZZ"}
    , "und-AD": {"value" : "ca-Latn-AD"}, "mt": {"value" : "mt-Latn-MT"}, "my": {"value" : "my-Mymr-MM"}, "zh-BN": {"value" : "zh-Hant-BN"}, "und-AM": {"value" : "hy-Armn-AM"}, "spl": {"value" : "spl-Latn-ZZ"}, "und-AL": {"value" : "sq-Latn-AL"}, "und-AR": {"value" : "es-Latn-AR"}, "und-AQ": {"value" : "und-Latn-AQ"}, "na": {"value" : "na-Latn-NR"}, "und-AO": {"value" : "pt-Latn-AO"}, "nb": {"value" : "nb-Latn-NO"}, "nd": {"value" : "nd-Latn-ZW"}, "und-AT": {"value" : "de-Latn-AT"}, "ne": {"value" : "ne-Deva-NP"}
    , "sps": {"value" : "sps-Latn-ZZ"}, "und-AS": {"value" : "sm-Latn-AS"}, "und-AZ": {"value" : "az-Latn-AZ"}, "ng": {"value" : "ng-Latn-NA"}, "und-AX": {"value" : "sv-Latn-AX"}, "und-AW": {"value" : "nl-Latn-AW"}, "boj": {"value" : "boj-Latn-ZZ"}, "nl": {"value" : "nl-Latn-NL"}, "bon": {"value" : "bon-Latn-ZZ"}, "nn": {"value" : "nn-Latn-NO"}, "bom": {"value" : "bom-Latn-ZZ"}, "no": {"value" : "no-Latn-NO"}, "nr": {"value" : "nr-Latn-ZA"}, "arc-Nbat": {"value" : "arc-Nbat-JO"}, "und-Medf": {"value" : "mis-Medf-NG"}
    , "nv": {"value" : "nv-Latn-US"}, "kaa": {"value" : "kaa-Cyrl-UZ"}, "ny": {"value" : "ny-Latn-MW"}, "kac": {"value" : "kac-Latn-MM"}, "kab": {"value" : "kab-Latn-DZ"}, "kad": {"value" : "kad-Latn-ZZ"}, "kai": {"value" : "kai-Latn-ZZ"}, "oc": {"value" : "oc-Latn-FR"}, "zh-AU": {"value" : "zh-Hant-AU"}, "kaj": {"value" : "kaj-Latn-NG"}, "kam": {"value" : "kam-Latn-KE"}, "und-Tagb": {"value" : "tbw-Tagb-PH"}, "kao": {"value" : "kao-Latn-ML"}, "und-Ogam": {"value" : "sga-Ogam-IE"}, "om": {"value" : "om-Latn-ET"}
    , "srb": {"value" : "srb-Sora-IN"}, "or": {"value" : "or-Orya-IN"}, "tg-Arab": {"value" : "tg-Arab-PK"}, "os": {"value" : "os-Cyrl-GE"}, "und-Sogd": {"value" : "sog-Sogd-UZ"}, "bpy": {"value" : "bpy-Beng-IN"}, "kbd": {"value" : "kbd-Cyrl-RU"}, "srn": {"value" : "srn-Latn-SR"}, "pa": {"value" : "pa-Guru-IN"}, "srr": {"value" : "srr-Latn-SN"}, "bqc": {"value" : "bqc-Latn-ZZ"}, "und-Kthi": {"value" : "bho-Kthi-IN"}, "kbm": {"value" : "kbm-Latn-ZZ"}, "kbp": {"value" : "kbp-Latn-ZZ"}, "srx": {"value" : "srx-Deva-IN"}
    , "bqi": {"value" : "bqi-Arab-IR"}, "kbq": {"value" : "kbq-Latn-ZZ"}, "pl": {"value" : "pl-Latn-PL"}, "bqp": {"value" : "bqp-Latn-ZZ"}, "kbx": {"value" : "kbx-Latn-ZZ"}, "kby": {"value" : "kby-Arab-NE"}, "ps": {"value" : "ps-Arab-AF"}, "pt": {"value" : "pt-Latn-BR"}, "ssd": {"value" : "ssd-Latn-ZZ"}, "und-Nkoo": {"value" : "man-Nkoo-GN"}, "bqv": {"value" : "bqv-Latn-CI"}, "ssg": {"value" : "ssg-Latn-ZZ"}, "und-Mymr": {"value" : "my-Mymr-MM"}, "kcg": {"value" : "kcg-Latn-NG"}, "bra": {"value" : "bra-Deva-IN"}
    , "kck": {"value" : "kck-Latn-ZW"}, "kcl": {"value" : "kcl-Latn-ZZ"}, "okr": {"value" : "okr-Latn-ZZ"}, "ssy": {"value" : "ssy-Latn-ER"}, "brh": {"value" : "brh-Arab-PK"}, "okv": {"value" : "okv-Latn-ZZ"}, "kct": {"value" : "kct-Latn-ZZ"}, "und-Hani": {"value" : "zh-Hani-CN"}, "und-Bugi": {"value" : "bug-Bugi-ID"}, "und-Hang": {"value" : "ko-Hang-KR"}, "qu": {"value" : "qu-Latn-PE"}, "brx": {"value" : "brx-Deva-IN"}, "und-Samr": {"value" : "smp-Samr-IL"}, "brz": {"value" : "brz-Latn-ZZ"}, "stk": {"value"
    : "stk-Latn-ZZ"}, "und-Hano": {"value" : "hnn-Hano-PH"}, "kde": {"value" : "kde-Latn-TZ"}, "kdh": {"value" : "kdh-Arab-TG"}, "stq": {"value" : "stq-Latn-DE"}, "kdl": {"value" : "kdl-Latn-ZZ"}, "bsj": {"value" : "bsj-Latn-ZZ"}, "und-Hanb": {"value" : "zh-Hanb-TW"}, "kdt": {"value" : "kdt-Thai-TH"}, "rm": {"value" : "rm-Latn-CH"}, "rn": {"value" : "rn-Latn-BI"}, "ro": {"value" : "ro-Latn-RO"}, "sua": {"value" : "sua-Latn-ZZ"}, "und-Deva-BT": {"value" : "ne-Deva-BT"}, "bsq": {"value" : "bsq-Bass-LR"}, "bst":
    {"value" : "bst-Ethi-ZZ"}, "sue": {"value" : "sue-Latn-ZZ"}, "bss": {"value" : "bss-Latn-CM"}, "ru": {"value" : "ru-Cyrl-RU"}, "und-Buhd": {"value" : "bku-Buhd-PH"}, "rw": {"value" : "rw-Latn-RW"}, "kea": {"value" : "kea-Latn-CV"}, "suk": {"value" : "suk-Latn-TZ"}, "grc-Linb": {"value" : "grc-Linb-GR"}, "sa": {"value" : "sa-Deva-IN"}, "sc": {"value" : "sc-Latn-IT"}, "sus": {"value" : "sus-Latn-GN"}, "sd": {"value" : "sd-Arab-PK"}, "sur": {"value" : "sur-Latn-ZZ"}, "se": {"value" : "se-Latn-NO"}, "sg": {"value"
    : "sg-Latn-CF"}, "ken": {"value" : "ken-Latn-CM"}, "si": {"value" : "si-Sinh-LK"}, "und-Hant": {"value" : "zh-Hant-TW"}, "und-Hans": {"value" : "zh-Hans-CN"}, "sk": {"value" : "sk-Latn-SK"}, "sl": {"value" : "sl-Latn-SI"}, "sm": {"value" : "sm-Latn-WS"}, "sn": {"value" : "sn-Latn-ZW"}, "bto": {"value" : "bto-Latn-PH"}, "so": {"value" : "so-Latn-SO"}, "sq": {"value" : "sq-Latn-AL"}, "sr": {"value" : "sr-Cyrl-RS"}, "ss": {"value" : "ss-Latn-ZA"}, "kez": {"value" : "kez-Latn-ZZ"}, "st": {"value" : "st-Latn-ZA"}
    , "su": {"value" : "su-Latn-ID"}, "btt": {"value" : "btt-Latn-ZZ"}, "sv": {"value" : "sv-Latn-SE"}, "sw": {"value" : "sw-Latn-TZ"}, "btv": {"value" : "btv-Deva-PK"}, "ong": {"value" : "ong-Latn-ZZ"}, "ta": {"value" : "ta-Taml-IN"}, "onn": {"value" : "onn-Latn-ZZ"}, "bua": {"value" : "bua-Cyrl-RU"}, "bud": {"value" : "bud-Latn-ZZ"}, "buc": {"value" : "buc-Latn-YT"}, "te": {"value" : "te-Telu-IN"}, "tg": {"value" : "tg-Cyrl-TJ"}, "th": {"value" : "th-Thai-TH"}, "und-Gong": {"value" : "wsg-Gong-IN"}, "bug":
    {"value" : "bug-Latn-ID"}, "kfo": {"value" : "kfo-Latn-CI"}, "ons": {"value" : "ons-Latn-ZZ"}, "ti": {"value" : "ti-Ethi-ET"}, "kfr": {"value" : "kfr-Deva-IN"}, "tk": {"value" : "tk-Latn-TM"}, "tl": {"value" : "tl-Latn-PH"}, "und-Lisu": {"value" : "lis-Lisu-CN"}, "buk": {"value" : "buk-Latn-ZZ"}, "tn": {"value" : "tn-Latn-ZA"}, "bum": {"value" : "bum-Latn-CM"}, "to": {"value" : "to-Latn-TO"}, "buo": {"value" : "buo-Latn-ZZ"}, "swc": {"value" : "swc-Latn-CD"}, "tr": {"value" : "tr-Latn-TR"}, "und-Gonm": {"value"
    : "esg-Gonm-IN"}, "kfy": {"value" : "kfy-Deva-IN"}, "swb": {"value" : "swb-Arab-YT"}, "ts": {"value" : "ts-Latn-ZA"}, "tt": {"value" : "tt-Cyrl-RU"}, "bus": {"value" : "bus-Latn-ZZ"}, "swg": {"value" : "swg-Latn-DE"}, "buu": {"value" : "buu-Latn-ZZ"}, "ty": {"value" : "ty-Latn-PF"}, "kge": {"value" : "kge-Latn-ID"}, "kgf": {"value" : "kgf-Latn-ZZ"}, "swp": {"value" : "swp-Latn-ZZ"}, "bvb": {"value" : "bvb-Latn-GQ"}, "ug": {"value" : "ug-Arab-CN"}, "swv": {"value" : "swv-Deva-IN"}, "kgp": {"value" : "kgp-Latn-BR"}
    , "uk": {"value" : "uk-Cyrl-UA"}, "ur": {"value" : "ur-Arab-PK"}, "kk-IR": {"value" : "kk-Arab-IR"}, "khb": {"value" : "khb-Talu-CN"}, "kha": {"value" : "kha-Latn-IN"}, "uz": {"value" : "uz-Latn-UZ"}, "sxn": {"value" : "sxn-Latn-ID"}, "xav": {"value" : "xav-Latn-BR"}, "opm": {"value" : "opm-Latn-ZZ"}, "bwd": {"value" : "bwd-Latn-ZZ"}, "und-Mlym": {"value" : "ml-Mlym-IN"}, "ve": {"value" : "ve-Latn-ZA"}, "khn": {"value" : "khn-Deva-IN"}, "sxw": {"value" : "sxw-Latn-ZZ"}, "vi": {"value" : "vi-Latn-VN"}, "khq":
    {"value" : "khq-Latn-ML"}, "kht": {"value" : "kht-Mymr-IN"}, "khs": {"value" : "khs-Latn-ZZ"}, "vo": {"value" : "vo-Latn-001"}, "khw": {"value" : "khw-Arab-PK"}, "bwr": {"value" : "bwr-Latn-ZZ"}, "khz": {"value" : "khz-Latn-ZZ"}, "und-ZW": {"value" : "sn-Latn-ZW"}, "xbi": {"value" : "xbi-Latn-ZZ"}, "gaa": {"value" : "gaa-Latn-GH"}, "syl": {"value" : "syl-Beng-BD"}, "wa": {"value" : "wa-Latn-BE"}, "gag": {"value" : "gag-Latn-MD"}, "gaf": {"value" : "gaf-Latn-ZZ"}, "kij": {"value" : "kij-Latn-ZZ"}, "syr":
    {"value" : "syr-Syrc-IQ"}, "und-YE": {"value" : "ar-Arab-YE"}, "gah": {"value" : "gah-Latn-ZZ"}, "gaj": {"value" : "gaj-Latn-ZZ"}, "gam": {"value" : "gam-Latn-ZZ"}, "bxh": {"value" : "bxh-Latn-ZZ"}, "gan": {"value" : "gan-Hans-CN"}, "kiu": {"value" : "kiu-Latn-TR"}, "kiw": {"value" : "kiw-Latn-ZZ"}, "wo": {"value" : "wo-Latn-SN"}, "gaw": {"value" : "gaw-Latn-ZZ"}, "und-Sarb": {"value" : "xsa-Sarb-YE"}, "gay": {"value" : "gay-Latn-ID"}, "und-YT": {"value" : "fr-Latn-YT"}, "kjd": {"value" : "kjd-Latn-ZZ"}
    , "szl": {"value" : "szl-Latn-PL"}, "xco": {"value" : "xco-Chrs-UZ"}, "xcr": {"value" : "xcr-Cari-TR"}, "gba": {"value" : "gba-Latn-ZZ"}, "und-Mult": {"value" : "skr-Mult-PK"}, "kjg": {"value" : "kjg-Laoo-LA"}, "gbf": {"value" : "gbf-Latn-ZZ"}, "oro": {"value" : "oro-Latn-ZZ"}, "und-Hatr": {"value" : "mis-Hatr-IQ"}, "bye": {"value" : "bye-Latn-ZZ"}, "xh": {"value" : "xh-Latn-ZA"}, "gbm": {"value" : "gbm-Deva-IN"}, "oru": {"value" : "oru-Arab-ZZ"}, "kjs": {"value" : "kjs-Latn-ZZ"}, "byn": {"value" : "byn-Ethi-ER"}
    , "und-XK": {"value" : "sq-Latn-XK"}, "yue-CN": {"value" : "yue-Hans-CN"}, "und-Lepc": {"value" : "lep-Lepc-IN"}, "byr": {"value" : "byr-Latn-ZZ"}, "kjy": {"value" : "kjy-Latn-ZZ"}, "osa": {"value" : "osa-Osge-US"}, "bys": {"value" : "bys-Latn-ZZ"}, "byv": {"value" : "byv-Latn-CM"}, "gbz": {"value" : "gbz-Arab-IR"}, "gby": {"value" : "gby-Latn-ZZ"}, "byx": {"value" : "byx-Latn-ZZ"}, "kkc": {"value" : "kkc-Latn-ZZ"}, "und-VU": {"value" : "bi-Latn-VU"}, "bza": {"value" : "bza-Latn-ZZ"}, "und-Goth": {"value"
    : "got-Goth-UA"}, "kkj": {"value" : "kkj-Latn-CM"}, "bze": {"value" : "bze-Latn-ML"}, "und-Avst": {"value" : "ae-Avst-IR"}, "bzf": {"value" : "bzf-Latn-ZZ"}, "yi": {"value" : "yi-Hebr-001"}, "bzh": {"value" : "bzh-Latn-ZZ"}, "und-WF": {"value" : "fr-Latn-WF"}, "yo": {"value" : "yo-Latn-NG"}, "gcr": {"value" : "gcr-Latn-GF"}, "ota": {"value" : "ota-Arab-ZZ"}, "und-WS": {"value" : "sm-Latn-WS"}, "bzw": {"value" : "bzw-Latn-ZZ"}, "und-UZ": {"value" : "uz-Latn-UZ"}, "und-UY": {"value" : "es-Latn-UY"}, "otk":
    {"value" : "otk-Orkh-MN"}, "xes": {"value" : "xes-Latn-ZZ"}, "za": {"value" : "za-Latn-CN"}, "gde": {"value" : "gde-Latn-ZZ"}, "kln": {"value" : "kln-Latn-KE"}, "und-VA": {"value" : "it-Latn-VA"}, "zh": {"value" : "zh-Hans-CN"}, "gdn": {"value" : "gdn-Latn-ZZ"}, "klq": {"value" : "klq-Latn-ZZ"}, "und-Saur": {"value" : "saz-Saur-IN"}, "klt": {"value" : "klt-Latn-ZZ"}, "und-VE": {"value" : "es-Latn-VE"}, "gdr": {"value" : "gdr-Latn-ZZ"}, "klx": {"value" : "klx-Latn-ZZ"}, "und-VN": {"value" : "vi-Latn-VN"}
    , "kk-MN": {"value" : "kk-Arab-MN"}, "zu": {"value" : "zu-Latn-ZA"}, "und-Armn": {"value" : "hy-Armn-AM"}, "kmb": {"value" : "kmb-Latn-AO"}, "und-TR": {"value" : "tr-Latn-TR"}, "geb": {"value" : "geb-Latn-ZZ"}, "und-TW": {"value" : "zh-Hant-TW"}, "kmh": {"value" : "kmh-Latn-ZZ"}, "und-TV": {"value" : "tvl-Latn-TV"}, "und-TZ": {"value" : "sw-Latn-TZ"}, "kmo": {"value" : "kmo-Latn-ZZ"}, "gej": {"value" : "gej-Latn-ZZ"}, "und-UA": {"value" : "uk-Cyrl-UA"}, "gel": {"value" : "gel-Latn-ZZ"}, "kms": {"value" :
    "kms-Latn-ZZ"}, "kmu": {"value" : "kmu-Latn-ZZ"}, "kmw": {"value" : "kmw-Latn-ZZ"}, "und-Tibt": {"value" : "bo-Tibt-CN"}, "und-UG": {"value" : "sw-Latn-UG"}, "und-Armi": {"value" : "arc-Armi-IR"}, "gez": {"value" : "gez-Ethi-ET"}, "und-ST": {"value" : "pt-Latn-ST"}, "knf": {"value" : "knf-Latn-GW"}, "und-SR": {"value" : "nl-Latn-SR"}, "und-SV": {"value" : "es-Latn-SV"}, "und-SY": {"value" : "ar-Arab-SY"}, "knp": {"value" : "knp-Latn-ZZ"}, "gfk": {"value" : "gfk-Latn-ZZ"}, "und-TD": {"value" : "fr-Latn-TD"}
    , "und-TH": {"value" : "th-Thai-TH"}, "und-TG": {"value" : "fr-Latn-TG"}, "und-TF": {"value" : "fr-Latn-TF"}, "und-TM": {"value" : "tk-Latn-TM"}, "und-TL": {"value" : "pt-Latn-TL"}, "und-TK": {"value" : "tkl-Latn-TK"}, "und-TJ": {"value" : "tg-Cyrl-TJ"}, "und-TO": {"value" : "to-Latn-TO"}, "und-TN": {"value" : "ar-Arab-TN"}, "und-RS": {"value" : "sr-Cyrl-RS"}, "koi": {"value" : "koi-Cyrl-RU"}, "und-RW": {"value" : "rw-Latn-RW"}, "kok": {"value" : "kok-Deva-IN"}, "und-RU": {"value" : "ru-Cyrl-RU"}, "kol":
    {"value" : "kol-Latn-ZZ"}, "kos": {"value" : "kos-Latn-FM"}, "ggn": {"value" : "ggn-Deva-NP"}, "und-SD": {"value" : "ar-Arab-SD"}, "und-SC": {"value" : "fr-Latn-SC"}, "und-SA": {"value" : "ar-Arab-SA"}, "koz": {"value" : "koz-Latn-ZZ"}, "und-SE": {"value" : "sv-Latn-SE"}, "und-SK": {"value" : "sk-Latn-SK"}, "und-SJ": {"value" : "nb-Latn-SJ"}, "und-SI": {"value" : "sl-Latn-SI"}, "taj": {"value" : "taj-Deva-NP"}, "und-SO": {"value" : "so-Latn-SO"}, "tal": {"value" : "tal-Latn-ZZ"}, "und-SN": {"value" : "fr-Latn-SN"}
    , "und-Osge": {"value" : "osa-Osge-US"}, "und-SM": {"value" : "it-Latn-SM"}, "kpf": {"value" : "kpf-Latn-ZZ"}, "tan": {"value" : "tan-Latn-ZZ"}, "kpe": {"value" : "kpe-Latn-LR"}, "und-QO": {"value" : "en-Latn-DG"}, "taq": {"value" : "taq-Latn-ZZ"}, "kpo": {"value" : "kpo-Latn-ZZ"}, "kpr": {"value" : "kpr-Latn-ZZ"}, "kpx": {"value" : "kpx-Latn-ZZ"}, "ghs": {"value" : "ghs-Latn-ZZ"}, "und-Lana": {"value" : "nod-Lana-TH"}, "tbc": {"value" : "tbc-Latn-ZZ"}, "und-RE": {"value" : "fr-Latn-RE"}, "tbd": {"value"
    : "tbd-Latn-ZZ"}, "tbg": {"value" : "tbg-Latn-ZZ"}, "tbf": {"value" : "tbf-Latn-ZZ"}, "und-RO": {"value" : "ro-Latn-RO"}, "kqb": {"value" : "kqb-Latn-ZZ"}, "tbo": {"value" : "tbo-Latn-ZZ"}, "kqf": {"value" : "kqf-Latn-ZZ"}, "und-PT": {"value" : "pt-Latn-PT"}, "und-PS": {"value" : "ar-Arab-PS"}, "cad": {"value" : "cad-Latn-US"}, "und-PR": {"value" : "es-Latn-PR"}, "tbw": {"value" : "tbw-Latn-PH"}, "und-PY": {"value" : "gn-Latn-PY"}, "gim": {"value" : "gim-Latn-ZZ"}, "und-PW": {"value" : "pau-Latn-PW"}, "gil":
    {"value" : "gil-Latn-KI"}, "kqs": {"value" : "kqs-Latn-ZZ"}, "tbz": {"value" : "tbz-Latn-ZZ"}, "und-Laoo": {"value" : "lo-Laoo-LA"}, "can": {"value" : "can-Latn-ZZ"}, "und-QA": {"value" : "ar-Arab-QA"}, "kqy": {"value" : "kqy-Ethi-ZZ"}, "ms-CC": {"value" : "ms-Arab-CC"}, "tci": {"value" : "tci-Latn-ZZ"}, "krc": {"value" : "krc-Cyrl-RU"}, "krj": {"value" : "krj-Latn-PH"}, "kri": {"value" : "kri-Latn-SL"}, "ozm": {"value" : "ozm-Latn-ZZ"}, "und-OM": {"value" : "ar-Arab-OM"}, "krl": {"value" : "krl-Latn-RU"}
    , "gjk": {"value" : "gjk-Arab-PK"}, "cbj": {"value" : "cbj-Latn-ZZ"}, "gjn": {"value" : "gjn-Latn-ZZ"}, "tcy": {"value" : "tcy-Knda-IN"}, "xla": {"value" : "xla-Latn-ZZ"}, "krs": {"value" : "krs-Latn-ZZ"}, "xlc": {"value" : "xlc-Lyci-TR"}, "kru": {"value" : "kru-Deva-IN"}, "und-PA": {"value" : "es-Latn-PA"}, "xld": {"value" : "xld-Lydi-TR"}, "gju": {"value" : "gju-Arab-PK"}, "und-PE": {"value" : "es-Latn-PE"}, "tdd": {"value" : "tdd-Tale-CN"}, "tdg": {"value" : "tdg-Deva-NP"}, "tdh": {"value" : "tdh-Deva-NP"}
    , "und-PH": {"value" : "fil-Latn-PH"}, "und-PG": {"value" : "tpi-Latn-PG"}, "ksb": {"value" : "ksb-Latn-TZ"}, "und-PF": {"value" : "fr-Latn-PF"}, "und-PM": {"value" : "fr-Latn-PM"}, "ksd": {"value" : "ksd-Latn-ZZ"}, "und-PL": {"value" : "pl-Latn-PL"}, "und-PK": {"value" : "ur-Arab-PK"}, "ksf": {"value" : "ksf-Latn-CM"}};
},
otciu_CLDRHelper_getDefaultLocale$$create = () => {
    return {"value" : "en_GB"};
},
otciu_CLDRHelper_getNumberFormatMap$$create = () => {
    return {"root": {"value" : "#,##0.###"}, "en": {"value" : "#,##0.###"}};
},
otciu_CLDRHelper_getDecimalDataMap$$create = () => {
    return {"root": {"exponentSeparator" : "E", "minusSign" : 45, "perMille" : 8240, "decimalSeparator" : 46, "listSeparator" : 59, "naN" : "NaN", "infinity" : "∞", "groupingSeparator" : 44, "percent" : 37}, "en": {"exponentSeparator" : "E", "minusSign" : 45, "perMille" : 8240, "decimalSeparator" : 46, "listSeparator" : 59, "naN" : "NaN", "infinity" : "∞", "groupingSeparator" : 44, "percent" : 37}};
},
otciu_CLDRHelper_getCurrencyMap$$create = () => {
    return {"root": {"UGS": {"symbol" : "UGS", "name" : "UGS"}, "FJD": {"symbol" : "FJD", "name" : "FJD"}, "MXN": {"symbol" : "MX$", "name" : "MXN"}, "STD": {"symbol" : "STD", "name" : "STD"}, "BRR": {"symbol" : "BRR", "name" : "BRR"}, "LVL": {"symbol" : "LVL", "name" : "LVL"}, "SCR": {"symbol" : "SCR", "name" : "SCR"}, "CDF": {"symbol" : "CDF", "name" : "CDF"}, "MXP": {"symbol" : "MXP", "name" : "MXP"}, "ZAL": {"symbol" : "ZAL", "name" : "ZAL"}, "BBD": {"symbol" : "BBD", "name" : "BBD"}, "HNL": {"symbol" :
    "HNL", "name" : "HNL"}, "UGX": {"symbol" : "UGX", "name" : "UGX"}, "LVR": {"symbol" : "LVR", "name" : "LVR"}, "MXV": {"symbol" : "MXV", "name" : "MXV"}, "ZAR": {"symbol" : "ZAR", "name" : "ZAR"}, "BRZ": {"symbol" : "BRZ", "name" : "BRZ"}, "STN": {"symbol" : "STN", "name" : "STN"}, "CUC": {"symbol" : "CUC", "name" : "CUC"}, "BSD": {"symbol" : "BSD", "name" : "BSD"}, "SDD": {"symbol" : "SDD", "name" : "SDD"}, "SDG": {"symbol" : "SDG", "name" : "SDG"}, "ZRN": {"symbol" : "ZRN", "name" : "ZRN"}, "IQD": {"symbol"
    : "IQD", "name" : "IQD"}, "SDP": {"symbol" : "SDP", "name" : "SDP"}, "CUP": {"symbol" : "CUP", "name" : "CUP"}, "GMD": {"symbol" : "GMD", "name" : "GMD"}, "TWD": {"symbol" : "NT$", "name" : "TWD"}, "RSD": {"symbol" : "RSD", "name" : "RSD"}, "ZRZ": {"symbol" : "ZRZ", "name" : "ZRZ"}, "UYI": {"symbol" : "UYI", "name" : "UYI"}, "MYR": {"symbol" : "MYR", "name" : "MYR"}, "FKP": {"symbol" : "FKP", "name" : "FKP"}, "UYP": {"symbol" : "UYP", "name" : "UYP"}, "XOF": {"symbol" : "CFA", "name" : "XOF"}, "ARA": {"symbol"
    : "ARA", "name" : "ARA"}, "UYU": {"symbol" : "UYU", "name" : "UYU"}, "SUR": {"symbol" : "SUR", "name" : "SUR"}, "UYW": {"symbol" : "UYW", "name" : "UYW"}, "CVE": {"symbol" : "CVE", "name" : "CVE"}, "OMR": {"symbol" : "OMR", "name" : "OMR"}, "KES": {"symbol" : "KES", "name" : "KES"}, "SEK": {"symbol" : "SEK", "name" : "SEK"}, "MZE": {"symbol" : "MZE", "name" : "MZE"}, "ARL": {"symbol" : "ARL", "name" : "ARL"}, "ARM": {"symbol" : "ARM", "name" : "ARM"}, "BTN": {"symbol" : "BTN", "name" : "BTN"}, "GNF": {"symbol"
    : "GNF", "name" : "GNF"}, "ARP": {"symbol" : "ARP", "name" : "ARP"}, "MZN": {"symbol" : "MZN", "name" : "MZN"}, "MZM": {"symbol" : "MZM", "name" : "MZM"}, "SVC": {"symbol" : "SVC", "name" : "SVC"}, "ARS": {"symbol" : "ARS", "name" : "ARS"}, "QAR": {"symbol" : "QAR", "name" : "QAR"}, "IRR": {"symbol" : "IRR", "name" : "IRR"}, "NLG": {"symbol" : "NLG", "name" : "NLG"}, "GNS": {"symbol" : "GNS", "name" : "GNS"}, "XPD": {"symbol" : "XPD", "name" : "XPD"}, "THB": {"symbol" : "THB", "name" : "THB"}, "UZS": {"symbol"
    : "UZS", "name" : "UZS"}, "XPF": {"symbol" : "CFPF", "name" : "XPF"}, "BDT": {"symbol" : "BDT", "name" : "BDT"}, "LYD": {"symbol" : "LYD", "name" : "LYD"}, "BUK": {"symbol" : "BUK", "name" : "BUK"}, "KWD": {"symbol" : "KWD", "name" : "KWD"}, "XPT": {"symbol" : "XPT", "name" : "XPT"}, "RUB": {"symbol" : "RUB", "name" : "RUB"}, "ISK": {"symbol" : "ISK", "name" : "ISK"}, "BEC": {"symbol" : "BEC", "name" : "BEC"}, "ISJ": {"symbol" : "ISJ", "name" : "ISJ"}, "BEF": {"symbol" : "BEF", "name" : "BEF"}, "MKD": {"symbol"
    : "MKD", "name" : "MKD"}, "BEL": {"symbol" : "BEL", "name" : "BEL"}, "RUR": {"symbol" : "RUR", "name" : "RUR"}, "DZD": {"symbol" : "DZD", "name" : "DZD"}, "PAB": {"symbol" : "PAB", "name" : "PAB"}, "MKN": {"symbol" : "MKN", "name" : "MKN"}, "SGD": {"symbol" : "SGD", "name" : "SGD"}, "KGS": {"symbol" : "KGS", "name" : "KGS"}, "HRD": {"symbol" : "HRD", "name" : "HRD"}, "XAF": {"symbol" : "FCFA", "name" : "XAF"}, "XAG": {"symbol" : "XAG", "name" : "XAG"}, "ATS": {"symbol" : "ATS", "name" : "ATS"}, "CHF": {"symbol"
    : "CHF", "name" : "CHF"}, "HRK": {"symbol" : "HRK", "name" : "HRK"}, "ITL": {"symbol" : "ITL", "name" : "ITL"}, "CHE": {"symbol" : "CHE", "name" : "CHE"}, "DJF": {"symbol" : "DJF", "name" : "DJF"}, "MLF": {"symbol" : "MLF", "name" : "MLF"}, "XRE": {"symbol" : "XRE", "name" : "XRE"}, "TZS": {"symbol" : "TZS", "name" : "TZS"}, "ADP": {"symbol" : "ADP", "name" : "ADP"}, "VND": {"symbol" : "₫", "name" : "VND"}, "XAU": {"symbol" : "XAU", "name" : "XAU"}, "AUD": {"symbol" : "A$", "name" : "AUD"}, "CHW": {"symbol"
    : "CHW", "name" : "CHW"}, "KHR": {"symbol" : "KHR", "name" : "KHR"}, "IDR": {"symbol" : "IDR", "name" : "IDR"}, "XBA": {"symbol" : "XBA", "name" : "XBA"}, "KYD": {"symbol" : "KYD", "name" : "KYD"}, "VNN": {"symbol" : "VNN", "name" : "VNN"}, "XBC": {"symbol" : "XBC", "name" : "XBC"}, "YDD": {"symbol" : "YDD", "name" : "YDD"}, "XBB": {"symbol" : "XBB", "name" : "XBB"}, "BWP": {"symbol" : "BWP", "name" : "BWP"}, "GQE": {"symbol" : "GQE", "name" : "GQE"}, "SHP": {"symbol" : "SHP", "name" : "SHP"}, "CYP": {"symbol"
    : "CYP", "name" : "CYP"}, "XBD": {"symbol" : "XBD", "name" : "XBD"}, "TJS": {"symbol" : "TJS", "name" : "TJS"}, "TJR": {"symbol" : "TJR", "name" : "TJR"}, "AED": {"symbol" : "AED", "name" : "AED"}, "RWF": {"symbol" : "RWF", "name" : "RWF"}, "DKK": {"symbol" : "DKK", "name" : "DKK"}, "BGL": {"symbol" : "BGL", "name" : "BGL"}, "ZWD": {"symbol" : "ZWD", "name" : "ZWD"}, "BGN": {"symbol" : "BGN", "name" : "BGN"}, "BGM": {"symbol" : "BGM", "name" : "BGM"}, "YUD": {"symbol" : "YUD", "name" : "YUD"}, "MMK": {"symbol"
    : "MMK", "name" : "MMK"}, "BGO": {"symbol" : "BGO", "name" : "BGO"}, "NOK": {"symbol" : "NOK", "name" : "NOK"}, "SYP": {"symbol" : "SYP", "name" : "SYP"}, "ZWL": {"symbol" : "ZWL", "name" : "ZWL"}, "YUM": {"symbol" : "YUM", "name" : "YUM"}, "LKR": {"symbol" : "LKR", "name" : "LKR"}, "YUN": {"symbol" : "YUN", "name" : "YUN"}, "ZWR": {"symbol" : "ZWR", "name" : "ZWR"}, "CZK": {"symbol" : "CZK", "name" : "CZK"}, "IEP": {"symbol" : "IEP", "name" : "IEP"}, "YUR": {"symbol" : "YUR", "name" : "YUR"}, "GRD": {"symbol"
    : "GRD", "name" : "GRD"}, "XCD": {"symbol" : "EC$", "name" : "XCD"}, "HTG": {"symbol" : "HTG", "name" : "HTG"}, "XSU": {"symbol" : "XSU", "name" : "XSU"}, "AFA": {"symbol" : "AFA", "name" : "AFA"}, "BHD": {"symbol" : "BHD", "name" : "BHD"}, "SIT": {"symbol" : "SIT", "name" : "SIT"}, "PTE": {"symbol" : "PTE", "name" : "PTE"}, "KZT": {"symbol" : "KZT", "name" : "KZT"}, "SZL": {"symbol" : "SZL", "name" : "SZL"}, "YER": {"symbol" : "YER", "name" : "YER"}, "AFN": {"symbol" : "AFN", "name" : "AFN"}, "BYB": {"symbol"
    : "BYB", "name" : "BYB"}, "RHD": {"symbol" : "RHD", "name" : "RHD"}, "AWG": {"symbol" : "AWG", "name" : "AWG"}, "NPR": {"symbol" : "NPR", "name" : "NPR"}, "MNT": {"symbol" : "MNT", "name" : "MNT"}, "GBP": {"symbol" : "£", "name" : "GBP"}, "BYN": {"symbol" : "BYN", "name" : "BYN"}, "XTS": {"symbol" : "XTS", "name" : "XTS"}, "HUF": {"symbol" : "HUF", "name" : "HUF"}, "BYR": {"symbol" : "BYR", "name" : "BYR"}, "BIF": {"symbol" : "BIF", "name" : "BIF"}, "XUA": {"symbol" : "XUA", "name" : "XUA"}, "XDR": {"symbol"
    : "XDR", "name" : "XDR"}, "BZD": {"symbol" : "BZD", "name" : "BZD"}, "MOP": {"symbol" : "MOP", "name" : "MOP"}, "NAD": {"symbol" : "NAD", "name" : "NAD"}, "SKK": {"symbol" : "SKK", "name" : "SKK"}, "PEI": {"symbol" : "PEI", "name" : "PEI"}, "TMM": {"symbol" : "TMM", "name" : "TMM"}, "PEN": {"symbol" : "PEN", "name" : "PEN"}, "WST": {"symbol" : "WST", "name" : "WST"}, "TMT": {"symbol" : "TMT", "name" : "TMT"}, "FRF": {"symbol" : "FRF", "name" : "FRF"}, "CLF": {"symbol" : "CLF", "name" : "CLF"}, "CLE": {"symbol"
    : "CLE", "name" : "CLE"}, "PES": {"symbol" : "PES", "name" : "PES"}, "GTQ": {"symbol" : "GTQ", "name" : "GTQ"}, "CLP": {"symbol" : "CLP", "name" : "CLP"}, "XEU": {"symbol" : "XEU", "name" : "XEU"}, "TND": {"symbol" : "TND", "name" : "TND"}, "SLL": {"symbol" : "SLL", "name" : "SLL"}, "XFO": {"symbol" : "XFO", "name" : "XFO"}, "DOP": {"symbol" : "DOP", "name" : "DOP"}, "KMF": {"symbol" : "KMF", "name" : "KMF"}, "XFU": {"symbol" : "XFU", "name" : "XFU"}, "GEK": {"symbol" : "GEK", "name" : "GEK"}, "GEL": {"symbol"
    : "GEL", "name" : "GEL"}, "MAD": {"symbol" : "MAD", "name" : "MAD"}, "MAF": {"symbol" : "MAF", "name" : "MAF"}, "AZM": {"symbol" : "AZM", "name" : "AZM"}, "TOP": {"symbol" : "TOP", "name" : "TOP"}, "AZN": {"symbol" : "AZN", "name" : "AZN"}, "PGK": {"symbol" : "PGK", "name" : "PGK"}, "CNH": {"symbol" : "CNH", "name" : "CNH"}, "UAH": {"symbol" : "UAH", "name" : "UAH"}, "UAK": {"symbol" : "UAK", "name" : "UAK"}, "ERN": {"symbol" : "ERN", "name" : "ERN"}, "TPE": {"symbol" : "TPE", "name" : "TPE"}, "MRO": {"symbol"
    : "MRO", "name" : "MRO"}, "CNX": {"symbol" : "CNX", "name" : "CNX"}, "CNY": {"symbol" : "CN¥", "name" : "CNY"}, "MRU": {"symbol" : "MRU", "name" : "MRU"}, "ESA": {"symbol" : "ESA", "name" : "ESA"}, "GWE": {"symbol" : "GWE", "name" : "GWE"}, "ESB": {"symbol" : "ESB", "name" : "ESB"}, "BMD": {"symbol" : "BMD", "name" : "BMD"}, "PHP": {"symbol" : "PHP", "name" : "PHP"}, "XXX": {"symbol" : "¤", "name" : "XXX"}, "PYG": {"symbol" : "PYG", "name" : "PYG"}, "JMD": {"symbol" : "JMD", "name" : "JMD"}, "GWP": {"symbol"
    : "GWP", "name" : "GWP"}, "ESP": {"symbol" : "ESP", "name" : "ESP"}, "COP": {"symbol" : "COP", "name" : "COP"}, "USD": {"symbol" : "US$", "name" : "USD"}, "COU": {"symbol" : "COU", "name" : "COU"}, "MCF": {"symbol" : "MCF", "name" : "MCF"}, "USN": {"symbol" : "USN", "name" : "USN"}, "ETB": {"symbol" : "ETB", "name" : "ETB"}, "VEB": {"symbol" : "VEB", "name" : "VEB"}, "ECS": {"symbol" : "ECS", "name" : "ECS"}, "USS": {"symbol" : "USS", "name" : "USS"}, "SOS": {"symbol" : "SOS", "name" : "SOS"}, "VEF": {"symbol"
    : "VEF", "name" : "VEF"}, "VUV": {"symbol" : "VUV", "name" : "VUV"}, "LAK": {"symbol" : "LAK", "name" : "LAK"}, "BND": {"symbol" : "BND", "name" : "BND"}, "ECV": {"symbol" : "ECV", "name" : "ECV"}, "ZMK": {"symbol" : "ZMK", "name" : "ZMK"}, "LRD": {"symbol" : "LRD", "name" : "LRD"}, "ALK": {"symbol" : "ALK", "name" : "ALK"}, "ALL": {"symbol" : "ALL", "name" : "ALL"}, "GHC": {"symbol" : "GHC", "name" : "GHC"}, "MTL": {"symbol" : "MTL", "name" : "MTL"}, "VES": {"symbol" : "VES", "name" : "VES"}, "ZMW": {"symbol"
    : "ZMW", "name" : "ZMW"}, "MTP": {"symbol" : "MTP", "name" : "MTP"}, "ILP": {"symbol" : "ILP", "name" : "ILP"}, "MDC": {"symbol" : "MDC", "name" : "MDC"}, "ILR": {"symbol" : "ILR", "name" : "ILR"}, "TRL": {"symbol" : "TRL", "name" : "TRL"}, "ILS": {"symbol" : "₪", "name" : "ILS"}, "GHS": {"symbol" : "GHS", "name" : "GHS"}, "GYD": {"symbol" : "GYD", "name" : "GYD"}, "KPW": {"symbol" : "KPW", "name" : "KPW"}, "BOB": {"symbol" : "BOB", "name" : "BOB"}, "MDL": {"symbol" : "MDL", "name" : "MDL"}, "AMD": {"symbol"
    : "AMD", "name" : "AMD"}, "TRY": {"symbol" : "TRY", "name" : "TRY"}, "LBP": {"symbol" : "LBP", "name" : "LBP"}, "BOL": {"symbol" : "BOL", "name" : "BOL"}, "JOD": {"symbol" : "JOD", "name" : "JOD"}, "HKD": {"symbol" : "HK$", "name" : "HKD"}, "BOP": {"symbol" : "BOP", "name" : "BOP"}, "EUR": {"symbol" : "€", "name" : "EUR"}, "LSL": {"symbol" : "LSL", "name" : "LSL"}, "CAD": {"symbol" : "CA$", "name" : "CAD"}, "BOV": {"symbol" : "BOV", "name" : "BOV"}, "EEK": {"symbol" : "EEK", "name" : "EEK"}, "MUR": {"symbol"
    : "MUR", "name" : "MUR"}, "ROL": {"symbol" : "ROL", "name" : "ROL"}, "GIP": {"symbol" : "GIP", "name" : "GIP"}, "RON": {"symbol" : "RON", "name" : "RON"}, "NGN": {"symbol" : "NGN", "name" : "NGN"}, "CRC": {"symbol" : "CRC", "name" : "CRC"}, "PKR": {"symbol" : "PKR", "name" : "PKR"}, "ANG": {"symbol" : "ANG", "name" : "ANG"}, "KRH": {"symbol" : "KRH", "name" : "KRH"}, "SRD": {"symbol" : "SRD", "name" : "SRD"}, "LTL": {"symbol" : "LTL", "name" : "LTL"}, "SAR": {"symbol" : "SAR", "name" : "SAR"}, "TTD": {"symbol"
    : "TTD", "name" : "TTD"}, "MVP": {"symbol" : "MVP", "name" : "MVP"}, "MVR": {"symbol" : "MVR", "name" : "MVR"}, "KRO": {"symbol" : "KRO", "name" : "KRO"}, "SRG": {"symbol" : "SRG", "name" : "SRG"}, "DDM": {"symbol" : "DDM", "name" : "DDM"}, "INR": {"symbol" : "₹", "name" : "INR"}, "LTT": {"symbol" : "LTT", "name" : "LTT"}, "KRW": {"symbol" : "₩", "name" : "KRW"}, "JPY": {"symbol" : "JP¥", "name" : "JPY"}, "AOA": {"symbol" : "AOA", "name" : "AOA"}, "PLN": {"symbol" : "PLN", "name" : "PLN"}, "SBD": {"symbol"
    : "SBD", "name" : "SBD"}, "CSD": {"symbol" : "CSD", "name" : "CSD"}, "CSK": {"symbol" : "CSK", "name" : "CSK"}, "LUC": {"symbol" : "LUC", "name" : "LUC"}, "LUF": {"symbol" : "LUF", "name" : "LUF"}, "AOK": {"symbol" : "AOK", "name" : "AOK"}, "PLZ": {"symbol" : "PLZ", "name" : "PLZ"}, "AON": {"symbol" : "AON", "name" : "AON"}, "MWK": {"symbol" : "MWK", "name" : "MWK"}, "LUL": {"symbol" : "LUL", "name" : "LUL"}, "AOR": {"symbol" : "AOR", "name" : "AOR"}, "BAD": {"symbol" : "BAD", "name" : "BAD"}, "MGA": {"symbol"
    : "MGA", "name" : "MGA"}, "NIC": {"symbol" : "NIC", "name" : "NIC"}, "FIM": {"symbol" : "FIM", "name" : "FIM"}, "DEM": {"symbol" : "DEM", "name" : "DEM"}, "MGF": {"symbol" : "MGF", "name" : "MGF"}, "BAM": {"symbol" : "BAM", "name" : "BAM"}, "BAN": {"symbol" : "BAN", "name" : "BAN"}, "EGP": {"symbol" : "EGP", "name" : "EGP"}, "SSP": {"symbol" : "SSP", "name" : "SSP"}, "BRC": {"symbol" : "BRC", "name" : "BRC"}, "BRB": {"symbol" : "BRB", "name" : "BRB"}, "BRE": {"symbol" : "BRE", "name" : "BRE"}, "NIO": {"symbol"
    : "NIO", "name" : "NIO"}, "NZD": {"symbol" : "NZ$", "name" : "NZD"}, "BRL": {"symbol" : "R$", "name" : "BRL"}, "BRN": {"symbol" : "BRN", "name" : "BRN"}}, "en": {"UGS": {"symbol" : "UGS", "name" : "Ugandan Shilling (1966–1987)"}, "FJD": {"symbol" : "FJD", "name" : "Fijian Dollar"}, "MXN": {"symbol" : "MX$", "name" : "Mexican Peso"}, "STD": {"symbol" : "STD", "name" : "São Tomé & Príncipe Dobra (1977–2017)"}, "BRR": {"symbol" : "BRR", "name" : "Brazilian Cruzeiro (1993–1994)"}, "LVL": {"symbol" : "LVL", "name"
    : "Latvian Lats"}, "SCR": {"symbol" : "SCR", "name" : "Seychellois Rupee"}, "CDF": {"symbol" : "CDF", "name" : "Congolese Franc"}, "MXP": {"symbol" : "MXP", "name" : "Mexican Silver Peso (1861–1992)"}, "ZAL": {"symbol" : "ZAL", "name" : "South African Rand (financial)"}, "BBD": {"symbol" : "BBD", "name" : "Barbadian Dollar"}, "HNL": {"symbol" : "HNL", "name" : "Honduran Lempira"}, "UGX": {"symbol" : "UGX", "name" : "Ugandan Shilling"}, "LVR": {"symbol" : "LVR", "name" : "Latvian Ruble"}, "MXV": {"symbol"
    : "MXV", "name" : "Mexican Investment Unit"}, "ZAR": {"symbol" : "ZAR", "name" : "South African Rand"}, "BRZ": {"symbol" : "BRZ", "name" : "Brazilian Cruzeiro (1942–1967)"}, "STN": {"symbol" : "STN", "name" : "São Tomé & Príncipe Dobra"}, "CUC": {"symbol" : "CUC", "name" : "Cuban Convertible Peso"}, "BSD": {"symbol" : "BSD", "name" : "Bahamian Dollar"}, "SDD": {"symbol" : "SDD", "name" : "Sudanese Dinar (1992–2007)"}, "SDG": {"symbol" : "SDG", "name" : "Sudanese Pound"}, "ZRN": {"symbol" : "ZRN", "name"
    : "Zairean New Zaire (1993–1998)"}, "IQD": {"symbol" : "IQD", "name" : "Iraqi Dinar"}, "SDP": {"symbol" : "SDP", "name" : "Sudanese Pound (1957–1998)"}, "CUP": {"symbol" : "CUP", "name" : "Cuban Peso"}, "GMD": {"symbol" : "GMD", "name" : "Gambian Dalasi"}, "TWD": {"symbol" : "NT$", "name" : "New Taiwan Dollar"}, "RSD": {"symbol" : "RSD", "name" : "Serbian Dinar"}, "ZRZ": {"symbol" : "ZRZ", "name" : "Zairean Zaire (1971–1993)"}, "UYI": {"symbol" : "UYI", "name" : "Uruguayan Peso (Indexed Units)"}, "MYR":
    {"symbol" : "MYR", "name" : "Malaysian Ringgit"}, "FKP": {"symbol" : "FKP", "name" : "Falkland Islands Pound"}, "UYP": {"symbol" : "UYP", "name" : "Uruguayan Peso (1975–1993)"}, "XOF": {"symbol" : "CFA", "name" : "West African CFA Franc"}, "ARA": {"symbol" : "ARA", "name" : "Argentine Austral"}, "UYU": {"symbol" : "UYU", "name" : "Uruguayan Peso"}, "SUR": {"symbol" : "SUR", "name" : "Soviet Rouble"}, "UYW": {"symbol" : "UYW", "name" : "Uruguayan Nominal Wage Index Unit"}, "CVE": {"symbol" : "CVE", "name"
    : "Cape Verdean Escudo"}, "OMR": {"symbol" : "OMR", "name" : "Omani Rial"}, "KES": {"symbol" : "KES", "name" : "Kenyan Shilling"}, "SEK": {"symbol" : "SEK", "name" : "Swedish Krona"}, "MZE": {"symbol" : "MZE", "name" : "Mozambican Escudo"}, "ARL": {"symbol" : "ARL", "name" : "Argentine Peso Ley (1970–1983)"}, "ARM": {"symbol" : "ARM", "name" : "Argentine Peso (1881–1970)"}, "BTN": {"symbol" : "BTN", "name" : "Bhutanese Ngultrum"}, "GNF": {"symbol" : "GNF", "name" : "Guinean Franc"}, "ARP": {"symbol" : "ARP",
    "name" : "Argentine Peso (1983–1985)"}, "MZN": {"symbol" : "MZN", "name" : "Mozambican Metical"}, "MZM": {"symbol" : "MZM", "name" : "Mozambican Metical (1980–2006)"}, "SVC": {"symbol" : "SVC", "name" : "Salvadoran Colón"}, "ARS": {"symbol" : "ARS", "name" : "Argentine Peso"}, "QAR": {"symbol" : "QAR", "name" : "Qatari Rial"}, "IRR": {"symbol" : "IRR", "name" : "Iranian Rial"}, "NLG": {"symbol" : "NLG", "name" : "Dutch Guilder"}, "GNS": {"symbol" : "GNS", "name" : "Guinean Syli"}, "XPD": {"symbol" : "XPD",
    "name" : "Palladium"}, "THB": {"symbol" : "THB", "name" : "Thai Baht"}, "UZS": {"symbol" : "UZS", "name" : "Uzbekistani Som"}, "XPF": {"symbol" : "CFPF", "name" : "CFP Franc"}, "BDT": {"symbol" : "BDT", "name" : "Bangladeshi Taka"}, "LYD": {"symbol" : "LYD", "name" : "Libyan Dinar"}, "BUK": {"symbol" : "BUK", "name" : "Burmese Kyat"}, "KWD": {"symbol" : "KWD", "name" : "Kuwaiti Dinar"}, "XPT": {"symbol" : "XPT", "name" : "Platinum"}, "RUB": {"symbol" : "RUB", "name" : "Russian Ruble"}, "ISK": {"symbol" :
    "ISK", "name" : "Icelandic Króna"}, "BEC": {"symbol" : "BEC", "name" : "Belgian Franc (convertible)"}, "ISJ": {"symbol" : "ISJ", "name" : "Icelandic Króna (1918–1981)"}, "BEF": {"symbol" : "BEF", "name" : "Belgian Franc"}, "MKD": {"symbol" : "MKD", "name" : "Macedonian Denar"}, "BEL": {"symbol" : "BEL", "name" : "Belgian Franc (financial)"}, "RUR": {"symbol" : "RUR", "name" : "Russian Ruble (1991–1998)"}, "DZD": {"symbol" : "DZD", "name" : "Algerian Dinar"}, "PAB": {"symbol" : "PAB", "name" : "Panamanian Balboa"}
    , "MKN": {"symbol" : "MKN", "name" : "Macedonian Denar (1992–1993)"}, "SGD": {"symbol" : "SGD", "name" : "Singapore Dollar"}, "KGS": {"symbol" : "KGS", "name" : "Kyrgystani Som"}, "HRD": {"symbol" : "HRD", "name" : "Croatian Dinar"}, "XAF": {"symbol" : "FCFA", "name" : "Central African CFA Franc"}, "XAG": {"symbol" : "XAG", "name" : "Silver"}, "ATS": {"symbol" : "ATS", "name" : "Austrian Schilling"}, "CHF": {"symbol" : "CHF", "name" : "Swiss Franc"}, "HRK": {"symbol" : "HRK", "name" : "Croatian Kuna"}, "ITL":
    {"symbol" : "ITL", "name" : "Italian Lira"}, "CHE": {"symbol" : "CHE", "name" : "WIR Euro"}, "DJF": {"symbol" : "DJF", "name" : "Djiboutian Franc"}, "MLF": {"symbol" : "MLF", "name" : "Malian Franc"}, "XRE": {"symbol" : "XRE", "name" : "RINET Funds"}, "TZS": {"symbol" : "TZS", "name" : "Tanzanian Shilling"}, "ADP": {"symbol" : "ADP", "name" : "Andorran Peseta"}, "VND": {"symbol" : "₫", "name" : "Vietnamese Dong"}, "XAU": {"symbol" : "XAU", "name" : "Gold"}, "AUD": {"symbol" : "A$", "name" : "Australian Dollar"}
    , "CHW": {"symbol" : "CHW", "name" : "WIR Franc"}, "KHR": {"symbol" : "KHR", "name" : "Cambodian Riel"}, "IDR": {"symbol" : "IDR", "name" : "Indonesian Rupiah"}, "XBA": {"symbol" : "XBA", "name" : "European Composite Unit"}, "KYD": {"symbol" : "KYD", "name" : "Cayman Islands Dollar"}, "VNN": {"symbol" : "VNN", "name" : "Vietnamese Dong (1978–1985)"}, "XBC": {"symbol" : "XBC", "name" : "European Unit of Account (XBC)"}, "YDD": {"symbol" : "YDD", "name" : "Yemeni Dinar"}, "XBB": {"symbol" : "XBB", "name" :
    "European Monetary Unit"}, "BWP": {"symbol" : "BWP", "name" : "Botswanan Pula"}, "GQE": {"symbol" : "GQE", "name" : "Equatorial Guinean Ekwele"}, "SHP": {"symbol" : "SHP", "name" : "St. Helena Pound"}, "CYP": {"symbol" : "CYP", "name" : "Cypriot Pound"}, "XBD": {"symbol" : "XBD", "name" : "European Unit of Account (XBD)"}, "TJS": {"symbol" : "TJS", "name" : "Tajikistani Somoni"}, "TJR": {"symbol" : "TJR", "name" : "Tajikistani Ruble"}, "AED": {"symbol" : "AED", "name" : "United Arab Emirates Dirham"}, "RWF":
    {"symbol" : "RWF", "name" : "Rwandan Franc"}, "DKK": {"symbol" : "DKK", "name" : "Danish Krone"}, "BGL": {"symbol" : "BGL", "name" : "Bulgarian Hard Lev"}, "ZWD": {"symbol" : "ZWD", "name" : "Zimbabwean Dollar (1980–2008)"}, "BGN": {"symbol" : "BGN", "name" : "Bulgarian Lev"}, "BGM": {"symbol" : "BGM", "name" : "Bulgarian Socialist Lev"}, "YUD": {"symbol" : "YUD", "name" : "Yugoslavian Hard Dinar (1966–1990)"}, "MMK": {"symbol" : "MMK", "name" : "Myanmar Kyat"}, "BGO": {"symbol" : "BGO", "name" : "Bulgarian Lev (1879–1952)"}
    , "NOK": {"symbol" : "NOK", "name" : "Norwegian Krone"}, "SYP": {"symbol" : "SYP", "name" : "Syrian Pound"}, "ZWL": {"symbol" : "ZWL", "name" : "Zimbabwean Dollar (2009)"}, "YUM": {"symbol" : "YUM", "name" : "Yugoslavian New Dinar (1994–2002)"}, "LKR": {"symbol" : "LKR", "name" : "Sri Lankan Rupee"}, "YUN": {"symbol" : "YUN", "name" : "Yugoslavian Convertible Dinar (1990–1992)"}, "ZWR": {"symbol" : "ZWR", "name" : "Zimbabwean Dollar (2008)"}, "CZK": {"symbol" : "CZK", "name" : "Czech Koruna"}, "IEP": {"symbol"
    : "IEP", "name" : "Irish Pound"}, "YUR": {"symbol" : "YUR", "name" : "Yugoslavian Reformed Dinar (1992–1993)"}, "GRD": {"symbol" : "GRD", "name" : "Greek Drachma"}, "XCD": {"symbol" : "EC$", "name" : "East Caribbean Dollar"}, "HTG": {"symbol" : "HTG", "name" : "Haitian Gourde"}, "XSU": {"symbol" : "XSU", "name" : "Sucre"}, "AFA": {"symbol" : "AFA", "name" : "Afghan Afghani (1927–2002)"}, "BHD": {"symbol" : "BHD", "name" : "Bahraini Dinar"}, "SIT": {"symbol" : "SIT", "name" : "Slovenian Tolar"}, "PTE": {"symbol"
    : "PTE", "name" : "Portuguese Escudo"}, "KZT": {"symbol" : "KZT", "name" : "Kazakhstani Tenge"}, "SZL": {"symbol" : "SZL", "name" : "Swazi Lilangeni"}, "YER": {"symbol" : "YER", "name" : "Yemeni Rial"}, "AFN": {"symbol" : "AFN", "name" : "Afghan Afghani"}, "BYB": {"symbol" : "BYB", "name" : "Belarusian Ruble (1994–1999)"}, "RHD": {"symbol" : "RHD", "name" : "Rhodesian Dollar"}, "AWG": {"symbol" : "AWG", "name" : "Aruban Florin"}, "NPR": {"symbol" : "NPR", "name" : "Nepalese Rupee"}, "MNT": {"symbol" : "MNT",
    "name" : "Mongolian Tugrik"}, "GBP": {"symbol" : "£", "name" : "British Pound"}, "BYN": {"symbol" : "BYN", "name" : "Belarusian Ruble"}, "XTS": {"symbol" : "XTS", "name" : "Testing Currency Code"}, "HUF": {"symbol" : "HUF", "name" : "Hungarian Forint"}, "BYR": {"symbol" : "BYR", "name" : "Belarusian Ruble (2000–2016)"}, "BIF": {"symbol" : "BIF", "name" : "Burundian Franc"}, "XUA": {"symbol" : "XUA", "name" : "ADB Unit of Account"}, "XDR": {"symbol" : "XDR", "name" : "Special Drawing Rights"}, "BZD": {"symbol"
    : "BZD", "name" : "Belize Dollar"}, "MOP": {"symbol" : "MOP", "name" : "Macanese Pataca"}, "NAD": {"symbol" : "NAD", "name" : "Namibian Dollar"}, "SKK": {"symbol" : "SKK", "name" : "Slovak Koruna"}, "PEI": {"symbol" : "PEI", "name" : "Peruvian Inti"}, "TMM": {"symbol" : "TMM", "name" : "Turkmenistani Manat (1993–2009)"}, "PEN": {"symbol" : "PEN", "name" : "Peruvian Sol"}, "WST": {"symbol" : "WST", "name" : "Samoan Tala"}, "TMT": {"symbol" : "TMT", "name" : "Turkmenistani Manat"}, "FRF": {"symbol" : "FRF",
    "name" : "French Franc"}, "CLF": {"symbol" : "CLF", "name" : "Chilean Unit of Account (UF)"}, "CLE": {"symbol" : "CLE", "name" : "Chilean Escudo"}, "PES": {"symbol" : "PES", "name" : "Peruvian Sol (1863–1965)"}, "GTQ": {"symbol" : "GTQ", "name" : "Guatemalan Quetzal"}, "CLP": {"symbol" : "CLP", "name" : "Chilean Peso"}, "XEU": {"symbol" : "XEU", "name" : "European Currency Unit"}, "TND": {"symbol" : "TND", "name" : "Tunisian Dinar"}, "SLL": {"symbol" : "SLL", "name" : "Sierra Leonean Leone"}, "XFO": {"symbol"
    : "XFO", "name" : "French Gold Franc"}, "DOP": {"symbol" : "DOP", "name" : "Dominican Peso"}, "KMF": {"symbol" : "KMF", "name" : "Comorian Franc"}, "XFU": {"symbol" : "XFU", "name" : "French UIC-Franc"}, "GEK": {"symbol" : "GEK", "name" : "Georgian Kupon Larit"}, "GEL": {"symbol" : "GEL", "name" : "Georgian Lari"}, "MAD": {"symbol" : "MAD", "name" : "Moroccan Dirham"}, "MAF": {"symbol" : "MAF", "name" : "Moroccan Franc"}, "AZM": {"symbol" : "AZM", "name" : "Azerbaijani Manat (1993–2006)"}, "TOP": {"symbol"
    : "TOP", "name" : "Tongan Paʻanga"}, "AZN": {"symbol" : "AZN", "name" : "Azerbaijani Manat"}, "PGK": {"symbol" : "PGK", "name" : "Papua New Guinean Kina"}, "CNH": {"symbol" : "CNH", "name" : "Chinese Yuan (offshore)"}, "UAH": {"symbol" : "UAH", "name" : "Ukrainian Hryvnia"}, "UAK": {"symbol" : "UAK", "name" : "Ukrainian Karbovanets"}, "ERN": {"symbol" : "ERN", "name" : "Eritrean Nakfa"}, "TPE": {"symbol" : "TPE", "name" : "Timorese Escudo"}, "MRO": {"symbol" : "MRO", "name" : "Mauritanian Ouguiya (1973–2017)"}
    , "CNX": {"symbol" : "CNX", "name" : "Chinese People’s Bank Dollar"}, "CNY": {"symbol" : "CN¥", "name" : "Chinese Yuan"}, "MRU": {"symbol" : "MRU", "name" : "Mauritanian Ouguiya"}, "ESA": {"symbol" : "ESA", "name" : "Spanish Peseta (A account)"}, "GWE": {"symbol" : "GWE", "name" : "Portuguese Guinea Escudo"}, "ESB": {"symbol" : "ESB", "name" : "Spanish Peseta (convertible account)"}, "BMD": {"symbol" : "BMD", "name" : "Bermudan Dollar"}, "PHP": {"symbol" : "PHP", "name" : "Philippine Piso"}, "XXX": {"symbol"
    : "¤", "name" : "Unknown Currency"}, "PYG": {"symbol" : "PYG", "name" : "Paraguayan Guarani"}, "JMD": {"symbol" : "JMD", "name" : "Jamaican Dollar"}, "GWP": {"symbol" : "GWP", "name" : "Guinea-Bissau Peso"}, "ESP": {"symbol" : "ESP", "name" : "Spanish Peseta"}, "COP": {"symbol" : "COP", "name" : "Colombian Peso"}, "USD": {"symbol" : "$", "name" : "US Dollar"}, "COU": {"symbol" : "COU", "name" : "Colombian Real Value Unit"}, "MCF": {"symbol" : "MCF", "name" : "Monegasque Franc"}, "USN": {"symbol" : "USN",
    "name" : "US Dollar (Next day)"}, "ETB": {"symbol" : "ETB", "name" : "Ethiopian Birr"}, "VEB": {"symbol" : "VEB", "name" : "Venezuelan Bolívar (1871–2008)"}, "ECS": {"symbol" : "ECS", "name" : "Ecuadorian Sucre"}, "USS": {"symbol" : "USS", "name" : "US Dollar (Same day)"}, "SOS": {"symbol" : "SOS", "name" : "Somali Shilling"}, "VEF": {"symbol" : "VEF", "name" : "Venezuelan Bolívar (2008–2018)"}, "VUV": {"symbol" : "VUV", "name" : "Vanuatu Vatu"}, "LAK": {"symbol" : "LAK", "name" : "Laotian Kip"}, "BND":
    {"symbol" : "BND", "name" : "Brunei Dollar"}, "ECV": {"symbol" : "ECV", "name" : "Ecuadorian Unit of Constant Value"}, "ZMK": {"symbol" : "ZMK", "name" : "Zambian Kwacha (1968–2012)"}, "LRD": {"symbol" : "LRD", "name" : "Liberian Dollar"}, "ALK": {"symbol" : "ALK", "name" : "Albanian Lek (1946–1965)"}, "ALL": {"symbol" : "ALL", "name" : "Albanian Lek"}, "GHC": {"symbol" : "GHC", "name" : "Ghanaian Cedi (1979–2007)"}, "MTL": {"symbol" : "MTL", "name" : "Maltese Lira"}, "VES": {"symbol" : "VES", "name" : "Venezuelan Bolívar"}
    , "ZMW": {"symbol" : "ZMW", "name" : "Zambian Kwacha"}, "MTP": {"symbol" : "MTP", "name" : "Maltese Pound"}, "ILP": {"symbol" : "ILP", "name" : "Israeli Pound"}, "MDC": {"symbol" : "MDC", "name" : "Moldovan Cupon"}, "ILR": {"symbol" : "ILR", "name" : "Israeli Shekel (1980–1985)"}, "TRL": {"symbol" : "TRL", "name" : "Turkish Lira (1922–2005)"}, "ILS": {"symbol" : "₪", "name" : "Israeli New Shekel"}, "GHS": {"symbol" : "GHS", "name" : "Ghanaian Cedi"}, "GYD": {"symbol" : "GYD", "name" : "Guyanaese Dollar"}
    , "KPW": {"symbol" : "KPW", "name" : "North Korean Won"}, "BOB": {"symbol" : "BOB", "name" : "Bolivian Boliviano"}, "MDL": {"symbol" : "MDL", "name" : "Moldovan Leu"}, "AMD": {"symbol" : "AMD", "name" : "Armenian Dram"}, "TRY": {"symbol" : "TRY", "name" : "Turkish Lira"}, "LBP": {"symbol" : "LBP", "name" : "Lebanese Pound"}, "BOL": {"symbol" : "BOL", "name" : "Bolivian Boliviano (1863–1963)"}, "JOD": {"symbol" : "JOD", "name" : "Jordanian Dinar"}, "HKD": {"symbol" : "HK$", "name" : "Hong Kong Dollar"}, "BOP":
    {"symbol" : "BOP", "name" : "Bolivian Peso"}, "EUR": {"symbol" : "€", "name" : "Euro"}, "LSL": {"symbol" : "LSL", "name" : "Lesotho Loti"}, "CAD": {"symbol" : "CA$", "name" : "Canadian Dollar"}, "BOV": {"symbol" : "BOV", "name" : "Bolivian Mvdol"}, "EEK": {"symbol" : "EEK", "name" : "Estonian Kroon"}, "MUR": {"symbol" : "MUR", "name" : "Mauritian Rupee"}, "ROL": {"symbol" : "ROL", "name" : "Romanian Leu (1952–2006)"}, "GIP": {"symbol" : "GIP", "name" : "Gibraltar Pound"}, "RON": {"symbol" : "RON", "name"
    : "Romanian Leu"}, "NGN": {"symbol" : "NGN", "name" : "Nigerian Naira"}, "CRC": {"symbol" : "CRC", "name" : "Costa Rican Colón"}, "PKR": {"symbol" : "PKR", "name" : "Pakistani Rupee"}, "ANG": {"symbol" : "ANG", "name" : "Netherlands Antillean Guilder"}, "KRH": {"symbol" : "KRH", "name" : "South Korean Hwan (1953–1962)"}, "SRD": {"symbol" : "SRD", "name" : "Surinamese Dollar"}, "LTL": {"symbol" : "LTL", "name" : "Lithuanian Litas"}, "SAR": {"symbol" : "SAR", "name" : "Saudi Riyal"}, "TTD": {"symbol" : "TTD",
    "name" : "Trinidad & Tobago Dollar"}, "MVP": {"symbol" : "MVP", "name" : "Maldivian Rupee (1947–1981)"}, "MVR": {"symbol" : "MVR", "name" : "Maldivian Rufiyaa"}, "KRO": {"symbol" : "KRO", "name" : "South Korean Won (1945–1953)"}, "SRG": {"symbol" : "SRG", "name" : "Surinamese Guilder"}, "DDM": {"symbol" : "DDM", "name" : "East German Mark"}, "INR": {"symbol" : "₹", "name" : "Indian Rupee"}, "LTT": {"symbol" : "LTT", "name" : "Lithuanian Talonas"}, "KRW": {"symbol" : "₩", "name" : "South Korean Won"}, "JPY":
    {"symbol" : "¥", "name" : "Japanese Yen"}, "AOA": {"symbol" : "AOA", "name" : "Angolan Kwanza"}, "PLN": {"symbol" : "PLN", "name" : "Polish Zloty"}, "SBD": {"symbol" : "SBD", "name" : "Solomon Islands Dollar"}, "CSD": {"symbol" : "CSD", "name" : "Serbian Dinar (2002–2006)"}, "CSK": {"symbol" : "CSK", "name" : "Czechoslovak Hard Koruna"}, "LUC": {"symbol" : "LUC", "name" : "Luxembourgian Convertible Franc"}, "LUF": {"symbol" : "LUF", "name" : "Luxembourgian Franc"}, "AOK": {"symbol" : "AOK", "name" : "Angolan Kwanza (1977–1991)"}
    , "PLZ": {"symbol" : "PLZ", "name" : "Polish Zloty (1950–1995)"}, "AON": {"symbol" : "AON", "name" : "Angolan New Kwanza (1990–2000)"}, "MWK": {"symbol" : "MWK", "name" : "Malawian Kwacha"}, "LUL": {"symbol" : "LUL", "name" : "Luxembourg Financial Franc"}, "AOR": {"symbol" : "AOR", "name" : "Angolan Readjusted Kwanza (1995–1999)"}, "BAD": {"symbol" : "BAD", "name" : "Bosnia-Herzegovina Dinar (1992–1994)"}, "MGA": {"symbol" : "MGA", "name" : "Malagasy Ariary"}, "NIC": {"symbol" : "NIC", "name" : "Nicaraguan Córdoba (1988–1991)"}
    , "FIM": {"symbol" : "FIM", "name" : "Finnish Markka"}, "DEM": {"symbol" : "DEM", "name" : "German Mark"}, "MGF": {"symbol" : "MGF", "name" : "Malagasy Franc"}, "BAM": {"symbol" : "BAM", "name" : "Bosnia-Herzegovina Convertible Mark"}, "BAN": {"symbol" : "BAN", "name" : "Bosnia-Herzegovina New Dinar (1994–1997)"}, "EGP": {"symbol" : "EGP", "name" : "Egyptian Pound"}, "SSP": {"symbol" : "SSP", "name" : "South Sudanese Pound"}, "BRC": {"symbol" : "BRC", "name" : "Brazilian Cruzado (1986–1989)"}, "BRB": {"symbol"
    : "BRB", "name" : "Brazilian New Cruzeiro (1967–1986)"}, "BRE": {"symbol" : "BRE", "name" : "Brazilian Cruzeiro (1990–1993)"}, "NIO": {"symbol" : "NIO", "name" : "Nicaraguan Córdoba"}, "NZD": {"symbol" : "NZ$", "name" : "New Zealand Dollar"}, "BRL": {"symbol" : "R$", "name" : "Brazilian Real"}, "BRN": {"symbol" : "BRN", "name" : "Brazilian New Cruzado (1989–1990)"}}};
},
otpp_ResourceAccessor = $rt_classWithoutFields(),
jl_NullPointerException = $rt_classWithoutFields(jl_RuntimeException),
ju_IllegalFormatException = $rt_classWithoutFields(jl_IllegalArgumentException);
function ju_UnknownFormatConversionException() {
    ju_IllegalFormatException.call(this);
    this.$conversion1 = null;
}
let ju_UnknownFormatConversionException__init_ = ($this, $conversion) => {
    let var$2;
    var$2 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$2);
    jl_StringBuilder_append(jl_StringBuilder_append(var$2, $rt_s(55)), $conversion);
    jl_RuntimeException__init_($this, jl_AbstractStringBuilder_toString(var$2));
    $this.$conversion1 = $conversion;
},
ju_UnknownFormatConversionException__init_0 = var_0 => {
    let var_1 = new ju_UnknownFormatConversionException();
    ju_UnknownFormatConversionException__init_(var_1, var_0);
    return var_1;
};
function ju_DuplicateFormatFlagsException() {
    ju_IllegalFormatException.call(this);
    this.$flags2 = null;
}
function jl_Boolean() {
    jl_Object.call(this);
    this.$value2 = 0;
}
let jl_Boolean_TRUE = null,
jl_Boolean_FALSE = null,
jl_Boolean_TYPE = null,
jl_Boolean__init_0 = ($this, $value) => {
    $this.$value2 = $value;
},
jl_Boolean__init_ = var_0 => {
    let var_1 = new jl_Boolean();
    jl_Boolean__init_0(var_1, var_0);
    return var_1;
},
jl_Boolean__clinit_ = () => {
    jl_Boolean_TRUE = jl_Boolean__init_(1);
    jl_Boolean_FALSE = jl_Boolean__init_(0);
    jl_Boolean_TYPE = $rt_cls($rt_booleancls);
};
function ju_IllegalFormatPrecisionException() {
    ju_IllegalFormatException.call(this);
    this.$precision2 = 0;
}
let ju_IllegalFormatPrecisionException__init_0 = ($this, $precision) => {
    let var$2;
    var$2 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$2);
    jl_StringBuilder_append0(jl_StringBuilder_append(var$2, $rt_s(56)), $precision);
    jl_RuntimeException__init_($this, jl_AbstractStringBuilder_toString(var$2));
    $this.$precision2 = $precision;
},
ju_IllegalFormatPrecisionException__init_ = var_0 => {
    let var_1 = new ju_IllegalFormatPrecisionException();
    ju_IllegalFormatPrecisionException__init_0(var_1, var_0);
    return var_1;
};
function jl_Byte() {
    jl_Number.call(this);
    this.$value1 = 0;
}
let jl_Byte_TYPE = null,
jl_Byte_byteCache = null,
jl_Byte__clinit_ = () => {
    let var$1, var$2, var$3, var$4, var$5;
    jl_Byte_TYPE = $rt_cls($rt_bytecls);
    var$1 = $rt_createArray(jl_Byte, 256);
    var$2 = var$1.data;
    var$3 = 0;
    var$4 = var$2.length;
    while (var$3 < var$4) {
        var$5 = new jl_Byte;
        var$5.$value1 = (var$3 - 128 | 0) << 24 >> 24;
        var$2[var$3] = var$5;
        var$3 = var$3 + 1 | 0;
    }
    jl_Byte_byteCache = var$1;
},
jl_Short = $rt_classWithoutFields(jl_Number),
jl_Short_TYPE = null,
jl_Short__clinit_ = () => {
    jl_Short_TYPE = $rt_cls($rt_shortcls);
};
function ju_IllegalFormatCodePointException() {
    ju_IllegalFormatException.call(this);
    this.$codePoint = 0;
}
function ju_IllegalFormatConversionException() {
    let a = this; ju_IllegalFormatException.call(a);
    a.$conversion = 0;
    a.$argumentClass = null;
}
let ju_IllegalFormatConversionException__init_0 = ($this, $conversion, $argumentClass) => {
    let var$3, var$4;
    var$3 = jl_String_valueOf0($argumentClass);
    var$4 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$4);
    var$3 = jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$4, $rt_s(57)), var$3), $rt_s(58));
    jl_AbstractStringBuilder_append(var$3, $conversion);
    jl_StringBuilder_append(var$3, $rt_s(59));
    jl_RuntimeException__init_($this, jl_AbstractStringBuilder_toString(var$4));
    $this.$conversion = $conversion;
    $this.$argumentClass = $argumentClass;
},
ju_IllegalFormatConversionException__init_ = (var_0, var_1) => {
    let var_2 = new ju_IllegalFormatConversionException();
    ju_IllegalFormatConversionException__init_0(var_2, var_0, var_1);
    return var_2;
},
jl_Long = $rt_classWithoutFields(jl_Number),
jl_Long_TYPE = null,
jl_Long_numberOfLeadingZeros = $i => {
    let $n, var$3;
    if (Long_eq($i, Long_ZERO))
        return 64;
    $n = 0;
    var$3 = Long_shru($i, 32);
    if (Long_ne(var$3, Long_ZERO))
        $n = 32;
    else
        var$3 = $i;
    $i = Long_shru(var$3, 16);
    if (Long_eq($i, Long_ZERO))
        $i = var$3;
    else
        $n = $n | 16;
    var$3 = Long_shru($i, 8);
    if (Long_eq(var$3, Long_ZERO))
        var$3 = $i;
    else
        $n = $n | 8;
    $i = Long_shru(var$3, 4);
    if (Long_eq($i, Long_ZERO))
        $i = var$3;
    else
        $n = $n | 4;
    var$3 = Long_shru($i, 2);
    if (Long_eq(var$3, Long_ZERO))
        var$3 = $i;
    else
        $n = $n | 2;
    if (Long_ne(Long_shru(var$3, 1), Long_ZERO))
        $n = $n | 1;
    return (64 - $n | 0) - 1 | 0;
},
jl_Long_divideUnsigned = (var$1, var$2) => {
    return Long_udiv(var$1, var$2);
},
jl_Long_remainderUnsigned = (var$1, var$2) => {
    return Long_urem(var$1, var$2);
},
jl_Long_compareUnsigned = (var$1, var$2) => {
    return Long_ucompare(var$1, var$2);
},
jl_Long__clinit_ = () => {
    jl_Long_TYPE = $rt_cls($rt_longcls);
};
function jt_DecimalFormatSymbols() {
    let a = this; jl_Object.call(a);
    a.$locale0 = null;
    a.$zeroDigit = 0;
    a.$groupingSeparator = 0;
    a.$decimalSeparator = 0;
    a.$perMill = 0;
    a.$percent = 0;
    a.$digit = 0;
    a.$patternSeparator = 0;
    a.$nan = null;
    a.$infinity = null;
    a.$minusSign = 0;
    a.$monetaryDecimalSeparator = 0;
    a.$exponentSeparator = null;
}
let jt_DecimalFormatSymbols__init_0 = ($this, $locale) => {
    let var$2, var$3, var$4;
    $this.$locale0 = $locale;
    var$2 = $locale.$languageCode;
    var$3 = $locale.$countryCode;
    if (otciu_CLDRHelper_$$metadata$$20 === null)
        otciu_CLDRHelper_$$metadata$$20 = otciu_CLDRHelper_getDecimalDataMap$$create();
    var$4 = otciu_CLDRHelper_$$metadata$$20;
    $locale = otciu_CLDRHelper_getCode(var$2, var$3);
    var$4 = var$4.hasOwnProperty($rt_ustr($locale)) ? var$4[$rt_ustr($locale)] : var$4.hasOwnProperty($rt_ustr(var$2)) ? var$4[$rt_ustr(var$2)] : var$4.root;
    $this.$zeroDigit = 48;
    $this.$groupingSeparator = var$4.groupingSeparator & 65535;
    $this.$decimalSeparator = var$4.decimalSeparator & 65535;
    $this.$perMill = var$4.perMille & 65535;
    $this.$percent = var$4.percent & 65535;
    $this.$digit = 35;
    $this.$patternSeparator = 59;
    $this.$nan = (var$4.naN !== null ? $rt_str(var$4.naN) : null);
    $this.$infinity = (var$4.infinity !== null ? $rt_str(var$4.infinity) : null);
    $this.$minusSign = var$4.minusSign & 65535;
    $this.$monetaryDecimalSeparator = var$4.decimalSeparator & 65535;
    $this.$exponentSeparator = (var$4.exponentSeparator !== null ? $rt_str(var$4.exponentSeparator) : null);
},
jt_DecimalFormatSymbols__init_ = var_0 => {
    let var_1 = new jt_DecimalFormatSymbols();
    jt_DecimalFormatSymbols__init_0(var_1, var_0);
    return var_1;
},
jt_DecimalFormatSymbols_clone = $this => {
    let var$1, $e, var$3, $$je;
    a: {
        try {
            var$1 = jl_Object_clone($this);
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            if ($$je instanceof jl_CloneNotSupportedException) {
                $e = $$je;
                break a;
            } else {
                throw $$e;
            }
        }
        return var$1;
    }
    var$3 = new jl_AssertionError;
    var$3.$suppressionEnabled = 1;
    var$3.$writableStackTrace = 1;
    jl_Throwable_fillInStackTrace(var$3);
    var$3.$message = $rt_s(60);
    var$3.$cause = $e;
    $rt_throw(var$3);
},
jt_Format = $rt_classWithoutFields();
function jt_NumberFormat() {
    let a = this; jt_Format.call(a);
    a.$groupingUsed = 0;
    a.$maximumIntegerDigits = 0;
    a.$minimumIntegerDigits = 0;
    a.$maximumFractionDigits = 0;
    a.$minimumFractionDigits = 0;
    a.$roundingMode = null;
    a.$currency = null;
}
let jt_NumberFormat_setMaximumFractionDigits = ($this, $value) => {
    if ($value < 0)
        $value = 0;
    $this.$maximumFractionDigits = $value;
    if ($value < $this.$minimumFractionDigits)
        $this.$minimumFractionDigits = $value;
},
jt_NumberFormat_setMaximumIntegerDigits = ($this, $value) => {
    if ($value < 0)
        $value = 0;
    $this.$maximumIntegerDigits = $value;
    if ($value < $this.$minimumIntegerDigits)
        $this.$minimumIntegerDigits = $value;
},
jt_NumberFormat_setMinimumFractionDigits = ($this, $value) => {
    if ($value < 0)
        $value = 0;
    $this.$minimumFractionDigits = $value;
    if ($this.$maximumFractionDigits < $value)
        $this.$maximumFractionDigits = $value;
},
jt_NumberFormat_setMinimumIntegerDigits = ($this, $value) => {
    if ($value < 0)
        $value = 0;
    $this.$minimumIntegerDigits = $value;
    if ($this.$maximumIntegerDigits < $value)
        $this.$maximumIntegerDigits = $value;
};
function jt_DecimalFormat() {
    let a = this; jt_NumberFormat.call(a);
    a.$symbols = null;
    a.$positivePrefix = null;
    a.$negativePrefix = null;
    a.$positiveSuffix = null;
    a.$negativeSuffix = null;
    a.$multiplier = 0;
    a.$groupingSize = 0;
    a.$decimalSeparatorAlwaysShown = 0;
    a.$exponentDigits = 0;
    a.$pattern = null;
}
let jt_DecimalFormat_POW10_ARRAY = null,
jt_DecimalFormat_POW10_INT_ARRAY = null,
jt_DecimalFormat__init_0 = ($this, $pattern, $value) => {
    let var$3, var$4, var$5, var$6, var$7, var$8, var$9, var$10, var$11, var$12;
    $this.$groupingUsed = 1;
    $this.$maximumIntegerDigits = 40;
    $this.$minimumIntegerDigits = 1;
    $this.$maximumFractionDigits = 3;
    $this.$roundingMode = jm_RoundingMode_HALF_EVEN;
    var$3 = ju_Locale_getDefault();
    if (var$3 === null) {
        $pattern = new jl_NullPointerException;
        jl_Exception__init_($pattern);
        $rt_throw($pattern);
    }
    var$4 = var$3.$languageCode;
    var$5 = var$3.$countryCode;
    if (jl_String_isEmpty(var$5)) {
        if (otciu_CLDRHelper_$$metadata$$0 === null)
            otciu_CLDRHelper_$$metadata$$0 = otciu_CLDRHelper_getLikelySubtagsMap$$create();
        var$3 = otciu_CLDRHelper_$$metadata$$0;
        if (var$3.hasOwnProperty($rt_ustr(var$4)))
            var$4 = (var$3[$rt_ustr(var$4)].value !== null ? $rt_str(var$3[$rt_ustr(var$4)].value) : null);
        var$6 = jl_Math_min(var$4.$nativeString.length - 1 | 0, var$4.$nativeString.length - 1 | 0);
        a: {
            while (true) {
                if (var$6 < 0) {
                    var$6 = (-1);
                    break a;
                }
                if (var$4.$nativeString.charCodeAt(var$6) == 95)
                    break;
                var$6 = var$6 + (-1) | 0;
            }
        }
        var$5 = var$6 <= 0 ? $rt_s(2) : jl_String_substring0(var$4, var$6 + 1 | 0);
    }
    if (otcic_CurrencyHelper_$$metadata$$1 === null)
        otcic_CurrencyHelper_$$metadata$$1 = otcic_CurrencyHelper_getCountryToCurrencyMap$$create();
    var$3 = otcic_CurrencyHelper_$$metadata$$1;
    if (!var$3.hasOwnProperty($rt_ustr(var$5)))
        var$3 = null;
    else {
        var$4 = (var$3[$rt_ustr(var$5)].value !== null ? $rt_str(var$3[$rt_ustr(var$5)].value) : null);
        if (var$4 === null) {
            $pattern = new jl_NullPointerException;
            jl_Exception__init_($pattern);
            $rt_throw($pattern);
        }
        if (ju_Currency_currencies === null) {
            var$3 = new ju_HashMap;
            jl_Object__init_(var$3);
            var$7 = ju_HashMap_calculateCapacity(16);
            var$3.$elementCount = 0;
            var$3.$elementData = $rt_createArray(ju_HashMap$HashEntry, var$7);
            var$3.$loadFactor = 0.75;
            ju_HashMap_computeThreshold(var$3);
            ju_Currency_currencies = var$3;
            if (otcic_CurrencyHelper_$$metadata$$0 === null)
                otcic_CurrencyHelper_$$metadata$$0 = otcic_CurrencyHelper_getCurrencies$$create();
            var$8 = otcic_CurrencyHelper_$$metadata$$0;
            var$7 = 0;
            while (var$7 < var$8.length) {
                var$5 = var$8[var$7];
                var$9 = ju_Currency_currencies;
                var$10 = (var$5.code !== null ? $rt_str(var$5.code) : null);
                var$3 = new ju_Currency;
                var$3.$resource = var$5;
                var$5 = var$9;
                if (var$10 === null) {
                    var$9 = ju_HashMap_findNullKeyEntry(var$5);
                    if (var$9 === null) {
                        var$5.$modCount0 = var$5.$modCount0 + 1 | 0;
                        var$9 = ju_HashMap_createHashedEntry(var$5, null, 0, 0);
                        var$6 = var$5.$elementCount + 1 | 0;
                        var$5.$elementCount = var$6;
                        if (var$6 > var$5.$threshold)
                            ju_HashMap_rehash(var$5);
                    }
                } else {
                    var$6 = jl_String_hashCode(var$10);
                    var$11 = var$6 & (var$5.$elementData.data.length - 1 | 0);
                    var$9 = ju_HashMap_findNonNullKeyEntry(var$5, var$10, var$11, var$6);
                    if (var$9 === null) {
                        var$5.$modCount0 = var$5.$modCount0 + 1 | 0;
                        var$9 = ju_HashMap_createHashedEntry(var$5, var$10, var$11, var$6);
                        var$6 = var$5.$elementCount + 1 | 0;
                        var$5.$elementCount = var$6;
                        if (var$6 > var$5.$threshold)
                            ju_HashMap_rehash(var$5);
                    }
                }
                var$9.$value0 = var$3;
                var$7 = var$7 + 1 | 0;
            }
        }
        var$3 = ju_Currency_currencies;
        var$6 = jl_String_hashCode(var$4);
        var$3 = ju_HashMap_findNonNullKeyEntry(var$3, var$4, var$6 & (var$3.$elementData.data.length - 1 | 0), var$6);
        var$3 = var$3 === null ? null : var$3.$value0;
        if (var$3 === null) {
            $pattern = new jl_IllegalArgumentException;
            $value = new jl_StringBuilder;
            jl_AbstractStringBuilder__init_($value);
            jl_StringBuilder_append(jl_StringBuilder_append($value, $rt_s(61)), var$4);
            jl_RuntimeException__init_($pattern, jl_AbstractStringBuilder_toString($value));
            $rt_throw($pattern);
        }
    }
    $this.$currency = var$3;
    $this.$positivePrefix = $rt_createArray(jt_DecimalFormat$FormatField, 0);
    var$12 = $rt_createArray(jt_DecimalFormat$FormatField, 1);
    var$12.data[0] = jt_DecimalFormat$TextField__init_($rt_s(62));
    $this.$negativePrefix = var$12;
    $this.$positiveSuffix = $rt_createArray(jt_DecimalFormat$FormatField, 0);
    $this.$negativeSuffix = $rt_createArray(jt_DecimalFormat$FormatField, 0);
    $this.$multiplier = 1;
    $this.$symbols = jt_DecimalFormatSymbols_clone($value);
    $value = new jt_DecimalFormatParser;
    jt_DecimalFormatParser_parse($value, $pattern);
    jt_DecimalFormatParser_apply($value, $this);
    $this.$pattern = $pattern;
},
jt_DecimalFormat__init_ = (var_0, var_1) => {
    let var_2 = new jt_DecimalFormat();
    jt_DecimalFormat__init_0(var_2, var_0, var_1);
    return var_2;
},
jt_DecimalFormat_fieldsToText = ($this, $fields, $buffer) => {
    let var$3, var$4;
    $fields = $fields.data;
    var$3 = $fields.length;
    var$4 = 0;
    while (var$4 < var$3) {
        $fields[var$4].$render($this, $buffer);
        var$4 = var$4 + 1 | 0;
    }
    return $buffer;
},
jt_DecimalFormat_textToFields = ($this, $text) => {
    let var$2;
    var$2 = $rt_createArray(jt_DecimalFormat$FormatField, 1);
    var$2.data[0] = jt_DecimalFormat$TextField__init_($text);
    return var$2;
},
jt_DecimalFormat_setPositivePrefix = ($this, $newValue) => {
    $this.$positivePrefix = jt_DecimalFormat_textToFields($this, $newValue);
},
jt_DecimalFormat_format = ($this, $value, $buffer, $field) => {
    if ($this.$exponentDigits <= 0)
        jt_DecimalFormat_formatRegular($this, $value, $buffer);
    else
        jt_DecimalFormat_formatExponent0($this, $value, $buffer);
    return $buffer;
},
jt_DecimalFormat_format0 = ($this, $value, $buffer, $field) => {
    let $analysisResult, var$5, var$6;
    if (isNaN($value) ? 1 : 0) {
        jl_AbstractStringBuilder_append0(jt_DecimalFormat_fieldsToText($this, $this.$positivePrefix, $buffer), $this.$symbols.$nan);
        jt_DecimalFormat_appendSuffix($this, 1, $buffer);
    } else if (!(!isFinite($value) ? 1 : 0)) {
        $analysisResult = jt_DecimalFormat$Constants_doubleAnalysisResult;
        otcit_DoubleAnalyzer_analyze($value, $analysisResult);
        if ($this.$exponentDigits <= 0)
            jt_DecimalFormat_formatRegular0($this, $analysisResult.$mantissa, $analysisResult.$exponent, $analysisResult.$sign0 ? 0 : 1, $buffer);
        else
            jt_DecimalFormat_formatExponent($this, $analysisResult.$mantissa, $analysisResult.$exponent, $analysisResult.$sign0 ? 0 : 1, $buffer);
    } else {
        var$5 = $rt_compare($value, 0.0);
        var$6 = var$5 <= 0 ? $this.$negativePrefix : $this.$positivePrefix;
        jl_AbstractStringBuilder_append0(jt_DecimalFormat_fieldsToText($this, var$6, $buffer), $this.$symbols.$infinity);
        jt_DecimalFormat_appendSuffix($this, var$5 <= 0 ? 0 : 1, $buffer);
    }
    return $buffer;
},
jt_DecimalFormat_formatExponent = ($this, $mantissa, $exponent, $sign, $buffer) => {
    let $visibleExponent, $mantissaLength, $exponentLength, $multiplierDigits, $tenMultiplier, var$10, var$11, $i, $significantSize, $exponentMultiplier, $delta, $newMantissaLength, $exponentPos, $i_0, $mantissaDigitMask, $exponentDigit, $requiredSize, $limit, $count;
    $visibleExponent = jt_DecimalFormat_fastLn10($this, $mantissa);
    $mantissaLength = $visibleExponent + 1 | 0;
    $exponentLength = $this.$multiplier;
    if ($exponentLength != 1) {
        $multiplierDigits = jt_DecimalFormat_fastLn100($this, $exponentLength);
        $tenMultiplier = jt_DecimalFormat_POW10_INT_ARRAY.data[$multiplierDigits];
        $exponentLength = $this.$multiplier;
        if ($tenMultiplier == $exponentLength)
            $exponent = $exponent + $multiplierDigits | 0;
        else {
            var$10 = Long_fromInt($exponentLength);
            if (Long_ge($mantissa, Long_div(Long_create(4294967295, 2147483647), var$10))) {
                jt_DecimalFormat_formatExponent0($this, jm_BigDecimal__init_0(jm_BigInteger_valueOf($mantissa), $visibleExponent - $exponent | 0), $buffer);
                return;
            }
            $mantissa = Long_mul($mantissa, var$10);
            $visibleExponent = jt_DecimalFormat_fastLn10($this, $mantissa);
            $mantissaLength = $visibleExponent + 1 | 0;
        }
    }
    var$11 = $this;
    $i = var$11.$minimumIntegerDigits;
    $significantSize = $i + var$11.$maximumFractionDigits | 0;
    $exponentMultiplier = (var$11.$maximumIntegerDigits - $i | 0) + 1 | 0;
    if ($exponentMultiplier <= 1) {
        $exponentLength = $i - 1 | 0;
        $multiplierDigits = $exponent - $exponentLength | 0;
        $i = $visibleExponent - $exponentLength | 0;
    } else {
        $delta = $exponent - $rt_imul($exponent / $exponentMultiplier | 0, $exponentMultiplier) | 0;
        $multiplierDigits = $exponent - $delta | 0;
        $i = $visibleExponent - $delta | 0;
    }
    if ($significantSize < 0)
        $mantissa = Long_ZERO;
    else if ($significantSize < $mantissaLength) {
        $mantissa = jt_DecimalFormat_applyRounding0($this, $mantissa, $mantissaLength, $significantSize, $sign);
        $newMantissaLength = jt_DecimalFormat_fastLn10($this, $mantissa) + 1 | 0;
        if ($newMantissaLength > $mantissaLength) {
            $multiplierDigits = $multiplierDigits + 1 | 0;
            $i = $i + 1 | 0;
            $mantissaLength = $newMantissaLength;
        }
    }
    jt_DecimalFormat_fieldsToText($this, !$sign ? $this.$negativePrefix : $this.$positivePrefix, $buffer);
    $exponentPos = jl_Math_max($i, 0);
    $i_0 = $mantissaLength - 1 | 0;
    while ($i_0 >= $exponentPos) {
        $mantissaDigitMask = jt_DecimalFormat_POW10_ARRAY.data[$i_0];
        jl_AbstractStringBuilder_append($buffer, jt_DecimalFormat_forDigit($this, Long_lo(Long_div($mantissa, $mantissaDigitMask))));
        $mantissa = Long_rem($mantissa, $mantissaDigitMask);
        $i_0 = $i_0 + (-1) | 0;
    }
    $i_0 = $exponentPos - 1 | 0;
    while ($i_0 >= $i) {
        jl_AbstractStringBuilder_append($buffer, 48);
        $i_0 = $i_0 + (-1) | 0;
    }
    a: {
        $exponentDigit = $significantSize - ($mantissaLength - $i | 0) | 0;
        $requiredSize = $exponentDigit - (var$11.$maximumFractionDigits - var$11.$minimumFractionDigits | 0) | 0;
        if ($requiredSize <= 0) {
            if (Long_eq($mantissa, Long_ZERO))
                break a;
            if ($exponentDigit <= 0)
                break a;
        }
        jl_AbstractStringBuilder_append($buffer, $this.$symbols.$decimalSeparator);
        $limit = jl_Math_max(0, $i - $exponentDigit | 0);
        $count = 0;
        $i = $i - 1 | 0;
        b: {
            while ($i >= $limit) {
                $mantissaDigitMask = jt_DecimalFormat_POW10_ARRAY.data[$i];
                jl_AbstractStringBuilder_append($buffer, jt_DecimalFormat_forDigit($this, Long_lo(Long_div($mantissa, $mantissaDigitMask))));
                $mantissa = Long_rem($mantissa, $mantissaDigitMask);
                $count = $count + 1 | 0;
                if (Long_eq($mantissa, Long_ZERO))
                    break b;
                $i = $i + (-1) | 0;
            }
        }
        while (true) {
            $exponent = $count + 1 | 0;
            if ($count >= $requiredSize)
                break a;
            jl_AbstractStringBuilder_append($buffer, 48);
            $count = $exponent;
        }
    }
    jl_AbstractStringBuilder_append0($buffer, $this.$symbols.$exponentSeparator);
    if ($multiplierDigits < 0) {
        $multiplierDigits =  -$multiplierDigits | 0;
        jl_AbstractStringBuilder_append($buffer, $this.$symbols.$minusSign);
    }
    $i = jl_Math_max($this.$exponentDigits, jt_DecimalFormat_fastLn100($this, $multiplierDigits) + 1 | 0) - 1 | 0;
    while ($i >= 0) {
        $exponentDigit = jt_DecimalFormat_POW10_INT_ARRAY.data[$i];
        jl_AbstractStringBuilder_append($buffer, jt_DecimalFormat_forDigit($this, $multiplierDigits / $exponentDigit | 0));
        $multiplierDigits = $multiplierDigits % $exponentDigit | 0;
        $i = $i + (-1) | 0;
    }
    jt_DecimalFormat_appendSuffix($this, $sign, $buffer);
},
jt_DecimalFormat_formatRegular0 = ($this, $mantissa, $exponent, $sign, $buffer) => {
    let $mantissaLength, $significantFracDigits, $multiplierDigits, $tenMultiplier, var$9, var$10, $roundingPos, $newMantissaLength, $intLength, $digitPos, $i, $significantIntDigits, $mantissaDigit, $i_0, var$19, $mantissaDigitMask, $fracZeros;
    $mantissaLength = jt_DecimalFormat_fastLn10($this, $mantissa) + 1 | 0;
    $significantFracDigits = $exponent + 1 | 0;
    $exponent = $this.$multiplier;
    if ($exponent != 1) {
        $multiplierDigits = jt_DecimalFormat_fastLn100($this, $exponent);
        $tenMultiplier = jt_DecimalFormat_POW10_INT_ARRAY.data[$multiplierDigits];
        $exponent = $this.$multiplier;
        if ($tenMultiplier == $exponent)
            $significantFracDigits = $significantFracDigits + $multiplierDigits | 0;
        else {
            var$9 = Long_fromInt($exponent);
            if (Long_ge($mantissa, Long_div(Long_create(4294967295, 2147483647), var$9))) {
                jt_DecimalFormat_formatRegular($this, jm_BigDecimal__init_0(jm_BigInteger_valueOf($mantissa), $mantissaLength - $significantFracDigits | 0), $buffer);
                return;
            }
            $mantissa = Long_mul($mantissa, var$9);
            $mantissaLength = jt_DecimalFormat_fastLn10($this, $mantissa) + 1 | 0;
        }
    }
    var$10 = $this;
    $roundingPos = $significantFracDigits + var$10.$maximumFractionDigits | 0;
    if ($roundingPos < 0)
        $mantissa = Long_ZERO;
    else if ($roundingPos < $mantissaLength) {
        $mantissa = jt_DecimalFormat_applyRounding0($this, $mantissa, $mantissaLength, $roundingPos, $sign);
        $newMantissaLength = jt_DecimalFormat_fastLn10($this, $mantissa) + 1 | 0;
        if ($newMantissaLength > $mantissaLength) {
            $significantFracDigits = $significantFracDigits + 1 | 0;
            $mantissaLength = $newMantissaLength;
        }
    }
    jt_DecimalFormat_fieldsToText($this, !$sign ? $this.$negativePrefix : $this.$positivePrefix, $buffer);
    $intLength = jl_Math_max(0, $significantFracDigits);
    $digitPos = jl_Math_max($intLength, var$10.$minimumIntegerDigits) - 1 | 0;
    $i = var$10.$minimumIntegerDigits - 1 | 0;
    while ($i >= $intLength) {
        jl_AbstractStringBuilder_append($buffer, 48);
        if (var$10.$groupingUsed) {
            $exponent = $this.$groupingSize;
            if ($exponent > 0 && !($digitPos % $exponent | 0) && $digitPos > 0)
                jl_AbstractStringBuilder_append($buffer, $this.$symbols.$groupingSeparator);
        }
        $digitPos = $digitPos + (-1) | 0;
        $i = $i + (-1) | 0;
    }
    $significantIntDigits = jl_Math_min($mantissaLength, $intLength);
    $mantissaDigit = $mantissaLength - 1 | 0;
    $i_0 = 0;
    while ($i_0 < $significantIntDigits) {
        var$19 = jt_DecimalFormat_POW10_ARRAY.data;
        $exponent = $mantissaDigit + (-1) | 0;
        $mantissaDigitMask = var$19[$mantissaDigit];
        jl_AbstractStringBuilder_append($buffer, jt_DecimalFormat_forDigit($this, jl_Math_abs(Long_lo(Long_div($mantissa, $mantissaDigitMask)))));
        $mantissa = Long_rem($mantissa, $mantissaDigitMask);
        if (var$10.$groupingUsed) {
            $i = $this.$groupingSize;
            if ($i > 0 && !($digitPos % $i | 0) && $digitPos > 0)
                jl_AbstractStringBuilder_append($buffer, $this.$symbols.$groupingSeparator);
        }
        $digitPos = $digitPos + (-1) | 0;
        $i_0 = $i_0 + 1 | 0;
        $mantissaDigit = $exponent;
    }
    $intLength = $intLength - $significantIntDigits | 0;
    $i = 0;
    while ($i < $intLength) {
        jl_AbstractStringBuilder_append($buffer, 48);
        if (var$10.$groupingUsed) {
            $exponent = $this.$groupingSize;
            if ($exponent > 0 && !($digitPos % $exponent | 0) && $digitPos > 0)
                jl_AbstractStringBuilder_append($buffer, $this.$symbols.$groupingSeparator);
        }
        $digitPos = $digitPos + (-1) | 0;
        $i = $i + 1 | 0;
    }
    a: {
        if (Long_eq($mantissa, Long_ZERO)) {
            if (var$10.$minimumFractionDigits) {
                jl_AbstractStringBuilder_append($buffer, $this.$symbols.$decimalSeparator);
                $i = 0;
                while ($i < var$10.$minimumFractionDigits) {
                    jl_AbstractStringBuilder_append($buffer, 48);
                    $i = $i + 1 | 0;
                }
            } else if ($this.$decimalSeparatorAlwaysShown)
                jl_AbstractStringBuilder_append($buffer, $this.$symbols.$decimalSeparator);
        } else {
            jl_AbstractStringBuilder_append($buffer, $this.$symbols.$decimalSeparator);
            $fracZeros = jl_Math_min(var$10.$maximumFractionDigits, jl_Math_max(0,  -$significantFracDigits | 0));
            $i_0 = 0;
            $i = 0;
            while ($i < $fracZeros) {
                $i_0 = $i_0 + 1 | 0;
                jl_AbstractStringBuilder_append($buffer, 48);
                $i = $i + 1 | 0;
            }
            $significantFracDigits = jl_Math_min(var$10.$maximumFractionDigits - $i_0 | 0, $mantissaDigit);
            $i = 0;
            b: {
                while (true) {
                    if ($i >= $significantFracDigits)
                        break b;
                    if (Long_eq($mantissa, Long_ZERO))
                        break;
                    $i_0 = $i_0 + 1 | 0;
                    $mantissaDigitMask = jt_DecimalFormat_POW10_ARRAY.data[$mantissaDigit];
                    jl_AbstractStringBuilder_append($buffer, jt_DecimalFormat_forDigit($this, jl_Math_abs(Long_lo(Long_div($mantissa, $mantissaDigitMask)))));
                    $mantissa = Long_rem($mantissa, $mantissaDigitMask);
                    $mantissaDigit = $mantissaDigit + (-1) | 0;
                    $i = $i + 1 | 0;
                }
            }
            while (true) {
                if ($i_0 >= var$10.$minimumFractionDigits)
                    break a;
                jl_AbstractStringBuilder_append($buffer, 48);
                $i_0 = $i_0 + 1 | 0;
            }
        }
    }
    jt_DecimalFormat_appendSuffix($this, $sign, $buffer);
},
jt_DecimalFormat_formatExponent0 = ($this, $value, $buffer) => {
    let $i, $mantissa, $exponentDigit, $exponentLength, var$7, var$8, var$9, $positive, $mantissaLength, $i_0, $exponent, $significantSize, $exponentMultiplier, $delta, $exponentPos, $mantissaDigitMask, $parts, $requiredSize, $limit, $count;
    $i = $this.$multiplier;
    if ($i != 1)
        $value = jm_BigDecimal_multiply($value, jm_BigDecimal_valueOf(Long_fromInt($i)));
    jm_BigDecimal_$callClinit();
    $mantissa = jm_BigDecimal_ZERO;
    $exponentDigit = jm_BigDecimal_signum($value);
    $exponentLength = $rt_compare($exponentDigit, jm_BigDecimal_signum($mantissa));
    if ($exponentLength)
        $exponentDigit = $exponentLength >= 0 ? 1 : (-1);
    else {
        $exponentLength = $value.$scale;
        $i = $mantissa.$scale;
        if ($exponentLength == $i && $value.$bitLength1 < 64 && $mantissa.$bitLength1 < 64) {
            $exponentLength = Long_compare($value.$smallValue, $mantissa.$smallValue);
            $exponentDigit = $exponentLength < 0 ? (-1) : $exponentLength <= 0 ? 0 : 1;
        } else {
            var$7 = Long_sub(Long_fromInt($exponentLength), Long_fromInt($i));
            var$8 = Long_fromInt(jm_BigDecimal_aproxPrecision($value) - jm_BigDecimal_aproxPrecision($mantissa) | 0);
            if (Long_le(var$8, Long_add(var$7, Long_fromInt(1)))) {
                if (Long_lt(var$8, Long_sub(var$7, Long_fromInt(1))))
                    $exponentDigit =  -$exponentDigit | 0;
                else {
                    var$9 = jm_BigDecimal_getUnscaledValue($value);
                    $mantissa = jm_BigDecimal_getUnscaledValue($mantissa);
                    $exponentLength = Long_compare(var$7, Long_ZERO);
                    if ($exponentLength < 0)
                        var$9 = jm_BigInteger_multiply(var$9, jm_Multiplication_powerOf10(Long_neg(var$7)));
                    else if ($exponentLength > 0)
                        $mantissa = jm_BigInteger_multiply($mantissa, jm_Multiplication_powerOf10(var$7));
                    $exponentDigit = jm_BigInteger_compareTo(var$9, $mantissa);
                }
            }
        }
    }
    $positive = $exponentDigit < 0 ? 0 : 1;
    $mantissaLength = jm_BigDecimal_precision($value);
    $i_0 = $mantissaLength - 1 | 0;
    $exponent = $i_0 - $value.$scale | 0;
    $mantissa = jm_BigDecimal_getUnscaledValue($value);
    var$9 = $this;
    $i = var$9.$minimumIntegerDigits;
    $significantSize = $i + var$9.$maximumFractionDigits | 0;
    $exponentMultiplier = (var$9.$maximumIntegerDigits - $i | 0) + 1 | 0;
    if ($exponentMultiplier <= 1) {
        $exponentLength = $i - 1 | 0;
        $exponent = $exponent - $exponentLength | 0;
        $exponentMultiplier = $i_0 - $exponentLength | 0;
    } else {
        $delta = $exponent - $rt_imul($exponent / $exponentMultiplier | 0, $exponentMultiplier) | 0;
        $exponent = $exponent - $delta | 0;
        $exponentMultiplier = $i_0 - $delta | 0;
    }
    if ($significantSize < 0)
        $mantissa = jm_BigInteger_ZERO;
    else if ($significantSize < $mantissaLength)
        $mantissa = jt_DecimalFormat_applyRounding($this, $mantissa, $mantissaLength, $significantSize);
    jt_DecimalFormat_fieldsToText($this, !$positive ? $this.$negativePrefix : $this.$positivePrefix, $buffer);
    $exponentPos = jl_Math_max($exponentMultiplier, 0);
    $mantissaDigitMask = jt_DecimalFormat_pow10($this, jm_BigInteger_ONE, $i_0);
    while ($i_0 >= $exponentPos) {
        $parts = (jm_BigInteger_divideAndRemainder($mantissa, $mantissaDigitMask)).data;
        jl_AbstractStringBuilder_append($buffer, jt_DecimalFormat_forDigit($this, jl_Math_abs(jm_BigInteger_intValue($parts[0]))));
        $mantissa = $parts[1];
        $mantissaDigitMask = jm_BigInteger_divide($mantissaDigitMask, jm_BigInteger_TEN);
        $i_0 = $i_0 + (-1) | 0;
    }
    $i = $exponentPos - 1 | 0;
    while ($i >= $exponentMultiplier) {
        jl_AbstractStringBuilder_append($buffer, 48);
        $i = $i + (-1) | 0;
    }
    a: {
        $exponentDigit = $significantSize - ($mantissaLength - $exponentMultiplier | 0) | 0;
        $requiredSize = $exponentDigit - (var$9.$maximumFractionDigits - var$9.$minimumFractionDigits | 0) | 0;
        if ($requiredSize <= 0) {
            if (jm_BigInteger_equals($mantissa, jm_BigInteger_ZERO))
                break a;
            if ($exponentDigit <= 0)
                break a;
        }
        jl_AbstractStringBuilder_append($buffer, $this.$symbols.$decimalSeparator);
        $limit = jl_Math_max(0, $exponentMultiplier - $exponentDigit | 0);
        $count = 0;
        $i = $exponentMultiplier - 1 | 0;
        b: {
            while ($i >= $limit) {
                $parts = (jm_BigInteger_divideAndRemainder($mantissa, $mantissaDigitMask)).data;
                jl_AbstractStringBuilder_append($buffer, jt_DecimalFormat_forDigit($this, jl_Math_abs(jm_BigInteger_intValue($parts[0]))));
                $mantissa = $parts[1];
                $count = $count + 1 | 0;
                if (jm_BigInteger_equals($mantissa, jm_BigInteger_ZERO))
                    break b;
                $mantissaDigitMask = jm_BigInteger_divide($mantissaDigitMask, jm_BigInteger_TEN);
                $i = $i + (-1) | 0;
            }
        }
        while (true) {
            $exponentLength = $count + 1 | 0;
            if ($count >= $requiredSize)
                break a;
            jl_AbstractStringBuilder_append($buffer, 48);
            $count = $exponentLength;
        }
    }
    jl_AbstractStringBuilder_append0($buffer, $this.$symbols.$exponentSeparator);
    if ($exponent < 0) {
        $exponent =  -$exponent | 0;
        jl_AbstractStringBuilder_append($buffer, $this.$symbols.$minusSign);
    }
    $i = jl_Math_max($this.$exponentDigits, jt_DecimalFormat_fastLn100($this, $exponent) + 1 | 0) - 1 | 0;
    while ($i >= 0) {
        $exponentDigit = jt_DecimalFormat_POW10_INT_ARRAY.data[$i];
        jl_AbstractStringBuilder_append($buffer, jt_DecimalFormat_forDigit($this, $exponent / $exponentDigit | 0));
        $exponent = $exponent % $exponentDigit | 0;
        $i = $i + (-1) | 0;
    }
    jt_DecimalFormat_appendSuffix($this, $positive, $buffer);
},
jt_DecimalFormat_appendSuffix = ($this, $positive, $buffer) => {
    let var$3;
    if ($positive) {
        var$3 = $this.$positiveSuffix;
        if (var$3 !== null)
            jt_DecimalFormat_fieldsToText($this, var$3, $buffer);
    } else {
        var$3 = $this.$negativeSuffix;
        if (var$3 === null) {
            var$3 = $this.$positiveSuffix;
            if (var$3 === null)
                var$3 = $rt_createArray(jt_DecimalFormat$FormatField, 0);
        }
        jt_DecimalFormat_fieldsToText($this, var$3, $buffer);
    }
},
jt_DecimalFormat_formatRegular = ($this, $value, $buffer) => {
    let $positive, $mantissa, $mantissaLength, $exponent, var$7, $roundingPos, $intLength, $digitPos, $i, $fracZeros, $significantIntDigits, $mantissaDigitMask, $parts, $i_0, $significantFracDigits;
    $positive = $this.$multiplier;
    if ($positive != 1)
        $value = jm_BigDecimal_multiply($value, jm_BigDecimal_valueOf(Long_fromInt($positive)));
    $mantissa = jm_BigDecimal_getUnscaledValue($value);
    $positive = jm_BigInteger_compareTo($mantissa, jm_BigInteger_ZERO) < 0 ? 0 : 1;
    $mantissaLength = jm_BigDecimal_precision($value);
    $exponent = jm_BigDecimal_precision($value) - $value.$scale | 0;
    var$7 = $this;
    $roundingPos = $exponent + var$7.$maximumFractionDigits | 0;
    if ($roundingPos < 0)
        $mantissa = jm_BigInteger_ZERO;
    else if ($roundingPos < $mantissaLength)
        $mantissa = jt_DecimalFormat_applyRounding($this, $mantissa, $mantissaLength, $roundingPos);
    jt_DecimalFormat_fieldsToText($this, !$positive ? $this.$negativePrefix : $this.$positivePrefix, $buffer);
    $intLength = jl_Math_max(0, $exponent);
    $digitPos = jl_Math_max($intLength, var$7.$minimumIntegerDigits) - 1 | 0;
    $i = var$7.$minimumIntegerDigits - 1 | 0;
    while ($i >= $intLength) {
        jl_AbstractStringBuilder_append($buffer, 48);
        if (var$7.$groupingUsed) {
            $fracZeros = $this.$groupingSize;
            if ($fracZeros > 0 && !($digitPos % $fracZeros | 0) && $digitPos > 0)
                jl_AbstractStringBuilder_append($buffer, $this.$symbols.$groupingSeparator);
        }
        $digitPos = $digitPos + (-1) | 0;
        $i = $i + (-1) | 0;
    }
    $significantIntDigits = jl_Math_min($mantissaLength, $intLength);
    $mantissaDigitMask = jt_DecimalFormat_pow10($this, jm_BigInteger_ONE, $mantissaLength - 1 | 0);
    $i = 0;
    while ($i < $significantIntDigits) {
        $parts = (jm_BigInteger_divideAndRemainder($mantissa, $mantissaDigitMask)).data;
        jl_AbstractStringBuilder_append($buffer, jt_DecimalFormat_forDigit($this, jl_Math_abs(jm_BigInteger_intValue($parts[0]))));
        $mantissa = $parts[1];
        if (var$7.$groupingUsed) {
            $fracZeros = $this.$groupingSize;
            if ($fracZeros > 0 && !($digitPos % $fracZeros | 0) && $digitPos > 0)
                jl_AbstractStringBuilder_append($buffer, $this.$symbols.$groupingSeparator);
        }
        $digitPos = $digitPos + (-1) | 0;
        $mantissaLength = $mantissaLength + (-1) | 0;
        $mantissaDigitMask = jm_BigInteger_divide($mantissaDigitMask, jm_BigInteger_TEN);
        $i = $i + 1 | 0;
    }
    $intLength = $intLength - $significantIntDigits | 0;
    $i = 0;
    while ($i < $intLength) {
        jl_AbstractStringBuilder_append($buffer, 48);
        if (var$7.$groupingUsed) {
            $fracZeros = $this.$groupingSize;
            if ($fracZeros > 0 && !($digitPos % $fracZeros | 0) && $digitPos > 0)
                jl_AbstractStringBuilder_append($buffer, $this.$symbols.$groupingSeparator);
        }
        $digitPos = $digitPos + (-1) | 0;
        $i = $i + 1 | 0;
    }
    a: {
        if (jm_BigInteger_equals($mantissa, jm_BigInteger_ZERO)) {
            if (var$7.$minimumFractionDigits) {
                jl_AbstractStringBuilder_append($buffer, $this.$symbols.$decimalSeparator);
                $i = 0;
                while ($i < var$7.$minimumFractionDigits) {
                    jl_AbstractStringBuilder_append($buffer, 48);
                    $i = $i + 1 | 0;
                }
            } else if ($this.$decimalSeparatorAlwaysShown)
                jl_AbstractStringBuilder_append($buffer, $this.$symbols.$decimalSeparator);
        } else {
            jl_AbstractStringBuilder_append($buffer, $this.$symbols.$decimalSeparator);
            $fracZeros = jl_Math_min(var$7.$maximumFractionDigits, jl_Math_max(0,  -$exponent | 0));
            $i = 0;
            $i_0 = 0;
            while ($i_0 < $fracZeros) {
                $i = $i + 1 | 0;
                jl_AbstractStringBuilder_append($buffer, 48);
                $i_0 = $i_0 + 1 | 0;
            }
            $significantFracDigits = jl_Math_min(var$7.$maximumFractionDigits - $i | 0, $mantissaLength);
            $i_0 = 0;
            b: {
                while (true) {
                    if ($i_0 >= $significantFracDigits)
                        break b;
                    if (jm_BigInteger_equals($mantissa, jm_BigInteger_ZERO))
                        break;
                    $i = $i + 1 | 0;
                    $parts = (jm_BigInteger_divideAndRemainder($mantissa, $mantissaDigitMask)).data;
                    jl_AbstractStringBuilder_append($buffer, jt_DecimalFormat_forDigit($this, jl_Math_abs(jm_BigInteger_intValue($parts[0]))));
                    $mantissa = $parts[1];
                    $mantissaDigitMask = jm_BigInteger_divide($mantissaDigitMask, jm_BigInteger_TEN);
                    $i_0 = $i_0 + 1 | 0;
                }
            }
            while (true) {
                if ($i >= var$7.$minimumFractionDigits)
                    break a;
                jl_AbstractStringBuilder_append($buffer, 48);
                $i = $i + 1 | 0;
            }
        }
    }
    jt_DecimalFormat_appendSuffix($this, $positive, $buffer);
},
jt_DecimalFormat_applyRounding0 = ($this, $mantissa, $mantissaLength, $exponent, $sign) => {
    let $rounding, var$6, var$7, var$8;
    a: {
        $rounding = jt_DecimalFormat_POW10_ARRAY.data[$mantissaLength - $exponent | 0];
        jt_DecimalFormat$1_$callClinit();
        switch (jt_DecimalFormat$1_$SwitchMap$java$math$RoundingMode.data[$this.$roundingMode.$ordinal]) {
            case 1:
                $mantissa = Long_mul(Long_div($mantissa, $rounding), $rounding);
                if (!$sign)
                    break a;
                $mantissa = Long_add($mantissa, $rounding);
                break a;
            case 2:
                $mantissa = Long_mul(Long_div($mantissa, $rounding), $rounding);
                if ($sign)
                    break a;
                $mantissa = Long_add($mantissa, $rounding);
                break a;
            case 3:
                $mantissa = Long_add(Long_mul(Long_div($mantissa, $rounding), $rounding), $rounding);
                break a;
            case 4:
                $mantissa = Long_mul(Long_div($mantissa, $rounding), $rounding);
                break a;
            case 5:
                if (Long_eq(Long_rem($mantissa, $rounding), Long_ZERO))
                    break a;
                var$6 = new jl_ArithmeticException;
                jl_RuntimeException__init_(var$6, $rt_s(63));
                $rt_throw(var$6);
            case 6:
                var$7 = Long_rem($mantissa, $rounding);
                var$8 = Long_div($rounding, Long_fromInt(2));
                if (Long_eq(var$7, var$8)) {
                    $mantissa = Long_mul(Long_div($mantissa, $rounding), $rounding);
                    break a;
                }
                $mantissa = Long_mul(Long_div(Long_add($mantissa, var$8), $rounding), $rounding);
                break a;
            case 7:
                var$8 = Long_rem($mantissa, $rounding);
                var$7 = Long_div($rounding, Long_fromInt(2));
                if (Long_ne(var$8, var$7)) {
                    $mantissa = Long_mul(Long_div(Long_add($mantissa, var$7), $rounding), $rounding);
                    break a;
                }
                $mantissa = Long_add(Long_mul(Long_div($mantissa, $rounding), $rounding), $rounding);
                break a;
            case 8:
                var$8 = Long_rem($mantissa, $rounding);
                var$7 = Long_div($rounding, Long_fromInt(2));
                if (Long_ne(var$8, var$7)) {
                    $mantissa = Long_mul(Long_div(Long_add($mantissa, var$7), $rounding), $rounding);
                    break a;
                }
                $mantissa = Long_mul(Long_div($mantissa, $rounding), $rounding);
                if (Long_eq(Long_rem(Long_div($mantissa, $rounding), Long_fromInt(2)), Long_ZERO))
                    break a;
                $mantissa = Long_add($mantissa, $rounding);
                break a;
            default:
        }
    }
    return $mantissa;
},
jt_DecimalFormat_applyRounding = ($this, $mantissa, $mantissaLength, $exponent) => {
    let $rounding, $signedRounding;
    $rounding = jt_DecimalFormat_pow10($this, jm_BigInteger_ONE, $mantissaLength - $exponent | 0);
    $signedRounding = jm_BigInteger_compareTo($mantissa, jm_BigInteger_ZERO) < 0 ? jm_BigInteger_negate($rounding) : $rounding;
    a: {
        jt_DecimalFormat$1_$callClinit();
        switch (jt_DecimalFormat$1_$SwitchMap$java$math$RoundingMode.data[$this.$roundingMode.$ordinal]) {
            case 1:
                $mantissa = jm_BigInteger_multiply(jm_BigInteger_divide($mantissa, $rounding), $rounding);
                if (jm_BigInteger_compareTo($mantissa, jm_BigInteger_ZERO) < 0)
                    break a;
                $mantissa = jm_BigInteger_add($mantissa, $rounding);
                break a;
            case 2:
                $mantissa = jm_BigInteger_multiply(jm_BigInteger_divide($mantissa, $rounding), $rounding);
                if (jm_BigInteger_compareTo($mantissa, jm_BigInteger_ZERO) > 0)
                    break a;
                $mantissa = jm_BigInteger_subtract($mantissa, $rounding);
                break a;
            case 3:
                $mantissa = jm_BigInteger_add(jm_BigInteger_multiply(jm_BigInteger_divide($mantissa, $rounding), $rounding), $signedRounding);
                break a;
            case 4:
                $mantissa = jm_BigInteger_multiply(jm_BigInteger_divide($mantissa, $rounding), $rounding);
                break a;
            case 5:
                if (!jm_BigInteger_equals(jm_BigInteger_remainder($mantissa, $rounding), jm_BigInteger_ZERO))
                    break a;
                $mantissa = new jl_ArithmeticException;
                jl_RuntimeException__init_($mantissa, $rt_s(63));
                $rt_throw($mantissa);
            case 6:
                if (jm_BigInteger_equals(jm_BigInteger_remainder($mantissa, $rounding), jm_BigInteger_divide($signedRounding, jm_BigInteger_valueOf(Long_fromInt(2))))) {
                    $mantissa = jm_BigInteger_multiply(jm_BigInteger_divide($mantissa, $rounding), $rounding);
                    break a;
                }
                $mantissa = jm_BigInteger_multiply(jm_BigInteger_divide(jm_BigInteger_add($mantissa, jm_BigInteger_divide($signedRounding, jm_BigInteger_valueOf(Long_fromInt(2)))), $rounding), $rounding);
                break a;
            case 7:
                if (jm_BigInteger_equals(jm_BigInteger_remainder($mantissa, $rounding), jm_BigInteger_divide($signedRounding, jm_BigInteger_valueOf(Long_fromInt(2))))) {
                    $mantissa = jm_BigInteger_add(jm_BigInteger_multiply(jm_BigInteger_divide($mantissa, $rounding), $rounding), $signedRounding);
                    break a;
                }
                $mantissa = jm_BigInteger_multiply(jm_BigInteger_divide(jm_BigInteger_add($mantissa, jm_BigInteger_divide($signedRounding, jm_BigInteger_valueOf(Long_fromInt(2)))), $rounding), $rounding);
                break a;
            case 8:
                if (!jm_BigInteger_equals(jm_BigInteger_remainder($mantissa, $rounding), jm_BigInteger_divide($signedRounding, jm_BigInteger_valueOf(Long_fromInt(2))))) {
                    $mantissa = jm_BigInteger_multiply(jm_BigInteger_divide(jm_BigInteger_add($mantissa, jm_BigInteger_divide($signedRounding, jm_BigInteger_valueOf(Long_fromInt(2)))), $rounding), $rounding);
                    break a;
                }
                $mantissa = jm_BigInteger_multiply(jm_BigInteger_divide($mantissa, $rounding), $rounding);
                if (jm_BigInteger_equals(jm_BigInteger_remainder(jm_BigInteger_divide($mantissa, $rounding), jm_BigInteger_valueOf(Long_fromInt(2))), jm_BigInteger_ZERO))
                    break a;
                $mantissa = jm_BigInteger_add($mantissa, $signedRounding);
                break a;
            default:
        }
    }
    return $mantissa;
},
jt_DecimalFormat_fastLn10 = ($this, $value) => {
    let $result;
    if (Long_eq($value, Long_create(0, 2147483648)))
        return 18;
    $result = 0;
    if (Long_ge($value, Long_create(1874919424, 2328306))) {
        $result = 16;
        $value = Long_div($value, Long_create(1874919424, 2328306));
    }
    if (Long_ge($value, Long_fromInt(100000000))) {
        $result = $result + 8 | 0;
        $value = Long_div($value, Long_fromInt(100000000));
    }
    if (Long_ge($value, Long_fromInt(10000))) {
        $result = $result + 4 | 0;
        $value = Long_div($value, Long_fromInt(10000));
    }
    if (Long_ge($value, Long_fromInt(100))) {
        $result = $result + 2 | 0;
        $value = Long_div($value, Long_fromInt(100));
    }
    if (Long_ge($value, Long_fromInt(10)))
        $result = $result + 1 | 0;
    return $result;
},
jt_DecimalFormat_fastLn100 = ($this, $value) => {
    let $result;
    $result = 0;
    if ($value >= 100000000) {
        $result = 8;
        $value = $value / 100000000 | 0;
    }
    if ($value >= 10000) {
        $result = $result + 4 | 0;
        $value = $value / 10000 | 0;
    }
    if ($value >= 100) {
        $result = $result + 2 | 0;
        $value = $value / 100 | 0;
    }
    if ($value >= 10)
        $result = $result + 1 | 0;
    return $result;
},
jt_DecimalFormat_pow10 = ($this, $value, $power) => {
    let $digit;
    $digit = jm_BigInteger_TEN;
    while ($power) {
        if ($power & 1)
            $value = jm_BigInteger_multiply($value, $digit);
        $digit = jm_BigInteger_multiply($digit, $digit);
        $power = $power >>> 1 | 0;
    }
    return $value;
},
jt_DecimalFormat_forDigit = ($this, $n) => {
    return ($this.$symbols.$zeroDigit + $n | 0) & 65535;
},
jt_DecimalFormat__clinit_ = () => {
    jt_DecimalFormat_POW10_ARRAY = $rt_createLongArrayFromData([Long_fromInt(1), Long_fromInt(10), Long_fromInt(100), Long_fromInt(1000), Long_fromInt(10000), Long_fromInt(100000), Long_fromInt(1000000), Long_fromInt(10000000), Long_fromInt(100000000), Long_fromInt(1000000000), Long_create(1410065408, 2), Long_create(1215752192, 23), Long_create(3567587328, 232), Long_create(1316134912, 2328), Long_create(276447232, 23283), Long_create(2764472320, 232830), Long_create(1874919424, 2328306), Long_create(1569325056, 23283064),
    Long_create(2808348672, 232830643)]);
    jt_DecimalFormat_POW10_INT_ARRAY = $rt_createIntArrayFromData([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000]);
},
ju_Formattable = $rt_classWithoutFields(0),
jl_Double = $rt_classWithoutFields(jl_Number),
jl_Double_TYPE = null,
jl_Double__clinit_ = () => {
    jl_Double_TYPE = $rt_cls($rt_doublecls);
},
jl_Float = $rt_classWithoutFields(jl_Number),
jl_Float_TYPE = null,
jl_Float__clinit_ = () => {
    jl_Float_TYPE = $rt_cls($rt_floatcls);
};
function jm_BigDecimal() {
    let a = this; jl_Number.call(a);
    a.$intVal = null;
    a.$bitLength1 = 0;
    a.$smallValue = Long_ZERO;
    a.$scale = 0;
    a.$precision1 = 0;
}
let jm_BigDecimal_ZERO = null,
jm_BigDecimal_ONE = null,
jm_BigDecimal_TEN = null,
jm_BigDecimal_FIVE_POW = null,
jm_BigDecimal_TEN_POW = null,
jm_BigDecimal_LONG_TEN_POW = null,
jm_BigDecimal_LONG_FIVE_POW = null,
jm_BigDecimal_LONG_FIVE_POW_BIT_LENGTH = null,
jm_BigDecimal_LONG_TEN_POW_BIT_LENGTH = null,
jm_BigDecimal_BI_SCALED_BY_ZERO = null,
jm_BigDecimal_ZERO_SCALED_BY = null,
jm_BigDecimal_CH_ZEROS = null,
jm_BigDecimal_$callClinit = () => {
    jm_BigDecimal_$callClinit = $rt_eraseClinit(jm_BigDecimal);
    jm_BigDecimal__clinit_();
},
jm_BigDecimal__init_4 = ($this, $smallValue, $scale) => {
    jm_BigDecimal_$callClinit();
    $this.$smallValue = $smallValue;
    $this.$scale = $scale;
    $this.$bitLength1 = jm_BigDecimal_bitLength($smallValue);
},
jm_BigDecimal__init_1 = (var_0, var_1) => {
    let var_2 = new jm_BigDecimal();
    jm_BigDecimal__init_4(var_2, var_0, var_1);
    return var_2;
},
jm_BigDecimal__init_3 = ($this, $smallValue, $scale) => {
    jm_BigDecimal_$callClinit();
    $this.$smallValue = Long_fromInt($smallValue);
    $this.$scale = $scale;
    if ($smallValue < 0)
        $smallValue = $smallValue ^ (-1);
    $this.$bitLength1 = 32 - jl_Integer_numberOfLeadingZeros($smallValue) | 0;
},
jm_BigDecimal__init_ = (var_0, var_1) => {
    let var_2 = new jm_BigDecimal();
    jm_BigDecimal__init_3(var_2, var_0, var_1);
    return var_2;
},
jm_BigDecimal__init_2 = ($this, $unscaledVal, $scale) => {
    jm_BigDecimal_$callClinit();
    if ($unscaledVal === null) {
        $unscaledVal = new jl_NullPointerException;
        jl_Exception__init_($unscaledVal);
        $rt_throw($unscaledVal);
    }
    $this.$scale = $scale;
    $this.$intVal = $unscaledVal;
    $scale = jm_BigInteger_bitLength($unscaledVal);
    $this.$bitLength1 = $scale;
    if ($scale < 64)
        $this.$smallValue = jm_BigInteger_longValue($unscaledVal);
},
jm_BigDecimal__init_0 = (var_0, var_1) => {
    let var_2 = new jm_BigDecimal();
    jm_BigDecimal__init_2(var_2, var_0, var_1);
    return var_2;
},
jm_BigDecimal_valueOf0 = ($unscaledVal, $scale) => {
    let var$3;
    jm_BigDecimal_$callClinit();
    if (!$scale)
        return jm_BigDecimal_valueOf($unscaledVal);
    if (Long_eq($unscaledVal, Long_ZERO) && $scale >= 0) {
        var$3 = jm_BigDecimal_ZERO_SCALED_BY.data;
        if ($scale < var$3.length)
            return var$3[$scale];
    }
    return jm_BigDecimal__init_1($unscaledVal, $scale);
},
jm_BigDecimal_valueOf = $unscaledVal => {
    jm_BigDecimal_$callClinit();
    if (Long_ge($unscaledVal, Long_ZERO) && Long_lt($unscaledVal, Long_fromInt(11)))
        return jm_BigDecimal_BI_SCALED_BY_ZERO.data[Long_lo($unscaledVal)];
    return jm_BigDecimal__init_1($unscaledVal, 0);
},
jm_BigDecimal_multiply = ($this, $multiplicand) => {
    let $newScale, var$3;
    $newScale = Long_add(Long_fromInt($this.$scale), Long_fromInt($multiplicand.$scale));
    if (!jm_BigDecimal_isZero($this) && !jm_BigDecimal_isZero($multiplicand)) {
        if (($this.$bitLength1 + $multiplicand.$bitLength1 | 0) < 64)
            return jm_BigDecimal_valueOf0(Long_mul($this.$smallValue, $multiplicand.$smallValue), jm_BigDecimal_toIntScale($newScale));
        return jm_BigDecimal__init_0(jm_BigInteger_multiply(jm_BigDecimal_getUnscaledValue($this), jm_BigDecimal_getUnscaledValue($multiplicand)), jm_BigDecimal_toIntScale($newScale));
    }
    var$3 = Long_lo($newScale);
    return Long_eq($newScale, Long_fromInt(var$3)) ? jm_BigDecimal_valueOf0(Long_ZERO, var$3) : Long_lt($newScale, Long_ZERO) ? jm_BigDecimal__init_(0, (-2147483648)) : jm_BigDecimal__init_(0, 2147483647);
},
jm_BigDecimal_signum = $this => {
    let var$1;
    if ($this.$bitLength1 >= 64)
        return (jm_BigDecimal_getUnscaledValue($this)).$sign;
    var$1 = $this.$smallValue;
    return Long_lo(Long_or(Long_shr(var$1, 63), Long_shru(Long_neg(var$1), 63)));
},
jm_BigDecimal_isZero = $this => {
    return !$this.$bitLength1 && Long_ne($this.$smallValue, Long_fromInt(-1)) ? 1 : 0;
},
jm_BigDecimal_precision = $this => {
    let var$1, $bitLength, $doubleUnsc, var$4, var$5, var$6, var$7, var$8, var$9;
    var$1 = $this.$precision1;
    if (var$1 > 0)
        return var$1;
    $bitLength = $this.$bitLength1;
    $doubleUnsc = 1.0;
    if ($bitLength >= 1024) {
        var$1 = 1.0 + ($bitLength - 1 | 0) * 0.3010299956639812 | 0;
        if ((jm_BigInteger_divide(jm_BigDecimal_getUnscaledValue($this), jm_Multiplication_powerOf10(Long_fromInt(var$1)))).$sign)
            var$1 = var$1 + 1 | 0;
    } else {
        if ($bitLength >= 64)
            a: {
                b: {
                    var$4 = jm_BigDecimal_getUnscaledValue($this);
                    $bitLength = var$4.$numberLength;
                    var$1 = $rt_compare($bitLength, 2);
                    if (var$1 >= 0) {
                        if (var$1)
                            break b;
                        if (var$4.$digits.data[1] <= 0)
                            break b;
                    }
                    $doubleUnsc = Long_toNumber(jm_BigInteger_longValue(var$4));
                    break a;
                }
                if ($bitLength > 32)
                    $doubleUnsc = var$4.$sign <= 0 ? (-Infinity) : Infinity;
                else {
                    var$1 = jm_BigInteger_bitLength(jm_BigInteger_abs(var$4));
                    var$5 = Long_fromInt(var$1 - 1 | 0);
                    var$6 = var$1 - 54 | 0;
                    var$7 = Long_and(jm_BigInteger_longValue(jm_BigInteger_shiftRight(jm_BigInteger_abs(var$4), var$6)), Long_create(4294967295, 2097151));
                    if (Long_eq(var$5, Long_fromInt(1023))) {
                        if (Long_eq(var$7, Long_create(4294967295, 2097151))) {
                            $doubleUnsc = var$4.$sign <= 0 ? (-Infinity) : Infinity;
                            break a;
                        }
                        if (Long_eq(var$7, Long_create(4294967294, 2097151))) {
                            $doubleUnsc = var$4.$sign <= 0 ? (-1.7976931348623157E308) : 1.7976931348623157E308;
                            break a;
                        }
                    }
                    c: {
                        if (!(Long_eq(Long_and(var$7, Long_fromInt(1)), Long_fromInt(1)) && Long_eq(Long_and(var$7, Long_fromInt(2)), Long_fromInt(2)))) {
                            var$8 = var$4.$digits;
                            var$1 = var$6 >> 5;
                            $bitLength = var$6 & 31;
                            var$6 = 0;
                            while (true) {
                                var$9 = $rt_compare(var$6, var$1);
                                if (var$9 >= 0)
                                    break;
                                if (var$8.data[var$6])
                                    break;
                                var$6 = var$6 + 1 | 0;
                            }
                            if (!(!var$9 && !(var$8.data[var$6] << (32 - $bitLength | 0)) ? 0 : 1))
                                break c;
                        }
                        var$7 = Long_add(var$7, Long_fromInt(2));
                    }
                    var$7 = Long_shr(var$7, 1);
                    $doubleUnsc = $rt_longBitsToDouble(Long_or(Long_or(var$4.$sign >= 0 ? Long_ZERO : Long_create(0, 2147483648), Long_and(Long_shl(Long_add(Long_fromInt(1023), var$5), 52), Long_create(0, 2146435072))), var$7));
                }
            }
        else if ($bitLength >= 1)
            $doubleUnsc = Long_toNumber($this.$smallValue);
        $doubleUnsc = jl_Math_absImpl($doubleUnsc);
        var$4 = otcit_DoubleAnalyzer_resultForLog10;
        otcit_DoubleAnalyzer_analyze($doubleUnsc, var$4);
        var$1 = var$4.$exponent;
        if (var$1 < 0 && Long_gt(var$4.$mantissa, Long_create(1569325056, 23283064)))
            var$1 = var$1 + 1 | 0;
        var$1 = 1 + var$1 | 0;
    }
    $this.$precision1 = var$1;
    return var$1;
},
jm_BigDecimal_aproxPrecision = $this => {
    let var$1;
    var$1 = $this.$precision1;
    if (var$1 <= 0)
        var$1 = (($this.$bitLength1 - 1 | 0) * 0.3010299956639812 | 0) + 1 | 0;
    return var$1;
},
jm_BigDecimal_toIntScale = $longScale => {
    let var$2;
    jm_BigDecimal_$callClinit();
    if (Long_lt($longScale, Long_fromInt(-2147483648))) {
        var$2 = new jl_ArithmeticException;
        jl_RuntimeException__init_(var$2, $rt_s(64));
        $rt_throw(var$2);
    }
    if (Long_le($longScale, Long_fromInt(2147483647)))
        return Long_lo($longScale);
    var$2 = new jl_ArithmeticException;
    jl_RuntimeException__init_(var$2, $rt_s(65));
    $rt_throw(var$2);
},
jm_BigDecimal_getUnscaledValue = $this => {
    if ($this.$intVal === null)
        $this.$intVal = jm_BigInteger_valueOf($this.$smallValue);
    return $this.$intVal;
},
jm_BigDecimal_bitLength = $smallValue => {
    jm_BigDecimal_$callClinit();
    if (Long_lt($smallValue, Long_ZERO))
        $smallValue = Long_xor($smallValue, Long_fromInt(-1));
    return 64 - jl_Long_numberOfLeadingZeros($smallValue) | 0;
},
jm_BigDecimal__clinit_ = () => {
    let var$1, var$2, var$3, $i, $j;
    jm_BigDecimal_ZERO = jm_BigDecimal__init_(0, 0);
    jm_BigDecimal_ONE = jm_BigDecimal__init_(1, 0);
    jm_BigDecimal_TEN = jm_BigDecimal__init_(10, 0);
    var$1 = $rt_createLongArray(19);
    var$2 = var$1.data;
    var$2[0] = Long_fromInt(1);
    var$2[1] = Long_fromInt(10);
    var$2[2] = Long_fromInt(100);
    var$2[3] = Long_fromInt(1000);
    var$2[4] = Long_fromInt(10000);
    var$2[5] = Long_fromInt(100000);
    var$2[6] = Long_fromInt(1000000);
    var$2[7] = Long_fromInt(10000000);
    var$2[8] = Long_fromInt(100000000);
    var$2[9] = Long_fromInt(1000000000);
    var$2[10] = Long_create(1410065408, 2);
    var$2[11] = Long_create(1215752192, 23);
    var$2[12] = Long_create(3567587328, 232);
    var$2[13] = Long_create(1316134912, 2328);
    var$2[14] = Long_create(276447232, 23283);
    var$2[15] = Long_create(2764472320, 232830);
    var$2[16] = Long_create(1874919424, 2328306);
    var$2[17] = Long_create(1569325056, 23283064);
    var$2[18] = Long_create(2808348672, 232830643);
    jm_BigDecimal_LONG_TEN_POW = var$1;
    var$1 = $rt_createLongArray(28);
    var$3 = var$1.data;
    var$3[0] = Long_fromInt(1);
    var$3[1] = Long_fromInt(5);
    var$3[2] = Long_fromInt(25);
    var$3[3] = Long_fromInt(125);
    var$3[4] = Long_fromInt(625);
    var$3[5] = Long_fromInt(3125);
    var$3[6] = Long_fromInt(15625);
    var$3[7] = Long_fromInt(78125);
    var$3[8] = Long_fromInt(390625);
    var$3[9] = Long_fromInt(1953125);
    var$3[10] = Long_fromInt(9765625);
    var$3[11] = Long_fromInt(48828125);
    var$3[12] = Long_fromInt(244140625);
    var$3[13] = Long_fromInt(1220703125);
    var$3[14] = Long_create(1808548329, 1);
    var$3[15] = Long_create(452807053, 7);
    var$3[16] = Long_create(2264035265, 35);
    var$3[17] = Long_create(2730241733, 177);
    var$3[18] = Long_create(766306777, 888);
    var$3[19] = Long_create(3831533885, 4440);
    var$3[20] = Long_create(1977800241, 22204);
    var$3[21] = Long_create(1299066613, 111022);
    var$3[22] = Long_create(2200365769, 555111);
    var$3[23] = Long_create(2411894253, 2775557);
    var$3[24] = Long_create(3469536673, 13877787);
    var$3[25] = Long_create(167814181, 69388939);
    var$3[26] = Long_create(839070905, 346944695);
    var$3[27] = Long_create(4195354525, 1734723475);
    jm_BigDecimal_LONG_FIVE_POW = var$1;
    jm_BigDecimal_LONG_FIVE_POW_BIT_LENGTH = $rt_createIntArray(var$3.length);
    jm_BigDecimal_LONG_TEN_POW_BIT_LENGTH = $rt_createIntArray(var$2.length);
    jm_BigDecimal_BI_SCALED_BY_ZERO = $rt_createArray(jm_BigDecimal, 11);
    jm_BigDecimal_ZERO_SCALED_BY = $rt_createArray(jm_BigDecimal, 11);
    jm_BigDecimal_CH_ZEROS = $rt_createCharArray(100);
    $i = 0;
    while ($i < jm_BigDecimal_ZERO_SCALED_BY.data.length) {
        jm_BigDecimal_BI_SCALED_BY_ZERO.data[$i] = jm_BigDecimal__init_($i, 0);
        jm_BigDecimal_ZERO_SCALED_BY.data[$i] = jm_BigDecimal__init_(0, $i);
        jm_BigDecimal_CH_ZEROS.data[$i] = 48;
        $i = $i + 1 | 0;
    }
    while (true) {
        var$1 = jm_BigDecimal_CH_ZEROS.data;
        if ($i >= var$1.length)
            break;
        var$1[$i] = 48;
        $i = $i + 1 | 0;
    }
    $j = 0;
    while (true) {
        var$1 = jm_BigDecimal_LONG_FIVE_POW_BIT_LENGTH.data;
        if ($j >= var$1.length)
            break;
        var$1[$j] = jm_BigDecimal_bitLength(jm_BigDecimal_LONG_FIVE_POW.data[$j]);
        $j = $j + 1 | 0;
    }
    $j = 0;
    while (true) {
        var$1 = jm_BigDecimal_LONG_TEN_POW_BIT_LENGTH.data;
        if ($j >= var$1.length)
            break;
        var$1[$j] = jm_BigDecimal_bitLength(jm_BigDecimal_LONG_TEN_POW.data[$j]);
        $j = $j + 1 | 0;
    }
    jm_Multiplication_$callClinit();
    jm_BigDecimal_TEN_POW = jm_Multiplication_bigTenPows;
    jm_BigDecimal_FIVE_POW = jm_Multiplication_bigFivePows;
};
function ju_FormatFlagsConversionMismatchException() {
    let a = this; ju_IllegalFormatException.call(a);
    a.$flags0 = null;
    a.$conversion0 = 0;
}
function ju_IllegalFormatFlagsException() {
    ju_IllegalFormatException.call(this);
    this.$flags1 = null;
}
let ju_IllegalFormatFlagsException__init_0 = ($this, $flags) => {
    let var$2;
    var$2 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$2);
    jl_StringBuilder_append(jl_StringBuilder_append(var$2, $rt_s(66)), $flags);
    jl_RuntimeException__init_($this, jl_AbstractStringBuilder_toString(var$2));
    $this.$flags1 = $flags;
},
ju_IllegalFormatFlagsException__init_ = var_0 => {
    let var_1 = new ju_IllegalFormatFlagsException();
    ju_IllegalFormatFlagsException__init_0(var_1, var_0);
    return var_1;
};
function ju_MissingFormatWidthException() {
    ju_IllegalFormatException.call(this);
    this.$formatSpecifier = null;
}
let ju_MissingFormatWidthException__init_0 = ($this, $formatSpecifier) => {
    let var$2;
    var$2 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$2);
    jl_StringBuilder_append(jl_StringBuilder_append(var$2, $rt_s(67)), $formatSpecifier);
    jl_RuntimeException__init_($this, jl_AbstractStringBuilder_toString(var$2));
    $this.$formatSpecifier = $formatSpecifier;
},
ju_MissingFormatWidthException__init_ = var_0 => {
    let var_1 = new ju_MissingFormatWidthException();
    ju_MissingFormatWidthException__init_0(var_1, var_0);
    return var_1;
},
jl_StringBuffer = $rt_classWithoutFields(jl_AbstractStringBuilder),
jl_StringBuffer_ensureCapacity = ($this, var$1) => {
    jl_AbstractStringBuilder_ensureCapacity($this, var$1);
},
jl_StringBuffer_insert0 = ($this, var$1, var$2) => {
    jl_AbstractStringBuilder_insert0($this, var$1, var$2);
    return $this;
},
jl_StringBuffer_insert = ($this, var$1, var$2) => {
    jl_AbstractStringBuilder_insert($this, var$1, var$2);
    return $this;
};
function jt_FieldPosition() {
    jl_Object.call(this);
    this.$myField = 0;
}
let jt_DecimalFormat$FormatField = $rt_classWithoutFields(0);
function jt_DecimalFormat$TextField() {
    jl_Object.call(this);
    this.$text = null;
}
let jt_DecimalFormat$TextField__init_0 = ($this, $text) => {
    $this.$text = $text;
},
jt_DecimalFormat$TextField__init_ = var_0 => {
    let var_1 = new jt_DecimalFormat$TextField();
    jt_DecimalFormat$TextField__init_0(var_1, var_0);
    return var_1;
},
jt_DecimalFormat$TextField_render = ($this, $format, $buffer) => {
    jl_AbstractStringBuilder_append0($buffer, $this.$text);
};
function jl_Enum() {
    let a = this; jl_Object.call(a);
    a.$name0 = null;
    a.$ordinal = 0;
}
function jm_RoundingMode() {
    jl_Enum.call(this);
    this.$bigDecimalRM = 0;
}
let jm_RoundingMode_UP = null,
jm_RoundingMode_DOWN = null,
jm_RoundingMode_CEILING = null,
jm_RoundingMode_FLOOR = null,
jm_RoundingMode_HALF_UP = null,
jm_RoundingMode_HALF_DOWN = null,
jm_RoundingMode_HALF_EVEN = null,
jm_RoundingMode_UNNECESSARY = null,
jm_RoundingMode_$VALUES = null,
jm_RoundingMode__init_0 = ($this, var$1, var$2, $rm) => {
    $this.$name0 = var$1;
    $this.$ordinal = var$2;
    $this.$bigDecimalRM = $rm;
},
jm_RoundingMode__init_ = (var_0, var_1, var_2) => {
    let var_3 = new jm_RoundingMode();
    jm_RoundingMode__init_0(var_3, var_0, var_1, var_2);
    return var_3;
},
jm_RoundingMode__clinit_ = () => {
    let var$1, var$2, var$3;
    jm_RoundingMode_UP = jm_RoundingMode__init_($rt_s(68), 0, 0);
    jm_RoundingMode_DOWN = jm_RoundingMode__init_($rt_s(69), 1, 1);
    jm_RoundingMode_CEILING = jm_RoundingMode__init_($rt_s(70), 2, 2);
    jm_RoundingMode_FLOOR = jm_RoundingMode__init_($rt_s(71), 3, 3);
    jm_RoundingMode_HALF_UP = jm_RoundingMode__init_($rt_s(72), 4, 4);
    jm_RoundingMode_HALF_DOWN = jm_RoundingMode__init_($rt_s(73), 5, 5);
    jm_RoundingMode_HALF_EVEN = jm_RoundingMode__init_($rt_s(74), 6, 6);
    var$1 = jm_RoundingMode__init_($rt_s(75), 7, 7);
    jm_RoundingMode_UNNECESSARY = var$1;
    var$2 = $rt_createArray(jm_RoundingMode, 8);
    var$3 = var$2.data;
    var$3[0] = jm_RoundingMode_UP;
    var$3[1] = jm_RoundingMode_DOWN;
    var$3[2] = jm_RoundingMode_CEILING;
    var$3[3] = jm_RoundingMode_FLOOR;
    var$3[4] = jm_RoundingMode_HALF_UP;
    var$3[5] = jm_RoundingMode_HALF_DOWN;
    var$3[6] = jm_RoundingMode_HALF_EVEN;
    var$3[7] = var$1;
    jm_RoundingMode_$VALUES = var$2;
};
function ju_Currency() {
    jl_Object.call(this);
    this.$resource = null;
}
let ju_Currency_currencies = null,
ju_Currency_getCurrencyCode = $this => {
    return ($this.$resource.code !== null ? $rt_str($this.$resource.code) : null);
},
jm_Multiplication = $rt_classWithoutFields(),
jm_Multiplication_tenPows = null,
jm_Multiplication_fivePows = null,
jm_Multiplication_bigTenPows = null,
jm_Multiplication_bigFivePows = null,
jm_Multiplication_$callClinit = () => {
    jm_Multiplication_$callClinit = $rt_eraseClinit(jm_Multiplication);
    jm_Multiplication__clinit_();
},
jm_Multiplication_karatsuba = ($op1, $op2) => {
    let $upperOp1, $ndiv2, $upperOp2, $lowerOp1, $lowerOp2, $upper, $lower, var$10, var$11, var$12, var$13, var$14, var$15, var$16, var$17, var$18, var$19, var$20, var$21, var$22, var$23;
    jm_Multiplication_$callClinit();
    if ($op2.$numberLength <= $op1.$numberLength) {
        $upperOp1 = $op2;
        $op2 = $op1;
        $op1 = $upperOp1;
    }
    $ndiv2 = $op1.$numberLength;
    if ($ndiv2 >= 63) {
        $ndiv2 = ($op2.$numberLength & (-2)) << 4;
        $upperOp1 = jm_BigInteger_shiftRight($op2, $ndiv2);
        $upperOp2 = jm_BigInteger_shiftRight($op1, $ndiv2);
        $lowerOp1 = jm_BigInteger_subtract($op2, jm_BigInteger_shiftLeft($upperOp1, $ndiv2));
        $lowerOp2 = jm_BigInteger_subtract($op1, jm_BigInteger_shiftLeft($upperOp2, $ndiv2));
        $upper = jm_Multiplication_karatsuba($upperOp1, $upperOp2);
        $lower = jm_Multiplication_karatsuba($lowerOp1, $lowerOp2);
        $op1 = jm_BigInteger_shiftLeft(jm_BigInteger_add(jm_BigInteger_add(jm_Multiplication_karatsuba(jm_BigInteger_subtract($upperOp1, $lowerOp1), jm_BigInteger_subtract($lowerOp2, $upperOp2)), $upper), $lower), $ndiv2);
        return jm_BigInteger_add(jm_BigInteger_add(jm_BigInteger_shiftLeft($upper, $ndiv2 << 1), $op1), $lower);
    }
    var$10 = $op2.$numberLength;
    var$11 = var$10 + $ndiv2 | 0;
    var$12 = $op2.$sign == $op1.$sign ? 1 : (-1);
    if (var$11 == 2) {
        var$13 = jm_Multiplication_unsignedMultAddAdd($op2.$digits.data[0], $op1.$digits.data[0], 0, 0);
        $ndiv2 = Long_lo(var$13);
        var$10 = Long_hi(var$13);
        $op1 = !var$10 ? jm_BigInteger__init_0(var$12, $ndiv2) : jm_BigInteger__init_(var$12, 2, $rt_createIntArrayFromData([$ndiv2, var$10]));
    } else {
        var$14 = $op2.$digits;
        var$15 = $op1.$digits;
        var$16 = $rt_createIntArray(var$11);
        if (var$10 && $ndiv2) {
            if (var$10 == 1) {
                var$17 = var$14.data;
                var$16.data[$ndiv2] = jm_Multiplication_multiplyByInt(var$16, var$15, $ndiv2, var$17[0]);
            } else if ($ndiv2 == 1) {
                var$17 = var$15.data;
                var$16.data[var$10] = jm_Multiplication_multiplyByInt(var$16, var$14, var$10, var$17[0]);
            } else if (var$14 === var$15 && var$10 == $ndiv2)
                jm_Multiplication_square(var$14, var$10, var$16);
            else {
                var$18 = var$16.data;
                var$19 = 0;
                while (var$19 < var$10) {
                    var$17 = var$14.data;
                    var$13 = Long_ZERO;
                    var$20 = var$17[var$19];
                    var$21 = 0;
                    while (var$21 < $ndiv2) {
                        var$22 = var$15.data[var$21];
                        var$23 = var$19 + var$21 | 0;
                        var$13 = jm_Multiplication_unsignedMultAddAdd(var$20, var$22, var$18[var$23], Long_lo(var$13));
                        var$18[var$23] = Long_lo(var$13);
                        var$13 = Long_shru(var$13, 32);
                        var$21 = var$21 + 1 | 0;
                    }
                    var$18[var$19 + $ndiv2 | 0] = Long_lo(var$13);
                    var$19 = var$19 + 1 | 0;
                }
            }
        }
        $op1 = jm_BigInteger__init_(var$12, var$11, var$16);
        jm_BigInteger_cutOffLeadingZeroes($op1);
    }
    return $op1;
},
jm_Multiplication_multiplyByInt = ($res, $a, $aSize, $factor) => {
    let $carry, $i, var$7;
    jm_Multiplication_$callClinit();
    $carry = Long_ZERO;
    $i = 0;
    while ($i < $aSize) {
        var$7 = $res.data;
        $carry = jm_Multiplication_unsignedMultAddAdd($a.data[$i], $factor, Long_lo($carry), 0);
        var$7[$i] = Long_lo($carry);
        $carry = Long_shru($carry, 32);
        $i = $i + 1 | 0;
    }
    return Long_lo($carry);
},
jm_Multiplication_square = ($a, $aLen, $res) => {
    let $i, $carry, $i_0, $j, var$8, var$9, $i_1, $index, var$12, var$13;
    jm_Multiplication_$callClinit();
    $i = 0;
    while ($i < $aLen) {
        $carry = Long_ZERO;
        $i_0 = $i + 1 | 0;
        $j = $i_0;
        while ($j < $aLen) {
            var$8 = $a.data;
            var$9 = $res.data;
            $i_1 = var$8[$i];
            $index = var$8[$j];
            var$12 = $i + $j | 0;
            $carry = jm_Multiplication_unsignedMultAddAdd($i_1, $index, var$9[var$12], Long_lo($carry));
            var$9[var$12] = Long_lo($carry);
            $carry = Long_shru($carry, 32);
            $j = $j + 1 | 0;
        }
        $res.data[$i + $aLen | 0] = Long_lo($carry);
        $i = $i_0;
    }
    $i_1 = $aLen << 1;
    $index = 0;
    var$13 = 0;
    while (var$13 < $i_1) {
        var$8 = $res.data;
        $i = var$8[var$13];
        var$8[var$13] = $i << 1 | $index;
        $index = $i >>> 31 | 0;
        var$13 = var$13 + 1 | 0;
    }
    if ($index)
        $res.data[$i_1] = $index;
    $carry = Long_ZERO;
    $i_1 = 0;
    $index = 0;
    while ($i_1 < $aLen) {
        var$8 = $a.data;
        var$9 = $res.data;
        $carry = jm_Multiplication_unsignedMultAddAdd(var$8[$i_1], var$8[$i_1], var$9[$index], Long_lo($carry));
        var$9[$index] = Long_lo($carry);
        $carry = Long_shru($carry, 32);
        $index = $index + 1 | 0;
        $carry = Long_add($carry, Long_and(Long_fromInt(var$9[$index]), Long_create(4294967295, 0)));
        var$9[$index] = Long_lo($carry);
        $carry = Long_shru($carry, 32);
        $i_1 = $i_1 + 1 | 0;
        $index = $index + 1 | 0;
    }
    return $res;
},
jm_Multiplication_powerOf10 = $exp => {
    let $intExp, var$3, $powerOfFive, $longExp, var$6;
    jm_Multiplication_$callClinit();
    $intExp = Long_lo($exp);
    var$3 = jm_Multiplication_bigTenPows.data;
    if (Long_lt($exp, Long_fromInt(var$3.length)))
        return var$3[$intExp];
    if (Long_le($exp, Long_fromInt(50)))
        return jm_BigInteger_pow(jm_BigInteger_TEN, $intExp);
    if (Long_le($exp, Long_fromInt(1000)))
        return jm_BigInteger_shiftLeft(jm_BigInteger_pow(jm_Multiplication_bigFivePows.data[1], $intExp), $intExp);
    if (Long_gt(Long_add(Long_fromInt(1), Long_fromNumber(Long_toNumber($exp) / 2.4082399653118496)), Long_fromInt(1000000))) {
        $powerOfFive = new jl_ArithmeticException;
        jl_RuntimeException__init_($powerOfFive, $rt_s(76));
        $rt_throw($powerOfFive);
    }
    if (Long_le($exp, Long_fromInt(2147483647)))
        return jm_BigInteger_shiftLeft(jm_BigInteger_pow(jm_Multiplication_bigFivePows.data[1], $intExp), $intExp);
    $powerOfFive = jm_BigInteger_pow(jm_Multiplication_bigFivePows.data[1], 2147483647);
    $longExp = Long_sub($exp, Long_fromInt(2147483647));
    $intExp = Long_lo(Long_rem($exp, Long_fromInt(2147483647)));
    var$6 = $powerOfFive;
    $exp = $longExp;
    while (Long_gt($exp, Long_fromInt(2147483647))) {
        var$6 = jm_BigInteger_multiply(var$6, $powerOfFive);
        $exp = Long_sub($exp, Long_fromInt(2147483647));
    }
    $powerOfFive = jm_BigInteger_shiftLeft(jm_BigInteger_multiply(var$6, jm_BigInteger_pow(jm_Multiplication_bigFivePows.data[1], $intExp)), 2147483647);
    while (Long_gt($longExp, Long_fromInt(2147483647))) {
        $powerOfFive = jm_BigInteger_shiftLeft($powerOfFive, 2147483647);
        $longExp = Long_sub($longExp, Long_fromInt(2147483647));
    }
    return jm_BigInteger_shiftLeft($powerOfFive, $intExp);
},
jm_Multiplication_unsignedMultAddAdd = ($a, $b, $c, $d) => {
    jm_Multiplication_$callClinit();
    return Long_add(Long_add(Long_mul(Long_and(Long_fromInt($a), Long_create(4294967295, 0)), Long_and(Long_fromInt($b), Long_create(4294967295, 0))), Long_and(Long_fromInt($c), Long_create(4294967295, 0))), Long_and(Long_fromInt($d), Long_create(4294967295, 0)));
},
jm_Multiplication__clinit_ = () => {
    let $fivePow, $i, var$3, var$4;
    jm_Multiplication_tenPows = $rt_createIntArrayFromData([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000]);
    jm_Multiplication_fivePows = $rt_createIntArrayFromData([1, 5, 25, 125, 625, 3125, 15625, 78125, 390625, 1953125, 9765625, 48828125, 244140625, 1220703125]);
    jm_Multiplication_bigTenPows = $rt_createArray(jm_BigInteger, 32);
    jm_Multiplication_bigFivePows = $rt_createArray(jm_BigInteger, 32);
    $fivePow = Long_fromInt(1);
    $i = 0;
    while ($i <= 18) {
        jm_Multiplication_bigFivePows.data[$i] = jm_BigInteger_valueOf($fivePow);
        jm_Multiplication_bigTenPows.data[$i] = jm_BigInteger_valueOf(Long_shl($fivePow, $i));
        $fivePow = Long_mul($fivePow, Long_fromInt(5));
        $i = $i + 1 | 0;
    }
    while ($i < jm_Multiplication_bigTenPows.data.length) {
        var$3 = jm_Multiplication_bigFivePows.data;
        var$4 = $i - 1 | 0;
        var$3[$i] = jm_BigInteger_multiply(var$3[var$4], var$3[1]);
        var$3 = jm_Multiplication_bigTenPows.data;
        var$3[$i] = jm_BigInteger_multiply(var$3[var$4], jm_BigInteger_TEN);
        $i = $i + 1 | 0;
    }
},
otcic_CurrencyHelper = $rt_classWithoutFields(),
otcic_CurrencyHelper_$$metadata$$0 = null,
otcic_CurrencyHelper_$$metadata$$1 = null,
otcic_CurrencyHelper_getCurrencies$$create = () => {
    return [{"code" : "AFN", "fractionDigits" : 2, "numericCode" : 971}, {"code" : "EUR", "fractionDigits" : 2, "numericCode" : 978}, {"code" : "ALL", "fractionDigits" : 2, "numericCode" : 8}, {"code" : "DZD", "fractionDigits" : 2, "numericCode" : 12}, {"code" : "USD", "fractionDigits" : 2, "numericCode" : 840}, {"code" : "EUR", "fractionDigits" : 2, "numericCode" : 978}, {"code" : "AOA", "fractionDigits" : 2, "numericCode" : 973}, {"code" : "XCD", "fractionDigits" : 2, "numericCode" : 951}, {"code" : null,
    "fractionDigits" : 0, "numericCode" : 0}, {"code" : "XCD", "fractionDigits" : 2, "numericCode" : 951}, {"code" : "ARS", "fractionDigits" : 2, "numericCode" : 32}, {"code" : "AMD", "fractionDigits" : 2, "numericCode" : 51}, {"code" : "AWG", "fractionDigits" : 2, "numericCode" : 533}, {"code" : "AUD", "fractionDigits" : 2, "numericCode" : 36}, {"code" : "EUR", "fractionDigits" : 2, "numericCode" : 978}, {"code" : "AZN", "fractionDigits" : 2, "numericCode" : 944}, {"code" : "BSD", "fractionDigits" : 2, "numericCode"
    : 44}, {"code" : "BHD", "fractionDigits" : 3, "numericCode" : 48}, {"code" : "BDT", "fractionDigits" : 2, "numericCode" : 50}, {"code" : "BBD", "fractionDigits" : 2, "numericCode" : 52}, {"code" : "BYR", "fractionDigits" : 0, "numericCode" : 974}, {"code" : "EUR", "fractionDigits" : 2, "numericCode" : 978}, {"code" : "BZD", "fractionDigits" : 2, "numericCode" : 84}, {"code" : "XOF", "fractionDigits" : 0, "numericCode" : 952}, {"code" : "BMD", "fractionDigits" : 2, "numericCode" : 60}, {"code" : "BTN", "fractionDigits"
    : 2, "numericCode" : 64}, {"code" : "INR", "fractionDigits" : 2, "numericCode" : 356}, {"code" : "BOB", "fractionDigits" : 2, "numericCode" : 68}, {"code" : "BOV", "fractionDigits" : 2, "numericCode" : 984}, {"code" : "USD", "fractionDigits" : 2, "numericCode" : 840}, {"code" : "BAM", "fractionDigits" : 2, "numericCode" : 977}, {"code" : "BWP", "fractionDigits" : 2, "numericCode" : 72}, {"code" : "NOK", "fractionDigits" : 2, "numericCode" : 578}, {"code" : "BRL", "fractionDigits" : 2, "numericCode" : 986}
    , {"code" : "USD", "fractionDigits" : 2, "numericCode" : 840}, {"code" : "BND", "fractionDigits" : 2, "numericCode" : 96}, {"code" : "BGN", "fractionDigits" : 2, "numericCode" : 975}, {"code" : "XOF", "fractionDigits" : 0, "numericCode" : 952}, {"code" : "BIF", "fractionDigits" : 0, "numericCode" : 108}, {"code" : "KHR", "fractionDigits" : 2, "numericCode" : 116}, {"code" : "XAF", "fractionDigits" : 0, "numericCode" : 950}, {"code" : "CAD", "fractionDigits" : 2, "numericCode" : 124}, {"code" : "CVE", "fractionDigits"
    : 2, "numericCode" : 132}, {"code" : "KYD", "fractionDigits" : 2, "numericCode" : 136}, {"code" : "XAF", "fractionDigits" : 0, "numericCode" : 950}, {"code" : "XAF", "fractionDigits" : 0, "numericCode" : 950}, {"code" : "CLF", "fractionDigits" : 4, "numericCode" : 990}, {"code" : "CLP", "fractionDigits" : 0, "numericCode" : 152}, {"code" : "CNY", "fractionDigits" : 2, "numericCode" : 156}, {"code" : "AUD", "fractionDigits" : 2, "numericCode" : 36}, {"code" : "AUD", "fractionDigits" : 2, "numericCode" : 36}
    , {"code" : "COP", "fractionDigits" : 2, "numericCode" : 170}, {"code" : "COU", "fractionDigits" : 2, "numericCode" : 970}, {"code" : "KMF", "fractionDigits" : 0, "numericCode" : 174}, {"code" : "XAF", "fractionDigits" : 0, "numericCode" : 950}, {"code" : "CDF", "fractionDigits" : 2, "numericCode" : 976}, {"code" : "NZD", "fractionDigits" : 2, "numericCode" : 554}, {"code" : "CRC", "fractionDigits" : 2, "numericCode" : 188}, {"code" : "XOF", "fractionDigits" : 0, "numericCode" : 952}, {"code" : "HRK", "fractionDigits"
    : 2, "numericCode" : 191}, {"code" : "CUC", "fractionDigits" : 2, "numericCode" : 931}, {"code" : "CUP", "fractionDigits" : 2, "numericCode" : 192}, {"code" : "ANG", "fractionDigits" : 2, "numericCode" : 532}, {"code" : "EUR", "fractionDigits" : 2, "numericCode" : 978}, {"code" : "CZK", "fractionDigits" : 2, "numericCode" : 203}, {"code" : "DKK", "fractionDigits" : 2, "numericCode" : 208}, {"code" : "DJF", "fractionDigits" : 0, "numericCode" : 262}, {"code" : "XCD", "fractionDigits" : 2, "numericCode" :
    951}, {"code" : "DOP", "fractionDigits" : 2, "numericCode" : 214}, {"code" : "USD", "fractionDigits" : 2, "numericCode" : 840}, {"code" : "EGP", "fractionDigits" : 2, "numericCode" : 818}, {"code" : "SVC", "fractionDigits" : 2, "numericCode" : 222}, {"code" : "USD", "fractionDigits" : 2, "numericCode" : 840}, {"code" : "XAF", "fractionDigits" : 0, "numericCode" : 950}, {"code" : "ERN", "fractionDigits" : 2, "numericCode" : 232}, {"code" : "EUR", "fractionDigits" : 2, "numericCode" : 978}, {"code" : "ETB",
    "fractionDigits" : 2, "numericCode" : 230}, {"code" : "EUR", "fractionDigits" : 2, "numericCode" : 978}, {"code" : "FKP", "fractionDigits" : 2, "numericCode" : 238}, {"code" : "DKK", "fractionDigits" : 2, "numericCode" : 208}, {"code" : "FJD", "fractionDigits" : 2, "numericCode" : 242}, {"code" : "EUR", "fractionDigits" : 2, "numericCode" : 978}, {"code" : "EUR", "fractionDigits" : 2, "numericCode" : 978}, {"code" : "EUR", "fractionDigits" : 2, "numericCode" : 978}, {"code" : "XPF", "fractionDigits" : 0,
    "numericCode" : 953}, {"code" : "EUR", "fractionDigits" : 2, "numericCode" : 978}, {"code" : "XAF", "fractionDigits" : 0, "numericCode" : 950}, {"code" : "GMD", "fractionDigits" : 2, "numericCode" : 270}, {"code" : "GEL", "fractionDigits" : 2, "numericCode" : 981}, {"code" : "EUR", "fractionDigits" : 2, "numericCode" : 978}, {"code" : "GHS", "fractionDigits" : 2, "numericCode" : 936}, {"code" : "GIP", "fractionDigits" : 2, "numericCode" : 292}, {"code" : "EUR", "fractionDigits" : 2, "numericCode" : 978}
    , {"code" : "DKK", "fractionDigits" : 2, "numericCode" : 208}, {"code" : "XCD", "fractionDigits" : 2, "numericCode" : 951}, {"code" : "EUR", "fractionDigits" : 2, "numericCode" : 978}, {"code" : "USD", "fractionDigits" : 2, "numericCode" : 840}, {"code" : "GTQ", "fractionDigits" : 2, "numericCode" : 320}, {"code" : "GBP", "fractionDigits" : 2, "numericCode" : 826}, {"code" : "GNF", "fractionDigits" : 0, "numericCode" : 324}, {"code" : "XOF", "fractionDigits" : 0, "numericCode" : 952}, {"code" : "GYD", "fractionDigits"
    : 2, "numericCode" : 328}, {"code" : "HTG", "fractionDigits" : 2, "numericCode" : 332}, {"code" : "USD", "fractionDigits" : 2, "numericCode" : 840}, {"code" : "AUD", "fractionDigits" : 2, "numericCode" : 36}, {"code" : "EUR", "fractionDigits" : 2, "numericCode" : 978}, {"code" : "HNL", "fractionDigits" : 2, "numericCode" : 340}, {"code" : "HKD", "fractionDigits" : 2, "numericCode" : 344}, {"code" : "HUF", "fractionDigits" : 2, "numericCode" : 348}, {"code" : "ISK", "fractionDigits" : 0, "numericCode" : 352}
    , {"code" : "INR", "fractionDigits" : 2, "numericCode" : 356}, {"code" : "IDR", "fractionDigits" : 2, "numericCode" : 360}, {"code" : "XDR", "fractionDigits" : -1, "numericCode" : 960}, {"code" : "IRR", "fractionDigits" : 2, "numericCode" : 364}, {"code" : "IQD", "fractionDigits" : 3, "numericCode" : 368}, {"code" : "EUR", "fractionDigits" : 2, "numericCode" : 978}, {"code" : "GBP", "fractionDigits" : 2, "numericCode" : 826}, {"code" : "ILS", "fractionDigits" : 2, "numericCode" : 376}, {"code" : "EUR", "fractionDigits"
    : 2, "numericCode" : 978}, {"code" : "JMD", "fractionDigits" : 2, "numericCode" : 388}, {"code" : "JPY", "fractionDigits" : 0, "numericCode" : 392}, {"code" : "GBP", "fractionDigits" : 2, "numericCode" : 826}, {"code" : "JOD", "fractionDigits" : 3, "numericCode" : 400}, {"code" : "KZT", "fractionDigits" : 2, "numericCode" : 398}, {"code" : "KES", "fractionDigits" : 2, "numericCode" : 404}, {"code" : "AUD", "fractionDigits" : 2, "numericCode" : 36}, {"code" : "KPW", "fractionDigits" : 2, "numericCode" : 408}
    , {"code" : "KRW", "fractionDigits" : 0, "numericCode" : 410}, {"code" : "KWD", "fractionDigits" : 3, "numericCode" : 414}, {"code" : "KGS", "fractionDigits" : 2, "numericCode" : 417}, {"code" : "LAK", "fractionDigits" : 2, "numericCode" : 418}, {"code" : "EUR", "fractionDigits" : 2, "numericCode" : 978}, {"code" : "LBP", "fractionDigits" : 2, "numericCode" : 422}, {"code" : "LSL", "fractionDigits" : 2, "numericCode" : 426}, {"code" : "ZAR", "fractionDigits" : 2, "numericCode" : 710}, {"code" : "LRD", "fractionDigits"
    : 2, "numericCode" : 430}, {"code" : "LYD", "fractionDigits" : 3, "numericCode" : 434}, {"code" : "CHF", "fractionDigits" : 2, "numericCode" : 756}, {"code" : "EUR", "fractionDigits" : 2, "numericCode" : 978}, {"code" : "EUR", "fractionDigits" : 2, "numericCode" : 978}, {"code" : "MOP", "fractionDigits" : 2, "numericCode" : 446}, {"code" : "MKD", "fractionDigits" : 2, "numericCode" : 807}, {"code" : "MGA", "fractionDigits" : 2, "numericCode" : 969}, {"code" : "MWK", "fractionDigits" : 2, "numericCode" :
    454}, {"code" : "MYR", "fractionDigits" : 2, "numericCode" : 458}, {"code" : "MVR", "fractionDigits" : 2, "numericCode" : 462}, {"code" : "XOF", "fractionDigits" : 0, "numericCode" : 952}, {"code" : "EUR", "fractionDigits" : 2, "numericCode" : 978}, {"code" : "USD", "fractionDigits" : 2, "numericCode" : 840}, {"code" : "EUR", "fractionDigits" : 2, "numericCode" : 978}, {"code" : "MRO", "fractionDigits" : 2, "numericCode" : 478}, {"code" : "MUR", "fractionDigits" : 2, "numericCode" : 480}, {"code" : "EUR",
    "fractionDigits" : 2, "numericCode" : 978}, {"code" : "XUA", "fractionDigits" : -1, "numericCode" : 965}, {"code" : "MXN", "fractionDigits" : 2, "numericCode" : 484}, {"code" : "MXV", "fractionDigits" : 2, "numericCode" : 979}, {"code" : "USD", "fractionDigits" : 2, "numericCode" : 840}, {"code" : "MDL", "fractionDigits" : 2, "numericCode" : 498}, {"code" : "EUR", "fractionDigits" : 2, "numericCode" : 978}, {"code" : "MNT", "fractionDigits" : 2, "numericCode" : 496}, {"code" : "EUR", "fractionDigits" : 2,
    "numericCode" : 978}, {"code" : "XCD", "fractionDigits" : 2, "numericCode" : 951}, {"code" : "MAD", "fractionDigits" : 2, "numericCode" : 504}, {"code" : "MZN", "fractionDigits" : 2, "numericCode" : 943}, {"code" : "MMK", "fractionDigits" : 2, "numericCode" : 104}, {"code" : "NAD", "fractionDigits" : 2, "numericCode" : 516}, {"code" : "ZAR", "fractionDigits" : 2, "numericCode" : 710}, {"code" : "AUD", "fractionDigits" : 2, "numericCode" : 36}, {"code" : "NPR", "fractionDigits" : 2, "numericCode" : 524},
    {"code" : "EUR", "fractionDigits" : 2, "numericCode" : 978}, {"code" : "XPF", "fractionDigits" : 0, "numericCode" : 953}, {"code" : "NZD", "fractionDigits" : 2, "numericCode" : 554}, {"code" : "NIO", "fractionDigits" : 2, "numericCode" : 558}, {"code" : "XOF", "fractionDigits" : 0, "numericCode" : 952}, {"code" : "NGN", "fractionDigits" : 2, "numericCode" : 566}, {"code" : "NZD", "fractionDigits" : 2, "numericCode" : 554}, {"code" : "AUD", "fractionDigits" : 2, "numericCode" : 36}, {"code" : "USD", "fractionDigits"
    : 2, "numericCode" : 840}, {"code" : "NOK", "fractionDigits" : 2, "numericCode" : 578}, {"code" : "OMR", "fractionDigits" : 3, "numericCode" : 512}, {"code" : "PKR", "fractionDigits" : 2, "numericCode" : 586}, {"code" : "USD", "fractionDigits" : 2, "numericCode" : 840}, {"code" : null, "fractionDigits" : 0, "numericCode" : 0}, {"code" : "PAB", "fractionDigits" : 2, "numericCode" : 590}, {"code" : "USD", "fractionDigits" : 2, "numericCode" : 840}, {"code" : "PGK", "fractionDigits" : 2, "numericCode" : 598}
    , {"code" : "PYG", "fractionDigits" : 0, "numericCode" : 600}, {"code" : "PEN", "fractionDigits" : 2, "numericCode" : 604}, {"code" : "PHP", "fractionDigits" : 2, "numericCode" : 608}, {"code" : "NZD", "fractionDigits" : 2, "numericCode" : 554}, {"code" : "PLN", "fractionDigits" : 2, "numericCode" : 985}, {"code" : "EUR", "fractionDigits" : 2, "numericCode" : 978}, {"code" : "USD", "fractionDigits" : 2, "numericCode" : 840}, {"code" : "QAR", "fractionDigits" : 2, "numericCode" : 634}, {"code" : "EUR", "fractionDigits"
    : 2, "numericCode" : 978}, {"code" : "RON", "fractionDigits" : 2, "numericCode" : 946}, {"code" : "RUB", "fractionDigits" : 2, "numericCode" : 643}, {"code" : "RWF", "fractionDigits" : 0, "numericCode" : 646}, {"code" : "EUR", "fractionDigits" : 2, "numericCode" : 978}, {"code" : "SHP", "fractionDigits" : 2, "numericCode" : 654}, {"code" : "XCD", "fractionDigits" : 2, "numericCode" : 951}, {"code" : "XCD", "fractionDigits" : 2, "numericCode" : 951}, {"code" : "EUR", "fractionDigits" : 2, "numericCode" :
    978}, {"code" : "EUR", "fractionDigits" : 2, "numericCode" : 978}, {"code" : "XCD", "fractionDigits" : 2, "numericCode" : 951}, {"code" : "WST", "fractionDigits" : 2, "numericCode" : 882}, {"code" : "EUR", "fractionDigits" : 2, "numericCode" : 978}, {"code" : "STD", "fractionDigits" : 2, "numericCode" : 678}, {"code" : "SAR", "fractionDigits" : 2, "numericCode" : 682}, {"code" : "XOF", "fractionDigits" : 0, "numericCode" : 952}, {"code" : "RSD", "fractionDigits" : 2, "numericCode" : 941}, {"code" : "SCR",
    "fractionDigits" : 2, "numericCode" : 690}, {"code" : "SLL", "fractionDigits" : 2, "numericCode" : 694}, {"code" : "SGD", "fractionDigits" : 2, "numericCode" : 702}, {"code" : "ANG", "fractionDigits" : 2, "numericCode" : 532}, {"code" : "XSU", "fractionDigits" : -1, "numericCode" : 994}, {"code" : "EUR", "fractionDigits" : 2, "numericCode" : 978}, {"code" : "EUR", "fractionDigits" : 2, "numericCode" : 978}, {"code" : "SBD", "fractionDigits" : 2, "numericCode" : 90}, {"code" : "SOS", "fractionDigits" : 2,
    "numericCode" : 706}, {"code" : "ZAR", "fractionDigits" : 2, "numericCode" : 710}, {"code" : null, "fractionDigits" : 0, "numericCode" : 0}, {"code" : "SSP", "fractionDigits" : 2, "numericCode" : 728}, {"code" : "EUR", "fractionDigits" : 2, "numericCode" : 978}, {"code" : "LKR", "fractionDigits" : 2, "numericCode" : 144}, {"code" : "SDG", "fractionDigits" : 2, "numericCode" : 938}, {"code" : "SRD", "fractionDigits" : 2, "numericCode" : 968}, {"code" : "NOK", "fractionDigits" : 2, "numericCode" : 578}, {"code"
    : "SZL", "fractionDigits" : 2, "numericCode" : 748}, {"code" : "SEK", "fractionDigits" : 2, "numericCode" : 752}, {"code" : "CHE", "fractionDigits" : 2, "numericCode" : 947}, {"code" : "CHF", "fractionDigits" : 2, "numericCode" : 756}, {"code" : "CHW", "fractionDigits" : 2, "numericCode" : 948}, {"code" : "SYP", "fractionDigits" : 2, "numericCode" : 760}, {"code" : "TWD", "fractionDigits" : 2, "numericCode" : 901}, {"code" : "TJS", "fractionDigits" : 2, "numericCode" : 972}, {"code" : "TZS", "fractionDigits"
    : 2, "numericCode" : 834}, {"code" : "THB", "fractionDigits" : 2, "numericCode" : 764}, {"code" : "USD", "fractionDigits" : 2, "numericCode" : 840}, {"code" : "XOF", "fractionDigits" : 0, "numericCode" : 952}, {"code" : "NZD", "fractionDigits" : 2, "numericCode" : 554}, {"code" : "TOP", "fractionDigits" : 2, "numericCode" : 776}, {"code" : "TTD", "fractionDigits" : 2, "numericCode" : 780}, {"code" : "TND", "fractionDigits" : 3, "numericCode" : 788}, {"code" : "TRY", "fractionDigits" : 2, "numericCode" :
    949}, {"code" : "TMT", "fractionDigits" : 2, "numericCode" : 934}, {"code" : "USD", "fractionDigits" : 2, "numericCode" : 840}, {"code" : "AUD", "fractionDigits" : 2, "numericCode" : 36}, {"code" : "UGX", "fractionDigits" : 0, "numericCode" : 800}, {"code" : "UAH", "fractionDigits" : 2, "numericCode" : 980}, {"code" : "AED", "fractionDigits" : 2, "numericCode" : 784}, {"code" : "GBP", "fractionDigits" : 2, "numericCode" : 826}, {"code" : "USD", "fractionDigits" : 2, "numericCode" : 840}, {"code" : "USN",
    "fractionDigits" : 2, "numericCode" : 997}, {"code" : "USD", "fractionDigits" : 2, "numericCode" : 840}, {"code" : "UYI", "fractionDigits" : 0, "numericCode" : 940}, {"code" : "UYU", "fractionDigits" : 2, "numericCode" : 858}, {"code" : "UZS", "fractionDigits" : 2, "numericCode" : 860}, {"code" : "VUV", "fractionDigits" : 0, "numericCode" : 548}, {"code" : "VEF", "fractionDigits" : 2, "numericCode" : 937}, {"code" : "VND", "fractionDigits" : 0, "numericCode" : 704}, {"code" : "USD", "fractionDigits" : 2,
    "numericCode" : 840}, {"code" : "USD", "fractionDigits" : 2, "numericCode" : 840}, {"code" : "XPF", "fractionDigits" : 0, "numericCode" : 953}, {"code" : "MAD", "fractionDigits" : 2, "numericCode" : 504}, {"code" : "YER", "fractionDigits" : 2, "numericCode" : 886}, {"code" : "ZMW", "fractionDigits" : 2, "numericCode" : 967}, {"code" : "ZWL", "fractionDigits" : 2, "numericCode" : 932}, {"code" : "XBA", "fractionDigits" : -1, "numericCode" : 955}, {"code" : "XBB", "fractionDigits" : -1, "numericCode" : 956}
    , {"code" : "XBC", "fractionDigits" : -1, "numericCode" : 957}, {"code" : "XBD", "fractionDigits" : -1, "numericCode" : 958}, {"code" : "XTS", "fractionDigits" : -1, "numericCode" : 963}, {"code" : "XXX", "fractionDigits" : -1, "numericCode" : 999}, {"code" : "XAU", "fractionDigits" : -1, "numericCode" : 959}, {"code" : "XPD", "fractionDigits" : -1, "numericCode" : 964}, {"code" : "XPT", "fractionDigits" : -1, "numericCode" : 962}, {"code" : "XAG", "fractionDigits" : -1, "numericCode" : 961}];
},
otcic_CurrencyHelper_getCountryToCurrencyMap$$create = () => {
    return {"": {"value" : "CYP"}, "PR": {"value" : "USD"}, "PT": {"value" : "EUR"}, "PW": {"value" : "USD"}, "PY": {"value" : "PYG"}, "QA": {"value" : "QAR"}, "AC": {"value" : "SHP"}, "AD": {"value" : "EUR"}, "AE": {"value" : "AED"}, "AF": {"value" : "AFN"}, "AG": {"value" : "XCD"}, "AI": {"value" : "XCD"}, "AL": {"value" : "ALL"}, "AM": {"value" : "AMD"}, "AN": {"value" : "ANG"}, "AO": {"value" : "AOA"}, "242": {"value" : "Brazzaville"}, "AQ": {"value" : ""}, "AR": {"value" : "ARS"}, "243": {"value" : "Kinshasa"}
    , "AS": {"value" : "USD"}, "AT": {"value" : "EUR"}, "RE": {"value" : "EUR"}, "AU": {"value" : ""}, "AW": {"value" : "AWG"}, "AX": {"value" : "EUR"}, "AZ": {"value" : "AMD"}, "RO": {"value" : "RON"}, "BA": {"value" : "BAM"}, "BB": {"value" : "BBD"}, "RS": {"value" : "RSD"}, "BD": {"value" : "BDT"}, "BE": {"value" : "EUR"}, "RU": {"value" : "RUB"}, "BF": {"value" : "XOF"}, "BG": {"value" : "BGN"}, "RW": {"value" : "RWF"}, "27": {"value" : ""}, "BH": {"value" : "BHD"}, "BI": {"value" : "BIF"}, "BJ": {"value"
    : "XOF"}, "BM": {"value" : "BMD"}, "BN": {"value" : "BND"}, "BO": {"value" : "BOB"}, "SA": {"value" : "SAR"}, "SB": {"value" : "SBD"}, "BR": {"value" : "BRL"}, "SC": {"value" : "SCR"}, "SD": {"value" : "SDD"}, "BT": {"value" : "BTN"}, "SE": {"value" : "SEK"}, "SG": {"value" : "SGD"}, "BV": {"value" : ""}, "BW": {"value" : "BWP"}, "SH": {"value" : "SHP"}, "SI": {"value" : "EUR"}, "BY": {"value" : "BYR"}, "SJ": {"value" : "NOK"}, "BZ": {"value" : "BZD"}, "SK": {"value" : "SKK"}, "SL": {"value" : "SLL"}, "SM":
    {"value" : "EUR"}, "SN": {"value" : "XOF"}, "SO": {"value" : ""}, "CA": {"value" : "CAD"}, "SR": {"value" : "SRD"}, "CC": {"value" : "AUD"}, "ST": {"value" : "STD"}, "CF": {"value" : "XAF"}, "SV": {"value" : "USD"}, "CH": {"value" : "CHF"}, "CI": {"value" : "XOF"}, "SY": {"value" : "SYP"}, "SZ": {"value" : "SZL"}, "CK": {"value" : "NZD"}, "CL": {"value" : "CLP"}, "CM": {"value" : "XAF"}, "CO": {"value" : "COP"}, "TA": {"value" : "SHP"}, "CR": {"value" : "CRC"}, "TC": {"value" : "USD"}, "TD": {"value" : "XAF"}
    , "CU": {"value" : "CUP"}, "TF": {"value" : ""}, "CV": {"value" : "CVE"}, "TG": {"value" : "XOF"}, "TH": {"value" : "THB"}, "CX": {"value" : "AUD"}, "CY": {"value" : "TRY"}, "TJ": {"value" : "TJS"}, "CZ": {"value" : "CZK"}, "TK": {"value" : "NZD"}, "TL": {"value" : "USD"}, "TM": {"value" : "TMM"}, "TN": {"value" : "TND"}, "TO": {"value" : "TOP"}, "TR": {"value" : "TRY"}, "TT": {"value" : "TTD"}, "DE": {"value" : "EUR"}, "TV": {"value" : "AUD"}, "DJ": {"value" : "DJF"}, "TZ": {"value" : "TZS"}, "DK": {"value"
    : "DKK"}, "DM": {"value" : "XCD"}, "DO": {"value" : "DOP"}, "UA": {"value" : "UAH"}, "UG": {"value" : "UGX"}, "DZ": {"value" : "DZD"}, "UM": {"value" : ""}, "EC": {"value" : "USD"}, "US": {"value" : "USD"}, "EE": {"value" : "EEK"}, "EG": {"value" : "EGP"}, "UY": {"value" : "UYU"}, "UZ": {"value" : "UZS"}, "VA": {"value" : "EUR"}, "ER": {"value" : "ERN"}, "VC": {"value" : "XCD"}, "ES": {"value" : "EUR"}, "ET": {"value" : "ETB"}, "VE": {"value" : "VEB"}, "VG": {"value" : "USD"}, "VI": {"value" : "USD"}, "VN":
    {"value" : "VND"}, "VU": {"value" : "VUV"}, "FI": {"value" : "EUR"}, "FJ": {"value" : "FJD"}, "FK": {"value" : "FKP"}, "FM": {"value" : "USD"}, "FO": {"value" : "DKK"}, "FR": {"value" : "EUR"}, "WF": {"value" : "XPF"}, "850": {"value" : "Pyongyang"}, "GA": {"value" : "XAF"}, "GB": {"value" : "GBP"}, "WS": {"value" : "WST"}, "GD": {"value" : "XCD"}, "GE": {"value" : "RUB and GEL"}, "GF": {"value" : "EUR"}, "GG": {"value" : "GGP"}, "GH": {"value" : "GHC"}, "GI": {"value" : "GIP"}, "GL": {"value" : "DKK"},
    "GN": {"value" : "GNF"}, "GP": {"value" : "EUR"}, "GQ": {"value" : "XAF"}, "GR": {"value" : "EUR"}, "GS": {"value" : ""}, "GT": {"value" : "GTQ"}, "GU": {"value" : "USD"}, "GW": {"value" : "XOF"}, "GY": {"value" : "GYD"}, "-241": {"value" : "Nassau"}, "82": {"value" : "Seoul"}, "86": {"value" : "Beijing"}, "HK": {"value" : "HKD"}, "HM": {"value" : ""}, "HN": {"value" : "HNL"}, "HR": {"value" : "HRK"}, "HT": {"value" : "HTG"}, "YE": {"value" : "YER"}, "HU": {"value" : "HUF"}, "ID": {"value" : "IDR"}, "YT":
    {"value" : "EUR"}, "IE": {"value" : "EUR"}, "IL": {"value" : "ILS"}, "IM": {"value" : "IMP"}, "IN": {"value" : "INR"}, "IO": {"value" : ""}, "IQ": {"value" : "IQD"}, "IR": {"value" : "IRR"}, "IS": {"value" : "ISK"}, "IT": {"value" : "EUR"}, "ZM": {"value" : "ZMK"}, "886": {"value" : "Taipei"}, "JE": {"value" : "JEP"}, "ZW": {"value" : "ZWD"}, "JM": {"value" : "JMD"}, "JO": {"value" : "JOD"}, "JP": {"value" : "JPY"}, "KE": {"value" : "KES"}, "KG": {"value" : "KGS"}, "KH": {"value" : "KHR"}, "KI": {"value"
    : "AUD"}, "KM": {"value" : "KMF"}, "KN": {"value" : "XCD"}, "KW": {"value" : "KWD"}, "KY": {"value" : "KYD"}, "KZ": {"value" : "KZT"}, "LA": {"value" : "LAK"}, "LB": {"value" : "LBP"}, "LC": {"value" : "XCD"}, "LI": {"value" : "CHF"}, "LK": {"value" : "LKR"}, "LR": {"value" : "LRD"}, "LS": {"value" : "LSL"}, "LT": {"value" : "LTL"}, "LU": {"value" : "EUR"}, "LV": {"value" : "LVL"}, "LY": {"value" : "LYD"}, "MA": {"value" : "MAD"}, "MC": {"value" : "EUR"}, "MD": {"value" : ""}, "ME": {"value" : "EUR"}, "MG":
    {"value" : "MGA"}, "MH": {"value" : "USD"}, "MK": {"value" : "MKD"}, "ML": {"value" : "XOF"}, "MM": {"value" : "MMK"}, "MN": {"value" : "MNT"}, "MO": {"value" : "MOP"}, "MP": {"value" : "USD"}, "MQ": {"value" : "EUR"}, "MR": {"value" : "MRO"}, "MS": {"value" : "XCD"}, "MT": {"value" : "MTL"}, "MU": {"value" : "MUR"}, "MV": {"value" : "MVR"}, "MW": {"value" : "MWK"}, "MX": {"value" : "MXN"}, "MY": {"value" : "MYR"}, "MZ": {"value" : "MZM"}, "NA": {"value" : "NAD"}, "NC": {"value" : "XPF"}, "NE": {"value"
    : "XOF"}, "NF": {"value" : "AUD"}, "NG": {"value" : "NGN"}, "NI": {"value" : "NIO"}, "NL": {"value" : "EUR"}, "NO": {"value" : "NOK"}, "NP": {"value" : "NPR"}, "NR": {"value" : "AUD"}, "NU": {"value" : "NZD"}, "NZ": {"value" : "NZD"}, "OM": {"value" : "OMR"}, "220": {"value" : "Banjul"}, "PA": {"value" : "PAB"}, "PE": {"value" : "PEN"}, "PF": {"value" : ""}, "PG": {"value" : "PGK"}, "PH": {"value" : "PHP"}, "PK": {"value" : "PKR"}, "PL": {"value" : "PLN"}, "PM": {"value" : "EUR"}, "PN": {"value" : "NZD"}
    };
};
function jm_BigInteger() {
    let a = this; jl_Number.call(a);
    a.$digits = null;
    a.$numberLength = 0;
    a.$sign = 0;
    a.$firstNonzeroDigit = 0;
}
let jm_BigInteger_ZERO = null,
jm_BigInteger_ONE = null,
jm_BigInteger_TWO = null,
jm_BigInteger_TEN = null,
jm_BigInteger_MINUS_ONE = null,
jm_BigInteger_SMALL_VALUES = null,
jm_BigInteger_TWO_POWS = null,
jm_BigInteger__init_4 = ($this, $sign, $value) => {
    let var$3;
    $this.$firstNonzeroDigit = (-2);
    $this.$sign = $sign;
    $this.$numberLength = 1;
    var$3 = $rt_createIntArray(1);
    var$3.data[0] = $value;
    $this.$digits = var$3;
},
jm_BigInteger__init_0 = (var_0, var_1) => {
    let var_2 = new jm_BigInteger();
    jm_BigInteger__init_4(var_2, var_0, var_1);
    return var_2;
},
jm_BigInteger__init_2 = ($this, $sign, $numberLength, $digits) => {
    $this.$firstNonzeroDigit = (-2);
    $this.$sign = $sign;
    $this.$numberLength = $numberLength;
    $this.$digits = $digits;
},
jm_BigInteger__init_ = (var_0, var_1, var_2) => {
    let var_3 = new jm_BigInteger();
    jm_BigInteger__init_2(var_3, var_0, var_1, var_2);
    return var_3;
},
jm_BigInteger__init_3 = ($this, $sign, $val) => {
    let var$3;
    $this.$firstNonzeroDigit = (-2);
    $this.$sign = $sign;
    if (Long_eq(Long_and($val, Long_create(0, 4294967295)), Long_ZERO)) {
        $this.$numberLength = 1;
        var$3 = $rt_createIntArray(1);
        var$3.data[0] = Long_lo($val);
        $this.$digits = var$3;
    } else {
        $this.$numberLength = 2;
        $this.$digits = $rt_createIntArrayFromData([Long_lo($val), Long_hi($val)]);
    }
},
jm_BigInteger__init_1 = (var_0, var_1) => {
    let var_2 = new jm_BigInteger();
    jm_BigInteger__init_3(var_2, var_0, var_1);
    return var_2;
},
jm_BigInteger_valueOf = $val => {
    if (Long_lt($val, Long_ZERO)) {
        if (Long_eq($val, Long_fromInt(-1)))
            return jm_BigInteger_MINUS_ONE;
        return jm_BigInteger__init_1((-1), Long_neg($val));
    }
    if (Long_gt($val, Long_fromInt(10)))
        return jm_BigInteger__init_1(1, $val);
    return jm_BigInteger_SMALL_VALUES.data[Long_lo($val)];
},
jm_BigInteger_abs = $this => {
    if ($this.$sign < 0)
        $this = jm_BigInteger__init_(1, $this.$numberLength, $this.$digits);
    return $this;
},
jm_BigInteger_negate = $this => {
    let var$1;
    var$1 = $this.$sign;
    return !var$1 ? $this : jm_BigInteger__init_( -var$1 | 0, $this.$numberLength, $this.$digits);
},
jm_BigInteger_add = ($this, $val) => {
    let var$2, var$3, var$4, var$5, var$6, var$7, var$8, var$9, var$10;
    a: {
        var$2 = $this.$sign;
        var$3 = $val.$sign;
        if (var$2) {
            if (!var$3)
                $val = $this;
            else {
                var$4 = $this.$numberLength;
                var$5 = $val.$numberLength;
                if ((var$4 + var$5 | 0) == 2) {
                    var$6 = Long_and(Long_fromInt($this.$digits.data[0]), Long_create(4294967295, 0));
                    var$7 = Long_and(Long_fromInt($val.$digits.data[0]), Long_create(4294967295, 0));
                    if (var$2 != var$3)
                        $val = jm_BigInteger_valueOf(var$2 >= 0 ? Long_sub(var$6, var$7) : Long_sub(var$7, var$6));
                    else {
                        var$6 = Long_add(var$6, var$7);
                        var$8 = Long_lo(var$6);
                        var$4 = Long_hi(var$6);
                        $val = !var$4 ? jm_BigInteger__init_0(var$2, var$8) : jm_BigInteger__init_(var$2, 2, $rt_createIntArrayFromData([var$8, var$4]));
                    }
                } else {
                    if (var$2 == var$3)
                        var$9 = var$4 < var$5 ? jm_Elementary_add($val.$digits, var$5, $this.$digits, var$4) : jm_Elementary_add($this.$digits, var$4, $val.$digits, var$5);
                    else {
                        var$8 = $rt_compare(var$4, var$5);
                        var$8 = !var$8 ? jm_Elementary_compareArrays($this.$digits, $val.$digits, var$4) : var$8 <= 0 ? (-1) : 1;
                        if (!var$8) {
                            $val = jm_BigInteger_ZERO;
                            break a;
                        }
                        if (var$8 != 1) {
                            var$9 = jm_Elementary_subtract($val.$digits, var$5, $this.$digits, var$4);
                            var$2 = var$3;
                        } else
                            var$9 = jm_Elementary_subtract($this.$digits, var$4, $val.$digits, var$5);
                    }
                    var$10 = var$9.data;
                    $val = jm_BigInteger__init_(var$2, var$10.length, var$9);
                    jm_BigInteger_cutOffLeadingZeroes($val);
                }
            }
        }
    }
    return $val;
},
jm_BigInteger_subtract = ($this, $val) => {
    let var$2, var$3, var$4, var$5, var$6, var$7, var$8, var$9, var$10;
    a: {
        var$2 = $this.$sign;
        var$3 = $val.$sign;
        if (var$3) {
            if (!var$2)
                $this = jm_BigInteger_negate($val);
            else {
                var$4 = $this.$numberLength;
                var$5 = $val.$numberLength;
                if ((var$4 + var$5 | 0) == 2) {
                    var$6 = Long_and(Long_fromInt($this.$digits.data[0]), Long_create(4294967295, 0));
                    var$7 = Long_and(Long_fromInt($val.$digits.data[0]), Long_create(4294967295, 0));
                    if (var$2 < 0)
                        var$6 = Long_neg(var$6);
                    if (var$3 < 0)
                        var$7 = Long_neg(var$7);
                    $this = jm_BigInteger_valueOf(Long_sub(var$6, var$7));
                } else {
                    var$8 = $rt_compare(var$4, var$5);
                    var$8 = !var$8 ? jm_Elementary_compareArrays($this.$digits, $val.$digits, var$4) : var$8 <= 0 ? (-1) : 1;
                    if (var$8 == (-1)) {
                        var$8 =  -var$3 | 0;
                        var$9 = var$2 != var$3 ? jm_Elementary_add($val.$digits, var$5, $this.$digits, var$4) : jm_Elementary_subtract($val.$digits, var$5, $this.$digits, var$4);
                    } else if (var$2 != var$3) {
                        var$9 = jm_Elementary_add($this.$digits, var$4, $val.$digits, var$5);
                        var$8 = var$2;
                    } else {
                        if (!var$8) {
                            $this = jm_BigInteger_ZERO;
                            break a;
                        }
                        var$9 = jm_Elementary_subtract($this.$digits, var$4, $val.$digits, var$5);
                        var$8 = var$2;
                    }
                    var$10 = var$9.data;
                    $this = jm_BigInteger__init_(var$8, var$10.length, var$9);
                    jm_BigInteger_cutOffLeadingZeroes($this);
                }
            }
        }
    }
    return $this;
},
jm_BigInteger_shiftRight = ($this, $n) => {
    if ($n && $this.$sign)
        return $n > 0 ? jm_BitLevel_shiftRight0($this, $n) : jm_BitLevel_shiftLeft0($this,  -$n | 0);
    return $this;
},
jm_BigInteger_shiftLeft = ($this, $n) => {
    if ($n && $this.$sign)
        return $n > 0 ? jm_BitLevel_shiftLeft0($this, $n) : jm_BitLevel_shiftRight0($this,  -$n | 0);
    return $this;
},
jm_BigInteger_bitLength = $this => {
    let var$1, var$2, var$3, var$4;
    var$1 = $this.$sign;
    if (!var$1)
        var$2 = 0;
    else {
        var$3 = $this.$numberLength;
        var$4 = var$3 << 5;
        var$2 = $this.$digits.data[var$3 - 1 | 0];
        if (var$1 < 0 && jm_BigInteger_getFirstNonzeroDigit($this) == ($this.$numberLength - 1 | 0))
            var$2 = var$2 + (-1) | 0;
        var$2 = var$4 - jl_Integer_numberOfLeadingZeros(var$2) | 0;
    }
    return var$2;
},
jm_BigInteger_testBit = ($this, $n) => {
    let var$2, $intCount, $digit, $firstNonZeroDigit;
    if (!$n)
        return !($this.$digits.data[0] & 1) ? 0 : 1;
    if ($n < 0) {
        var$2 = new jl_ArithmeticException;
        jl_RuntimeException__init_(var$2, $rt_s(77));
        $rt_throw(var$2);
    }
    $intCount = $n >> 5;
    if ($intCount >= $this.$numberLength)
        return $this.$sign >= 0 ? 0 : 1;
    $digit = $this.$digits.data[$intCount];
    $n = 1 << ($n & 31);
    if ($this.$sign < 0) {
        $firstNonZeroDigit = jm_BigInteger_getFirstNonzeroDigit($this);
        if ($intCount < $firstNonZeroDigit)
            return 0;
        $digit = $firstNonZeroDigit == $intCount ?  -$digit | 0 : $digit ^ (-1);
    }
    return !($digit & $n) ? 0 : 1;
},
jm_BigInteger_intValue = $this => {
    return $rt_imul($this.$sign, $this.$digits.data[0]);
},
jm_BigInteger_longValue = $this => {
    let $value, var$2;
    if ($this.$numberLength <= 1)
        $value = Long_and(Long_fromInt($this.$digits.data[0]), Long_create(4294967295, 0));
    else {
        var$2 = $this.$digits.data;
        $value = Long_or(Long_shl(Long_fromInt(var$2[1]), 32), Long_and(Long_fromInt(var$2[0]), Long_create(4294967295, 0)));
    }
    return Long_mul(Long_fromInt($this.$sign), $value);
},
jm_BigInteger_compareTo = ($this, $val) => {
    let var$2, var$3, var$4, var$5;
    var$2 = $this.$sign;
    var$3 = $val.$sign;
    var$4 = $rt_compare(var$2, var$3);
    if (var$4 > 0)
        return 1;
    if (var$4 < 0)
        return (-1);
    var$4 = $this.$numberLength;
    var$5 = $rt_compare(var$4, $val.$numberLength);
    if (var$5 > 0)
        return var$2;
    if (var$5 < 0)
        return  -var$3 | 0;
    return $rt_imul(var$2, jm_Elementary_compareArrays($this.$digits, $val.$digits, var$4));
},
jm_BigInteger_equals = ($this, $x) => {
    let $x1, var$3, var$4, var$5;
    if ($this === $x)
        return 1;
    if (!($x instanceof jm_BigInteger))
        return 0;
    a: {
        $x1 = $x;
        if ($this.$sign == $x1.$sign) {
            var$3 = $this.$numberLength;
            if (var$3 == $x1.$numberLength) {
                var$4 = $x1.$digits;
                var$3 = var$3 - 1 | 0;
                while (var$3 >= 0) {
                    var$5 = var$4.data;
                    if ($this.$digits.data[var$3] != var$5[var$3])
                        break;
                    var$3 = var$3 + (-1) | 0;
                }
                if (var$3 >= 0 ? 0 : 1) {
                    var$3 = 1;
                    break a;
                }
            }
        }
        var$3 = 0;
    }
    return var$3;
},
jm_BigInteger_multiply = ($this, $val) => {
    if (!$val.$sign)
        return jm_BigInteger_ZERO;
    if (!$this.$sign)
        return jm_BigInteger_ZERO;
    jm_Multiplication_$callClinit();
    return jm_Multiplication_karatsuba($this, $val);
},
jm_BigInteger_pow = ($this, $exp) => {
    let var$2, $x, var$4, var$5, var$6, var$7, var$8, var$9, var$10;
    if ($exp < 0) {
        var$2 = new jl_ArithmeticException;
        jl_RuntimeException__init_(var$2, $rt_s(78));
        $rt_throw(var$2);
    }
    if (!$exp)
        return jm_BigInteger_ONE;
    if ($exp != 1 && !jm_BigInteger_equals($this, jm_BigInteger_ONE) && !jm_BigInteger_equals($this, jm_BigInteger_ZERO)) {
        if (!jm_BigInteger_testBit($this, 0)) {
            $x = 1;
            while (!jm_BigInteger_testBit($this, $x)) {
                $x = $x + 1 | 0;
            }
            var$4 = $rt_imul($x, $exp);
            var$5 = jm_BigInteger_TWO_POWS.data;
            if (var$4 < var$5.length)
                var$2 = var$5[var$4];
            else {
                var$6 = var$4 >> 5;
                var$7 = var$4 & 31;
                var$8 = var$6 + 1 | 0;
                var$5 = $rt_createIntArray(var$8);
                var$5.data[var$6] = 1 << var$7;
                var$2 = jm_BigInteger__init_(1, var$8, var$5);
            }
            return jm_BigInteger_multiply(var$2, jm_BigInteger_pow(jm_BigInteger_shiftRight($this, $x), $exp));
        }
        jm_Multiplication_$callClinit();
        var$2 = jm_BigInteger_ONE;
        while ($exp > 1) {
            if ($exp & 1)
                var$2 = jm_BigInteger_multiply(var$2, $this);
            $x = $this.$numberLength;
            if ($x == 1)
                $this = jm_BigInteger_multiply($this, $this);
            else {
                var$9 = new jm_BigInteger;
                var$5 = jm_Multiplication_square($this.$digits, $x, $rt_createIntArray($x << 1));
                var$10 = var$5.data;
                var$9.$firstNonzeroDigit = (-2);
                $x = var$10.length;
                if ($x) {
                    var$9.$sign = 1;
                    var$9.$numberLength = $x;
                    var$9.$digits = var$5;
                    jm_BigInteger_cutOffLeadingZeroes(var$9);
                } else {
                    var$9.$sign = 0;
                    var$9.$numberLength = 1;
                    var$5 = $rt_createIntArray(1);
                    var$5.data[0] = 0;
                    var$9.$digits = var$5;
                }
                $this = var$9;
            }
            $exp = $exp >> 1;
        }
        return jm_BigInteger_multiply(var$2, $this);
    }
    return $this;
},
jm_BigInteger_divideAndRemainder = ($this, $divisor) => {
    let $divisorSign, $divisorLen, $divisorDigits, $thisLen, $thisSign, $thisDigits, $quotientDigits, $result0, var$10, var$11, var$12, $cmp, $quotientLength, $quotientSign, $remainderDigits, $result1;
    $divisorSign = $divisor.$sign;
    if (!$divisorSign) {
        $divisor = new jl_ArithmeticException;
        jl_RuntimeException__init_($divisor, $rt_s(79));
        $rt_throw($divisor);
    }
    $divisorLen = $divisor.$numberLength;
    $divisorDigits = $divisor.$digits;
    if ($divisorLen == 1) {
        $thisLen = $divisorDigits.data[0];
        $divisorDigits = $this.$digits;
        $divisorLen = $this.$numberLength;
        $thisSign = $this.$sign;
        if ($divisorLen != 1) {
            $divisorSign = $thisSign != $divisorSign ? (-1) : 1;
            $thisDigits = $rt_createIntArray($divisorLen);
            $quotientDigits = $rt_createIntArray(1);
            $quotientDigits.data[0] = jm_Division_divideArrayByInt($thisDigits, $divisorDigits, $divisorLen, $thisLen);
            $divisor = jm_BigInteger__init_($divisorSign, $divisorLen, $thisDigits);
            $result0 = jm_BigInteger__init_($thisSign, 1, $quotientDigits);
            jm_BigInteger_cutOffLeadingZeroes($divisor);
            jm_BigInteger_cutOffLeadingZeroes($result0);
            $thisDigits = $rt_wrapArray(jm_BigInteger, [$divisor, $result0]);
        } else {
            var$10 = Long_and(Long_fromInt($divisorDigits.data[0]), Long_create(4294967295, 0));
            var$11 = Long_and(Long_fromInt($thisLen), Long_create(4294967295, 0));
            var$12 = Long_div(var$10, var$11);
            var$10 = Long_rem(var$10, var$11);
            if ($thisSign != $divisorSign)
                var$12 = Long_neg(var$12);
            if ($thisSign < 0)
                var$10 = Long_neg(var$10);
            $thisDigits = $rt_wrapArray(jm_BigInteger, [jm_BigInteger_valueOf(var$12), jm_BigInteger_valueOf(var$10)]);
        }
        return $thisDigits;
    }
    $thisDigits = $this.$digits;
    $thisLen = $this.$numberLength;
    $cmp = $rt_compare($thisLen, $divisorLen);
    if ((!$cmp ? jm_Elementary_compareArrays($thisDigits, $divisorDigits, $thisLen) : $cmp <= 0 ? (-1) : 1) < 0)
        return $rt_wrapArray(jm_BigInteger, [jm_BigInteger_ZERO, $this]);
    $thisSign = $this.$sign;
    $quotientLength = ($thisLen - $divisorLen | 0) + 1 | 0;
    $quotientSign = $thisSign != $divisorSign ? (-1) : 1;
    $quotientDigits = $rt_createIntArray($quotientLength);
    $remainderDigits = jm_Division_divide($quotientDigits, $quotientLength, $thisDigits, $thisLen, $divisorDigits, $divisorLen);
    $result0 = jm_BigInteger__init_($quotientSign, $quotientLength, $quotientDigits);
    $result1 = jm_BigInteger__init_($thisSign, $divisorLen, $remainderDigits);
    jm_BigInteger_cutOffLeadingZeroes($result0);
    jm_BigInteger_cutOffLeadingZeroes($result1);
    return $rt_wrapArray(jm_BigInteger, [$result0, $result1]);
},
jm_BigInteger_divide = ($this, $divisor) => {
    let $divisorSign, $divisorLen, var$4, $thisSign, $thisLen, $val, $cmp, $resLength, $resDigits, $resSign, $result;
    $divisorSign = $divisor.$sign;
    if (!$divisorSign) {
        $divisor = new jl_ArithmeticException;
        jl_RuntimeException__init_($divisor, $rt_s(79));
        $rt_throw($divisor);
    }
    $divisorLen = $divisor.$numberLength;
    var$4 = $rt_compare($divisorLen, 1);
    if (!var$4 && $divisor.$digits.data[0] == 1 ? 1 : 0) {
        if ($divisorSign <= 0)
            $this = jm_BigInteger_negate($this);
        return $this;
    }
    $thisSign = $this.$sign;
    $thisLen = $this.$numberLength;
    if (($thisLen + $divisorLen | 0) == 2) {
        $val = Long_div(Long_and(Long_fromInt($this.$digits.data[0]), Long_create(4294967295, 0)), Long_and(Long_fromInt($divisor.$digits.data[0]), Long_create(4294967295, 0)));
        if ($thisSign != $divisorSign)
            $val = Long_neg($val);
        return jm_BigInteger_valueOf($val);
    }
    $cmp = $rt_compare($thisLen, $divisorLen);
    $cmp = !$cmp ? jm_Elementary_compareArrays($this.$digits, $divisor.$digits, $thisLen) : $cmp <= 0 ? (-1) : 1;
    if (!$cmp)
        return $thisSign != $divisorSign ? jm_BigInteger_MINUS_ONE : jm_BigInteger_ONE;
    if ($cmp == (-1))
        return jm_BigInteger_ZERO;
    $resLength = ($thisLen - $divisorLen | 0) + 1 | 0;
    $resDigits = $rt_createIntArray($resLength);
    $resSign = $thisSign != $divisorSign ? (-1) : 1;
    if (var$4)
        jm_Division_divide($resDigits, $resLength, $this.$digits, $thisLen, $divisor.$digits, $divisorLen);
    else
        jm_Division_divideArrayByInt($resDigits, $this.$digits, $thisLen, $divisor.$digits.data[0]);
    $result = jm_BigInteger__init_($resSign, $resLength, $resDigits);
    jm_BigInteger_cutOffLeadingZeroes($result);
    return $result;
},
jm_BigInteger_remainder = ($this, $divisor) => {
    let $thisLen, $divisorLen, $qLen, $resDigits, var$6, var$7, var$8, var$9, $result;
    if (!$divisor.$sign) {
        $divisor = new jl_ArithmeticException;
        jl_RuntimeException__init_($divisor, $rt_s(79));
        $rt_throw($divisor);
    }
    $thisLen = $this.$numberLength;
    $divisorLen = $divisor.$numberLength;
    $qLen = $rt_compare($thisLen, $divisorLen);
    if ((!$qLen ? jm_Elementary_compareArrays($this.$digits, $divisor.$digits, $thisLen) : $qLen <= 0 ? (-1) : 1) == (-1))
        return $this;
    $resDigits = $rt_createIntArray($divisorLen);
    if ($divisorLen != 1)
        $resDigits = jm_Division_divide(null, ($thisLen - $divisorLen | 0) + 1 | 0, $this.$digits, $thisLen, $divisor.$digits, $divisorLen);
    else {
        var$6 = $this.$digits;
        var$7 = $divisor.$digits.data[0];
        var$8 = Long_ZERO;
        $thisLen = $thisLen - 1 | 0;
        while ($thisLen >= 0) {
            var$9 = var$6.data;
            var$8 = Long_fromInt(Long_hi((jm_Division_divideLongByInt(Long_add(Long_shl(var$8, 32), Long_and(Long_fromInt(var$9[$thisLen]), Long_create(4294967295, 0))), var$7))));
            $thisLen = $thisLen + (-1) | 0;
        }
        $resDigits.data[0] = Long_lo(var$8);
    }
    $result = jm_BigInteger__init_($this.$sign, $divisorLen, $resDigits);
    jm_BigInteger_cutOffLeadingZeroes($result);
    return $result;
},
jm_BigInteger_cutOffLeadingZeroes = $this => {
    let var$1, var$2, var$3;
    while (true) {
        var$1 = $this.$numberLength;
        if (var$1 <= 0)
            break;
        var$2 = $this.$digits.data;
        var$1 = var$1 - 1 | 0;
        $this.$numberLength = var$1;
        if (var$2[var$1])
            break;
    }
    var$2 = $this.$digits.data;
    var$3 = $this.$numberLength;
    $this.$numberLength = var$3 + 1 | 0;
    if (!var$2[var$3])
        $this.$sign = 0;
},
jm_BigInteger_getFirstNonzeroDigit = $this => {
    let $i;
    if ($this.$firstNonzeroDigit == (-2)) {
        if (!$this.$sign)
            $i = (-1);
        else {
            $i = 0;
            while (!$this.$digits.data[$i]) {
                $i = $i + 1 | 0;
            }
        }
        $this.$firstNonzeroDigit = $i;
    }
    return $this.$firstNonzeroDigit;
},
jm_BigInteger__clinit_ = () => {
    let var$1, var$2, $i;
    jm_BigInteger_ZERO = jm_BigInteger__init_0(0, 0);
    jm_BigInteger_ONE = jm_BigInteger__init_0(1, 1);
    jm_BigInteger_TWO = jm_BigInteger__init_0(1, 2);
    jm_BigInteger_TEN = jm_BigInteger__init_0(1, 10);
    jm_BigInteger_MINUS_ONE = jm_BigInteger__init_0((-1), 1);
    var$1 = $rt_createArray(jm_BigInteger, 11);
    var$2 = var$1.data;
    var$2[0] = jm_BigInteger_ZERO;
    var$2[1] = jm_BigInteger_ONE;
    var$2[2] = jm_BigInteger_TWO;
    var$2[3] = jm_BigInteger__init_0(1, 3);
    var$2[4] = jm_BigInteger__init_0(1, 4);
    var$2[5] = jm_BigInteger__init_0(1, 5);
    var$2[6] = jm_BigInteger__init_0(1, 6);
    var$2[7] = jm_BigInteger__init_0(1, 7);
    var$2[8] = jm_BigInteger__init_0(1, 8);
    var$2[9] = jm_BigInteger__init_0(1, 9);
    var$2[10] = jm_BigInteger_TEN;
    jm_BigInteger_SMALL_VALUES = var$1;
    jm_BigInteger_TWO_POWS = $rt_createArray(jm_BigInteger, 32);
    $i = 0;
    while (true) {
        var$1 = jm_BigInteger_TWO_POWS.data;
        if ($i >= var$1.length)
            break;
        var$1[$i] = jm_BigInteger_valueOf(Long_shl(Long_fromInt(1), $i));
        $i = $i + 1 | 0;
    }
},
ju_Map = $rt_classWithoutFields(0),
ju_AbstractMap = $rt_classWithoutFields();
function ju_HashMap() {
    let a = this; ju_AbstractMap.call(a);
    a.$elementCount = 0;
    a.$elementData = null;
    a.$modCount0 = 0;
    a.$loadFactor = 0.0;
    a.$threshold = 0;
}
let ju_HashMap_calculateCapacity = $x => {
    let var$2;
    if ($x >= 1073741824)
        return 1073741824;
    if (!$x)
        return 16;
    var$2 = $x - 1 | 0;
    $x = var$2 | var$2 >> 1;
    $x = $x | $x >> 2;
    $x = $x | $x >> 4;
    $x = $x | $x >> 8;
    return ($x | $x >> 16) + 1 | 0;
},
ju_HashMap_computeThreshold = $this => {
    $this.$threshold = $this.$elementData.data.length * $this.$loadFactor | 0;
},
ju_HashMap_findNonNullKeyEntry = ($this, $key, $index, $keyHash) => {
    let $m, var$5;
    $m = $this.$elementData.data[$index];
    while ($m !== null) {
        if ($m.$origKeyHash == $keyHash) {
            var$5 = $m.$key;
            if ($key !== var$5 && !jl_String_equals($key, var$5) ? 0 : 1)
                break;
        }
        $m = $m.$next;
    }
    return $m;
},
ju_HashMap_findNullKeyEntry = $this => {
    let $m;
    $m = $this.$elementData.data[0];
    while ($m !== null && $m.$key !== null) {
        $m = $m.$next;
    }
    return $m;
},
ju_HashMap_createHashedEntry = ($this, $key, $index, $hash) => {
    let $entry, var$5, var$6;
    $entry = new ju_HashMap$HashEntry;
    var$5 = null;
    $entry.$key = $key;
    $entry.$value0 = var$5;
    $entry.$origKeyHash = $hash;
    var$6 = $this.$elementData.data;
    $entry.$next = var$6[$index];
    var$6[$index] = $entry;
    return $entry;
},
ju_HashMap_rehash = $this => {
    let var$1, var$2, var$3, var$4, var$5, var$6, var$7, var$8;
    var$1 = $this.$elementData.data.length;
    var$1 = ju_HashMap_calculateCapacity(!var$1 ? 1 : var$1 << 1);
    var$2 = $rt_createArray(ju_HashMap$HashEntry, var$1);
    var$3 = var$2.data;
    var$4 = 0;
    var$5 = var$1 - 1 | 0;
    while (true) {
        var$6 = $this.$elementData.data;
        if (var$4 >= var$6.length)
            break;
        var$7 = var$6[var$4];
        var$6[var$4] = null;
        while (var$7 !== null) {
            var$1 = var$7.$origKeyHash & var$5;
            var$8 = var$7.$next;
            var$7.$next = var$3[var$1];
            var$3[var$1] = var$7;
            var$7 = var$8;
        }
        var$4 = var$4 + 1 | 0;
    }
    $this.$elementData = var$2;
    ju_HashMap_computeThreshold($this);
},
ju_Map$Entry = $rt_classWithoutFields(0);
function ju_MapEntry() {
    let a = this; jl_Object.call(a);
    a.$key = null;
    a.$value0 = null;
}
let jl_CloneNotSupportedException = $rt_classWithoutFields(jl_Exception),
jl_Error = $rt_classWithoutFields(jl_Throwable),
jl_AssertionError = $rt_classWithoutFields(jl_Error);
function jt_DecimalFormatParser() {
    let a = this; jl_Object.call(a);
    a.$positivePrefix0 = null;
    a.$positiveSuffix0 = null;
    a.$negativePrefix0 = null;
    a.$negativeSuffix0 = null;
    a.$groupSize = 0;
    a.$minimumIntLength = 0;
    a.$intLength = 0;
    a.$minimumFracLength = 0;
    a.$fracLength = 0;
    a.$exponentLength = 0;
    a.$decimalSeparatorRequired = 0;
    a.$string = null;
    a.$index = 0;
    a.$multiplier0 = 0;
}
let jt_DecimalFormatParser_parse = ($this, $string) => {
    let var$2, var$3, var$4, var$5;
    $this.$groupSize = 0;
    $this.$minimumFracLength = 0;
    $this.$fracLength = 0;
    $this.$exponentLength = 0;
    $this.$decimalSeparatorRequired = 0;
    $this.$multiplier0 = 1;
    $this.$string = $string;
    $this.$index = 0;
    $this.$positivePrefix0 = jt_DecimalFormatParser_parseText($this, 0, 0);
    if ($this.$index == $string.$nativeString.length) {
        var$2 = new jl_IllegalArgumentException;
        var$3 = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_(var$3);
        jl_StringBuilder_append(jl_StringBuilder_append(var$3, $rt_s(80)), $string);
        jl_RuntimeException__init_(var$2, jl_AbstractStringBuilder_toString(var$3));
        $rt_throw(var$2);
    }
    jt_DecimalFormatParser_parseNumber($this, 1);
    $this.$negativePrefix0 = null;
    $this.$negativeSuffix0 = null;
    if ($this.$index < $string.$nativeString.length && jl_String_charAt($string, $this.$index) != 59)
        $this.$positiveSuffix0 = jt_DecimalFormatParser_parseText($this, 1, 0);
    if ($this.$index < $string.$nativeString.length) {
        var$4 = $this.$index;
        $this.$index = var$4 + 1 | 0;
        if (jl_String_charAt($string, var$4) != 59) {
            var$2 = new jl_IllegalArgumentException;
            var$5 = $this.$index;
            var$3 = new jl_StringBuilder;
            jl_AbstractStringBuilder__init_(var$3);
            jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(var$3, $rt_s(81)), var$5), $rt_s(82)), $string);
            jl_RuntimeException__init_(var$2, jl_AbstractStringBuilder_toString(var$3));
            $rt_throw(var$2);
        }
        $this.$negativePrefix0 = jt_DecimalFormatParser_parseText($this, 0, 1);
        jt_DecimalFormatParser_parseNumber($this, 0);
        $this.$negativeSuffix0 = jt_DecimalFormatParser_parseText($this, 1, 1);
    }
},
jt_DecimalFormatParser_apply = ($this, $format) => {
    let var$2, var$3, var$4, var$5, var$6;
    var$2 = $this.$positivePrefix0;
    $format.$positivePrefix = var$2;
    $format.$positiveSuffix = $this.$positiveSuffix0;
    var$3 = $this.$negativePrefix0;
    if (var$3 !== null)
        $format.$negativePrefix = var$3;
    else {
        var$4 = var$2.data.length;
        var$3 = $rt_createArray(jt_DecimalFormat$FormatField, var$4 + 1 | 0);
        $format.$negativePrefix = var$3;
        jl_System_fastArraycopy(var$2, 0, var$3, 1, var$4);
        $format.$negativePrefix.data[0] = new jt_DecimalFormat$MinusField;
    }
    var$2 = $this.$negativeSuffix0;
    if (var$2 === null)
        var$2 = $this.$positiveSuffix0;
    $format.$negativeSuffix = var$2;
    var$5 = $this.$groupSize;
    $format.$groupingSize = var$5;
    var$5 = var$5 <= 0 ? 0 : 1;
    var$6 = $format;
    var$6.$groupingUsed = var$5;
    jt_NumberFormat_setMinimumIntegerDigits(var$6, !$this.$decimalSeparatorRequired ? $this.$minimumIntLength : jl_Math_max(1, $this.$minimumIntLength));
    jt_NumberFormat_setMaximumIntegerDigits(var$6, $this.$intLength);
    jt_NumberFormat_setMinimumFractionDigits(var$6, $this.$minimumFracLength);
    jt_NumberFormat_setMaximumFractionDigits(var$6, $this.$fracLength);
    $format.$decimalSeparatorAlwaysShown = $this.$decimalSeparatorRequired;
    $format.$exponentDigits = $this.$exponentLength;
    $format.$multiplier = $this.$multiplier0;
},
jt_DecimalFormatParser_parseText = ($this, $suffix, $end) => {
    let $fields, $sb, var$5, $c, var$7, $next, var$9, var$10;
    $fields = new ju_ArrayList;
    $fields.$array = $rt_createArray(jl_Object, 10);
    $sb = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_($sb);
    var$5 = $fields;
    a: {
        b: {
            c: while (true) {
                if ($this.$index >= $this.$string.$nativeString.length)
                    break a;
                d: {
                    $c = jl_String_charAt($this.$string, $this.$index);
                    switch ($c) {
                        case 35:
                        case 48:
                            if (!$suffix)
                                break a;
                            $fields = new jl_IllegalArgumentException;
                            $suffix = $this.$index;
                            $sb = $this.$string;
                            var$7 = new jl_StringBuilder;
                            jl_AbstractStringBuilder__init_(var$7);
                            jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(var$7, $rt_s(83)), $suffix), $rt_s(82)), $sb);
                            jl_RuntimeException__init_($fields, jl_AbstractStringBuilder_toString(var$7));
                            $rt_throw($fields);
                        case 37:
                            if ($sb.$length0 > 0) {
                                ju_ArrayList_add(var$5, jt_DecimalFormat$TextField__init_(jl_StringBuilder_toString($sb)));
                                jl_StringBuilder_setLength($sb, 0);
                            }
                            ju_ArrayList_add(var$5, jt_DecimalFormat$PercentField__init_());
                            $this.$index = $this.$index + 1 | 0;
                            $this.$multiplier0 = 100;
                            break d;
                        case 39:
                            $c = $this.$index + 1 | 0;
                            $this.$index = $c;
                            $next = jl_String_indexOf($this.$string, 39, $c);
                            if ($next < 0)
                                break c;
                            $c = $this.$index;
                            if ($next == $c)
                                jl_StringBuilder_append2($sb, 39);
                            else
                                jl_StringBuilder_append3($sb, jl_String_substring($this.$string, $c, $next));
                            $this.$index = $next + 1 | 0;
                            break d;
                        case 45:
                            if ($sb.$length0 > 0) {
                                ju_ArrayList_add(var$5, jt_DecimalFormat$TextField__init_(jl_StringBuilder_toString($sb)));
                                jl_StringBuilder_setLength($sb, 0);
                            }
                            ju_ArrayList_add(var$5, jt_DecimalFormat$MinusField__init_0());
                            $this.$index = $this.$index + 1 | 0;
                            break d;
                        case 46:
                        case 69:
                            $fields = new jl_IllegalArgumentException;
                            $suffix = $this.$index;
                            $sb = $this.$string;
                            var$7 = new jl_StringBuilder;
                            jl_AbstractStringBuilder__init_(var$7);
                            jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(var$7, $rt_s(83)), $suffix), $rt_s(82)), $sb);
                            jl_RuntimeException__init_($fields, jl_AbstractStringBuilder_toString(var$7));
                            $rt_throw($fields);
                        case 59:
                            break b;
                        case 164:
                            if ($sb.$length0 > 0) {
                                ju_ArrayList_add(var$5, jt_DecimalFormat$TextField__init_(jl_AbstractStringBuilder_toString($sb)));
                                $sb.$length0 = 0;
                            }
                            ju_ArrayList_add(var$5, new jt_DecimalFormat$CurrencyField);
                            $this.$index = $this.$index + 1 | 0;
                            break d;
                        case 8240:
                            if ($sb.$length0 > 0) {
                                ju_ArrayList_add(var$5, jt_DecimalFormat$TextField__init_(jl_AbstractStringBuilder_toString($sb)));
                                $sb.$length0 = 0;
                            }
                            ju_ArrayList_add(var$5, new jt_DecimalFormat$PerMillField);
                            $this.$index = $this.$index + 1 | 0;
                            $this.$multiplier0 = 1000;
                            break d;
                        default:
                    }
                    jl_AbstractStringBuilder_append($sb, $c);
                    $this.$index = $this.$index + 1 | 0;
                }
            }
            $fields = new jl_IllegalArgumentException;
            $suffix = $this.$index;
            $sb = $this.$string;
            var$7 = jl_StringBuilder__init_0();
            jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(var$7, $rt_s(84)), $suffix), $rt_s(85)), $sb);
            jl_IllegalArgumentException__init_($fields, jl_StringBuilder_toString(var$7));
            $rt_throw($fields);
        }
        if ($end) {
            $fields = new jl_IllegalArgumentException;
            $suffix = $this.$index;
            $sb = $this.$string;
            var$7 = new jl_StringBuilder;
            jl_AbstractStringBuilder__init_(var$7);
            jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(var$7, $rt_s(83)), $suffix), $rt_s(82)), $sb);
            jl_RuntimeException__init_($fields, jl_AbstractStringBuilder_toString(var$7));
            $rt_throw($fields);
        }
    }
    if ($sb.$length0 > 0)
        ju_ArrayList_add(var$5, jt_DecimalFormat$TextField__init_(jl_AbstractStringBuilder_toString($sb)));
    var$9 = $rt_createArray(jt_DecimalFormat$FormatField, var$5.$size);
    var$10 = var$9.data;
    $fields = $fields;
    $c = $fields.$size;
    $suffix = var$10.length;
    if ($suffix < $c)
        var$9 = jlr_Array_newInstance(jl_Class_getComponentType(jl_Object_getClass(var$9)), $c);
    else
        while ($c < $suffix) {
            var$10[$c] = null;
            $c = $c + 1 | 0;
        }
    $suffix = 0;
    $fields = $fields;
    $sb = new ju_AbstractList$1;
    $sb.$this$0 = $fields;
    $sb.$modCount1 = $fields.$modCount;
    $sb.$size0 = $fields.$size;
    $sb.$removeIndex = (-1);
    $fields = $sb;
    while (ju_AbstractList$1_hasNext($fields)) {
        $end = $suffix + 1 | 0;
        $c = $fields.$modCount1;
        $sb = $fields.$this$0;
        if ($c < $sb.$modCount) {
            $fields = new ju_ConcurrentModificationException;
            jl_Exception__init_($fields);
            $rt_throw($fields);
        }
        var$10 = var$9.data;
        $next = $fields.$index1;
        $fields.$removeIndex = $next;
        $fields.$index1 = $next + 1 | 0;
        $sb = $sb;
        ju_ArrayList_checkIndex($sb, $next);
        var$10[$suffix] = $sb.$array.data[$next];
        $suffix = $end;
    }
    return var$9;
},
jt_DecimalFormatParser_parseNumber = ($this, $apply) => {
    let var$2, var$3, var$4, var$5, var$6, var$7;
    jt_DecimalFormatParser_parseIntegerPart($this, $apply);
    if ($this.$index < $this.$string.$nativeString.length && jl_String_charAt($this.$string, $this.$index) == 46) {
        $this.$index = $this.$index + 1 | 0;
        var$2 = 0;
        var$3 = 0;
        var$4 = 0;
        a: {
            b: while (true) {
                if ($this.$index >= $this.$string.$nativeString.length)
                    break a;
                c: {
                    switch (jl_String_charAt($this.$string, $this.$index)) {
                        case 35:
                            break;
                        case 44:
                            var$5 = new jl_IllegalArgumentException;
                            $apply = $this.$index;
                            var$6 = $this.$string;
                            var$7 = new jl_StringBuilder;
                            jl_AbstractStringBuilder__init_(var$7);
                            jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(var$7, $rt_s(86)), $apply), $rt_s(82)), var$6);
                            jl_RuntimeException__init_(var$5, jl_AbstractStringBuilder_toString(var$7));
                            $rt_throw(var$5);
                        case 46:
                            var$5 = new jl_IllegalArgumentException;
                            $apply = $this.$index;
                            var$6 = $this.$string;
                            var$7 = new jl_StringBuilder;
                            jl_AbstractStringBuilder__init_(var$7);
                            jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(var$7, $rt_s(87)), $apply), $rt_s(82)), var$6);
                            jl_RuntimeException__init_(var$5, jl_AbstractStringBuilder_toString(var$7));
                            $rt_throw(var$5);
                        case 48:
                            if (var$2)
                                break b;
                            var$3 = var$3 + 1 | 0;
                            var$4 = var$4 + 1 | 0;
                            break c;
                        default:
                            break a;
                    }
                    var$3 = var$3 + 1 | 0;
                    var$2 = 1;
                }
                $this.$index = $this.$index + 1 | 0;
            }
            var$5 = new jl_IllegalArgumentException;
            $apply = $this.$index;
            var$6 = $this.$string;
            var$7 = new jl_StringBuilder;
            jl_AbstractStringBuilder__init_(var$7);
            jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(var$7, $rt_s(88)), $apply), $rt_s(82)), var$6);
            jl_RuntimeException__init_(var$5, jl_AbstractStringBuilder_toString(var$7));
            $rt_throw(var$5);
        }
        if ($apply) {
            $this.$fracLength = var$3;
            $this.$minimumFracLength = var$4;
            $this.$decimalSeparatorRequired = var$3 ? 0 : 1;
        }
    }
    if ($this.$index < $this.$string.$nativeString.length && jl_String_charAt($this.$string, $this.$index) == 69) {
        $this.$index = $this.$index + 1 | 0;
        var$2 = 0;
        d: {
            e: while (true) {
                if ($this.$index >= $this.$string.$nativeString.length)
                    break d;
                switch (jl_String_charAt($this.$string, $this.$index)) {
                    case 35:
                    case 44:
                    case 46:
                    case 69:
                        break e;
                    case 48:
                        break;
                    default:
                        break d;
                }
                var$2 = var$2 + 1 | 0;
                $this.$index = $this.$index + 1 | 0;
            }
            var$5 = new jl_IllegalArgumentException;
            $apply = $this.$index;
            var$6 = $this.$string;
            var$7 = new jl_StringBuilder;
            jl_AbstractStringBuilder__init_(var$7);
            jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(var$7, $rt_s(89)), $apply), $rt_s(82)), var$6);
            jl_RuntimeException__init_(var$5, jl_AbstractStringBuilder_toString(var$7));
            $rt_throw(var$5);
        }
        if (!var$2) {
            var$5 = new jl_IllegalArgumentException;
            $apply = $this.$index;
            var$6 = $this.$string;
            var$7 = new jl_StringBuilder;
            jl_AbstractStringBuilder__init_(var$7);
            jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(var$7, $rt_s(90)), $apply), $rt_s(82)), var$6);
            jl_RuntimeException__init_(var$5, jl_AbstractStringBuilder_toString(var$7));
            $rt_throw(var$5);
        }
        if ($apply)
            $this.$exponentLength = var$2;
    }
},
jt_DecimalFormatParser_parseIntegerPart = ($this, $apply) => {
    let $lastGroup, $optionalDigits, $length, $minimumLength, var$6, var$7, var$8, var$9, var$10;
    $lastGroup = $this.$index;
    $optionalDigits = 1;
    $length = 0;
    $minimumLength = 0;
    var$6 = $lastGroup;
    a: {
        b: while (true) {
            if ($this.$index >= $this.$string.$nativeString.length)
                break a;
            c: {
                d: {
                    switch (jl_String_charAt($this.$string, $this.$index)) {
                        case 35:
                            if (!$optionalDigits) {
                                var$7 = new jl_IllegalArgumentException;
                                $apply = $this.$index;
                                var$8 = $this.$string;
                                var$9 = new jl_StringBuilder;
                                jl_AbstractStringBuilder__init_(var$9);
                                jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(var$9, $rt_s(91)), $apply), $rt_s(82)), var$8);
                                jl_RuntimeException__init_(var$7, jl_AbstractStringBuilder_toString(var$9));
                                $rt_throw(var$7);
                            }
                            $length = $length + 1 | 0;
                            break c;
                        case 44:
                            break d;
                        case 48:
                            break;
                        default:
                            break a;
                    }
                    $optionalDigits = 0;
                    $length = $length + 1 | 0;
                    $minimumLength = $minimumLength + 1 | 0;
                    break c;
                }
                var$10 = $this.$index;
                if (var$6 == var$10)
                    break b;
                if ($apply)
                    $this.$groupSize = var$10 - var$6 | 0;
                var$6 = var$10 + 1 | 0;
            }
            $this.$index = $this.$index + 1 | 0;
        }
        var$7 = new jl_IllegalArgumentException;
        var$8 = $this.$string;
        var$9 = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_(var$9);
        jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(var$9, $rt_s(92)), var$10), $rt_s(82)), var$8);
        jl_RuntimeException__init_(var$7, jl_AbstractStringBuilder_toString(var$9));
        $rt_throw(var$7);
    }
    if (!$length) {
        var$7 = new jl_IllegalArgumentException;
        $apply = $this.$index;
        var$8 = $this.$string;
        var$9 = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_(var$9);
        jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(var$9, $rt_s(93)), $apply), $rt_s(82)), var$8);
        jl_RuntimeException__init_(var$7, jl_AbstractStringBuilder_toString(var$9));
        $rt_throw(var$7);
    }
    $optionalDigits = $this.$index;
    if (var$6 == $optionalDigits) {
        var$7 = new jl_IllegalArgumentException;
        var$8 = $this.$string;
        var$9 = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_(var$9);
        jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(var$9, $rt_s(94)), $optionalDigits), $rt_s(82)), var$8);
        jl_RuntimeException__init_(var$7, jl_AbstractStringBuilder_toString(var$9));
        $rt_throw(var$7);
    }
    if ($apply && var$6 > $lastGroup)
        $this.$groupSize = $optionalDigits - var$6 | 0;
    if ($apply) {
        $this.$intLength = $length;
        $this.$minimumIntLength = $minimumLength;
    }
},
ju_Arrays = $rt_classWithoutFields();
function ju_HashMap$HashEntry() {
    let a = this; ju_MapEntry.call(a);
    a.$origKeyHash = 0;
    a.$next = null;
}
let jt_DecimalFormat$1 = $rt_classWithoutFields(),
jt_DecimalFormat$1_$SwitchMap$java$math$RoundingMode = null,
jt_DecimalFormat$1_$callClinit = () => {
    jt_DecimalFormat$1_$callClinit = $rt_eraseClinit(jt_DecimalFormat$1);
    jt_DecimalFormat$1__clinit_();
},
jt_DecimalFormat$1__clinit_ = () => {
    let var$1, var$2;
    var$1 = $rt_createIntArray((jm_RoundingMode_$VALUES.$clone0()).data.length);
    var$2 = var$1.data;
    jt_DecimalFormat$1_$SwitchMap$java$math$RoundingMode = var$1;
    var$2[jm_RoundingMode_CEILING.$ordinal] = 1;
    var$2[jm_RoundingMode_FLOOR.$ordinal] = 2;
    var$2[jm_RoundingMode_UP.$ordinal] = 3;
    var$2[jm_RoundingMode_DOWN.$ordinal] = 4;
    var$2[jm_RoundingMode_UNNECESSARY.$ordinal] = 5;
    var$2[jm_RoundingMode_HALF_DOWN.$ordinal] = 6;
    var$2[jm_RoundingMode_HALF_UP.$ordinal] = 7;
    var$2[jm_RoundingMode_HALF_EVEN.$ordinal] = 8;
},
jl_ArithmeticException = $rt_classWithoutFields(jl_RuntimeException),
jm_BitLevel = $rt_classWithoutFields(),
jm_BitLevel_shiftLeft0 = ($source, $count) => {
    let $intCount, $resLength, $resDigits, $result;
    $intCount = $count >> 5;
    $count = $count & 31;
    $resLength = ($source.$numberLength + $intCount | 0) + ($count ? 1 : 0) | 0;
    $resDigits = $rt_createIntArray($resLength);
    jm_BitLevel_shiftLeft($resDigits, $source.$digits, $intCount, $count);
    $result = jm_BigInteger__init_($source.$sign, $resLength, $resDigits);
    jm_BigInteger_cutOffLeadingZeroes($result);
    return $result;
},
jm_BitLevel_shiftLeft = ($result, $source, $intCount, $count) => {
    let var$5, $rightShiftCount, $i, var$8, $i_0, var$10;
    a: {
        if (!$count)
            jl_System_fastArraycopy($source, 0, $result, $intCount, $result.data.length - $intCount | 0);
        else {
            var$5 = $result.data;
            $rightShiftCount = 32 - $count | 0;
            $i = var$5.length - 1 | 0;
            var$5[$i] = 0;
            while (true) {
                if ($i <= $intCount)
                    break a;
                var$8 = $source.data;
                $i_0 = var$5[$i];
                var$10 = ($i - $intCount | 0) - 1 | 0;
                var$5[$i] = $i_0 | (var$8[var$10] >>> $rightShiftCount | 0);
                var$5[$i - 1 | 0] = var$8[var$10] << $count;
                $i = $i + (-1) | 0;
            }
        }
    }
    $i_0 = 0;
    while ($i_0 < $intCount) {
        $result.data[$i_0] = 0;
        $i_0 = $i_0 + 1 | 0;
    }
},
jm_BitLevel_shiftRight0 = ($source, $count) => {
    let $intCount, $resLength, var$5, $resDigits, var$7, $i, var$9, var$10, var$11, $result;
    $intCount = $count >> 5;
    $count = $count & 31;
    $resLength = $source.$numberLength;
    if ($intCount >= $resLength)
        return $source.$sign >= 0 ? jm_BigInteger_ZERO : jm_BigInteger_MINUS_ONE;
    a: {
        $resLength = $resLength - $intCount | 0;
        var$5 = $resLength + 1 | 0;
        $resDigits = $rt_createIntArray(var$5);
        jm_BitLevel_shiftRight($resDigits, $resLength, $source.$digits, $intCount, $count);
        var$7 = $source.$sign;
        if (var$7 >= 0)
            var$5 = $resLength;
        else {
            $i = 0;
            while (true) {
                var$9 = $rt_compare($i, $intCount);
                if (var$9 >= 0)
                    break;
                if ($source.$digits.data[$i])
                    break;
                $i = $i + 1 | 0;
            }
            if (var$9 >= 0) {
                if ($count <= 0) {
                    var$5 = $resLength;
                    break a;
                }
                if (!($source.$digits.data[$i] << (32 - $count | 0))) {
                    var$5 = $resLength;
                    break a;
                }
            }
            var$10 = $resDigits.data;
            var$11 = 0;
            while (true) {
                $i = $rt_compare(var$11, $resLength);
                if ($i >= 0)
                    break;
                if (var$10[var$11] != (-1))
                    break;
                var$10[var$11] = 0;
                var$11 = var$11 + 1 | 0;
            }
            if ($i)
                var$5 = $resLength;
            var$10[var$11] = var$10[var$11] + 1 | 0;
        }
    }
    $result = jm_BigInteger__init_(var$7, var$5, $resDigits);
    jm_BigInteger_cutOffLeadingZeroes($result);
    return $result;
},
jm_BitLevel_shiftRight = ($result, $resultLen, $source, $intCount, $count) => {
    let $allZero, $i, var$8, $leftShiftCount, var$10, var$11;
    $allZero = 1;
    $i = 0;
    while ($i < $intCount) {
        $allZero = $allZero & ($source.data[$i] ? 0 : 1);
        $i = $i + 1 | 0;
    }
    if (!$count)
        jl_System_fastArraycopy($source, $intCount, $result, 0, $resultLen);
    else {
        var$8 = $source.data;
        $leftShiftCount = 32 - $count | 0;
        $allZero = $allZero & (var$8[$i] << $leftShiftCount ? 0 : 1);
        var$10 = 0;
        var$11 = $resultLen - 1 | 0;
        while (var$10 < var$11) {
            $source = $result.data;
            $resultLen = var$10 + $intCount | 0;
            $source[var$10] = (var$8[$resultLen] >>> $count | 0) | var$8[$resultLen + 1 | 0] << $leftShiftCount;
            var$10 = var$10 + 1 | 0;
        }
        $result.data[var$10] = var$8[var$10 + $intCount | 0] >>> $count | 0;
    }
    return $allZero;
},
jm_Elementary = $rt_classWithoutFields(),
jm_Elementary_compareArrays = ($a, $b, $size) => {
    let $i, var$5;
    $i = $size - 1 | 0;
    while ($i >= 0) {
        var$5 = $b.data;
        if ($a.data[$i] != var$5[$i])
            break;
        $i = $i + (-1) | 0;
    }
    if ($i < 0)
        $size = 0;
    else {
        $b = $b.data;
        $size = Long_ge(Long_and(Long_fromInt($a.data[$i]), Long_create(4294967295, 0)), Long_and(Long_fromInt($b[$i]), Long_create(4294967295, 0))) ? 1 : (-1);
    }
    return $size;
},
jm_Elementary_add = ($a, $aSize, $b, $bSize) => {
    let $res, var$6, var$7, var$8, var$9;
    $a = $a.data;
    $b = $b.data;
    $res = $rt_createIntArray($aSize + 1 | 0);
    var$6 = $res.data;
    var$7 = Long_add(Long_and(Long_fromInt($a[0]), Long_create(4294967295, 0)), Long_and(Long_fromInt($b[0]), Long_create(4294967295, 0)));
    var$6[0] = Long_lo(var$7);
    var$8 = Long_shr(var$7, 32);
    if ($aSize < $bSize) {
        var$9 = 1;
        while (var$9 < $aSize) {
            var$7 = Long_add(var$8, Long_add(Long_and(Long_fromInt($a[var$9]), Long_create(4294967295, 0)), Long_and(Long_fromInt($b[var$9]), Long_create(4294967295, 0))));
            var$6[var$9] = Long_lo(var$7);
            var$8 = Long_shr(var$7, 32);
            var$9 = var$9 + 1 | 0;
        }
        while (var$9 < $bSize) {
            var$7 = Long_add(var$8, Long_and(Long_fromInt($b[var$9]), Long_create(4294967295, 0)));
            var$6[var$9] = Long_lo(var$7);
            var$8 = Long_shr(var$7, 32);
            var$9 = var$9 + 1 | 0;
        }
    } else {
        var$9 = 1;
        while (var$9 < $bSize) {
            var$7 = Long_add(var$8, Long_add(Long_and(Long_fromInt($a[var$9]), Long_create(4294967295, 0)), Long_and(Long_fromInt($b[var$9]), Long_create(4294967295, 0))));
            var$6[var$9] = Long_lo(var$7);
            var$8 = Long_shr(var$7, 32);
            var$9 = var$9 + 1 | 0;
        }
        while (var$9 < $aSize) {
            var$7 = Long_add(var$8, Long_and(Long_fromInt($a[var$9]), Long_create(4294967295, 0)));
            var$6[var$9] = Long_lo(var$7);
            var$8 = Long_shr(var$7, 32);
            var$9 = var$9 + 1 | 0;
        }
    }
    if (Long_ne(var$8, Long_ZERO))
        var$6[var$9] = Long_lo(var$8);
    return $res;
},
jm_Elementary_subtract = ($a, $aSize, $b, $bSize) => {
    let $res, var$6, var$7, var$8, var$9, var$10, var$11;
    $res = $rt_createIntArray($aSize);
    var$6 = $res.data;
    var$7 = Long_ZERO;
    var$8 = 0;
    while (var$8 < $bSize) {
        var$9 = $a.data;
        var$10 = $b.data;
        var$11 = Long_add(var$7, Long_sub(Long_and(Long_fromInt(var$9[var$8]), Long_create(4294967295, 0)), Long_and(Long_fromInt(var$10[var$8]), Long_create(4294967295, 0))));
        var$6[var$8] = Long_lo(var$11);
        var$7 = Long_shr(var$11, 32);
        var$8 = var$8 + 1 | 0;
    }
    while (var$8 < $aSize) {
        var$11 = Long_add(var$7, Long_and(Long_fromInt($a.data[var$8]), Long_create(4294967295, 0)));
        var$6[var$8] = Long_lo(var$11);
        var$7 = Long_shr(var$11, 32);
        var$8 = var$8 + 1 | 0;
    }
    return $res;
},
jm_Division = $rt_classWithoutFields(),
jm_Division_divide = ($quot, $quotLength, $a, $j, $b, $bLength) => {
    let var$7, $normA, $normB, $k, $divisorShift, $firstDivisorDigit, $i, var$14, var$15, var$16, $res, $rem, $rOverflowed, $carry, $product, $longR, $borrow;
    var$7 = $b.data;
    $normA = $rt_createIntArray($j + 1 | 0);
    $normB = $rt_createIntArray($bLength + 1 | 0);
    $k = $bLength - 1 | 0;
    $divisorShift = jl_Integer_numberOfLeadingZeros(var$7[$k]);
    if ($divisorShift) {
        jm_BitLevel_shiftLeft($normB, $b, 0, $divisorShift);
        jm_BitLevel_shiftLeft($normA, $a, 0, $divisorShift);
    } else {
        jl_System_fastArraycopy($a, 0, $normA, 0, $j);
        jl_System_fastArraycopy($b, 0, $normB, 0, $bLength);
    }
    var$7 = $normB.data;
    $a = $normA.data;
    $firstDivisorDigit = var$7[$k];
    $i = $quotLength - 1 | 0;
    var$14 = $bLength - 2 | 0;
    var$15 = Long_and(Long_fromInt($firstDivisorDigit), Long_create(4294967295, 0));
    while ($i >= 0) {
        a: {
            if ($a[$j] == $firstDivisorDigit)
                var$16 = (-1);
            else {
                $res = jm_Division_divideLongByInt(Long_add(Long_shl(Long_and(Long_fromInt($a[$j]), Long_create(4294967295, 0)), 32), Long_and(Long_fromInt($a[$j - 1 | 0]), Long_create(4294967295, 0))), $firstDivisorDigit);
                var$16 = Long_lo($res);
                $rem = Long_hi($res);
                if (var$16) {
                    $rOverflowed = 0;
                    var$16 = var$16 + 1 | 0;
                    while (true) {
                        var$16 = var$16 + (-1) | 0;
                        if ($rOverflowed)
                            break;
                        $carry = Long_mul(Long_and(Long_fromInt(var$16), Long_create(4294967295, 0)), Long_and(Long_fromInt(var$7[var$14]), Long_create(4294967295, 0)));
                        $res = Long_fromInt($rem);
                        $product = Long_add(Long_shl($res, 32), Long_and(Long_fromInt($a[$j - 2 | 0]), Long_create(4294967295, 0)));
                        $longR = Long_add(Long_and($res, Long_create(4294967295, 0)), var$15);
                        if (jl_Integer_numberOfLeadingZeros(Long_hi($longR)) >= 32)
                            $rem = Long_lo($longR);
                        else
                            $rOverflowed = 1;
                        if (Long_le(Long_xor($carry, Long_create(0, 2147483648)), Long_xor($product, Long_create(0, 2147483648))))
                            break a;
                    }
                }
            }
        }
        if (var$16) {
            $rem = $j - $bLength | 0;
            $carry = Long_ZERO;
            $longR = Long_ZERO;
            $quotLength = 0;
            while ($quotLength < $bLength) {
                $res = jm_Multiplication_unsignedMultAddAdd(var$7[$quotLength], var$16, Long_lo($carry), 0);
                $borrow = $rem + $quotLength | 0;
                $product = Long_add(Long_sub(Long_and(Long_fromInt($a[$borrow]), Long_create(4294967295, 0)), Long_and($res, Long_create(4294967295, 0))), $longR);
                $a[$borrow] = Long_lo($product);
                $longR = Long_shr($product, 32);
                $carry = Long_shru($res, 32);
                $quotLength = $quotLength + 1 | 0;
            }
            $quotLength = $rem + $bLength | 0;
            $product = Long_add(Long_sub(Long_and(Long_fromInt($a[$quotLength]), Long_create(4294967295, 0)), $carry), $longR);
            $a[$quotLength] = Long_lo($product);
            if (Long_hi($product)) {
                var$16 = var$16 + (-1) | 0;
                $carry = Long_ZERO;
                $k = 0;
                while ($k < $bLength) {
                    $quotLength = $rem + $k | 0;
                    $product = Long_add($carry, Long_add(Long_and(Long_fromInt($a[$quotLength]), Long_create(4294967295, 0)), Long_and(Long_fromInt(var$7[$k]), Long_create(4294967295, 0))));
                    $a[$quotLength] = Long_lo($product);
                    $carry = Long_shru($product, 32);
                    $k = $k + 1 | 0;
                }
            }
        }
        if ($quot !== null)
            $quot.data[$i] = var$16;
        $j = $j + (-1) | 0;
        $i = $i + (-1) | 0;
    }
    if ($divisorShift) {
        jm_BitLevel_shiftRight($normB, $bLength, $normA, 0, $divisorShift);
        return $normB;
    }
    jl_System_fastArraycopy($normA, 0, $normB, 0, $bLength);
    return $normA;
},
jm_Division_divideArrayByInt = ($dest, $src, $srcLength, $divisor) => {
    let $rem, $bLong, $i, $bPos, var$9, var$10, $temp, $quot, $aPos;
    $rem = Long_ZERO;
    $bLong = Long_and(Long_fromInt($divisor), Long_create(4294967295, 0));
    $i = $srcLength - 1 | 0;
    $bPos = Long_fromInt($divisor >>> 1 | 0);
    $divisor = $divisor & 1;
    var$9 = Long_shl($bLong, 1);
    while ($i >= 0) {
        var$10 = $src.data;
        $temp = Long_or(Long_shl($rem, 32), Long_and(Long_fromInt(var$10[$i]), Long_create(4294967295, 0)));
        if (Long_ge($temp, Long_ZERO)) {
            $quot = Long_div($temp, $bLong);
            $rem = Long_rem($temp, $bLong);
        } else {
            $aPos = Long_shru($temp, 1);
            $quot = Long_div($aPos, $bPos);
            $rem = Long_add(Long_shl(Long_rem($aPos, $bPos), 1), Long_and($temp, Long_fromInt(1)));
            if ($divisor) {
                if (Long_le($quot, $rem))
                    $rem = Long_sub($rem, $quot);
                else if (Long_gt(Long_sub($quot, $rem), $bLong)) {
                    $rem = Long_add($rem, Long_sub(var$9, $quot));
                    $quot = Long_sub($quot, Long_fromInt(2));
                } else {
                    $rem = Long_add($rem, Long_sub($bLong, $quot));
                    $quot = Long_sub($quot, Long_fromInt(1));
                }
            }
        }
        $dest.data[$i] = Long_lo(Long_and($quot, Long_create(4294967295, 0)));
        $i = $i + (-1) | 0;
    }
    return Long_lo($rem);
},
jm_Division_divideLongByInt = ($a, $b) => {
    let $bLong, $quot, $rem, $aPos, $bPos;
    $bLong = Long_and(Long_fromInt($b), Long_create(4294967295, 0));
    if (Long_ge($a, Long_ZERO)) {
        $quot = Long_div($a, $bLong);
        $rem = Long_rem($a, $bLong);
    } else {
        $aPos = Long_shru($a, 1);
        $bPos = Long_fromInt($b >>> 1 | 0);
        $quot = Long_div($aPos, $bPos);
        $rem = Long_add(Long_shl(Long_rem($aPos, $bPos), 1), Long_and($a, Long_fromInt(1)));
        if ($b & 1) {
            if (Long_le($quot, $rem))
                $rem = Long_sub($rem, $quot);
            else if (Long_le(Long_sub($quot, $rem), $bLong)) {
                $rem = Long_add($rem, Long_sub($bLong, $quot));
                $quot = Long_sub($quot, Long_fromInt(1));
            } else {
                $rem = Long_add($rem, Long_sub(Long_shl($bLong, 1), $quot));
                $quot = Long_sub($quot, Long_fromInt(2));
            }
        }
    }
    return Long_or(Long_shl($rem, 32), Long_and($quot, Long_create(4294967295, 0)));
},
jl_System = $rt_classWithoutFields(),
jl_System_arraycopy = ($src, $srcPos, $dest, $destPos, $length) => {
    let $srcType, $targetType, $srcArray, $i, var$10, var$11, var$12, $elem, var$14;
    if ($src !== null && $dest !== null) {
        if ($srcPos >= 0 && $destPos >= 0 && $length >= 0 && ($srcPos + $length | 0) <= jlr_Array_getLength($src) && ($destPos + $length | 0) <= jlr_Array_getLength($dest)) {
            a: {
                b: {
                    if ($src !== $dest) {
                        $srcType = jl_Class_getComponentType(jl_Object_getClass($src));
                        $targetType = jl_Class_getComponentType(jl_Object_getClass($dest));
                        if ($srcType !== null && $targetType !== null) {
                            if ($srcType === $targetType)
                                break b;
                            if (!jl_Class_isPrimitive($srcType) && !jl_Class_isPrimitive($targetType)) {
                                $srcArray = $src;
                                $i = 0;
                                var$10 = $srcPos;
                                while ($i < $length) {
                                    var$11 = $srcArray.data;
                                    var$12 = var$10 + 1 | 0;
                                    $elem = var$11[var$10];
                                    var$14 = $targetType.$platformClass;
                                    if (!($elem !== null && !(typeof $elem.constructor.$meta === 'undefined' ? 1 : 0) && otp_Platform_isAssignable($elem.constructor, var$14) ? 1 : 0)) {
                                        jl_System_doArrayCopy($src, $srcPos, $dest, $destPos, $i);
                                        $src = new jl_ArrayStoreException;
                                        jl_Exception__init_($src);
                                        $rt_throw($src);
                                    }
                                    $i = $i + 1 | 0;
                                    var$10 = var$12;
                                }
                                jl_System_doArrayCopy($src, $srcPos, $dest, $destPos, $length);
                                return;
                            }
                            if (!jl_Class_isPrimitive($srcType))
                                break a;
                            if (jl_Class_isPrimitive($targetType))
                                break b;
                            else
                                break a;
                        }
                        $src = new jl_ArrayStoreException;
                        jl_Exception__init_($src);
                        $rt_throw($src);
                    }
                }
                jl_System_doArrayCopy($src, $srcPos, $dest, $destPos, $length);
                return;
            }
            $src = new jl_ArrayStoreException;
            jl_Exception__init_($src);
            $rt_throw($src);
        }
        $src = new jl_IndexOutOfBoundsException;
        jl_Exception__init_($src);
        $rt_throw($src);
    }
    $dest = new jl_NullPointerException;
    jl_RuntimeException__init_($dest, $rt_s(95));
    $rt_throw($dest);
},
jl_System_fastArraycopy = ($src, $srcPos, $dest, $destPos, $length) => {
    if ($srcPos >= 0 && $destPos >= 0 && $length >= 0 && ($srcPos + $length | 0) <= jlr_Array_getLength($src) && ($destPos + $length | 0) <= jlr_Array_getLength($dest)) {
        jl_System_doArrayCopy($src, $srcPos, $dest, $destPos, $length);
        return;
    }
    $src = new jl_IndexOutOfBoundsException;
    jl_Exception__init_($src);
    $rt_throw($src);
},
jl_System_doArrayCopy = (var$1, var$2, var$3, var$4, var$5) => {
    if (var$5 !== 0) {
        if (typeof var$1.data.buffer !== 'undefined') {
            var$3.data.set(var$1.data.subarray(var$2, var$2 + var$5), var$4);
        } else if (var$1 !== var$3 || var$4 < var$2) {
            for (let i = 0;i < var$5;i = i + 1 | 0) {
                var$3.data[var$4++] = var$1.data[var$2++];
            }
        } else {
            var$2 = var$2 + var$5 | 0;
            var$4 = var$4 + var$5 | 0;
            for (let i = 0;i < var$5;i = i + 1 | 0) {
                var$3.data[ --var$4] = var$1.data[ --var$2];
            }
        }
    }
},
jt_DecimalFormat$MinusField = $rt_classWithoutFields(),
jt_DecimalFormat$MinusField__init_ = $this => {
    return;
},
jt_DecimalFormat$MinusField__init_0 = () => {
    let var_0 = new jt_DecimalFormat$MinusField();
    jt_DecimalFormat$MinusField__init_(var_0);
    return var_0;
},
jt_DecimalFormat$MinusField_render = ($this, $format, $buffer) => {
    jl_AbstractStringBuilder_append($buffer, $format.$symbols.$minusSign);
},
jt_DecimalFormat$Constants = $rt_classWithoutFields(),
jt_DecimalFormat$Constants_doubleAnalysisResult = null,
jt_DecimalFormat$Constants_floatAnalysisResult = null,
jt_DecimalFormat$Constants__clinit_ = () => {
    jt_DecimalFormat$Constants_doubleAnalysisResult = new otcit_DoubleAnalyzer$Result;
    jt_DecimalFormat$Constants_floatAnalysisResult = new otcit_FloatAnalyzer$Result;
},
otcit_DoubleAnalyzer = $rt_classWithoutFields(),
otcit_DoubleAnalyzer_MAX_MANTISSA = Long_ZERO,
otcit_DoubleAnalyzer_resultForLog10 = null,
otcit_DoubleAnalyzer_mantissa10Table = null,
otcit_DoubleAnalyzer_exp10Table = null,
otcit_DoubleAnalyzer_analyze = ($d, $result) => {
    let $bits, $mantissa, $exponent, var$6, $posCmp, $mantissaShift, $decExponent, $binExponentCorrection, var$11, $decMantissa, $decMantissaHi, $decMantissaLow, $lowerPos, $lowerPos_0, $upperPos, $upperPos_0;
    $bits = !(isNaN($d) ? 1 : 0) ? $rt_doubleToRawLongBits($d) : Long_create(0, 2146959360);
    $result.$sign0 = Long_eq(Long_and($bits, Long_create(0, 2147483648)), Long_ZERO) ? 0 : 1;
    $mantissa = Long_and($bits, Long_create(4294967295, 1048575));
    $exponent = Long_lo(Long_shr($bits, 52)) & 2047;
    if (Long_eq($mantissa, Long_ZERO) && !$exponent) {
        $result.$mantissa = Long_ZERO;
        $result.$exponent = 0;
        return;
    }
    if ($exponent)
        $mantissa = Long_or($mantissa, Long_create(0, 1048576));
    else {
        $mantissa = Long_shl($mantissa, 1);
        while (Long_eq(Long_and($mantissa, Long_create(0, 1048576)), Long_ZERO)) {
            $mantissa = Long_shl($mantissa, 1);
            $exponent = $exponent + (-1) | 0;
        }
    }
    var$6 = otcit_DoubleAnalyzer_exp10Table.data;
    $posCmp = $exponent << 16 >> 16;
    $mantissaShift = 0;
    $decExponent = var$6.length;
    if ($mantissaShift > $decExponent) {
        $result = new jl_IllegalArgumentException;
        jl_Exception__init_($result);
        $rt_throw($result);
    }
    $binExponentCorrection = $decExponent - 1 | 0;
    a: {
        while (true) {
            if ($mantissaShift > $binExponentCorrection) {
                $decExponent = ( -$mantissaShift | 0) - 1 | 0;
                break a;
            }
            $decExponent = ($mantissaShift + $binExponentCorrection | 0) / 2 | 0;
            var$11 = $rt_compare(var$6[$decExponent], $posCmp);
            if (!var$11)
                break;
            if (var$11 <= 0)
                $mantissaShift = $decExponent + 1 | 0;
            else
                $binExponentCorrection = $decExponent - 1 | 0;
        }
    }
    if ($decExponent < 0)
        $decExponent =  -$decExponent | 0;
    $posCmp = $decExponent + 1 | 0;
    $mantissaShift = 12 + ($exponent - var$6[$posCmp] | 0) | 0;
    $decMantissa = otcit_DoubleAnalyzer_mulAndShiftRight($mantissa, otcit_DoubleAnalyzer_mantissa10Table.data[$posCmp], $mantissaShift);
    if (Long_le($decMantissa, otcit_DoubleAnalyzer_MAX_MANTISSA)) {
        while (jl_Long_compareUnsigned($decMantissa, otcit_DoubleAnalyzer_MAX_MANTISSA) <= 0) {
            $decExponent = $decExponent + (-1) | 0;
            $decMantissa = Long_add(Long_mul($decMantissa, Long_fromInt(10)), Long_fromInt(9));
        }
        var$6 = otcit_DoubleAnalyzer_exp10Table.data;
        $posCmp = $decExponent + 1 | 0;
        $mantissaShift = 12 + ($exponent - var$6[$posCmp] | 0) | 0;
        $decMantissa = otcit_DoubleAnalyzer_mulAndShiftRight($mantissa, otcit_DoubleAnalyzer_mantissa10Table.data[$posCmp], $mantissaShift);
    }
    $mantissa = Long_shl($mantissa, 1);
    $bits = Long_add($mantissa, Long_fromInt(1));
    var$6 = otcit_DoubleAnalyzer_mantissa10Table.data;
    $posCmp = $decExponent + 1 | 0;
    $decMantissaHi = var$6[$posCmp];
    $exponent = $mantissaShift - 1 | 0;
    $decMantissaHi = otcit_DoubleAnalyzer_mulAndShiftRight($bits, $decMantissaHi, $exponent);
    $decMantissaLow = otcit_DoubleAnalyzer_mulAndShiftRight(Long_sub($mantissa, Long_fromInt(1)), otcit_DoubleAnalyzer_mantissa10Table.data[$posCmp], $exponent);
    $lowerPos = Long_fromInt(1);
    while (true) {
        $lowerPos_0 = Long_mul($lowerPos, Long_fromInt(10));
        if (jl_Long_compareUnsigned(jl_Long_divideUnsigned($decMantissa, $lowerPos_0), jl_Long_divideUnsigned($decMantissaLow, $lowerPos_0)) <= 0)
            break;
        $lowerPos = $lowerPos_0;
    }
    $upperPos = Long_fromInt(1);
    while (true) {
        $upperPos_0 = Long_mul($upperPos, Long_fromInt(10));
        if (jl_Long_compareUnsigned(jl_Long_divideUnsigned($decMantissa, $upperPos_0), jl_Long_divideUnsigned($decMantissaHi, $upperPos_0)) >= 0)
            break;
        $upperPos = $upperPos_0;
    }
    $posCmp = jl_Long_compareUnsigned($lowerPos, $upperPos);
    $mantissa = $posCmp > 0 ? Long_mul(jl_Long_divideUnsigned($decMantissa, $lowerPos), $lowerPos) : $posCmp < 0 ? Long_add(Long_mul(jl_Long_divideUnsigned($decMantissa, $upperPos), $upperPos), $upperPos) : Long_mul(jl_Long_divideUnsigned(Long_add($decMantissa, Long_div($upperPos, Long_fromInt(2))), $upperPos), $upperPos);
    if (jl_Long_compareUnsigned($mantissa, Long_create(2808348672, 232830643)) >= 0)
        while (true) {
            $decExponent = $decExponent + 1 | 0;
            $mantissa = jl_Long_divideUnsigned($mantissa, Long_fromInt(10));
            if (jl_Long_compareUnsigned($mantissa, Long_create(2808348672, 232830643)) < 0)
                break;
        }
    else if (jl_Long_compareUnsigned($mantissa, Long_create(1569325056, 23283064)) < 0) {
        $decExponent = $decExponent + (-1) | 0;
        $mantissa = Long_mul($mantissa, Long_fromInt(10));
    }
    $result.$mantissa = $mantissa;
    $result.$exponent = $decExponent - 330 | 0;
},
otcit_DoubleAnalyzer_mulAndShiftRight = ($a, $b, $shift) => {
    let $a1, $a2, $a3, $a4, $b1, $b2, $b3, $b4;
    $a1 = Long_and($a, Long_fromInt(65535));
    $a2 = Long_and(Long_shru($a, 16), Long_fromInt(65535));
    $a3 = Long_and(Long_shru($a, 32), Long_fromInt(65535));
    $a4 = Long_and(Long_shru($a, 48), Long_fromInt(65535));
    $b1 = Long_and($b, Long_fromInt(65535));
    $b2 = Long_and(Long_shru($b, 16), Long_fromInt(65535));
    $b3 = Long_and(Long_shru($b, 32), Long_fromInt(65535));
    $b4 = Long_and(Long_shru($b, 48), Long_fromInt(65535));
    return Long_add(Long_add(Long_add(Long_shl(Long_mul($b4, $a4), 32 + $shift | 0), Long_shl(Long_add(Long_mul($b4, $a3), Long_mul($b3, $a4)), 16 + $shift | 0)), Long_shl(Long_add(Long_add(Long_mul($b4, $a2), Long_mul($b3, $a3)), Long_mul($b2, $a4)), $shift)), Long_shru(Long_add(Long_add(Long_add(Long_mul($b3, $a1), Long_mul($b2, $a2)), Long_mul($b1, $a3)), Long_shl(Long_add(Long_add(Long_add(Long_mul($b4, $a1), Long_mul($b3, $a2)), Long_mul($b2, $a3)), Long_mul($b1, $a4)), 16)), 32 - $shift | 0));
},
otcit_DoubleAnalyzer__clinit_ = () => {
    otcit_DoubleAnalyzer_MAX_MANTISSA = jl_Long_divideUnsigned(Long_fromInt(-1), Long_fromInt(10));
    otcit_DoubleAnalyzer_resultForLog10 = otcit_DoubleAnalyzer$Result__init_0();
    otcit_DoubleAnalyzer_mantissa10Table = $rt_createLongArrayFromData([Long_create(3251292512, 2194092222), Long_create(1766094183, 3510547556), Long_create(553881887, 2808438045), Long_create(443105509, 2246750436), Long_create(3285949193, 3594800697), Long_create(910772436, 2875840558), Long_create(2446604867, 2300672446), Long_create(2196580869, 3681075914), Long_create(2616258154, 2944860731), Long_create(1234013064, 2355888585), Long_create(1974420903, 3769421736), Long_create(720543263, 3015537389), Long_create(1435428070, 2412429911),
    Long_create(578697993, 3859887858), Long_create(2180945313, 3087910286), Long_create(885762791, 2470328229), Long_create(3135207384, 3952525166), Long_create(1649172448, 3162020133), Long_create(3037324877, 2529616106), Long_create(3141732885, 4047385770), Long_create(2513386308, 3237908616), Long_create(1151715587, 2590326893), Long_create(983751480, 4144523029), Long_create(1645994643, 3315618423), Long_create(3034782633, 2652494738), Long_create(3996658754, 4243991581), Long_create(2338333544, 3395193265),
    Long_create(1870666835, 2716154612), Long_create(4073513845, 2172923689), Long_create(3940641775, 3476677903), Long_create(575533043, 2781342323), Long_create(2178413352, 2225073858), Long_create(2626467905, 3560118173), Long_create(3819161242, 2848094538), Long_create(478348616, 2278475631), Long_create(3342338164, 3645561009), Long_create(3532863990, 2916448807), Long_create(1108304273, 2333159046), Long_create(55299919, 3733054474), Long_create(903233395, 2986443579), Long_create(1581580175, 2389154863),
    Long_create(1671534821, 3822647781), Long_create(478234397, 3058118225), Long_create(382587518, 2446494580), Long_create(612140029, 3914391328), Long_create(2207698941, 3131513062), Long_create(48172235, 2505210450), Long_create(77075576, 4008336720), Long_create(61660460, 3206669376), Long_create(3485302205, 2565335500), Long_create(1281516232, 4104536801), Long_create(166219527, 3283629441), Long_create(3568949458, 2626903552), Long_create(2274345296, 4203045684), Long_create(2678469696, 3362436547), Long_create(424788838, 2689949238),
    Long_create(2057817989, 2151959390), Long_create(3292508783, 3443135024), Long_create(3493000485, 2754508019), Long_create(3653393847, 2203606415), Long_create(1550462860, 3525770265), Long_create(1240370288, 2820616212), Long_create(3569276608, 2256492969), Long_create(3133862195, 3610388751), Long_create(1648096297, 2888311001), Long_create(459483578, 2310648801), Long_create(3312154103, 3697038081), Long_create(1790729823, 2957630465), Long_create(1432583858, 2366104372), Long_create(3151127633, 3785766995),
    Long_create(2520902106, 3028613596), Long_create(1157728226, 2422890877), Long_create(2711358621, 3876625403), Long_create(3887073815, 3101300322), Long_create(1391672133, 2481040258), Long_create(1367681954, 3969664413), Long_create(2812132482, 3175731530), Long_create(2249705985, 2540585224), Long_create(1022549199, 4064936359), Long_create(1677032818, 3251949087), Long_create(3918606632, 2601559269), Long_create(3692790234, 4162494831), Long_create(2095238728, 3329995865), Long_create(1676190982, 2663996692),
    Long_create(3540899031, 4262394707), Long_create(1114732307, 3409915766), Long_create(32792386, 2727932613), Long_create(1744220827, 2182346090), Long_create(2790753324, 3491753744), Long_create(3091596118, 2793402995), Long_create(2473276894, 2234722396), Long_create(2239256113, 3575555834), Long_create(2650398349, 2860444667), Long_create(402331761, 2288355734), Long_create(2361717736, 3661369174), Long_create(2748367648, 2929095339), Long_create(3057687578, 2343276271), Long_create(3174313206, 3749242034),
    Long_create(3398444024, 2999393627), Long_create(1000768301, 2399514902), Long_create(2460222741, 3839223843), Long_create(3686165111, 3071379074), Long_create(3807925548, 2457103259), Long_create(3515700499, 3931365215), Long_create(2812560399, 3145092172), Long_create(532061401, 2516073738), Long_create(4287272078, 4025717980), Long_create(3429817663, 3220574384), Long_create(3602847589, 2576459507), Long_create(2328582306, 4122335212), Long_create(144878926, 3297868170), Long_create(115903141, 2638294536),
    Long_create(2762425404, 4221271257), Long_create(491953404, 3377017006), Long_create(3829536560, 2701613604), Long_create(3922622707, 2161290883), Long_create(1122235577, 3458065414), Long_create(1756781920, 2766452331), Long_create(546432077, 2213161865), Long_create(874291324, 3541058984), Long_create(1558426518, 2832847187), Long_create(3823721592, 2266277749), Long_create(3540974170, 3626044399), Long_create(3691772795, 2900835519), Long_create(3812411695, 2320668415), Long_create(1804891416, 3713069465),
    Long_create(1443913133, 2970455572), Long_create(3732110884, 2376364457), Long_create(2535403578, 3802183132), Long_create(310335944, 3041746506), Long_create(3684242592, 2433397204), Long_create(3317807769, 3893435527), Long_create(936259297, 3114748422), Long_create(3325987815, 2491798737), Long_create(1885606668, 3986877980), Long_create(1508485334, 3189502384), Long_create(2065781726, 2551601907), Long_create(4164244222, 4082563051), Long_create(2472401918, 3266050441), Long_create(1118928075, 2612840353),
    Long_create(931291461, 4180544565), Long_create(745033169, 3344435652), Long_create(3173006913, 2675548521), Long_create(3358824142, 4280877634), Long_create(3546052773, 3424702107), Long_create(1118855300, 2739761686), Long_create(36090780, 2191809349), Long_create(1775732167, 3506894958), Long_create(3138572652, 2805515966), Long_create(1651864662, 2244412773), Long_create(1783990001, 3591060437), Long_create(4004172378, 2872848349), Long_create(4062331362, 2298278679), Long_create(3922749802, 3677245887),
    Long_create(1420212923, 2941796710), Long_create(1136170338, 2353437368), Long_create(958879082, 3765499789), Long_create(1626096725, 3012399831), Long_create(441883920, 2409919865), Long_create(707014273, 3855871784), Long_create(1424604878, 3084697427), Long_create(3716664280, 2467757941), Long_create(4228675929, 3948412706), Long_create(2523947284, 3158730165), Long_create(2019157827, 2526984132), Long_create(4089645983, 4043174611), Long_create(2412723327, 3234539689), Long_create(2789172121, 2587631751),
    Long_create(2744688475, 4140210802), Long_create(477763862, 3312168642), Long_create(2959191467, 2649734913), Long_create(3875712888, 4239575861), Long_create(2241576851, 3391660689), Long_create(2652254940, 2713328551), Long_create(1262810493, 2170662841), Long_create(302509870, 3473060546), Long_create(3677981733, 2778448436), Long_create(2083391927, 2222758749), Long_create(756446706, 3556413999), Long_create(1464150824, 2845131199), Long_create(2030314118, 2276104959), Long_create(671522212, 3641767935),
    Long_create(537217769, 2913414348), Long_create(2147761134, 2330731478), Long_create(2577424355, 3729170365), Long_create(2061939484, 2983336292), Long_create(4226531965, 2386669033), Long_create(1608490388, 3818670454), Long_create(2145785770, 3054936363), Long_create(3434615534, 2443949090), Long_create(1200417559, 3910318545), Long_create(960334047, 3128254836), Long_create(4204241074, 2502603868), Long_create(1572824964, 4004166190), Long_create(1258259971, 3203332952), Long_create(3583588354, 2562666361),
    Long_create(4015754449, 4100266178), Long_create(635623181, 3280212943), Long_create(2226485463, 2624170354), Long_create(985396364, 4198672567), Long_create(3365297469, 3358938053), Long_create(115257597, 2687150443), Long_create(1810192996, 2149720354), Long_create(319328417, 3439552567), Long_create(2832443111, 2751642053), Long_create(3983941407, 2201313642), Long_create(2938332415, 3522101828), Long_create(4068652850, 2817681462), Long_create(1536935362, 2254145170), Long_create(2459096579, 3606632272),
    Long_create(249290345, 2885305818), Long_create(1917419194, 2308244654), Long_create(490890333, 3693191447), Long_create(2969692644, 2954553157), Long_create(657767197, 2363642526), Long_create(3629407892, 3781828041), Long_create(2044532855, 3025462433), Long_create(3353613202, 2420369946), Long_create(3647794205, 3872591914), Long_create(3777228823, 3098073531), Long_create(2162789599, 2478458825), Long_create(3460463359, 3965534120), Long_create(2768370687, 3172427296), Long_create(1355703090, 2537941837),
    Long_create(3028118404, 4060706939), Long_create(3281488183, 3248565551), Long_create(1766197087, 2598852441), Long_create(1107928421, 4158163906), Long_create(27349277, 3326531125), Long_create(21879422, 2661224900), Long_create(35007075, 4257959840), Long_create(28005660, 3406367872), Long_create(2599384905, 2725094297), Long_create(361521006, 2180075438), Long_create(4014407446, 3488120700), Long_create(3211525957, 2790496560), Long_create(2569220766, 2232397248), Long_create(3251759766, 3571835597),
    Long_create(883420894, 2857468478), Long_create(2424723634, 2285974782), Long_create(443583977, 3657559652), Long_create(2931847559, 2926047721), Long_create(1486484588, 2340838177), Long_create(3237368801, 3745341083), Long_create(12914663, 2996272867), Long_create(2587312108, 2397018293), Long_create(3280705914, 3835229269), Long_create(3483558190, 3068183415), Long_create(2786846552, 2454546732), Long_create(1022980646, 3927274772), Long_create(3395364895, 3141819817), Long_create(998304997, 2513455854),
    Long_create(3315274914, 4021529366), Long_create(1793226472, 3217223493), Long_create(3152568096, 2573778794), Long_create(2467128576, 4118046071), Long_create(1114709402, 3294436857), Long_create(3468747899, 2635549485), Long_create(1255029343, 4216879177), Long_create(3581003852, 3373503341), Long_create(2005809622, 2698802673), Long_create(3322634616, 2159042138), Long_create(162254630, 3454467422), Long_create(2706784082, 2763573937), Long_create(447440347, 2210859150), Long_create(715904555, 3537374640),
    Long_create(572723644, 2829899712), Long_create(3035159293, 2263919769), Long_create(2279274491, 3622271631), Long_create(964426134, 2897817305), Long_create(771540907, 2318253844), Long_create(2952452370, 3709206150), Long_create(2361961896, 2967364920), Long_create(1889569516, 2373891936), Long_create(1305324308, 3798227098), Long_create(2762246365, 3038581678), Long_create(3927784010, 2430865342), Long_create(2848480580, 3889384548), Long_create(3996771382, 3111507638), Long_create(620436728, 2489206111),
    Long_create(3569679143, 3982729777), Long_create(1137756396, 3186183822), Long_create(3487185494, 2548947057), Long_create(2143522954, 4078315292), Long_create(4291798741, 3262652233), Long_create(856458615, 2610121787), Long_create(2229327243, 4176194859), Long_create(2642455254, 3340955887), Long_create(395977285, 2672764710), Long_create(633563656, 4276423536), Long_create(3942824761, 3421138828), Long_create(577279431, 2736911063), Long_create(2179810463, 2189528850), Long_create(3487696741, 3503246160),
    Long_create(2790157393, 2802596928), Long_create(3950112833, 2242077542), Long_create(2884206696, 3587324068), Long_create(4025352275, 2869859254), Long_create(4079275279, 2295887403), Long_create(1372879692, 3673419846), Long_create(239310294, 2938735877), Long_create(2768428613, 2350988701), Long_create(2711498862, 3761581922), Long_create(451212171, 3009265538), Long_create(2078956655, 2407412430), Long_create(3326330649, 3851859888), Long_create(84084141, 3081487911), Long_create(3503241150, 2465190328),
    Long_create(451225085, 3944304526), Long_create(3796953905, 3155443620), Long_create(3037563124, 2524354896), Long_create(3142114080, 4038967834), Long_create(3372684723, 3231174267), Long_create(980160860, 2584939414), Long_create(3286244294, 4135903062), Long_create(911008517, 3308722450), Long_create(728806813, 2646977960), Long_create(1166090902, 4235164736), Long_create(73879262, 3388131789), Long_create(918096869, 2710505431), Long_create(4170451332, 2168404344), Long_create(4095741754, 3469446951),
    Long_create(2417599944, 2775557561), Long_create(1075086496, 2220446049), Long_create(3438125312, 3552713678), Long_create(173519872, 2842170943), Long_create(1856802816, 2273736754), Long_create(393904128, 3637978807), Long_create(2892103680, 2910383045), Long_create(2313682944, 2328306436), Long_create(1983905792, 3725290298), Long_create(3305111552, 2980232238), Long_create(67108864, 2384185791), Long_create(2684354560, 3814697265), Long_create(2147483648, 3051757812), Long_create(0, 2441406250), Long_create(0, 3906250000),
    Long_create(0, 3125000000), Long_create(0, 2500000000), Long_create(0, 4000000000), Long_create(0, 3200000000), Long_create(0, 2560000000), Long_create(0, 4096000000), Long_create(0, 3276800000), Long_create(0, 2621440000), Long_create(0, 4194304000), Long_create(0, 3355443200), Long_create(0, 2684354560), Long_create(0, 2147483648), Long_create(3435973836, 3435973836), Long_create(1889785610, 2748779069), Long_create(2370821947, 2199023255), Long_create(3793315115, 3518437208), Long_create(457671715, 2814749767),
    Long_create(2943117749, 2251799813), Long_create(3849994940, 3602879701), Long_create(2221002492, 2882303761), Long_create(917808535, 2305843009), Long_create(3186480574, 3689348814), Long_create(3408177918, 2951479051), Long_create(1867548875, 2361183241), Long_create(1270091283, 3777893186), Long_create(157079567, 3022314549), Long_create(984657113, 2417851639), Long_create(3293438299, 3868562622), Long_create(916763721, 3094850098), Long_create(2451397895, 2475880078), Long_create(3063243173, 3961408125),
    Long_create(2450594538, 3169126500), Long_create(1960475630, 2535301200), Long_create(3136761009, 4056481920), Long_create(2509408807, 3245185536), Long_create(1148533586, 2596148429), Long_create(3555640657, 4153837486), Long_create(1985519066, 3323069989), Long_create(2447408712, 2658455991), Long_create(2197867021, 4253529586), Long_create(899300158, 3402823669), Long_create(1578433585, 2722258935), Long_create(1262746868, 2177807148), Long_create(1161401530, 3484491437), Long_create(3506101601, 2787593149),
    Long_create(3663874740, 2230074519), Long_create(3285219207, 3568119231), Long_create(1769181906, 2854495385), Long_create(1415345525, 2283596308), Long_create(1405559381, 3653754093), Long_create(2842434423, 2923003274), Long_create(3132940998, 2338402619), Long_create(2435725219, 3741444191), Long_create(1089586716, 2993155353), Long_create(2589656291, 2394524282), Long_create(707476229, 3831238852), Long_create(3142961361, 3064991081), Long_create(1655375629, 2451992865), Long_create(2648601007, 3923188584),
    Long_create(2977874265, 3138550867), Long_create(664312493, 2510840694), Long_create(2780886908, 4017345110), Long_create(2224709526, 3213876088), Long_create(3497754539, 2571100870), Long_create(1301439967, 4113761393), Long_create(2759138892, 3291009114), Long_create(3066304573, 2632807291), Long_create(3188100398, 4212491666), Long_create(1691486859, 3369993333), Long_create(3071176406, 2695994666), Long_create(1597947665, 2156795733), Long_create(1697722806, 3450873173), Long_create(3076165163, 2760698538),
    Long_create(4178919049, 2208558830), Long_create(2391303182, 3533694129), Long_create(2772036005, 2826955303), Long_create(3935615722, 2261564242), Long_create(2861011319, 3618502788), Long_create(4006795973, 2894802230), Long_create(3205436779, 2315841784), Long_create(2551718468, 3705346855), Long_create(2041374775, 2964277484), Long_create(2492093279, 2371421987), Long_create(551375410, 3794275180), Long_create(441100328, 3035420144), Long_create(1211873721, 2428336115), Long_create(1938997954, 3885337784),
    Long_create(2410191822, 3108270227), Long_create(210166539, 2486616182), Long_create(1195259923, 3978585891), Long_create(97214479, 3182868713), Long_create(1795758501, 2546294970), Long_create(2873213602, 4074071952), Long_create(580583963, 3259257562), Long_create(3041447548, 2607406049), Long_create(2289335700, 4171849679), Long_create(2690462019, 3337479743), Long_create(3870356534, 2669983794), Long_create(3615590076, 4271974071), Long_create(2033478602, 3417579257), Long_create(4203763259, 2734063405),
    Long_create(3363010607, 2187250724), Long_create(2803836594, 3499601159), Long_create(3102062734, 2799680927), Long_create(763663269, 2239744742), Long_create(2080854690, 3583591587), Long_create(4241664129, 2866873269), Long_create(4252324763, 2293498615), Long_create(2508752324, 3669597785), Long_create(2007001859, 2935678228), Long_create(3323588406, 2348542582), Long_create(1881767613, 3757668132), Long_create(4082394468, 3006134505), Long_create(3265915574, 2404907604), Long_create(2648484541, 3847852167),
    Long_create(400800715, 3078281734), Long_create(1179634031, 2462625387), Long_create(2746407909, 3940200619), Long_create(3056119786, 3152160495), Long_create(2444895829, 2521728396), Long_create(2193846408, 4034765434), Long_create(2614070585, 3227812347), Long_create(373269550, 2582249878), Long_create(4033205117, 4131599804), Long_create(4085557553, 3305279843), Long_create(691465664, 2644223875), Long_create(1106345063, 4230758200), Long_create(885076050, 3384606560), Long_create(708060840, 2707685248),
    Long_create(2284435591, 2166148198), Long_create(2796103486, 3465837117), Long_create(518895870, 2772669694), Long_create(1274110155, 2218135755), Long_create(2038576249, 3549017208), Long_create(3348847917, 2839213766), Long_create(1820084875, 2271371013), Long_create(2053142340, 3634193621), Long_create(783520413, 2907354897), Long_create(3203796708, 2325883917), Long_create(1690100896, 3721414268), Long_create(3070067635, 2977131414), Long_create(3315047567, 2381705131), Long_create(3586089190, 3810728210),
    Long_create(2868871352, 3048582568), Long_create(4013084000, 2438866054), Long_create(3843954022, 3902185687), Long_create(1357176299, 3121748550), Long_create(1085741039, 2497398840), Long_create(1737185663, 3995838144), Long_create(2248741989, 3196670515), Long_create(1798993591, 2557336412), Long_create(3737383206, 4091738259), Long_create(3848900024, 3273390607), Long_create(1361133101, 2618712486), Long_create(459826043, 4189939978), Long_create(2085847752, 3351951982), Long_create(4245658579, 2681561585),
    Long_create(2498086431, 4290498537), Long_create(280482227, 3432398830), Long_create(224385781, 2745919064), Long_create(1038502084, 2196735251), Long_create(4238583712, 3514776401), Long_create(2531873511, 2811821121), Long_create(1166505349, 2249456897), Long_create(2725402018, 3599131035), Long_create(2180321615, 2879304828), Long_create(3462244210, 2303443862), Long_create(2103616899, 3685510180), Long_create(1682893519, 2948408144), Long_create(2205308275, 2358726515), Long_create(3528493240, 3773962424),
    Long_create(3681788051, 3019169939), Long_create(3804423900, 2415335951), Long_create(74124026, 3864537523), Long_create(1777286139, 3091630018), Long_create(3139815829, 2473304014), Long_create(2446724950, 3957286423), Long_create(3675366878, 3165829138), Long_create(363313125, 2532663311), Long_create(3158281377, 4052261297), Long_create(808638183, 3241809038), Long_create(2364897465, 2593447230), Long_create(3783835944, 4149515568), Long_create(450088378, 3319612455), Long_create(360070702, 2655689964),
    Long_create(2294100042, 4249103942), Long_create(117293115, 3399283154), Long_create(952827951, 2719426523), Long_create(2480249279, 2175541218), Long_create(3109405388, 3480865949), Long_create(3346517769, 2784692759), Long_create(3536207675, 2227754207), Long_create(2221958443, 3564406732), Long_create(59579836, 2851525386), Long_create(3483637705, 2281220308), Long_create(419859574, 3649952494), Long_create(1194881118, 2919961995), Long_create(955904894, 2335969596), Long_create(4106428209, 3737551353),
    Long_create(708162189, 2990041083), Long_create(2284516670, 2392032866), Long_create(1937239754, 3827252586), Long_create(690798344, 3061802069), Long_create(1411632134, 2449441655), Long_create(2258611415, 3919106648), Long_create(3524876050, 3135285318), Long_create(242920462, 2508228255), Long_create(388672740, 4013165208), Long_create(2028925110, 3210532166), Long_create(764146629, 2568425733), Long_create(363641147, 4109481173), Long_create(2008899836, 3287584938), Long_create(3325106787, 2630067950),
    Long_create(1025203564, 4208108721), Long_create(4256136688, 3366486976), Long_create(2545915891, 2693189581), Long_create(1177739254, 2154551665), Long_create(1884382806, 3447282664), Long_create(2366499704, 2757826131), Long_create(1034206304, 2206260905), Long_create(1654730086, 3530017448), Long_create(3041770987, 2824013958), Long_create(4151403708, 2259211166), Long_create(629291719, 3614737867), Long_create(3080413753, 2891790293), Long_create(4182317920, 2313432234), Long_create(4114728295, 3701491575),
    Long_create(3291782636, 2961193260), Long_create(2633426109, 2368954608), Long_create(3354488315, 3790327373), Long_create(106610275, 3032261899), Long_create(944281679, 2425809519), Long_create(3228837605, 3881295230), Long_create(2583070084, 3105036184), Long_create(2925449526, 2484028947), Long_create(1244745405, 3974446316), Long_create(136802865, 3179557053), Long_create(1827429210, 2543645642), Long_create(3782880196, 4069833027), Long_create(1308317238, 3255866422), Long_create(3623634168, 2604693137),
    Long_create(2361840832, 4167509020), Long_create(1889472666, 3334007216), Long_create(652584673, 2667205773), Long_create(185142018, 4267529237), Long_create(2725093992, 3414023389), Long_create(3039068653, 2731218711), Long_create(1572261463, 2184974969), Long_create(4233605259, 3495959950), Long_create(3386884207, 2796767960), Long_create(2709507366, 2237414368), Long_create(3476218326, 3579862989), Long_create(3639968120, 2863890391), Long_create(2052981037, 2291112313), Long_create(2425776200, 3665779701),
    Long_create(1081627501, 2932623761), Long_create(6308541, 2346099009), Long_create(1728080585, 3753758414), Long_create(2241457927, 3003006731), Long_create(934172882, 2402405385), Long_create(1494676612, 3843848616), Long_create(336747830, 3075078893), Long_create(1987385183, 2460063114), Long_create(602835915, 3936100983), Long_create(2200255650, 3148880786), Long_create(901211061, 2519104629), Long_create(3159924616, 4030567406), Long_create(1668946233, 3224453925), Long_create(1335156987, 2579563140),
    Long_create(2136251179, 4127301024), Long_create(2567994402, 3301840819), Long_create(2913388981, 2641472655), Long_create(366455074, 4226356249), Long_create(1152157518, 3381084999), Long_create(1780719474, 2704867999), Long_create(2283569038, 2163894399), Long_create(1076730083, 3462231039), Long_create(1720377526, 2769784831), Long_create(517308561, 2215827865), Long_create(827693699, 3545324584), Long_create(1521148418, 2836259667), Long_create(3793899112, 2269007733), Long_create(916277824, 3630412374),
    Long_create(1592015718, 2904329899), Long_create(2132606034, 2323463919), Long_create(835189277, 3717542271), Long_create(4104125258, 2974033816), Long_create(2424306747, 2379227053), Long_create(3019897337, 3806763285), Long_create(2415917869, 3045410628), Long_create(3650721214, 2436328502), Long_create(2405180105, 3898125604), Long_create(2783137543, 3118500483), Long_create(3944496953, 2494800386), Long_create(298240911, 3991680619), Long_create(1097586188, 3193344495), Long_create(878068950, 2554675596),
    Long_create(3981890698, 4087480953), Long_create(608532181, 3269984763), Long_create(2204812663, 2615987810), Long_create(3527700261, 4185580496), Long_create(1963166749, 3348464397), Long_create(4147513777, 2678771517), Long_create(3200048207, 4286034428), Long_create(4278025484, 3428827542), Long_create(1704433468, 2743062034), Long_create(2222540234, 2194449627), Long_create(120090538, 3511119404), Long_create(955065889, 2808895523), Long_create(2482039630, 2247116418), Long_create(3112269949, 3595386269),
    Long_create(3348809418, 2876309015), Long_create(2679047534, 2301047212), Long_create(850502218, 3681675540), Long_create(680401775, 2945340432), Long_create(3121301797, 2356272345), Long_create(699115580, 3770035753), Long_create(2277279382, 3016028602), Long_create(103836587, 2412822882), Long_create(1025131999, 3860516611), Long_create(4256079436, 3088413288), Long_create(827883168, 2470730631), Long_create(3901593088, 3953169009)]);
    otcit_DoubleAnalyzer_exp10Table = $rt_createShortArrayFromData([(-70), (-66), (-63), (-60), (-56), (-53), (-50), (-46), (-43), (-40), (-36), (-33), (-30), (-26), (-23), (-20), (-16), (-13), (-10), (-6), (-3), 0, 4, 7, 10, 14, 17, 20, 23, 27, 30, 33, 37, 40, 43, 47, 50, 53, 57, 60, 63, 67, 70, 73, 77, 80, 83, 87, 90, 93, 97, 100, 103, 107, 110, 113, 116, 120, 123, 126, 130, 133, 136, 140, 143, 146, 150, 153, 156, 160, 163, 166, 170, 173, 176, 180, 183, 186, 190, 193, 196, 200, 203, 206, 210, 213, 216, 219,
    223, 226, 229, 233, 236, 239, 243, 246, 249, 253, 256, 259, 263, 266, 269, 273, 276, 279, 283, 286, 289, 293, 296, 299, 303, 306, 309, 312, 316, 319, 322, 326, 329, 332, 336, 339, 342, 346, 349, 352, 356, 359, 362, 366, 369, 372, 376, 379, 382, 386, 389, 392, 396, 399, 402, 406, 409, 412, 415, 419, 422, 425, 429, 432, 435, 439, 442, 445, 449, 452, 455, 459, 462, 465, 469, 472, 475, 479, 482, 485, 489, 492, 495, 499, 502, 505, 508, 512, 515, 518, 522, 525, 528, 532, 535, 538, 542, 545, 548, 552, 555, 558,
    562, 565, 568, 572, 575, 578, 582, 585, 588, 592, 595, 598, 601, 605, 608, 611, 615, 618, 621, 625, 628, 631, 635, 638, 641, 645, 648, 651, 655, 658, 661, 665, 668, 671, 675, 678, 681, 685, 688, 691, 695, 698, 701, 704, 708, 711, 714, 718, 721, 724, 728, 731, 734, 738, 741, 744, 748, 751, 754, 758, 761, 764, 768, 771, 774, 778, 781, 784, 788, 791, 794, 797, 801, 804, 807, 811, 814, 817, 821, 824, 827, 831, 834, 837, 841, 844, 847, 851, 854, 857, 861, 864, 867, 871, 874, 877, 881, 884, 887, 891, 894, 897,
    900, 904, 907, 910, 914, 917, 920, 924, 927, 930, 934, 937, 940, 944, 947, 950, 954, 957, 960, 964, 967, 970, 974, 977, 980, 984, 987, 990, 993, 997, 1000, 1003, 1007, 1010, 1013, 1017, 1020, 1023, 1027, 1030, 1033, 1037, 1040, 1043, 1047, 1050, 1053, 1057, 1060, 1063, 1067, 1070, 1073, 1077, 1080, 1083, 1086, 1090, 1093, 1096, 1100, 1103, 1106, 1110, 1113, 1116, 1120, 1123, 1126, 1130, 1133, 1136, 1140, 1143, 1146, 1150, 1153, 1156, 1160, 1163, 1166, 1170, 1173, 1176, 1180, 1183, 1186, 1189, 1193, 1196,
    1199, 1203, 1206, 1209, 1213, 1216, 1219, 1223, 1226, 1229, 1233, 1236, 1239, 1243, 1246, 1249, 1253, 1256, 1259, 1263, 1266, 1269, 1273, 1276, 1279, 1282, 1286, 1289, 1292, 1296, 1299, 1302, 1306, 1309, 1312, 1316, 1319, 1322, 1326, 1329, 1332, 1336, 1339, 1342, 1346, 1349, 1352, 1356, 1359, 1362, 1366, 1369, 1372, 1376, 1379, 1382, 1385, 1389, 1392, 1395, 1399, 1402, 1405, 1409, 1412, 1415, 1419, 1422, 1425, 1429, 1432, 1435, 1439, 1442, 1445, 1449, 1452, 1455, 1459, 1462, 1465, 1469, 1472, 1475, 1478,
    1482, 1485, 1488, 1492, 1495, 1498, 1502, 1505, 1508, 1512, 1515, 1518, 1522, 1525, 1528, 1532, 1535, 1538, 1542, 1545, 1548, 1552, 1555, 1558, 1562, 1565, 1568, 1572, 1575, 1578, 1581, 1585, 1588, 1591, 1595, 1598, 1601, 1605, 1608, 1611, 1615, 1618, 1621, 1625, 1628, 1631, 1635, 1638, 1641, 1645, 1648, 1651, 1655, 1658, 1661, 1665, 1668, 1671, 1674, 1678, 1681, 1684, 1688, 1691, 1694, 1698, 1701, 1704, 1708, 1711, 1714, 1718, 1721, 1724, 1728, 1731, 1734, 1738, 1741, 1744, 1748, 1751, 1754, 1758, 1761,
    1764, 1767, 1771, 1774, 1777, 1781, 1784, 1787, 1791, 1794, 1797, 1801, 1804, 1807, 1811, 1814, 1817, 1821, 1824, 1827, 1831, 1834, 1837, 1841, 1844, 1847, 1851, 1854, 1857, 1861, 1864, 1867, 1870, 1874, 1877, 1880, 1884, 1887, 1890, 1894, 1897, 1900, 1904, 1907, 1910, 1914, 1917, 1920, 1924, 1927, 1930, 1934, 1937, 1940, 1944, 1947, 1950, 1954, 1957, 1960, 1963, 1967, 1970, 1973, 1977, 1980, 1983, 1987, 1990, 1993, 1997, 2000, 2003, 2007, 2010, 2013, 2017, 2020, 2023, 2027, 2030, 2033, 2037, 2040, 2043,
    2047, 2050, 2053, 2057, 2060, 2063, 2066, 2070, 2073, 2076, 2080, 2083, 2086, 2090, 2093, 2096, 2100, 2103, 2106, 2110, 2113, 2116, 2120]);
};
function otcit_DoubleAnalyzer$Result() {
    let a = this; jl_Object.call(a);
    a.$mantissa = Long_ZERO;
    a.$exponent = 0;
    a.$sign0 = 0;
}
let otcit_DoubleAnalyzer$Result__init_ = $this => {
    return;
},
otcit_DoubleAnalyzer$Result__init_0 = () => {
    let var_0 = new otcit_DoubleAnalyzer$Result();
    otcit_DoubleAnalyzer$Result__init_(var_0);
    return var_0;
},
jlr_Array = $rt_classWithoutFields(),
jlr_Array_getLength = var$1 => {
    if (var$1 === null || var$1.constructor.$meta.item === 'undefined') {
        $rt_throw(jl_IllegalArgumentException__init_1());
    }
    return var$1.data.length;
},
jlr_Array_newInstance = (var$1, $length) => {
    if (var$1 === null) {
        var$1 = new jl_NullPointerException;
        jl_Exception__init_(var$1);
        $rt_throw(var$1);
    }
    if (var$1 === $rt_cls($rt_voidcls)) {
        var$1 = new jl_IllegalArgumentException;
        jl_Exception__init_(var$1);
        $rt_throw(var$1);
    }
    if ($length >= 0)
        return jlr_Array_newInstanceImpl(var$1.$platformClass, $length);
    var$1 = new jl_NegativeArraySizeException;
    jl_Exception__init_(var$1);
    $rt_throw(var$1);
},
jlr_Array_newInstanceImpl = (var$1, var$2) => {
    if (var$1.$meta.primitive) {
        switch (var$1) {
        }
        ;
    }
    return $rt_createArray(var$1, var$2);
},
jl_ArrayStoreException = $rt_classWithoutFields(jl_RuntimeException),
otcit_FloatAnalyzer$Result = $rt_classWithoutFields(),
jm_Conversion = $rt_classWithoutFields(),
jm_Conversion_digitFitInInt = null,
jm_Conversion_bigRadices = null,
jm_Conversion__clinit_ = () => {
    jm_Conversion_digitFitInInt = $rt_createIntArrayFromData([(-1), (-1), 31, 19, 15, 13, 11, 11, 10, 9, 9, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5]);
    jm_Conversion_bigRadices = $rt_createIntArrayFromData([(-2147483648), 1162261467, 1073741824, 1220703125, 362797056, 1977326743, 1073741824, 387420489, 1000000000, 214358881, 429981696, 815730721, 1475789056, 170859375, 268435456, 410338673, 612220032, 893871739, 1280000000, 1801088541, 113379904, 148035889, 191102976, 244140625, 308915776, 387420489, 481890304, 594823321, 729000000, 887503681, 1073741824, 1291467969, 1544804416, 1838265625, 60466176]);
},
jl_Iterable = $rt_classWithoutFields(0),
ju_Collection = $rt_classWithoutFields(0),
ju_AbstractCollection = $rt_classWithoutFields(),
ju_SequencedCollection = $rt_classWithoutFields(0),
ju_List = $rt_classWithoutFields(0);
function ju_AbstractList() {
    ju_AbstractCollection.call(this);
    this.$modCount = 0;
}
let ju_RandomAccess = $rt_classWithoutFields(0);
function ju_ArrayList() {
    let a = this; ju_AbstractList.call(a);
    a.$array = null;
    a.$size = 0;
}
let ju_ArrayList_add = ($this, $element) => {
    let var$2, var$3, var$4, var$5, var$6;
    var$2 = $this.$size + 1 | 0;
    var$3 = $this.$array.data.length;
    if (var$3 < var$2) {
        var$2 = var$3 >= 1073741823 ? 2147483647 : jl_Math_max(var$2, jl_Math_max(var$3 * 2 | 0, 5));
        var$4 = $this.$array;
        var$5 = var$4.data;
        var$4 = jlr_Array_newInstance(jl_Class_getComponentType(jl_Object_getClass(var$4)), var$2);
        var$3 = jl_Math_min(var$2, var$5.length);
        var$2 = 0;
        while (var$2 < var$3) {
            var$4.data[var$2] = var$5[var$2];
            var$2 = var$2 + 1 | 0;
        }
        $this.$array = var$4;
    }
    var$4 = $this.$array.data;
    var$6 = $this.$size;
    $this.$size = var$6 + 1 | 0;
    var$4[var$6] = $element;
    $this.$modCount = $this.$modCount + 1 | 0;
    return 1;
},
ju_ArrayList_checkIndex = ($this, $index) => {
    let var$2;
    if ($index >= 0 && $index < $this.$size)
        return;
    var$2 = new jl_IndexOutOfBoundsException;
    jl_Exception__init_(var$2);
    $rt_throw(var$2);
},
jt_DecimalFormat$PerMillField = $rt_classWithoutFields(),
jt_DecimalFormat$PerMillField_render = ($this, $format, $buffer) => {
    jl_AbstractStringBuilder_append($buffer, $format.$symbols.$perMill);
},
jt_DecimalFormat$CurrencyField = $rt_classWithoutFields(),
jt_DecimalFormat$CurrencyField_render = ($this, $format, $buffer) => {
    let var$3, var$4, var$5, var$6;
    var$3 = $format.$currency;
    if (var$3 === null)
        jl_AbstractStringBuilder_append($buffer, 164);
    else {
        $format = $format.$symbols.$locale0;
        var$4 = $format.$languageCode;
        var$5 = $format.$countryCode;
        $format = ju_Currency_getCurrencyCode(var$3);
        var$5 = otciu_CLDRHelper_getCode(var$4, var$5);
        if (otciu_CLDRHelper_$$metadata$$21 === null)
            otciu_CLDRHelper_$$metadata$$21 = otciu_CLDRHelper_getCurrencyMap$$create();
        a: {
            var$6 = otciu_CLDRHelper_$$metadata$$21;
            if (var$6.hasOwnProperty($rt_ustr(var$5))) {
                var$5 = var$6[$rt_ustr(var$5)];
                if (var$5.hasOwnProperty($rt_ustr($format))) {
                    $format = var$5[$rt_ustr($format)];
                    break a;
                }
            }
            if (var$6.hasOwnProperty($rt_ustr(var$4))) {
                var$5 = var$6[$rt_ustr(var$4)];
                if (var$5.hasOwnProperty($rt_ustr($format))) {
                    $format = var$5[$rt_ustr($format)];
                    break a;
                }
            }
            $format = null;
        }
        jl_AbstractStringBuilder_append0($buffer, $format !== null && !jl_String_isEmpty(($format.symbol !== null ? $rt_str($format.symbol) : null)) ? ($format.symbol !== null ? $rt_str($format.symbol) : null) : ju_Currency_getCurrencyCode(var$3));
    }
},
jt_DecimalFormat$PercentField = $rt_classWithoutFields(),
jt_DecimalFormat$PercentField__init_0 = $this => {
    return;
},
jt_DecimalFormat$PercentField__init_ = () => {
    let var_0 = new jt_DecimalFormat$PercentField();
    jt_DecimalFormat$PercentField__init_0(var_0);
    return var_0;
},
jt_DecimalFormat$PercentField_render = ($this, $format, $buffer) => {
    jl_AbstractStringBuilder_append($buffer, $format.$symbols.$percent);
},
jl_NegativeArraySizeException = $rt_classWithoutFields(jl_RuntimeException),
ju_Iterator = $rt_classWithoutFields(0);
function ju_AbstractList$1() {
    let a = this; jl_Object.call(a);
    a.$index1 = 0;
    a.$modCount1 = 0;
    a.$size0 = 0;
    a.$removeIndex = 0;
    a.$this$0 = null;
}
let ju_AbstractList$1_hasNext = $this => {
    return $this.$index1 >= $this.$size0 ? 0 : 1;
},
ju_ConcurrentModificationException = $rt_classWithoutFields(jl_RuntimeException);
$rt_packages([-1, "java", 0, "lang", -1, "org", 2, "teavm", 3, "jso", 4, "impl", -1, "io", 6, "github", 7, "betterclient", 8, "shaguess"
]);
$rt_metadata([jl_Object, "Object", 1, 0, [], 0, 3, 0, 0, ["$toString", $rt_wrapFunction0(jl_Object_toString)],
jlr_AnnotatedElement, 0, jl_Object, [], 3, 3, 0, 0, 0,
jlr_Type, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_Class, 0, jl_Object, [jlr_AnnotatedElement, jlr_Type], 4, 3, 0, 0, ["$toString", $rt_wrapFunction0(jl_Class_toString)],
otji_JS, 0, jl_Object, [], 4, 3, 0, 0, 0,
otp_Platform, 0, jl_Object, [], 4, 3, 0, 0, 0,
jl_Throwable, 0, jl_Object, [], 0, 3, 0, 0, 0,
jl_Exception, 0, jl_Throwable, [], 0, 3, 0, 0, 0,
jl_RuntimeException, 0, jl_Exception, [], 0, 3, 0, 0, 0,
jl_ClassCastException, 0, jl_RuntimeException, [], 0, 3, 0, 0, 0,
ji_Serializable, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_Comparable, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_CharSequence, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_String, 0, jl_Object, [ji_Serializable, jl_Comparable, jl_CharSequence], 0, 3, 0, 0, ["$charAt", $rt_wrapFunction1(jl_String_charAt), "$length", $rt_wrapFunction0(jl_String_length), "$toString", $rt_wrapFunction0(jl_String_toString)],
jl_Number, 0, jl_Object, [ji_Serializable], 1, 3, 0, 0, 0,
jl_Integer, "Integer", 1, jl_Number, [jl_Comparable], 0, 3, 0, 0, ["$toString", $rt_wrapFunction0(jl_Integer_toString0)],
jl_AbstractStringBuilder, 0, jl_Object, [ji_Serializable, jl_CharSequence], 0, 0, 0, 0, ["$ensureCapacity", $rt_wrapFunction1(jl_AbstractStringBuilder_ensureCapacity), "$toString", $rt_wrapFunction0(jl_AbstractStringBuilder_toString)],
jl_Appendable, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_StringBuilder, 0, jl_AbstractStringBuilder, [jl_Appendable], 0, 3, 0, 0, ["$charAt", $rt_wrapFunction1(jl_StringBuilder_charAt), "$length", $rt_wrapFunction0(jl_StringBuilder_length), "$toString", $rt_wrapFunction0(jl_StringBuilder_toString), "$ensureCapacity", $rt_wrapFunction1(jl_StringBuilder_ensureCapacity), "$insert1", $rt_wrapFunction2(jl_StringBuilder_insert), "$insert", $rt_wrapFunction2(jl_StringBuilder_insert0)],
igbs_Main, 0, jl_Object, [], 0, 3, 0, igbs_Main_$callClinit, 0,
otci_IntegerUtil, 0, jl_Object, [], 4, 3, 0, 0, 0,
otj_JSObject, 0, jl_Object, [], 3, 3, 0, 0, 0,
otjdx_Node, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
otjdx_Document, 0, jl_Object, [otjdx_Node], 3, 3, 0, 0, 0,
otjde_EventTarget, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
otjdh_HTMLDocument, 0, jl_Object, [otjdx_Document, otjde_EventTarget], 1, 3, 0, 0, 0,
otjde_EventListener, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
igbs_Main$main$lambda$_1_0, "Main$main$lambda$_1_0", 9, jl_Object, [otjde_EventListener], 0, 3, 0, 0, 0,
otji_JSWrapper, "JSWrapper", 5, jl_Object, [], 4, 3, 0, 0, ["$toString", $rt_wrapFunction0(otji_JSWrapper_toString)],
ju_Comparator, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_String$_clinit_$lambda$_115_0, 0, jl_Object, [ju_Comparator], 0, 3, 0, 0, 0,
jl_Character, 0, jl_Object, [jl_Comparable], 0, 3, 0, 0, 0,
otjf_JSMapping, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
igbs_Main$startGame$lambda$_4_0, "Main$startGame$lambda$_4_0", 9, jl_Object, [otjf_JSMapping], 0, 3, 0, 0, 0,
ju_Objects, 0, jl_Object, [], 4, 3, 0, 0, 0,
jur_RandomGenerator, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_Random, 0, jl_Object, [jur_RandomGenerator, ji_Serializable], 0, 3, 0, 0, 0,
jl_IndexOutOfBoundsException, 0, jl_RuntimeException, [], 0, 3, 0, 0, 0,
jl_IllegalArgumentException, 0, jl_RuntimeException, [], 0, 3, 0, 0, 0,
jl_NumberFormatException, 0, jl_IllegalArgumentException, [], 0, 3, 0, 0, 0,
otjc_JSObjects, 0, jl_Object, [], 4, 3, 0, 0, 0,
otji_JSWrapper$Helper, 0, jl_Object, [], 0, 0, 0, otji_JSWrapper$Helper_$callClinit, 0,
otjc_JSUndefined, 0, jl_Object, [otj_JSObject], 0, 3, 0, 0, 0,
otjc_JSWeakRef, 0, jl_Object, [otj_JSObject], 1, 3, 0, 0, 0,
otjc_JSFinalizationRegistryConsumer, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
otji_JSWrapper$Helper$_clinit_$lambda$_3_0, "JSWrapper$Helper$<clinit>$lambda$_3_0", 5, jl_Object, [otjc_JSFinalizationRegistryConsumer], 0, 3, 0, 0, 0,
otji_JSWrapper$Helper$_clinit_$lambda$_3_1, "JSWrapper$Helper$<clinit>$lambda$_3_1", 5, jl_Object, [otjc_JSFinalizationRegistryConsumer], 0, 3, 0, 0, 0,
jl_StringIndexOutOfBoundsException, 0, jl_IndexOutOfBoundsException, [], 0, 3, 0, 0, 0,
jl_Math, 0, jl_Object, [], 4, 3, 0, 0, 0,
jl_AutoCloseable, 0, jl_Object, [], 3, 3, 0, 0, 0]);
$rt_metadata([ji_Closeable, 0, jl_Object, [jl_AutoCloseable], 3, 3, 0, 0, 0,
ji_Flushable, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_Formatter, 0, jl_Object, [ji_Closeable, ji_Flushable], 4, 3, 0, 0, 0,
jl_Cloneable, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_Locale, 0, jl_Object, [jl_Cloneable, ji_Serializable], 4, 3, 0, ju_Locale_$callClinit, 0,
ju_Formatter$FormatWriter, 0, jl_Object, [], 0, 0, 0, 0, 0,
ji_IOException, 0, jl_Exception, [], 0, 3, 0, 0, 0,
jl_IllegalStateException, 0, jl_RuntimeException, [], 0, 3, 0, 0, 0,
ju_FormatterClosedException, 0, jl_IllegalStateException, [], 0, 3, 0, 0, 0,
otciu_CLDRHelper, 0, jl_Object, [], 4, 3, 0, 0, 0,
otpp_ResourceAccessor, 0, jl_Object, [], 4, 0, 0, 0, 0,
jl_NullPointerException, 0, jl_RuntimeException, [], 0, 3, 0, 0, 0,
ju_IllegalFormatException, 0, jl_IllegalArgumentException, [], 0, 3, 0, 0, 0,
ju_UnknownFormatConversionException, 0, ju_IllegalFormatException, [], 0, 3, 0, 0, 0,
ju_DuplicateFormatFlagsException, 0, ju_IllegalFormatException, [], 0, 3, 0, 0, 0,
jl_Boolean, 0, jl_Object, [ji_Serializable, jl_Comparable], 0, 3, 0, 0, 0,
ju_IllegalFormatPrecisionException, 0, ju_IllegalFormatException, [], 0, 3, 0, 0, 0,
jl_Byte, 0, jl_Number, [jl_Comparable], 0, 3, 0, 0, 0,
jl_Short, 0, jl_Number, [jl_Comparable], 0, 3, 0, 0, 0,
ju_IllegalFormatCodePointException, 0, ju_IllegalFormatException, [], 0, 3, 0, 0, 0,
ju_IllegalFormatConversionException, 0, ju_IllegalFormatException, [], 0, 3, 0, 0, 0,
jl_Long, 0, jl_Number, [jl_Comparable], 0, 3, 0, 0, 0,
jt_DecimalFormatSymbols, 0, jl_Object, [jl_Cloneable], 0, 3, 0, 0, 0,
jt_Format, 0, jl_Object, [ji_Serializable, jl_Cloneable], 1, 3, 0, 0, 0,
jt_NumberFormat, 0, jt_Format, [], 1, 3, 0, 0, 0,
jt_DecimalFormat, 0, jt_NumberFormat, [], 0, 3, 0, 0, 0,
ju_Formattable, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_Double, 0, jl_Number, [jl_Comparable], 0, 3, 0, 0, 0,
jl_Float, 0, jl_Number, [jl_Comparable], 0, 3, 0, 0, 0,
jm_BigDecimal, 0, jl_Number, [jl_Comparable, ji_Serializable], 0, 3, 0, jm_BigDecimal_$callClinit, 0,
ju_FormatFlagsConversionMismatchException, 0, ju_IllegalFormatException, [], 0, 3, 0, 0, 0,
ju_IllegalFormatFlagsException, 0, ju_IllegalFormatException, [], 0, 3, 0, 0, 0,
ju_MissingFormatWidthException, 0, ju_IllegalFormatException, [], 0, 3, 0, 0, 0,
jl_StringBuffer, 0, jl_AbstractStringBuilder, [jl_Appendable], 0, 3, 0, 0, ["$ensureCapacity", $rt_wrapFunction1(jl_StringBuffer_ensureCapacity), "$insert1", $rt_wrapFunction2(jl_StringBuffer_insert0), "$insert", $rt_wrapFunction2(jl_StringBuffer_insert)],
jt_FieldPosition, 0, jl_Object, [], 0, 3, 0, 0, 0,
jt_DecimalFormat$FormatField, 0, jl_Object, [], 3, 0, 0, 0, 0,
jt_DecimalFormat$TextField, 0, jl_Object, [jt_DecimalFormat$FormatField], 0, 0, 0, 0, ["$render", $rt_wrapFunction2(jt_DecimalFormat$TextField_render)],
jl_Enum, 0, jl_Object, [jl_Comparable, ji_Serializable], 1, 3, 0, 0, 0,
jm_RoundingMode, 0, jl_Enum, [], 12, 3, 0, 0, 0,
ju_Currency, 0, jl_Object, [ji_Serializable], 4, 3, 0, 0, 0,
jm_Multiplication, 0, jl_Object, [], 0, 0, 0, jm_Multiplication_$callClinit, 0,
otcic_CurrencyHelper, 0, jl_Object, [], 4, 3, 0, 0, 0,
jm_BigInteger, 0, jl_Number, [jl_Comparable, ji_Serializable], 0, 3, 0, 0, 0,
ju_Map, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_AbstractMap, 0, jl_Object, [ju_Map], 1, 3, 0, 0, 0,
ju_HashMap, 0, ju_AbstractMap, [jl_Cloneable, ji_Serializable], 0, 3, 0, 0, 0,
ju_Map$Entry, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_MapEntry, 0, jl_Object, [ju_Map$Entry, jl_Cloneable], 0, 0, 0, 0, 0,
jl_CloneNotSupportedException, 0, jl_Exception, [], 0, 3, 0, 0, 0,
jl_Error, 0, jl_Throwable, [], 0, 3, 0, 0, 0]);
$rt_metadata([jl_AssertionError, 0, jl_Error, [], 0, 3, 0, 0, 0,
jt_DecimalFormatParser, 0, jl_Object, [], 0, 0, 0, 0, 0,
ju_Arrays, 0, jl_Object, [], 0, 3, 0, 0, 0,
ju_HashMap$HashEntry, 0, ju_MapEntry, [], 0, 0, 0, 0, 0,
jt_DecimalFormat$1, 0, jl_Object, [], 32, 0, 0, jt_DecimalFormat$1_$callClinit, 0,
jl_ArithmeticException, 0, jl_RuntimeException, [], 0, 3, 0, 0, 0,
jm_BitLevel, 0, jl_Object, [], 0, 0, 0, 0, 0,
jm_Elementary, 0, jl_Object, [], 0, 0, 0, 0, 0,
jm_Division, 0, jl_Object, [], 0, 0, 0, 0, 0,
jl_System, 0, jl_Object, [], 4, 3, 0, 0, 0,
jt_DecimalFormat$MinusField, 0, jl_Object, [jt_DecimalFormat$FormatField], 0, 0, 0, 0, ["$render", $rt_wrapFunction2(jt_DecimalFormat$MinusField_render)],
jt_DecimalFormat$Constants, 0, jl_Object, [], 0, 0, 0, 0, 0,
otcit_DoubleAnalyzer, 0, jl_Object, [], 4, 3, 0, 0, 0,
otcit_DoubleAnalyzer$Result, 0, jl_Object, [], 0, 3, 0, 0, 0,
jlr_Array, 0, jl_Object, [], 4, 3, 0, 0, 0,
jl_ArrayStoreException, 0, jl_RuntimeException, [], 0, 3, 0, 0, 0,
otcit_FloatAnalyzer$Result, 0, jl_Object, [], 0, 3, 0, 0, 0,
jm_Conversion, 0, jl_Object, [], 0, 0, 0, 0, 0,
jl_Iterable, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_Collection, 0, jl_Object, [jl_Iterable], 3, 3, 0, 0, 0,
ju_AbstractCollection, 0, jl_Object, [ju_Collection], 1, 3, 0, 0, 0,
ju_SequencedCollection, 0, jl_Object, [ju_Collection], 3, 3, 0, 0, 0,
ju_List, 0, jl_Object, [ju_SequencedCollection], 3, 3, 0, 0, 0,
ju_AbstractList, 0, ju_AbstractCollection, [ju_List], 1, 3, 0, 0, 0,
ju_RandomAccess, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_ArrayList, 0, ju_AbstractList, [jl_Cloneable, ji_Serializable, ju_RandomAccess], 0, 3, 0, 0, 0,
jt_DecimalFormat$PerMillField, 0, jl_Object, [jt_DecimalFormat$FormatField], 0, 0, 0, 0, ["$render", $rt_wrapFunction2(jt_DecimalFormat$PerMillField_render)],
jt_DecimalFormat$CurrencyField, 0, jl_Object, [jt_DecimalFormat$FormatField], 0, 0, 0, 0, ["$render", $rt_wrapFunction2(jt_DecimalFormat$CurrencyField_render)],
jt_DecimalFormat$PercentField, 0, jl_Object, [jt_DecimalFormat$FormatField], 0, 0, 0, 0, ["$render", $rt_wrapFunction2(jt_DecimalFormat$PercentField_render)],
jl_NegativeArraySizeException, 0, jl_RuntimeException, [], 0, 3, 0, 0, 0,
ju_Iterator, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_AbstractList$1, 0, jl_Object, [ju_Iterator], 0, 0, 0, 0, 0,
ju_ConcurrentModificationException, 0, jl_RuntimeException, [], 0, 3, 0, 0, 0]);
let $rt_charArrayCls = $rt_arraycls($rt_charcls),
$rt_shortArrayCls = $rt_arraycls($rt_shortcls),
$rt_intArrayCls = $rt_arraycls($rt_intcls),
$rt_longArrayCls = $rt_arraycls($rt_longcls);
$rt_stringPool(["interface ", "class ", "", "null", "String is empty", "String contains invalid digits: ", "String contains digits out of radix ", ": ", "The value is too big for integer type", "The value is too big for int type: ", "Illegal radix: ", "String is null", "0", "%08d", "Input: ", "\nTarget: ", "\nPoints: ", "/8\nTotal: ", "object", "function", "string", "number", "undefined", "en", "CA", "fr", "zh", "CN", "FR", "de", "DE", "it", "IT", "ja", "JP", "ko", "KR", "TW", "GB", "US", "+ ", "0-", "(", ")",
"+", " ", "false", "true", "Can\'t convert code point ", " to char", "0x", "--#+ 0,(<", "Illegal format flags ", " for conversion ", "Duplicate format flags: ", "Unknown format conversion: ", "Illegal precision: ", "Can\'t format argument of ", " using ", " conversion", "This exception should not been thrown", "Currency not found: ", "-", "Can\'t avoid rounding", "Overflow", "Underflow", "Illegal format flags: ", "Missing format with for specifier ", "UP", "DOWN", "CEILING", "FLOOR", "HALF_UP", "HALF_DOWN",
"HALF_EVEN", "UNNECESSARY", "power of ten too big", "Negative bit address", "Negative exponent", "BigInteger divide by zero", "Positive number pattern not found in ", "Expected \';\' at ", " in ", "Prefix contains special character at ", "Quote opened at ", " was not closed in ", "Group separator found at fractional part at ", "Unexpected second decimal separator at ", "Unexpected \'0\' at optional digit part at ", "Unexpected char at exponent at ", "Pattern does not specify exponent digits at ", "Unexpected \'#\' at non-optional digit part at ",
"Two group separators at ", "Pattern does not specify integer digits at ", "Group separator at the end of number at ", "Either src or dest is null"]);
jl_String.prototype.toString = function() {
    return $rt_ustr(this);
};
jl_String.prototype.valueOf = jl_String.prototype.toString;
jl_Object.prototype.toString = function() {
    return $rt_ustr(jl_Object_toString(this));
};
jl_Object.prototype.__teavm_class__ = function() {
    return $dbg_class(this);
};
let $rt_export_main = $rt_mainStarter(igbs_Main_main);
$rt_export_main.javaException = $rt_javaException;
let $rt_jso_marker = Symbol('jsoClass');
(() => {
    let c;
    c = igbs_Main$main$lambda$_1_0.prototype;
    c.handleEvent = $rt_callWithReceiver(igbs_Main$main$lambda$_1_0_handleEvent$exported$0);
    c = igbs_Main$startGame$lambda$_4_0.prototype;
    c.apply = $rt_callWithReceiver(igbs_Main$startGame$lambda$_4_0_apply$exported$0);
    c = otji_JSWrapper$Helper$_clinit_$lambda$_3_0.prototype;
    c.accept = $rt_callWithReceiver(otji_JSWrapper$Helper$_clinit_$lambda$_3_0_accept$exported$0);
    c = otji_JSWrapper$Helper$_clinit_$lambda$_3_1.prototype;
    c.accept = $rt_callWithReceiver(otji_JSWrapper$Helper$_clinit_$lambda$_3_1_accept$exported$0);
})();
$rt_exports.main = $rt_export_main;
}));
