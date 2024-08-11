import React, { useState } from 'react'
import RegistrationTop from '../../Component/RegistrationComponent/RegistrationTop/RegistrationTop'
import SignUpInput from '../../Component/RegistrationComponent/SignUpInput/SignUpInput'

const Registration = () => {
  const [userInfo, setuserInfo]=useState({
    FirstName:"",
    LastName:"",
    EmailAddress:"",
    Telephone:"",
    Address1:"",
    Address2:"",
    City:"",
    Division:"",
    District:"",
    PostCode:"",
    password:"",
    Repeatpassword:"",
  })
  // handleuserInput functionality
  const handleuserInput = (e)=>{
    setuserInfo({
      ...userInfo,
      [e.target.id] : e.target.value,

    })  
  }
  console.log(userInfo);
  
  return (
    <div className='py-20'>
        <div className='container'>
            <RegistrationTop/>
            {/* Personal information */}
            <div>
                <form action="#" onSubmit={(e)=>e.preventDefault()}>
                  <div className='mb-10'>
                  <h1 className='text-[49px] font-bold text-main_font_color mb-5'>Your Personal Details</h1>
                  </div>
                    <div className='flex flex-wrap justify-between gap-y-8'>
                    <SignUpInput className={" basis-2/5 py-4 border-b-2 border-b-secondary_bg_color"} inputType={"text"} placeHolder={"First Name"} labetTitle={"First Name"} inputId={"FirstName"} oninputChange={handleuserInput}/>
                    
                    <SignUpInput className={"py-4 border-b-2 border-b-secondary_bg_color"} inputType={"text"} placeHolder={"Last Name"} labetTitle={"Last Name"} inputId={"LastName"} oninputChange={handleuserInput}/>
                    
                    <SignUpInput className={"py-4 border-b-2 border-b-secondary_bg_color"} inputType={"email"} placeHolder={"ska@gmail.com"} labetTitle={"Email Address"} inputId={"EmailAddress"} oninputChange={handleuserInput}/>
                    
                    <SignUpInput className={"py-4 border-b-2 border-b-secondary_bg_color"} inputType={"number"} placeHolder={"Your phone number"} labetTitle={"Telephone"} inputId={"Telephone"} oninputChange={handleuserInput}/>
                    
                    </div>
                </form>
            </div>
            {/* Personal information */}

            {/* Customer information */}
            <div className='mt-12'>
                <form action="#" onSubmit={(e)=>e.preventDefault()}>
                  <div className='mb-10'>
                  <h1 className='text-[49px] font-bold text-main_font_color mb-5'>New Customer</h1>
                  </div>
                    <div className='flex flex-wrap gap-y-8 gap-x-20'>
                    <SignUpInput className={" basis-2/5 py-4 border-b-2 border-b-secondary_bg_color"} inputType={"text"} placeHolder={"R-14, H-11, Black-D Mirpur-6"} labetTitle={"Address-1"} inputId={"Address1"} oninputChange={handleuserInput}/>
                    
                    <SignUpInput className={"py-4 border-b-2 border-b-secondary_bg_color"} inputType={"text"} placeHolder={"Rupganj-narayanganj"} labetTitle={"Address-2"} inputId={"Address2"} oninputChange={handleuserInput}/>
                    
                    <SignUpInput className={"py-4 border-b-2 border-b-secondary_bg_color"} inputType={"email"} placeHolder={"Your city"} labetTitle={"City"} inputId={"City"} oninputChange={handleuserInput}/>
                    
                    <SignUpInput className={"py-4 border-b-2 border-b-secondary_bg_color"} inputType={"number"} placeHolder={"062635"} labetTitle={"Post Code"} inputId={"PostCode"} oninputChange={handleuserInput}/>
                    
                    </div>
                    <div className='flex gap-x-20'>
                        <div className='basis-2/5'>
                        <h1 className='border-b-2 border-b-secondary_bg_color py-4'>Division</h1>
                        <select name="Division" id="Division" className='w-full' onChange={handleuserInput}>
                          <option value="">Please select</option>
                          <option value="">Dhaka</option>
                          <option value="">Narayanganj</option>
                          <option value="">Mymensingh</option>
                          <option value="">joypurhat</option>
                          <option value="">Rajshahi</option>
                        </select>
                        </div>
                        <div className='basis-2/5'>
                        <h1 className='border-b-2 border-b-secondary_bg_color py-4'>District</h1>
                        <select name="District" id="District" className='w-full' onChange={handleuserInput} >
                          <option value="">Please select</option>
                          <option value="">Dhaka</option>
                          <option value="">Narayanganj</option>
                          <option value="">Mymensingh</option>
                          <option value="">joypurhat</option>
                          <option value="">Rajshahi</option>
                        </select>
                        </div>
                    </div>
                </form>
            </div>
            {/* Customer information */}

            {/* Password */}
            <div className='mt-20'>
                <form action="#" onSubmit={(e)=>e.preventDefault()}>
                  <div className='mb-10'>
                  <h1 className='text-[49px] font-bold text-main_font_color mb-5'>Your Password</h1>
                  </div>
                    <div className='flex flex-wrap justify-between gap-y-8'>
                    <SignUpInput className={" basis-2/5 py-4 border-b-2 border-b-secondary_bg_color"} inputType={"password"} placeHolder={"******"} labetTitle={"password"} inputId={"password"} oninputChange={handleuserInput}/>
                    
                    <SignUpInput className={"py-4 border-b-2 border-b-secondary_bg_color"} inputType={"password"} placeHolder={"Repeat password"} labetTitle={"Repeat password"} inputId={"Repeatpassword"} oninputChange={handleuserInput}/>
                    
                    </div>
                </form>
            </div>
            {/* Password */}
        </div>
    </div>
  )
}

export default Registration