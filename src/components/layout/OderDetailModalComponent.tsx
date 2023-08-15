import React, { useState } from 'react'; // Import useState from 'react'
import './oderDetailModalComponents.scss';
import checkOutIcon2 from '../../../public/assets/checkout/icon-cash-on-delivery.svg';
import checkOutIcon from '../../../public/assets/checkout/icon-order-confirmation.svg';
import Image from 'next/image';
import ProductLinkPrimaryButton from '../UI/productLinkPrimaryButton';

const OderDetailModalComponent = ({ modalHandler }) => {
  const closeOrderModalHandler = () => {
    modalHandler(false);
  };

  return (
    <>
      <div className="backdrop" onClick={closeOrderModalHandler}>
        <div className="modal-container">
          <Image src={checkOutIcon} alt="checkout"></Image>

          <h2>
            Than you <br /> for your order
          </h2>
          <p>You will receive an email confirmation shortly.</p>

          <div className="order-detail-container">
            <div className="left">
              <div className="product-container-details">
                <div className="product-detail-top">
                  <Image src={checkOutIcon2} alt="product-img"></Image>
                  <div className="name-info">
                    <h6 className="slug">XX99 MK ii</h6>
                    <p className="price">$ 2,999</p>
                  </div>
                  <div className="quantity">x4</div>
                </div>
                <hr />
                <p className="other-item-details">and 2 other item(s)</p>
              </div>
            </div>
            <div className="right">
              <div className=" total-price-container">
                <h4>Grand Total</h4>
                <p>$9999</p>
              </div>
            </div>
          </div>

          <ProductLinkPrimaryButton
            type="primary"
            path="/"
            name="back to home"
            className="button"
          />
        </div>
      </div>
    </>
  );
};

export default OderDetailModalComponent;
