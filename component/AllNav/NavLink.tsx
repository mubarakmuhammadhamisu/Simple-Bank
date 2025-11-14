"use client"
import { usePathname } from 'next/navigation'
import Link from 'next/link'

type LinkinDataType={
  LinkData:{
    label:string;
    href:string;
  }[]
};



const NavLink = ({LinkData}:LinkinDataType) => {
  const pathname = usePathname();
  return (
    <ul className='flex w-full justify-end items-center gap-6 '>
      {LinkData.map((link)=>{
        const isActive = pathname === link.href;
        return(
        <li key={link.href} className={
          `px-1 py- text-gray-500 hover:border-b-2 hover:border-b-blue-600  hover:text-blue-600 hover:py-1 transition 
          ${isActive && 'border-b-2 border-b-blue-600'}`
          }>
          <Link href={link.href} className='  '>{link.label}</Link>
        </li>)
      })}
    </ul>
  )
}

export default NavLink
