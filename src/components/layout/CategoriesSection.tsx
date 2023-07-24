import React from 'react';
import Image from 'next/image';
import './categoriesSection.scss';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import categoryPreviewHeadphones from '../../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview-headphones.png';
import categoryPreviewSpeakers from '../../assets/product-zx9-speaker/desktop/image-category-page-preview.png';
import categoryPreviewEarphones from '../../assets/product-yx1-earphones/desktop/image-category-page-preview-earphones.png';
import Link from 'next/link';
const CategoriesSection = () => {
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
            <Link className="link" href="/">
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
            <h6>Headphones</h6>
            <Link className="link" href="/">
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
            <h6>Headphones</h6>
            <Link className="link" href="/">
              Shop <ChevronRightIcon className="icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
