import Link from 'next/link'
import BanknoteIcon from './BankLogo'


type Props = {
  className?: string;
}


const BankLogoAndName = ({className}:Props) => {
  return (
      <Link href='/' className={
        `flex justify-between items-center gap-3 ${className}`
        }>
      <BanknoteIcon />
        <h2 className='text-lg font-bold text-blue-900'>SimpliBank</h2>
      </Link> 
  )
}

export default BankLogoAndName
