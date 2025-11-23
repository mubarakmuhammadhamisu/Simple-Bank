import React from 'react'
import {Bell, BellDot} from 'lucide-react'
import BanknoteIcon from '@/component/BankLogo'
import NavBar from '@/component/navba/NavBar'
const DashNavBar = () => {
  return (
    <NavBar className='flex w-11/12 sm:w-10/12 max-w-7xl' >
      <div className='flex gap-3'>
        <div className='flex gap-2'>
        <BanknoteIcon size={true} />
        <p className="text-md text-gray-500">welcome back, mubarak!</p>
        </div>
        <div className='flex gap-4'>
        <BellDot className='text-gray-500' fill='gray' size={20} strokeWidth={2}/>

        <Bell className='text-gray-500'fill='gray' size={20} strokeWidth={2}/>
        </div>
        </div>
      </NavBar>
  )
}

export default DashNavBar
