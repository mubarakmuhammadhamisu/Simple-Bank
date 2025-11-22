import React from 'react'
import Card from '@/component/AuthCard'
import NavBar from '@/component/navba/NavBar'
import MaxWidth from '@/component/Max-width'
import { signupInputs } from '@/utils/inputData'


const SignUp = () => {
  return (
    <>
    {/*<MaxWidth>
        <NavBar />
      </MaxWidth>*/}
    <div id='body-div' className=' w-full min-h-screen flex justify-center items-center'>
      
      <Card formData={signupInputs} 
        page='Create an account'
        infor='Enter your information to create an account' 
        Btext='Create account'
        text="Already have an account?"
        link='/login'
        linkT='Log in'
      />
</div>
</>
  )
}

export default SignUp
