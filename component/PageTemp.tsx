import MaxWidth from '@/component/Max-width'
import NavLinkWrapper from '@/component/SideBar/NavLinkWrapper'
import DashNavBar from '@/component/dashboard/DashNavBar'


const PageTemp = ({children}) => {
  return (
    <div className='w-full min-h-screen'>
      
      <DashNavBar />

      <MaxWidth className='bg-blue-00 mt-28'>
        <div className='grid  md:grid-cols-5 gap-3 gl:w-11/12  h-screen sm:mx-auto sm: '>

          <NavLinkWrapper TorF={false} className='opacity-0 pointer-events-none md:pointer-events-auto  md:opacity-100 md:flex min-w-44 items-center h-10/12 sm:h-10/12 md:h-10/12 fixed'/>

          <div  className='ml-0  md:ml-44 flex flex-col justify  w-full h-full bg-pink-00 col-span-4 rounded-xl gap-6 py-6 sm:px-10'>
            {children}
          </div>
        </div>
      </MaxWidth>
    </div>
  )
}

export default PageTemp
