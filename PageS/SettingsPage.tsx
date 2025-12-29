import PageTemp from '@/component/PageTemp'
import Proile from '@/component/profile/proile'
import Input from "@/component/LogInAndSignUp/Input";

const settingsPage = () => {
  return (
    <PageTemp>
      <div className='w-full bg-white rounded-xl shadow-lg p-6 mb-6'>
        <h1 className='text-3xl font-bold mb-6'>Settings Page</h1>
        <div className='flex mb-3 gap-5 p-4 shadow-md rounded-lg'>
          <button className='px-6 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-800'>profile</button>
          <button className='px-6 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-800'>scurity</button>
          <button className='px-6 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-800'>profile</button>
        </div>
        <div className='p-10 w-full flex items-center bg-white rounded-xl shadow-lg mb-6 hover:shadow-xl hover:scale-3d transition-all'>
          <Proile />
          <div className='ml-4 mb-2'>
            <h2 className='text-2xl font-bold'>@username</h2>
            <h2 className='text-lg font-bold ml-6'>Mubarak Muhammad Hamisu</h2>
            <p className='text-sm  ml-6'>mubarakmh@gmail.com</p>
          </div>      
        </div>
      </div>
        
        <div className='w-full bg-white rounded-2xl shadow-lg p-3.5'>
          <div className=' w-7/12 border-2'>
          <Input classname='flex justify-between ' 
          Type='text' 
          Name='chenge' 
          Class='border-gray-400' 
          Placeholder='Update your name' 
          Label='Full Name' 
          isFull={false}/>
          <div className='relative border'>
          <Input classname='flex justify-between' 
          Type='text' 
          Name='chenge' 
          Class='border-gray-400 focus:outline-none placeholder:font-bold' 
          Label='Username' 
          readonly={true} 
          value='@username' 
          isFull={false}/>
          <p className="absolute right-1 top-3 text-gray-400 cursor-pointer">ReadOnly</p>
          </div>
          
          <Input classname='flex justify-between ' 
          Type='text' 
          Name='chenge' 
          Class='border-gray-400' 
          Label='phone Number'
          Placeholder='Update phone number' 
          isFull={false}/>
          </div>
        </div>
        <p className='text-lg'>Manage your account settings and preferences here.</p>
    </PageTemp>
  )
}

export default settingsPage
