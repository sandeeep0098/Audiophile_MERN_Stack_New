import React from 'react';
import ProductLinkPrimaryButton from './productLinkPrimaryButton';
import './ManageProduct.scss';
import { useAppSelector } from '@/hooks/hooks';

const ManageProduct = () => {
  const cartProducts = useAppSelector((state) => state.cart.products);
  const addItemHandler = () => {
    alert('items Will be added to Cart');
  };
  return (
    <div className="buttons">
      <div className="inc_dec_button">
        <button>-</button>
        <div className="demo">
          {cartProducts.map((product) => product.quantity)}
        </div>
        <button>+</button>
      </div>
    </div>
  );
};

export default ManageProduct;
