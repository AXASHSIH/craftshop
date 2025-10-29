import React from 'react'
import Carousel from '../Components/carousel/Carousel'
import ProductInfo from '../Components/AllProducts/ProductInfo/ProductInfo'
import ProductGallery from '../Components/AllProducts/ProductGallery/ProductGallery'
import ProductDetails from '../Components/AllProducts//ProductDetails/ProductDetails'
import ProductsBreadcrumbs from '../Components/AllProducts/ProductsBreadcrumbs/ProductsBreadcrumbs'
import CustomerReviews from '../Components/AllProducts/CustomerReviews/CustomerReviews'
import RelatedProducts from '../Components/AllProducts/RelatedProducts/RelatedProducts'
import ShippingInfo from '../Components/AllProducts/ShippingInfo/ShippingInfo'
import './Products.css'

function Product() {
  return (
    <>
      <br />
      <br />
      <div className="product-page">
              <ProductsBreadcrumbs />
      <div className="product-main">
      < ProductGallery />
      < ProductInfo />
      </div>
      <ProductDetails />
      <CustomerReviews />
      <RelatedProducts />
      <ShippingInfo />
    </div>


    </>
  )
}

export default Product