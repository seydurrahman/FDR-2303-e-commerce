import React, { useState } from 'react'
import Logo from "../../../assets/Logo.png"
import Flex from '../../CommonComponent/Flex'
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
    const [isShow, setisShow]=useState(false)

    // handleNavIcon functionality//
    const HandleNavIcon=()=>{
        setisShow(!isShow);
    }

  return (
    <>
    <div className=' py-8 bg-main_bg_color px-5 px-sm-0'>
        <div className="container">
           <Flex className=' justify-between items-center'>
           <div>
                <picture>
                    <img src={Logo} alt="Logo.png" />
                </picture>
            </div>
            <div>
                <Flex className={`absolute flex-col sm:static sm:bg-main_bg_color sm:flex-row sm:gap-x-5 ${isShow ? "left-0 bg-green-200 w-full z-10 items-center top-[80px] transition-all":"left-[-100%] bg-gray-200 w-full z-10 items-center top-[80px]"}`}>
                    <li>
                        <a href="#" className="menuItem transition-all hover:text-main_font_color hover:font-bold">Home</a>
                    </li>
                    <li>
                        <a href="#" className="menuItem transition-all hover:text-main_font_color hover:font-bold">Shop</a>
                    </li>
                    <li>
                        <a href="#" className="menuItem transition-all hover:text-main_font_color hover:font-bold">About</a>
                    </li>
                    <li>
                        <a href="#" className="menuItem transition-all hover:text-main_font_color hover:font-bold">Contacts</a>
                    </li>
                    <li>
                        <a href="#" className="menuItem transition-all hover:text-main_font_color hover:font-bold">Journal</a>
                    </li>
                </Flex>
            </div>
            <div className='cursor-pointer sm:hidden' onClick={HandleNavIcon}>
                {isShow===true?<RxCross2/>:<FaBars/> }
            </div>
           </Flex>
        </div>
    </div>
    
    
    </>
  )
}

export default Header