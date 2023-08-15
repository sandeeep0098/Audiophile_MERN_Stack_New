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

const Cart: React.FC<{ products: ProductProps[] }> = ({
  showCartHandler,
  cartisopen,
  products,
}: any) => {
  const cartProducts = useAppSelector((state) => state.cart.products);
  const cartQuantity = useAppSelector((state) => state.cart.totalQuantity);
  const cartTotalAmont = useAppSelector((state) => state.cart.totalAmount);
  const emptyCart = cartProducts.length === 0;

  if (!emptyCart) {
    return (
      <div className={`cart ${cartisopen ? 'cart-open' : ''}`}>
        <div className="top">
          <h6>Cart({cartQuantity})</h6>
          <p>Remove all</p>
        </div>

        {cartProducts.map((product) => (
          <ul key={product._id} className="center">
            <li className="cartItem">
              <div className="left">
                <Image
                  src={product.image.desktop}
                  alt={product.title}
                  className="productImg"
                  width={100}
                  height={100}
                ></Image>
                <div className="text-container">
                  <h6>
                    {product.name.substring(0, 4)} <br />
                    <span>$ {product.price}</span>
                  </h6>
                </div>
              </div>

              <ManageProduct />
            </li>
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
            src="https://cdn.dribbble.com/users/887568/screenshots/3172047/media/35159a4a9ba57200e5e17119ffd945e6.gif"
            alt="empty-cart-Image"
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

export default Cart;
