import React from 'react'
import Link from 'next/link'

const CTAButton = () => {
  return (
    <button className='w-40 bg-gradient-to-r from-blue-900 to-blue-300 hover:bg-gradient-to-l hover:form-blue-300 hover:to-blue-800 text-white px-2 py-1.5 rounded-xl transition'>
      <Link className='text-lg' href={`/register`}>Create Account</Link>
    </button>
  )
}

export default CTAButton
