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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _productlist_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./productlist.scss */ \"(app-client)/./src/components/product/productlist.scss\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_product_xx99_mark_one_headphones_desktop_image_product_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg */ \"(app-client)/./src/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg\");\n/* harmony import */ var _UI_productLinkPrimaryButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UI/productLinkPrimaryButton */ \"(app-client)/./src/components/UI/productLinkPrimaryButton.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_6__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst ProductList = (param)=>{\n    let { products } = param;\n    _s();\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.useParams)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"productlist\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"wrapper\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: products.sort((a, b)=>a.new === b.new ? 0 : a.new ? -1 : 1).map((product)=>product.category === params.categories && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"left\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    className: \"headphonesimg\",\n                                    src: _assets_product_xx99_mark_one_headphones_desktop_image_product_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                    alt: \"img\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sandeepyadav/Desktop/hehehehehe/src/components/product/ProductList.tsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 23\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/sandeepyadav/Desktop/hehehehehe/src/components/product/ProductList.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"right\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"right-container\",\n                                    children: [\n                                        product.new && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                            className: \"newproduct\",\n                                            children: \"New Product\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sandeepyadav/Desktop/hehehehehe/src/components/product/ProductList.tsx\",\n                                            lineNumber: 33,\n                                            columnNumber: 27\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: product.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sandeepyadav/Desktop/hehehehehe/src/components/product/ProductList.tsx\",\n                                            lineNumber: 35,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: product.description\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sandeepyadav/Desktop/hehehehehe/src/components/product/ProductList.tsx\",\n                                            lineNumber: 36,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_productLinkPrimaryButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            path: \"/\",\n                                            type: \"primary\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sandeepyadav/Desktop/hehehehehe/src/components/product/ProductList.tsx\",\n                                            lineNumber: 37,\n                                            columnNumber: 25\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/sandeepyadav/Desktop/hehehehehe/src/components/product/ProductList.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 23\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/sandeepyadav/Desktop/hehehehehe/src/components/product/ProductList.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, product.id, true, {\n                        fileName: \"/Users/sandeepyadav/Desktop/hehehehehe/src/components/product/ProductList.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 19\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/sandeepyadav/Desktop/hehehehehe/src/components/product/ProductList.tsx\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/sandeepyadav/Desktop/hehehehehe/src/components/product/ProductList.tsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/sandeepyadav/Desktop/hehehehehe/src/components/product/ProductList.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProductList, \"+jVsTcECDRo3yq2d7EQxlN9Ixog=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_6__.useParams\n    ];\n});\n_c = ProductList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductList);\nvar _c;\n$RefreshReg$(_c, \"ProductList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvcHJvZHVjdC9Qcm9kdWN0TGlzdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNrQztBQUNOO0FBQ0c7QUFDc0U7QUFDL0I7QUFDMUI7QUFHNUMsTUFBTUssY0FBd0I7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBQ3pDLE1BQU1DLFNBQVNILDBEQUFTQTtJQUV4QixxQkFDRSw4REFBQ0k7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDYiw0RUFBQ0M7MEJBQ0VKLFNBQ0VLLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFPRCxFQUFFRSxHQUFHLEtBQUtELEVBQUVDLEdBQUcsR0FBRyxJQUFJRixFQUFFRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQ25EQyxHQUFHLENBQ0YsQ0FBQ0MsVUFDQ0EsUUFBUUMsUUFBUSxLQUFLVixPQUFPVyxVQUFVLGtCQUNwQyw4REFBQ0M7OzBDQUNDLDhEQUFDWDtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ1IsbURBQUtBO29DQUNKUSxXQUFVO29DQUNWVyxLQUFLbEIsMEdBQWNBO29DQUNuQm1CLEtBQUk7Ozs7Ozs7Ozs7OzBDQUdSLDhEQUFDYjtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ0Q7b0NBQUlDLFdBQVU7O3dDQUNaTyxRQUFRRixHQUFHLGtCQUNWLDhEQUFDUTs0Q0FBR2IsV0FBVTtzREFBYTs7Ozs7O3NEQUU3Qiw4REFBQ2M7c0RBQUlQLFFBQVFRLElBQUk7Ozs7OztzREFDakIsOERBQUNDO3NEQUFHVCxRQUFRVSxXQUFXOzs7Ozs7c0RBQ3ZCLDhEQUFDdkIsb0VBQXdCQTs0Q0FBQ3dCLE1BQUs7NENBQUlDLE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFmckNaLFFBQVFhLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJyQztHQXJDTXhCOztRQUNXRCxzREFBU0E7OztLQURwQkM7QUF1Q04sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcHJvZHVjdC9Qcm9kdWN0TGlzdC50c3g/YTI5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vcHJvZHVjdGxpc3Quc2Nzcyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgaGVhZHBob25lSW1hZ2UgZnJvbSAnLi4vLi4vYXNzZXRzL3Byb2R1Y3QteHg5OS1tYXJrLW9uZS1oZWFkcGhvbmVzL2Rlc2t0b3AvaW1hZ2UtcHJvZHVjdC5qcGcnO1xuaW1wb3J0IFByb2R1Y3RMaW5rUHJpbWFyeUJ1dHRvbiBmcm9tICcuLi9VSS9wcm9kdWN0TGlua1ByaW1hcnlCdXR0b24nO1xuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IFByb2R1Y3RQcm9wcyB9IGZyb20gJ0AvYXBwL3R5cGVzL2luZGV4JztcblxuY29uc3QgUHJvZHVjdExpc3Q6IFJlYWN0LkZDID0gKHsgcHJvZHVjdHMgfSkgPT4ge1xuICBjb25zdCBwYXJhbXMgPSB1c2VQYXJhbXMoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdGxpc3RcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge3Byb2R1Y3RzXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gKGEubmV3ID09PSBiLm5ldyA/IDAgOiBhLm5ldyA/IC0xIDogMSkpXG4gICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAocHJvZHVjdCkgPT5cbiAgICAgICAgICAgICAgICBwcm9kdWN0LmNhdGVnb3J5ID09PSBwYXJhbXMuY2F0ZWdvcmllcyAmJiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtwcm9kdWN0LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZWFkcGhvbmVzaW1nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aGVhZHBob25lSW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpbWdcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0Lm5ldyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJuZXdwcm9kdWN0XCI+TmV3IFByb2R1Y3Q8L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57cHJvZHVjdC5uYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57cHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdExpbmtQcmltYXJ5QnV0dG9uIHBhdGg9XCIvXCIgdHlwZT1cInByaW1hcnlcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdExpc3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJbWFnZSIsImhlYWRwaG9uZUltYWdlIiwiUHJvZHVjdExpbmtQcmltYXJ5QnV0dG9uIiwidXNlUGFyYW1zIiwiUHJvZHVjdExpc3QiLCJwcm9kdWN0cyIsInBhcmFtcyIsImRpdiIsImNsYXNzTmFtZSIsInVsIiwic29ydCIsImEiLCJiIiwibmV3IiwibWFwIiwicHJvZHVjdCIsImNhdGVnb3J5IiwiY2F0ZWdvcmllcyIsImxpIiwic3JjIiwiYWx0IiwiaDYiLCJoMiIsIm5hbWUiLCJwIiwiZGVzY3JpcHRpb24iLCJwYXRoIiwidHlwZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/components/product/ProductList.tsx\n"));

/***/ })

});