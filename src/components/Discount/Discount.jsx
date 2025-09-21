import React from 'react'
import Button from '../Button/Button'
import DiscountImg from '../../assets/fresh-fruits.png'

const Discount = () => {
  return (
    <section className='bg-zinc-100 bg-no-repeat md:mt-15 md:bg-contain md:bg-right' style={{backgroundImage: `url(${DiscountImg})`}}>
        <div className='flex md:flex-row flex-col max-w-[90%] mx-auto px-8 py-10 md:bg-transparent bg-zinc-100'>
            <span className='md:text-8xl text-5xl text-orange-500 font-bold transform md:-rotate-90 h-fit md:self-center'>20%</span>
            <div className='md:max-w-[60%]'>
                <h3 className='md:text-6xl text-3xl text-zinc-800 font-bold'>First Order Discount!</h3>
                <p className='text-zinc-600 my-4'>Enjoy an exclusive first order discount on our grocery website! Shop fresh essentials and save big on your first purchase. Fast delivery and quality guaranteed.</p>

                <Button content = "Get a Discount" />
            </div>

        </div>
    </section>
  )
}

export default Discount
