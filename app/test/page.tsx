import NavBar from '@/component/NavBar'
import MaxWidth from '@/component/Max-width'
import LandindPageBody from '@/component/LandindPageBody'
import FAF from '@/component/FeatureAndFooter/FAF'


const page = () => {
  return (
      <div className='w-full min-h-screen bg-[#E5E7FA] '>
          <MaxWidth className='mt-28 lg:mt- bg-amber-00'>
            <NavBar className='fixed top-10 left-1/2 -translate-x-1/2 -translate-y-1/2' />
            <LandindPageBody />
               <FAF />
          </MaxWidth>      
      </div>
  )

}

export default page
