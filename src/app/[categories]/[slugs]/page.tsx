import AboutUs from '@/components/layout/AboutUs'
import CategoriesSection from '@/components/layout/CategoriesSection'
import ProductListItem from '@/components/product/ProductListItem'
import React from 'react'


const IndividualItem = () => {
  return (
      <>
          <ProductListItem />
          <CategoriesSection />
      <AboutUs />
      </>
  )
}

export default IndividualItem