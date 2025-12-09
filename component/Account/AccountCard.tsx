import { PiggyBank, Wallet, Briefcase, LifeBuoy, CreditCard, Plane } from "lucide-react";
import IconHolder from "./Icons";

type AccountardProps = {
  title?: string;
  price?: string;
  text?: string;
  priceClass?: string;
  bText?: string;
  bClass?: string;
  isButton?: boolean;
  icon?: string;
} 
const AccountCard = ({title, price, text, priceClass = '', bText, bClass, isButton = false, icon}: AccountardProps) => {

  return (
    <div className='bg-white min-h-48 md:w-58 xl:w-60   text-black p-4 rounded-2xl flex flex-col shadow-lg'>
        <div className='flex items-center gap-2'>
            <IconHolder type={`${icon}`}/>
            <p className='font-bold'>{title}</p>
        </div>
        
        <p className={` font-bold mt-3 mb-2 ${priceClass === ''? 'text-xl': priceClass}`}>{price}</p>
        <p className='text-xs text-gray-400'>{text}</p>
        <div className={`mt-4 w-full flex justify-end ${bClass}`}>
            {isButton && <button className='bg-blue-500 hover:bg-blue-400 text-white px-6 py-1.5 rounded-3xl'>{bText}</button>}
        </div>
   </div>
  )
}

export default AccountCard
