"use strict";
(() => {
var exports = {};
exports.id = 243;
exports.ids = [243];
exports.modules = {

/***/ 11185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 67257:
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

// NAMESPACE OBJECT: ./src/app/api/userinputs/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
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
;// CONCATENATED MODULE: ./src/models/form-details.ts

const UserSchema = new (external_mongoose_default()).Schema({
    enteredName: String,
    enteredEmail: String,
    enteredPhoneNumber: Number,
    enteredAddress: String,
    enteredCity: String,
    enteredZipCode: String,
    enteredCountry: String,
    enteredCardNo: String,
    enteredCvv: String,
    enteredCardHolderName: String,
    paymentMethod: String
});
const User = (external_mongoose_default()).models.User || external_mongoose_default().model("User", UserSchema);
/* harmony default export */ const form_details = (User);

// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(18847);
;// CONCATENATED MODULE: ./src/app/api/userinputs/route.ts



async function POST(request) {
    const { enteredName, enteredEmail, enteredPhoneNumber, enteredAddress, enteredCity, enteredZipCode, enteredCountry, enteredCardNo, enteredCvv, enteredCardHolderName, paymentMethod } = await request.json();
    await (0,mongodb/* default */.Z)();
    await form_details.create({
        enteredName,
        enteredEmail,
        enteredPhoneNumber,
        enteredAddress,
        enteredCity,
        enteredZipCode,
        enteredCountry,
        paymentMethod,
        enteredCardNo,
        enteredCvv,
        enteredCardHolderName
    });
    return next_response/* default */.Z.json({
        Message: "Success"
    }, {
        status: 201
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fuserinputs%2Froute&name=app%2Fapi%2Fuserinputs%2Froute&pagePath=private-next-app-dir%2Fapi%2Fuserinputs%2Froute.ts&appDir=%2FUsers%2Fsandeepyadav%2FDesktop%2Faudiophile_mern%2Fsrc%2Fapp&appPaths=%2Fapi%2Fuserinputs%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/userinputs/route","pathname":"/api/userinputs","filename":"route","bundlePath":"app/api/userinputs/route"},"resolvedPagePath":"/Users/sandeepyadav/Desktop/audiophile_mern/src/app/api/userinputs/route.ts","nextConfigOutput":""}
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

    const originalPathname = "/api/userinputs/route"

    

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
var __webpack_exports__ = __webpack_require__.X(0, [669,255,847], () => (__webpack_exec__(67257)));
module.exports = __webpack_exports__;

})();