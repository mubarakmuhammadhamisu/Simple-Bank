import MaxWidth from '@/component/Max-width'
import NavBar from '@/component/navba/NavBar'
import NavLogic from '@/component/navba/NavLogic'

const AboutPage = () => {
  return (
    <div className='w-full min-h-screen'>
      <MaxWidth>
        <NavBar className='flex w-11/12 sm:w-12/12 md:w-11/12 lg:w-10/12'>
          <NavLogic />
        </NavBar>
        <div className='max-w-3xl mx-auto px-6 py-20'>
          <h1 className='text-4xl font-bold text-blue-900 mb-4'>About SimpliBank</h1>
          <p className='text-gray-500 text-lg mb-10'>Banking that puts people first.</p>

          <div className='bg-white rounded-2xl shadow p-8 border border-gray-100 mb-8'>
            <h2 className='text-2xl font-bold text-blue-800 mb-4'>Our Mission</h2>
            <p className='text-gray-600 leading-relaxed mb-4'>
              SimpliBank was founded on a simple belief — that modern banking should be transparent, accessible, and built around the customer, not around fees.
            </p>
            <p className='text-gray-600 leading-relaxed'>
              We strip away the complexity of traditional banking and give you a clear, honest view of your finances. No hidden charges, no jargon, no frustration.
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8'>
            {[
              { stat: '2M+', label: 'Happy customers' },
              { stat: '$4B+', label: 'Transactions processed' },
              { stat: '50+', label: 'Countries supported' },
            ].map((item) => (
              <div key={item.label} className='bg-blue-900 text-white rounded-2xl p-6 text-center'>
                <p className='text-3xl font-bold mb-1'>{item.stat}</p>
                <p className='text-blue-200 text-sm'>{item.label}</p>
              </div>
            ))}
          </div>

          <div className='bg-white rounded-2xl shadow p-8 border border-gray-100'>
            <h2 className='text-2xl font-bold text-blue-800 mb-4'>Our Values</h2>
            <ul className='space-y-3 text-gray-600'>
              {['Transparency in every transaction', 'Security without compromise', 'Simplicity as a feature, not an afterthought', 'Community — we grow when you grow'].map((v) => (
                <li key={v} className='flex items-start gap-3'>
                  <span className='text-blue-600 font-bold mt-0.5'>✓</span>
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </MaxWidth>
    </div>
  )
}

export default AboutPage
