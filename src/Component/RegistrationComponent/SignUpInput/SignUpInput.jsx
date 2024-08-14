import React from 'react'

const SignUpInput = ({className, inputType, placeHolder, labetTitle, inputId, oninputChange, value}) => {
  return (
    <div className='flex basis-2/5 flex-col gap-y-4'>
        <label className='text-base font-DMsans font-normal text-main_font_color' htmlFor={labetTitle}>{labetTitle}</label>
        <input className={className} type={inputType} id={inputId} name={inputId} placeholder={placeHolder} onChange={oninputChange} value={value} />
    </div>
  )
}

export default SignUpInput