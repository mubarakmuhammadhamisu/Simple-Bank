import React from 'react'
import PageTemp from '@/component/PageTemp'
import Tb from '@/component/TransactionData/ATable'
import  Input from '@/component/LogInAndSignUp/Input'
import TransferCard from '@/component/TransactionData/TransferCard'


const TransferPage = () => {
  return (
    <PageTemp>
        {/*<p className=' m-0 w-full bg-blac text-black font-bold text-md'>Make a Transfer</p>*/}
        <TransferCard />
        <p className=' m-0 w-full bg-blac text-black font-bold text-md'>Recent Transfer</p>
        <Tb isTransfer={true}/>
    </PageTemp>
  )
}

export default TransferPage
