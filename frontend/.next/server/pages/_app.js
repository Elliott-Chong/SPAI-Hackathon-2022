/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context.js":
/*!********************!*\
  !*** ./context.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"useGlobalContext\": () => (/* binding */ useGlobalContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ \"./reducer.js\");\n\n\n\nconst AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst Context = ({ children  })=>{\n    const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_1___default().useReducer(_reducer__WEBPACK_IMPORTED_MODULE_2__.reducer, _reducer__WEBPACK_IMPORTED_MODULE_2__.initialState);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        console.log(state);\n    }, [\n        state\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppContext.Provider, {\n        value: {\n            state,\n            dispatch\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/elliott/Documents/Coding/SPAI-Hackathon-2022/frontend/context.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\nconst useGlobalContext = ()=>{\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AppContext);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Context);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUF5RDtBQUNQO0FBRWxELE1BQU1LLFVBQVUsaUJBQUdKLG9EQUFhLEVBQUU7QUFFbEMsTUFBTUssT0FBTyxHQUFHLENBQUMsRUFBRUMsUUFBUSxHQUFFLEdBQUs7SUFDaEMsTUFBTSxDQUFDQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHVCx1REFBZ0IsQ0FBQ0csNkNBQU8sRUFBRUMsa0RBQVksQ0FBQztJQUNqRUosc0RBQWUsQ0FBQyxJQUFNO1FBQ3BCWSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsS0FBSyxDQUFDLENBQUM7S0FDcEIsRUFBRTtRQUFDQSxLQUFLO0tBQUMsQ0FBQyxDQUFDO0lBQ1oscUJBQ0UsOERBQUNILFVBQVUsQ0FBQ1MsUUFBUTtRQUNsQkMsS0FBSyxFQUFFO1lBQ0xQLEtBQUs7WUFDTEMsUUFBUTtTQUNUO2tCQUVBRixRQUFROzs7OztpQkFDVyxDQUN0QjtDQUNIO0FBRUQsTUFBTVMsZ0JBQWdCLEdBQUcsSUFBTTtJQUM3QixPQUFPZCxpREFBVSxDQUFDRyxVQUFVLENBQUMsQ0FBQztDQUMvQjtBQUVELGlFQUFlQyxPQUFPLEVBQUM7QUFDSyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vY29udGV4dC5qcz8wMTk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyByZWR1Y2VyLCBpbml0aWFsU3RhdGUgfSBmcm9tIFwiLi9yZWR1Y2VyXCI7XG5cbmNvbnN0IEFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmNvbnN0IENvbnRleHQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gUmVhY3QudXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHN0YXRlKTtcbiAgfSwgW3N0YXRlXSk7XG4gIHJldHVybiAoXG4gICAgPEFwcENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIHN0YXRlLFxuICAgICAgICBkaXNwYXRjaCxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmNvbnN0IHVzZUdsb2JhbENvbnRleHQgPSAoKSA9PiB7XG4gIHJldHVybiB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGV4dDtcbmV4cG9ydCB7IHVzZUdsb2JhbENvbnRleHQgfTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwicmVkdWNlciIsImluaXRpYWxTdGF0ZSIsIkFwcENvbnRleHQiLCJDb250ZXh0IiwiY2hpbGRyZW4iLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJQcm92aWRlciIsInZhbHVlIiwidXNlR2xvYmFsQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_game_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/game.css */ \"./styles/game.css\");\n/* harmony import */ var _styles_game_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_game_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context */ \"./context.js\");\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/elliott/Documents/Coding/SPAI-Hackathon-2022/frontend/pages/_app.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/elliott/Documents/Coding/SPAI-Hackathon-2022/frontend/pages/_app.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBK0I7QUFDSDtBQUNLO0FBRWpDLFNBQVNDLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBQ3ZDLHFCQUNFLDhEQUFDSCxnREFBTztrQkFDTiw0RUFBQ0UsU0FBUztZQUFFLEdBQUdDLFNBQVM7Ozs7O2dCQUFJOzs7OztZQUNwQixDQUNWO0NBQ0g7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2FtZS5jc3NcIjtcbmltcG9ydCBDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0XCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxDb250ZXh0PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvQ29udGV4dD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiQ29udGV4dCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./reducer.js":
/*!********************!*\
  !*** ./reducer.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initialState\": () => (/* binding */ initialState),\n/* harmony export */   \"reducer\": () => (/* binding */ reducer)\n/* harmony export */ });\nconst initialState = {\n    user: null,\n    treasured: [],\n    inventory: []\n};\nconst reducer = (state, action)=>{\n    const { type , payload  } = action;\n    switch(type){\n        case \"set_user\":\n            const { displayName , photoURL , email  } = payload;\n            return {\n                ...state,\n                user: {\n                    displayName,\n                    photoURL,\n                    email\n                }\n            };\n        case \"logout\":\n            return {\n                ...state,\n                user: null\n            };\n        case \"update_inventory\":\n            const { Class_names_identified  } = payload;\n            // [shirt, bottle, bottle]\n            // items = [{name: shirt, count: 1}, {name: bottle, count: 2}]\n            let items = [];\n            for (let item of Class_names_identified){\n                if (items.some((i)=>i.name == item)) {\n                    for (let i of items){\n                        if (i.name == item) {\n                            i.count++;\n                        }\n                    }\n                } else {\n                    items.push({\n                        name: item,\n                        count: 1\n                    });\n                }\n            }\n            return {\n                ...state,\n                inventory: items\n            };\n        default:\n            return state;\n    }\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsTUFBTUEsWUFBWSxHQUFHO0lBQ25CQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxTQUFTLEVBQUUsRUFBRTtJQUNiQyxTQUFTLEVBQUUsRUFBRTtDQUNkO0FBRUQsTUFBTUMsT0FBTyxHQUFHLENBQUNDLEtBQUssRUFBRUMsTUFBTSxHQUFLO0lBQ2pDLE1BQU0sRUFBRUMsSUFBSSxHQUFFQyxPQUFPLEdBQUUsR0FBR0YsTUFBTTtJQUNoQyxPQUFRQyxJQUFJO1FBQ1YsS0FBSyxVQUFVO1lBQ2IsTUFBTSxFQUFFRSxXQUFXLEdBQUVDLFFBQVEsR0FBRUMsS0FBSyxHQUFFLEdBQUdILE9BQU87WUFDaEQsT0FBTztnQkFDTCxHQUFHSCxLQUFLO2dCQUNSSixJQUFJLEVBQUU7b0JBQ0pRLFdBQVc7b0JBQ1hDLFFBQVE7b0JBQ1JDLEtBQUs7aUJBQ047YUFDRixDQUFDO1FBQ0osS0FBSyxRQUFRO1lBQ1gsT0FBTztnQkFBRSxHQUFHTixLQUFLO2dCQUFFSixJQUFJLEVBQUUsSUFBSTthQUFFLENBQUM7UUFDbEMsS0FBSyxrQkFBa0I7WUFDckIsTUFBTSxFQUFFVyxzQkFBc0IsR0FBRSxHQUFHSixPQUFPO1lBRTFDLDBCQUEwQjtZQUMxQiw4REFBOEQ7WUFDOUQsSUFBSUssS0FBSyxHQUFHLEVBQUU7WUFDZCxLQUFLLElBQUlDLElBQUksSUFBSUYsc0JBQXNCLENBQUU7Z0JBQ3ZDLElBQUlDLEtBQUssQ0FBQ0UsSUFBSSxDQUFDLENBQUNDLENBQUMsR0FBS0EsQ0FBQyxDQUFDQyxJQUFJLElBQUlILElBQUksQ0FBQyxFQUFFO29CQUNyQyxLQUFLLElBQUlFLENBQUMsSUFBSUgsS0FBSyxDQUFFO3dCQUNuQixJQUFJRyxDQUFDLENBQUNDLElBQUksSUFBSUgsSUFBSSxFQUFFOzRCQUNsQkUsQ0FBQyxDQUFDRSxLQUFLLEVBQUUsQ0FBQzt5QkFDWDtxQkFDRjtpQkFDRixNQUFNO29CQUNMTCxLQUFLLENBQUNNLElBQUksQ0FBQzt3QkFBRUYsSUFBSSxFQUFFSCxJQUFJO3dCQUFFSSxLQUFLLEVBQUUsQ0FBQztxQkFBRSxDQUFDLENBQUM7aUJBQ3RDO2FBQ0Y7WUFFRCxPQUFPO2dCQUFFLEdBQUdiLEtBQUs7Z0JBQUVGLFNBQVMsRUFBRVUsS0FBSzthQUFFLENBQUM7UUFDeEM7WUFDRSxPQUFPUixLQUFLLENBQUM7S0FDaEI7Q0FDRjtBQUNnQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vcmVkdWNlci5qcz83ZGM3Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgdXNlcjogbnVsbCxcbiAgdHJlYXN1cmVkOiBbXSxcbiAgaW52ZW50b3J5OiBbXSxcbn07XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBjb25zdCB7IHR5cGUsIHBheWxvYWQgfSA9IGFjdGlvbjtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBcInNldF91c2VyXCI6XG4gICAgICBjb25zdCB7IGRpc3BsYXlOYW1lLCBwaG90b1VSTCwgZW1haWwgfSA9IHBheWxvYWQ7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdXNlcjoge1xuICAgICAgICAgIGRpc3BsYXlOYW1lLFxuICAgICAgICAgIHBob3RvVVJMLFxuICAgICAgICAgIGVtYWlsLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICBjYXNlIFwibG9nb3V0XCI6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdXNlcjogbnVsbCB9O1xuICAgIGNhc2UgXCJ1cGRhdGVfaW52ZW50b3J5XCI6XG4gICAgICBjb25zdCB7IENsYXNzX25hbWVzX2lkZW50aWZpZWQgfSA9IHBheWxvYWQ7XG5cbiAgICAgIC8vIFtzaGlydCwgYm90dGxlLCBib3R0bGVdXG4gICAgICAvLyBpdGVtcyA9IFt7bmFtZTogc2hpcnQsIGNvdW50OiAxfSwge25hbWU6IGJvdHRsZSwgY291bnQ6IDJ9XVxuICAgICAgbGV0IGl0ZW1zID0gW107XG4gICAgICBmb3IgKGxldCBpdGVtIG9mIENsYXNzX25hbWVzX2lkZW50aWZpZWQpIHtcbiAgICAgICAgaWYgKGl0ZW1zLnNvbWUoKGkpID0+IGkubmFtZSA9PSBpdGVtKSkge1xuICAgICAgICAgIGZvciAobGV0IGkgb2YgaXRlbXMpIHtcbiAgICAgICAgICAgIGlmIChpLm5hbWUgPT0gaXRlbSkge1xuICAgICAgICAgICAgICBpLmNvdW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1zLnB1c2goeyBuYW1lOiBpdGVtLCBjb3VudDogMSB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaW52ZW50b3J5OiBpdGVtcyB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5leHBvcnQgeyBpbml0aWFsU3RhdGUsIHJlZHVjZXIgfTtcbiJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJ1c2VyIiwidHJlYXN1cmVkIiwiaW52ZW50b3J5IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJkaXNwbGF5TmFtZSIsInBob3RvVVJMIiwiZW1haWwiLCJDbGFzc19uYW1lc19pZGVudGlmaWVkIiwiaXRlbXMiLCJpdGVtIiwic29tZSIsImkiLCJuYW1lIiwiY291bnQiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducer.js\n");

/***/ }),

/***/ "./styles/game.css":
/*!*************************!*\
  !*** ./styles/game.css ***!
  \*************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();