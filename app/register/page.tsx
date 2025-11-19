import React from 'react'
import Card from '@/component/AuthCard'
import NavBar from '@/component/NavBar'
import MaxWidth from '@/component/Max-width'
import { signupInputs } from '@/utils/inputData'


const SignUp = () => {
  return (
    <div id='body-div' className='w-full min-h-screen bg-[#E5E7FA] flex justify-center items-center'>
      <MaxWidth>
        <NavBar />
      </MaxWidth>
      <Card formData={signupInputs} 
        page='Create an account'
        infor='Enter your information to create an account' 
        Btext='Create account'
        text="Already have an account?"
        link='/login'
        linkT='Log in'
      />
</div>
  )
}

export default SignUp
