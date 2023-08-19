'use client';
import React, { useState, useEffect } from 'react';
import './productlist.scss';
import Image from 'next/image';
import ProductLinkPrimaryButton from '../UI/productLinkPrimaryButton';
import { useParams } from 'next/navigation';
import { ProductProps } from '@/app/types/index';

const ProductList: React.FC<{ products: ProductProps[] }> = ({ products }) => {
  const params = useParams();
  const [showProducts, setShowProducts] = useState(false);

  useEffect(() => {
    setShowProducts(true);
  }, []);

  return (
    <div className="productlist">
      <div className="wrapper">
        <ul>
          {products
            .sort((a, b) => (a.new === b.new ? 0 : a.new ? -1 : 1))
            .map(
              (product) =>
                product.category === params.categories && (
                  <li key={product._id} className={showProducts ? 'show' : ''}>
                    <div className="left">
                      <Image
                        src={product.image.desktop}
                        alt="img"
                        className="productimg"
                        width={540}
                        height={560}
                      />
                    </div>
                    <div className="right">
                      <div className="right-container">
                        {product.new && (
                          <h6 className="newproduct">New Product</h6>
                        )}
                        <h2>{product.name}</h2>

                        <p>{product.description}</p>
                        <ProductLinkPrimaryButton
                          path={`${product.category}/${product.slug}`}
                          type="primary"
                        />
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
