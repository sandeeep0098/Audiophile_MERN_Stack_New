import React from 'react';
import './page.scss';
import Header from '@/components/layout/Header';
import CategoriesSection from '@/components/layout/CategoriesSection';
import ProductSection from '@/components/layout/ProductSection';
import AboutUs from '@/components/layout/AboutUs';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <CategoriesSection />
      <ProductSection />
      <AboutUs />
    </div>
  );
};

export default Home;
