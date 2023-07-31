import React from 'react';
import './page.scss';
import CategoriesSection from '@/components/layout/CategoriesSection';
import AboutUs from '@/components/layout/AboutUs';
import ProductList from '@/components/product/ProductList';
import { ParamProps } from '@/app/types/index';

export async function getProducts() {
  try {
    const res = await fetch('http://localhost:3000/api/products', {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error('Failed to fetch products from the API.');
    }

    const products = await res.json();
    return products;
  } catch (error: any) {
    console.error('Error fetching products:', error.message);
    return <div>An unexpected error occurred. Please try again later.</div>;
  }
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