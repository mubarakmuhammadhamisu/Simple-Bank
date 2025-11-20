import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import FeatureCard from './FeatureCard'
import MaxWidth from '@/component/Max-width'

const FAF = () => {
  return (
    <div >
      <MaxWidth className='max-w-6xl rounded-2xl pt-0 px-12'> 

        <h2 className='text-lg font-bold pl-2'>Features</h2>
        <div className='flex flex-col sm:flex-row gap-5 flex-wrap w-full justify-between'>
         <FeatureCard imageSrc='/10M.webp' altText='feature1' title='10M+' description='Users'/>
         <FeatureCard imageSrc='/security.webp' altText='feature2' title='Guaranteed' description='Security' />
         <FeatureCard imageSrc='/uptime.webp' altText='feature3' title='Reliable' description='Uptime & protection' imgsub='Reliable' className='ml-3' />
        </div>
      
      </MaxWidth>
        <h2 className='text-lg font-bold pl-2 mt-5'>Financial Stats </h2>
        <footer className='w-full bg-gradient-to-r from-blue-600 to-blue-900 rounded-xl shadow-2xl h-40 flex-col flex justify-center items-center'>
          <h2 className='text-lg font-bold text-white'> Ready to take control of your finances</h2>
          <div className='flex mt-7 gap-4 items-center'>
            <Link href='#' className='text-white'>Privcy</Link>
           <button className='h-10 w-28 p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition'>
             <Link href='register'>Join Now</Link >
           </button>
            <Link href='#' className='text-white'>Contact</Link>
          </div>
        </footer>
    </div>
  )
}

export default FAF
