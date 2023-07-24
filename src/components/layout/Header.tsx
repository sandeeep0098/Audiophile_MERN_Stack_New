import React from 'react';
import './header.scss';
import heroImage from '../../assets/home/desktop/image-hero.png';
import Image from 'next/image';
import Link from 'next/link';
const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <div className="left-container">
          <h2>new product</h2>
          <h1>XX99 Mark II Headphones</h1>
          <p>
            {' '}
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          {/* <ProductLinkPrimaryButton path="/" type="dark" /> */}
          <Link href="/" className="link">
            <div>See Products</div>
          </Link>
        </div>
      </div>
      <div className="right">
        <Image src={heroImage} className="heroImg" alt="heroImg"></Image>
      </div>
    </div>
  );
};

export default Header;
