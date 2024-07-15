import React, { useState } from 'react'
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import Flex from "../../CommonComponent/Flex"
import Search from '../../CommonComponent/Search';
import { FaUser } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { IoCartOutline } from "react-icons/io5";


const MenuBar = () => {
    const [categories, setcategories]=useState(false)

    // handlBar functionality //
    const handlBar=()=>{
        setcategories(!categories);
    }
  return (
    <>
    <div className=' bg-secondary_bg_color py-5 px-4 sm:px-0'>
        <div className="container">
            <Flex className={"gap-x-3 justify-between items-center"}>
                <Flex className={"gap-x-2"}>
                <HiMiniBars3BottomLeft className=' text-2xl cursor-pointer' onClick={handlBar}/>
                <div>
                    <ul className={`absolute z-10 bg-black w-[100vw] top-[160px] transition-all text-main_bg_color py-5 divide-y divide-solid ${categories? "left-0":"left-[-120%]"}`}>
                        <li className='p-5'>Accesories</li>
                        <li className='p-5'>Furniture</li>
                        <li className='p-5'>Home</li>
                        <li className='p-5'>Home</li>
                        <li className='p-5'>Home</li>
                    </ul>
                </div>
                <h2 className='hidden md:block menuItem cursor-pointer text-main_font_color'>Shop by Category</h2>
                </Flex>
                <Search placeHolder="Search product"/>

                <Flex className={"gap-x-2 sm:gap-x-5"}>
                <Flex className={"gap-x-1 sm:gap-x-2"}>
                    <div>
                        <FaUser/>
                    </div>
                    <div>
                        <TiArrowSortedDown/>
                    </div>
                </Flex>
                <div>
                    <IoCartOutline/>
                </div>
                </Flex>
            </Flex>
        </div>
    </div>
    
    
    
    </>
  )
}

export default MenuBar