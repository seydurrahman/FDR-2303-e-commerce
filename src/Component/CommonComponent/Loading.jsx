import React from 'react'

const Loading = ({perItem, className}) => {
    console.log(className);
  return (
    <div className='py-10 gap-y-4 flex flex-wrap justify-between'>
        {[...new Array(perItem).map((_,index)=>index)].map((item)=>(
          <div className={`${className ? className :"w-[32%]"} rounded-md border border-blue-300 p-4 shadow`} key={item+""}>
              <div key={item+""}>
                <div class=" relative h-[350px] w-full animate-pulse rounded-lg bg-gray-200">
                  <div class=" my-4 flex h-full animate-pulse flex-col items-center justify-center gap-y-5">
                    <div class="h-3 w-[80%] bg-slate-700 rounded-md py-3"></div>
                    <div class="h-3 w-[80%] bg-slate-700 rounded-md py-3"></div>
                    <div class="h-3 w-[80%] bg-slate-700 rounded-md py-3"></div>
                  </div>
                </div>
              </div>
          </div>     
        ))}
    </div>
  )
}

export default Loading