import {trendsData } from '@/utils/LinkData'

const SpendingTrendsChart = () => {
  const max = Math.max(...trendsData.map(t => t.value));

  return (
    <div className="w-full bg-blue-00">
      <h2 className="text-xl font-bold text-gray-800 ">Spending Trends</h2>
      
      <div className="h-36 flex items-end justify-around p- pt-0"> 
        {trendsData.map((trend, index) => {
          const heightPercentage = Math.round((trend.value / max) * 90) + 10; // 10% min height
          
          const barColor = index % 2 === 0 ? 'bg-blue-600' : 'bg-blue-800';

          return (
            <div 
              key={trend.category} 
              className="flex flex-col items-center h-28 w-8 bg-green-00"
            >
              <div className="flex-grow w-ful flex items-end justify-center">
                <div 
                  className={`w-6 rounded-t transition-all duration-700 ease-out ${barColor}`}
                  style={{ height: `${heightPercentage}%` }}
                ></div>
              </div>

              <p className="text-xs text-gray-600 mt-2 text-center w-full truncate">
                {trend.category}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SpendingTrendsChart