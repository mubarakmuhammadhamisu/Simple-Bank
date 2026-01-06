import PageTemp from '@/component/PageTemp'
import BalanceCard from '@/component/dashboard/BalanceCard'
import RTCard  from '@/component/dashboard/RTCard'
import QTCard from '@/component/dashboard/QTCard'
import SACard from '@/component/dashboard/SACard'
import FHSCard from '@/component/dashboard/FHSCard'

const DashBoardPage = () => {
  return (
    <PageTemp>
      <BalanceCard /> 
            
            <div className="flex gap-4 lg:gap-4  flex-wrap w-full justify-center sm:justify-start lg:justify-between">

              <RTCard/>

              <SACard/>
   
              <QTCard/>

              <FHSCard/>
            </div>
    </PageTemp>
  )
}

export default DashBoardPage

