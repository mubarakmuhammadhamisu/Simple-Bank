import React from 'react'
import PageTemp from "@/component/PageTemp"
import Tb from '@/component/TransactionData/ATable'
import PaymentCard from '@/component/Payments/PaymentCard'
const PaymentPage = () => {
  return (
   <PageTemp>
    <PaymentCard />
    <p className=' m-0 w-full bg-blac text-black font-bold text-md'>Pending Payment</p>
    <Tb Row={3}/>
    <Tb Row={3}/>
   </PageTemp>
  )
}

export default PaymentPage
