import React from 'react'

const FooterItem = ({allItem=["one","Two","Three","Four",],title}) => {
  return (
    <>
         <div>
    <h2 className=' text-main_font_color font-DMsans font-bold text-md mb-4'>{title}</h2>
    <ul>
        {allItem?.map((item, index)=>(
            <li className='text-footer_text_color font-DMsans text-sm py-2'>
            <a href="#">{title.toLocaleLowerCase()==="SHOP".toLocaleLowerCase()?item+(index+1):item}

            </a>
        </li>))}
    </ul>
    </div>
    </>
  )
}

export default FooterItem