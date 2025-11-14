import React from 'react'
import NavBar from '@/component/NavBar'
import MaxWidth from '@/component/Max-width'

const page = () => {
  return (
    <div className='w-full min-h-screen bg-[#E5E7FA]'>
      <MaxWidth>
        <NavBar />
      </MaxWidth>
    </div>
  )
}

export default page
