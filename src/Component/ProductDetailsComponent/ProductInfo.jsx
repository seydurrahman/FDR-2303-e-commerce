import React from 'react'

const ProductInfo = () => {
  return (
    <div className='mt-5 divide-y-2 divide-blue-400'>
        <hr/>
        <div>
            <div className='flex items-center gap-x-10'>
                <h1 className='text-[16px] font-DMsans font-bold text-main_font_color'> 
                COLOR:
                </h1>
                <div className='flex items-center gap-x-2'>
                <div className='w-[20px] h-[20px] rounded-full bg-red-300'></div>
                <div className='w-[20px] h-[20px] rounded-full bg-red-300'></div>
                <div className='w-[20px] h-[20px] rounded-full bg-red-300'></div>
                <div className='w-[20px] h-[20px] rounded-full bg-red-300'></div>
                </div>
            </div>
        </div>
       <div>
            <div className='flex items-center gap-x-10'>
                <h1 className='text-[16px] font-DMsans font-bold text-main_font_color'> 
                SIZE:
                </h1>
                <select name="ProductSize" id="ProductSize" className='p'>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                </select>
            </div>
       </div>
        
    </div>
  )
}

export default ProductInfo