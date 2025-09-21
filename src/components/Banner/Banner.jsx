import React from 'react'

const Banner = ({title, bgImage}) => {
  return (
    <div className='h-[45vh] mt-15 flex justify-center items-center bg-center bg-cover relative' 
    style={{backgroundImage: `url(${bgImage})`}}>
      <h2 className=' text-4xl text-zinc-800 bg-white p-4 rounded-xl font-bold z-10'>{title}</h2>
      <div className='bg-black/50 absolute inset-0'></div>
    </div>
  )
}

export default Banner
