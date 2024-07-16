import React from 'react'
import BreadCrumb from '../../Component/CommonComponent/BreadCrumb/BreadCrumb'
import ShopLeft from '../../Component/ShopComponent/ShopLeft/ShopLeft'
import ShopRight from '../../Component/ShopComponent/ShopRight/ShopRight'
import Flex from "../../Component/CommonComponent/Flex"
const Shop = () => {
  return (
    <>
        <div className="container">
        <div className=' py-20'> 
            <h1 className='text-[49px] font-DMsans font-bold text-main_font_color'>Products</h1>
            <BreadCrumb/>
            <div className='py-20'>
            <Flex>
                <ShopLeft className="w-[25%] bg-green-400"/>
                <ShopRight className="w-[75%] bg-blue-400"/>
            </Flex>
        </div>
            </div>
        </div>
    </>
  )
}

export default Shop