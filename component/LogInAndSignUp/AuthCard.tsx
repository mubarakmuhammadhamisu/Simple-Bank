"use client"
import { useRouter } from 'next/navigation'
import FormBottun from '@/component/LogInAndSignUp/FormBottun'
import BText from '@/component/LogInAndSignUp/BText'
import Input from '@/component/LogInAndSignUp/Input'
import CardHeard from '@/component/LogInAndSignUp/AuthHeard'

type InputData = {
  Id: string;
  Name: string;
  Label: string;
  Type: string;
  Placeholder: string;
};
type CardProps = {
  formData: InputData[];
  page: string;
  infor: string;
  Btext: string;
  text: string;
  link: string;
  linkT: string;
};

const isLoginPage = (page: string) =>
  page.toLowerCase().includes('log in') || page.toLowerCase().includes('login');

const Card = ({formData, page, infor, Btext, text, link, linkT}: CardProps) => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/dashboard');
  };

  const handleGuestAccess = () => {
    router.push('/dashboard');
  };

  const guestLabel = isLoginPage(page) ? 'Login without signing in' : 'Sign up without registering';

  return (
    <div id='card-div' className='w-full max-w-sm h-auto bg-white rounded-3xl shadow-lg p-5 flex flex-col items-center border border-blue-200'>

      <CardHeard Page={page} Infor={infor} />

      <div id='input-btn-div' className='w-full flex flex-col p-2.5'>
        <form onSubmit={handleSubmit}>
          {formData.map((input: InputData) => (
            <Input key={input.Id} {...input} Class='mb-5'/>
          ))}
          <FormBottun type='submit' text={Btext} />
        </form>

        {/* Divider */}
        <div className='flex items-center gap-2 my-2'>
          <div className='flex-1 h-px bg-gray-200'/>
          <span className='text-xs text-gray-400'>or</span>
          <div className='flex-1 h-px bg-gray-200'/>
        </div>

        {/* Guest access button */}
        <button
          type='button'
          onClick={handleGuestAccess}
          className='w-full py-2 px-3 rounded-3xl mb-1 border-2 border-blue-900 text-blue-900 text-sm font-semibold hover:bg-blue-50 transition cursor-pointer'
        >
          {guestLabel}
        </button>

        {/* Disclaimer */}
        <p className='text-center text-xs text-gray-400 mt-1 mb-3 leading-snug px-1'>
          🔒 <span className='font-medium text-gray-500'>Demo mode:</span> No real account is created. Your data is not stored or used for anything.
        </p>

        <BText Text={text} LinkTo={link} LinkText={linkT}/>
      </div>

    </div>
  )
}

export default Card
