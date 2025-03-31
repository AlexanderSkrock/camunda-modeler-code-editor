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
  types: {},
  scopeProvider: null
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
/* harmony export */   registerScopeProvider: () => (/* binding */ registerScopeProvider)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./lib/config.js");

function getScopeProvider() {
  return (0,_config__WEBPACK_IMPORTED_MODULE_0__.ensureConfig)().scopeProvider;
}
function registerScopeProvider(provider) {
  (0,_config__WEBPACK_IMPORTED_MODULE_0__.ensureConfig)().scopeProvider = provider;
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
  return (0,_config__WEBPACK_IMPORTED_MODULE_0__.ensureConfig)().types;
}
function getEditableType(typeName) {
  return (0,_config__WEBPACK_IMPORTED_MODULE_0__.ensureConfig)().types[typeName];
}
function registerEditableType(type, typeImplementation) {
  (0,_config__WEBPACK_IMPORTED_MODULE_0__.ensureConfig)().types[type] = typeImplementation;
}
function registerEditableTypes(typeToImplementation) {
  Object.entries(typeToImplementation).forEach(([typeName, implementation]) => {
    registerEditableType(typeName, implementation);
  });
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
/* harmony export */   getEditableType: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_2__.getEditableType),
/* harmony export */   getEditableTypes: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_2__.getEditableTypes),
/* harmony export */   getEditor: () => (/* reexport safe */ _editors__WEBPACK_IMPORTED_MODULE_0__.getEditor),
/* harmony export */   getScopeProvider: () => (/* reexport safe */ _scope__WEBPACK_IMPORTED_MODULE_1__.getScopeProvider),
/* harmony export */   registerDefaultEditor: () => (/* reexport safe */ _editors__WEBPACK_IMPORTED_MODULE_0__.registerDefaultEditor),
/* harmony export */   registerEditableType: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_2__.registerEditableType),
/* harmony export */   registerEditableTypes: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_2__.registerEditableTypes),
/* harmony export */   registerEditor: () => (/* reexport safe */ _editors__WEBPACK_IMPORTED_MODULE_0__.registerEditor),
/* harmony export */   registerScopeProvider: () => (/* reexport safe */ _scope__WEBPACK_IMPORTED_MODULE_1__.registerScopeProvider)
/* harmony export */ });
/* harmony import */ var _editors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editors */ "./lib/editors.js");
/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scope */ "./lib/scope.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./lib/types.js");



})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=lib.js.map