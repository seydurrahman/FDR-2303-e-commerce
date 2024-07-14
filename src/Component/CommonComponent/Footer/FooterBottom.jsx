import React from 'react'
import Flex from "../Flex"
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

const FooterBottom = () => {
  return (
    <>
      <Flex className={" justify-between items-center"}>
       <div className='py-10'>
       <Flex className={"items-center gap-x-6"}>
       <FaFacebookF/>
        <FaLinkedin/>
        <FaSquareInstagram/>
       </Flex>
       </div>
       <div>
        <p className='text-footer_text_color font-DMsans text-sm'>20 pcalfhowueiornio maiores, aliquid modi </p>
       </div>
      </Flex>
    </>
  )
}

export default FooterBottom