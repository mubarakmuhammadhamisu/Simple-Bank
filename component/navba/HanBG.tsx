import React from 'react'

type Props = {
  isClicked: boolean
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>
}
const HanBG = ( {isClicked, setIsClicked}:Props) => {
  return (
    <button
  onClick={() => setIsClicked(!isClicked)}
  className="text-gray-900 sm:hidden"
>
  {isClicked ? (
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
