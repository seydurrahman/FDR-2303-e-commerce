import React, { createContext, useEffect, useState } from 'react'
import ProductRightTop from '../../CommonComponent/ShopRightComponent/ProductRightTop';
import ShopRightBottom from '../../CommonComponent/ShopRightComponent/ShopRightBottom';

export const ShopRightPageNumberContext = createContext()

const ShopRight = ({className}) => {
  const [perPageItem, setperPageItem]=useState(9)
  const [GridLayout, setGridLayout]=useState(false)
    
    // handlePageOption function //
    const handlePageOption=(e)=>{
        setperPageItem(e.target.value);
    }

     // handleChangelayout //
     const handleChangelayout =()=>{
      setGridLayout(!GridLayout)
    }

const shopRightBottomItem={
  perPageItem, GridLayout,
}
  
  return <div className={className}>
      <ProductRightTop 
      onpageItem={handlePageOption} 
      onChangelayout = {handleChangelayout}
      changeIcon = {GridLayout}/>
    <ShopRightPageNumberContext.Provider value={shopRightBottomItem}>
      <ShopRightBottom/>
    </ShopRightPageNumberContext.Provider>
  </div>
};

export default ShopRight