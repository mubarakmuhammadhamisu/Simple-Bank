import MaxWidth from '@/component/Max-width'
import NavLinkWrapper from '@/component/SideBar/NavLinkWrapper'
import DashNavBar from '@/component/dashboard/DashNavBar'


const page = () => {
  return (
    <div className='w-full min-h-full'>
      
      <DashNavBar />

      <MaxWidth className='bg-blue-500 mt-28'>
        <div className='grid  md:grid-cols-5 gap-3 w-full h-screen sm:mx-auto sm: '>

          {/*<div className='hidden md:flex flex-col gap-4 w-full h-full bg-red-600 rounded-xl min-w-36'>
            <div className='w-full h-20 border border-b-1'></div>
          </div>*/}
          <NavLinkWrapper TorF={false}/>

          <div  className='w-full h-full bg-pink-600 col-span-4 rounded-xl'></div>
        </div>
      </MaxWidth>
    </div>
  )
}

export default page
