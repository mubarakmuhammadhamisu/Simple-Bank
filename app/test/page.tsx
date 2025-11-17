import NavBar from '@/component/NavBar'
import MaxWidth from '@/component/Max-width'
import LandindPageBody from '@/component/LandindPageBody'


const page = () => {
  return (
      <div className='w-full min-h-screen bg-[#E5E7FA] '>
          <NavBar className='fixed top-10 left-1/2 -translate-x-1/2 -translate-y-1/2' />
          <MaxWidth className='mt-28 lg:mt-'>
            <LandindPageBody />
          </MaxWidth>      
      </div>
  )

}

export default page
