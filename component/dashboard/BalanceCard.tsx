import Link from 'next/link'

const BalanceCard = () => {
  return (
    <div className="bg-[url('/bgbalance1.png')] bg-cover bg-no-repeat bg-center w-full h-60 pl-6 rounded-xl ">
        <h2 className='text-white text-md font-bold mt-4 pt-4 pb-2'>Account Overview</h2>
            <p className='text-blue-300 pb-2'>Total Balance</p>
            <h1 className='text-white text-3xl font-bold pb-6'>$12,450.75</h1>
            <p className='text-blue-300'>Recent incom: $1,500</p>

        <div className='flex justify-between pr-6'>
            <p className='text-blue-300'>Expenses: $450</p>
            <button className='bg-blue-600 rounded-3xl text-white px-3 py-2'><Link href='/analitics'>View Details</Link></button>
        </div>
    </div>
  )
}

export default BalanceCard
