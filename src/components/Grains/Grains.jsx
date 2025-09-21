import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgGrains from '../../assets/grains-banner.webp'

const Grains = () => {
  return (
    <div>
      <CategoryPage title="Dry Fruits & Grains" bgImage={BgGrains} categories={['Grains', 'Dry Fruits']}/>
    </div>
  )
}

export default Grains
