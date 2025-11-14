import React from 'react'
import BanknoteIcon from './BankLogo'


const BankLogoAndName = () => {
  return (
    <div className='flex justify-between items-center gap-3'>
        <BanknoteIcon />
        <h2 className='text-lg font-bold text-blue-900'>SimpliBank</h2>
    </div>
  )
}

export default BankLogoAndName
