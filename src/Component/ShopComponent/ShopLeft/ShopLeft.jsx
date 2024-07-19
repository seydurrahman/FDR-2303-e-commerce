import React from 'react'
import ShopCategories from '../../CommonComponent/ShofLeftItem/ShopCategories'
import {categories} from "../../../../Data/Data.js"

const ShopLeft = ({className}) => {
  return (
    <div className={className}>
      <ShopCategories categoriesData = {categories?categories:[]} shopLeftTitle="Shop by Category"/>
    </div>
  )
}

export default ShopLeft