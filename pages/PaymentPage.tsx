import React from 'react'
import PageTemp from "@/component/PageTemp"
import Tb from '@/component/TransactionData/ATable'

const PaymentPage = () => {
  return (
   <PageTemp>
    <p>Pending Payment</p>
    <Tb Row={3}/>
    <p>Payment History</p>
    <Tb Row={3}/>
   </PageTemp>
  )
}

export default PaymentPage
