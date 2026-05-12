import React from 'react'
import Link from 'next/link'

// Already have an account?
const BText = ({Text, LinkTo, LinkText}:
    {
        Text: string;
        LinkTo: string; 
        LinkText:string;
    }
) => {
  return (
    <>
        <p className='self-center'>{Text}  <Link href={LinkTo} className='text-blue-700 underline'>{ LinkText}</Link></p>
    </>
  )
}

export default BText
