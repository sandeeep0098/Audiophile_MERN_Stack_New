import React from 'react';
import './page.scss';
import CategoriesSection from '@/components/layout/CategoriesSection';
import AboutUs from '@/components/layout/AboutUs';
import ProductList from '@/components/product/ProductList';
import { ParamProps } from '@/app/types/index';

export async function getProducts() {
  const res = await fetch('http://localhost:3000/api/products', {
    next: { revalidate: 60 },
  });
  const products = await res.json();
  return products;
}

export default async function ({ params }: ParamProps) {
  const products = await getProducts();
  const productsArray = products.products;

  return (
    <div>
      <div className="heading-container">
        <h2>{params.categories}</h2>
      </div>
      <ProductList products={productsArray} />
      <CategoriesSection />
      <AboutUs />
    </div>
  );
}
