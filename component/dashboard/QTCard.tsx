import DashBoardCard from "./DashBoardCard"
import Input from "@/component/LogInAndSignUp/Input"
import CTAButton from "../navba/CTAButton"

const QTCard = () => {
  return (
    <DashBoardCard title='Quick Transfer' className='flex items-center justify-center'>
        <Input Placeholder='Recipint Email' Type='text' Name='recipint email' Class='p-0'/>
        <Input Placeholder='Amout' Type='text' Name='amout' Class='p-0'/>
        <CTAButton href='#' className='md:ml-0'/>
    </DashBoardCard>
)
}

export default QTCard
