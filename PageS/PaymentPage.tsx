import React from 'react'
import PageTemp from "@/component/PageTemp"
import Tb from '@/component/TransactionData/ATable'
import PaymentCard from '@/component/Payments/PaymentCard'
const PaymentPage = () => {
  return (
   <PageTemp>
    <PaymentCard />
    <p className=' m-0 w-full bg-blac text-black font-bold text-md'>Pending Payment</p>
    <Tb Row={3} filter={{status:"Pending"}}/>
    <p className=' m-0 w-full bg-blac text-black font-bold text-md'>Payment Hisory</p>
    <Tb Row={3} filter={{category: 'payment'}}/>
   </PageTemp>
  )
}

export default PaymentPage
