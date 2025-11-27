"use client"
import {LandingPageNavLink,DashPageNavLink} from '@/utils/LinkData'
import LinkCard from '@/component/SideBar/LinkCard'

type props ={
    TorF?: boolean; // true for LandingPageNavLink, false for DashPageNavLink
    className?: string
}
const NavLinkWrapper = ({TorF, className}:props) => {
    if(TorF){
        return <LinkCard navItems={LandingPageNavLink} TorF={true} className='hidden lg:flex  sm:row-span-2 min-w-40'/>
    }

  return (
    <LinkCard navItems={DashPageNavLink} className={className} />
  )
}

export default NavLinkWrapper
