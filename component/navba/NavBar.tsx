import BankLogoAndName from '../BankLogoAndName'


type Props={
  children?:React.ReactNode;
  className?:string;
}
const NavBar = ({children,className}:Props) => {
  return (
    <nav className={`min-w-80 bg-white shadow-lg p-4 fixed 
      top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-full
      justify-between items-center gap-6 mt-5 px-4 rounded-2xl z-10 
      md:gap-3 ${className}`}>
        <BankLogoAndName className='pr-2  sm:pr-3 lg:pr-28' />
        {children}
    </nav>
  )
}

export default NavBar
