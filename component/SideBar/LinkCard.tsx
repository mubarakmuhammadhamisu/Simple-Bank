"use client"
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react';
import BankLogoAndName from '../BankLogoAndName';
import LanLinks from './LanLink'
import {NavItem} from '@/utils/LinkData'

type props ={
  navItems: NavItem[];
  TorF?: boolean;
  className?: string
}


const LinkCard = ({navItems, TorF = false, className}: props) => {

  // Set 'Transfers' as the initial active item on the landing page to match the image
 const [activeItem, setActiveItem] = useState(TorF? 'Transfers':'Dashboard');
 const pathname = usePathname();
 // Case 1: Landing page → Use local state only
  useEffect(() => {
    if (TorF) {
      setActiveItem('Transfers');
    }
  }, [TorF]);

  // Case 2:Update active item based on current pathname on other pages
  useEffect(() => {
    if (!TorF && pathname) {
      // Convert URL to item name (you can customize this)
      const current = navItems.find(item => item.href === pathname);
      setActiveItem(current?.name || '');
    }
  }, [pathname, TorF, navItems]); 

  return (
    <div className={`bg-blue-100/10 backdrop-blur-x border border-white/20 rounded-3xl 
        shadow-lg shadow-black/20 ${className}`}
      > 
      
      <div className="w-full h-full p-5  bg-white  rounded-2xl  shadow-2xl 
         shadow-gray-300/60 border border-gray-100 "
        >
        
       <BankLogoAndName className='pointer-events-none gap-2 justify-center mb-3'/>

        <nav className="space-y-3 ml-3">
          {navItems.map((item) => (
            <LanLinks
              key={item.name}
              {...item}
              isActive={item.name === activeItem}
              onClick={TorF? setActiveItem : undefined}
              routeED = {TorF}
            />
          ))}
        </nav>
      </div>
    </div>
  );
};

export default LinkCard;