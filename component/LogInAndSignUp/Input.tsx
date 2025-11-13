import React from 'react'

const Input = ({Id, Type, Placeholder, Label, Name, Class }:{
    Id:   string;
    Type: string;
    Placeholder: string;
    Label: string;
    Name: string;
    Class?: string;
}) => {
  return (
    <>
    <label htmlFor={Id} className='font-sans text-sm'>{Label}</label>
    <input 
      type={Type} 
      name={Name} 
      placeholder={Placeholder} 
      id={Id}
      className={`w-full bg-[#E5E7FA] py-2 px-3  rounded-lg mb-3 border border-blue-200 focus:border-blue-300 focus:outline-blue-600 ${Class}`}/>      
    </>
  )
}

export default Input
