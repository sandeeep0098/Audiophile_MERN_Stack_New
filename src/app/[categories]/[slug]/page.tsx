import AboutUs from '@/components/layout/AboutUs';
import CategoriesSection from '@/components/layout/CategoriesSection';
import ProductListItem from '@/components/product/ProductListItem';
import React from 'react';

export async function getStaticParams() {
  const res = await fetch(
    'https://silly-pithivier-838e11.netlify.app/api/products',
    {
      next: { revalidate: 60 },
    }
  );
  const products = await res.json();
  return products;
}

export default async function ProductItemPage() {
  const products = await getStaticParams();
  const productsArray = products.products;
  // console.log(productsArray, 'products array');
  return (
    <div>
      <ProductListItem products={productsArray} />
      <CategoriesSection />
      <AboutUs />
    </div>
  );
}
