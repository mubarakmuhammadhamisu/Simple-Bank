import NavBar from '@/component/navba/NavBar'
import MaxWidth from '@/component/Max-width'
import LandindPageBody from '@/component/LandindPageBody'
import FAF from '@/component/FeatureAndFooter/FAF'
import NavLogic from '@/component/navba/NavLogic'





const LNDpage = () => {
  return (
    <div className='w-full min-h-screen '>
          <MaxWidth className='mt- sm:mt-28 lg:mt- bg-amber-00'>
            <NavBar 
            className=' flex w-11/12 sm:w-12/12 md:w-11/12 lg:w-10/12'>
              <NavLogic/>
            </NavBar>
            <LandindPageBody />
               <FAF />    
          </MaxWidth>      
      </div>
  )
}

export default LNDpage
