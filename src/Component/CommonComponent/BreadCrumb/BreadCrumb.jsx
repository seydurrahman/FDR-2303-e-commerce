import React from 'react'
import { Link , useLocation} from 'react-router-dom'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const BreadCrumb = () => {
    const location=useLocation()
    let BreadCrumbPathName = location.pathname.split("/").filter((x)=>x);
    let BreadCrumbList="";
  return (
    <div>
        <ul className='flex items-center gap-3'>
            <li>
                <Link to={"/"} className='bg-blue-300 py-1 px-5 rounded-xl hover:bg-green-400' >Home</Link>
            </li>
            <MdKeyboardDoubleArrowRight/>
            {BreadCrumbPathName.map((path,index)=>{
                const isLast =index===BreadCrumbPathName.length-1
                BreadCrumbList += path;
                return(
                    <li key={path}>
                        {isLast?(
                            <Link className={`${isLast?"bg-blue-300 py-1 px-5 rounded-xl hover:bg-green-400":null}`}>{path}</Link>
                        ):(
                            <Link to={`/${BreadCrumbList}`} className={`${isLast?"bg-blue-300 py-1 px-5 rounded-xl hover:bg-green-400":null}`}>{path}</Link>
                        )}
                        
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default BreadCrumb