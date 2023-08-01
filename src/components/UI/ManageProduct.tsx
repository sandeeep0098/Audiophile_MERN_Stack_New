import React from 'react';
import ProductLinkPrimaryButton from './productLinkPrimaryButton';
import './ManageProduct.scss';
const ManageProduct = () => {
  const addItemHandler = () => {
    alert('items Will be added to Cart');
  };
  return (
    <div className="buttons">
      <div className="inc_dec_button">
        <button>-</button>
        <div className="demo">4</div>
        <button>+</button>
      </div>
      <ProductLinkPrimaryButton
        path=""
        type="primary"
        name="Add TO Cart"
        handleClick={addItemHandler}
      />
    </div>
  );
};

export default ManageProduct;
