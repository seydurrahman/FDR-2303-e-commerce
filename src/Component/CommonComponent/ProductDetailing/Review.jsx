import React from 'react'
import { IoMdStar } from 'react-icons/io'
const Review = () => {
  return (
    <>
    <div className='flex flex-col gap-y-5'>
        <div className='flex items-center gap-x-7'>
            <h1 className='font-normal font-DMsans text-sm text-secondary_font_color'>Descriptions</h1>
            <h2 className='font-bold font-DMsans text-md text-main_font_color'>Review (1)</h2>
        </div>

        <div>
            <p className='font-normal font-DMsans text-sm text-secondary_font_color'>1 review for product</p>
            <hr className='mt-4 opacity-75'/>
        </div>

        <div className=''>
        <div className='flex items-center justify-between'>
            <div className=' flex items-center gap-x-5'>
            <h1 className='font-bold font-DMsans text-md text-main_font_color'>John Ford</h1>
            <div className='flex items-center gap-x-1 bg-yellow-300'>
                <span><IoMdStar/></span>
                <span><IoMdStar/></span>
                <span><IoMdStar/></span>
                <span><IoMdStar/></span>
                <span><IoMdStar/></span>
            </div>
            </div>
            <div>
                <p>6 months ago</p>
            </div>
        </div>

        <div className='mt-5'>
            <p className='font-normal font-DMsans text-sm text-secondary_font_color'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatibus perferendis quas at qui quibusdam a commodi voluptas aperiam, ratione sunt cupiditate, itaque nesciunt veniam, earum corrupti ut tempora quisquam.</p>
        </div>
        <hr className='mt-6 opacity-75'/>
        </div>
    </div>

    {/* post review */}
    <div>
        <form action="#" onSubmit={(e)=>e.preventDefault()}>
            <h1 className='font-bold font-DMsans text-xl text-main_font_color mb-4'>Add a review</h1>
            
            <div className='flex flex-col gap-y-8'>

            <div className='flex flex-col'>
                <label htmlFor="name" className='font-bold font-DMsans text-xl text-main_font_color mb-4'>Name</label>
                <input type="text" id='name' name='name' placeholder='Your name here' className='w-1/2 border-b-2 border-b-blue-400 py-5'/>
            </div> 

            <div className='flex flex-col'>
                <label htmlFor="email" className='font-bold font-DMsans text-xl text-main_font_color mb-4'>Email</label>
                <input type="email" id='email' name='email' placeholder='Your email here' className='w-1/2 border-b-2 border-b-blue-400 py-5'/>
            </div>

            <div className='flex flex-col'>
                <label htmlFor="reviw" className='font-bold font-DMsans text-xl text-main_font_color mb-4'>Revies</label>
                <textarea className='w-1/2 border-b-2 border-b-blue-400 py-5' id='reviw' name='reviw' placeholder='Your review here'/>
            </div>
            <button className='px-14 py-4 bg-black w-[14%] text-main_bg_color font-DMsans font-bold rounded-md'>Post</button>
            </div>

        </form>
    </div>
    </>
  )
}

export default Review