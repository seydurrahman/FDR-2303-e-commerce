import React from 'react'
import {categories, shopByColor,shopByBrand,shopByPrice} from "../../../../Data/Data.js"
import ShopCategories from '../../CommonComponent/ShofLeftItem/ShopCategories'
import ShopByColor from '../../CommonComponent/ShofLeftItem/ShopByColor.jsx'

const ShopLeft = ({className}) => {
  return (
    <div className={className}>
      <ShopCategories categoriesData = {categories?categories:[]} shopLeftTitle="Shop by Category"/>
      <ShopByColor shopLeftTitle={"Shop by Color"} shopCategoryItem={shopByColor ? shopByColor: "Title missing"} 
      color={true} dropDownIs={true} dropDownExpandIs={false}/>
      <ShopByColor shopLeftTitle={"Shop by Brand"} shopCategoryItem={shopByBrand ? shopByBrand: "Title missing"} 
      color={false} dropDownIs={true} dropDownExpandIs={false}/>
      <ShopByColor shopLeftTitle={"Shop by Price"} shopCategoryItem={shopByPrice ? shopByPrice: "Title missing"} 
      color={false} dropDownIs={false} dropDownExpandIs={true}/>
    </div>
  )
}

export default ShopLeft