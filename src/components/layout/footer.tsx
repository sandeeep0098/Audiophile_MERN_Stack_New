import React from 'react';
import './footer.scss';
import Image from 'next/image';
import Link from 'next/link';
import instagrainIcon from '../../../public/assets/shared/desktop/icon-instagram.svg';
import facebookIcon from '../../../public/assets/shared/desktop/icon-facebook.svg';
import twitterIcon from '../../../public/assets/shared/desktop/icon-twitter.svg';
import logo from '../../../public/assets/shared/desktop/logo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="left">
        <div className="left-container">
          <div className="logo">
            <Image src={logo} alt="logo"></Image>
          </div>

          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <span>Copyright 2023. All Rights Reserved</span>
        </div>
      </div>
      <div className="right">
        <div className="top">
          <Link className="footerlinks" href="/">
            Home
          </Link>
          <Link className="footerlinks" href="/headphones">
            Headphones
          </Link>
          <Link className="footerlinks" href="/speakers">
            Speakers
          </Link>
          <Link className="footerlinks" href="/earphones">
            Earphones
          </Link>
        </div>
        <div className="bottom">
          <div className="socialMediaIcons">
            <Image src={facebookIcon} alt="icon"></Image>{' '}
            <Image src={twitterIcon} alt="icon"></Image>
            <Image src={instagrainIcon} alt="icon"></Image>{' '}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
