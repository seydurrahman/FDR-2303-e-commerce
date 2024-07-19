import React from 'react'
import {categories, shopByColor} from "../../../../Data/Data.js"
import ShopCategories from '../../CommonComponent/ShofLeftItem/ShopCategories'
import ShopByColor from '../../CommonComponent/ShofLeftItem/ShopByColor.jsx'

const ShopLeft = ({className}) => {
  return (
    <div className={className}>
      <ShopCategories categoriesData = {categories?categories:[]} shopLeftTitle="Shop by Category"/>
      <ShopByColor shopLeftTitle={"Shop by Color"} shopCategoryItem={shopByColor ? shopByColor: "Title missing"}/>
    </div>
  )
}

export default ShopLeft