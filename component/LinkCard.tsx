"use client"
import React, { useState } from 'react';
import BankLogoAndName from './BankLogoAndName';
import {navItems} from './LandinPage/LanLink'
import LanLinks from './LandinPage/LanLink'


// Main Application Component
const LinkCard = () => {
  // Set 'Transfers' as the initial active item to match the image
  const [activeItem, setActiveItem] = useState('Transfers');

  return (
    <div className='bg-blue-200/1backdrop-blur-x border border-white/20 rounded-3xl 
        shadow-lg shadow-black/20 hidden lg:flex  sm:row-span-2 min-w-44'
      >
      {/* Main Card Container (Replicating the soft, rounded design) */}
      <div className="w-full h-full p-5  bg-white  rounded-2xl  shadow-2xl 
         shadow-gray-300/60 border border-gray-100 "
        >
        
        {/* Logo/Header Section */}
       <BankLogoAndName className='pointer-events-none gap-2 justify-center mb-3'/>

        {/* Navigation Links */}
        <nav className="space-y-3 ml-3">
          {navItems.map((item) => (
            <LanLinks
              key={item.name}
              {...item}
              isActive={item.name === activeItem}
              onClick={setActiveItem}
            />
          ))}
        </nav>
      </div>
    </div>
  );
};

export default LinkCard;