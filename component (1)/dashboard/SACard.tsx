import React from 'react'
import DashBoardCard from './DashBoardCard'

const SACard = () => {
  return (
    <DashBoardCard title='Spending Analytics' className=''>
        <svg width={180} height={180} viewBox='-60 -60 150 150' className='self-center'>
            <circle cx="20" cy="20" r="40" stroke='#1e3a8a' fill="none" strokeWidth={24}/>
            <circle cx="20" cy="20" r="40" stroke='#3b82f6' fill="none" strokeWidth={24} 
            strokeDasharray='210' transform='rotate(-100 20 20)' />
            <circle cx="20" cy="20" r="40" stroke='#60a5fa' fill="none" strokeWidth={24} 
            strokeDasharray='200' transform='rotate(-70 20 20)' />
        </svg>
        {/*strokeLinecap='round'*/}
        <div className='flex justify-between'>
            <p className='text-xs text-gray-500 text-bold'>Groocries</p>
            <p className='text-xs text-gray-500'>Entertaiment</p>
            <p className='text-xs text-gray-500'>Rent</p>
        </div>
    </DashBoardCard>
  )
}

export default SACard
