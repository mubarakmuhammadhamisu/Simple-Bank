import React from 'react'
import PageTemp from "@/component/PageTemp"
import Tb from '@/component/TransactionData/ATable'
import Input from "@/component/LogInAndSignUp/Input";

const PaymentPage = () => {
  return (
   <PageTemp>
    <div className='bg-white rounded-3xl shawdow-lg pl-10 p-5'>
        <p className='text-2xl font-bold'>Make a Payment</p>
        <Input Type='text' 
            Label="payee" 
            Name="payee"
            Class="self-center w-80"
            Placeholder='Amazon' 
            classname="flex w-9/12 justify-between gap-6" 
            LabelClass="text-md font-bold mt-4"
            isFull={false}
        />

        <Input Type='text' 
            Label="From AccounT" 
            Name="From AccounT"
            Class="self-center w-80" 
            Placeholder="Primary Checking ***1124"
            classname="flex w-9/12 justify-between gap-6" 
            LabelClass="text-md font-bold mt-4"
            isFull={false}
        />

        <Input Type='text' 
            Label="payee" 
            Name="payee"
            Class="self-center w-80" 
            Placeholder="$0.00"
            classname="flex w-9/12 justify-between gap-6" 
            LabelClass="text-md font-bold mt-4"
            isFull={false}
        />

        <Input Type='text' 
            Label="Amout" 
            Name="Amout"
            Class="self-center w-80"
            Placeholder="Coffee" 
            classname="flex w-9/12 justify-between gap-6" 
            LabelClass="text-md font-bold mt-4"
            isFull={false}
        />

        <div className="w-full flex justify-center items-center">
            <button className="bg-gradient-to-r from-blue-900 to-blue-600 text-white
          px-10 py-3 rounded-full font-semibold shadow 
          hover:opacity-90 transition" >Schedule Payment</button>
        </div>

    </div>
    <p>Pending Payment</p>
    <Tb Row={3}/>
    <Tb Row={3}/>
   </PageTemp>
  )
}

export default PaymentPage
