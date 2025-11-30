import React from 'react'
import { useToggleStore } from '@/Store/toggleStore'

const HanBG = () => {
  const { isOpen, toggle } = useToggleStore();
  return (
    <button
  onClick={toggle}
  className="text-gray-900 sm:hidden corsor-pointer"
>
  {isOpen ? (
    // Close icon
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className="w-7 h-7"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  ) : (
    // Hamburger icon
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className="w-7 h-7"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )}
</button>

  )
}

export default HanBG
