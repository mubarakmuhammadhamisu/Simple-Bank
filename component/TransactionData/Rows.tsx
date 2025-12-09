import React from 'react'

const RowsOfData = ({option, value}) => {
  return (
    <div className='flex justify-between mb-1.5 border-b border-gray-200 pb-1.5'>
        <span className='font-medium text-gray-700 text-sm'>{option}:</span>
        <span className='font-semibold text-gray-900 text-sm'>{value}</span>
    </div>
  )
}

export default RowsOfData
