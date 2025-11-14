"use client"
import {useState} from 'react'
import BanknoteIcon from './BankLogo'
import NavLink from './AllNav/NavLink'
import HanBG from './AllNav/HanBG'
import { NavLinkData } from '@/utils/LinkData'

const NavBar = () => {
  const [isClicked, setIsClicked]=useState(false);
  return (
    <nav className='w-full bg-white shadow-xl p-4 flex justify-between items-center gap-6 mt-5 px-4 rounded-2xl md:gap-3 md:shadow'>
      <div className='flex justify-between items-center gap-3 '>
        <BanknoteIcon />
        <h2 className='text-lg font-bold text-blue-900'>SimpliBank</h2>
      </div>
      <NavLink LinkData={NavLinkData} isClicked={isClicked}/>
      <HanBG isClicked={isClicked} setIsClicked={setIsClicked} />
    </nav>
  )
}

export default NavBar
