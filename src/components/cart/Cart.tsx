import React, { useState } from 'react';
import './Cart.scss';
import ProductLinkPrimaryButton from '../UI/productLinkPrimaryButton';
import blackheadphones from '../../../public/assets/cart/image-xx99-mark-two-headphones.jpg';
import Image from 'next/image';
import whiteheadphones from '../../../public/assets/cart/image-xx59-headphones.jpg';
import speaker from '../../../public/assets/cart/image-yx1-earphones.jpg'

const Cart = ({showCartHandler}: any) => {
  
  return (
    <div className="cart">
      <div className="top">
        <h6>Cart(3)</h6>
        <p>Remove all</p>
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
            <button>-</button>
            <div className="demo">4</div>
            <button>+</button>
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
            <button>-</button>
            <div className="demo">4</div>
            <button>+</button>
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
            <button>-</button>
            <div className="demo">4</div>
            <button>+</button>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="total-price">
          <h6>Total</h6>
          <h5>$ 1,234</h5>
        </div>

        <div className="cart-buttons">
       
              <ProductLinkPrimaryButton 
          path=""
            type="primary"
            name='Cancel'
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
};

export default Cart;
