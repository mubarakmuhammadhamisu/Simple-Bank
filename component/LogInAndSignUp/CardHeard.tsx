import React from 'react'
import BanknoteIcon from '../BankLogo'

const CardHeard = ({Page, Infor}:{
    Page?: string;
    Infor?: string;
}) => {
  return (
    <div id='head-div' className=' w-full mb-4 text-center '>
        <div className='flex justify-center gap-3 items-center w-f'>
          <BanknoteIcon />
          <h1 id='head-text' className='font-bold text-2xl font-sans mb-2.5 text-blue-900 mt-2'>SimpliBank</h1>
        </div>
        <h2 className='text-2xl font-sans font-bold mb-4 text-black'>{Page}</h2>
        <p className='text-gray-800 font-mono text-sm'>{Infor}</p>
    </div>
  )
}

export default CardHeard
