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
  scopeProvider: null,
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
  Object.entries(typeToImplementation).forEach(([ typeName, implementation ]) => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWndDO0FBQ3hDO0FBQ087QUFDUCxpQkFBaUIscURBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ087QUFDUCxFQUFFLHFEQUFZO0FBQ2Q7QUFDQTtBQUNPO0FBQ1AsRUFBRSxxREFBWTtBQUNkOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2J3QztBQUN4QztBQUNPO0FBQ1AsU0FBUyxxREFBWTtBQUNyQjtBQUNBO0FBQ087QUFDUCxFQUFFLHFEQUFZO0FBQ2Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSd0M7QUFDeEM7QUFDTztBQUNQLFNBQVMscURBQVk7QUFDckI7QUFDQTtBQUNPO0FBQ1AsU0FBUyxxREFBWTtBQUNyQjtBQUNBO0FBQ087QUFDUCxFQUFFLHFEQUFZO0FBQ2Q7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7OztVQ2xCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZtQjtBQUNuQjtBQUlpQjtBQUNqQjtBQU1pQiIsInNvdXJjZXMiOlsid2VicGFjazovL2NhbXVuZGEtbW9kZWxlci1jb2RlLWVkaXRvci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vY2FtdW5kYS1tb2RlbGVyLWNvZGUtZWRpdG9yLy4vbGliL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9jYW11bmRhLW1vZGVsZXItY29kZS1lZGl0b3IvLi9saWIvZWRpdG9ycy5qcyIsIndlYnBhY2s6Ly9jYW11bmRhLW1vZGVsZXItY29kZS1lZGl0b3IvLi9saWIvc2NvcGUuanMiLCJ3ZWJwYWNrOi8vY2FtdW5kYS1tb2RlbGVyLWNvZGUtZWRpdG9yLy4vbGliL3R5cGVzLmpzIiwid2VicGFjazovL2NhbXVuZGEtbW9kZWxlci1jb2RlLWVkaXRvci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jYW11bmRhLW1vZGVsZXItY29kZS1lZGl0b3Ivd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NhbXVuZGEtbW9kZWxlci1jb2RlLWVkaXRvci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NhbXVuZGEtbW9kZWxlci1jb2RlLWVkaXRvci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NhbXVuZGEtbW9kZWxlci1jb2RlLWVkaXRvci8uL2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkoc2VsZiwgKCkgPT4ge1xucmV0dXJuICIsImNvbnN0IERFRkFVTFRfQ09ORklHID0ge1xyXG4gIGRlZmF1bHRFZGl0b3I6IG51bGwsXHJcbiAgZWRpdG9yczoge30sXHJcbiAgdHlwZXM6IHt9LFxyXG4gIHNjb3BlUHJvdmlkZXI6IG51bGwsXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZW5zdXJlQ29uZmlnKCkge1xyXG4gIGlmICghZ2xvYmFsVGhpc1snY29kZS1lZGl0b3InXSkge1xyXG4gICAgZ2xvYmFsVGhpc1snY29kZS1lZGl0b3InXSA9IERFRkFVTFRfQ09ORklHO1xyXG4gIH1cclxuICByZXR1cm4gZ2xvYmFsVGhpc1snY29kZS1lZGl0b3InXTtcclxufVxyXG4iLCJpbXBvcnQgeyBlbnN1cmVDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWRpdG9yKGxhbmd1YWdlKSB7XHJcbiAgY29uc3QgY29uZmlnID0gZW5zdXJlQ29uZmlnKCk7XHJcbiAgcmV0dXJuIGNvbmZpZy5lZGl0b3JzW2xhbmd1YWdlXSB8fCBjb25maWcuZGVmYXVsdEVkaXRvcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyRGVmYXVsdEVkaXRvcihkZWZhdWx0RWRpdG9yKSB7XHJcbiAgZW5zdXJlQ29uZmlnKCkuZGVmYXVsdEVkaXRvciA9IGRlZmF1bHRFZGl0b3I7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckVkaXRvcihsYW5ndWFnZSwgZWRpdG9yKSB7XHJcbiAgZW5zdXJlQ29uZmlnKCkuZWRpdG9yc1tsYW5ndWFnZV0gPSBlZGl0b3I7XHJcbn1cclxuIiwiaW1wb3J0IHsgZW5zdXJlQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjb3BlUHJvdmlkZXIoKSB7XHJcbiAgcmV0dXJuIGVuc3VyZUNvbmZpZygpLnNjb3BlUHJvdmlkZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlclNjb3BlUHJvdmlkZXIocHJvdmlkZXIpIHtcclxuICBlbnN1cmVDb25maWcoKS5zY29wZVByb3ZpZGVyID0gcHJvdmlkZXI7XHJcbn1cclxuIiwiaW1wb3J0IHsgZW5zdXJlQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEVkaXRhYmxlVHlwZXMoKSB7XHJcbiAgcmV0dXJuIGVuc3VyZUNvbmZpZygpLnR5cGVzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWRpdGFibGVUeXBlKHR5cGVOYW1lKSB7XHJcbiAgcmV0dXJuIGVuc3VyZUNvbmZpZygpLnR5cGVzW3R5cGVOYW1lXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyRWRpdGFibGVUeXBlKHR5cGUsIHR5cGVJbXBsZW1lbnRhdGlvbikge1xyXG4gIGVuc3VyZUNvbmZpZygpLnR5cGVzW3R5cGVdID0gdHlwZUltcGxlbWVudGF0aW9uO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJFZGl0YWJsZVR5cGVzKHR5cGVUb0ltcGxlbWVudGF0aW9uKSB7XHJcbiAgT2JqZWN0LmVudHJpZXModHlwZVRvSW1wbGVtZW50YXRpb24pLmZvckVhY2goKFsgdHlwZU5hbWUsIGltcGxlbWVudGF0aW9uIF0pID0+IHtcclxuICAgIHJlZ2lzdGVyRWRpdGFibGVUeXBlKHR5cGVOYW1lLCBpbXBsZW1lbnRhdGlvbik7XHJcbiAgfSk7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQge1xyXG4gIGdldEVkaXRvcixcclxuICByZWdpc3RlckVkaXRvcixcclxuICByZWdpc3RlckRlZmF1bHRFZGl0b3JcclxufSBmcm9tICcuL2VkaXRvcnMnO1xyXG5cclxuZXhwb3J0IHtcclxuICBnZXRTY29wZVByb3ZpZGVyLFxyXG4gIHJlZ2lzdGVyU2NvcGVQcm92aWRlcixcclxufSBmcm9tICcuL3Njb3BlJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgZ2V0RWRpdGFibGVUeXBlLFxyXG4gIGdldEVkaXRhYmxlVHlwZXMsXHJcbiAgcmVnaXN0ZXJFZGl0YWJsZVR5cGUsXHJcbiAgcmVnaXN0ZXJFZGl0YWJsZVR5cGVzLFxyXG59IGZyb20gJy4vdHlwZXMnO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=