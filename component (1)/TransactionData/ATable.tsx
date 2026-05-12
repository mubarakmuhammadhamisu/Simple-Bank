'use client'

import { useState } from 'react'
import {filterTransactions} from '@/utils/TransactionFilter'
import {transactionData, RecentActivityHeaders, TransferHeaders} from '@/utils/BankData'
import DetailsCard from '@/component/TransactionData/DetailsCard'
import TableRows from '@/component/TransactionData/TableRows'



type TransactionFilter = {
  category?: string
  status?: 'Completed' | 'Pending' | 'Failed'
  type?: 'Credit' | 'Debit'
}
type Props = {
  isTransfer?:boolean;
  filter?: TransactionFilter;
  Row?:number;
}


const Tb = ({isTransfer = false, Row=6, filter}:Props) => {
    const [showDetails, setShowDetails] = useState(false);
    const [data, setData] = useState(null);
    
    const filteredData = filterTransactions(transactionData, filter);
    {/*const filteredData = isTransfer
  ? transctionData.filter(item => item.description.toLowerCase() === 'transfer')
  :  transctionData;*/}


   const Headers = isTransfer
  ? TransferHeaders
  : RecentActivityHeaders;


  return (   <div className='w-full bg-gray-100 rounded-xl shadow-lg mb-8'>
            <table className='w-full text-sm'>
              <thead>
                <tr>
                  {Headers.map((header)=>(
                    <th className='p-3 text-left' key={header}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredData.slice(0,Row === 0 ? filteredData.length : Row).map((item, index) => (
                  <TableRows key={item.id}  item={item} index={index} isTransfer={isTransfer} setData={setData} setShowDetails={setShowDetails}/>
                ))}
              </tbody>
            </table>
            {showDetails && <DetailsCard setShowDetails={setShowDetails} data={data}/>}
            
          </div>
    
  )
}

export default Tb
