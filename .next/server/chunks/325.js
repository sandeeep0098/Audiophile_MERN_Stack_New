exports.id = 325;
exports.ids = [325];
exports.modules = {

/***/ 2152:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4249, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 94564, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50885, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 80772, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 68262, 23))

/***/ }),

/***/ 32955:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 98266));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 73796));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 27230, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 67120, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 80381));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 99164));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 57438));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 74325))

/***/ }),

/***/ 82893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _productLinkPrimaryButton_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40740);
/* harmony import */ var _productLinkPrimaryButton_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_productLinkPrimaryButton_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



const ProductLinkPrimaryButton = ({ path, type, className, name, handleClick })=>{
    const productLinkTypeClass = type === "primary" ? "primary" : type === "dark" ? "dark" : type === "transparent" ? "transparent" : "primary";
    const handleButtonClick = (event)=>{
        if (handleClick) {
            handleClick(event);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: path,
        className: `productLink ${productLinkTypeClass} ${className}`,
        onClick: handleButtonClick,
        children: name ? name : "See Product"
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductLinkPrimaryButton);


/***/ }),

/***/ 73796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ layout_Navbar)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./src/components/layout/navbar.scss
var navbar = __webpack_require__(57354);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(48421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(31621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./public/assets/shared/desktop/logo.svg
var logo = __webpack_require__(74325);
// EXTERNAL MODULE: ./src/components/cart/Cart.scss
var Cart = __webpack_require__(12987);
// EXTERNAL MODULE: ./src/components/UI/productLinkPrimaryButton.tsx
var productLinkPrimaryButton = __webpack_require__(82893);
// EXTERNAL MODULE: ./src/hooks/hooks.ts
var hooks = __webpack_require__(2663);
// EXTERNAL MODULE: ./src/store/cart-slice.ts
var cart_slice = __webpack_require__(13332);
;// CONCATENATED MODULE: ./src/components/cart/CartProduct.tsx




hooks/* useAppSelector */.C;

const CartProduct = ({ product })=>{
    const dispatch = (0,hooks/* useAppDispatch */.T)();
    const removeProductHandler = ()=>{
        dispatch(cart_slice/* cartActions */.U.removeProductFromCart(product._id));
    };
    const addProductHandler = ()=>{
        dispatch(cart_slice/* cartActions */.U.addProductToCart(product));
    };
    console.log(product, "cart items");
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
            className: "cartItem",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "left",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: product.image.desktop,
                            alt: product.title,
                            className: "productImg",
                            width: 100,
                            height: 100
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "text-container",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                children: [
                                    product.name.substring(0, 4),
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            "$ ",
                                            product.price
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "cart-actions",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "inc_dec_button",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: removeProductHandler,
                                children: "-"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "demo",
                                children: product.quantity
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: addProductHandler,
                                children: "+"
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const cart_CartProduct = (CartProduct);

;// CONCATENATED MODULE: ./src/components/cart/Cart.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 







const Cart_Cart = ({ showCartHandler, cartisopen })=>{
    const cartProducts = (0,hooks/* useAppSelector */.C)((state)=>state.cart.products);
    const cartQuantity = (0,hooks/* useAppSelector */.C)((state)=>state.cart.totalQuantity);
    const cartTotalAmont = (0,hooks/* useAppSelector */.C)((state)=>state.cart.totalAmount);
    const emptyCart = cartProducts.length === 0;
    const dispatch = (0,hooks/* useAppDispatch */.T)();
    const removeAllProductsFromCart = (e)=>{
        e.preventDefault();
        // setCartItemQuantity((prev) => 0);
        dispatch(cart_slice/* cartActions */.U.removeAllProducts());
    };
    if (!emptyCart) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `cart ${cartisopen ? "cart-open" : ""}`,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "top",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                            children: [
                                "Cart(",
                                cartQuantity,
                                ")"
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            onClick: removeAllProductsFromCart,
                            children: "Remove all"
                        })
                    ]
                }),
                cartProducts.map((product)=>/*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(cart_CartProduct, {
                            product: product
                        }, product._id)
                    }, product._id)),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "bottom",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "total-price",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    children: "Total"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    children: `$ ${cartTotalAmont}`
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "cart-buttons",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(productLinkPrimaryButton["default"], {
                                    path: "",
                                    type: "primary",
                                    name: "Cancel",
                                    className: "button",
                                    handleClick: showCartHandler
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(productLinkPrimaryButton["default"], {
                                    path: "/Checkout",
                                    type: "primary",
                                    className: "button",
                                    name: "Checkout"
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    } else {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "cart",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "top",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                        children: [
                            "Cart(",
                            cartQuantity,
                            ")"
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "empty-cart",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "https://cdn.dribbble.com/users/887568/screenshots/3172047/media/35159a4a9ba57200e5e17119ffd945e6.gif",
                            alt: "empty-cart-Image",
                            width: 300,
                            height: 300
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "Ops Your Cart Is Empty!!"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "bottom",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "cart-buttons",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(productLinkPrimaryButton["default"], {
                            path: "",
                            type: "primary",
                            name: "Start Shopping",
                            className: "button",
                            handleClick: showCartHandler
                        })
                    })
                })
            ]
        });
    }
};
/* harmony default export */ const cart_Cart = (Cart_Cart);

// EXTERNAL MODULE: ./node_modules/@mui/icons-material/ShoppingCartOutlined.js
var ShoppingCartOutlined = __webpack_require__(98802);
;// CONCATENATED MODULE: ./src/components/layout/Navbar.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 










const Navbar = ()=>{
    const [cartisopen, setCartIsOpen] = (0,react_.useState)(false);
    const dispatch = (0,hooks/* useAppDispatch */.T)();
    const cartQuantity = (0,hooks/* useAppSelector */.C)((state)=>state.cart.totalQuantity);
    const showCartHandler = ()=>{
        setCartIsOpen(!cartisopen);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "navbar",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: "wrapper",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "left",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: logo["default"],
                            width: 143,
                            height: 25,
                            alt: "logo",
                            className: "logo"
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            className: "navbarlinks",
                            href: "/",
                            children: "Home"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            className: "navbarlinks",
                            href: "/headphones",
                            children: "Headphones"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            className: "navbarlinks",
                            href: "/speakers",
                            children: "Speakers"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            className: "navbarlinks",
                            href: "/earphones",
                            children: "Earphones"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "righticon",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(ShoppingCartOutlined/* default */.Z, {
                            className: "righticonimg",
                            onClick: showCartHandler
                        }),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: cartQuantity
                        })
                    ]
                }),
                cartisopen && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "backdrop",
                            onClick: showCartHandler
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(cart_Cart, {
                            showCartHandler: showCartHandler,
                            cartisopen: cartisopen
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const layout_Navbar = (Navbar);


/***/ }),

/***/ 2663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ useAppSelector),
/* harmony export */   T: () => (/* binding */ useAppDispatch)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1560);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

const useAppDispatch = react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch;
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;


/***/ }),

/***/ 13332:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ cartActions),
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10668);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
// cart-slice.js

const cartProductsFromStorage =  false ? 0 : null;
const products = cartProductsFromStorage !== null ? JSON.parse(cartProductsFromStorage) : [];
const totalQuantityFromStorage =  false ? 0 : null;
const totalQuantity = totalQuantityFromStorage !== null ? JSON.parse(totalQuantityFromStorage) : 0;
const totalAmountFromStorage =  false ? 0 : null;
const totalAmount = totalAmountFromStorage !== null ? JSON.parse(totalAmountFromStorage) : 0;
const cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "cart",
    initialState: {
        products: products,
        totalQuantity: totalQuantity,
        totalAmount: totalAmount
    },
    reducers: {
        addProductToCart (state, action) {
            const newProduct = action.payload;
            const existingProduct = state.products.find((product)=>product._id === newProduct._id);
            state.totalQuantity++;
            state.totalAmount += newProduct.price;
            if (!existingProduct) {
                state.products.push({
                    _id: newProduct._id,
                    slug: newProduct.slug,
                    name: newProduct.name,
                    image: newProduct.image,
                    price: newProduct.price,
                    quantity: 1,
                    totalPrice: newProduct.totalAmount
                });
            } else {
                existingProduct.quantity++;
                existingProduct.totalPrice += newProduct.price;
            }
            localStorage.setItem("cartProducts", JSON.stringify(state.products.map((product)=>product)));
            localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity));
            localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
        },
        removeProductFromCart (state, action) {
            const id = action.payload;
            const existingProduct = state.products.find((product)=>product._id === id);
            if (existingProduct) {
                state.totalQuantity--;
                state.totalAmount -= existingProduct.price;
                if (existingProduct.quantity === 1) {
                    state.products = state.products.filter((product)=>product._id !== id);
                } else {
                    existingProduct.quantity--;
                    existingProduct.totalPrice -= existingProduct.price;
                }
                localStorage.setItem("cartProducts", JSON.stringify(state.products.map((product)=>product)));
                localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity));
                localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
            }
        },
        removeAllProducts (state) {
            state.products = [];
            state.totalQuantity = 0;
            state.totalAmount = 0;
            localStorage.removeItem("cartProducts");
            localStorage.removeItem("totalQuantity");
            localStorage.removeItem("totalAmount");
        }
    }
});
const cartActions = cartSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cartSlice);


/***/ }),

/***/ 98266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ provider)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__(1560);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js
var redux_toolkit_cjs_production_min = __webpack_require__(10668);
// EXTERNAL MODULE: ./src/store/cart-slice.ts
var cart_slice = __webpack_require__(13332);
;// CONCATENATED MODULE: ./src/store/store.ts


const store = (0,redux_toolkit_cjs_production_min.configureStore)({
    reducer: {
        cart: cart_slice/* default */.Z.reducer
    }
});
/* harmony default export */ const store_store = (store);

;// CONCATENATED MODULE: ./src/store/provider.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



const ReduxProvider = ({ children })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(lib.Provider, {
        store: store_store,
        children: children
    });
};
/* harmony default export */ const provider = (ReduxProvider);


/***/ }),

/***/ 22293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(17814);
;// CONCATENATED MODULE: ./src/components/layout/Navbar.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/sandeepyadav/Desktop/audiophile_mern/src/components/layout/Navbar.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Navbar = (__default__);
// EXTERNAL MODULE: ./src/app/globals.scss
var globals = __webpack_require__(39675);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(46261);
// EXTERNAL MODULE: ./src/components/layout/footer.scss
var footer = __webpack_require__(74881);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(3501);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(53219);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./public/assets/shared/desktop/icon-instagram.svg
/* harmony default export */ const icon_instagram = ({"src":"/_next/static/media/icon-instagram.a78fbe9d.svg","height":24,"width":24,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./public/assets/shared/desktop/icon-facebook.svg
/* harmony default export */ const icon_facebook = ({"src":"/_next/static/media/icon-facebook.cb8ec932.svg","height":24,"width":24,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./public/assets/shared/desktop/icon-twitter.svg
/* harmony default export */ const icon_twitter = ({"src":"/_next/static/media/icon-twitter.1b6582cb.svg","height":20,"width":24,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./public/assets/shared/desktop/logo.svg
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.1fff0392.svg","height":25,"width":143,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/components/layout/footer.tsx









const Footer = ()=>{
    console.log("hello World");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "footer",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "left",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "left-container",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "logo",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: logo,
                                alt: "logo"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "Copyright 2023. All Rights Reserved"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "right",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "top",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                className: "footerlinks",
                                href: "/",
                                children: "Home"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                className: "footerlinks",
                                href: "/headphones",
                                children: "Headphones"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                className: "footerlinks",
                                href: "/speakers",
                                children: "Speakers"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                className: "footerlinks",
                                href: "/earphones",
                                children: "Earphones"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "bottom",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "socialMediaIcons",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: icon_facebook,
                                    alt: "icon"
                                }),
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: icon_twitter,
                                    alt: "icon"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: icon_instagram,
                                    alt: "icon"
                                }),
                                " "
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const layout_footer = (Footer);

;// CONCATENATED MODULE: ./src/store/provider.tsx

const provider_proxy = (0,module_proxy.createProxy)(String.raw`/Users/sandeepyadav/Desktop/audiophile_mern/src/store/provider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: provider_esModule, $$typeof: provider_$$typeof } = provider_proxy;
const provider_default_ = provider_proxy.default;


/* harmony default export */ const provider = (provider_default_);
;// CONCATENATED MODULE: ./src/app/layout.tsx





const metadata = {
    title: "Audiophile App",
    description: "Order the best earphones devices"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(provider, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
                    children,
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_footer, {})
                ]
            })
        })
    });
}


/***/ }),

/***/ 57438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/icon-facebook.cb8ec932.svg","height":24,"width":24,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 80381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/icon-instagram.a78fbe9d.svg","height":24,"width":24,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 99164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/icon-twitter.1b6582cb.svg","height":20,"width":24,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 74325:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.1fff0392.svg","height":25,"width":143,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 82819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49984);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 39675:
/***/ (() => {



/***/ }),

/***/ 40740:
/***/ (() => {



/***/ }),

/***/ 12987:
/***/ (() => {



/***/ }),

/***/ 74881:
/***/ (() => {



/***/ }),

/***/ 57354:
/***/ (() => {



/***/ })

};
;