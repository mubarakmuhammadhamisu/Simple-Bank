"use client"
import {LandingPageNavLink,DashPageNavLink} from '@/utils/LinkData'
import LinkCard from '@/component/SideBar/LinkCard'
import { useToggleStore } from '@/Store/toggleStore'

type props ={
    TorF?: boolean; // true for LandingPageNavLink, false for DashPageNavLink
    className?: string
}
const NavLinkWrapper = ({TorF, className}:props) => {
  const {isOpen} = useToggleStore();
    if(TorF){
        return <LinkCard navItems={LandingPageNavLink} TorF={true} className='hidden lg:flex  sm:row-span-2 min-w-40'/>
    }

  return (
    <LinkCard navItems={DashPageNavLink} className={`${isOpen
          ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" 
          : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
        } md:pointer-events-auto  md:opacity-100 min-w-44 items-center h-10/12 sm:h-10/12 md:h-10/12 fixed`} />
  )
}

export default NavLinkWrapper
