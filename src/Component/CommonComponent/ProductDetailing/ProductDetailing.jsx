import React, { useState } from 'react'
import { TiMinus, TiPlus } from "react-icons/ti";

const ProductDetailing = ({title}) => {
  const [dropDown, setdropDown]=useState(false)
  const handleDropDown =()=>{
    setdropDown(!dropDown)
  }
  return (
    <div>
        <div>
            <div className='flex justify-between cursor-pointer' onClick={handleDropDown}>          
                <h1>{title ? title : "Heading missing"}</h1>
                <span>{dropDown ? <TiMinus/> :<TiPlus/> }</span>
            </div>
            {dropDown && (<div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam esse accusantium molestiae reprehenderit, deleniti cumque, doloremque harum, fugit aperiam laborum rerum deserunt ab quae quibusdam? Minus eligendi voluptates sed porro!</p>
            </div>)}
               
        </div>
    </div>
  )
}

export default ProductDetailing