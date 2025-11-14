import React from 'react'



type MaxWidthProp={
  children:React.ReactNode;
  className?:string;
}
const MaxWidth = ({children, className}:MaxWidthProp) => {
  return (
    <div className={`max-w-screen-xl mx-auto p-4 ${className}`}>
      {children}
    </div>
  )
}

export default MaxWidth
