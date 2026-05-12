"use client"
import { useEffect, useRef } from 'react'
import NavLink from '@/component/navba/NavLink'
import { NavLinkData } from '@/utils/LinkData'
import HanBG from '@/component/navba/HanBG'
import { useToggleStore } from '@/Store/toggleStore'

const NavLogic = () => {
  const { isOpen, setOpen } = useToggleStore();
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside the navbar wrapper
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, setOpen]);

  return (
    <div ref={wrapperRef} className='flex items-center w-full'>
      <NavLink LinkData={NavLinkData} />
      <HanBG className='sm:hidden' />
    </div>
  )
}

export default NavLogic
