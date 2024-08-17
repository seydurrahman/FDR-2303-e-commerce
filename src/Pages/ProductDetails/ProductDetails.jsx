import React, { useEffect, useState } from 'react'
import BreadCrumb from '../../Component/CommonComponent/BreadCrumb/BreadCrumb'
import { useDispatch, useSelector } from 'react-redux'
import { FetcherProduct } from '../../Redux/AllSlice/ProductSlice/ProductSlice'
import ProductDetailsTop from '../../Component/ProductDetailsComponent/ProductDetailsTop'
import Loading from '../../Component/CommonComponent/Loading'
import RatingStar from '../../Component/ProductDetailsComponent/RatingStar'
import ProductInfo from '../../Component/ProductDetailsComponent/ProductInfo'
import { addtoCart } from '../../Redux/AllSlice/AddtoCart/AddtoCartSlice'
import { useParams, useNavigate } from 'react-router-dom'

const ProductDetails = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [EachProduct, setEachProduct]= useState({})
  const {productId} = useParams()

  useEffect(() => {
    dispatch(FetcherProduct(`https://dummyjson.com/products/${productId}`))
},[])

const {data, status} = useSelector((state)=>state.productt)

useEffect(()=>{
  if (status.payload === "IDLE"){
    setEachProduct(data.payload)
  }
},[status.payload, data.payload])

// handleCart
const handleCart=()=>{
  dispatch(addtoCart(EachProduct))
  navigate ("/cart")
}
  return (
    <div className=' py-16'>
      <div className='container'>
      <div>
        <BreadCrumb/>
      </div>
      {status.payload === "LOADING" ? 
      (
        <Loading className={"w-[50%]"} perItem={4}/>
      ) : status.payload === "ERROR" ? "Error" : (<ProductDetailsTop EachProductImage={EachProduct}/>) }
      <div>
        <h1 className='font-DMsans text-main_font_color font-bold text-[39px]'>
          {EachProduct.title ?EachProduct.title: "Products"}
        </h1>
        <RatingStar rating={EachProduct.rating}/>
        <div className='flex items-center gap-x-5 mt-5'>
            <span className='font-DMsans text-[16px] font-normal text-secondary_font_color line-through'>${EachProduct.price}</span>
            <span className='font-DMsans text-[26px] font-bold text-main_font_color]'>${Math.round(EachProduct.price-(EachProduct.discountPercentage/100 * EachProduct.price))}
            </span>
        </div>
      </div>
      <div>
        <ProductInfo productStock={EachProduct.stock} onAddtoCart={handleCart}/>
      </div>

    </div>
    </div>
  )
}

export default ProductDetails