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

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _productlist_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./productlist.scss */ \"(app-client)/./src/components/product/productlist.scss\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_product_xx99_mark_one_headphones_desktop_image_product_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg */ \"(app-client)/./src/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg\");\n/* harmony import */ var _UI_productLinkPrimaryButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UI/productLinkPrimaryButton */ \"(app-client)/./src/components/UI/productLinkPrimaryButton.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_6__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst ProductList = (param)=>{\n    let { products } = param;\n    _s();\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.useParams)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"productlist\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"wrapper\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: products.sort((a, b)=>a.new === b.new ? 0 : a.new ? -1 : 1).map((product)=>product.category === params.categories && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"left\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    className: \"headphonesimg\",\n                                    src: _assets_product_xx99_mark_one_headphones_desktop_image_product_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                    alt: \"img\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sandeepyadav/Desktop/hehehehehe/src/components/product/ProductList.tsx\",\n                                    lineNumber: 23,\n                                    columnNumber: 23\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/sandeepyadav/Desktop/hehehehehe/src/components/product/ProductList.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"right\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"right-container\",\n                                    children: [\n                                        product.new && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                            className: \"newproduct\",\n                                            children: \"New Product\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sandeepyadav/Desktop/hehehehehe/src/components/product/ProductList.tsx\",\n                                            lineNumber: 32,\n                                            columnNumber: 27\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: product.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sandeepyadav/Desktop/hehehehehe/src/components/product/ProductList.tsx\",\n                                            lineNumber: 34,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: product.description\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sandeepyadav/Desktop/hehehehehe/src/components/product/ProductList.tsx\",\n                                            lineNumber: 35,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_productLinkPrimaryButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            path: \"/\",\n                                            type: \"primary\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sandeepyadav/Desktop/hehehehehe/src/components/product/ProductList.tsx\",\n                                            lineNumber: 36,\n                                            columnNumber: 25\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/sandeepyadav/Desktop/hehehehehe/src/components/product/ProductList.tsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 23\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/sandeepyadav/Desktop/hehehehehe/src/components/product/ProductList.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, product.id, true, {\n                        fileName: \"/Users/sandeepyadav/Desktop/hehehehehe/src/components/product/ProductList.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 19\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/sandeepyadav/Desktop/hehehehehe/src/components/product/ProductList.tsx\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/sandeepyadav/Desktop/hehehehehe/src/components/product/ProductList.tsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/sandeepyadav/Desktop/hehehehehe/src/components/product/ProductList.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProductList, \"+jVsTcECDRo3yq2d7EQxlN9Ixog=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_6__.useParams\n    ];\n});\n_c = ProductList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductList);\nvar _c;\n$RefreshReg$(_c, \"ProductList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvcHJvZHVjdC9Qcm9kdWN0TGlzdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUMwQjtBQUNFO0FBQ0c7QUFDc0U7QUFDL0I7QUFDMUI7QUFHNUMsTUFBTUssY0FBc0Q7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBQ3ZFLE1BQU1DLFNBQVNILDBEQUFTQTtJQUN4QixxQkFDRSw4REFBQ0k7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDYiw0RUFBQ0M7MEJBQ0VKLFNBQ0VLLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFPRCxFQUFFRSxHQUFHLEtBQUtELEVBQUVDLEdBQUcsR0FBRyxJQUFJRixFQUFFRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQ25EQyxHQUFHLENBQ0YsQ0FBQ0MsVUFDQ0EsUUFBUUMsUUFBUSxLQUFLVixPQUFPVyxVQUFVLGtCQUNwQyw4REFBQ0M7OzBDQUNDLDhEQUFDWDtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ1IsbURBQUtBO29DQUNKUSxXQUFVO29DQUNWVyxLQUFLbEIsMEdBQWNBO29DQUNuQm1CLEtBQUk7Ozs7Ozs7Ozs7OzBDQUdSLDhEQUFDYjtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ0Q7b0NBQUlDLFdBQVU7O3dDQUNaTyxRQUFRRixHQUFHLGtCQUNWLDhEQUFDUTs0Q0FBR2IsV0FBVTtzREFBYTs7Ozs7O3NEQUU3Qiw4REFBQ2M7c0RBQUlQLFFBQVFRLElBQUk7Ozs7OztzREFDakIsOERBQUNDO3NEQUFHVCxRQUFRVSxXQUFXOzs7Ozs7c0RBQ3ZCLDhEQUFDdkIsb0VBQXdCQTs0Q0FBQ3dCLE1BQUs7NENBQUlDLE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFmckNaLFFBQVFhLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJyQztHQXBDTXhCOztRQUNXRCxzREFBU0E7OztLQURwQkM7QUFzQ04sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcHJvZHVjdC9Qcm9kdWN0TGlzdC50c3g/YTI5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL3Byb2R1Y3RsaXN0LnNjc3MnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IGhlYWRwaG9uZUltYWdlIGZyb20gJy4uLy4uL2Fzc2V0cy9wcm9kdWN0LXh4OTktbWFyay1vbmUtaGVhZHBob25lcy9kZXNrdG9wL2ltYWdlLXByb2R1Y3QuanBnJztcbmltcG9ydCBQcm9kdWN0TGlua1ByaW1hcnlCdXR0b24gZnJvbSAnLi4vVUkvcHJvZHVjdExpbmtQcmltYXJ5QnV0dG9uJztcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5pbXBvcnQgeyBQcm9kdWN0UHJvcHMgfSBmcm9tICdAL2FwcC90eXBlcy9pbmRleCc7XG5cbmNvbnN0IFByb2R1Y3RMaXN0OiBSZWFjdC5GQzx7IHByb2R1Y3RzOiBQcm9kdWN0UHJvcHNbXSB9PiA9ICh7IHByb2R1Y3RzIH0pID0+IHtcbiAgY29uc3QgcGFyYW1zID0gdXNlUGFyYW1zKCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0bGlzdFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7cHJvZHVjdHNcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiAoYS5uZXcgPT09IGIubmV3ID8gMCA6IGEubmV3ID8gLTEgOiAxKSlcbiAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgIChwcm9kdWN0KSA9PlxuICAgICAgICAgICAgICAgIHByb2R1Y3QuY2F0ZWdvcnkgPT09IHBhcmFtcy5jYXRlZ29yaWVzICYmIChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3Byb2R1Y3QuaWR9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlYWRwaG9uZXNpbWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtoZWFkcGhvbmVJbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImltZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QubmV3ICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm5ld3Byb2R1Y3RcIj5OZXcgUHJvZHVjdDwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPntwcm9kdWN0Lm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0TGlua1ByaW1hcnlCdXR0b24gcGF0aD1cIi9cIiB0eXBlPVwicHJpbWFyeVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TGlzdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwiaGVhZHBob25lSW1hZ2UiLCJQcm9kdWN0TGlua1ByaW1hcnlCdXR0b24iLCJ1c2VQYXJhbXMiLCJQcm9kdWN0TGlzdCIsInByb2R1Y3RzIiwicGFyYW1zIiwiZGl2IiwiY2xhc3NOYW1lIiwidWwiLCJzb3J0IiwiYSIsImIiLCJuZXciLCJtYXAiLCJwcm9kdWN0IiwiY2F0ZWdvcnkiLCJjYXRlZ29yaWVzIiwibGkiLCJzcmMiLCJhbHQiLCJoNiIsImgyIiwibmFtZSIsInAiLCJkZXNjcmlwdGlvbiIsInBhdGgiLCJ0eXBlIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/components/product/ProductList.tsx\n"));

/***/ }),

/***/ "(app-client)/./node_modules/next/navigation.js":
/*!*****************************************!*\
  !*** ./node_modules/next/navigation.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/client/components/navigation */ \"(app-client)/./node_modules/next/dist/client/components/navigation.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vbm9kZV9tb2R1bGVzL25leHQvbmF2aWdhdGlvbi5qcyIsIm1hcHBpbmdzIjoiQUFBQSx3SkFBK0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbmF2aWdhdGlvbi5qcz9kNDdiIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9jb21wb25lbnRzL25hdmlnYXRpb24nKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./node_modules/next/navigation.js\n"));

/***/ })

});