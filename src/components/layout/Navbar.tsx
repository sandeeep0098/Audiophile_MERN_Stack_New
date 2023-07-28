'use client';
import React from 'react';
import './navbar.scss';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../assets/shared/desktop/logo.svg';
import { useState } from 'react';
import Cart from '../cart/Cart';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Navbar = () => {
  const [cartisopen, setCartIsOpen] = useState(false);
  const showCartHandler = () => {
    setCartIsOpen(!cartisopen);
  };

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
          <Link className="navbarlinks" href="/headphones">
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
          <ShoppingCartOutlinedIcon
            className="righticonimg"
            onClick={showCartHandler}
          />
        </div>
        {cartisopen && (
          <>
            <div className="backdrop" onClick={showCartHandler}></div>
            <Cart />
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
