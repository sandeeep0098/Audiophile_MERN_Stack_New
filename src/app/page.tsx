import React from 'react';
import './page.scss';
import Header from '@/components/layout/Header';
import CategoriesSection from '@/components/layout/CategoriesSection';
import ProductSection from '@/components/layout/ProductSection';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <CategoriesSection />
      <ProductSection />
    </div>
  );
};

export default Home;
