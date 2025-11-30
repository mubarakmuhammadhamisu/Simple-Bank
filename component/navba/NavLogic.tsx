"use client"
import { useState } from 'react'
import NavLink from './NavLink'
import { NavLinkData } from '@/utils/LinkData'
import HanBG from './HanBG'
import NavLinkWrapper from '@/component/SideBar/NavLinkWrapper'

const NavLogic = () => {
    const [isClicked, setIsClicked] = useState(false)
  return (
    <>
      <NavLink LinkData={NavLinkData} isClicked={isClicked} />
      <HanBG />
      {/*<NavLinkWrapper TorF={false} 
      className=' md:flex min-w-44 items-center h-10/12 sm:h-10/12 md:h-10/12 fixed'/>
      */}

    </>

  )
}

export default NavLogic
