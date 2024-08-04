import React from 'react'

const ProductDetailsTop = ({EachProductImage}) => {
  return (
    <>
        <div className='py-10'>
      <div className='flex flex-wrap justify-between items-center gap-y-8'>
        {EachProductImage.images?.slice(0, 4).map((img)=>(
          <div className='h-[450px] max-w-[49%] bg-green-200 rounded-lg shadow-xl' key={img}>
          <picture>
            <img src={img} alt={img} className='w-full h-full object-cover rounded-lg' />
          </picture>
        </div>
        ))}
      </div>
      </div>
    </>
  )
}

export default ProductDetailsTop