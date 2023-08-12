'use client';
import React from 'react';
import './navbar.scss';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/assets/shared/desktop/logo.svg';
import { useState } from 'react';
import Cart from '../cart/Cart';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useAppDispatch } from '@/hooks/hooks';
import { cartActions } from '@/store/cart-slice';
import { useAppSelector } from '@/hooks/hooks';

const Navbar = () => {
  const [cartisopen, setCartIsOpen] = useState(false);

  const dispatch = useAppDispatch();

  const cartQuantity = useAppSelector((state) => state.cart.totalQuantity);

  const showCartHandler = () => {
    setCartIsOpen(!cartisopen);
  };

  return (
    <div className="navbar">
      <nav className="wrapper">
        <div className="left">
          <Link href="/">
            <Image
              src={logo}
              width={143}
              height={25}
              alt="logo"
              className="logo"
            ></Image>
          </Link>
        </div>
        <div className="center">
          <Link className="navbarlinks" href="/">
            Home
          </Link>
          <Link className="navbarlinks" href="/headphones">
            Headphones
          </Link>
          <Link className="navbarlinks" href="/speakers">
            Speakers
          </Link>
          <Link className="navbarlinks" href="/earphones">
            Earphones
          </Link>
        </div>

        <div className="righticon">
          <ShoppingCartOutlinedIcon
            className="righticonimg"
            onClick={showCartHandler}
          />{' '}
          <span>{cartQuantity}</span>
        </div>

        {cartisopen && (
          <>
            <div className="backdrop" onClick={showCartHandler}></div>
            <Cart showCartHandler={showCartHandler} />
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
