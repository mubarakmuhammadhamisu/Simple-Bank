import PageTemp from '@/component/PageTemp'
import Tb from '@/component/TransactionData/ATable'

const AnalyticsPage = () => {
  return (
    <PageTemp>
      <div className='w-full bg-white rounded-xl shadow-lg p-6 mb-6'>
        <h1 className='text-3xl font-bold mb-2 text-blue-900'>Analytics</h1>
        <p className='text-gray-500 mb-6'>An overview of your spending and income patterns.</p>

        {/* Summary cards */}
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8'>
          {[
            { label: 'Total Spent', value: '₦ 124,300', color: 'bg-red-50 text-red-700' },
            { label: 'Total Received', value: '₦ 340,000', color: 'bg-green-50 text-green-700' },
            { label: 'Pending', value: '₦ 12,500', color: 'bg-yellow-50 text-yellow-700' },
            { label: 'Net Balance', value: '₦ 215,700', color: 'bg-blue-50 text-blue-700' },
          ].map((card) => (
            <div key={card.label} className={`rounded-xl p-4 ${card.color}`}>
              <p className='text-xs font-semibold uppercase tracking-wide opacity-70 mb-1'>{card.label}</p>
              <p className='text-xl font-bold'>{card.value}</p>
            </div>
          ))}
        </div>

        {/* Spending by category */}
        <h2 className='text-lg font-bold mb-4 text-gray-800'>Spending by Category</h2>
        <div className='space-y-3 mb-8'>
          {[
            { label: 'Bills', pct: 38 },
            { label: 'Groceries', pct: 24 },
            { label: 'Entertainment', pct: 18 },
            { label: 'Transfers', pct: 12 },
            { label: 'Other', pct: 8 },
          ].map((cat) => (
            <div key={cat.label} className='flex items-center gap-3'>
              <span className='w-28 text-sm text-gray-600 shrink-0'>{cat.label}</span>
              <div className='flex-1 bg-gray-100 rounded-full h-3'>
                <div
                  className='bg-blue-600 h-3 rounded-full transition-all'
                  style={{ width: `${cat.pct}%` }}
                />
              </div>
              <span className='text-sm font-semibold text-gray-700 w-10 text-right'>{cat.pct}%</span>
            </div>
          ))}
        </div>
      </div>

      <p className='m-0 w-full text-black font-bold text-md mb-2'>All Transactions</p>
      <Tb />
    </PageTemp>
  )
}

export default AnalyticsPage
