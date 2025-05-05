import React from 'react'

const Square = ({value,onClick}) => {
  return (
    <button className={`border-b border-gray-400 text-2xl font-bold h-16 w-16 flex item-center justify-center opacity-90 hover:brightness-110 transition duration-300 ease-in-out ${value === "X" ? "text-violet-500" : "text-red-400"}`} onClick={onClick}>
        {value}

    </button>
    
  )
}

export default Square;