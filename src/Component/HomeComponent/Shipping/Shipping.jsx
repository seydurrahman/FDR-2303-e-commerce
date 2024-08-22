import React from 'react'
import Flex from "../../CommonComponent/Flex"
import ShippingItem from '../../CommonComponent/ShippingItem'
import { FaTruck } from "react-icons/fa6";
import { GiReturnArrow } from "react-icons/gi";
import { GrServices } from "react-icons/gr";
import { ImInsertTemplate } from 'react-icons/im';

const Shipping = () => {
  const data = [
    {id:1, icon:<FaTruck/>, title: "Free shipping"},
    {id:2, icon:<GiReturnArrow/>, title: "Return policy in 30 days"},
    {id:3, icon:<GrServices/>, title: "Free service"},
  ]
  return (
    <>
    <div className='mt-5'>
        <div className="container">
            <Flex className={"flex-col sm:flex-row gap-y-3 justify-between items-center"}>
                {data?.map((item)=>(
                    <ShippingItem className={"flex gap-x-3 items-center sm:text-[13px] cursor-pointer"} key={item.id}> 
                    <span>{item.icon}</span>
                    <h2>{item.title}</h2>
                    </ShippingItem>
                ))}
               
            </Flex>
        </div>
    </div>
    </>
  )
}

export default Shipping