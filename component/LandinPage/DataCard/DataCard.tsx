import React from 'react';
import RecentActivity from './Activity'
import SpendingTrendsChart from './Chart'

const DataCard = () => {
  return (
      <div className=' flex justify-center  bg-purple-00 rounded-xl shadow-xl col-span-2 max-w-full min-h-40 ml-16 mr-11 sm:m-0'>
      <div className="w-full max-w-xl p-8 bg-white rounded-3xl shadow-2xl shadow-gray-300/60
        border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-8 
      ">
      
        <RecentActivity />

        <SpendingTrendsChart />
        
      </div>
    </div>
  );
};

export default DataCard;