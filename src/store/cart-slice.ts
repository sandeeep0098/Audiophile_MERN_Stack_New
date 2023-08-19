import { createSlice } from '@reduxjs/toolkit';

const products =
  localStorage.getItem('cartProducts') !== null
    ? JSON.parse(localStorage.getItem('cartProducts'))
    : [];
const totalQuantity =
  localStorage.getItem('totalQuantity') !== null
    ? JSON.parse(localStorage.getItem('totalQuantity'))
    : 0;
const totalAmount =
  localStorage.getItem('totalAmount') !== null
    ? JSON.parse(localStorage.getItem('totalAmount'))
    : 0;

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
      state.totalQuantity--;
      state.totalAmount -= existingProduct.price;

      if (existingProduct.quantity === 1) {
        state.products = state.products.filter((product) => product._id !== id);
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
