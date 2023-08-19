// import { createSlice } from '@reduxjs/toolkit';

// const cartProductsFromStorage = localStorage.getItem('cartProducts');
// const products =
//   cartProductsFromStorage !== null ? JSON.parse(cartProductsFromStorage) : [];

// const totalQuantityFromStorage = localStorage.getItem('totalQuantity');
// const totalQuantity =
//   totalQuantityFromStorage !== null ? JSON.parse(totalQuantityFromStorage) : 0;

// const totalAmountFromStorage = localStorage.getItem('totalAmount');
// const totalAmount =
//   totalAmountFromStorage !== null ? JSON.parse(totalAmountFromStorage) : 0;
import { createSlice } from '@reduxjs/toolkit';

const cartProductsFromStorage =
  typeof window !== 'undefined' ? localStorage.getItem('cartProducts') : null;
const products =
  cartProductsFromStorage !== null ? JSON.parse(cartProductsFromStorage) : [];

const totalQuantityFromStorage =
  typeof window !== 'undefined' ? localStorage.getItem('totalQuantity') : null;
const totalQuantity =
  totalQuantityFromStorage !== null ? JSON.parse(totalQuantityFromStorage) : 0;

const totalAmountFromStorage =
  typeof window !== 'undefined' ? localStorage.getItem('totalAmount') : null;
const totalAmount =
  totalAmountFromStorage !== null ? JSON.parse(totalAmountFromStorage) : 0;

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: products,
    totalQuantity: totalQuantity,
    totalAmount: totalAmount,
  },
  reducers: {
    addProductToCart(state, action) {
      const newProduct = action.payload;
      const existingProduct = state.products.find(
        (product) => product._id === newProduct._id
      );
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
          totalPrice: newProduct.totalAmount,
        });
      } else {
        existingProduct.quantity++;
        existingProduct.totalPrice += newProduct.price;
      }
      localStorage.setItem(
        'cartProducts',
        JSON.stringify(state.products.map((product) => product))
      );
      localStorage.setItem(
        'totalQuantity',
        JSON.stringify(state.totalQuantity)
      );
      localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount));
    },
    removeProductFromCart(state, action) {
      const id = action.payload;
      const existingProduct = state.products.find(
        (product) => product._id === id
      );
      if (existingProduct) {
        state.totalQuantity--;
        state.totalAmount -= existingProduct.price;

        if (existingProduct.quantity === 1) {
          state.products = state.products.filter(
            (product) => product._id !== id
          );
        } else {
          existingProduct.quantity--;
          existingProduct.totalPrice -= existingProduct.price;
        }

        localStorage.setItem(
          'cartProducts',
          JSON.stringify(state.products.map((product) => product))
        );
        localStorage.setItem(
          'totalQuantity',
          JSON.stringify(state.totalQuantity)
        );
        localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount));
      }
    },
    removeAllProducts(state) {
      state.products = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
      localStorage.removeItem('cartProducts');
      localStorage.removeItem('totalQuantity');
      localStorage.removeItem('totalAmount');
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
