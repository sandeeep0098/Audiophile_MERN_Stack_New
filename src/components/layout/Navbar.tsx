import React from 'react';
import './navbar.scss';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../assets/shared/desktop/logo.svg';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="wrapper">
        <div className="lefticon">
          <Image src={logo} width={143} height={25} alt="logo"></Image>
        </div>
        <div className="center">
          <Link className="navbarlinks" href="/">
            Home
          </Link>
          <Link className="navbarlinks" href="/">
            Headphones
          </Link>
          <Link className="navbarlinks" href="/">
            Speakers
          </Link>
          <Link className="navbarlinks" href="/">
            Earphone
          </Link>
        </div>

        <div className="righticon">
          {/* <Image
            src={cart}
            width={26}
            height={20}
            alt="cart-logo"
            className="righticonimg"
          /> */}
          <ShoppingCartOutlinedIcon className="righticonimg" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
