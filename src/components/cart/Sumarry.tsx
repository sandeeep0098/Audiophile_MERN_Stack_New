'use client';
import React from 'react';
import './Summary.scss';
import ProductLinkPrimaryButton from '../UI/productLinkPrimaryButton';
import blackheadphones from '../../../public/assets/cart/image-xx99-mark-two-headphones.jpg';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import emptyCartimg from '../../../public/empty-cart.png';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';

const Summary = ({ onSubmit }) => {
  const cartProducts = useAppSelector((state) => state.cart.products);

  const cartTotalAmount = useAppSelector((state) => state.cart.totalAmount);

  const vatAmount = (cartTotalAmount + 50) * 0.18;
  const grandTotalAmount = cartTotalAmount + vatAmount + 50;

  useEffect(() => {
    if (cartTotalAmount === 0) {
      window.location.href = '/';
    }
  }, [cartTotalAmount]);

  return (
    <div className="summary">
      <div className="wrapper">
        <div className="top">
          <h6>Summary</h6>
        </div>
        {cartProducts.map((product) => (
          <div className="center">
            <div className="cartItem">
              <div className="left">
                <Image
                  src={product.image.desktop}
                  alt="blackheadphones"
                  className="blackheadphones"
                  width={100}
                  height={100}
                ></Image>
                <div className="text-container">
                  <h6>
                    {product.name.substring(0, 4)} <br />
                    <span>${product.price}</span>
                  </h6>
                </div>
              </div>
              <div className="right">
                <div className="quantity">{`x${product.quantity}`}</div>
              </div>
            </div>
          </div>
        ))}

        <div className="bottom">
          <div className="price-details">
            <div className="price-details-container">
              <div className="price-details-item">
                <h6>Total</h6>
                <h5>{`$${cartTotalAmount}`}</h5>
              </div>
            </div>

            <div className="price-details-container">
              <div className="price-details-item">
                <h6>Shipping</h6>
                <h5>$ 50</h5>
              </div>
            </div>
            <div className="price-details-container">
              <div className="price-details-item">
                <h6>VAT (included)</h6>
                <h5>${vatAmount.toFixed(0)}</h5>
              </div>
            </div>
            <div className="price-details-container">
              <div className="price-details-item">
                <h6>Grand total</h6>
                <h5 className="totalamount">${grandTotalAmount.toFixed(0)}</h5>
              </div>
            </div>
          </div>
          <div className="cart-buttons">
            <ProductLinkPrimaryButton
              path="/"
              type="primary"
              className="button"
              name="Continue & Pay"
              handleClick={onSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
