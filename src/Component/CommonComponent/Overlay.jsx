import React from 'react'
import Button from './Button'
const Overlay = ({className,title,discountDetailsFirst,discountDetailsLast,discountAmount,btnTitle}) => {
  return (
    <>
         <div className={`absolute ${className}`}>
                    <h3 className=' font-DMsans font-bold text-[39px] text-main_font_color'> {title?title:"Phones Sales"}</h3>
                    <p className=' mt-12 font-DMsans font-normal text-main_font_color text-base opacity-75 mb-12'>{discountDetailsFirst}<span className=' text-4xl font-bold align-middle'>{discountAmount}</span>{discountDetailsLast}</p>
                    <Button className={" py-4 px-16 bg-main_font_color text-main_bg_color font-DMsans font-bold text-sm hover:bg-slate-700"} title={btnTitle}/>
         </div>
    </>
  )
}

export default Overlay