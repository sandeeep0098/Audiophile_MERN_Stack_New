import React from 'react';
import './Summary.scss';
import ProductLinkPrimaryButton from '../UI/productLinkPrimaryButton';
import blackheadphones from '../../../public/assets/cart/image-xx99-mark-two-headphones.jpg';
import Image from 'next/image';
import whiteheadphones from '../../../public/assets/cart/image-xx59-headphones.jpg';
import speaker from '../../../public/assets/cart/image-yx1-earphones.jpg';
const Summary = () => {
  return (
    <div className="summary">
      <div className="wrapper">
        <div className="top">
          <h6>Summary</h6>
        </div>
        <div className="center">
          <div className="cartItem">
            <div className="left">
              <Image
                src={blackheadphones}
                alt="blackheadphones"
                className="blackheadphones"
              ></Image>
              <div className="text-container">
                <h6>
                  XX99MKll <br />
                  <span>$ 2999</span>
                </h6>
              </div>
            </div>
            <div className="right">
              <div className="quantity">x 2</div>
            </div>
          </div>
          <div className="cartItem">
            <div className="left">
              <Image
                src={whiteheadphones}
                alt="blackheadphones"
                className="blackheadphones"
              ></Image>
              <div className="text-container">
                <h6>
                  XX99MKll <br />
                  <span>$ 2999</span>
                </h6>
              </div>
            </div>
            <div className="right">
              <div className="quantity">x 2</div>
            </div>
          </div>
          <div className="cartItem">
            <div className="left">
              <Image
                src={speaker}
                alt="blackheadphones"
                className="blackheadphones"
              ></Image>
              <div className="text-container">
                <h6>
                  XX99MKll <br />
                  <span>$ 2999</span>
                </h6>
              </div>
            </div>
            <div className="right">
              <div className="quantity">x 2</div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="price-details">
            <div className="price-details-container">
              <div className="price-details-item">
                <h6>Total</h6>
                <h5>$ 1,234</h5>
              </div>
            </div>
            <div className="price-details-container">
              <div className="price-details-item">
                <h6>Total</h6>
                <h5>$ 1,234</h5>
              </div>
            </div>
            <div className="price-details-container">
              <div className="price-details-item">
                <h6>Total</h6>
                <h5>$ 1,234</h5>
              </div>
            </div>
            <div className="price-details-container">
              <div className="price-details-item">
                <h6>Total</h6>
                <h5>$ 1,234</h5>
              </div>
            </div>
          </div>

          <div className="cart-buttons">
            <ProductLinkPrimaryButton
              path="/Checkout"
              type="primary"
              className="button"
              name="Checkout"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
