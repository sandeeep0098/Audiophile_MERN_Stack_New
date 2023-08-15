'use client';
import React, { useState } from 'react';
import './ProductListItem.scss';
import Link from 'next/link';
import Image from 'next/image';
import headphoneImg from '../../../public/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg';
import ProductLinkPrimaryButton from '../UI/productLinkPrimaryButton';
import ManageProduct from '../UI/ManageProduct';
import { ProductProps } from '@/app/types';
import { useParams } from 'next/navigation';

import { cartActions } from '@/store/cart-slice';
import { useAppDispatch } from '@/hooks/hooks';
import { useAppSelector } from '@/hooks/hooks';

const ProductListItem: React.FC<{ products: ProductProps[] }> = ({
  products,
}) => {
  const params = useParams();
  const cartProducts = useAppSelector((state) => state.cart.products);
  const product = products.find((product) => product.slug === params.slug);
  console.log(product);
  const [cartItemQuantiy, setCartItemQuantity] = useState(0);
  console.log(product + 'product from list item');
  const handleGoBack = () => {
    window.history.back();
  };
  const dispatch = useAppDispatch();

  const addToCartHandler = (e: any) => {
    e.preventDefault();

    setCartItemQuantity((prev) => prev + 1);
    dispatch(cartActions.addProductToCart(product));

    console.log('product added successfully');
  };
  const removeFromCartHandler = (e: any) => {
    e.preventDefault();
    if (cartProducts.length === 0) {
      return;
    }
    {
      dispatch(cartActions.removeProductFromCart(product));
      setCartItemQuantity((prev) => prev - 1);
      console.log('product removed successfully');
    }
  };
  const removeAllProductsFromCart = (e: any) => {
    e.preventDefault();
    setCartItemQuantity((prev) => 0);
    dispatch(cartActions.removeAllProducts(product));
  };
  return (
    <div className="productlistitem">
      <Link href="" className="back-link" onClick={handleGoBack}>
        Go Back
      </Link>
      <div className="section_one">
        <div className="left">
          <Image
            src={product?.image.desktop}
            alt={product?.name}
            className="headphoneImg"
            width={540}
            height={560}
          ></Image>
        </div>
        <div className="right">
          <div className="right-container">
            {product?.new && <h6 className="newproduct">New Product</h6>}
            <h2>{product?.slug}</h2>
            <p>{product?.description}</p>
            <p className="productprice">$ {product?.price}</p>
            <ProductLinkPrimaryButton
              path=""
              type="primary"
              name="Add TO Cart"
              handleClick={addToCartHandler}
            />{' '}
            <br />
            <br />
            <div>
              <button onClick={removeFromCartHandler}>-</button>
              <span>{cartItemQuantiy}</span>
              <button onClick={addToCartHandler}>+</button>
            </div>
            <button onClick={addToCartHandler}>Add To Cart</button>
            <button onClick={removeFromCartHandler}>Remove from Cart</button>
            <button onClick={removeAllProductsFromCart}>
              Remove all products
            </button>
          </div>
        </div>
      </div>
      <div className="section_two">
        <div className="left">
          <h4>Features</h4>
          <p>{product?.features}</p>
        </div>
        <div className="right">
          <div className="right-container">
            <h4>In the box</h4>
            <ul>
              <li>
                <span>{product?.includes[0].quantity}x</span>
                {product?.includes[0].item}
              </li>{' '}
              <li>
                <span>{product?.includes[1].quantity}x</span>
                {product?.includes[1].item}
              </li>{' '}
              <li>
                <span>{product?.includes[2].quantity}x</span>
                {product?.includes[2].item}
              </li>{' '}
              <li>
                <span>{product?.includes[3].quantity}x</span>
                {product?.includes[3].item}
              </li>{' '}
            </ul>
          </div>
        </div>
      </div>
      <div className="section_three">
        <div className="left">
          <Image
            src={product?.gallery.first.desktop}
            alt={product?.name}
            className="image-left"
            height={292}
            width={445}
          ></Image>
          <Image
            src={product?.gallery.second.desktop}
            alt={product?.name}
            className="image-left"
            height={292}
            width={445}
          ></Image>
        </div>
        <div className="right">
          <Image
            src={product?.gallery.third.desktop}
            alt={product?.name}
            className="image-right"
            height={592}
            width={635}
          ></Image>
        </div>
      </div>
      <div className="section_four">
        <h2>You May Also Like</h2>
        <div className="wrapper">
          <div className="like_product">
            <Image
              src={product?.others[0].image.desktop}
              alt="img"
              className="image"
              width={350}
              height={318}
            ></Image>

            <h3>{product?.others[0].name}</h3>
            <ProductLinkPrimaryButton
              path={product?.others[0].slug}
              type="primary"
            />
          </div>{' '}
          <div className="like_product">
            <Image
              src={product?.others[1].image.desktop}
              alt="img"
              className="image"
              width={350}
              height={318}
            ></Image>

            <h3>{product?.others[1].name}</h3>
            <ProductLinkPrimaryButton
              path={product?.others[1].slug}
              type="primary"
            />
          </div>{' '}
          <div className="like_product">
            <Image
              src={product?.others[2].image.desktop}
              alt="img"
              className="image"
              width={350}
              height={318}
            ></Image>

            <h3>{product?.others[2].name}</h3>
            <ProductLinkPrimaryButton
              path={product?.others[2].slug}
              type="primary"
            />
          </div>{' '}
        </div>
      </div>
    </div>
  );
};

export default ProductListItem;
