import React from 'react';
import './productLinkPrimaryButton.scss';
import Link from 'next/link';

interface Props {
  path: string;
  type: string;
  className?: string;
}

const ProductLinkPrimaryButton: React.FC<Props> = ({
  path,
  type,
  className,
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
      See Product
    </Link>
  );
};

export default ProductLinkPrimaryButton;
