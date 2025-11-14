import React from 'react'
import BanknoteIcon from './BankLogo'
import NavLink from './AllNav/NavLink'
import { NavLinkData } from '@/utils/LinkData'
import CTAButton from './AllNav/CTAButton'

const NavBar = () => {
  return (
    <nav className=' w-full bg-white shadow-xl p-4 flex justify-between items-center gap-6 mt-5 px-4 rounded-2xl'>
      <div className='flex justify-between items-center gap-3 '>
        <BanknoteIcon />
        <h2 className='text-lg font-bold text-blue-900'>SimpliBank</h2>
      </div>
      <NavLink LinkData={NavLinkData}/>
      <div className='flex  items-center'>
        <CTAButton />
      </div>
    </nav>
  )
}

export default NavBar
