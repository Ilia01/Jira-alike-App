"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"a4456fbe2580\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/YmY1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImE0NDU2ZmJlMjU4MFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/dashboardWrapper.tsx":
/*!**************************************!*\
  !*** ./src/app/dashboardWrapper.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Navbar */ \"(app-pages-browser)/./src/app/components/Navbar/index.tsx\");\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Sidebar */ \"(app-pages-browser)/./src/app/components/Sidebar/index.tsx\");\n/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./redux */ \"(app-pages-browser)/./src/app/redux.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst DashboardLayout = (param)=>{\n    let { children } = param;\n    _s();\n    const isSidebarCollapsed = (0,_redux__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.global.isSidebarCollapsed);\n    const isDarkMode = (0,_redux__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.global.isDarkMode);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isDarkMode) {\n            document.documentElement.classList.add(\"dark\");\n        } else {\n            document.documentElement.classList.remove(\"dark\");\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex min-h-screen w-full bg-gray-50\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\99559\\\\NextJS-Projects\\\\client\\\\src\\\\app\\\\dashboardWrapper.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex w-full flex-col bg-gray-50 dark:bg-dark-bg \".concat(isSidebarCollapsed ? \"\" : \"md:pl-64\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\99559\\\\NextJS-Projects\\\\client\\\\src\\\\app\\\\dashboardWrapper.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {\n                        fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Loading... Please Wait.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\99559\\\\NextJS-Projects\\\\client\\\\src\\\\app\\\\dashboardWrapper.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 29\n                        }, void 0),\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\99559\\\\NextJS-Projects\\\\client\\\\src\\\\app\\\\dashboardWrapper.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\99559\\\\NextJS-Projects\\\\client\\\\src\\\\app\\\\dashboardWrapper.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\99559\\\\NextJS-Projects\\\\client\\\\src\\\\app\\\\dashboardWrapper.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DashboardLayout, \"BNlsxlXWQvoYRyZm9iTDsEWGq3A=\", false, function() {\n    return [\n        _redux__WEBPACK_IMPORTED_MODULE_4__.useAppSelector,\n        _redux__WEBPACK_IMPORTED_MODULE_4__.useAppSelector\n    ];\n});\n_c = DashboardLayout;\nconst dashboardWrapper = (param)=>{\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {\n        fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading... Please Wait.\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\99559\\\\NextJS-Projects\\\\client\\\\src\\\\app\\\\dashboardWrapper.tsx\",\n            lineNumber: 40,\n            columnNumber: 25\n        }, void 0),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_redux__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DashboardLayout, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {\n                    fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Loading... Please Wait.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\99559\\\\NextJS-Projects\\\\client\\\\src\\\\app\\\\dashboardWrapper.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 31\n                    }, void 0),\n                    children: children\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\99559\\\\NextJS-Projects\\\\client\\\\src\\\\app\\\\dashboardWrapper.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\99559\\\\NextJS-Projects\\\\client\\\\src\\\\app\\\\dashboardWrapper.tsx\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\99559\\\\NextJS-Projects\\\\client\\\\src\\\\app\\\\dashboardWrapper.tsx\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\99559\\\\NextJS-Projects\\\\client\\\\src\\\\app\\\\dashboardWrapper.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (dashboardWrapper);\nvar _c;\n$RefreshReg$(_c, \"DashboardLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkV3JhcHBlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ21EO0FBQ1Y7QUFDRTtBQUM2QjtBQUl4RSxNQUFNTyxrQkFBa0I7UUFBQyxFQUFFQyxRQUFRLEVBQWlDOztJQUNsRSxNQUFNQyxxQkFBcUJILHNEQUFjQSxDQUN2QyxDQUFDSSxRQUFVQSxNQUFNQyxNQUFNLENBQUNGLGtCQUFrQjtJQUc1QyxNQUFNRyxhQUFhTixzREFBY0EsQ0FBQyxDQUFDSSxRQUFVQSxNQUFNQyxNQUFNLENBQUNDLFVBQVU7SUFDcEVWLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSVUsWUFBWTtZQUNkQyxTQUFTQyxlQUFlLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDO1FBQ3pDLE9BQU87WUFDTEgsU0FBU0MsZUFBZSxDQUFDQyxTQUFTLENBQUNFLE1BQU0sQ0FBQztRQUM1QztJQUNGO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVc7OzBCQUNkLDhEQUFDZiwyREFBT0E7Ozs7OzBCQUNSLDhEQUFDZ0I7Z0JBQ0NELFdBQVcsbURBQXdGLE9BQXJDVixxQkFBcUIsS0FBSzs7a0NBRXhGLDhEQUFDTiwwREFBTUE7Ozs7O2tDQUNQLDhEQUFDRiwyQ0FBUUE7d0JBQUNvQix3QkFBVSw4REFBQ0M7c0NBQUU7Ozs7OztrQ0FDcEJkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLWDtHQTNCTUQ7O1FBQ3VCRCxrREFBY0E7UUFJdEJBLGtEQUFjQTs7O0tBTDdCQztBQTZCTixNQUFNZ0IsbUJBQW1CO1FBQUMsRUFBRWYsUUFBUSxFQUFpQztJQUNuRSxxQkFDRSw4REFBQ1AsMkNBQVFBO1FBQUNvQix3QkFBVSw4REFBQ0M7c0JBQUU7Ozs7OztrQkFDckIsNEVBQUNqQiw4Q0FBYUE7c0JBQ1osNEVBQUNFOzBCQUNDLDRFQUFDTiwyQ0FBUUE7b0JBQUNvQix3QkFBVSw4REFBQ0M7a0NBQUU7Ozs7Ozs4QkFDcEJkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNYjtBQUVBLCtEQUFlZSxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9kYXNoYm9hcmRXcmFwcGVyLnRzeD8wMDE5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgU3VzcGVuc2UsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL2NvbXBvbmVudHMvTmF2YmFyXCI7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuL2NvbXBvbmVudHMvU2lkZWJhclwiO1xyXG5pbXBvcnQgU3RvcmVQcm92aWRlciwgeyB1c2VBcHBEaXNwYXRjaCwgdXNlQXBwU2VsZWN0b3IgfSBmcm9tIFwiLi9yZWR1eFwiO1xyXG5pbXBvcnQgc3RhdGUgZnJvbSBcIkAvc3RhdGUvaW5kZXhcIjtcclxuaW1wb3J0IExvYWRlciBmcm9tIFwiLi9sb2FkZXJcIjtcclxuXHJcbmNvbnN0IERhc2hib2FyZExheW91dCA9ICh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSA9PiB7XHJcbiAgY29uc3QgaXNTaWRlYmFyQ29sbGFwc2VkID0gdXNlQXBwU2VsZWN0b3IoXHJcbiAgICAoc3RhdGUpID0+IHN0YXRlLmdsb2JhbC5pc1NpZGViYXJDb2xsYXBzZWQsXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaXNEYXJrTW9kZSA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuZ2xvYmFsLmlzRGFya01vZGUpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaXNEYXJrTW9kZSkge1xyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRhcmtcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRhcmtcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17XCJmbGV4IG1pbi1oLXNjcmVlbiB3LWZ1bGwgYmctZ3JheS01MFwifT5cclxuICAgICAgPFNpZGViYXIgLz5cclxuICAgICAgPG1haW5cclxuICAgICAgICBjbGFzc05hbWU9e2BmbGV4IHctZnVsbCBmbGV4LWNvbCBiZy1ncmF5LTUwIGRhcms6YmctZGFyay1iZyAke2lzU2lkZWJhckNvbGxhcHNlZCA/IFwiXCIgOiBcIm1kOnBsLTY0XCJ9YH1cclxuICAgICAgPlxyXG4gICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxwPkxvYWRpbmcuLi4gUGxlYXNlIFdhaXQuPC9wPn0+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9TdXNwZW5zZT5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IGRhc2hib2FyZFdyYXBwZXIgPSAoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxwPkxvYWRpbmcuLi4gUGxlYXNlIFdhaXQuPC9wPn0+XHJcbiAgICAgIDxTdG9yZVByb3ZpZGVyPlxyXG4gICAgICAgIDxEYXNoYm9hcmRMYXlvdXQ+XHJcbiAgICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxwPkxvYWRpbmcuLi4gUGxlYXNlIFdhaXQuPC9wPn0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgIDwvU3VzcGVuc2U+XHJcbiAgICAgICAgPC9EYXNoYm9hcmRMYXlvdXQ+XHJcbiAgICAgIDwvU3RvcmVQcm92aWRlcj5cclxuICAgIDwvU3VzcGVuc2U+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRhc2hib2FyZFdyYXBwZXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlN1c3BlbnNlIiwidXNlRWZmZWN0IiwiTmF2YmFyIiwiU2lkZWJhciIsIlN0b3JlUHJvdmlkZXIiLCJ1c2VBcHBTZWxlY3RvciIsIkRhc2hib2FyZExheW91dCIsImNoaWxkcmVuIiwiaXNTaWRlYmFyQ29sbGFwc2VkIiwic3RhdGUiLCJnbG9iYWwiLCJpc0RhcmtNb2RlIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwiZmFsbGJhY2siLCJwIiwiZGFzaGJvYXJkV3JhcHBlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboardWrapper.tsx\n"));

/***/ })

});