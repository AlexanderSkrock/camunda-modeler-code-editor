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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7OztBQ1ZBLE1BQU1BLGNBQWMsR0FBRztFQUNyQkMsYUFBYSxFQUFFLElBQUk7RUFDbkJDLE9BQU8sRUFBRSxDQUFDLENBQUM7RUFDWEMsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNUQyxhQUFhLEVBQUU7QUFDakIsQ0FBQztBQUVNLFNBQVNDLFlBQVlBLENBQUEsRUFBRztFQUM3QixJQUFJLENBQUNDLFVBQVUsQ0FBQyxhQUFhLENBQUMsRUFBRTtJQUM5QkEsVUFBVSxDQUFDLGFBQWEsQ0FBQyxHQUFHTixjQUFjO0VBQzVDO0VBQ0EsT0FBT00sVUFBVSxDQUFDLGFBQWEsQ0FBQztBQUNsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNad0M7QUFFakMsU0FBU0MsU0FBU0EsQ0FBQ0MsUUFBUSxFQUFFO0VBQ2xDLE1BQU1DLE1BQU0sR0FBR0oscURBQVksQ0FBQyxDQUFDO0VBQzdCLE9BQU9JLE1BQU0sQ0FBQ1AsT0FBTyxDQUFDTSxRQUFRLENBQUMsSUFBSUMsTUFBTSxDQUFDUixhQUFhO0FBQ3pEO0FBRU8sU0FBU1MscUJBQXFCQSxDQUFDVCxhQUFhLEVBQUU7RUFDbkRJLHFEQUFZLENBQUMsQ0FBQyxDQUFDSixhQUFhLEdBQUdBLGFBQWE7QUFDOUM7QUFFTyxTQUFTVSxjQUFjQSxDQUFDSCxRQUFRLEVBQUVJLE1BQU0sRUFBRTtFQUMvQ1AscURBQVksQ0FBQyxDQUFDLENBQUNILE9BQU8sQ0FBQ00sUUFBUSxDQUFDLEdBQUdJLE1BQU07QUFDM0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUNid0M7QUFFakMsU0FBU0MsZ0JBQWdCQSxDQUFBLEVBQUc7RUFDakMsT0FBT1IscURBQVksQ0FBQyxDQUFDLENBQUNELGFBQWE7QUFDckM7QUFFTyxTQUFTVSxxQkFBcUJBLENBQUNDLFFBQVEsRUFBRTtFQUM5Q1YscURBQVksQ0FBQyxDQUFDLENBQUNELGFBQWEsR0FBR1csUUFBUTtBQUN6Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUndDO0FBRWpDLFNBQVNDLGdCQUFnQkEsQ0FBQSxFQUFHO0VBQ2pDLE9BQU9YLHFEQUFZLENBQUMsQ0FBQyxDQUFDRixLQUFLO0FBQzdCO0FBRU8sU0FBU2MsZUFBZUEsQ0FBQ0MsUUFBUSxFQUFFO0VBQ3hDLE9BQU9iLHFEQUFZLENBQUMsQ0FBQyxDQUFDRixLQUFLLENBQUNlLFFBQVEsQ0FBQztBQUN2QztBQUVPLFNBQVNDLG9CQUFvQkEsQ0FBQ0MsSUFBSSxFQUFFQyxrQkFBa0IsRUFBRTtFQUM3RGhCLHFEQUFZLENBQUMsQ0FBQyxDQUFDRixLQUFLLENBQUNpQixJQUFJLENBQUMsR0FBR0Msa0JBQWtCO0FBQ2pEO0FBRU8sU0FBU0MscUJBQXFCQSxDQUFDQyxvQkFBb0IsRUFBRTtFQUMxREMsTUFBTSxDQUFDQyxPQUFPLENBQUNGLG9CQUFvQixDQUFDLENBQUNHLE9BQU8sQ0FBQyxDQUFDLENBQUVSLFFBQVEsRUFBRVMsY0FBYyxDQUFFLEtBQUs7SUFDN0VSLG9CQUFvQixDQUFDRCxRQUFRLEVBQUVTLGNBQWMsQ0FBQztFQUNoRCxDQUFDLENBQUM7QUFDSjs7Ozs7O1VDbEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRm1CO0FBS0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYW11bmRhLW1vZGVsZXItY29kZS1lZGl0b3Ivd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2NhbXVuZGEtbW9kZWxlci1jb2RlLWVkaXRvci8uL2xpYi9jb25maWcuanMiLCJ3ZWJwYWNrOi8vY2FtdW5kYS1tb2RlbGVyLWNvZGUtZWRpdG9yLy4vbGliL2VkaXRvcnMuanMiLCJ3ZWJwYWNrOi8vY2FtdW5kYS1tb2RlbGVyLWNvZGUtZWRpdG9yLy4vbGliL3Njb3BlLmpzIiwid2VicGFjazovL2NhbXVuZGEtbW9kZWxlci1jb2RlLWVkaXRvci8uL2xpYi90eXBlcy5qcyIsIndlYnBhY2s6Ly9jYW11bmRhLW1vZGVsZXItY29kZS1lZGl0b3Ivd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2FtdW5kYS1tb2RlbGVyLWNvZGUtZWRpdG9yL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jYW11bmRhLW1vZGVsZXItY29kZS1lZGl0b3Ivd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jYW11bmRhLW1vZGVsZXItY29kZS1lZGl0b3Ivd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jYW11bmRhLW1vZGVsZXItY29kZS1lZGl0b3IvLi9saWIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHNlbGYsICgpID0+IHtcbnJldHVybiAiLCJjb25zdCBERUZBVUxUX0NPTkZJRyA9IHtcclxuICBkZWZhdWx0RWRpdG9yOiBudWxsLFxyXG4gIGVkaXRvcnM6IHt9LFxyXG4gIHR5cGVzOiB7fSxcclxuICBzY29wZVByb3ZpZGVyOiBudWxsLFxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVuc3VyZUNvbmZpZygpIHtcclxuICBpZiAoIWdsb2JhbFRoaXNbJ2NvZGUtZWRpdG9yJ10pIHtcclxuICAgIGdsb2JhbFRoaXNbJ2NvZGUtZWRpdG9yJ10gPSBERUZBVUxUX0NPTkZJRztcclxuICB9XHJcbiAgcmV0dXJuIGdsb2JhbFRoaXNbJ2NvZGUtZWRpdG9yJ107XHJcbn1cclxuIiwiaW1wb3J0IHsgZW5zdXJlQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEVkaXRvcihsYW5ndWFnZSkge1xyXG4gIGNvbnN0IGNvbmZpZyA9IGVuc3VyZUNvbmZpZygpO1xyXG4gIHJldHVybiBjb25maWcuZWRpdG9yc1tsYW5ndWFnZV0gfHwgY29uZmlnLmRlZmF1bHRFZGl0b3I7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckRlZmF1bHRFZGl0b3IoZGVmYXVsdEVkaXRvcikge1xyXG4gIGVuc3VyZUNvbmZpZygpLmRlZmF1bHRFZGl0b3IgPSBkZWZhdWx0RWRpdG9yO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJFZGl0b3IobGFuZ3VhZ2UsIGVkaXRvcikge1xyXG4gIGVuc3VyZUNvbmZpZygpLmVkaXRvcnNbbGFuZ3VhZ2VdID0gZWRpdG9yO1xyXG59XHJcbiIsImltcG9ydCB7IGVuc3VyZUNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTY29wZVByb3ZpZGVyKCkge1xyXG4gIHJldHVybiBlbnN1cmVDb25maWcoKS5zY29wZVByb3ZpZGVyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJTY29wZVByb3ZpZGVyKHByb3ZpZGVyKSB7XHJcbiAgZW5zdXJlQ29uZmlnKCkuc2NvcGVQcm92aWRlciA9IHByb3ZpZGVyO1xyXG59XHJcbiIsImltcG9ydCB7IGVuc3VyZUNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRFZGl0YWJsZVR5cGVzKCkge1xyXG4gIHJldHVybiBlbnN1cmVDb25maWcoKS50eXBlcztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEVkaXRhYmxlVHlwZSh0eXBlTmFtZSkge1xyXG4gIHJldHVybiBlbnN1cmVDb25maWcoKS50eXBlc1t0eXBlTmFtZV07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckVkaXRhYmxlVHlwZSh0eXBlLCB0eXBlSW1wbGVtZW50YXRpb24pIHtcclxuICBlbnN1cmVDb25maWcoKS50eXBlc1t0eXBlXSA9IHR5cGVJbXBsZW1lbnRhdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyRWRpdGFibGVUeXBlcyh0eXBlVG9JbXBsZW1lbnRhdGlvbikge1xyXG4gIE9iamVjdC5lbnRyaWVzKHR5cGVUb0ltcGxlbWVudGF0aW9uKS5mb3JFYWNoKChbIHR5cGVOYW1lLCBpbXBsZW1lbnRhdGlvbiBdKSA9PiB7XHJcbiAgICByZWdpc3RlckVkaXRhYmxlVHlwZSh0eXBlTmFtZSwgaW1wbGVtZW50YXRpb24pO1xyXG4gIH0pO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IHtcclxuICBnZXRFZGl0b3IsXHJcbiAgcmVnaXN0ZXJFZGl0b3IsXHJcbiAgcmVnaXN0ZXJEZWZhdWx0RWRpdG9yXHJcbn0gZnJvbSAnLi9lZGl0b3JzJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgZ2V0U2NvcGVQcm92aWRlcixcclxuICByZWdpc3RlclNjb3BlUHJvdmlkZXIsXHJcbn0gZnJvbSAnLi9zY29wZSc7XHJcblxyXG5leHBvcnQge1xyXG4gIGdldEVkaXRhYmxlVHlwZSxcclxuICBnZXRFZGl0YWJsZVR5cGVzLFxyXG4gIHJlZ2lzdGVyRWRpdGFibGVUeXBlLFxyXG4gIHJlZ2lzdGVyRWRpdGFibGVUeXBlcyxcclxufSBmcm9tICcuL3R5cGVzJztcclxuIl0sIm5hbWVzIjpbIkRFRkFVTFRfQ09ORklHIiwiZGVmYXVsdEVkaXRvciIsImVkaXRvcnMiLCJ0eXBlcyIsInNjb3BlUHJvdmlkZXIiLCJlbnN1cmVDb25maWciLCJnbG9iYWxUaGlzIiwiZ2V0RWRpdG9yIiwibGFuZ3VhZ2UiLCJjb25maWciLCJyZWdpc3RlckRlZmF1bHRFZGl0b3IiLCJyZWdpc3RlckVkaXRvciIsImVkaXRvciIsImdldFNjb3BlUHJvdmlkZXIiLCJyZWdpc3RlclNjb3BlUHJvdmlkZXIiLCJwcm92aWRlciIsImdldEVkaXRhYmxlVHlwZXMiLCJnZXRFZGl0YWJsZVR5cGUiLCJ0eXBlTmFtZSIsInJlZ2lzdGVyRWRpdGFibGVUeXBlIiwidHlwZSIsInR5cGVJbXBsZW1lbnRhdGlvbiIsInJlZ2lzdGVyRWRpdGFibGVUeXBlcyIsInR5cGVUb0ltcGxlbWVudGF0aW9uIiwiT2JqZWN0IiwiZW50cmllcyIsImZvckVhY2giLCJpbXBsZW1lbnRhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=