import React from 'react'
import Link from 'next/link'

type LinkinDataType={
  LinkData:{
    label:string;
    href:string;
  }[]
}
const NavLink = ({LinkData}:LinkinDataType) => {
  return (
    <ul className='flex w-full justify-end items-center gap-6  border '>
      {LinkData.map((link)=>(
        <li key={link.href} className=' px-2 py-2 hover:bg-blue-300 m rounded-lg text-gray-500 hover:text-white transition'>
            <Link href={link.href} className='  '>{link.label}</Link>
        </li>))}
    </ul>
  )
}

export default NavLink
