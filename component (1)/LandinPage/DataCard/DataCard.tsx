import React from 'react';
import RecentActivity from './Activity'
import SpendingTrendsChart from './Chart'

const DataCard = () => {
  return (
    <div className='flex justify-center rounded-xl col-span-2 max-w-full min-h-40 mx-4 sm:mx-0'>
      <div className="w-full p-6 sm:p-8 bg-white rounded-3xl shadow-2xl shadow-gray-300/60
        border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <RecentActivity />
        <SpendingTrendsChart />
      </div>
    </div>
  );
};

export default DataCard;
