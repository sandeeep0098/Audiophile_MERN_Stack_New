import React, { useState } from 'react'; // Import useState from 'react'
import './oderDetailModalComponents.scss';

import checkOutIcon from '../../../public/assets/checkout/icon-order-confirmation.svg';
import Image from 'next/image';
import ProductLinkPrimaryButton from '../UI/productLinkPrimaryButton';
import { useAppSelector } from '@/hooks/hooks';
import { useAppDispatch } from '@/hooks/hooks';
import { cartActions } from '@/store/cart-slice';
const OderDetailModalComponent = ({ modalHandler, orderDetailModal }) => {
  const cartProducts = useAppSelector((state) => state.cart.products);
  const cartTotalAmount = useAppSelector((state) => state.cart.totalAmount);
  const cartItemQuantiy = useAppSelector((state) => state.cart.totalQuantity);

  const vatAmount = (cartTotalAmount + 50) * 0.18;
  const grandTotalAmount = cartTotalAmount + vatAmount + 50;
  const checkoutCartQuantity = cartItemQuantiy - 1;
  const closeOrderModalHandler = () => {
    modalHandler(false);
  };
  const dispatch = useAppDispatch();
  const backToHomeHandler = () => {
    dispatch(cartActions.removeAllProducts());
  };
  console.log(cartProducts);
  return (
    <>
      <div className="backdrop">
        <div
          className={`modal-container ${orderDetailModal ? 'animation' : ''}`}
        >
          <Image src={checkOutIcon} alt="checkout"></Image>

          <h2>
            Than you <br /> for your order
          </h2>
          <p>You will receive an email confirmation shortly.</p>

          <div className="order-detail-container">
            <div className="left">
              <div className="product-container-details">
                {cartProducts.length > 0 && (
                  <div className="product-detail-top">
                    <Image
                      src={cartProducts[0].image.desktop}
                      alt={cartProducts[0].slug}
                      width={100}
                      height={100}
                    />
                    <div className="name-info">
                      <h6 className="slug">{cartProducts[0].name}</h6>
                      <p className="price">${cartProducts[0].price}</p>
                    </div>
                    <div className="quantity">x{cartProducts[0].quantity}</div>
                  </div>
                )}
                <hr />

                {checkoutCartQuantity > 1 && (
                  <p className="other-item-details">
                    and {checkoutCartQuantity} other item(s)
                  </p>
                )}
              </div>
            </div>
            <div className="right">
              <div className=" total-price-container">
                <h4>Grand Total</h4>
                <p>${grandTotalAmount.toFixed(0)}</p>
              </div>
            </div>
          </div>

          <ProductLinkPrimaryButton
            type="primary"
            path="/"
            name="back to home"
            className="button"
            handleClick={backToHomeHandler}
          />
        </div>
      </div>
    </>
  );
};

export default OderDetailModalComponent;
