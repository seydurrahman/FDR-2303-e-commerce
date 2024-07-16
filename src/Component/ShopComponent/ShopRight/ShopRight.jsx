import React, { useEffect } from 'react'
import axios from 'axios'

const ShopRight = ({className}) => {
  useEffect(()=>{
    const dataFetcher = async()=>{
      const data = await axios.get("https://dummyjson.com/products");
      console.log(data);
    };
    dataFetcher();
  },[]);
  return <div className={className}>ShopRight</div>
};

export default ShopRight