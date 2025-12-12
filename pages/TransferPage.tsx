import React from 'react'
import PageTemp from '@/component/PageTemp'
import Tb from '@/component/TransactionData/ATable'
import  Input from '@/component/LogInAndSignUp/Input'
import TransferCard from '@/component/TransactionData/TransferCard'


const TransferPage = () => {
  return (
    <PageTemp>
        <p className=' m-0 w-full bg-blac text-black font-bold text-md'>Make a Transfer</p>
        <TransferCard />
        {/*<div className='w-full h-auto  m-0  bg-white border-2 border-dashed border-gray-300 rounded-xl px-6'>
          <div className='flex justify-between w-full gap-2 sm:gap-3 lg:gap-4'>
            <Input 
              Type='text' 
              Placeholder='Primary Checking ****1123' 
              Name='Account'
              Label='From Account' 
              Class='bg-white border-gray-400 placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-md'
              LabelClass='font-bold pl-2'
              classname='max-w- mt-2'
            />
            <Input 
              Type='text' 
              Placeholder='Savings Start****4456' 
              Name='Account' 
              Label='Recipient Details' 
              Class='bg-white border-gray-400 placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-md'
              LabelClass='font-bold pl-2'
              classname='max-w- mt-2'
            />
          </div>

          <div className='flex justify-between w-full gap-2 sm:gap-3 lg:gap-4'>
            <Input 
              Type='text' 
              Placeholder='Recipient or Account No' 
              Name='Account'
              Label='Recipient Account' 
              Class='bg-white border-gray-400 placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-md'
              LabelClass='font-bold pl-2'
              classname='max-w- mt-2'
            />
            <Input 
              Type='text' 
              Placeholder='Savings Start****4456' 
              Name='Account' 
              Label='Recipient Details' 
              Class='bg-white border-gray-400 placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-md'
              LabelClass='font-bold pl-2'
              classname='max-w- mt-2'
            />
          </div>
          <div className='flex justify-between w-full gap-2 sm:gap-3 lg:gap-4'>
          <Input class="border-b bg-white border-gray-400" Label="Amount" Placeholder="$0.00"/>
          <Input class="border-b bg-white border-gray-400"/>
          </div>
          
        </div>*/}
        <p className=' m-0 w-full bg-blac text-black font-bold text-md'>Recent Transfer</p>
        <Tb isTransfer={true}/>
    </PageTemp>
  )
}

export default TransferPage
