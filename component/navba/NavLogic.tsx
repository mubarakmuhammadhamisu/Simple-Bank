"use client"
import { useState } from 'react'
import NavLink from './NavLink'
import { NavLinkData } from '@/utils/LinkData'
import HanBG from './HanBG'

const NavLogic = () => {
    const [isClicked, setIsClicked] = useState(false)
  return (
    <>
      <NavLink LinkData={NavLinkData} isClicked={isClicked} />
      <HanBG isClicked={isClicked} setIsClicked={setIsClicked} />
    </>

  )
}

export default NavLogic
