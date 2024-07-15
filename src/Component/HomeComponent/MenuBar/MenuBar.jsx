import React, { useState } from 'react'
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import Flex from "../../CommonComponent/Flex"
import Search from '../../CommonComponent/Search';
import { FaUser } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import cartItem from "../../../assets/Prod-12.png"


const MenuBar = () => {
    const [categories, setcategories]=useState(false)
    const [showAccount, setshowAccount]=useState(false)
    const [cart, setcart]=useState(false)


    // handlBar functionality //
    const handlBar=()=>{
        setcategories(!categories);
    }

    // handleAccount functionality
    const handlAccount=()=>{
        setshowAccount(!showAccount)
    }

    // handleCart1 functionality //

    const handleCart1=()=>{
        setcart(!cart)
    }
    
  return (
    <>
    <div className=' bg-secondary_bg_color py-5 px-4 sm:px-0'>
        <div className="container">
            <Flex className={"gap-x-3 justify-between items-center"}>
                <Flex className={"gap-x-2"}>
                    <div onClick={handlBar}>
                        <HiMiniBars3BottomLeft className={`text-2xl cursor-pointer ${categories && "text-red-400"}`} />
                    </div>
                <div>
                    <ul className={`absolute z-10 bg-black w-[100vw] top-[160px] transition-all text-main_bg_color py-5 divide-y divide-solid ${categories? "left-0":"left-[-120%]"}`}>
                        <li className='p-5'>
                            <Link to={"/"}>Accesories</Link>
                        </li>
                        <li className='p-5'>
                            <Link to={"/"}>Furniture</Link> 
                        </li>
                        <li className='p-5'>
                            <Link to={"/"}>Home</Link> 
                        </li>
                        <li className='p-5'>
                            <Link to={"/abc"}>Home</Link> 
                        </li>
                        <li className='p-5'>
                            <Link to={"/"}>Home</Link>
                        </li>
                    </ul>
                </div>
                <h2 className='hidden md:block menuItem cursor-pointer text-main_font_color'>Shop by Category</h2>
                </Flex>
                <Search placeHolder="Search product"/>

                <Flex className={"gap-x-2 sm:gap-x-5"}>
                <div onClick={handlAccount}>
                <Flex className={"gap-x-1 sm:gap-x-2 cursor-pointer items-center"}>
                    <div>
                        <FaUser className={`${showAccount?"text-green-300":null}`}/>
                    </div>
                    <div>
                        {showAccount ? <FaChevronUp/> :<FaChevronDown/>}
                        
                    </div>
                </Flex>
                {showAccount && (<div>
                    <ul className='w-full sm:w-[200px] left-0 top-[185px] z-10 text-center  bg-gray-700 absolute text-white py-5 divide-y divide-solid'>
                        <li className='py-4'>
                            <a href="#">My Account</a>
                        </li>
                        <li className='PY-4'>
                            <a href="#">Log Out</a>
                        </li>
                    </ul>
                </div>) 
                }
                </div>
               
                <div className='cursor-pointer' onClick={handleCart1}>
                    <IoCartOutline/>
                </div>
                <div className=' bg-black text-white absolute top-[100px] left-0 w-full sm:w-fit'>
                    <div className='w-[80px] h-[80px] object-cover'>
                        <img src={cartItem} alt={cartItem} />
                    </div>
                    <div>
                        <h3>Black Smart Watch</h3>
                        <span>$44.oo</span>
                    </div>
                </div>
                </Flex>
            </Flex>
        </div>
    </div>
    
    
    
    </>
  )
}

export default MenuBar