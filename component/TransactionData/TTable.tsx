'use client'

import { useState } from 'react'
import {transctionData} from '@/utils/BankData'
import DetailsCard from '@/component/TransactionData/DetailsCard'
import Succes from './TransationSVGs/Succes'
import Pending from '@/component/TransactionData/TransationSVGs/Pending' 

type Props = {
  transfar:boolean,
}
const Tb = () => {
    const [showDetails, setShowDetails] = useState(false);
    const [data, setData] = useState(null);
    const handleRowClick = (item) => {
      setShowDetails(true);
      setData(item);
    };
    const filteredData = transctionData.filter(
        (item) => item.description.toLowerCase() === 'transfer'
    );
  return (
    <div className='w-full bg-gray-100 rounded-xl shadow-lg mb-8'>
            <table className='w-full text-sm'>
              <thead>
                <tr>
                  <th className='p-3 text-left'>Date</th>
                  <th className='p-3 text-left'> Recipient </th>
                  <th className='p-3 text-left'>Account</th>
                  <th className='p-3 text-left'>Amount</th>
                  <th className='p-3 text-left'>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, index) => (
                  <tr onClick={()=>handleRowClick(item)} 
                    key={item.id} 
                    className={`border-t cursor-pointer ${index % 2 === 0 ? 'border-gray-300 bg-gray-300' : 'border-gray-400'}`}>
                    <td className='p-2'>{item.date}</td>
                    <td className='p-2'>{item.receiver}</td>
                    <td className='p-2'>{item.description}</td>
                    <td className={`p-2 ${item.type === 'Credit' ? 'text-green-500' : 'text-red-500'}`}>{item.amount}</td>
                   <td className='p-2'>{
                      item ?.status.toLowerCase() === 'completed'? <Succes width='20' height='20'/> : 
                      item ?.status.toLowerCase() === 'pending' && <Pending width='22' height='22'/>
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
