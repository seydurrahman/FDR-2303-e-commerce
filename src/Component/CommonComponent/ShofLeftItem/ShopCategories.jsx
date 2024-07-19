import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa6';
import Flex from '../Flex';

const ShopCategories = ({categoriesData, shopLeftTitle}) => {
    const [showCategories, setshowCategories]=useState(categoriesData.map(()=>false))

    const handleCategoriesToggle = (idx) => {
        setshowCategories((previousState) => {
            return previousState.map((value, index) =>
                idx === index ? !value: false   
            )
        })
    }
  return (
    <>
        <div>
            <h1 className=' font-DMsans font-bold text-xl mb-9'>
                {shopLeftTitle? shopLeftTitle: "Title is missing" }
            </h1>
        </div>
        
        <div>
            <div className='divide-y-2 divide-solid divide-[#f0f0f0]'>
                {categoriesData?.map((item,index)=>(
                    item.subcategories.length > 0 ? (
            <div>
                <div className='py-5 px-3 cursor-pointer'key={item.id} onClick={()=>handleCategoriesToggle(index)}>
                <Flex className={"justify-between items-center"}>
                <h2 className='text-secondary_font_color font-DMsans font-normal text-base '>
                    {item.title}  
                </h2>
                <FaPlus className='text-secondary_font_color'/>
                </Flex>
            </div>
            <div className={`${showCategories [index] && "mb-4"}`}>
                {showCategories [index] && 
                    item.subcategories.map((subitem)=>(
                        <div 
                        className='px-3 py-2 cursor-pointer' 
                        key={subitem.id}
                        >
                              <h2 className='text-secondary_font_color font-DMsans font-normal text-base '>
                                {subitem.title}
                                </h2>
                        </div>
                    ))}
                 </div>
            </div>
                    ):(
                <div className='py-5 px-3 cursor-pointer'>
                    <h2 className='text-secondary_font_color font-DMsans font-normal text-base '>
                        {item.title}
                    </h2>
                </div>)

                )
            )}
                
            </div>
        </div>
    </>
  )
}

export default ShopCategories