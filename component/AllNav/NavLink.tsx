"use client"
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import CTAButton from '../AllNav/CTAButton'


type LinkinDataType={
  LinkData:{
    label:string;
    href:string;
  }[];
  isClicked: Boolean;
};



const NavLink = ({LinkData, isClicked}:LinkinDataType) => {
  const pathname = usePathname();
  return (
    <ul className={`
      flex flex-col w-auto justify-center items-center absolute gap-6 p-6 top-28 right-4 rounded-2xl 
      shadow-2xl bg-white 
      md:flex-row md:justify-end md:gap-4 md:static md:w-full md:shadow-none 
      ${isClicked 
          ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" 
          : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
        }
         md:opacity-100 md:p-0 lg:gap-8`}>
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
      <li><CTAButton /></li>
    </ul>
  )
}

export default NavLink
