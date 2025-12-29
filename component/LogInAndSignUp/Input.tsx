import React from 'react'

type Props = {
    Id?: string;
    Type: string;
    Placeholder?: string;
    Label?: string;
    Name: string;
    Class?: string;
    classname?: string;
    LabelClass?: string;
    value?: string;
    isFull?: boolean;
    readonly?: boolean;
}
const Input = ({
  Id, 
  Type, 
  Placeholder, 
  Label, 
  Name, 
  Class, 
  LabelClass, 
  classname,
  value,
  isFull = true,
  readonly= false }:Props) => {
  return (    <div className={`${classname}`}>
    <label htmlFor={Id} className={`${LabelClass} font-sans text-sm`}>{Label}</label>
    <input 
      type={Type} 
      name={Name} 
      placeholder={Placeholder} 
      id={Id}
      readOnly={readonly}
      value={value}
      className={`${isFull && "w-full"} bg-[#E5E7FA] py-2 px-3  
        rounded-lg mb-4 border border-blue-200 
        focus:border-blue-300 focus:outline-blue-600 ${Class}`}/>      
    </div>
  )
}

export default Input
