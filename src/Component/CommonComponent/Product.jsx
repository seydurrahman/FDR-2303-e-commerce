import React from 'react'
import product1 from "../../assets//Prod1.png"
import Flex from './Flex'
import { FaHeart } from "react-icons/fa6";
import { IoIosGitCompare } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { ProductData } from '../../../Data/Data';

const Product = ({colorVariant,badge,imga,productName,productPrice}) => {
  return (
    <div className='sm:px-10 w-full'>
       <div className=' pb-6 relative overflow-hidden group cursor-pointer'>
        <div className=' absolute top-4 left-4 rounded-sm'>
             {badge}
        </div>
        
       <picture>
            <img src={imga} alt={imga} className='w-full h-full object-cover' />
        </picture>
        <div className=" absolute bg-purple-100 w-full -bottom-[40%] left-0 transition-all group-hover:bottom-6">
            <div className=' flex justify-end flex-col items-end p-6'>
            <div>
            <Flex className={"gap-x-5 items-center"}> 
            <h5>Add to wish list</h5>
            <span><FaHeart/></span>
            </Flex>
            </div>
            <div>
            <Flex className={"gap-x-2 items-center"}>
            <h5>Compare</h5>
            <span><IoIosGitCompare/></span>
            </Flex>
            </div>
            <div>
            <Flex className={"gap-x-2 items-center"}>
            <h5>Add to cart</h5>
            <span><IoCart/></span>
            </Flex>
            </div>
            </div>
        </div>
       </div>
       <Flex className={"justify-between"}>
        <h1>{productName ? productName:"Basic crew neck tee"}</h1>
        <p>{productPrice ? `$${productPrice}`:"$44.00"}</p>
       </Flex>
       {colorVariant && <span>Black</span>}
    </div>
  )
}

export default Product