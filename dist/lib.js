/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/components/Modal.js":
/*!*********************************!*\
  !*** ./lib/components/Modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! camunda-modeler-plugin-helpers/react */ "./node_modules/camunda-modeler-plugin-helpers/react.js");
/* harmony import */ var camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var camunda_modeler_plugin_helpers_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! camunda-modeler-plugin-helpers/components */ "./node_modules/camunda-modeler-plugin-helpers/components.js");
// eslint-disable-next-line no-unused-vars


const Title = camunda_modeler_plugin_helpers_components__WEBPACK_IMPORTED_MODULE_1__.Modal.Title || (({
  children
}) => /*#__PURE__*/camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, children));
const Body = camunda_modeler_plugin_helpers_components__WEBPACK_IMPORTED_MODULE_1__.Modal.Body || (({
  children
}) => /*#__PURE__*/camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, children));
const Footer = camunda_modeler_plugin_helpers_components__WEBPACK_IMPORTED_MODULE_1__.Modal.Footer || (({
  children
}) => /*#__PURE__*/camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, children));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({
  title,
  children,
  onClose
}) => /*#__PURE__*/camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default().createElement(camunda_modeler_plugin_helpers_components__WEBPACK_IMPORTED_MODULE_1__.Modal, {
  onClose: onClose
}, /*#__PURE__*/camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, null, title, " "), /*#__PURE__*/camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Body, null, " ", children, " "), /*#__PURE__*/camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Footer, null, /*#__PURE__*/camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
  onClick: onClose
}, "Close"))));

/***/ }),

/***/ "./lib/components/index.js":
/*!*********************************!*\
  !*** ./lib/components/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Modal: () => (/* reexport safe */ _Modal__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal */ "./lib/components/Modal.js");


/***/ }),

/***/ "./lib/hooks/index.js":
/*!****************************!*\
  !*** ./lib/hooks/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCodeEditorEvents: () => (/* reexport safe */ _useCodeEditorEvents__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   useModeler: () => (/* reexport safe */ _useModeler__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   useService: () => (/* reexport safe */ _useService__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _useModeler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useModeler */ "./lib/hooks/useModeler.js");
/* harmony import */ var _useService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useService */ "./lib/hooks/useService.js");
/* harmony import */ var _useCodeEditorEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useCodeEditorEvents */ "./lib/hooks/useCodeEditorEvents.js");




/***/ }),

/***/ "./lib/hooks/useCodeEditorEvents.js":
/*!******************************************!*\
  !*** ./lib/hooks/useCodeEditorEvents.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ */ "./lib/index.js");

const DEFAULT_PRIORITY = 1000;
const ALL_FILTER = () => true;
const NO_OP = () => {};

/**
 * The hook aims to simplify integration into code editor events.
 * <br/>
 * As sidenote, it is required to pass in both useCallback and useEffect because react implementation might vary.
 * It is necessary to use the React implementation for the current modeler component.
 * <br>
 * @param eventBus the current event bus
 * @param priority the priority for this hook that is used for event consumption
 * @param filter function that decides whether the current open event is relevant
 * @param onOpen handler what happens when opening a code editor was requested
 * @param onClose handler what happens when closing a code editor was requested
 * @param useCallback useCallback implementation for the environment
 * @param useEffect useCallback implementation for the environment
 * @return {[function,function]} functions to open or close the editor
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({
  eventBus,
  priority = DEFAULT_PRIORITY,
  openFilter = ALL_FILTER,
  closeFilter = ALL_FILTER,
  onOpen = NO_OP,
  onClose = NO_OP,
  useCallback,
  useEffect
}) => {
  const handleOpen = useCallback(evt => {
    if (!openFilter || openFilter(evt)) {
      onOpen(evt);
    }
  }, [onOpen, onClose]);
  const handleClose = useCallback(evt => {
    if (!closeFilter || closeFilter(evt)) {
      onClose(evt);
    }
  }, [closeFilter, onClose]);
  useEffect(() => {
    if (eventBus) {
      eventBus.on(___WEBPACK_IMPORTED_MODULE_0__.events.OPEN_CODE_EDITOR, priority, handleOpen);
      eventBus.on(___WEBPACK_IMPORTED_MODULE_0__.events.CLOSE_CODE_EDITOR, priority, handleClose);
      return () => {
        eventBus.off(___WEBPACK_IMPORTED_MODULE_0__.events.OPEN_CODE_EDITOR, handleOpen);
        eventBus.off(___WEBPACK_IMPORTED_MODULE_0__.events.CLOSE_CODE_EDITOR, handleClose);
      };
    }
  }, [eventBus, handleOpen, handleClose]);
  const openCodeEditor = useCallback(({
    element,
    language,
    value
  }) => {
    if (eventBus) {
      eventBus.fire(___WEBPACK_IMPORTED_MODULE_0__.events.OPEN_CODE_EDITOR, {
        element,
        language,
        value
      });
    }
  }, [eventBus]);
  const closeCodeEditor = useCallback(({
    element,
    language,
    value
  }) => {
    if (eventBus) {
      eventBus.fire(___WEBPACK_IMPORTED_MODULE_0__.events.CLOSE_CODE_EDITOR, {
        element,
        language,
        value
      });
    }
  }, [eventBus]);
  return [openCodeEditor, closeCodeEditor];
});

/***/ }),

/***/ "./lib/hooks/useModeler.js":
/*!*********************************!*\
  !*** ./lib/hooks/useModeler.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({
  subscribe,
  useCallback,
  useEffect,
  useState
}) => {
  const [activeModeler, setActiveModeler] = useState();
  const [tabModelers, setTabModelers] = useState([]);
  const initModeler = useCallback(({
    modeler,
    tab
  }) => {
    setActiveModeler(modeler);
    setTabModelers(prevTabModeler => ({
      ...prevTabModeler,
      [tab.id]: modeler
    }));
  }, []);
  useEffect(() => {
    subscribe('bpmn.modeler.created', ({
      modeler,
      tab
    }) => {
      initModeler({
        modeler,
        tab
      });
    });
    subscribe('dmn.modeler.created', ({
      modeler,
      tab
    }) => {
      initModeler({
        modeler,
        tab
      });
    });
    subscribe('app.activeTabChanged', tab => {
      const activeTabId = tab.activeTab.id;
      const activeTabModeler = tabModelers[activeTabId];
      if (activeTabModeler) {
        setActiveModeler(activeTabModeler);
      }
    });
  }, []);
  return [activeModeler];
});

/***/ }),

/***/ "./lib/hooks/useService.js":
/*!*********************************!*\
  !*** ./lib/hooks/useService.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function safeServiceGetter(modeler, serviceName) {
  if (!modeler || !serviceName) {
    return null;
  }
  if (modeler.get) {
    return modeler.get(serviceName);
  } else {
    return modeler['_' + serviceName];
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({
  modeler,
  services,
  useMemo
}) => {
  return useMemo(() => {
    return services.map(service => safeServiceGetter(modeler, service));
  }, [modeler, services]);
});

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Modal: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Modal),
/* harmony export */   events: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.events),
/* harmony export */   useCodeEditorEvents: () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.useCodeEditorEvents),
/* harmony export */   useModeler: () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.useModeler),
/* harmony export */   useService: () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.useService)
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./lib/components/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks */ "./lib/hooks/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./lib/utils/index.js");




/***/ }),

/***/ "./lib/utils/events.js":
/*!*****************************!*\
  !*** ./lib/utils/events.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CLOSE_CODE_EDITOR: () => (/* binding */ CLOSE_CODE_EDITOR),
/* harmony export */   OPEN_CODE_EDITOR: () => (/* binding */ OPEN_CODE_EDITOR)
/* harmony export */ });
const codePrefix = 'code-editor';
const OPEN_CODE_EDITOR = codePrefix + '.open';
const CLOSE_CODE_EDITOR = codePrefix + '.close';

/***/ }),

/***/ "./lib/utils/index.js":
/*!****************************!*\
  !*** ./lib/utils/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   events: () => (/* reexport module object */ _events__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events */ "./lib/utils/events.js");



/***/ }),

/***/ "./node_modules/camunda-modeler-plugin-helpers/components.js":
/*!*******************************************************************!*\
  !*** ./node_modules/camunda-modeler-plugin-helpers/components.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fill: () => (/* binding */ Fill),
/* harmony export */   Modal: () => (/* binding */ Modal),
/* harmony export */   NotCompatible: () => (/* binding */ NotCompatible),
/* harmony export */   Overlay: () => (/* binding */ Overlay),
/* harmony export */   Section: () => (/* binding */ Section),
/* harmony export */   ToggleSwitch: () => (/* binding */ ToggleSwitch)
/* harmony export */ });
if (!window.components) {
  throw notCompatible('3.4');
}

function notCompatible(requiredVersion) {
  return new Error('Not compatible with Camunda Modeler < v' + requiredVersion);
}

const NotCompatible = function(requiredVersion) {
  return function NotCompatibleComponent() {
    throw notCompatible(requiredVersion);
  };
};

/**
 * Fill component. Set `slot` to "toolbar" to include in the top toolbar.
 * Use `group` and `priority=0` to place for correct ordering. The higher
 * the priority, the earlier the Fill is displayed within the group.
 *
 * @type {import('react').ComponentType<{ slot: string, group?: string, priority?: Number }>}
 *
 * @example
 *
 * import { Fill } from 'camunda-modeler-plugin-helpers/components';
 *
 * function CustomFill(props) {
 *   return (
 *     <Fill group="4_export" slot="toolbar" priority={100}>
 *       <button type="button" onClick={ props.openExportTool }>
 *         Open Export Tool
 *       </button>
 *     </Fill>
 *   );
 * }
 */
const Fill = window.components.Fill;

/**
 * Modal component.
 *
 * @type {import('react').ComponentType<{ onClose: Function }>}
 *
 * @example
 *
 * import { Modal } from 'camunda-modeler-plugin-helpers/components';
 *
 * function CustomModal(props) {
 *   return (
 *    <Modal onClose={ props.onClose }>
 *      <Modal.Title>
 *        Custom Modal
 *      </Modal.Title>
 *      <Modal.Body>
 *        Hello world!
 *      </Modal.Body>
 *      <Modal.Footer>
 *        <button type="button" onClick={ props.onClose }>
 *          Close
 *        </button>
 *      </Modal.Footer>
 *    </Modal>
 *   );
 * }
 */
const Modal = window.components.Modal;

/**
 * Overlay component.
 *
 * @type {import('react').ComponentType<{ 
 *  onClose: Function, 
 *  anchor: Node, 
 *  offset?: { top?: number, bottom?: number, left?: number, right?: number }, 
 *  maxWidth?: number | string,
 *  maxHeight?: number | string,
 *  minWidth?: number | string,
 *  minHeight?: number | string
 * }>}
 *
 * @example
 * 
 * import { Overlay } from 'camunda-modeler-plugin-helpers/components';
 *
 * function CustomOverlay(props) {
 *   return (
 *    <Overlay onClose={ props.onClose } anchor={ props.btn_ref } offset={ props.anchor }>
 *      <Overlay.Title>
 *        Custom Modal
 *      </Overlay.Title>
 *      <Overlay.Body>
 *        Hello world!
 *      </Overlay.Body>
 *      <Overlay.Footer>
 *        <button type="button" onClick={ props.onClose }>
 *          Close
 *        </button>
 *      </Overlay.Footer>
 *    </Overlay>
 *   );
 * }
 */
 const Overlay = window.components.Overlay || NotCompatible('5.0');

 /**
 * Section component.
 *
 * @type {import('react').ComponentType<{ maxHeight: Number | String, relativePos: Boolean } }>}
 *
 * @example
 * 
 * import { Section } from 'camunda-modeler-plugin-helpers/components';
 *
 * function CustomSection(props) {
 *   return (
 *    <Section maxHeight="240px">
 *     <Section.Header>
 *       Custom section
 *     </Section.Header>
 *     <Section.Body>
 *       Hello world!
 *     </Section.Body>
 *     <Section.Actions>
 *      <button type="button" onClick={ props.onClose }>
 *        Close
 *      </button>
 *     </Section.Actions>
 *    </Section>
 *   );
 * }
 */
const Section = window.components.Section || NotCompatible('5.0');

 /**
 * ToggleSwitch component.
 *
 * @type {import('react').ComponentType<{ id: string, name: string, label?: string, switcherLabel?: string, description?: string }>}
 *
 * @example
 * 
 * import { ToggleSwitch } from 'camunda-modeler-plugin-helpers/components';
 *
 * function CustomToggle(props) {
 *   return (
 *    <Formik initialValues={ initialValues } onSubmit={ this.onSubmit }>
 *      {() => (
 *        <Form>
 *          <Field
 *            component={ ToggleSwitch }
 *            switcherLabel="Switcher label"
 *            id={ id }
 *            name={ name }
 *            description="Toggle description"
 *          />
 *        </Form>
 *       )}
 *    </Formik>
 *   );
 * }
 */
const ToggleSwitch = window.components.ToggleSwitch || NotCompatible('5.0');

/***/ }),

/***/ "./node_modules/camunda-modeler-plugin-helpers/react.js":
/*!**************************************************************!*\
  !*** ./node_modules/camunda-modeler-plugin-helpers/react.js ***!
  \**************************************************************/
/***/ ((module) => {

if (!window.react) {
  throw new Error('Not compatible with Camunda Modeler < 3.4');
}

/**
 * React object used by Camunda Modeler. Use it to create UI extension.
 *
 * @type {import('react')}
 */
module.exports = window.react;

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./lib/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=lib.js.map