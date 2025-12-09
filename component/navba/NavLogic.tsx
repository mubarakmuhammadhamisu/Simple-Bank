"use client"
import NavLink from '@/component/navba/NavLink'
import { NavLinkData } from '@/utils/LinkData'
import HanBG from '@/component/navba/HanBG'

const NavLogic = () => {
    
  return (
    <>
      <NavLink LinkData={NavLinkData} />
      <HanBG className='sm:hidden'/>

    </>

  )
}

export default NavLogic
