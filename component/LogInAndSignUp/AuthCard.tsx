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
const Card = ({formData, page, infor, Btext, text, link, linkT}:CardProps) => {
  return (
    <div id='card-div' className=' w-full max-w-sm h-auto bg-white rounded-3xl shadow-lg p-5 flex flex-col items-center border border-blue-200'>

       <CardHeard Page={page} Infor={infor} />
        

        <div id='input-btn-div' className='w-full flex flex-col p-2.5'>
          {formData.map((input: InputData ) => (
            <Input key={input.Id} {...input} Class='mb-5'/>
          ))}
        
          <FormBottun type='submit' text={Btext} />
          <BText Text={text} LinkTo={link} LinkText={linkT}/>
        </div>

    </div>
   )
}

export default Card
