exports.id = 738;
exports.ids = [738];
exports.modules = {

/***/ 32241:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;

"use client";

var _interopRequireDefault = __webpack_require__(27574);
__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(30935));
var _jsxRuntime = __webpack_require__(56786);
var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
}), 'ChevronRight');
exports.Z = _default;

/***/ }),

/***/ 96222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ layout_CategoriesSection)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(48421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/layout/categoriessection.scss
var categoriessection = __webpack_require__(54247);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/ChevronRight.js
var ChevronRight = __webpack_require__(32241);
;// CONCATENATED MODULE: ./public/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview-headphones.png
/* harmony default export */ const image_category_page_preview_headphones = ({"src":"/_next/static/media/image-category-page-preview-headphones.aea36222.png","height":1120,"width":1080,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAArklEQVR42mMAgUOHDjMxYAJGMLlr125mEH3kyFGX/fsPzOvo7D5cV9/gChJram4ByYEBe0dH1ywQw87OIdPCyuapd1AwK9wsr4BoUVNTs32+fgHdIL6xsekyeSVVAxT7inJinuZlJ/63sHa6GREZfSUlLUMIJgl2YG9z7uL05Ij/hsYW/4OCw1bB5ab2VkFcq+jN5+fjEysgJmcI05mYlAKRm9hZBmKggKDgULAYAKx9M0e1KdxTAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/assets/product-zx9-speaker/desktop/image-category-page-preview.png
/* harmony default export */ const image_category_page_preview = ({"src":"/_next/static/media/image-category-page-preview.6281dcee.png","height":1120,"width":1080,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAp0lEQVR42mOAAkYGXEBERBws6e3jJwKkotat35R878ETJxRNd+4+ZVRR1bgiIirx/8Sps/9v3bn/+/Wbd4JwBfkFpaw6uvqPgMz/8+Yv+nv85Nm3O3YfEIIraGxuZ5WWUbhnbmH1v7Co5H9tfcu7m3efIkwoq6hlVVHVfKSopPI/Kzv3f2tHz8crN+4hFMTFpzLqGxirApmaQKyXkJKuefTEGWYGYgAAMzk/T0YC3Z8AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/assets/product-yx1-earphones/desktop/image-category-page-preview-earphones.png
/* harmony default export */ const image_category_page_preview_earphones = ({"src":"/_next/static/media/image-category-page-preview-earphones.4e8bee35.png","height":1120,"width":1080,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAp0lEQVR42mOAASdXH2YYW1vHAMRGABMLZ0YoEyQBZmtq6UPEPLwCmaF0kKd38BMbO9f7mpo63iAxXT0juEmc4ZFJb6Ji0/77+Ef8B0q8AopxwK0QYGBgCwqNfRYakfjf1SPgv5q61jMGoBhY0sbWBWyMvb2rs5WN01UNTb2LEhLijiAxaWk5iBUqanowRyJM5RdkQhGwtHJgTs1vZAyPzmCUkZGDOw4AIsoiAsq/RFYAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(31621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(59483);
;// CONCATENATED MODULE: ./src/components/layout/CategoriesSection.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 









const CategoriesSection = ({ products })=>{
    const params = (0,navigation.useParams)();
    // console.log(
    //   products.map(
    //     (product) => product.category === params.categories && product.name
    //   )
    // );
    // const product = products.find((product) => product.slug === params.slug);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "categoriesSection",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "wrapper",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "imagesection",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: image_category_page_preview_headphones,
                            className: "categoriesImages",
                            alt: "productImages"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "links",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    children: "Headphones"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                    className: "link",
                                    href: "/headphones",
                                    children: [
                                        "Shop ",
                                        /*#__PURE__*/ jsx_runtime_.jsx(ChevronRight/* default */.Z, {
                                            className: "icon"
                                        }),
                                        " "
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "imagesection",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: image_category_page_preview,
                            className: "categoriesImages",
                            alt: "productImages"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "links",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    children: "Speakers"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                    className: "link",
                                    href: "/speakers",
                                    children: [
                                        "Shop ",
                                        /*#__PURE__*/ jsx_runtime_.jsx(ChevronRight/* default */.Z, {
                                            className: "icon"
                                        }),
                                        " "
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "imagesection",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: image_category_page_preview_earphones,
                            className: "categoriesImages",
                            alt: "productImages"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "links",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    children: "Earphones"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                    className: "link",
                                    href: "/earphones",
                                    children: [
                                        "Shop ",
                                        /*#__PURE__*/ jsx_runtime_.jsx(ChevronRight/* default */.Z, {
                                            className: "icon"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const layout_CategoriesSection = (CategoriesSection);


/***/ }),

/***/ 86043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ layout_AboutUs)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(46261);
// EXTERNAL MODULE: ./src/components/layout/aboutus.scss
var aboutus = __webpack_require__(70433);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(3501);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/assets/shared/desktop/image-best-gear.jpg
/* harmony default export */ const image_best_gear = ({"src":"/_next/static/media/image-best-gear.b1a54820.jpg","height":588,"width":540,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABwMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAnA//xAAcEAACAgIDAAAAAAAAAAAAAAABAgMRAAQGIWH/2gAIAQEAAT8A0ePSvoNKZGEkxtZGq0W+gB6M/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=","blurWidth":7,"blurHeight":8});
;// CONCATENATED MODULE: ./src/components/layout/AboutUs.tsx





const AboutUs = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "aboutus",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "wrapper",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "left",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "left-container",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                children: [
                                    "Bringing you the ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "best "
                                    }),
                                    "audio gear"
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment."
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "right",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: image_best_gear,
                        alt: "userImg",
                        className: "userimg"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const layout_AboutUs = (AboutUs);


/***/ }),

/***/ 66698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17814);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/sandeepyadav/Desktop/audiophile_mern/src/components/layout/CategoriesSection.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 51741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/image-best-gear.b1a54820.jpg","height":588,"width":540,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABwMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAnA//xAAcEAACAgIDAAAAAAAAAAAAAAABAgMRAAQGIWH/2gAIAQEAAT8A0ePSvoNKZGEkxtZGq0W+gB6M/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=","blurWidth":7,"blurHeight":8});

/***/ }),

/***/ 70433:
/***/ (() => {



/***/ }),

/***/ 54247:
/***/ (() => {



/***/ }),

/***/ 59483:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(97376)


/***/ })

};
;