import React from 'react'
import Grocery from '../../assets/grocery.png'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section>
        <div className='min-h-[80vh] md:max-w-[90%] w-[100%] mx-auto md:px-8 px-4 flex md:flex-row flex-col items-center md:pt-25 pt-30'>
            <div className='flex-1'>
                <span className='bg-orange-100 text-orange-500 text-lg px-3 py-1 rounded-full'>Export Best Quality...</span>

                <h1 className='md:text-7xl/19 text-4xl/12 font-bold mt-4'>
                    Tasty Organic <span className='text-orange-500'>Fruits</span> & <span className='text-orange-500'>Veggies</span> In Your City
                </h1>
                <p className='text-zinc-600 text-lg max-w-[90%] mt-5 mb-8'>
                    Bred for a high content of beneficial substance. Our products are all fresh and healthy.
                </p>

                <Link to='/fruits'><Button content="Shop Now"/></Link>
            </div>

            <div className='flex-1'>
                <img src={Grocery} alt="Hero Image" />
            </div>

        </div>
    </section>
  )
}

export default Hero
