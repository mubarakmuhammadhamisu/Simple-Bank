import React from 'react'

type Props = {
  width?: string;
  height?: string;
}
const Succes = ({width = "50", height ="50"}:Props) => {
  return (
    <>
     {/*<!-- Success / Transfer Complete Icon -->*/}
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 60 60"
  width={width}
  height={height}
  role="img"
  aria-label="Transfer successful"
>
  <defs>
    <linearGradient id="g-green" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stopColor="#18f53dff"/>  
      <stop offset="1" stopColor="#07ad15ff"/> 
    </linearGradient>

    <filter id="f-shadow" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#064e3b" floodOpacity="0.12"/>
    </filter>
  </defs>

  {/*<!-- Outer circle with gradient -->*/}
  <circle cx="32" cy="32" r="28" fill="url(#g-green)" filter="url(#f-shadow)" />

  {/*<!-- Inner subtle ring to add depth -->*/}
  <circle cx="32" cy="32" r="22" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />

  {/*<!-- White checkmark -->*/}
  <path
    d="M20 33.5 L28.5 42 L44 26"
    fill="none"
    stroke="#FFFFFF"
    strokeWidth="4.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />

  {/*<!-- Optional inner glow for premium look -->*/}
  <ellipse cx="22" cy="20" rx="8" ry="4" fill="rgba(255,255,255,0.06)" transform="rotate(-30 22 20)"/>
</svg>
</>
  )
}

export default Succes
