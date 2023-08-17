'use client';
import React from 'react';
import Image from 'next/image';
import './categoriessection.scss';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import categoryPreviewHeadphones from '../../../public/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview-headphones.png';
import categoryPreviewSpeakers from '../../../public/assets/product-zx9-speaker/desktop/image-category-page-preview.png';
import categoryPreviewEarphones from '../../../public/assets/product-yx1-earphones/desktop/image-category-page-preview-earphones.png';
import Link from 'next/link';

import { useParams } from 'next/navigation';
import { ProductProps } from '@/app/types';
import { ImportExport } from '@mui/icons-material';

const CategoriesSection: React.FC<{ products: ProductProps[] }> = ({
  products,
}) => {
  const params = useParams();
  // console.log(
  //   products.map(
  //     (product) => product.category === params.categories && product.name
  //   )

  // );
  // const product = products.find((product) => product.slug === params.slug);
  return (
    <div className="categoriesSection">
      <div className="wrapper">
        <div className="imagesection">
          <Image
            src={categoryPreviewHeadphones}
            className="categoriesImages"
            alt="productImages"
          ></Image>
          <div className="links">
            <h6>Headphones</h6>
            <Link className="link" href="/headphones">
              Shop <ChevronRightIcon className="icon" />{' '}
            </Link>
          </div>
        </div>
        <div className="imagesection">
          <Image
            src={categoryPreviewSpeakers}
            className="categoriesImages"
            alt="productImages"
          ></Image>
          <div className="links">
            <h6>Speakers</h6>
            <Link className="link" href="/speakers">
              Shop <ChevronRightIcon className="icon" />{' '}
            </Link>
          </div>
        </div>
        <div className="imagesection">
          <Image
            src={categoryPreviewEarphones}
            className="categoriesImages"
            alt="productImages"
          ></Image>
          <div className="links">
            <h6>Earphones</h6>
            <Link className="link" href="/earphones">
              Shop <ChevronRightIcon className="icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
