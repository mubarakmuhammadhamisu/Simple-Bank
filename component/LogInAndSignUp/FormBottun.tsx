
import React from 'react'


type ButtonType = "button" | "submit" | "reset";
const FormBottun = ({type, text}:{type: ButtonType; text: string;}) => {
  return (
    <>
      <button type={type} className='bg-blue-900 text-white text-lg font-bold w-full py-2 px-3 rounded-3xl mb-2.5 mt-1 hover:bg-blue-700 cursor-pointer'>{text}</button>
    </>
  )
}

export default FormBottun
