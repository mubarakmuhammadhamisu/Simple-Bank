import React from 'react'
import DashBoardCard from '@/component/dashboard/DashBoardCard'

const FHSCard = () => {
  return (
    <DashBoardCard title='Financial Health Score' className='relative'>
        <svg width={150} height={150} viewBox='-60 -60 150 150' className='self-center'>
            <circle cx="20" cy="20" r="40" stroke="#eee" fill="none" strokeWidth={5}/>
            <circle cx="20" cy="20" r="40" stroke="#60a5fa" fill="none" 
                strokeWidth={5} strokeDasharray='50 201' transform='rotate(-90 20 20)' strokeLinecap='round'/>
        </svg>
        <p className='absolute top-[45%] lift-[60%] right-[40%] bottom-[55%] text-blue-500 font-bold text-2xl'>745</p>
    </DashBoardCard>
  )
}

export default FHSCard
