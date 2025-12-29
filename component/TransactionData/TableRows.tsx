import React from 'react'
import Succes from '@/component/TransactionData/TransationSVGs/Succes'
import Pending from '@/component/TransactionData/TransationSVGs/Pending'
import Failed from './TransationSVGs/Failed'

const TableRows = ({item, index, isTransfer, setShowDetails, setData}) => {

    const handleRowClick = (item) => {
          setShowDetails(true);
          setData(item);
        };

  return (
    <tr onClick={()=>handleRowClick(item)}  className={`border-t cursor-pointer ${index % 2 === 0 ? 'border-gray-300 bg-gray-300' : 'border-gray-400'}`}>
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
  )
}

export default TableRows
