import FormBottun from '@/component/LogInAndSignUp/FormBottun'
import BText from '@/component/LogInAndSignUp/BText'
import Input from '@/component/LogInAndSignUp/Input'
import CardHeard from '@/component/LogInAndSignUp/CardHeard'
import { loginInputs, InputData } from '@/utils/inputData'

const Card = () => {
  return (
    <div id='card-div' className=' w-full max-w-sm h-auto bg-white rounded-lg shadow-lg p-5 flex flex-col items-center border border-blue-200'>

        <CardHeard Page='Log In' Infor='Enter your email below to login to your account' />
        

        <div id='input-btn-div' className='w-full flex flex-col p-2.5'>
          {loginInputs.map((input: InputData ) => (
            <Input key={input.Id} Type={input.Type} Class='mb-5' Name={input.Name} Id={input.Id} Placeholder={input.Placeholder} Label={input.Label}/>
          ))}
        
          <FormBottun type='submit' text='Create account' />
          <BText Text="Don't have an account?" LinkTo='/register' LinkText=' Sign up'/>
        </div>

    </div>
  )
}

export default Card
