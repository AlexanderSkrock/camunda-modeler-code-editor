(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/accessors.js":
/*!**************************!*\
  !*** ./lib/accessors.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAccessor: () => (/* binding */ getAccessor),
/* harmony export */   registerAccessor: () => (/* binding */ registerAccessor),
/* harmony export */   registerAccessors: () => (/* binding */ registerAccessors)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./lib/config.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./lib/utils.js");




function isString(variable) {
  return typeof variable === 'string' || variable instanceof String;
}

function getAccessor(typeNameOrElement) {
  const typeName = isString(typeNameOrElement) ? typeNameOrElement : (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getType)(typeNameOrElement);
  return (0,_config__WEBPACK_IMPORTED_MODULE_0__.ensureConfig)().accessors[typeName];
}

function registerAccessor(typeName, accessors) {
  (0,_config__WEBPACK_IMPORTED_MODULE_0__.ensureConfig)().accessors[typeName] = accessors;
}

function registerAccessors(typeToAccessors) {
  Object.entries(typeToAccessors).forEach(([ typeName, accessors ]) => {
    registerAccessor(typeName, accessors);
  });
}


/***/ }),

/***/ "./lib/config.js":
/*!***********************!*\
  !*** ./lib/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ensureConfig: () => (/* binding */ ensureConfig)
/* harmony export */ });
const DEFAULT_CONFIG = {
  defaultEditor: null,
  editors: {},
  accessors: {},
  types: {},
  scopeProviders: {},
};

function ensureConfig() {
  if (!globalThis['code-editor']) {
    globalThis['code-editor'] = DEFAULT_CONFIG;
  }
  return globalThis['code-editor'];
}


/***/ }),

/***/ "./lib/editors.js":
/*!************************!*\
  !*** ./lib/editors.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEditor: () => (/* binding */ getEditor),
/* harmony export */   registerDefaultEditor: () => (/* binding */ registerDefaultEditor),
/* harmony export */   registerEditor: () => (/* binding */ registerEditor)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./lib/config.js");


function getEditor(language) {
  const config = (0,_config__WEBPACK_IMPORTED_MODULE_0__.ensureConfig)();
  return config.editors[language] || config.defaultEditor;
}

function registerDefaultEditor(defaultEditor) {
  (0,_config__WEBPACK_IMPORTED_MODULE_0__.ensureConfig)().defaultEditor = defaultEditor;
}

function registerEditor(language, editor) {
  (0,_config__WEBPACK_IMPORTED_MODULE_0__.ensureConfig)().editors[language] = editor;
}


/***/ }),

/***/ "./lib/scope.js":
/*!**********************!*\
  !*** ./lib/scope.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getScopeProvider: () => (/* binding */ getScopeProvider),
/* harmony export */   getScopeProviders: () => (/* binding */ getScopeProviders),
/* harmony export */   registerScopeProvider: () => (/* binding */ registerScopeProvider),
/* harmony export */   registerScopeProviders: () => (/* binding */ registerScopeProviders)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./lib/config.js");



function getScopeProvider(identifier) {
  return (0,_config__WEBPACK_IMPORTED_MODULE_0__.ensureConfig)().scopeProviders[identifier];
}

function getScopeProviders() {
  return [
    ...Object.values((0,_config__WEBPACK_IMPORTED_MODULE_0__.ensureConfig)().scopeProviders),
  ];
}

function registerScopeProvider(identifier, provider) {
  (0,_config__WEBPACK_IMPORTED_MODULE_0__.ensureConfig)().scopeProviders[identifier] = provider;
}

function registerScopeProviders(identifierToProviders) {
  Object.entries(identifierToProviders).forEach(([ identifier, provider ]) => {
    registerScopeProvider(identifier, provider);
  });
}


/***/ }),

/***/ "./lib/types.js":
/*!**********************!*\
  !*** ./lib/types.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEditableType: () => (/* binding */ getEditableType),
/* harmony export */   getEditableTypes: () => (/* binding */ getEditableTypes),
/* harmony export */   registerEditableType: () => (/* binding */ registerEditableType),
/* harmony export */   registerEditableTypes: () => (/* binding */ registerEditableTypes)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./lib/config.js");


function getEditableTypes() {
  return Object.values((0,_config__WEBPACK_IMPORTED_MODULE_0__.ensureConfig)().types);
}

function getEditableType(id) {
  return (0,_config__WEBPACK_IMPORTED_MODULE_0__.ensureConfig)().types[id];
}

function registerEditableType(typeImplementation) {
  (0,_config__WEBPACK_IMPORTED_MODULE_0__.ensureConfig)().types[typeImplementation.id] = typeImplementation;
}

function registerEditableTypes(typeImplementations) {
  typeImplementations.forEach(typeImplementation => registerEditableType(typeImplementation));
}


/***/ }),

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getType: () => (/* binding */ getType)
/* harmony export */ });
/* harmony import */ var bpmn_js_lib_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bpmn-js/lib/util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");


function getType(element) {
  const businessObject = (0,bpmn_js_lib_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__.getBusinessObject)(element);
  if (businessObject) {
    const descriptor = businessObject.$descriptor;
    if (descriptor) {
      return descriptor.name;
    }
  }
  console.warn('unable to find the model descriptor');
}


/***/ }),

/***/ "./node_modules/bpmn-js/lib/util/ModelUtil.js":
/*!****************************************************!*\
  !*** ./node_modules/bpmn-js/lib/util/ModelUtil.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBusinessObject: () => (/* binding */ getBusinessObject),
/* harmony export */   getDi: () => (/* binding */ getDi),
/* harmony export */   is: () => (/* binding */ is),
/* harmony export */   isAny: () => (/* binding */ isAny)
/* harmony export */ });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! min-dash */ "./node_modules/min-dash/dist/index.esm.js");


/**
 * @typedef { import('../model/Types').Element } Element
 * @typedef { import('../model/Types').ModdleElement } ModdleElement
 */

/**
 * Is an element of the given BPMN type?
 *
 * @param  {Element|ModdleElement} element
 * @param  {string} type
 *
 * @return {boolean}
 */
function is(element, type) {
  var bo = getBusinessObject(element);

  return bo && (typeof bo.$instanceOf === 'function') && bo.$instanceOf(type);
}


/**
 * Return true if element has any of the given types.
 *
 * @param {Element|ModdleElement} element
 * @param {string[]} types
 *
 * @return {boolean}
 */
function isAny(element, types) {
  return (0,min_dash__WEBPACK_IMPORTED_MODULE_0__.some)(types, function(t) {
    return is(element, t);
  });
}

/**
 * Return the business object for a given element.
 *
 * @param {Element|ModdleElement} element
 *
 * @return {ModdleElement}
 */
function getBusinessObject(element) {
  return (element && element.businessObject) || element;
}

/**
 * Return the di object for a given element.
 *
 * @param {Element} element
 *
 * @return {ModdleElement}
 */
function getDi(element) {
  return element && element.di;
}

/***/ }),

/***/ "./node_modules/min-dash/dist/index.esm.js":
/*!*************************************************!*\
  !*** ./node_modules/min-dash/dist/index.esm.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assign: () => (/* binding */ assign),
/* harmony export */   bind: () => (/* binding */ bind),
/* harmony export */   debounce: () => (/* binding */ debounce),
/* harmony export */   ensureArray: () => (/* binding */ ensureArray),
/* harmony export */   every: () => (/* binding */ every),
/* harmony export */   filter: () => (/* binding */ filter),
/* harmony export */   find: () => (/* binding */ find),
/* harmony export */   findIndex: () => (/* binding */ findIndex),
/* harmony export */   flatten: () => (/* binding */ flatten),
/* harmony export */   forEach: () => (/* binding */ forEach),
/* harmony export */   get: () => (/* binding */ get),
/* harmony export */   groupBy: () => (/* binding */ groupBy),
/* harmony export */   has: () => (/* binding */ has),
/* harmony export */   isArray: () => (/* binding */ isArray),
/* harmony export */   isDefined: () => (/* binding */ isDefined),
/* harmony export */   isFunction: () => (/* binding */ isFunction),
/* harmony export */   isNil: () => (/* binding */ isNil),
/* harmony export */   isNumber: () => (/* binding */ isNumber),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   isString: () => (/* binding */ isString),
/* harmony export */   isUndefined: () => (/* binding */ isUndefined),
/* harmony export */   keys: () => (/* binding */ keys),
/* harmony export */   map: () => (/* binding */ map),
/* harmony export */   matchPattern: () => (/* binding */ matchPattern),
/* harmony export */   merge: () => (/* binding */ merge),
/* harmony export */   omit: () => (/* binding */ omit),
/* harmony export */   pick: () => (/* binding */ pick),
/* harmony export */   reduce: () => (/* binding */ reduce),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   size: () => (/* binding */ size),
/* harmony export */   some: () => (/* binding */ some),
/* harmony export */   sortBy: () => (/* binding */ sortBy),
/* harmony export */   throttle: () => (/* binding */ throttle),
/* harmony export */   unionBy: () => (/* binding */ unionBy),
/* harmony export */   uniqueBy: () => (/* binding */ uniqueBy),
/* harmony export */   values: () => (/* binding */ values),
/* harmony export */   without: () => (/* binding */ without)
/* harmony export */ });
/**
 * Flatten array, one level deep.
 *
 * @template T
 *
 * @param {T[][] | T[] | null} [arr]
 *
 * @return {T[]}
 */
function flatten(arr) {
  return Array.prototype.concat.apply([], arr);
}

const nativeToString = Object.prototype.toString;
const nativeHasOwnProperty = Object.prototype.hasOwnProperty;

function isUndefined(obj) {
  return obj === undefined;
}

function isDefined(obj) {
  return obj !== undefined;
}

function isNil(obj) {
  return obj == null;
}

function isArray(obj) {
  return nativeToString.call(obj) === '[object Array]';
}

function isObject(obj) {
  return nativeToString.call(obj) === '[object Object]';
}

function isNumber(obj) {
  return nativeToString.call(obj) === '[object Number]';
}

/**
 * @param {any} obj
 *
 * @return {boolean}
 */
function isFunction(obj) {
  const tag = nativeToString.call(obj);

  return (
    tag === '[object Function]' ||
    tag === '[object AsyncFunction]' ||
    tag === '[object GeneratorFunction]' ||
    tag === '[object AsyncGeneratorFunction]' ||
    tag === '[object Proxy]'
  );
}

function isString(obj) {
  return nativeToString.call(obj) === '[object String]';
}


/**
 * Ensure collection is an array.
 *
 * @param {Object} obj
 */
function ensureArray(obj) {

  if (isArray(obj)) {
    return;
  }

  throw new Error('must supply array');
}

/**
 * Return true, if target owns a property with the given key.
 *
 * @param {Object} target
 * @param {String} key
 *
 * @return {Boolean}
 */
function has(target, key) {
  return !isNil(target) && nativeHasOwnProperty.call(target, key);
}

/**
 * @template T
 * @typedef { (
 *   ((e: T) => boolean) |
 *   ((e: T, idx: number) => boolean) |
 *   ((e: T, key: string) => boolean) |
 *   string |
 *   number
 * ) } Matcher
 */

/**
 * @template T
 * @template U
 *
 * @typedef { (
 *   ((e: T) => U) | string | number
 * ) } Extractor
 */


/**
 * @template T
 * @typedef { (val: T, key: any) => boolean } MatchFn
 */

/**
 * @template T
 * @typedef { T[] } ArrayCollection
 */

/**
 * @template T
 * @typedef { { [key: string]: T } } StringKeyValueCollection
 */

/**
 * @template T
 * @typedef { { [key: number]: T } } NumberKeyValueCollection
 */

/**
 * @template T
 * @typedef { StringKeyValueCollection<T> | NumberKeyValueCollection<T> } KeyValueCollection
 */

/**
 * @template T
 * @typedef { KeyValueCollection<T> | ArrayCollection<T> } Collection
 */

/**
 * Find element in collection.
 *
 * @template T
 * @param {Collection<T>} collection
 * @param {Matcher<T>} matcher
 *
 * @return {Object}
 */
function find(collection, matcher) {

  const matchFn = toMatcher(matcher);

  let match;

  forEach(collection, function(val, key) {
    if (matchFn(val, key)) {
      match = val;

      return false;
    }
  });

  return match;

}


/**
 * Find element index in collection.
 *
 * @template T
 * @param {Collection<T>} collection
 * @param {Matcher<T>} matcher
 *
 * @return {number | string | undefined}
 */
function findIndex(collection, matcher) {

  const matchFn = toMatcher(matcher);

  let idx = isArray(collection) ? -1 : undefined;

  forEach(collection, function(val, key) {
    if (matchFn(val, key)) {
      idx = key;

      return false;
    }
  });

  return idx;
}


/**
 * Filter elements in collection.
 *
 * @template T
 * @param {Collection<T>} collection
 * @param {Matcher<T>} matcher
 *
 * @return {T[]} result
 */
function filter(collection, matcher) {

  const matchFn = toMatcher(matcher);

  let result = [];

  forEach(collection, function(val, key) {
    if (matchFn(val, key)) {
      result.push(val);
    }
  });

  return result;
}


/**
 * Iterate over collection; returning something
 * (non-undefined) will stop iteration.
 *
 * @template T
 * @param {Collection<T>} collection
 * @param { ((item: T, idx: number) => (boolean|void)) | ((item: T, key: string) => (boolean|void)) } iterator
 *
 * @return {T} return result that stopped the iteration
 */
function forEach(collection, iterator) {

  let val,
      result;

  if (isUndefined(collection)) {
    return;
  }

  const convertKey = isArray(collection) ? toNum : identity;

  for (let key in collection) {

    if (has(collection, key)) {
      val = collection[key];

      result = iterator(val, convertKey(key));

      if (result === false) {
        return val;
      }
    }
  }
}

/**
 * Return collection without element.
 *
 * @template T
 * @param {ArrayCollection<T>} arr
 * @param {Matcher<T>} matcher
 *
 * @return {T[]}
 */
function without(arr, matcher) {

  if (isUndefined(arr)) {
    return [];
  }

  ensureArray(arr);

  const matchFn = toMatcher(matcher);

  return arr.filter(function(el, idx) {
    return !matchFn(el, idx);
  });

}


/**
 * Reduce collection, returning a single result.
 *
 * @template T
 * @template V
 *
 * @param {Collection<T>} collection
 * @param {(result: V, entry: T, index: any) => V} iterator
 * @param {V} result
 *
 * @return {V} result returned from last iterator
 */
function reduce(collection, iterator, result) {

  forEach(collection, function(value, idx) {
    result = iterator(result, value, idx);
  });

  return result;
}


/**
 * Return true if every element in the collection
 * matches the criteria.
 *
 * @param  {Object|Array} collection
 * @param  {Function} matcher
 *
 * @return {Boolean}
 */
function every(collection, matcher) {

  return !!reduce(collection, function(matches, val, key) {
    return matches && matcher(val, key);
  }, true);
}


/**
 * Return true if some elements in the collection
 * match the criteria.
 *
 * @param  {Object|Array} collection
 * @param  {Function} matcher
 *
 * @return {Boolean}
 */
function some(collection, matcher) {

  return !!find(collection, matcher);
}


/**
 * Transform a collection into another collection
 * by piping each member through the given fn.
 *
 * @param  {Object|Array}   collection
 * @param  {Function} fn
 *
 * @return {Array} transformed collection
 */
function map(collection, fn) {

  let result = [];

  forEach(collection, function(val, key) {
    result.push(fn(val, key));
  });

  return result;
}


/**
 * Get the collections keys.
 *
 * @param  {Object|Array} collection
 *
 * @return {Array}
 */
function keys(collection) {
  return collection && Object.keys(collection) || [];
}


/**
 * Shorthand for `keys(o).length`.
 *
 * @param  {Object|Array} collection
 *
 * @return {Number}
 */
function size(collection) {
  return keys(collection).length;
}


/**
 * Get the values in the collection.
 *
 * @param  {Object|Array} collection
 *
 * @return {Array}
 */
function values(collection) {
  return map(collection, (val) => val);
}


/**
 * Group collection members by attribute.
 *
 * @param {Object|Array} collection
 * @param {Extractor} extractor
 *
 * @return {Object} map with { attrValue => [ a, b, c ] }
 */
function groupBy(collection, extractor, grouped = {}) {

  extractor = toExtractor(extractor);

  forEach(collection, function(val) {
    let discriminator = extractor(val) || '_';

    let group = grouped[discriminator];

    if (!group) {
      group = grouped[discriminator] = [];
    }

    group.push(val);
  });

  return grouped;
}


function uniqueBy(extractor, ...collections) {

  extractor = toExtractor(extractor);

  let grouped = {};

  forEach(collections, (c) => groupBy(c, extractor, grouped));

  let result = map(grouped, function(val, key) {
    return val[0];
  });

  return result;
}


const unionBy = uniqueBy;



/**
 * Sort collection by criteria.
 *
 * @template T
 *
 * @param {Collection<T>} collection
 * @param {Extractor<T, number | string>} extractor
 *
 * @return {Array}
 */
function sortBy(collection, extractor) {

  extractor = toExtractor(extractor);

  let sorted = [];

  forEach(collection, function(value, key) {
    let disc = extractor(value, key);

    let entry = {
      d: disc,
      v: value
    };

    for (var idx = 0; idx < sorted.length; idx++) {
      let { d } = sorted[idx];

      if (disc < d) {
        sorted.splice(idx, 0, entry);
        return;
      }
    }

    // not inserted, append (!)
    sorted.push(entry);
  });

  return map(sorted, (e) => e.v);
}


/**
 * Create an object pattern matcher.
 *
 * @example
 *
 * ```javascript
 * const matcher = matchPattern({ id: 1 });
 *
 * let element = find(elements, matcher);
 * ```
 *
 * @template T
 *
 * @param {T} pattern
 *
 * @return { (el: any) =>  boolean } matcherFn
 */
function matchPattern(pattern) {

  return function(el) {

    return every(pattern, function(val, key) {
      return el[key] === val;
    });

  };
}


/**
 * @param {string | ((e: any) => any) } extractor
 *
 * @return { (e: any) => any }
 */
function toExtractor(extractor) {

  /**
   * @satisfies { (e: any) => any }
   */
  return isFunction(extractor) ? extractor : (e) => {

    // @ts-ignore: just works
    return e[extractor];
  };
}


/**
 * @template T
 * @param {Matcher<T>} matcher
 *
 * @return {MatchFn<T>}
 */
function toMatcher(matcher) {
  return isFunction(matcher) ? matcher : (e) => {
    return e === matcher;
  };
}


function identity(arg) {
  return arg;
}

function toNum(arg) {
  return Number(arg);
}

/* global setTimeout clearTimeout */

/**
 * @typedef { {
 *   (...args: any[]): any;
 *   flush: () => void;
 *   cancel: () => void;
 * } } DebouncedFunction
 */

/**
 * Debounce fn, calling it only once if the given time
 * elapsed between calls.
 *
 * Lodash-style the function exposes methods to `#clear`
 * and `#flush` to control internal behavior.
 *
 * @param  {Function} fn
 * @param  {Number} timeout
 *
 * @return {DebouncedFunction} debounced function
 */
function debounce(fn, timeout) {

  let timer;

  let lastArgs;
  let lastThis;

  let lastNow;

  function fire(force) {

    let now = Date.now();

    let scheduledDiff = force ? 0 : (lastNow + timeout) - now;

    if (scheduledDiff > 0) {
      return schedule(scheduledDiff);
    }

    fn.apply(lastThis, lastArgs);

    clear();
  }

  function schedule(timeout) {
    timer = setTimeout(fire, timeout);
  }

  function clear() {
    if (timer) {
      clearTimeout(timer);
    }

    timer = lastNow = lastArgs = lastThis = undefined;
  }

  function flush() {
    if (timer) {
      fire(true);
    }

    clear();
  }

  /**
   * @type { DebouncedFunction }
   */
  function callback(...args) {
    lastNow = Date.now();

    lastArgs = args;
    lastThis = this;

    // ensure an execution is scheduled
    if (!timer) {
      schedule(timeout);
    }
  }

  callback.flush = flush;
  callback.cancel = clear;

  return callback;
}

/**
 * Throttle fn, calling at most once
 * in the given interval.
 *
 * @param  {Function} fn
 * @param  {Number} interval
 *
 * @return {Function} throttled function
 */
function throttle(fn, interval) {
  let throttling = false;

  return function(...args) {

    if (throttling) {
      return;
    }

    fn(...args);
    throttling = true;

    setTimeout(() => {
      throttling = false;
    }, interval);
  };
}

/**
 * Bind function against target <this>.
 *
 * @param  {Function} fn
 * @param  {Object}   target
 *
 * @return {Function} bound function
 */
function bind(fn, target) {
  return fn.bind(target);
}

/**
 * Convenience wrapper for `Object.assign`.
 *
 * @param {Object} target
 * @param {...Object} others
 *
 * @return {Object} the target
 */
function assign(target, ...others) {
  return Object.assign(target, ...others);
}

/**
 * Sets a nested property of a given object to the specified value.
 *
 * This mutates the object and returns it.
 *
 * @template T
 *
 * @param {T} target The target of the set operation.
 * @param {(string|number)[]} path The path to the nested value.
 * @param {any} value The value to set.
 *
 * @return {T}
 */
function set(target, path, value) {

  let currentTarget = target;

  forEach(path, function(key, idx) {

    if (typeof key !== 'number' && typeof key !== 'string') {
      throw new Error('illegal key type: ' + typeof key + '. Key should be of type number or string.');
    }

    if (key === 'constructor') {
      throw new Error('illegal key: constructor');
    }

    if (key === '__proto__') {
      throw new Error('illegal key: __proto__');
    }

    let nextKey = path[idx + 1];
    let nextTarget = currentTarget[key];

    if (isDefined(nextKey) && isNil(nextTarget)) {
      nextTarget = currentTarget[key] = isNaN(+nextKey) ? {} : [];
    }

    if (isUndefined(nextKey)) {
      if (isUndefined(value)) {
        delete currentTarget[key];
      } else {
        currentTarget[key] = value;
      }
    } else {
      currentTarget = nextTarget;
    }
  });

  return target;
}


/**
 * Gets a nested property of a given object.
 *
 * @param {Object} target The target of the get operation.
 * @param {(string|number)[]} path The path to the nested value.
 * @param {any} [defaultValue] The value to return if no value exists.
 *
 * @return {any}
 */
function get(target, path, defaultValue) {

  let currentTarget = target;

  forEach(path, function(key) {

    // accessing nil property yields <undefined>
    if (isNil(currentTarget)) {
      currentTarget = undefined;

      return false;
    }

    currentTarget = currentTarget[key];
  });

  return isUndefined(currentTarget) ? defaultValue : currentTarget;
}

/**
 * Pick properties from the given target.
 *
 * @template T
 * @template {any[]} V
 *
 * @param {T} target
 * @param {V} properties
 *
 * @return Pick<T, V>
 */
function pick(target, properties) {

  let result = {};

  let obj = Object(target);

  forEach(properties, function(prop) {

    if (prop in obj) {
      result[prop] = target[prop];
    }
  });

  return result;
}

/**
 * Pick all target properties, excluding the given ones.
 *
 * @template T
 * @template {any[]} V
 *
 * @param {T} target
 * @param {V} properties
 *
 * @return {Omit<T, V>} target
 */
function omit(target, properties) {

  let result = {};

  let obj = Object(target);

  forEach(obj, function(prop, key) {

    if (properties.indexOf(key) === -1) {
      result[key] = prop;
    }
  });

  return result;
}

/**
 * Recursively merge `...sources` into given target.
 *
 * Does support merging objects; does not support merging arrays.
 *
 * @param {Object} target
 * @param {...Object} sources
 *
 * @return {Object} the target
 */
function merge(target, ...sources) {

  if (!sources.length) {
    return target;
  }

  forEach(sources, function(source) {

    // skip non-obj sources, i.e. null
    if (!source || !isObject(source)) {
      return;
    }

    forEach(source, function(sourceVal, key) {

      if (key === '__proto__') {
        return;
      }

      let targetVal = target[key];

      if (isObject(sourceVal)) {

        if (!isObject(targetVal)) {

          // override target[key] with object
          targetVal = {};
        }

        target[key] = merge(targetVal, sourceVal);
      } else {
        target[key] = sourceVal;
      }

    });
  });

  return target;
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAccessor: () => (/* reexport safe */ _accessors__WEBPACK_IMPORTED_MODULE_0__.getAccessor),
/* harmony export */   getEditableType: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_3__.getEditableType),
/* harmony export */   getEditableTypes: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_3__.getEditableTypes),
/* harmony export */   getEditor: () => (/* reexport safe */ _editors__WEBPACK_IMPORTED_MODULE_1__.getEditor),
/* harmony export */   getScopeProvider: () => (/* reexport safe */ _scope__WEBPACK_IMPORTED_MODULE_2__.getScopeProvider),
/* harmony export */   getScopeProviders: () => (/* reexport safe */ _scope__WEBPACK_IMPORTED_MODULE_2__.getScopeProviders),
/* harmony export */   registerAccessor: () => (/* reexport safe */ _accessors__WEBPACK_IMPORTED_MODULE_0__.registerAccessor),
/* harmony export */   registerAccessors: () => (/* reexport safe */ _accessors__WEBPACK_IMPORTED_MODULE_0__.registerAccessors),
/* harmony export */   registerDefaultEditor: () => (/* reexport safe */ _editors__WEBPACK_IMPORTED_MODULE_1__.registerDefaultEditor),
/* harmony export */   registerEditableType: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_3__.registerEditableType),
/* harmony export */   registerEditableTypes: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_3__.registerEditableTypes),
/* harmony export */   registerEditor: () => (/* reexport safe */ _editors__WEBPACK_IMPORTED_MODULE_1__.registerEditor),
/* harmony export */   registerScopeProvider: () => (/* reexport safe */ _scope__WEBPACK_IMPORTED_MODULE_2__.registerScopeProvider),
/* harmony export */   registerScopeProviders: () => (/* reexport safe */ _scope__WEBPACK_IMPORTED_MODULE_2__.registerScopeProviders)
/* harmony export */ });
/* harmony import */ var _accessors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accessors */ "./lib/accessors.js");
/* harmony import */ var _editors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editors */ "./lib/editors.js");
/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scope */ "./lib/scope.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./lib/types.js");








})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWd0M7QUFDeEM7QUFDa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AscUVBQXFFLCtDQUFPO0FBQzVFLFNBQVMscURBQVk7QUFDckI7QUFDQTtBQUNPO0FBQ1AsRUFBRSxxREFBWTtBQUNkO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLGVBQWU7QUFDZixXQUFXO0FBQ1gsb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2J3QztBQUN4QztBQUNPO0FBQ1AsaUJBQWlCLHFEQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsRUFBRSxxREFBWTtBQUNkO0FBQ0E7QUFDTztBQUNQLEVBQUUscURBQVk7QUFDZDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2J3QztBQUN4QztBQUNBO0FBQ087QUFDUCxTQUFTLHFEQUFZO0FBQ3JCO0FBQ0E7QUFDTztBQUNQO0FBQ0EscUJBQXFCLHFEQUFZO0FBQ2pDO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsRUFBRSxxREFBWTtBQUNkO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQndDO0FBQ3hDO0FBQ087QUFDUCx1QkFBdUIscURBQVk7QUFDbkM7QUFDQTtBQUNPO0FBQ1AsU0FBUyxxREFBWTtBQUNyQjtBQUNBO0FBQ087QUFDUCxFQUFFLHFEQUFZO0FBQ2Q7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCK0Q7QUFDL0Q7QUFDTztBQUNQLHlCQUF5Qiw2RUFBaUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RrQjs7QUFFbEI7QUFDQSxjQUFjLG1DQUFtQztBQUNqRCxjQUFjLHlDQUF5QztBQUN2RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHVCQUF1QjtBQUNuQyxZQUFZLFFBQVE7QUFDcEI7QUFDQSxZQUFZO0FBQ1o7QUFDTztBQUNQOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsdUJBQXVCO0FBQ2xDLFdBQVcsVUFBVTtBQUNyQjtBQUNBLFlBQVk7QUFDWjtBQUNPO0FBQ1AsU0FBUyw4Q0FBSTtBQUNiO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsdUJBQXVCO0FBQ2xDO0FBQ0EsWUFBWTtBQUNaO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBLFlBQVk7QUFDWjtBQUNPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsb0JBQW9CO0FBQy9CO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLEtBQUs7QUFDaEI7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBLE9BQU87QUFDUDs7O0FBR0E7QUFDQTtBQUNBLGNBQWMsZ0NBQWdDO0FBQzlDOztBQUVBO0FBQ0E7QUFDQSxjQUFjLE1BQU07QUFDcEI7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixxQkFBcUI7QUFDckM7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixxQkFBcUI7QUFDckM7O0FBRUE7QUFDQTtBQUNBLGNBQWMsNERBQTREO0FBQzFFOztBQUVBO0FBQ0E7QUFDQSxjQUFjLDZDQUE2QztBQUMzRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZUFBZTtBQUMxQixXQUFXLFlBQVk7QUFDdkI7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxlQUFlO0FBQzFCLFdBQVcsWUFBWTtBQUN2QjtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZUFBZTtBQUMxQixXQUFXLFlBQVk7QUFDdkI7QUFDQSxZQUFZLEtBQUs7QUFDakI7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7O0FBR0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsV0FBVyxlQUFlO0FBQzFCLFlBQVksMEZBQTBGO0FBQ3RHO0FBQ0EsWUFBWSxHQUFHO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsb0JBQW9CO0FBQy9CLFdBQVcsWUFBWTtBQUN2QjtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxlQUFlO0FBQzFCLFdBQVcsd0NBQXdDO0FBQ25ELFdBQVcsR0FBRztBQUNkO0FBQ0EsWUFBWSxHQUFHO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksY0FBYztBQUMxQixZQUFZLFVBQVU7QUFDdEI7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksY0FBYztBQUMxQixZQUFZLFVBQVU7QUFDdEI7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksZ0JBQWdCO0FBQzVCLFlBQVksVUFBVTtBQUN0QjtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFlBQVksY0FBYztBQUMxQjtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxjQUFjO0FBQzFCO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGNBQWM7QUFDMUI7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsY0FBYztBQUN6QixXQUFXLFdBQVc7QUFDdEI7QUFDQSxZQUFZLFFBQVEsV0FBVztBQUMvQjtBQUNBLG9EQUFvRDs7QUFFcEQ7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7OztBQUdBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZUFBZTtBQUMxQixXQUFXLCtCQUErQjtBQUMxQztBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLHFCQUFxQjtBQUMzQyxZQUFZLElBQUk7O0FBRWhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLE9BQU87QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2Q7QUFDQSxhQUFhLHdCQUF3QjtBQUNyQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7OztBQUdBO0FBQ0EsV0FBVyw2QkFBNkI7QUFDeEM7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsV0FBVyxZQUFZO0FBQ3ZCO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxVQUFVO0FBQ3RCLFlBQVksUUFBUTtBQUNwQjtBQUNBLFlBQVksbUJBQW1CO0FBQy9CO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxVQUFVO0FBQ3RCLFlBQVksUUFBUTtBQUNwQjtBQUNBLFlBQVksVUFBVTtBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksVUFBVTtBQUN0QixZQUFZLFVBQVU7QUFDdEI7QUFDQSxZQUFZLFVBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsV0FBVztBQUN0QjtBQUNBLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLFdBQVcsbUJBQW1CO0FBQzlCLFdBQVcsS0FBSztBQUNoQjtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw2REFBNkQ7QUFDN0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsbUJBQW1CO0FBQzlCLFdBQVcsS0FBSztBQUNoQjtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsV0FBVyxHQUFHO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsV0FBVyxHQUFHO0FBQ2Q7QUFDQSxZQUFZLFlBQVk7QUFDeEI7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsV0FBVztBQUN0QjtBQUNBLFlBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUEsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTs7QUFFaVU7Ozs7Ozs7VUN2MkJqVTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZxQjtBQUNyQjtBQUttQjtBQUNuQjtBQU1pQjtBQUNqQjtBQU1pQiIsInNvdXJjZXMiOlsid2VicGFjazovL2NhbXVuZGEtbW9kZWxlci1jb2RlLWVkaXRvci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vY2FtdW5kYS1tb2RlbGVyLWNvZGUtZWRpdG9yLy4vbGliL2FjY2Vzc29ycy5qcyIsIndlYnBhY2s6Ly9jYW11bmRhLW1vZGVsZXItY29kZS1lZGl0b3IvLi9saWIvY29uZmlnLmpzIiwid2VicGFjazovL2NhbXVuZGEtbW9kZWxlci1jb2RlLWVkaXRvci8uL2xpYi9lZGl0b3JzLmpzIiwid2VicGFjazovL2NhbXVuZGEtbW9kZWxlci1jb2RlLWVkaXRvci8uL2xpYi9zY29wZS5qcyIsIndlYnBhY2s6Ly9jYW11bmRhLW1vZGVsZXItY29kZS1lZGl0b3IvLi9saWIvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vY2FtdW5kYS1tb2RlbGVyLWNvZGUtZWRpdG9yLy4vbGliL3V0aWxzLmpzIiwid2VicGFjazovL2NhbXVuZGEtbW9kZWxlci1jb2RlLWVkaXRvci8uL25vZGVfbW9kdWxlcy9icG1uLWpzL2xpYi91dGlsL01vZGVsVXRpbC5qcyIsIndlYnBhY2s6Ly9jYW11bmRhLW1vZGVsZXItY29kZS1lZGl0b3IvLi9ub2RlX21vZHVsZXMvbWluLWRhc2gvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vY2FtdW5kYS1tb2RlbGVyLWNvZGUtZWRpdG9yL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NhbXVuZGEtbW9kZWxlci1jb2RlLWVkaXRvci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2FtdW5kYS1tb2RlbGVyLWNvZGUtZWRpdG9yL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2FtdW5kYS1tb2RlbGVyLWNvZGUtZWRpdG9yL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2FtdW5kYS1tb2RlbGVyLWNvZGUtZWRpdG9yLy4vbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KShzZWxmLCAoKSA9PiB7XG5yZXR1cm4gIiwiaW1wb3J0IHsgZW5zdXJlQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xyXG5cclxuaW1wb3J0IHsgZ2V0VHlwZSB9IGZyb20gJy4vdXRpbHMnO1xyXG5cclxuZnVuY3Rpb24gaXNTdHJpbmcodmFyaWFibGUpIHtcclxuICByZXR1cm4gdHlwZW9mIHZhcmlhYmxlID09PSAnc3RyaW5nJyB8fCB2YXJpYWJsZSBpbnN0YW5jZW9mIFN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFjY2Vzc29yKHR5cGVOYW1lT3JFbGVtZW50KSB7XHJcbiAgY29uc3QgdHlwZU5hbWUgPSBpc1N0cmluZyh0eXBlTmFtZU9yRWxlbWVudCkgPyB0eXBlTmFtZU9yRWxlbWVudCA6IGdldFR5cGUodHlwZU5hbWVPckVsZW1lbnQpO1xyXG4gIHJldHVybiBlbnN1cmVDb25maWcoKS5hY2Nlc3NvcnNbdHlwZU5hbWVdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJBY2Nlc3Nvcih0eXBlTmFtZSwgYWNjZXNzb3JzKSB7XHJcbiAgZW5zdXJlQ29uZmlnKCkuYWNjZXNzb3JzW3R5cGVOYW1lXSA9IGFjY2Vzc29ycztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyQWNjZXNzb3JzKHR5cGVUb0FjY2Vzc29ycykge1xyXG4gIE9iamVjdC5lbnRyaWVzKHR5cGVUb0FjY2Vzc29ycykuZm9yRWFjaCgoWyB0eXBlTmFtZSwgYWNjZXNzb3JzIF0pID0+IHtcclxuICAgIHJlZ2lzdGVyQWNjZXNzb3IodHlwZU5hbWUsIGFjY2Vzc29ycyk7XHJcbiAgfSk7XHJcbn1cclxuIiwiY29uc3QgREVGQVVMVF9DT05GSUcgPSB7XHJcbiAgZGVmYXVsdEVkaXRvcjogbnVsbCxcclxuICBlZGl0b3JzOiB7fSxcclxuICBhY2Nlc3NvcnM6IHt9LFxyXG4gIHR5cGVzOiB7fSxcclxuICBzY29wZVByb3ZpZGVyczoge30sXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZW5zdXJlQ29uZmlnKCkge1xyXG4gIGlmICghZ2xvYmFsVGhpc1snY29kZS1lZGl0b3InXSkge1xyXG4gICAgZ2xvYmFsVGhpc1snY29kZS1lZGl0b3InXSA9IERFRkFVTFRfQ09ORklHO1xyXG4gIH1cclxuICByZXR1cm4gZ2xvYmFsVGhpc1snY29kZS1lZGl0b3InXTtcclxufVxyXG4iLCJpbXBvcnQgeyBlbnN1cmVDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWRpdG9yKGxhbmd1YWdlKSB7XHJcbiAgY29uc3QgY29uZmlnID0gZW5zdXJlQ29uZmlnKCk7XHJcbiAgcmV0dXJuIGNvbmZpZy5lZGl0b3JzW2xhbmd1YWdlXSB8fCBjb25maWcuZGVmYXVsdEVkaXRvcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyRGVmYXVsdEVkaXRvcihkZWZhdWx0RWRpdG9yKSB7XHJcbiAgZW5zdXJlQ29uZmlnKCkuZGVmYXVsdEVkaXRvciA9IGRlZmF1bHRFZGl0b3I7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckVkaXRvcihsYW5ndWFnZSwgZWRpdG9yKSB7XHJcbiAgZW5zdXJlQ29uZmlnKCkuZWRpdG9yc1tsYW5ndWFnZV0gPSBlZGl0b3I7XHJcbn1cclxuIiwiaW1wb3J0IHsgZW5zdXJlQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTY29wZVByb3ZpZGVyKGlkZW50aWZpZXIpIHtcclxuICByZXR1cm4gZW5zdXJlQ29uZmlnKCkuc2NvcGVQcm92aWRlcnNbaWRlbnRpZmllcl07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTY29wZVByb3ZpZGVycygpIHtcclxuICByZXR1cm4gW1xyXG4gICAgLi4uT2JqZWN0LnZhbHVlcyhlbnN1cmVDb25maWcoKS5zY29wZVByb3ZpZGVycyksXHJcbiAgXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyU2NvcGVQcm92aWRlcihpZGVudGlmaWVyLCBwcm92aWRlcikge1xyXG4gIGVuc3VyZUNvbmZpZygpLnNjb3BlUHJvdmlkZXJzW2lkZW50aWZpZXJdID0gcHJvdmlkZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlclNjb3BlUHJvdmlkZXJzKGlkZW50aWZpZXJUb1Byb3ZpZGVycykge1xyXG4gIE9iamVjdC5lbnRyaWVzKGlkZW50aWZpZXJUb1Byb3ZpZGVycykuZm9yRWFjaCgoWyBpZGVudGlmaWVyLCBwcm92aWRlciBdKSA9PiB7XHJcbiAgICByZWdpc3RlclNjb3BlUHJvdmlkZXIoaWRlbnRpZmllciwgcHJvdmlkZXIpO1xyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IGVuc3VyZUNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRFZGl0YWJsZVR5cGVzKCkge1xyXG4gIHJldHVybiBPYmplY3QudmFsdWVzKGVuc3VyZUNvbmZpZygpLnR5cGVzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEVkaXRhYmxlVHlwZShpZCkge1xyXG4gIHJldHVybiBlbnN1cmVDb25maWcoKS50eXBlc1tpZF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckVkaXRhYmxlVHlwZSh0eXBlSW1wbGVtZW50YXRpb24pIHtcclxuICBlbnN1cmVDb25maWcoKS50eXBlc1t0eXBlSW1wbGVtZW50YXRpb24uaWRdID0gdHlwZUltcGxlbWVudGF0aW9uO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJFZGl0YWJsZVR5cGVzKHR5cGVJbXBsZW1lbnRhdGlvbnMpIHtcclxuICB0eXBlSW1wbGVtZW50YXRpb25zLmZvckVhY2godHlwZUltcGxlbWVudGF0aW9uID0+IHJlZ2lzdGVyRWRpdGFibGVUeXBlKHR5cGVJbXBsZW1lbnRhdGlvbikpO1xyXG59XHJcbiIsImltcG9ydCB7IGdldEJ1c2luZXNzT2JqZWN0IH0gZnJvbSAnYnBtbi1qcy9saWIvdXRpbC9Nb2RlbFV0aWwnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFR5cGUoZWxlbWVudCkge1xyXG4gIGNvbnN0IGJ1c2luZXNzT2JqZWN0ID0gZ2V0QnVzaW5lc3NPYmplY3QoZWxlbWVudCk7XHJcbiAgaWYgKGJ1c2luZXNzT2JqZWN0KSB7XHJcbiAgICBjb25zdCBkZXNjcmlwdG9yID0gYnVzaW5lc3NPYmplY3QuJGRlc2NyaXB0b3I7XHJcbiAgICBpZiAoZGVzY3JpcHRvcikge1xyXG4gICAgICByZXR1cm4gZGVzY3JpcHRvci5uYW1lO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25zb2xlLndhcm4oJ3VuYWJsZSB0byBmaW5kIHRoZSBtb2RlbCBkZXNjcmlwdG9yJyk7XHJcbn1cclxuIiwiaW1wb3J0IHtcbiAgc29tZVxufSBmcm9tICdtaW4tZGFzaCc7XG5cbi8qKlxuICogQHR5cGVkZWYgeyBpbXBvcnQoJy4uL21vZGVsL1R5cGVzJykuRWxlbWVudCB9IEVsZW1lbnRcbiAqIEB0eXBlZGVmIHsgaW1wb3J0KCcuLi9tb2RlbC9UeXBlcycpLk1vZGRsZUVsZW1lbnQgfSBNb2RkbGVFbGVtZW50XG4gKi9cblxuLyoqXG4gKiBJcyBhbiBlbGVtZW50IG9mIHRoZSBnaXZlbiBCUE1OIHR5cGU/XG4gKlxuICogQHBhcmFtICB7RWxlbWVudHxNb2RkbGVFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0gIHtzdHJpbmd9IHR5cGVcbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXMoZWxlbWVudCwgdHlwZSkge1xuICB2YXIgYm8gPSBnZXRCdXNpbmVzc09iamVjdChlbGVtZW50KTtcblxuICByZXR1cm4gYm8gJiYgKHR5cGVvZiBiby4kaW5zdGFuY2VPZiA9PT0gJ2Z1bmN0aW9uJykgJiYgYm8uJGluc3RhbmNlT2YodHlwZSk7XG59XG5cblxuLyoqXG4gKiBSZXR1cm4gdHJ1ZSBpZiBlbGVtZW50IGhhcyBhbnkgb2YgdGhlIGdpdmVuIHR5cGVzLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudHxNb2RkbGVFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge3N0cmluZ1tdfSB0eXBlc1xuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0FueShlbGVtZW50LCB0eXBlcykge1xuICByZXR1cm4gc29tZSh0eXBlcywgZnVuY3Rpb24odCkge1xuICAgIHJldHVybiBpcyhlbGVtZW50LCB0KTtcbiAgfSk7XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBidXNpbmVzcyBvYmplY3QgZm9yIGEgZ2l2ZW4gZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR8TW9kZGxlRWxlbWVudH0gZWxlbWVudFxuICpcbiAqIEByZXR1cm4ge01vZGRsZUVsZW1lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRCdXNpbmVzc09iamVjdChlbGVtZW50KSB7XG4gIHJldHVybiAoZWxlbWVudCAmJiBlbGVtZW50LmJ1c2luZXNzT2JqZWN0KSB8fCBlbGVtZW50O1xufVxuXG4vKipcbiAqIFJldHVybiB0aGUgZGkgb2JqZWN0IGZvciBhIGdpdmVuIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKlxuICogQHJldHVybiB7TW9kZGxlRWxlbWVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERpKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQgJiYgZWxlbWVudC5kaTtcbn0iLCIvKipcbiAqIEZsYXR0ZW4gYXJyYXksIG9uZSBsZXZlbCBkZWVwLlxuICpcbiAqIEB0ZW1wbGF0ZSBUXG4gKlxuICogQHBhcmFtIHtUW11bXSB8IFRbXSB8IG51bGx9IFthcnJdXG4gKlxuICogQHJldHVybiB7VFtdfVxuICovXG5mdW5jdGlvbiBmbGF0dGVuKGFycikge1xuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgYXJyKTtcbn1cblxuY29uc3QgbmF0aXZlVG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuY29uc3QgbmF0aXZlSGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChvYmopIHtcbiAgcmV0dXJuIG9iaiA9PT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBpc0RlZmluZWQob2JqKSB7XG4gIHJldHVybiBvYmogIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaXNOaWwob2JqKSB7XG4gIHJldHVybiBvYmogPT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gaXNBcnJheShvYmopIHtcbiAgcmV0dXJuIG5hdGl2ZVRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gIHJldHVybiBuYXRpdmVUb1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xufVxuXG5mdW5jdGlvbiBpc051bWJlcihvYmopIHtcbiAgcmV0dXJuIG5hdGl2ZVRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgTnVtYmVyXSc7XG59XG5cbi8qKlxuICogQHBhcmFtIHthbnl9IG9ialxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24ob2JqKSB7XG4gIGNvbnN0IHRhZyA9IG5hdGl2ZVRvU3RyaW5nLmNhbGwob2JqKTtcblxuICByZXR1cm4gKFxuICAgIHRhZyA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJyB8fFxuICAgIHRhZyA9PT0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nIHx8XG4gICAgdGFnID09PSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nIHx8XG4gICAgdGFnID09PSAnW29iamVjdCBBc3luY0dlbmVyYXRvckZ1bmN0aW9uXScgfHxcbiAgICB0YWcgPT09ICdbb2JqZWN0IFByb3h5XSdcbiAgKTtcbn1cblxuZnVuY3Rpb24gaXNTdHJpbmcob2JqKSB7XG4gIHJldHVybiBuYXRpdmVUb1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IFN0cmluZ10nO1xufVxuXG5cbi8qKlxuICogRW5zdXJlIGNvbGxlY3Rpb24gaXMgYW4gYXJyYXkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICovXG5mdW5jdGlvbiBlbnN1cmVBcnJheShvYmopIHtcblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKCdtdXN0IHN1cHBseSBhcnJheScpO1xufVxuXG4vKipcbiAqIFJldHVybiB0cnVlLCBpZiB0YXJnZXQgb3ducyBhIHByb3BlcnR5IHdpdGggdGhlIGdpdmVuIGtleS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaGFzKHRhcmdldCwga2V5KSB7XG4gIHJldHVybiAhaXNOaWwodGFyZ2V0KSAmJiBuYXRpdmVIYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwga2V5KTtcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUgVFxuICogQHR5cGVkZWYgeyAoXG4gKiAgICgoZTogVCkgPT4gYm9vbGVhbikgfFxuICogICAoKGU6IFQsIGlkeDogbnVtYmVyKSA9PiBib29sZWFuKSB8XG4gKiAgICgoZTogVCwga2V5OiBzdHJpbmcpID0+IGJvb2xlYW4pIHxcbiAqICAgc3RyaW5nIHxcbiAqICAgbnVtYmVyXG4gKiApIH0gTWF0Y2hlclxuICovXG5cbi8qKlxuICogQHRlbXBsYXRlIFRcbiAqIEB0ZW1wbGF0ZSBVXG4gKlxuICogQHR5cGVkZWYgeyAoXG4gKiAgICgoZTogVCkgPT4gVSkgfCBzdHJpbmcgfCBudW1iZXJcbiAqICkgfSBFeHRyYWN0b3JcbiAqL1xuXG5cbi8qKlxuICogQHRlbXBsYXRlIFRcbiAqIEB0eXBlZGVmIHsgKHZhbDogVCwga2V5OiBhbnkpID0+IGJvb2xlYW4gfSBNYXRjaEZuXG4gKi9cblxuLyoqXG4gKiBAdGVtcGxhdGUgVFxuICogQHR5cGVkZWYgeyBUW10gfSBBcnJheUNvbGxlY3Rpb25cbiAqL1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAdHlwZWRlZiB7IHsgW2tleTogc3RyaW5nXTogVCB9IH0gU3RyaW5nS2V5VmFsdWVDb2xsZWN0aW9uXG4gKi9cblxuLyoqXG4gKiBAdGVtcGxhdGUgVFxuICogQHR5cGVkZWYgeyB7IFtrZXk6IG51bWJlcl06IFQgfSB9IE51bWJlcktleVZhbHVlQ29sbGVjdGlvblxuICovXG5cbi8qKlxuICogQHRlbXBsYXRlIFRcbiAqIEB0eXBlZGVmIHsgU3RyaW5nS2V5VmFsdWVDb2xsZWN0aW9uPFQ+IHwgTnVtYmVyS2V5VmFsdWVDb2xsZWN0aW9uPFQ+IH0gS2V5VmFsdWVDb2xsZWN0aW9uXG4gKi9cblxuLyoqXG4gKiBAdGVtcGxhdGUgVFxuICogQHR5cGVkZWYgeyBLZXlWYWx1ZUNvbGxlY3Rpb248VD4gfCBBcnJheUNvbGxlY3Rpb248VD4gfSBDb2xsZWN0aW9uXG4gKi9cblxuLyoqXG4gKiBGaW5kIGVsZW1lbnQgaW4gY29sbGVjdGlvbi5cbiAqXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHtDb2xsZWN0aW9uPFQ+fSBjb2xsZWN0aW9uXG4gKiBAcGFyYW0ge01hdGNoZXI8VD59IG1hdGNoZXJcbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGZpbmQoY29sbGVjdGlvbiwgbWF0Y2hlcikge1xuXG4gIGNvbnN0IG1hdGNoRm4gPSB0b01hdGNoZXIobWF0Y2hlcik7XG5cbiAgbGV0IG1hdGNoO1xuXG4gIGZvckVhY2goY29sbGVjdGlvbiwgZnVuY3Rpb24odmFsLCBrZXkpIHtcbiAgICBpZiAobWF0Y2hGbih2YWwsIGtleSkpIHtcbiAgICAgIG1hdGNoID0gdmFsO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbWF0Y2g7XG5cbn1cblxuXG4vKipcbiAqIEZpbmQgZWxlbWVudCBpbmRleCBpbiBjb2xsZWN0aW9uLlxuICpcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAcGFyYW0ge0NvbGxlY3Rpb248VD59IGNvbGxlY3Rpb25cbiAqIEBwYXJhbSB7TWF0Y2hlcjxUPn0gbWF0Y2hlclxuICpcbiAqIEByZXR1cm4ge251bWJlciB8IHN0cmluZyB8IHVuZGVmaW5lZH1cbiAqL1xuZnVuY3Rpb24gZmluZEluZGV4KGNvbGxlY3Rpb24sIG1hdGNoZXIpIHtcblxuICBjb25zdCBtYXRjaEZuID0gdG9NYXRjaGVyKG1hdGNoZXIpO1xuXG4gIGxldCBpZHggPSBpc0FycmF5KGNvbGxlY3Rpb24pID8gLTEgOiB1bmRlZmluZWQ7XG5cbiAgZm9yRWFjaChjb2xsZWN0aW9uLCBmdW5jdGlvbih2YWwsIGtleSkge1xuICAgIGlmIChtYXRjaEZuKHZhbCwga2V5KSkge1xuICAgICAgaWR4ID0ga2V5O1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gaWR4O1xufVxuXG5cbi8qKlxuICogRmlsdGVyIGVsZW1lbnRzIGluIGNvbGxlY3Rpb24uXG4gKlxuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7Q29sbGVjdGlvbjxUPn0gY29sbGVjdGlvblxuICogQHBhcmFtIHtNYXRjaGVyPFQ+fSBtYXRjaGVyXG4gKlxuICogQHJldHVybiB7VFtdfSByZXN1bHRcbiAqL1xuZnVuY3Rpb24gZmlsdGVyKGNvbGxlY3Rpb24sIG1hdGNoZXIpIHtcblxuICBjb25zdCBtYXRjaEZuID0gdG9NYXRjaGVyKG1hdGNoZXIpO1xuXG4gIGxldCByZXN1bHQgPSBbXTtcblxuICBmb3JFYWNoKGNvbGxlY3Rpb24sIGZ1bmN0aW9uKHZhbCwga2V5KSB7XG4gICAgaWYgKG1hdGNoRm4odmFsLCBrZXkpKSB7XG4gICAgICByZXN1bHQucHVzaCh2YWwpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBjb2xsZWN0aW9uOyByZXR1cm5pbmcgc29tZXRoaW5nXG4gKiAobm9uLXVuZGVmaW5lZCkgd2lsbCBzdG9wIGl0ZXJhdGlvbi5cbiAqXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHtDb2xsZWN0aW9uPFQ+fSBjb2xsZWN0aW9uXG4gKiBAcGFyYW0geyAoKGl0ZW06IFQsIGlkeDogbnVtYmVyKSA9PiAoYm9vbGVhbnx2b2lkKSkgfCAoKGl0ZW06IFQsIGtleTogc3RyaW5nKSA9PiAoYm9vbGVhbnx2b2lkKSkgfSBpdGVyYXRvclxuICpcbiAqIEByZXR1cm4ge1R9IHJldHVybiByZXN1bHQgdGhhdCBzdG9wcGVkIHRoZSBpdGVyYXRpb25cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChjb2xsZWN0aW9uLCBpdGVyYXRvcikge1xuXG4gIGxldCB2YWwsXG4gICAgICByZXN1bHQ7XG5cbiAgaWYgKGlzVW5kZWZpbmVkKGNvbGxlY3Rpb24pKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgY29udmVydEtleSA9IGlzQXJyYXkoY29sbGVjdGlvbikgPyB0b051bSA6IGlkZW50aXR5O1xuXG4gIGZvciAobGV0IGtleSBpbiBjb2xsZWN0aW9uKSB7XG5cbiAgICBpZiAoaGFzKGNvbGxlY3Rpb24sIGtleSkpIHtcbiAgICAgIHZhbCA9IGNvbGxlY3Rpb25ba2V5XTtcblxuICAgICAgcmVzdWx0ID0gaXRlcmF0b3IodmFsLCBjb252ZXJ0S2V5KGtleSkpO1xuXG4gICAgICBpZiAocmVzdWx0ID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFJldHVybiBjb2xsZWN0aW9uIHdpdGhvdXQgZWxlbWVudC5cbiAqXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHtBcnJheUNvbGxlY3Rpb248VD59IGFyclxuICogQHBhcmFtIHtNYXRjaGVyPFQ+fSBtYXRjaGVyXG4gKlxuICogQHJldHVybiB7VFtdfVxuICovXG5mdW5jdGlvbiB3aXRob3V0KGFyciwgbWF0Y2hlcikge1xuXG4gIGlmIChpc1VuZGVmaW5lZChhcnIpKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgZW5zdXJlQXJyYXkoYXJyKTtcblxuICBjb25zdCBtYXRjaEZuID0gdG9NYXRjaGVyKG1hdGNoZXIpO1xuXG4gIHJldHVybiBhcnIuZmlsdGVyKGZ1bmN0aW9uKGVsLCBpZHgpIHtcbiAgICByZXR1cm4gIW1hdGNoRm4oZWwsIGlkeCk7XG4gIH0pO1xuXG59XG5cblxuLyoqXG4gKiBSZWR1Y2UgY29sbGVjdGlvbiwgcmV0dXJuaW5nIGEgc2luZ2xlIHJlc3VsdC5cbiAqXG4gKiBAdGVtcGxhdGUgVFxuICogQHRlbXBsYXRlIFZcbiAqXG4gKiBAcGFyYW0ge0NvbGxlY3Rpb248VD59IGNvbGxlY3Rpb25cbiAqIEBwYXJhbSB7KHJlc3VsdDogViwgZW50cnk6IFQsIGluZGV4OiBhbnkpID0+IFZ9IGl0ZXJhdG9yXG4gKiBAcGFyYW0ge1Z9IHJlc3VsdFxuICpcbiAqIEByZXR1cm4ge1Z9IHJlc3VsdCByZXR1cm5lZCBmcm9tIGxhc3QgaXRlcmF0b3JcbiAqL1xuZnVuY3Rpb24gcmVkdWNlKGNvbGxlY3Rpb24sIGl0ZXJhdG9yLCByZXN1bHQpIHtcblxuICBmb3JFYWNoKGNvbGxlY3Rpb24sIGZ1bmN0aW9uKHZhbHVlLCBpZHgpIHtcbiAgICByZXN1bHQgPSBpdGVyYXRvcihyZXN1bHQsIHZhbHVlLCBpZHgpO1xuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qKlxuICogUmV0dXJuIHRydWUgaWYgZXZlcnkgZWxlbWVudCBpbiB0aGUgY29sbGVjdGlvblxuICogbWF0Y2hlcyB0aGUgY3JpdGVyaWEuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fEFycmF5fSBjb2xsZWN0aW9uXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gbWF0Y2hlclxuICpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGV2ZXJ5KGNvbGxlY3Rpb24sIG1hdGNoZXIpIHtcblxuICByZXR1cm4gISFyZWR1Y2UoY29sbGVjdGlvbiwgZnVuY3Rpb24obWF0Y2hlcywgdmFsLCBrZXkpIHtcbiAgICByZXR1cm4gbWF0Y2hlcyAmJiBtYXRjaGVyKHZhbCwga2V5KTtcbiAgfSwgdHJ1ZSk7XG59XG5cblxuLyoqXG4gKiBSZXR1cm4gdHJ1ZSBpZiBzb21lIGVsZW1lbnRzIGluIHRoZSBjb2xsZWN0aW9uXG4gKiBtYXRjaCB0aGUgY3JpdGVyaWEuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fEFycmF5fSBjb2xsZWN0aW9uXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gbWF0Y2hlclxuICpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIHNvbWUoY29sbGVjdGlvbiwgbWF0Y2hlcikge1xuXG4gIHJldHVybiAhIWZpbmQoY29sbGVjdGlvbiwgbWF0Y2hlcik7XG59XG5cblxuLyoqXG4gKiBUcmFuc2Zvcm0gYSBjb2xsZWN0aW9uIGludG8gYW5vdGhlciBjb2xsZWN0aW9uXG4gKiBieSBwaXBpbmcgZWFjaCBtZW1iZXIgdGhyb3VnaCB0aGUgZ2l2ZW4gZm4uXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fEFycmF5fSAgIGNvbGxlY3Rpb25cbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmblxuICpcbiAqIEByZXR1cm4ge0FycmF5fSB0cmFuc2Zvcm1lZCBjb2xsZWN0aW9uXG4gKi9cbmZ1bmN0aW9uIG1hcChjb2xsZWN0aW9uLCBmbikge1xuXG4gIGxldCByZXN1bHQgPSBbXTtcblxuICBmb3JFYWNoKGNvbGxlY3Rpb24sIGZ1bmN0aW9uKHZhbCwga2V5KSB7XG4gICAgcmVzdWx0LnB1c2goZm4odmFsLCBrZXkpKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKipcbiAqIEdldCB0aGUgY29sbGVjdGlvbnMga2V5cy5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R8QXJyYXl9IGNvbGxlY3Rpb25cbiAqXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuZnVuY3Rpb24ga2V5cyhjb2xsZWN0aW9uKSB7XG4gIHJldHVybiBjb2xsZWN0aW9uICYmIE9iamVjdC5rZXlzKGNvbGxlY3Rpb24pIHx8IFtdO1xufVxuXG5cbi8qKlxuICogU2hvcnRoYW5kIGZvciBga2V5cyhvKS5sZW5ndGhgLlxuICpcbiAqIEBwYXJhbSAge09iamVjdHxBcnJheX0gY29sbGVjdGlvblxuICpcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuZnVuY3Rpb24gc2l6ZShjb2xsZWN0aW9uKSB7XG4gIHJldHVybiBrZXlzKGNvbGxlY3Rpb24pLmxlbmd0aDtcbn1cblxuXG4vKipcbiAqIEdldCB0aGUgdmFsdWVzIGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIEBwYXJhbSAge09iamVjdHxBcnJheX0gY29sbGVjdGlvblxuICpcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5mdW5jdGlvbiB2YWx1ZXMoY29sbGVjdGlvbikge1xuICByZXR1cm4gbWFwKGNvbGxlY3Rpb24sICh2YWwpID0+IHZhbCk7XG59XG5cblxuLyoqXG4gKiBHcm91cCBjb2xsZWN0aW9uIG1lbWJlcnMgYnkgYXR0cmlidXRlLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBjb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0V4dHJhY3Rvcn0gZXh0cmFjdG9yXG4gKlxuICogQHJldHVybiB7T2JqZWN0fSBtYXAgd2l0aCB7IGF0dHJWYWx1ZSA9PiBbIGEsIGIsIGMgXSB9XG4gKi9cbmZ1bmN0aW9uIGdyb3VwQnkoY29sbGVjdGlvbiwgZXh0cmFjdG9yLCBncm91cGVkID0ge30pIHtcblxuICBleHRyYWN0b3IgPSB0b0V4dHJhY3RvcihleHRyYWN0b3IpO1xuXG4gIGZvckVhY2goY29sbGVjdGlvbiwgZnVuY3Rpb24odmFsKSB7XG4gICAgbGV0IGRpc2NyaW1pbmF0b3IgPSBleHRyYWN0b3IodmFsKSB8fCAnXyc7XG5cbiAgICBsZXQgZ3JvdXAgPSBncm91cGVkW2Rpc2NyaW1pbmF0b3JdO1xuXG4gICAgaWYgKCFncm91cCkge1xuICAgICAgZ3JvdXAgPSBncm91cGVkW2Rpc2NyaW1pbmF0b3JdID0gW107XG4gICAgfVxuXG4gICAgZ3JvdXAucHVzaCh2YWwpO1xuICB9KTtcblxuICByZXR1cm4gZ3JvdXBlZDtcbn1cblxuXG5mdW5jdGlvbiB1bmlxdWVCeShleHRyYWN0b3IsIC4uLmNvbGxlY3Rpb25zKSB7XG5cbiAgZXh0cmFjdG9yID0gdG9FeHRyYWN0b3IoZXh0cmFjdG9yKTtcblxuICBsZXQgZ3JvdXBlZCA9IHt9O1xuXG4gIGZvckVhY2goY29sbGVjdGlvbnMsIChjKSA9PiBncm91cEJ5KGMsIGV4dHJhY3RvciwgZ3JvdXBlZCkpO1xuXG4gIGxldCByZXN1bHQgPSBtYXAoZ3JvdXBlZCwgZnVuY3Rpb24odmFsLCBrZXkpIHtcbiAgICByZXR1cm4gdmFsWzBdO1xuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbmNvbnN0IHVuaW9uQnkgPSB1bmlxdWVCeTtcblxuXG5cbi8qKlxuICogU29ydCBjb2xsZWN0aW9uIGJ5IGNyaXRlcmlhLlxuICpcbiAqIEB0ZW1wbGF0ZSBUXG4gKlxuICogQHBhcmFtIHtDb2xsZWN0aW9uPFQ+fSBjb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0V4dHJhY3RvcjxULCBudW1iZXIgfCBzdHJpbmc+fSBleHRyYWN0b3JcbiAqXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuZnVuY3Rpb24gc29ydEJ5KGNvbGxlY3Rpb24sIGV4dHJhY3Rvcikge1xuXG4gIGV4dHJhY3RvciA9IHRvRXh0cmFjdG9yKGV4dHJhY3Rvcik7XG5cbiAgbGV0IHNvcnRlZCA9IFtdO1xuXG4gIGZvckVhY2goY29sbGVjdGlvbiwgZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgIGxldCBkaXNjID0gZXh0cmFjdG9yKHZhbHVlLCBrZXkpO1xuXG4gICAgbGV0IGVudHJ5ID0ge1xuICAgICAgZDogZGlzYyxcbiAgICAgIHY6IHZhbHVlXG4gICAgfTtcblxuICAgIGZvciAodmFyIGlkeCA9IDA7IGlkeCA8IHNvcnRlZC5sZW5ndGg7IGlkeCsrKSB7XG4gICAgICBsZXQgeyBkIH0gPSBzb3J0ZWRbaWR4XTtcblxuICAgICAgaWYgKGRpc2MgPCBkKSB7XG4gICAgICAgIHNvcnRlZC5zcGxpY2UoaWR4LCAwLCBlbnRyeSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBub3QgaW5zZXJ0ZWQsIGFwcGVuZCAoISlcbiAgICBzb3J0ZWQucHVzaChlbnRyeSk7XG4gIH0pO1xuXG4gIHJldHVybiBtYXAoc29ydGVkLCAoZSkgPT4gZS52KTtcbn1cblxuXG4vKipcbiAqIENyZWF0ZSBhbiBvYmplY3QgcGF0dGVybiBtYXRjaGVyLlxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogY29uc3QgbWF0Y2hlciA9IG1hdGNoUGF0dGVybih7IGlkOiAxIH0pO1xuICpcbiAqIGxldCBlbGVtZW50ID0gZmluZChlbGVtZW50cywgbWF0Y2hlcik7XG4gKiBgYGBcbiAqXG4gKiBAdGVtcGxhdGUgVFxuICpcbiAqIEBwYXJhbSB7VH0gcGF0dGVyblxuICpcbiAqIEByZXR1cm4geyAoZWw6IGFueSkgPT4gIGJvb2xlYW4gfSBtYXRjaGVyRm5cbiAqL1xuZnVuY3Rpb24gbWF0Y2hQYXR0ZXJuKHBhdHRlcm4pIHtcblxuICByZXR1cm4gZnVuY3Rpb24oZWwpIHtcblxuICAgIHJldHVybiBldmVyeShwYXR0ZXJuLCBmdW5jdGlvbih2YWwsIGtleSkge1xuICAgICAgcmV0dXJuIGVsW2tleV0gPT09IHZhbDtcbiAgICB9KTtcblxuICB9O1xufVxuXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmcgfCAoKGU6IGFueSkgPT4gYW55KSB9IGV4dHJhY3RvclxuICpcbiAqIEByZXR1cm4geyAoZTogYW55KSA9PiBhbnkgfVxuICovXG5mdW5jdGlvbiB0b0V4dHJhY3RvcihleHRyYWN0b3IpIHtcblxuICAvKipcbiAgICogQHNhdGlzZmllcyB7IChlOiBhbnkpID0+IGFueSB9XG4gICAqL1xuICByZXR1cm4gaXNGdW5jdGlvbihleHRyYWN0b3IpID8gZXh0cmFjdG9yIDogKGUpID0+IHtcblxuICAgIC8vIEB0cy1pZ25vcmU6IGp1c3Qgd29ya3NcbiAgICByZXR1cm4gZVtleHRyYWN0b3JdO1xuICB9O1xufVxuXG5cbi8qKlxuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7TWF0Y2hlcjxUPn0gbWF0Y2hlclxuICpcbiAqIEByZXR1cm4ge01hdGNoRm48VD59XG4gKi9cbmZ1bmN0aW9uIHRvTWF0Y2hlcihtYXRjaGVyKSB7XG4gIHJldHVybiBpc0Z1bmN0aW9uKG1hdGNoZXIpID8gbWF0Y2hlciA6IChlKSA9PiB7XG4gICAgcmV0dXJuIGUgPT09IG1hdGNoZXI7XG4gIH07XG59XG5cblxuZnVuY3Rpb24gaWRlbnRpdHkoYXJnKSB7XG4gIHJldHVybiBhcmc7XG59XG5cbmZ1bmN0aW9uIHRvTnVtKGFyZykge1xuICByZXR1cm4gTnVtYmVyKGFyZyk7XG59XG5cbi8qIGdsb2JhbCBzZXRUaW1lb3V0IGNsZWFyVGltZW91dCAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHsge1xuICogICAoLi4uYXJnczogYW55W10pOiBhbnk7XG4gKiAgIGZsdXNoOiAoKSA9PiB2b2lkO1xuICogICBjYW5jZWw6ICgpID0+IHZvaWQ7XG4gKiB9IH0gRGVib3VuY2VkRnVuY3Rpb25cbiAqL1xuXG4vKipcbiAqIERlYm91bmNlIGZuLCBjYWxsaW5nIGl0IG9ubHkgb25jZSBpZiB0aGUgZ2l2ZW4gdGltZVxuICogZWxhcHNlZCBiZXR3ZWVuIGNhbGxzLlxuICpcbiAqIExvZGFzaC1zdHlsZSB0aGUgZnVuY3Rpb24gZXhwb3NlcyBtZXRob2RzIHRvIGAjY2xlYXJgXG4gKiBhbmQgYCNmbHVzaGAgdG8gY29udHJvbCBpbnRlcm5hbCBiZWhhdmlvci5cbiAqXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSAge051bWJlcn0gdGltZW91dFxuICpcbiAqIEByZXR1cm4ge0RlYm91bmNlZEZ1bmN0aW9ufSBkZWJvdW5jZWQgZnVuY3Rpb25cbiAqL1xuZnVuY3Rpb24gZGVib3VuY2UoZm4sIHRpbWVvdXQpIHtcblxuICBsZXQgdGltZXI7XG5cbiAgbGV0IGxhc3RBcmdzO1xuICBsZXQgbGFzdFRoaXM7XG5cbiAgbGV0IGxhc3ROb3c7XG5cbiAgZnVuY3Rpb24gZmlyZShmb3JjZSkge1xuXG4gICAgbGV0IG5vdyA9IERhdGUubm93KCk7XG5cbiAgICBsZXQgc2NoZWR1bGVkRGlmZiA9IGZvcmNlID8gMCA6IChsYXN0Tm93ICsgdGltZW91dCkgLSBub3c7XG5cbiAgICBpZiAoc2NoZWR1bGVkRGlmZiA+IDApIHtcbiAgICAgIHJldHVybiBzY2hlZHVsZShzY2hlZHVsZWREaWZmKTtcbiAgICB9XG5cbiAgICBmbi5hcHBseShsYXN0VGhpcywgbGFzdEFyZ3MpO1xuXG4gICAgY2xlYXIoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNjaGVkdWxlKHRpbWVvdXQpIHtcbiAgICB0aW1lciA9IHNldFRpbWVvdXQoZmlyZSwgdGltZW91dCk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICBpZiAodGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgfVxuXG4gICAgdGltZXIgPSBsYXN0Tm93ID0gbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIGlmICh0aW1lcikge1xuICAgICAgZmlyZSh0cnVlKTtcbiAgICB9XG5cbiAgICBjbGVhcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlIHsgRGVib3VuY2VkRnVuY3Rpb24gfVxuICAgKi9cbiAgZnVuY3Rpb24gY2FsbGJhY2soLi4uYXJncykge1xuICAgIGxhc3ROb3cgPSBEYXRlLm5vdygpO1xuXG4gICAgbGFzdEFyZ3MgPSBhcmdzO1xuICAgIGxhc3RUaGlzID0gdGhpcztcblxuICAgIC8vIGVuc3VyZSBhbiBleGVjdXRpb24gaXMgc2NoZWR1bGVkXG4gICAgaWYgKCF0aW1lcikge1xuICAgICAgc2NoZWR1bGUodGltZW91dCk7XG4gICAgfVxuICB9XG5cbiAgY2FsbGJhY2suZmx1c2ggPSBmbHVzaDtcbiAgY2FsbGJhY2suY2FuY2VsID0gY2xlYXI7XG5cbiAgcmV0dXJuIGNhbGxiYWNrO1xufVxuXG4vKipcbiAqIFRocm90dGxlIGZuLCBjYWxsaW5nIGF0IG1vc3Qgb25jZVxuICogaW4gdGhlIGdpdmVuIGludGVydmFsLlxuICpcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmblxuICogQHBhcmFtICB7TnVtYmVyfSBpbnRlcnZhbFxuICpcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSB0aHJvdHRsZWQgZnVuY3Rpb25cbiAqL1xuZnVuY3Rpb24gdGhyb3R0bGUoZm4sIGludGVydmFsKSB7XG4gIGxldCB0aHJvdHRsaW5nID0gZmFsc2U7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MpIHtcblxuICAgIGlmICh0aHJvdHRsaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm4oLi4uYXJncyk7XG4gICAgdGhyb3R0bGluZyA9IHRydWU7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRocm90dGxpbmcgPSBmYWxzZTtcbiAgICB9LCBpbnRlcnZhbCk7XG4gIH07XG59XG5cbi8qKlxuICogQmluZCBmdW5jdGlvbiBhZ2FpbnN0IHRhcmdldCA8dGhpcz4uXG4gKlxuICogQHBhcmFtICB7RnVuY3Rpb259IGZuXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgdGFyZ2V0XG4gKlxuICogQHJldHVybiB7RnVuY3Rpb259IGJvdW5kIGZ1bmN0aW9uXG4gKi9cbmZ1bmN0aW9uIGJpbmQoZm4sIHRhcmdldCkge1xuICByZXR1cm4gZm4uYmluZCh0YXJnZXQpO1xufVxuXG4vKipcbiAqIENvbnZlbmllbmNlIHdyYXBwZXIgZm9yIGBPYmplY3QuYXNzaWduYC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0gey4uLk9iamVjdH0gb3RoZXJzXG4gKlxuICogQHJldHVybiB7T2JqZWN0fSB0aGUgdGFyZ2V0XG4gKi9cbmZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIC4uLm90aGVycykge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbih0YXJnZXQsIC4uLm90aGVycyk7XG59XG5cbi8qKlxuICogU2V0cyBhIG5lc3RlZCBwcm9wZXJ0eSBvZiBhIGdpdmVuIG9iamVjdCB0byB0aGUgc3BlY2lmaWVkIHZhbHVlLlxuICpcbiAqIFRoaXMgbXV0YXRlcyB0aGUgb2JqZWN0IGFuZCByZXR1cm5zIGl0LlxuICpcbiAqIEB0ZW1wbGF0ZSBUXG4gKlxuICogQHBhcmFtIHtUfSB0YXJnZXQgVGhlIHRhcmdldCBvZiB0aGUgc2V0IG9wZXJhdGlvbi5cbiAqIEBwYXJhbSB7KHN0cmluZ3xudW1iZXIpW119IHBhdGggVGhlIHBhdGggdG8gdGhlIG5lc3RlZCB2YWx1ZS5cbiAqIEBwYXJhbSB7YW55fSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICpcbiAqIEByZXR1cm4ge1R9XG4gKi9cbmZ1bmN0aW9uIHNldCh0YXJnZXQsIHBhdGgsIHZhbHVlKSB7XG5cbiAgbGV0IGN1cnJlbnRUYXJnZXQgPSB0YXJnZXQ7XG5cbiAgZm9yRWFjaChwYXRoLCBmdW5jdGlvbihrZXksIGlkeCkge1xuXG4gICAgaWYgKHR5cGVvZiBrZXkgIT09ICdudW1iZXInICYmIHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2lsbGVnYWwga2V5IHR5cGU6ICcgKyB0eXBlb2Yga2V5ICsgJy4gS2V5IHNob3VsZCBiZSBvZiB0eXBlIG51bWJlciBvciBzdHJpbmcuJyk7XG4gICAgfVxuXG4gICAgaWYgKGtleSA9PT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbGxlZ2FsIGtleTogY29uc3RydWN0b3InKTtcbiAgICB9XG5cbiAgICBpZiAoa2V5ID09PSAnX19wcm90b19fJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbGxlZ2FsIGtleTogX19wcm90b19fJyk7XG4gICAgfVxuXG4gICAgbGV0IG5leHRLZXkgPSBwYXRoW2lkeCArIDFdO1xuICAgIGxldCBuZXh0VGFyZ2V0ID0gY3VycmVudFRhcmdldFtrZXldO1xuXG4gICAgaWYgKGlzRGVmaW5lZChuZXh0S2V5KSAmJiBpc05pbChuZXh0VGFyZ2V0KSkge1xuICAgICAgbmV4dFRhcmdldCA9IGN1cnJlbnRUYXJnZXRba2V5XSA9IGlzTmFOKCtuZXh0S2V5KSA/IHt9IDogW107XG4gICAgfVxuXG4gICAgaWYgKGlzVW5kZWZpbmVkKG5leHRLZXkpKSB7XG4gICAgICBpZiAoaXNVbmRlZmluZWQodmFsdWUpKSB7XG4gICAgICAgIGRlbGV0ZSBjdXJyZW50VGFyZ2V0W2tleV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyZW50VGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudFRhcmdldCA9IG5leHRUYXJnZXQ7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5cbi8qKlxuICogR2V0cyBhIG5lc3RlZCBwcm9wZXJ0eSBvZiBhIGdpdmVuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0IFRoZSB0YXJnZXQgb2YgdGhlIGdldCBvcGVyYXRpb24uXG4gKiBAcGFyYW0geyhzdHJpbmd8bnVtYmVyKVtdfSBwYXRoIFRoZSBwYXRoIHRvIHRoZSBuZXN0ZWQgdmFsdWUuXG4gKiBAcGFyYW0ge2FueX0gW2RlZmF1bHRWYWx1ZV0gVGhlIHZhbHVlIHRvIHJldHVybiBpZiBubyB2YWx1ZSBleGlzdHMuXG4gKlxuICogQHJldHVybiB7YW55fVxuICovXG5mdW5jdGlvbiBnZXQodGFyZ2V0LCBwYXRoLCBkZWZhdWx0VmFsdWUpIHtcblxuICBsZXQgY3VycmVudFRhcmdldCA9IHRhcmdldDtcblxuICBmb3JFYWNoKHBhdGgsIGZ1bmN0aW9uKGtleSkge1xuXG4gICAgLy8gYWNjZXNzaW5nIG5pbCBwcm9wZXJ0eSB5aWVsZHMgPHVuZGVmaW5lZD5cbiAgICBpZiAoaXNOaWwoY3VycmVudFRhcmdldCkpIHtcbiAgICAgIGN1cnJlbnRUYXJnZXQgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjdXJyZW50VGFyZ2V0ID0gY3VycmVudFRhcmdldFtrZXldO1xuICB9KTtcblxuICByZXR1cm4gaXNVbmRlZmluZWQoY3VycmVudFRhcmdldCkgPyBkZWZhdWx0VmFsdWUgOiBjdXJyZW50VGFyZ2V0O1xufVxuXG4vKipcbiAqIFBpY2sgcHJvcGVydGllcyBmcm9tIHRoZSBnaXZlbiB0YXJnZXQuXG4gKlxuICogQHRlbXBsYXRlIFRcbiAqIEB0ZW1wbGF0ZSB7YW55W119IFZcbiAqXG4gKiBAcGFyYW0ge1R9IHRhcmdldFxuICogQHBhcmFtIHtWfSBwcm9wZXJ0aWVzXG4gKlxuICogQHJldHVybiBQaWNrPFQsIFY+XG4gKi9cbmZ1bmN0aW9uIHBpY2sodGFyZ2V0LCBwcm9wZXJ0aWVzKSB7XG5cbiAgbGV0IHJlc3VsdCA9IHt9O1xuXG4gIGxldCBvYmogPSBPYmplY3QodGFyZ2V0KTtcblxuICBmb3JFYWNoKHByb3BlcnRpZXMsIGZ1bmN0aW9uKHByb3ApIHtcblxuICAgIGlmIChwcm9wIGluIG9iaikge1xuICAgICAgcmVzdWx0W3Byb3BdID0gdGFyZ2V0W3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBQaWNrIGFsbCB0YXJnZXQgcHJvcGVydGllcywgZXhjbHVkaW5nIHRoZSBnaXZlbiBvbmVzLlxuICpcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAdGVtcGxhdGUge2FueVtdfSBWXG4gKlxuICogQHBhcmFtIHtUfSB0YXJnZXRcbiAqIEBwYXJhbSB7Vn0gcHJvcGVydGllc1xuICpcbiAqIEByZXR1cm4ge09taXQ8VCwgVj59IHRhcmdldFxuICovXG5mdW5jdGlvbiBvbWl0KHRhcmdldCwgcHJvcGVydGllcykge1xuXG4gIGxldCByZXN1bHQgPSB7fTtcblxuICBsZXQgb2JqID0gT2JqZWN0KHRhcmdldCk7XG5cbiAgZm9yRWFjaChvYmosIGZ1bmN0aW9uKHByb3AsIGtleSkge1xuXG4gICAgaWYgKHByb3BlcnRpZXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgcmVzdWx0W2tleV0gPSBwcm9wO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBSZWN1cnNpdmVseSBtZXJnZSBgLi4uc291cmNlc2AgaW50byBnaXZlbiB0YXJnZXQuXG4gKlxuICogRG9lcyBzdXBwb3J0IG1lcmdpbmcgb2JqZWN0czsgZG9lcyBub3Qgc3VwcG9ydCBtZXJnaW5nIGFycmF5cy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0gey4uLk9iamVjdH0gc291cmNlc1xuICpcbiAqIEByZXR1cm4ge09iamVjdH0gdGhlIHRhcmdldFxuICovXG5mdW5jdGlvbiBtZXJnZSh0YXJnZXQsIC4uLnNvdXJjZXMpIHtcblxuICBpZiAoIXNvdXJjZXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIGZvckVhY2goc291cmNlcywgZnVuY3Rpb24oc291cmNlKSB7XG5cbiAgICAvLyBza2lwIG5vbi1vYmogc291cmNlcywgaS5lLiBudWxsXG4gICAgaWYgKCFzb3VyY2UgfHwgIWlzT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3JFYWNoKHNvdXJjZSwgZnVuY3Rpb24oc291cmNlVmFsLCBrZXkpIHtcblxuICAgICAgaWYgKGtleSA9PT0gJ19fcHJvdG9fXycpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgdGFyZ2V0VmFsID0gdGFyZ2V0W2tleV07XG5cbiAgICAgIGlmIChpc09iamVjdChzb3VyY2VWYWwpKSB7XG5cbiAgICAgICAgaWYgKCFpc09iamVjdCh0YXJnZXRWYWwpKSB7XG5cbiAgICAgICAgICAvLyBvdmVycmlkZSB0YXJnZXRba2V5XSB3aXRoIG9iamVjdFxuICAgICAgICAgIHRhcmdldFZhbCA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgdGFyZ2V0W2tleV0gPSBtZXJnZSh0YXJnZXRWYWwsIHNvdXJjZVZhbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVZhbDtcbiAgICAgIH1cblxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5leHBvcnQgeyBhc3NpZ24sIGJpbmQsIGRlYm91bmNlLCBlbnN1cmVBcnJheSwgZXZlcnksIGZpbHRlciwgZmluZCwgZmluZEluZGV4LCBmbGF0dGVuLCBmb3JFYWNoLCBnZXQsIGdyb3VwQnksIGhhcywgaXNBcnJheSwgaXNEZWZpbmVkLCBpc0Z1bmN0aW9uLCBpc05pbCwgaXNOdW1iZXIsIGlzT2JqZWN0LCBpc1N0cmluZywgaXNVbmRlZmluZWQsIGtleXMsIG1hcCwgbWF0Y2hQYXR0ZXJuLCBtZXJnZSwgb21pdCwgcGljaywgcmVkdWNlLCBzZXQsIHNpemUsIHNvbWUsIHNvcnRCeSwgdGhyb3R0bGUsIHVuaW9uQnksIHVuaXF1ZUJ5LCB2YWx1ZXMsIHdpdGhvdXQgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IHtcclxuICBnZXRBY2Nlc3NvcixcclxuICByZWdpc3RlckFjY2Vzc29yLFxyXG4gIHJlZ2lzdGVyQWNjZXNzb3JzLFxyXG59IGZyb20gJy4vYWNjZXNzb3JzJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgZ2V0RWRpdG9yLFxyXG4gIHJlZ2lzdGVyRWRpdG9yLFxyXG4gIHJlZ2lzdGVyRGVmYXVsdEVkaXRvclxyXG59IGZyb20gJy4vZWRpdG9ycyc7XHJcblxyXG5leHBvcnQge1xyXG4gIGdldFNjb3BlUHJvdmlkZXIsXHJcbiAgZ2V0U2NvcGVQcm92aWRlcnMsXHJcbiAgcmVnaXN0ZXJTY29wZVByb3ZpZGVyLFxyXG4gIHJlZ2lzdGVyU2NvcGVQcm92aWRlcnMsXHJcbn0gZnJvbSAnLi9zY29wZSc7XHJcblxyXG5leHBvcnQge1xyXG4gIGdldEVkaXRhYmxlVHlwZSxcclxuICBnZXRFZGl0YWJsZVR5cGVzLFxyXG4gIHJlZ2lzdGVyRWRpdGFibGVUeXBlLFxyXG4gIHJlZ2lzdGVyRWRpdGFibGVUeXBlcyxcclxufSBmcm9tICcuL3R5cGVzJztcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9