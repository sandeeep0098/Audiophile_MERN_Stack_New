'use client';
import React, { useState } from 'react';
import './Cart.scss';
import ProductLinkPrimaryButton from '../UI/productLinkPrimaryButton';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { cartActions } from '@/store/cart-slice';
import { useParams } from 'next/navigation';
import { ProductProps } from '@/app/types';
import ManageProduct from '../UI/ManageProduct';
import ProductListItem from '../product/ProductListItem';
import CartProduct from './CartProduct';
import emptyCartgif from '../../../public/empty-cart.gif';
import emptyCartimg2 from '../../../public/cart-empty.png';
import emptyCartimg from '../../../public/empty-cart.png';
import headphoneImg from '../../../public/assets/cart/image-xx59-headphones.jpg';

const Cart = ({ showCartHandler, cartisopen }: any) => {
  const cartProducts = useAppSelector((state) => state.cart.products);

  const cartQuantity = useAppSelector((state) => state.cart.totalQuantity);
  const cartTotalAmont = useAppSelector((state) => state.cart.totalAmount);
  const emptyCart = cartProducts.length === 0;
  const dispatch = useAppDispatch();

  const removeAllProductsFromCart = (e: any) => {
    e.preventDefault();
    // setCartItemQuantity((prev) => 0);
    dispatch(cartActions.removeAllProducts());
  };

  if (!emptyCart) {
    return (
      <div className={`cart ${cartisopen ? 'cart-open' : ''}`}>
        <div className="top">
          <h6>Cart({cartQuantity})</h6>
          <p onClick={removeAllProductsFromCart}>Remove all</p>
        </div>

        {cartProducts.map((product) => (
          <ul key={product._id} className="center">
            <CartProduct key={product._id} product={product} />
          </ul>
        ))}

        <div className="bottom">
          <div className="total-price">
            <h6>Total</h6>
            <h5>{`$ ${cartTotalAmont}`}</h5>
          </div>

          <div className="cart-buttons">
            <ProductLinkPrimaryButton
              path=""
              type="primary"
              name="Cancel"
              className="button"
              handleClick={showCartHandler}
            />
            <ProductLinkPrimaryButton
              path="/Checkout"
              type="primary"
              className="button"
              name="Checkout"
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="cart">
        <div className="top">
          <h6>Cart({cartQuantity})</h6>
        </div>

        <div className="empty-cart">
          <Image
            src={emptyCartimg}
            alt="empty-cart-Image"
            width={300}
            height={300}
          ></Image>
          <Image
            src={emptyCartimg2}
            alt="empty-cart-gif"
            width={300}
            height={300}
          ></Image>

          <p>Ops Your Cart Is Empty!!</p>
        </div>

        <div className="bottom">
          <div className="cart-buttons">
            <ProductLinkPrimaryButton
              path=""
              type="primary"
              name="Start Shopping"
              className="button"
              handleClick={showCartHandler}
            />
          </div>
        </div>
      </div>
    );
  }
};
console.log(emptyCartgif);
console.log(headphoneImg);

export default Cart;
