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

        <button onClick={removeProductHandler}>-</button>
        <span>{product.quantity}</span>
        <button onClick={addProductHandler}>+</button>
      </li>
    </div>
  );
};

export default CartProduct;
