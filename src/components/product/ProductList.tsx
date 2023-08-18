'use client';
import React, { FC } from 'react';
import './productlist.scss';
import Image from 'next/image';
import ProductLinkPrimaryButton from '../UI/productLinkPrimaryButton';
import { useParams } from 'next/navigation';
import { ProductProps } from '@/app/types/index';

const ProductList: React.FC<{ products: ProductProps[] }> = ({ products }) => {
  const params = useParams();

  return (
    <div className="productlist">
      <div className="wrapper">
        <ul>
          {products
            .sort((a, b) => (a.new === b.new ? 0 : a.new ? -1 : 1))
            .map(
              (product) =>
                product.category === params.categories && (
                  <li key={product._id}>
                    <div className="left">
                      <Image
                        src={product.image.desktop}
                        alt="img"
                        className="productimg"
                        width={540}
                        height={560}
                      />
                    </div>
                    <div className="right">
                      <div className="right-container">
                        {product.new && (
                          <h6 className="newproduct">New Product</h6>
                        )}
                        <h2>{product.name}</h2>

                        <p>{product.description}</p>
                        <ProductLinkPrimaryButton
                          path={`${product.category}/${product.slug}`}
                          type="primary"
                        />
                      </div>
                    </div>
                  </li>
                )
            )}
        </ul>
      </div>
    </div>
  );
};

export default ProductList;

// ('use client');
// import React from 'react';
// import './Checkout.scss';
// import Sumarry from '@/components/cart/Sumarry';
// import Link from 'next/link';

// const Checkout = () => {
//   // const router = useRouter();
//   const handleGoBack = () => {
//     window.history.back();
//   };

//   return (
//     <>
//       <div className="checkout">
//         <div className="back-link">
//           <Link href="/" className="link" onClick={handleGoBack}>
//             Go Back
//           </Link>
//         </div>

//         <div className="wrapper">
//           <form action="" className="main-form">
//             <h2>Checkout</h2>
//             <div className="main-form-wrapper">
//               <div className="input_billing_details">
//                 <h6>Billing details</h6>
//                 <div className="wrapper">
//                   <div className="fieldinput">
//                     <label htmlFor="name" className="name-label">
//                       Name
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Your Name here"
//                       className="field-input"
//                     />
//                   </div>

//                   <div className="fieldinput">
//                     <label htmlFor="name" className="name-label">
//                       Email Address
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Your Email Address"
//                       className="field-input"
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="input_shipping_info"></div>
//               <div className="input_payment_details"></div>
//             </div>
//           </form>

//           <Sumarry />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Checkout;
