import DashBoardCard from './DashBoardCard'
import ListE from './ListE'

const RTCard = () => {
  return (
    <DashBoardCard title='Recent Transactions' className='py-4'>
        <ListE>
            <h3 className='font-bold'>Starbucks</h3>
            <p className='text-sm text-gray-500'>Today</p>
        </ListE>

        <ListE>
            <h3 className='text-sm text-gray-500'>Coffee</h3>
            <p className='text-sm text-gray-500'>Todan</p>
        </ListE>

        <ListE>
            <h3 className='font-bold'>Amazon</h3>
            <p className='text-sm text-gray-500'>Bills</p>
        </ListE>

        <ListE>
            <h3 className='font-bold'>Utility Bill</h3>
            <p className='text-sm text-green-500'>$12.007</p>
        </ListE>

        <ListE>
            <h3 className='font-bold'>Salary<span className='text-sm text-gray-500'>Deposit</span></h3>
            <p className='text-sm text-red-500'>$713.000</p>
        </ListE>
    </DashBoardCard>
  )
}

export default RTCard
