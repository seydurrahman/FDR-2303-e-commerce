import React, { useEffect } from 'react'
import axios from 'axios'

const ShopRight = ({className}) => {
  // useEffect(()=>{
  //   const dataFetcher = async()=>{
  //     const data = await axios.get("https://dummyjson.com/products");
  //   };
  //   dataFetcher();
  // },[]);
  return <div className={className}>ShopRight</div>
};

export default ShopRight