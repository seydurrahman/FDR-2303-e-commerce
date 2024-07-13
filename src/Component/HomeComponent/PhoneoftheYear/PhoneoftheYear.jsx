import React from 'react'
import Flex from '../../CommonComponent/Flex'
import Watchimg from "../../../assets/phoneoftheyear.png"
import Button from '../../CommonComponent/Button'
const PhoneoftheYear = () => {
  return (
    <>
        <div className="container">
            <div className='py-10 bg-[#f3f3f3]'>
           <Flex className={"items-center"}>
                <div className='w-[45%]'>
                    <picture>
                        <img src={Watchimg} alt={Watchimg} />
                    </picture>
                </div>
                <div className='w-full'>
                    <div className='flex justify-start flex-col items-start h-full gap-y-5'>
                    <h2 className=' font-bold font-DMsans text-[40px]'>Phone of the year</h2>
                    <p className=' w-[511px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio animi quod, eos est quo</p>
                    <Button className={" bg-black py-3 px-10 text-main_bg_color"} title={"Shop now"}/>
                    </div>
                </div>
            </Flex>
           </div>
        </div>
    </>
  )
}

export default PhoneoftheYear