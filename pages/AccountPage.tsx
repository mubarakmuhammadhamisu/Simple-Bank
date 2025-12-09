import AllCards from '@/component/Account/AllCards'
import DPageTemp from '@/component/DPageTemp'
import PageTemp from '@/component/PageTemp'
import Tb from '@/component/TransactionData/ATable'


const AccountPage = () => {
  return (
    <PageTemp>
     <>
      <AllCards />
      <p className=' m-0 w-full bg-blac text-black font-bold text-md'>Recent Activity</p>
      <Tb />
     </>
    </PageTemp>
  )
}

export default AccountPage