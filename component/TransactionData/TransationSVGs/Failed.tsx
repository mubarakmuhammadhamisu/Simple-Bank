import React from 'react'

const Failed = ({width="50", height="50"}) => {
  return (
    <svg
  xmlns="http://www.w3.org/2000/svg"
  width={width}
  height={height}
  viewBox="0 0 60 60"
  aria-label="Transaction Failed"
>
  <defs>
    <linearGradient id="g-failed" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stopColor="#FF7474"/>
      <stop offset="1" stopColor="#D90000"/>
    </linearGradient>

    <filter id="shadow-failed" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#7a0000" floodOpacity="0.15"/>
    </filter>
  </defs>

  <circle cx="30" cy="30" r="26" fill="url(#g-failed)" filter="url(#shadow-failed)" />
  <circle cx="30" cy="30" r="20" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />

  <line x1="22" y1="22" x2="38" y2="38" stroke="white" strokeWidth="4" strokeLinecap="round"/>
  <line x1="38" y1="22" x2="22" y2="38" stroke="white" strokeWidth="4" strokeLinecap="round"/>
</svg>

  )
}

export default Failed
