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
    agreement:false,
    subscribe1:false,
    subscribe2:false,
  })
  // handleuserInput functionality
  const handleuserInput = (e)=>{
    if (e.target.checked){
      setuserInfo({
        ...userInfo,
        [e.target.id]:true,
      })
    } else {
      setuserInfo({
        ...userInfo,
        [e.target.id] : e.target.value,
  
      })  
    }
    
  }
  console.log(userInfo);

  const handleSignUp = ()=>{
    const {FirstName, EmailAddress, Telephone, Address1, password, Repeatpassword, agreement} = userInfo
    if (!FirstName){
    console.log("First name missing");
    } else if (!EmailAddress){
        console.log("Email missing");
    } else if (!Telephone){
    console.log("Telephone missing");
    } else if (!Address1){
    console.log("Address1 missing"); 
    } else if (!password){
    console.log("Password missing");
    } else if (!Repeatpassword){
    console.log("Repeatpassword missing");
    } else if (!agreement){
    console.log("Agreement missing");
    } else {
    console.log("Everything ok");
    
    }
  }

  return (
    <div className='py-20'>
        <div className='container'>
            <RegistrationTop/>
            <div className='flex flex-col items-start gap-y-12'>
              {/* Personal information */}
            <div>
                <form action="#" onSubmit={(e)=>e.preventDefault()}>
                  <div>
                  <h1 className='text-[49px] font-bold text-main_font_color mb-5'>Your Personal Details</h1>
                  </div>
                    <div className='flex flex-wrap justify-between gap-y-8'>
                    <SignUpInput className={" basis-2/5 py-4 border-0 border-b-2 border-b-secondary_bg_color"} inputType={"text"} placeHolder={"First Name"} labetTitle={"First Name"} inputId={"FirstName"} oninputChange={handleuserInput}/>
                    
                    <SignUpInput className={"py-4 border-0 border-b-2 border-b-secondary_bg_color"} inputType={"text"} placeHolder={"Last Name"} labetTitle={"Last Name"} inputId={"LastName"} oninputChange={handleuserInput}/>
                    
                    <SignUpInput className={"py-4 border-0 border-b-2 border-b-secondary_bg_color"} inputType={"email"} placeHolder={"ska@gmail.com"} labetTitle={"Email Address"} inputId={"EmailAddress"} oninputChange={handleuserInput}/>
                    
                    <SignUpInput className={"py-4 border-0 border-b-2 border-b-secondary_bg_color"} inputType={"number"} placeHolder={"Your phone number"} labetTitle={"Telephone"} inputId={"Telephone"} oninputChange={handleuserInput}/>
                    
                    </div>
                </form>
            </div>
            {/* Personal information */}

            {/* Customer information */}
            <div>
                <form action="#" onSubmit={(e)=>e.preventDefault()}>
                  <div className='mb-10'>
                  <h1 className='text-[49px] font-bold text-main_font_color mb-5'>New Customer</h1>
                  </div>
                    <div className='flex flex-wrap gap-y-8 gap-x-20'>
                    <SignUpInput className={" basis-2/5 py-4 border-0 border-b-2 border-b-secondary_bg_color"} inputType={"text"} placeHolder={"R-14, H-11, Black-D Mirpur-6"} labetTitle={"Address-1"} inputId={"Address1"} oninputChange={handleuserInput}/>
                    
                    <SignUpInput className={"py-4 border-0 border-b-2 border-b-secondary_bg_color"} inputType={"text"} placeHolder={"Rupganj-narayanganj"} labetTitle={"Address-2"} inputId={"Address2"} oninputChange={handleuserInput}/>
                    
                    <SignUpInput className={"py-4 border-0 border-b-2 border-b-secondary_bg_color"} inputType={"email"} placeHolder={"Your city"} labetTitle={"City"} inputId={"City"} oninputChange={handleuserInput}/>
                    
                    <SignUpInput className={"py-4 border-0 border-b-2 border-b-secondary_bg_color"} inputType={"number"} placeHolder={"062635"} labetTitle={"Post Code"} inputId={"PostCode"} oninputChange={handleuserInput}/>
                    
                    </div>
                    <div className='mt-5 flex gap-x-20'>
                        <div className='basis-2/5'>
                        <h1 className='mb-3 text-base font-DMsans font-normal text-main_font_color'>Division</h1>
                        <select name="Division" id="Division" className='w-full border-0 border-b-2 border-b-secondary_bg_color' onChange={handleuserInput}>
                          <option value="">Please select</option>
                          <option value="">Dhaka</option>
                          <option value="">Narayanganj</option>
                          <option value="">Mymensingh</option>
                          <option value="">joypurhat</option>
                          <option value="">Rajshahi</option>
                        </select>
                        </div>
                        <div className='basis-2/5'>
                        <h1 className='mb-3 text-base font-DMsans font-normal text-main_font_color'>District</h1>
                        <select name="District" id="District" className='w-full border-0 border-b-2 border-b-secondary_bg_color' onChange={handleuserInput} >
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
            <div>
                <form action="#" onSubmit={(e)=>e.preventDefault()}>
                  <div className='mb-10'>
                  <h1 className='text-[49px] font-bold text-main_font_color mb-5'>Your Password</h1>
                  </div>
                    <div className='flex flex-wrap justify-between gap-y-8'>
                    <SignUpInput className={"py-4 border-0 border-b-2 border-b-secondary_bg_color"} inputType={"password"} placeHolder={"******"} labetTitle={"password"} inputId={"password"} oninputChange={handleuserInput}/>
                    
                    <SignUpInput className={"py-4 border-0 border-b-2 border-b-secondary_bg_color"} inputType={"password"} placeHolder={"Repeat password"} labetTitle={"Repeat password"} inputId={"Repeatpassword"} oninputChange={handleuserInput}/>
                    
                    </div>
                </form>
            </div>
            {/* Password */}

            {/* Check mark information */}
            <div className='flex items-center gap-x-3'>
              <input type="checkbox" id='agreement' name='agreement' onChange={handleuserInput} />
              <p className='font-DMsans text-base font-normal text-secondary_font_color'>I have read and agree to the private policy</p>
            </div>
            <div className='flex items-center gap-x-3'>
              <p className='font-DMsans text-base font-normal text-secondary_font_color'>Subscribe Newsletter</p>
              <input type="checkbox" id='subscribe1' name='subscribe1' onChange={handleuserInput}/>
              <input type="checkbox" id='subscribe2' name='subscribe2' onChange={handleuserInput}/>
            </div>
            {/* Check mark information */}

            {/* Button info */}
            <div>
              <button className='text-md rounded-sm bg-black px-20 py-4 font-DMsans font-bold text-white' onClick={handleSignUp}>
                Sign Up
              </button>
            </div>
            {/* Button info */}
            </div>

        </div>
    </div>
  )
}

export default Registration