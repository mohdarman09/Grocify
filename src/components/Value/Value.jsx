import React from 'react'
import Heading from "../Heading/Heading"
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from 'react-icons/fa'
import Baskate from "../../assets/basket-full-vegetables.png"

const Value = () => {

    const leftValues = Values.slice(0,2).map(item=>{
        return (
            <div key={item.id} className='flex items-center md:flex-row-reverse gap-2'>
                <div>
                    <span className='flex items-center justify-center bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full text-white text-3xl'>{item.icon}</span>
                </div>

                <div className='md:text-right'>
                    <h3 className='text-zinc-800 md:text-3xl text-xl font-bold'>{item.title}</h3>
                    <p className='text-zinc-600 mt-1'>{item.para}</p>
                </div>
            </div>
        )
    })


    const rightValues = Values.slice(2,4).map(item=>{
        return (
            <div key={item.id} className='flex items-center gap-2'>
                <div>
                    <span className='flex items-center justify-center bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full text-white text-3xl'>{item.icon}</span>
                </div>

                <div>
                    <h3 className='text-zinc-800 md:text-3xl text-xl font-bold'>{item.title}</h3>
                    <p className='text-zinc-600 mt-1'>{item.para}</p>
                </div>
            </div>
        )
    })

  return (

    <section>
        <div className='max-w-[90%] mx-auto px-4'>
            <Heading highlight="Our" heading="Values" />

            <div className='flex md:flex-row flex-col gap-10 md:mt-15 mt-10 pb-20'>
                {/* Left Values  */}
                <div className='md:min-h-70 flex flex-col md:justify-between gap-10'>{leftValues}</div>
                
                <div className='md:flex md:w-1/2 hidden'>
                    <img src={Baskate} />
                </div>

                {/* Right Values  */}
                <div className='md:min-h-70 flex flex-col md:justify-between gap-10'>
                    {rightValues}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Value


const Values = [
    {
        id: 1,
        title: "Trust",
        para: "It is a long established fact that reader will be distracted by the readable.",
        icon: <FaHeart/>
    },
    {
        id: 2,
        title: "Always Fresh",
        para: "It is a long established fact that reader will be distracted by the readable.",
        icon: <FaLeaf/>
    },
    {
        id: 3,
        title: "Food Safety",
        para: "It is a long established fact that reader will be distracted by the readable.",
        icon: <FaShieldAlt/>
    },
    {
        id: 4,
        title: "100% Organic",
        para: "It is a long established fact that reader will be distracted by the readable.",
        icon: <FaSeedling/>
    },
]
