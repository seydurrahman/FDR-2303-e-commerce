import React, { useContext, useEffect, useState } from 'react'
import Product from '../Product'
import prod11 from "../../../assets/Prod-11.png"
import Button from '../Button'
import axios from 'axios'
import { ShopRightPageNumberContext } from '../../ShopComponent/ShopRight/ShopRight.jsx'
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight} from 'react-icons/md'
import { setProducts } from '../../../Redux/AllSlice/ProductSlice/ProductSlice.js'
import { useSelector, useDispatch } from 'react-redux'

const ShopRightBottom = () => {
  const dispatch = useDispatch()
  const value = useContext(ShopRightPageNumberContext)
    const [allProducts, setallProducts]=useState([])
     const [page, setpage]=useState(1)


    useEffect(()=>{
        const ProductDataFetcher= async () => {
            const products = await axios.get("https://dummyjson.com/products")
            setallProducts(products.data.products);

            // set data on Redux //
          dispatch(setProducts(products.data.products))
        }
        ProductDataFetcher()
    },[])

    // handlePagination functionality //

    const handlePagination= (pageNumber)=>{
      if (pageNumber >0 && pageNumber <= Math.floor(allProducts.length/value)+1){
        setpage(pageNumber)
      }
     
    }


  return (
    <>
    <div className='mt-10'>

           <div className='flex flex-wrap justify-between gap-y-7'>
            {allProducts?.slice(page * value-value, page * value).map((productItem)=>(
                <div className={"w-[32%]"} key={productItem.id}>
                <Product 
                imga={productItem.thumbnail} 
                colorVariant={"White"}
                productName={productItem.title}
                productPrice={productItem.price}
        
                badge={
                <Button 
                title={productItem.discountPercentage? `$${productItem.discountPercentage}`:productItem.stock===0?"Stock out":"New"}
                className={"py-2 px-8 bg-black text-white"}
                />
                }
                />
                </div>
            )) }          
           </div>
           <div className='mt-10'>
           <div className='flex justify-between items-center'>
           <div className='flex gap-x-2'>
              <p className={`w-[36px] h-[36px] bg-red-200 text-main_bg_color flex justify-center items-center cursor-pointer rounded-md`}
              onClick={()=>handlePagination(page-1)}>
            <MdKeyboardDoubleArrowLeft/>
              </p>
            {[...new Array(Math.floor(allProducts.length/value)+1)].map((item,index)=>(
              <div>
                <p className={`w-[36px] h-[36px] bg-black text-main_bg_color flex justify-center items-center cursor-pointer rounded-md ${index+1===page && "bg-blue-300 text-main_font_color rounded-md"}`} onClick={()=>handlePagination(index+1)}>{index+1}</p>
              </div>
            ))}
            <p className={`w-[36px] h-[36px] bg-red-200 text-main_bg_color flex justify-center items-center cursor-pointer rounded-md`}
            onClick={()=>(handlePagination(page+1))}>
            <MdKeyboardDoubleArrowRight/>
              </p>
           </div>
           <div>
            <p>{`Products from ${(page * value-value)+1} to ${page === Math.floor(allProducts.length/value)+1? allProducts.length :page * value} of ${allProducts.length}`}</p>
           </div>
           </div>
           </div>
    </div>
    </>
  )
}

export default ShopRightBottom