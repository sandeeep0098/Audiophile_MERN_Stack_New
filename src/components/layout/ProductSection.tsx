import React from 'react';
import './productsection.scss';
import Image from 'next/image';
import productImage1 from '@/assets/home/desktop/image-speaker-zx9.png';
import productImage2 from '@/assets/home/desktop/image-speaker-zx7.jpg';
import productImage3 from '@/assets/home/desktop/image-earphones-yx1.jpg';
import ProductLinkPrimaryButton from '../UI/productLinkPrimaryButton';

const ProductSection = () => {
  return (
    <div className="productsection">
      <div className="top">
        <div className="topcontainer">
          <div className="left">
            <Image
              className="productimage"
              alt="productimages"
              src={productImage1}
            ></Image>
            <div className="backdropoverlaysmall"></div>
            <div className="backdropoverlaymedium"></div>
            <div className="backdropoverlaylarge"></div>
          </div>
          <div className="right">
            <div className="right-container">
              <h1>ZX9 SPEAKER</h1>
              <p>
                {' '}
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <ProductLinkPrimaryButton
                path="/"
                type="dark"
                className="button"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="center">
        <Image
          className="productimage"
          alt="productimages"
          src={productImage2}
        ></Image>{' '}
        <div className="center-text">
          <h2>ZX7 SPEAKER</h2>

          <ProductLinkPrimaryButton path="/" type="transparent" />
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <Image
            className="productimage"
            alt="productimages"
            src={productImage3}
          ></Image>
        </div>
        <div className="right">
          <div className="right-container">
            <h2>YX1 EARPHONES</h2>
            <ProductLinkPrimaryButton
              type="transparent"
              path="/"
              className="button"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
