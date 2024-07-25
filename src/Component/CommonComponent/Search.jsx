import React from 'react'
import Flex from "../CommonComponent/Flex"
import { FcSearch } from "react-icons/fc";


const Search = ({placeHolder}) => {
  return (
    <>
     <div className=' relative'>
     <Flex>
        <input type="text" className='ml-4 sm:ml-0 sm:w-[641px] w-[180px] py-5 px-3 sm:px-5 rounded-sm' placeholder={placeHolder}/>

        <div className='absolute top-1/2 -translate-y-2/4 right-5 text-2xl'>
            <FcSearch/>
        </div>

      </Flex>
     </div>
    </>
  )
}

export default Search