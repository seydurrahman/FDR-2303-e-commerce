import React, { useState } from 'react'
import { IoMdStar } from 'react-icons/io'
const Review = () => {
    const [showDescription, setshowDescription]=useState("description")
  return (
    <>
    <div className='flex flex-col gap-y-5'>
        <div className='flex items-center gap-x-7'>
            <h1 className='font-normal font-DMsans text-sm text-secondary_font_color cursor-pointer' onClick={()=>setshowDescription("description")}>Descriptions</h1>
            <h2 className='font-bold font-DMsans text-md text-main_font_color cursor-pointer' onClick={()=>setshowDescription("")}>Review (1)</h2>
        </div>
        {showDescription === "description" ? (<div>
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
        </div>): (
            <div>
                <ul class="max-w-md divide-y divide-gray-200 flex flex-col gap-y-4">
    {[...new Array(4)].map((_,index)=>(
        <li class="py-3 sm:pb-4">
      <div class="flex items-center space-x-4 rtl:space-x-reverse">
         <div class="flex-shrink-0">
            <img class="w-8 h-8 rounded-full" src="https://ioflood.com/blog/wp-content/uploads/2023/10/java_logo_dice_random-300x300.jpg.webp" alt="Neil image"/>
         </div>
         <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
               Neil Sims
            </p>
            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
               email@flowbite.com
            </p>
         </div>
         <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            $320
         </div>
      </div>
   </li>
    ))}
   
   <li class="py-3 sm:py-4">
      <div class="flex items-center space-x-4 rtl:space-x-reverse">
         <div class="flex-shrink-0">
            <img class="w-8 h-8 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScXWzC7IMjhrQUwTsLcDzKI3DZQpwyRBYnjw&s" alt="Neil image"/>
         </div>
         <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
               Bonnie Green
            </p>
            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
               email@flowbite.com
            </p>
         </div>
         <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            $3467
         </div>
      </div>
   </li>

</ul>
            </div>
)}
        
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