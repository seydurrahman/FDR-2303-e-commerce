import React from 'react'
import { BiSolidUpArrow } from 'react-icons/bi'
import Flex from '../Flex'

const ShopByColor = ({shopLeftTitle, shopCategoryItem}) => {
    console.log(shopCategoryItem);
  return (
    <div className='mt-8'>
       <div className='mb-8'>
       <Flex className={"justify-between items-center"}>
            <h1 className=' font-DMsans font-bold text-xl'>{shopLeftTitle ? shopLeftTitle :"Title missing"}</h1>
            <BiSolidUpArrow className='mr-2'/>
        </Flex>
       </div>

        <div  className='divide-y-2 divide-solid divide-[#f0f0f0]'>
            {shopCategoryItem?.map((item)=>(
                <div className='px-2 py-5'>
                    <Flex className={"items-center gap-x-3"}>
                    <div className='w-[11px] h-[11px] rounded-full bg-red-400' 
                    style={{backgroundColor:`${item.colorCode}`}}
                    ></div>
                <h2 className='text-secondary_font_color font-DMsans font-normal text-base '>
                    {item.title}
                </h2>
                    </Flex>
                </div>
            )) }
            
        </div>
    </div>
  )
}

export default ShopByColor