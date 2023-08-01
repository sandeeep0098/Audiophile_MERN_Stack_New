'use client';
import React from 'react';
import './ProductListItem.scss';
import Link from 'next/link';
import Image from 'next/image';
import headphoneImg from '../../../public/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg';
import ProductLinkPrimaryButton from '../UI/productLinkPrimaryButton';
import ManageProduct from '../UI/ManageProduct';
import { ProductProps } from '@/app/types';
import { useParams } from 'next/navigation';

const ProductListItem: React.FC<{ products: ProductProps[] }> = ({
  products,
}) => {
  const params = useParams();
  const product = products.find((product) => product.slug === params.slug);

  return (
    <div className="productlistitem">
      <Link href="/" className="back-link">
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
            <h2>{product?.name} </h2>
            <p>{product?.description}</p>
            <ManageProduct />
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
            <ProductLinkPrimaryButton path="/" type="primary" />
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
            <ProductLinkPrimaryButton path="/" type="primary" />
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
            <ProductLinkPrimaryButton path="/" type="primary" />
          </div>{' '}
        </div>
      </div>
    </div>
  );
};

export default ProductListItem;
