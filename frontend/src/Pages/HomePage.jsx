import React from 'react'
import Hero from '../Components/Hero/Hero'
import FeatureHighlights from '../Components/AllProducts/FeturesHighlight/FeturesHighlight' 
import TopSellingProducts from '../Components/AllProducts/TopSellingProducts/TopSellingProducts'

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeatureHighlights />
      <TopSellingProducts />
    </>
  )
}

export default HomePage