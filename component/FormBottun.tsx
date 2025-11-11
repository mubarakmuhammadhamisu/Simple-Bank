"cla"
import React from 'react'

const FormBottun = ({type, text}:{type:string; text: string;}) => {
  return (
    <>
      <button type={type} className='bg-blue-800 text-white font-bold w-full p-2 rounded-lg mb-2.5'>{text}</button>
    </>
  )
}

export default FormBottun
