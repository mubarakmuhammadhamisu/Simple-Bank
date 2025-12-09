import React from 'react'
import PageTemp from '@/component/PageTemp'
import Tb from '@/component/TransactionData/ATable'
const DPageTemp = ({children}) => {
  return (
    <PageTemp>
      {children}
      <p className=' m-0 w-full bg-blac text-black font-bold text-md'>Recent Activity</p>
      <Tb />
    </PageTemp>
  )
}

export default DPageTemp
