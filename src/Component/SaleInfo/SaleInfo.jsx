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