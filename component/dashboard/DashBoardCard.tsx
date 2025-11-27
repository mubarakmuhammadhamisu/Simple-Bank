import React from 'react'


type props ={
    title: string;
    children: React.ReactNode;
    className?: string
}
const DashBoardCard = ({title, children, className=''}) => {
  return (
    <div className='bg-white w-full sm:w-56 h-54 rounded-xl flex flex-col justify-center text-center p-6 shadow-lg
    '>
        <h3 className='font-bold mb-2 pt-1.5'>{title}</h3>
        <div className={`flex flex-col w-full h-full ${className}`}>{children}</div>
    </div>
  )
}

export default DashBoardCard
