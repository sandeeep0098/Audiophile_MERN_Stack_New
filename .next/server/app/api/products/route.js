"use strict";
(() => {
var exports = {};
exports.id = 684;
exports.ids = [684];
exports.modules = {

/***/ 11185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 57938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./src/app/api/products/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET),
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(45050);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(71910);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./src/libs/mongodb.ts
var mongodb = __webpack_require__(94411);
// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(11185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./src/models/product.ts

const productSchema = new external_mongoose_.Schema({
    slug: {
        type: String
    },
    name: {
        type: String
    },
    image: {
        mobile: {
            type: String
        },
        tablet: {
            type: String
        },
        desktop: {
            type: String
        }
    },
    category: {
        type: String
    },
    categoryImage: {
        mobile: {
            type: String
        },
        tablet: {
            type: String
        },
        desktop: {
            type: String
        }
    },
    new: {
        type: Boolean
    },
    price: {
        type: Number
    },
    description: {
        type: String
    },
    features: {
        type: String
    },
    includes: [
        {
            quantity: {
                type: Number
            },
            item: {
                type: String
            }
        }
    ],
    gallery: {
        first: {
            mobile: {
                type: String
            },
            tablet: {
                type: String
            },
            desktop: {
                type: String
            }
        },
        second: {
            mobile: {
                type: String
            },
            tablet: {
                type: String
            },
            desktop: {
                type: String
            }
        },
        third: {
            mobile: {
                type: String
            },
            tablet: {
                type: String
            },
            desktop: {
                type: String
            }
        }
    },
    others: [
        {
            slug: {
                type: String
            },
            name: {
                type: String
            },
            image: {
                mobile: {
                    type: String
                },
                tablet: {
                    type: String
                },
                desktop: {
                    type: String
                }
            }
        }
    ]
});
const Product = (external_mongoose_default()).models.Product || external_mongoose_default().model("Product", productSchema);
/* harmony default export */ const product = (Product);

// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(18847);
;// CONCATENATED MODULE: ./src/app/api/products/route.ts



async function POST(request) {
    const { slug, name, image, category, categoryImage, new: isNew, price, description, features, includes, gallery, others } = await request.json();
    await (0,mongodb/* default */.Z)();
    await product.create({
        slug,
        name,
        image,
        category,
        categoryImage,
        new: isNew,
        price,
        description,
        features,
        includes,
        gallery,
        others
    });
    return next_response/* default */.Z.json({
        Message: "Success"
    }, {
        status: 201
    });
}
async function GET() {
    await (0,mongodb/* default */.Z)();
    const products = await product.find();
    return next_response/* default */.Z.json({
        products
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fproducts%2Froute&name=app%2Fapi%2Fproducts%2Froute&pagePath=private-next-app-dir%2Fapi%2Fproducts%2Froute.ts&appDir=%2FUsers%2Fsandeepyadav%2FDesktop%2Faudiophile_mern%2Fsrc%2Fapp&appPaths=%2Fapi%2Fproducts%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/products/route","pathname":"/api/products","filename":"route","bundlePath":"app/api/products/route"},"resolvedPagePath":"/Users/sandeepyadav/Desktop/audiophile_mern/src/app/api/products/route.ts","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/products/route"

    

/***/ }),

/***/ 94411:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const connectMongoDB = async ()=>{
    try {
        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI);
        console.log("mongodb connection established");
    } catch (error) {
        console.log(error);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectMongoDB);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [669,255,847], () => (__webpack_exec__(57938)));
module.exports = __webpack_exports__;

})();