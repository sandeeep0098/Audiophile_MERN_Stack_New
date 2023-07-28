import React from 'react';
import './productLinkPrimaryButton.scss';
import Link from 'next/link';
import { CustomButtonProps } from '@/app/types/index';

const ProductLinkPrimaryButton: React.FC<CustomButtonProps> = ({
  path,
  type,
  className,
  name,
}) => {
  const productLinkTypeClass =
    type === 'primary'
      ? 'primary'
      : type === 'dark'
      ? 'dark'
      : type === 'transparent'
      ? 'transparent'
      : 'primary';

  return (
    <Link
      href={path}
      className={`productLink ${productLinkTypeClass} ${className}`}
    >
      {name ? name : 'See Product'}
    </Link>
  );
};

export default ProductLinkPrimaryButton;
