import React from 'react'
import Flex from '../../CommonComponent/Flex.jsx'
import Saleleft from "../../../assets/Saleleft.png"
import Electronicwatch from "../../../assets/Electronicwatch.png"
import Furniture from "../../../assets/Furniture.png"
import Overlay from '../../CommonComponent/Overlay.jsx'
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
               <Overlay className={" bottom-16 left-16"} title="Phones Sale" discountDetailsFirst="Up to" discountDetailsLast={`sales for all phones!`} discountAmount="30%" btnTitle ="Shop now"/>
            </div>
            <div className=' w-full'>
                <Flex className={"flex-col gap-y-11"}>
                    <div className=" w-full relative">
                        <picture>
                            <img src={Electronicwatch} alt={Electronicwatch} />
                        </picture>
                        <Overlay className={" top-1/2 -translate-y-1/2 left-16"} title="Electronics sale" discountDetailsFirst="Up to" discountDetailsLast={`sales for all electronics!`} discountAmount="70%" btnTitle ="Shop now"/>
                    </div>
                    <div className=" w-full relative">
                        <picture>
                            <img src={Furniture} alt={Furniture} />
                        </picture>
                        <Overlay className={" top-1/2 -translate-y-1/2 left-16"} title="Furniture offer" discountDetailsFirst="Up to" discountDetailsLast={`sales for all furniture item!`} discountAmount="50%" btnTitle ="Shop"/>
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