"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[categories]/[slug]/page",{

/***/ "(app-client)/./src/components/UI/ManageProduct.tsx":
/*!*********************************************!*\
  !*** ./src/components/UI/ManageProduct.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ManageProduct_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ManageProduct.scss */ \"(app-client)/./src/components/UI/ManageProduct.scss\");\n/* harmony import */ var _hooks_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/hooks */ \"(app-client)/./src/hooks/hooks.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst ManageProduct = ()=>{\n    _s();\n    const cartProducts = (0,_hooks_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.cart.products);\n    const addItemHandler = ()=>{\n        alert(\"items Will be added to Cart\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"buttons\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"inc_dec_button\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    children: \"-\"\n                }, void 0, false, {\n                    fileName: \"/Users/sandeepyadav/Desktop/audiophile_mern/src/components/UI/ManageProduct.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"demo\",\n                    children: cartProducts.map((product)=>product.quantity)\n                }, void 0, false, {\n                    fileName: \"/Users/sandeepyadav/Desktop/audiophile_mern/src/components/UI/ManageProduct.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    children: \"+\"\n                }, void 0, false, {\n                    fileName: \"/Users/sandeepyadav/Desktop/audiophile_mern/src/components/UI/ManageProduct.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sandeepyadav/Desktop/audiophile_mern/src/components/UI/ManageProduct.tsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/sandeepyadav/Desktop/audiophile_mern/src/components/UI/ManageProduct.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ManageProduct, \"quxlLJZMh/TPmVkeqKmXWrW/U9Q=\", false, function() {\n    return [\n        _hooks_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector\n    ];\n});\n_c = ManageProduct;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ManageProduct);\nvar _c;\n$RefreshReg$(_c, \"ManageProduct\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvVUkvTWFuYWdlUHJvZHVjdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFFSTtBQUNpQjtBQUUvQyxNQUFNRSxnQkFBZ0I7O0lBQ3BCLE1BQU1DLGVBQWVGLDREQUFjQSxDQUFDLENBQUNHLFFBQVVBLE1BQU1DLElBQUksQ0FBQ0MsUUFBUTtJQUNsRSxNQUFNQyxpQkFBaUI7UUFDckJDLE1BQU07SUFDUjtJQUNBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7OEJBQU87Ozs7Ozs4QkFDUiw4REFBQ0Y7b0JBQUlDLFdBQVU7OEJBQ1pQLGFBQWFTLEdBQUcsQ0FBQyxDQUFDQyxVQUFZQSxRQUFRQyxRQUFROzs7Ozs7OEJBRWpELDhEQUFDSDs4QkFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEI7R0FoQk1UOztRQUNpQkQsd0RBQWNBOzs7S0FEL0JDO0FBa0JOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1VJL01hbmFnZVByb2R1Y3QudHN4PzkwMDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9kdWN0TGlua1ByaW1hcnlCdXR0b24gZnJvbSAnLi9wcm9kdWN0TGlua1ByaW1hcnlCdXR0b24nO1xuaW1wb3J0ICcuL01hbmFnZVByb2R1Y3Quc2Nzcyc7XG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciB9IGZyb20gJ0AvaG9va3MvaG9va3MnO1xuXG5jb25zdCBNYW5hZ2VQcm9kdWN0ID0gKCkgPT4ge1xuICBjb25zdCBjYXJ0UHJvZHVjdHMgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNhcnQucHJvZHVjdHMpO1xuICBjb25zdCBhZGRJdGVtSGFuZGxlciA9ICgpID0+IHtcbiAgICBhbGVydCgnaXRlbXMgV2lsbCBiZSBhZGRlZCB0byBDYXJ0Jyk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImluY19kZWNfYnV0dG9uXCI+XG4gICAgICAgIDxidXR0b24+LTwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW9cIj5cbiAgICAgICAgICB7Y2FydFByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gcHJvZHVjdC5xdWFudGl0eSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uPis8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFuYWdlUHJvZHVjdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUFwcFNlbGVjdG9yIiwiTWFuYWdlUHJvZHVjdCIsImNhcnRQcm9kdWN0cyIsInN0YXRlIiwiY2FydCIsInByb2R1Y3RzIiwiYWRkSXRlbUhhbmRsZXIiLCJhbGVydCIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm1hcCIsInByb2R1Y3QiLCJxdWFudGl0eSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/components/UI/ManageProduct.tsx\n"));

/***/ })

});