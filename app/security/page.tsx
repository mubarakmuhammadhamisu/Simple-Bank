import MaxWidth from '@/component/Max-width'
import NavBar from '@/component/navba/NavBar'
import NavLogic from '@/component/navba/NavLogic'

const SecurityPage = () => {
  return (
    <div className='w-full min-h-screen'>
      <MaxWidth>
        <NavBar className='flex w-11/12 sm:w-12/12 md:w-11/12 lg:w-10/12'>
          <NavLogic />
        </NavBar>
        <div className='max-w-3xl mx-auto px-6 py-20'>
          <h1 className='text-4xl font-bold text-blue-900 mb-4'>Security</h1>
          <p className='text-gray-500 text-lg mb-10'>How SimpliBank keeps your money and data safe.</p>

          <div className='space-y-8'>
            {[
              { title: '256-bit Encryption', desc: 'All data transmitted between you and SimpliBank is encrypted using industry-standard TLS 1.3 and AES-256 encryption, the same standard used by major financial institutions worldwide.' },
              { title: 'Two-Factor Authentication', desc: 'Add an extra layer of protection to your account. Every login can require a one-time code sent to your phone or email before access is granted.' },
              { title: '99.99% Uptime', desc: 'Our infrastructure is built on redundant systems across multiple data centres, ensuring your account is always accessible when you need it.' },
              { title: 'Fraud Monitoring', desc: 'Our systems continuously analyse your transaction patterns. Any suspicious activity triggers an instant alert and temporary account freeze until you confirm it.' },
              { title: 'Zero Data Selling', desc: 'We do not sell, rent, or share your personal or financial data with third-party advertisers. Ever.' },
            ].map((item) => (
              <div key={item.title} className='bg-white rounded-2xl shadow p-6 border border-gray-100'>
                <h2 className='text-xl font-bold text-blue-800 mb-2'>{item.title}</h2>
                <p className='text-gray-600 leading-relaxed'>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </MaxWidth>
    </div>
  )
}

export default SecurityPage
