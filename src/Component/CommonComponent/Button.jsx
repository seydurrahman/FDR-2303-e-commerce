import React from 'react'

const Button = ({className, title}) => {
  return (
    <>
    <button className={className?className:" p-5 bg-black text-white"}>{title?title:"Nai"}</button>
    </>
  )
}

export default Button