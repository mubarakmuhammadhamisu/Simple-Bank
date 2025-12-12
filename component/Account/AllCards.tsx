import AccountCard from "./AccountCard"

const AllCards = () => {
  return (
    <>
        <div className=' m-0 w-full bg-blac text-black font-bold text-md'>My Account</div>
        <div className={`w-full h-auto  m-0 grid grid-cols-1 sm:grid-cols-2 
        xl:px-14 lg:grid-cols-3 gap-4 px-4 md:px-0 py-4`}>
            <AccountCard  
                title='Primary Checking' 
                price='$12,450.75'  
                text="Account Number ***1234" 
                bText='View Activity' 
                priceClass='text-3xl' 
                isButton
            />

            <AccountCard  
                title='Savings Account' 
                price='$7,890.12' 
                text='Interest Rate' 
                bText='View Activity' 
                bClass='justify-start'
                icon='savings' 
                isButton
            />
            <AccountCard  
                title='Emergency Savings' 
                price='$1,890.12' 
                text="Account Number ***1234"
                icon='support'
            />
            <AccountCard  
                title='Business Checking' 
                price='$7,890.12' 
                text="Account Number ***1234" 
                bText='View Activity' 
                icon='business'
                isButton
            />
            <AccountCard 
                title='Credit Card' 
                price='-$1,590.12' 
                text='Interest Rate: 3.002' 
                bText='Make Payment' 
                icon='card'
                isButton
            />
            <AccountCard 
                title='Travel Credit Card' 
                price='$1,560.50' 
                text="Account Number ***1234" 
                bText='Make Payment' 
                icon='travel'
                isButton 
            />
        </div>
    </>
  )
}

export default AllCards
