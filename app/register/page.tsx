import React from 'react'
import Link from 'next/link'
import FormBottun from '@/component/FormBottun'
import BText from '@/component/BText'

const SignUp = () => {
  return (
    <div id='body-div' className='w-full min-h-screen bg-[#E5E7FA] flex justify-center items-center'>
      <div id='card-div' className=' w-full max-w-sm h-auto bg-white rounded-lg shadow-lg p-4 flex flex-col items-center border border-blue-200'>

        <div id='head-div' className=' w-full mb-4 text-center '>
          <h1 id='head-text' className='font-bold text-3xl font-sans mb-2.5 text-blue-700'>brand name</h1>
          <h2 className='text-2xl font-sans font-bold mb-4 text-blue-700'>Create an account</h2>
          <p className='text-blue-500 text-sm'>Enter your information to create an account</p>
        </div>

        <div id='input-btn-div' className='w-full flex flex-col p-2.5'>
          <label htmlFor="input-box" className='font-bold'>Username</label>
          <input type='text' name='Username' placeholder='Username' id='input-box' className='w-full bg-[#E5E7FA] p-2.5 rounded-lg mb-2.5 border border-blue-300 focus:border-blue-300 focus:outline-blue-600'/>
          <label htmlFor="Email" className='font-bold'>Email</label>
          <input type='email' placeholder='Email' id='Email' className='w-full bg-[#E5E7FA] p-2.5 rounded-lg mb-2.5 border border-blue-300 focus:border-blue-300 focus:outline-blue-600'/>
          <label htmlFor="Password" className='font-bold'>Password</label>
          <input type='password' placeholder='Password' id='Password' className='w-full bg-[#E5E7FA] p-2.5 rounded-lg mb-2.5 border border-blue-300 focus:border-blue-300 focus:outline-blue-600'/>

          <FormBottun type='submit' text='Create account' />
         <BText Text='Already have an account?' LinkTo='/login' LinkText='Log In'/>
        </div>

      </div>
    </div>
  )
}

export default SignUp
