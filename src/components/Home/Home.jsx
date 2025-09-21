import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Category from '../Category/Category'
import Value from '../Value/Value'
import Products from '../Prodeucts/Products'
import Discount from '../Discount/Discount'
import Process from '../Process/Process'
import Testimonials from '../Testimonials/Testimonials'

const Home = () => {
  return (
    <div>
      <Hero />
      <Category />
      <Discount />
      <Products />
    </div>
  )
}

export default Home
