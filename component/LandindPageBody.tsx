import {Eye} from 'lucide-react';

import HeroText from "./LandinPage/HeroText"
import LinkCard from "./LinkCard"
import DataCard from './LandinPage/DataCard/DataCard';

const LandindPageBody = () => {
  return (
    <div className={
     `grid grid-cols-1 pt-16 auto-rows-auto  sm:grid-cols-4 lg:grid-cols-5 sm:grid-ros-2 w-full 
      sm:h-auto gap-7 sm:pt-6 py-6 sm:py-6  sm:px-4 bg-red-00 self-center xl:pr-0`
      }>

      <HeroText />

      <LinkCard />

      <div className='flex flex-col bg-gradient-to-l from-blue-500 to-blue-950 rounded-xl 
        shadow-xl col-span-2 min-w-60 max-w-96 sm:max-w-full min-h-40 ml-16 mr-11 sm:m-0'>
          <p className="p-6 pt-8 pb-2 text-white ">Primary checking Account</p>
          <div className='p-6 flex items-center h-20'>
            <h1 className="pt-0 text-3xl text-white sm:text-4xl font-bold ">
              $12,450.75
              </h1>
              <p><Eye className='ml-3 sm:ml-5  xl:ml-12 text-blue-300' size={50} strokeWidth={2}/></p>
          </div>
      </div>
        <DataCard />
    </div>
  )
} 

export default LandindPageBody