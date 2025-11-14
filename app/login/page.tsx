import React from 'react'
import Card from './Card'
import NavBar from '@/component/NavBar'
import MaxWidth from '@/component/Max-width'
const LogIn = () => {
  return (
    <div id='body-div' className='w-full min-h-screen bg-[#E5E7FA] flex justify-center items-center'>
      <MaxWidth>
        <NavBar />
      </MaxWidth>
      <Card />
    </div>
  )
}

export default LogIn
