import React from 'react'

type props ={
  children: React.ReactNode
}
const ListE = ({children}:props) => {
  return (
    <div className='flex justify-between w-full my-1'>
      {children}
    </div>
  )
}

export default ListE
