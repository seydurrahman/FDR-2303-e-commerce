import React from 'react'

const Overlay = () => {
  return (
    <>
         <div className=' absolute bottom-16 left-16'>
                    <h3 className=' font-DMsans font-bold text-[39px] text-main_font_color'>Phones Sales</h3>
                    <p className=' mt-12 font-DMsans font-normal text-main_font_color text-base opacity-75 mb-12'>Up to <span className=' text-4xl font-bold align-middle'>30% </span>sale for all phones!</p>
                    <Button className={" py-4 px-16 bg-main_font_color text-main_bg_color font-DMsans font-bold text-sm hover:bg-slate-700"} title="Shop Now"/>
         </div>
    </>
  )
}

export default Overlay