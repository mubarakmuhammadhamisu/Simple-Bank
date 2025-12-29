"use client"
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import CTAButton from '@/component/navba/CTAButton'
import {useToggleStore} from '@/Store/toggleStore'


type LinkinDataType={
  LinkData:{
    label:string;
    href:string;
  }[];
};



const NavLink = ({LinkData}:LinkinDataType) => {
  const {isOpen} = useToggleStore();
  const pathname = usePathname();
  return (
    
    <ul className={`
      flex-col w-auto flex justify-center items-center absolute gap-6 p-6 top-20 right-4 rounded-2xl 
      shadow-2xl bg-white/80 sm:bg-transparent
       
      ${isOpen
          ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" 
          : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
        }
        sm:flex-row sm:justify-end sm:gap-4 sm:static sm:w-full sm:shadow-none 
        sm:opacity-100 sm:scale-100 sm:translate-y-0 sm:pointer-events-auto sm:p-0
        lg:gap-8
         `}>
      {LinkData.map((link)=>{
        const isActive = pathname === link.href;
        return(
        <li key={link.href} className={
          `px-1 py- text-gray-800 hover:border-b-2 hover:border-b-blue-600  hover:text-blue-600 hover:py-1 transition 
          ${isActive && 'border-b-2 border-b-blue-600'}`
          }>
          <Link href={link.href} className='  '>{link.label}</Link>
        </li>)
      })}
      <li><CTAButton href='/register' className='md:ml-6'/></li>
    </ul>
  )
}

export default NavLink
