import React from 'react'
import Flex from '../CommonComponent/Flex'
import Saleleft from "../../assets/Saleleft.png"
import Electronicwatch from "../../assets/Electronicwatch.png"
import Furniture from "../../assets/Furniture.png"
import Button from '../CommonComponent/Button'
const SaleInfo = () => {
  return (
    <>
    <div className=' py-32'>
        <div className="container">
            <Flex className={"gap-x-10"}>
            <div className=' w-full relative'>
                <picture>
                    <img src={Saleleft} alt={Saleleft} />
                </picture>
                <div className=' absolute bottom-16 left-16'>
                    <h3 className=' font-DMsans font-bold text-[39px] text-main_font_color'>Phones Sales</h3>
                    <p className=' mt-12 font-DMsans font-normal text-main_font_color text-base opacity-75 mb-12'>Up to <span className=' text-4xl font-bold align-middle'>30% </span>sale for all phones!</p>
                    <Button className={" py-4 px-16 bg-main_font_color text-main_bg_color font-DMsans font-bold text-sm hover:bg-slate-700"} title="Shop Now"/>
                </div>
            </div>
            <div className=' w-full'>
                <Flex className={"flex-col gap-y-11"}>
                    <div className=" w-full">
                        <picture>
                            <img src={Electronicwatch} alt={Electronicwatch} />
                        </picture>
                    </div>
                    <div className=" w-full">
                        <picture>
                            <img src={Furniture} alt={Furniture} />
                        </picture>
                    </div>
                </Flex>
            </div>
            </Flex>
        </div>
    </div>
    </>
  )
}

export default SaleInfo