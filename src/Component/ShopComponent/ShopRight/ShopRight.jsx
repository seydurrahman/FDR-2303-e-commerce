import React, { createContext, useEffect, useState } from 'react'
import ProductRightTop from '../../CommonComponent/ShopRightComponent/ProductRightTop';
import ShopRightBottom from '../../CommonComponent/ShopRightComponent/ShopRightBottom';

export const ShopRightPageNumberContext = createContext()

const ShopRight = ({className}) => {
  const [perPageItem, setperPageItem]=useState(9)
    
    // handlePageOption function //
    const handlePageOption=(e)=>{
        setperPageItem(e.target.value);
    }
  
  return <div className={className}>
      <ProductRightTop onpageItem={handlePageOption}/>
    <ShopRightPageNumberContext.Provider value={perPageItem}>
      <ShopRightBottom/>
    </ShopRightPageNumberContext.Provider>
  </div>
};

export default ShopRight