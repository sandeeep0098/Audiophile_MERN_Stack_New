import React from 'react';
import './header.scss';
import heroImage from '../../../public/assets/home/desktop/image-hero.png';
import Image from 'next/image';
import Link from 'next/link';
import ProductLinkPrimaryButton from '../UI/productLinkPrimaryButton';
const Header = () => {
  return (
    <div className="header">
      <Link href="/headphones/xx99-mark-two-headphones">hello world</Link>
      <div className="left">
        <div className="left-container">
          <h2>new product</h2>
          <h1>XX99 Mark II Headphones</h1>
          <p>
            {' '}
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <ProductLinkPrimaryButton
            path="/"
            type="primary"
            className="button"
          />
        </div>
      </div>
      <div className="right">
        <Image src={heroImage} className="heroImg" alt="heroImg"></Image>
      </div>
    </div>
  );
};

export default Header;
