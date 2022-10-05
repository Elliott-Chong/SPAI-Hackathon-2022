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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"useGlobalContext\": () => (/* binding */ useGlobalContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ \"./reducer.js\");\n\n\n\nconst AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst Context = ({ children  })=>{\n    const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_1___default().useReducer(_reducer__WEBPACK_IMPORTED_MODULE_2__.reducer, _reducer__WEBPACK_IMPORTED_MODULE_2__.initialState);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        console.log(state);\n    }, [\n        state\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppContext.Provider, {\n        value: {\n            state,\n            dispatch\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\zzhen\\\\Code\\\\SPAI-Hackathon-2022\\\\frontend\\\\context.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\nconst useGlobalContext = ()=>{\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AppContext);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Context);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUF5RDtBQUNQO0FBRWxELE1BQU1LLFVBQVUsaUJBQUdKLG9EQUFhLEVBQUU7QUFFbEMsTUFBTUssT0FBTyxHQUFHLENBQUMsRUFBRUMsUUFBUSxHQUFFLEdBQUs7SUFDaEMsTUFBTSxDQUFDQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHVCx1REFBZ0IsQ0FBQ0csNkNBQU8sRUFBRUMsa0RBQVksQ0FBQztJQUNqRUosc0RBQWUsQ0FBQyxJQUFNO1FBQ3BCWSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsS0FBSyxDQUFDLENBQUM7S0FDcEIsRUFBRTtRQUFDQSxLQUFLO0tBQUMsQ0FBQyxDQUFDO0lBQ1oscUJBQ0UsOERBQUNILFVBQVUsQ0FBQ1MsUUFBUTtRQUNsQkMsS0FBSyxFQUFFO1lBQ0xQLEtBQUs7WUFDTEMsUUFBUTtTQUNUO2tCQUVBRixRQUFROzs7OztpQkFDVyxDQUN0QjtDQUNIO0FBRUQsTUFBTVMsZ0JBQWdCLEdBQUcsSUFBTTtJQUM3QixPQUFPZCxpREFBVSxDQUFDRyxVQUFVLENBQUMsQ0FBQztDQUMvQjtBQUVELGlFQUFlQyxPQUFPLEVBQUM7QUFDSyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vY29udGV4dC5qcz8wMTk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHJlZHVjZXIsIGluaXRpYWxTdGF0ZSB9IGZyb20gXCIuL3JlZHVjZXJcIjtcclxuXHJcbmNvbnN0IEFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBDb250ZXh0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gUmVhY3QudXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhzdGF0ZSk7XHJcbiAgfSwgW3N0YXRlXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBcHBDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgc3RhdGUsXHJcbiAgICAgICAgZGlzcGF0Y2gsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgdXNlR2xvYmFsQ29udGV4dCA9ICgpID0+IHtcclxuICByZXR1cm4gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRleHQ7XHJcbmV4cG9ydCB7IHVzZUdsb2JhbENvbnRleHQgfTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJyZWR1Y2VyIiwiaW5pdGlhbFN0YXRlIiwiQXBwQ29udGV4dCIsIkNvbnRleHQiLCJjaGlsZHJlbiIsInN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VSZWR1Y2VyIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VHbG9iYWxDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_game_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/game.css */ \"./styles/game.css\");\n/* harmony import */ var _styles_game_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_game_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context */ \"./context.js\");\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\zzhen\\\\Code\\\\SPAI-Hackathon-2022\\\\frontend\\\\pages\\\\_app.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\zzhen\\\\Code\\\\SPAI-Hackathon-2022\\\\frontend\\\\pages\\\\_app.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBK0I7QUFDSDtBQUNLO0FBRWpDLFNBQVNDLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBQ3ZDLHFCQUNFLDhEQUFDSCxnREFBTztrQkFDTiw0RUFBQ0UsU0FBUztZQUFFLEdBQUdDLFNBQVM7Ozs7O2dCQUFJOzs7OztZQUNwQixDQUNWO0NBQ0g7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlcy9nYW1lLmNzc1wiO1xyXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dFwiO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250ZXh0PlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8L0NvbnRleHQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiJdLCJuYW1lcyI6WyJDb250ZXh0IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./reducer.js":
/*!********************!*\
  !*** ./reducer.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initialState\": () => (/* binding */ initialState),\n/* harmony export */   \"reducer\": () => (/* binding */ reducer)\n/* harmony export */ });\nconst initialState = {\n    user: null,\n    treasured: [],\n    inventory: []\n};\nconst reducer = (state, action)=>{\n    const { type , payload  } = action;\n    switch(type){\n        case \"set_user\":\n            const { displayName , photoURL , email  } = payload;\n            return {\n                ...state,\n                user: {\n                    displayName,\n                    photoURL,\n                    email\n                }\n            };\n        case \"logout\":\n            return {\n                ...state,\n                user: null\n            };\n        case \"update_inventory\":\n            const { Class_names_identified  } = payload;\n            // [shirt, bottle, bottle]\n            // items = [{name: shirt, count: 1}, {name: bottle, count: 2}]\n            let items = [];\n            for (let item of Class_names_identified){\n                if (items.some((i)=>i.name == item)) {\n                    for (let i of items){\n                        if (i.name == item) {\n                            i.count++;\n                        }\n                    }\n                } else {\n                    items.push({\n                        name: item,\n                        count: 1\n                    });\n                }\n            }\n            return {\n                ...state,\n                inventory: items\n            };\n        default:\n            return state;\n    }\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsTUFBTUEsWUFBWSxHQUFHO0lBQ25CQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxTQUFTLEVBQUUsRUFBRTtJQUNiQyxTQUFTLEVBQUUsRUFBRTtDQUNkO0FBRUQsTUFBTUMsT0FBTyxHQUFHLENBQUNDLEtBQUssRUFBRUMsTUFBTSxHQUFLO0lBQ2pDLE1BQU0sRUFBRUMsSUFBSSxHQUFFQyxPQUFPLEdBQUUsR0FBR0YsTUFBTTtJQUNoQyxPQUFRQyxJQUFJO1FBQ1YsS0FBSyxVQUFVO1lBQ2IsTUFBTSxFQUFFRSxXQUFXLEdBQUVDLFFBQVEsR0FBRUMsS0FBSyxHQUFFLEdBQUdILE9BQU87WUFDaEQsT0FBTztnQkFDTCxHQUFHSCxLQUFLO2dCQUNSSixJQUFJLEVBQUU7b0JBQ0pRLFdBQVc7b0JBQ1hDLFFBQVE7b0JBQ1JDLEtBQUs7aUJBQ047YUFDRixDQUFDO1FBQ0osS0FBSyxRQUFRO1lBQ1gsT0FBTztnQkFBRSxHQUFHTixLQUFLO2dCQUFFSixJQUFJLEVBQUUsSUFBSTthQUFFLENBQUM7UUFDbEMsS0FBSyxrQkFBa0I7WUFDckIsTUFBTSxFQUFFVyxzQkFBc0IsR0FBRSxHQUFHSixPQUFPO1lBRTFDLDBCQUEwQjtZQUMxQiw4REFBOEQ7WUFDOUQsSUFBSUssS0FBSyxHQUFHLEVBQUU7WUFDZCxLQUFLLElBQUlDLElBQUksSUFBSUYsc0JBQXNCLENBQUU7Z0JBQ3ZDLElBQUlDLEtBQUssQ0FBQ0UsSUFBSSxDQUFDLENBQUNDLENBQUMsR0FBS0EsQ0FBQyxDQUFDQyxJQUFJLElBQUlILElBQUksQ0FBQyxFQUFFO29CQUNyQyxLQUFLLElBQUlFLENBQUMsSUFBSUgsS0FBSyxDQUFFO3dCQUNuQixJQUFJRyxDQUFDLENBQUNDLElBQUksSUFBSUgsSUFBSSxFQUFFOzRCQUNsQkUsQ0FBQyxDQUFDRSxLQUFLLEVBQUUsQ0FBQzt5QkFDWDtxQkFDRjtpQkFDRixNQUFNO29CQUNMTCxLQUFLLENBQUNNLElBQUksQ0FBQzt3QkFBRUYsSUFBSSxFQUFFSCxJQUFJO3dCQUFFSSxLQUFLLEVBQUUsQ0FBQztxQkFBRSxDQUFDLENBQUM7aUJBQ3RDO2FBQ0Y7WUFFRCxPQUFPO2dCQUFFLEdBQUdiLEtBQUs7Z0JBQUVGLFNBQVMsRUFBRVUsS0FBSzthQUFFLENBQUM7UUFDeEM7WUFDRSxPQUFPUixLQUFLLENBQUM7S0FDaEI7Q0FDRjtBQUNnQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vcmVkdWNlci5qcz83ZGM3Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICB1c2VyOiBudWxsLFxyXG4gIHRyZWFzdXJlZDogW10sXHJcbiAgaW52ZW50b3J5OiBbXSxcclxufTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGNvbnN0IHsgdHlwZSwgcGF5bG9hZCB9ID0gYWN0aW9uO1xyXG4gIHN3aXRjaCAodHlwZSkge1xyXG4gICAgY2FzZSBcInNldF91c2VyXCI6XHJcbiAgICAgIGNvbnN0IHsgZGlzcGxheU5hbWUsIHBob3RvVVJMLCBlbWFpbCB9ID0gcGF5bG9hZDtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB1c2VyOiB7XHJcbiAgICAgICAgICBkaXNwbGF5TmFtZSxcclxuICAgICAgICAgIHBob3RvVVJMLFxyXG4gICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgXCJsb2dvdXRcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHVzZXI6IG51bGwgfTtcclxuICAgIGNhc2UgXCJ1cGRhdGVfaW52ZW50b3J5XCI6XHJcbiAgICAgIGNvbnN0IHsgQ2xhc3NfbmFtZXNfaWRlbnRpZmllZCB9ID0gcGF5bG9hZDtcclxuXHJcbiAgICAgIC8vIFtzaGlydCwgYm90dGxlLCBib3R0bGVdXHJcbiAgICAgIC8vIGl0ZW1zID0gW3tuYW1lOiBzaGlydCwgY291bnQ6IDF9LCB7bmFtZTogYm90dGxlLCBjb3VudDogMn1dXHJcbiAgICAgIGxldCBpdGVtcyA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpdGVtIG9mIENsYXNzX25hbWVzX2lkZW50aWZpZWQpIHtcclxuICAgICAgICBpZiAoaXRlbXMuc29tZSgoaSkgPT4gaS5uYW1lID09IGl0ZW0pKSB7XHJcbiAgICAgICAgICBmb3IgKGxldCBpIG9mIGl0ZW1zKSB7XHJcbiAgICAgICAgICAgIGlmIChpLm5hbWUgPT0gaXRlbSkge1xyXG4gICAgICAgICAgICAgIGkuY291bnQrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpdGVtcy5wdXNoKHsgbmFtZTogaXRlbSwgY291bnQ6IDEgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaW52ZW50b3J5OiBpdGVtcyB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuZXhwb3J0IHsgaW5pdGlhbFN0YXRlLCByZWR1Y2VyIH07XHJcbiJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJ1c2VyIiwidHJlYXN1cmVkIiwiaW52ZW50b3J5IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJkaXNwbGF5TmFtZSIsInBob3RvVVJMIiwiZW1haWwiLCJDbGFzc19uYW1lc19pZGVudGlmaWVkIiwiaXRlbXMiLCJpdGVtIiwic29tZSIsImkiLCJuYW1lIiwiY291bnQiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducer.js\n");

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