import React from 'react'
import Flex from "../CommonComponent/Flex";
import { FcSearch } from "react-icons/fc";

const Search = ({placeHolder}) => {
  return (
    <>
     <div className=' relative'>
     <Flex>
        <input type="text" className='w-[641px] py-5 px-5 rounded-sm' placeholder={placeHolder}/>

        <div className=' absolute top-1/2 -translate-y-2/4 right-5 text-2xl'>
            <FcSearch/>
        </div>

      </Flex>
     </div>
    </>
  )
}

export default Search