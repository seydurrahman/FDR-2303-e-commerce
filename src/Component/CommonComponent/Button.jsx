import React from 'react'

const Button = ({className, title, onCartChange}) => {
  return (
    <>
    <button onClick={onCartChange} className={className?className:" p-5 bg-black text-white"}>{title?title:"Nai"}</button>
    </>
  )
}

export default Button