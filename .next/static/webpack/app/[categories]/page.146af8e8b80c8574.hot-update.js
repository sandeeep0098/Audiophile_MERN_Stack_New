"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[categories]/page",{

/***/ "(app-client)/./src/components/product/ProductList.tsx":
/*!************************************************!*\
  !*** ./src/components/product/ProductList.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _productlist_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./productlist.scss */ \"(app-client)/./src/components/product/productlist.scss\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _UI_productLinkPrimaryButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../UI/productLinkPrimaryButton */ \"(app-client)/./src/components/UI/productLinkPrimaryButton.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ProductList = (param)=>{\n    let { products } = param;\n    _s();\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useParams)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"productlist\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"wrapper\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: products.sort((a, b)=>a.new === b.new ? 0 : a.new ? -1 : 1).map((product)=>product.category === params.categories && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"left\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    src: product.image.desktop,\n                                    alt: \"img\",\n                                    className: \"one\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sandeepyadav/Desktop/hehehehehe/src/components/product/ProductList.tsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 23\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/sandeepyadav/Desktop/hehehehehe/src/components/product/ProductList.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"right\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"right-container\",\n                                    children: [\n                                        product.new && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                            className: \"newproduct\",\n                                            children: \"New Product\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sandeepyadav/Desktop/hehehehehe/src/components/product/ProductList.tsx\",\n                                            lineNumber: 33,\n                                            columnNumber: 27\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: product.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sandeepyadav/Desktop/hehehehehe/src/components/product/ProductList.tsx\",\n                                            lineNumber: 35,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: product.description\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sandeepyadav/Desktop/hehehehehe/src/components/product/ProductList.tsx\",\n                                            lineNumber: 36,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_productLinkPrimaryButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            path: \"/\",\n                                            type: \"primary\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sandeepyadav/Desktop/hehehehehe/src/components/product/ProductList.tsx\",\n                                            lineNumber: 37,\n                                            columnNumber: 25\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/sandeepyadav/Desktop/hehehehehe/src/components/product/ProductList.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 23\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/sandeepyadav/Desktop/hehehehehe/src/components/product/ProductList.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, product.id, true, {\n                        fileName: \"/Users/sandeepyadav/Desktop/hehehehehe/src/components/product/ProductList.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 19\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/sandeepyadav/Desktop/hehehehehe/src/components/product/ProductList.tsx\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/sandeepyadav/Desktop/hehehehehe/src/components/product/ProductList.tsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/sandeepyadav/Desktop/hehehehehe/src/components/product/ProductList.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProductList, \"+jVsTcECDRo3yq2d7EQxlN9Ixog=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useParams\n    ];\n});\n_c = ProductList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductList);\nvar _c;\n$RefreshReg$(_c, \"ProductList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvcHJvZHVjdC9Qcm9kdWN0TGlzdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ2tDO0FBQ047QUFDRztBQUV1QztBQUMxQjtBQUc1QyxNQUFNSSxjQUFzRDtRQUFDLEVBQUVDLFFBQVEsRUFBRTs7SUFDdkUsTUFBTUMsU0FBU0gsMERBQVNBO0lBRXhCLHFCQUNFLDhEQUFDSTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUNiLDRFQUFDQzswQkFDRUosU0FDRUssSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQU9ELEVBQUVFLEdBQUcsS0FBS0QsRUFBRUMsR0FBRyxHQUFHLElBQUlGLEVBQUVFLEdBQUcsR0FBRyxDQUFDLElBQUksR0FDbkRDLEdBQUcsQ0FDRixDQUFDQyxVQUNDQSxRQUFRQyxRQUFRLEtBQUtWLE9BQU9XLFVBQVUsa0JBQ3BDLDhEQUFDQzs7MENBQ0MsOERBQUNYO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDUCxtREFBS0E7b0NBQ0prQixLQUFLSixRQUFRSyxLQUFLLENBQUNDLE9BQU87b0NBQzFCQyxLQUFJO29DQUNKZCxXQUFVOzs7Ozs7Ozs7OzswQ0FHZCw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNEO29DQUFJQyxXQUFVOzt3Q0FDWk8sUUFBUUYsR0FBRyxrQkFDViw4REFBQ1U7NENBQUdmLFdBQVU7c0RBQWE7Ozs7OztzREFFN0IsOERBQUNnQjtzREFBSVQsUUFBUVUsSUFBSTs7Ozs7O3NEQUNqQiw4REFBQ0M7c0RBQUdYLFFBQVFZLFdBQVc7Ozs7OztzREFDdkIsOERBQUN6QixvRUFBd0JBOzRDQUFDMEIsTUFBSzs0Q0FBSUMsTUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQWZyQ2QsUUFBUWUsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QnJDO0dBckNNMUI7O1FBQ1dELHNEQUFTQTs7O0tBRHBCQztBQXVDTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9wcm9kdWN0L1Byb2R1Y3RMaXN0LnRzeD9hMjlkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9wcm9kdWN0bGlzdC5zY3NzJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuaW1wb3J0IFByb2R1Y3RMaW5rUHJpbWFyeUJ1dHRvbiBmcm9tICcuLi9VSS9wcm9kdWN0TGlua1ByaW1hcnlCdXR0b24nO1xuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IFByb2R1Y3RQcm9wcyB9IGZyb20gJ0AvYXBwL3R5cGVzL2luZGV4JztcblxuY29uc3QgUHJvZHVjdExpc3Q6IFJlYWN0LkZDPHsgcHJvZHVjdHM6IFByb2R1Y3RQcm9wc1tdIH0+ID0gKHsgcHJvZHVjdHMgfSkgPT4ge1xuICBjb25zdCBwYXJhbXMgPSB1c2VQYXJhbXMoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdGxpc3RcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge3Byb2R1Y3RzXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gKGEubmV3ID09PSBiLm5ldyA/IDAgOiBhLm5ldyA/IC0xIDogMSkpXG4gICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAocHJvZHVjdCkgPT5cbiAgICAgICAgICAgICAgICBwcm9kdWN0LmNhdGVnb3J5ID09PSBwYXJhbXMuY2F0ZWdvcmllcyAmJiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtwcm9kdWN0LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2R1Y3QuaW1hZ2UuZGVza3RvcH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImltZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvbmVcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0Lm5ldyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJuZXdwcm9kdWN0XCI+TmV3IFByb2R1Y3Q8L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57cHJvZHVjdC5uYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57cHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdExpbmtQcmltYXJ5QnV0dG9uIHBhdGg9XCIvXCIgdHlwZT1cInByaW1hcnlcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdExpc3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJbWFnZSIsIlByb2R1Y3RMaW5rUHJpbWFyeUJ1dHRvbiIsInVzZVBhcmFtcyIsIlByb2R1Y3RMaXN0IiwicHJvZHVjdHMiLCJwYXJhbXMiLCJkaXYiLCJjbGFzc05hbWUiLCJ1bCIsInNvcnQiLCJhIiwiYiIsIm5ldyIsIm1hcCIsInByb2R1Y3QiLCJjYXRlZ29yeSIsImNhdGVnb3JpZXMiLCJsaSIsInNyYyIsImltYWdlIiwiZGVza3RvcCIsImFsdCIsImg2IiwiaDIiLCJuYW1lIiwicCIsImRlc2NyaXB0aW9uIiwicGF0aCIsInR5cGUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/components/product/ProductList.tsx\n"));

/***/ })

});