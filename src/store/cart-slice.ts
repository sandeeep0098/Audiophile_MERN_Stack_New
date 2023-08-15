import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addProductToCart(state, action) {
      const newProduct = action.payload;
      const existingProduct = state.products.find(
        (product) => product.id === newProduct._id
      );
      state.totalQuantity++;
      state.totalAmount += newProduct.price;
      if (!existingProduct) {
        state.products.push({
          id: newProduct._id,
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
    },
    removeProductFromCart(state, action) {
      const id = action.payload._id;
      console.log('Removing product with ID:', id);
      const existingProduct = state.products.find(
        (product) => product.id === id
      );
      console.log('Existing product:', existingProduct);
      state.totalQuantity--;
      state.totalAmount -= existingProduct.price;

      if (existingProduct && existingProduct.quantity === 1) {
        state.products = state.products.filter((product) => product.id !== id);
      } else if (existingProduct) {
        existingProduct.quantity--;
        existingProduct.totalPrice -= existingProduct.price;
      }
    },
    removeAllProducts(state) {
      state.products = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
