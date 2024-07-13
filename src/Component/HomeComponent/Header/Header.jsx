import React from 'react'
import Logo from "../../../assets/Logo.png"
import Flex from '../../CommonComponent/Flex'
const Header = () => {
  return (
    <>
    <div className=' py-8 bg-main_bg_color'>
        <div className="container">
           <Flex className=' justify-between items-center'>
           <div>
                <picture>
                    <img src={Logo} alt="Logo.png" />
                </picture>
            </div>
            <div>
                <Flex className={" gap-x-10"}>
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
            <div></div>
           </Flex>
        </div>
    </div>
    
    
    </>
  )
}

export default Header