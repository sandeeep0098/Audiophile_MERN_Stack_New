'use client';
import React from 'react';
import './productlist.scss';
import Image from 'next/image';
import headphoneImage from '../../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg';
import ProductLinkPrimaryButton from '../UI/productLinkPrimaryButton';
import { useParams } from 'next/navigation';

interface includeItems {
  quantity: number;
  item: string;
}
interface Product {
  _id: number;
  name: string;
  category: string;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: includeItems[];
  gallery: {
    first: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    second: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    third: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };
}

const ProductList: React.FC<{ products: Product[] }> = ({ products }) => {
  const params = useParams();
  return (
    <div className="productlist">
      <div className="wrapper">
        <ul>
          {products
            .sort((a, b) => (a.new === b.new ? 0 : a.new ? -1 : 1))
            .map(
              (product) =>
                product.category === params.categories && (
                  <li key={product._id}>
                    <div className="left">
                      <Image
                        className="headphonesimg"
                        src={headphoneImage}
                        alt="img"
                      />
                    </div>
                    <div className="right">
                      <div className="right-container">
                        {product.new && (
                          <h6 className="newproduct">New Product</h6>
                        )}
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <ProductLinkPrimaryButton path="/" type="primary" />
                      </div>
                    </div>
                  </li>
                )
            )}
        </ul>
      </div>
    </div>
  );
};

export default ProductList;
