import React from 'react'

type Props = {
  width?: string;
  height?: string;
}
const Pending = ({width= "50", height = "50"}: Props) => {
  return (
    <>
    <svg
  xmlns="http://www.w3.org/2000/svg"
  width={width}
  height={height}
  viewBox="0 0 60 60"
  aria-label="Transaction Pending"
>
  <defs>
    <linearGradient id="g-pending" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stopColor="#FFD163"/>
      <stop offset="1" stopColor="#FF8A00"/>
    </linearGradient>

    <filter id="shadow-pending" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#7a4e00" floodOpacity="0.15"/>
    </filter>
  </defs>

  <circle cx="30" cy="30" r="26" fill="url(#g-pending)" filter="url(#shadow-pending)" />
  <circle cx="30" cy="30" r="20" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />

  
  <circle cx="30" cy="30" r="10" fill="none" stroke="white" strokeWidth="3" />
  <line x1="30" y1="30" x2="30" y2="24" stroke="white" strokeWidth="3" strokeLinecap="round"/>
  <line x1="30" y1="30" x2="35" y2="30" stroke="white" strokeWidth="3" strokeLinecap="round"/>
</svg>
  
    </>
  )
}

export default Pending
