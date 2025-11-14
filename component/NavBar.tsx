"use client"
import {useState} from 'react'
import BankLogoAndName from './BankLogoAndName'
import NavLink from './AllNav/NavLink'
import HanBG from './AllNav/HanBG'
import { NavLinkData } from '@/utils/LinkData'

const NavBar = () => {
  const [isClicked, setIsClicked]=useState(false);
  return (
    <nav className='w-full bg-white shadow-xl p-4 flex justify-between items-center gap-6 mt-5 px-4 rounded-2xl md:gap-3 md:shadow'>
      <BankLogoAndName />
      <NavLink LinkData={NavLinkData} isClicked={isClicked}/>
      <HanBG isClicked={isClicked} setIsClicked={setIsClicked} />
    </nav>
  )
}

export default NavBar
