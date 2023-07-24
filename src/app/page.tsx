import React from 'react';
import './page.scss';
import Header from '@/components/layout/Header';
import CategoriesSection from '@/components/layout/CategoriesSection';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <CategoriesSection />
    </div>
  );
};

export default Home;
