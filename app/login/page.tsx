import React from 'react'
import Card from '@/component/LogInAndSignUp/AuthCard'
import NavBar from '@/component/navba/NavBar'
import MaxWidth from '@/component/Max-width'
import { loginInputs } from '@/utils/inputData'

const LogIn = () => {
  return (
    <div id='body-div' className='w-full min-h-screen flex justify-center items-center'>
      {/*<MaxWidth>
        <NavBar />
      </MaxWidth>*/}
      <Card formData={loginInputs} 
         page='Log In' 
         infor='Enter your email below to login to your account' 
         Btext='Log In'
         text="Don't have an account?"
         link='/register'
         linkT='Sign up'
       />
    </div>
  )
}

export default LogIn
