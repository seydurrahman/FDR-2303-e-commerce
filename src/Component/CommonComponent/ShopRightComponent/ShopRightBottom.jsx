import React, { useContext, useEffect, useState } from 'react'
import Product from '../Product'
import prod11 from "../../../assets/Prod-11.png"
import Button from '../Button'
import { ShopRightPageNumberContext } from '../../ShopComponent/ShopRight/ShopRight.jsx'
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight} from 'react-icons/md'
import { FetcherProduct } from '../../../Redux/AllSlice/ProductSlice/ProductSlice.js'
import { useSelector, useDispatch } from 'react-redux'
import { data } from 'autoprefixer'
import { Link } from 'react-router-dom'
import Loading from '../Loading.jsx'

const ShopRightBottom = () => {
  const dispatch = useDispatch()
  const value = useContext(ShopRightPageNumberContext)
   const {perPageItem, GridLayout} =value
    const [allProducts, setallProducts]=useState([])
     const [page, setpage]=useState(1)


    useEffect(() => {
        dispatch(FetcherProduct("https://dummyjson.com/products"))
    },[])

  const {data, status} = useSelector((state)=>state.productt)

  useEffect(()=>{
    if (status.payload === "IDLE"){
      setallProducts(data.payload.products)
    }
  },[status.payload, data.payload])

    // handlePagination functionality //

    const handlePagination= (pageNumber)=>{
      if (pageNumber >0 && pageNumber <= Math.floor(allProducts.length/perPageItem)+1){
        setpage(pageNumber)
      }
    }

  return (
    <>
    <div className='mt-10'>
      {status.payload == "LOADING" ? (
          <Loading className={"w-[33%]"} perItem ={9}/>
      ): status.payload === "ERROR" ? (
        <h1 className='flex justify-center items-center h-[100vh] bg-red-200 text-white'>Error page 404</h1>
      ):(
        allProducts && (
          <div>
         <div className='flex flex-wrap justify-between gap-y-7'>
          {allProducts?.slice(page * perPageItem-perPageItem, page * perPageItem).map((productItem)=>(
              <div className={`${GridLayout ? "w-full" : "w-[32%]"}`} key={productItem.id}>
             <Link to={`/product-details/${productItem.id}`}>
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
             </Link>
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
          {[...new Array(Math.floor(allProducts.length/perPageItem)+1)].map((item,index)=>(
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
          <p>{`Products from ${(page * perPageItem-perPageItem)+1} to ${page === Math.floor(allProducts.length/perPageItem)+1? allProducts.length :page * perPageItem} of ${allProducts.length}`}</p>
         </div>
         </div>
         </div>
         </div>
         )
      )}
           
    </div>
    </>
  )
}

export default ShopRightBottom