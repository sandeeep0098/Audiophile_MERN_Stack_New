"use client"
import React from 'react';
import './productLinkPrimaryButton.scss';
import Link from 'next/link';
import { CustomButtonProps } from '@/app/types/index';

const ProductLinkPrimaryButton: React.FC<CustomButtonProps> = ({
  path,
  type,
  className,
  name,
  handleClick,

   
  
}) => {
  const productLinkTypeClass =
    type === 'primary'
      ? 'primary'
      : type === 'dark'
      ? 'dark'
      : type === 'transparent'
      ? 'transparent'
          : 'primary';
  
  const handleButtonClick = (event:any) => {
    if (handleClick) {
      handleClick(event);
    }
  };
  return (
    <Link
      href={path}
      className={`productLink ${productLinkTypeClass} ${className}`}
      onClick={handleButtonClick}
    >
      {name ? name : 'See Product'}
    </Link>
  );
};

export default ProductLinkPrimaryButton;
