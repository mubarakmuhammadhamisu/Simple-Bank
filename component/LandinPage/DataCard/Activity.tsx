import {activityData } from '@/utils/LinkData'

const RecentActivity = () => (
  <div className="flex flex-col w-full"> 
    <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h2>
    
    <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm">
      {/* Table Header */}
      <div className="grid grid-cols-3 text-left bg-gray-50 text-gray-500 font-semibold p-1">
        <div className="pl-1 text-xs">Description</div>
        <div className='text-xs'>Date</div>
        <div className='text-xs'>Amount</div>
      </div>
      
      {/* Table Rows */}
      {activityData.map((activity, index) => (
        <div 
          key={index} 
          className={`grid grid-cols-3 text-left text-sm
            ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
            border-t border-gray-100 text-xs
          `}>
          <div className="pl-1 text-gray-800 font-medium truncate text-xs">{activity.description}</div>
          <div className="text-gray-600 text-xs">{activity.date}</div>
          <div className="font-semibold text-gray-700 text-xs">
            ${activity.amount.toFixed(2)}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default RecentActivity