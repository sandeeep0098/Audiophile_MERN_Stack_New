import React from 'react';
import Image from 'next/image';
import ManageProduct from '../UI/ManageProduct';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
useAppSelector;
import { cartActions } from '@/store/cart-slice';

const CartProduct = ({ product }) => {
  const dispatch = useAppDispatch();
  const removeProductHandler = () => {
    dispatch(cartActions.removeProductFromCart(product._id));
  };

  const addProductHandler = () => {
    dispatch(cartActions.addProductToCart(product));
  };

  console.log(product, 'cart items');
  return (
    <div>
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

        <div className="cart-actions">
          <div className="inc_dec_button">
            <button onClick={removeProductHandler}>-</button>
            <div className="demo">{product.quantity}</div>
            <button onClick={addProductHandler}>+</button>
          </div>
        </div>
      </li>
    </div>
  );
};

export default CartProduct;
