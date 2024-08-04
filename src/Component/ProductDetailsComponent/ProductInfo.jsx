import React from 'react'
import { FaMinus, FaPlus } from "react-icons/fa6";

const ProductInfo = () => {
  const colorItem =[
    {id:1, colorCode:"#979797"},
    {id:2, colorCode:"#ff8686"},
    {id:3, colorCode:"#7ed321"},
    {id:4, colorCode:"#b6b6b6"},
    {id:5, colorCode:"#15cba5"},

  ]
  return (
    <div className='mt-5 flex flex-col gap-y-10'>
        <hr/>
        <div>
            <div className='flex items-center gap-x-8'>
                <h1 className='text-[16px] font-DMsans font-bold text-main_font_color'>
                    
                COLOR:
                </h1>
                  {colorItem?.map((color)=>(
                <div className={`w-[20px] h-[20px] rounded-full`}></div>
                  ))}
            </div>
        </div>
       <div>
            <div className='flex items-center gap-x-14'>
                <h1 className='text-[16px] font-DMsans font-bold text-main_font_color'> 
                SIZE:
                </h1>
                <select name="ProductSize" id="ProductSize" className='w-[9%]  py-2 border border-gray-300'>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                </select>
            </div>
       </div>

       {/* Quantity component */}
       <div>
            <div className='flex items-center gap-x-3'>
                <h1 className='text-[16px] font-DMsans font-bold text-main_font_color'> 
                QUANTITY:
                </h1>
                <div className='flex w-[9%] items-center justify-around border-2 border-gray-300 py-2'>
                  <span className='cursor-pointer'><FaMinus/></span>
                  <h1>1</h1>
                  <span className='cursor-pointer'><FaPlus/></span>
                </div>
            </div>
       </div>

      {/* Quantity component */}
       
    </div>
  )
}

export default ProductInfo