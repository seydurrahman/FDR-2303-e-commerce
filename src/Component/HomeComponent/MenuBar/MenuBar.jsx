import React from 'react'
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import Flex from "../../CommonComponent/Flex"
import Search from '../../CommonComponent/Search';
import { FaUser } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { IoCartOutline } from "react-icons/io5";


const MenuBar = () => {
  return (
    <>
    <div className=' bg-secondary_bg_color py-6'>
        <div className="container">
            <Flex className={"gap-x-3 justify-between items-center"}>
                <Flex className={"gap-x-2"}>
                <HiMiniBars3BottomLeft className=' text-2xl'/>
                <h2 className=' menuItem cursor-pointer text-main_font_color'>Shop by Category</h2>
                </Flex>
                <Search placeHolder="Search product"/>

                <Flex className={"gap-x-5"}>
                <Flex className={"gap-x-2"}>
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