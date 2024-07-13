import React from 'react'
import FooterItem from '../FooterItem'
import Flex from "../Flex"
import FooterLogo from "../../../assets/Logo.png"
const FooterTop = () => {
  return (
    <Flex className={"justify-between items-start"}>

   <FooterItem title={"MENU"} allItem={["Home","Shop","About","Contact","Journal"]}/>

   <FooterItem title={"SHOP"} allItem={["Category","Category","Category","Category","Category"]}/>

   <FooterItem title={"HELP"} allItem={["Privacy policy","Terms & Conditions","Special E-shop","Shipping","Secure Payment"]}/>
    <div>
        <div className='text-main_font_color font-DMsans font-bold text-md'>
        <a href="#">(025) 611-5711</a>
        </div>
        <div className='text-main_font_color font-DMsans font-bold text-md mb-4'>
        <a href="#">Company@domain.com</a>
        </div>
        <div>
        <address className='text-footer_text_color font-DMsans text-sm'>254 -allkaslajlkjfosarojflks.USA</address>
        </div>
    </div>
    <div className='cursor-pointer'>
            <img src={FooterLogo} alt={FooterLogo} />
        </div>
    </Flex>

    
  )
}

export default FooterTop