import React from 'react';
import './aboutus.scss';
import Image from 'next/image';
import userImage from '../../assets/shared/desktop/image-best-gear.jpg';

const AboutUs = () => {
  return (
    <div className="aboutus">
      <div className="wrapper">
        <div className="left">
          <div className="left-container">
            <h1>
              Bringing you the <span>best </span>audio gear
            </h1>
            <p>
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
        </div>
        <div className="right">
          <Image src={userImage} alt="userImg" className="userimg"></Image>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
