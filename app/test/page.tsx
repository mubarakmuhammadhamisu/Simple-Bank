import MaxWidth from '@/component/Max-width'
import NavLinkWrapper from '@/component/SideBar/NavLinkWrapper'


const Page = () => {
  return (
    <MaxWidth>
       <NavLinkWrapper TorF={false} 
      className=' md:flex min-w-44 items-center h-10/12 sm:h-10/12 md:h-10/12 fixed'/>

    </MaxWidth>
  )
}

export default Page
