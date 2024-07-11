import React, { useState } from 'react'
import Product from '../../CommonComponent/Product'
import Button from '../../CommonComponent/Button'
import { ProductData } from '../../../../Data/Data'
import Flex from '../../CommonComponent/Flex'
const NewArrival = () => {
  const [Allproduct, setAllproduct]=useState(ProductData)
  return (
    <>
    <div className=' py-[128px]'>
      <div className="container">
      <h1 className=' font-bold font-DMsans text-main_font_color text-[29px]'>New Arrival</h1>
        <div className=' flex justify-between'> 
        {Allproduct?.map((item)=>(
         <div key={item.id}>
                <Product colorVariant={item.color===true?true:false} badge={item.badge==true?<Button title={"10%"} className={"py-2 px-8 bg-black text-white"}/>:null}/>
        </div>
      ))}
        </div>      
      </div>
    </div>
    </>
  )
}

export default NewArrival