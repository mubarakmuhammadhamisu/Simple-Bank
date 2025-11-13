
import React from 'react'


type ButtonType = "button" | "submit" | "reset";
const FormBottun = ({type, text}:{type: ButtonType; text: string;}) => {
  return (
    <>
      <button type={type} className='bg-blue-900 text-white font-bold w-full py-2 px-3 rounded-lg mb-2.5 mt-1 hover:bg-blue-700 cursor-pointer'>{text}</button>
    </>
  )
}

export default FormBottun
