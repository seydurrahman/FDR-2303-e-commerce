import React from 'react'
import Flex from "../../CommonComponent/Flex"
import ShippingItem from '../../CommonComponent/ShippingItem'
import { FaTruck } from "react-icons/fa6";

const Shipping = () => {
  return (
    <>
    <div className='mt-5'>
        <div className="container">
            <Flex className={"justify-between items-center"}>
                {[...Array(3)].map((_, index)=>(
                    <ShippingItem className={"flex gap-x-3 items-center"} key={index}> 
                    <span><FaTruck/></span>
                    <h2>Two years warranty</h2>
                    </ShippingItem>
                ))}
               
            </Flex>
        </div>
    </div>
    </>
  )
}

export default Shipping