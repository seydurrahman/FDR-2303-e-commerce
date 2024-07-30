import React, { useState } from 'react'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa6'
import {SortBy} from "../../../../Data/Data.js"
import Flex from '../Flex.jsx'
import { BiSolidUpArrow, BiSolidDownArrow } from 'react-icons/bi'

const ProductRightTop = ({onpageItem, onChangelayout, changeIcon}) => {
    const [sortProduct, setsortProduct]=useState(SortBy)
    

  return (
    
    <Flex className={"items-center justify-between"}>
        <div onClick={onChangelayout}>
            {changeIcon ? (<FaBars/>):(<BsFillGrid3X3GapFill className='text-2xl cursor-pointer'/>)}
            
        </div>
        <div className='flex gap-x-7'>
        <div>
        <Flex className='items-center'>
            <h2 className='text-secondary_font_color font-DMsans text-base font-normal mr-4'>Sort by:</h2>
            <select name="sort" id="sort" className='min-w-[240px] py-2 border-2 border-[#f0f0f0] cursor-pointer'>
                <option value="Featured" className='text-secondary_font_color font-DMsans font-normal text-base'>Featured <BiSolidUpArrow/></option>
                {sortProduct?.map((sortItem)=>(
                    <option value={sortItem.shortItem} key={sortItem.shortItem} className='text-secondary_font_color font-DMsans font-normal text-base py-3'>{sortItem.shortItem} </option>
                )) }
            </select>
        </Flex>
        </div>
        <div>
        <Flex className='items-center'>
            <h2 className='text-secondary_font_color font-DMsans text-base font-normal mr-4'>Show:</h2>
            <select name="sort" id="sort" className='min-w-[140px] py-2 border-2 border-[#f0f0f0] cursor-pointer' onChange={onpageItem}>
                <option className='text-secondary_font_color font-DMsans font-normal text-base'>Select Item</option>
                <option value="9" className='text-secondary_font_color font-DMsans font-normal text-base'>9</option>
                <option value="18" className='text-secondary_font_color font-DMsans font-normal text-base'>18</option>
                <option value="27" className='text-secondary_font_color font-DMsans font-normal text-base'>27</option>
            </select>
        </Flex>
        </div>
        </div>
    </Flex>
    
  )
}

export default ProductRightTop