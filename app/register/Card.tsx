import FormBottun from '@/component/LogInAndSignUp/FormBottun'
import BText from '@/component/LogInAndSignUp/BText'
import Input from '@/component/LogInAndSignUp/Input'
import CardHeard from '@/component/LogInAndSignUp/CardHeard'
import { signupInputs, InputData } from '@/utils/inputData'

const Card = () => {
  return (
    <div id='card-div' className=' w-full max-w-sm h-auto bg-white rounded-lg shadow-lg p-4 flex flex-col items-center border border-blue-200'>

        <CardHeard Page='Create an account' Infor='Enter your information to create an account' />
        

        <div id='input-btn-div' className='w-full flex flex-col p-2.5'>
          {signupInputs.map((input: InputData ) => (
            <Input key={input.Id} Type={input.Type} Name={input.Name} Id={input.Id} Placeholder={input.Placeholder} Label={input.Label}/>
          ))}
        
          <FormBottun type='submit' text='Create account' />
          <BText Text='Already have an account?' LinkTo='/login' LinkText='Log In'/>
        </div>

    </div>
  )
}

export default Card
