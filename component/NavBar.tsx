"use client"
import {useState} from 'react'
import BankLogoAndName from './BankLogoAndName'
import NavLink from './AllNav/NavLink'
import HanBG from './AllNav/HanBG'
import { NavLinkData } from '../utils/LinkData'

type Props = {
  className?: string;
}
const NavBar = ({className}:Props) => {
  const [isClicked, setIsClicked]=useState(false);
  return (
    <nav className={`min-w-80 bg-white shadow-xl p-4 flex 
      justify-between items-center gap-6 mt-5 px-4 rounded-2xl z-10 
      md:gap-3 md:shadow ${className}`}>
        <BankLogoAndName className='pr-28  sm:pr-3 lg:pr-28' />
        <NavLink LinkData={NavLinkData} isClicked={isClicked}/>
        <HanBG isClicked={isClicked} setIsClicked={setIsClicked} />
    </nav>
  )
}

export default NavBar
