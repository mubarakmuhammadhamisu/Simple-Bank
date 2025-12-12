'use client'

import { useState } from 'react'
import {transctionData, RecentActivityHeaders, TransferHeaders} from '@/utils/BankData'
import DetailsCard from '@/component/TransactionData/DetailsCard'
import Succes from '@/component/TransactionData/TransationSVGs/Succes'
import Pending from './TransationSVGs/Pending'
import Failed from './TransationSVGs/Failed'

type Props = {
  isTransfer?:boolean,
  Row?:number;
}
const Tb = ({isTransfer = false, Row=6}:Props) => {
    const [showDetails, setShowDetails] = useState(false);
    const [data, setData] = useState(null);
    const handleRowClick = (item) => {
      setShowDetails(true);
      setData(item);
    };
    const filteredData = isTransfer
  ? transctionData.filter(item => item.description.toLowerCase() === 'transfer')
  : transctionData;

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
                  <tr onClick={()=>handleRowClick(item)} key={item.id} className={`border-t cursor-pointer ${index % 2 === 0 ? 'border-gray-300 bg-gray-300' : 'border-gray-400'}`}>
                    <td className='p-2'>{item.date}</td>
                    {!isTransfer && <td className='p-2'>{item.description}</td>}
                    {!isTransfer && <td className='p-2'>{item.type}</td>}
                    {isTransfer && <td className='p-2'>{item.receiver}</td>}
                    {isTransfer && <td className='p-2'>{item.account}</td>}
                    <td className={`p-2 font-bold ${!isTransfer ? (item.type === 'Credit' ? 'text-green-500' : 'text-red-500') : isTransfer && 'text-blue-500'}`}>{item.amount}</td>
    
                    <td className='p-2'>{
                      item ?.status.toLowerCase() === 'completed'? <Succes width='20' height='20'/> : 
                      item ?.status.toLowerCase() === 'pending' ? <Pending width='22' height='22'/> : 
                      <Failed width='20' height='20'/>
                      }
                    </td>

                     </tr>
                ))}
              </tbody>
            </table>
            {showDetails && <DetailsCard setShowDetails={setShowDetails} data={data}/>}
            
          </div>
    
  )
}

export default Tb
