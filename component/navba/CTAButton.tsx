import React from 'react'
import Link from 'next/link'
type props ={
  href: string;
  className?: string
}

const CTAButton = ({href, className}: props) => {
  return (
    <button className={`w-40 bg-linear-to-r from-blue-900 to-blue-300 hover:bg-linear-to-l 
      hover:form-blue-300 hover:to-blue-800 text-white px-2 py-1.5 rounded-xl transition ${className}`}>
      <Link className='text-lg' href={href}>Create Account</Link>
    </button>
  )
}

export default CTAButton
