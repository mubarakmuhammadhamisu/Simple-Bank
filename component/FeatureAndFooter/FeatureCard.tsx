 import Image from 'next/image'
 
 const FeatureCard =({imageSrc, altText, title, description, className,imgsub }:
     {imageSrc: string, altText: string, title: string, description: string, className?:string, imgsub?:string}) => {
        return(
            <div  className={`flex items-center rounded-2xl shadow-2xl 
                p-4 pl-0 sm:min-w-60 bg-white hover:scale-105 transition-all 
                hover:bg-white/10 hover:backdrop-blur-md`}>
                <div  className='flex flex-col items-center'>
                    <Image src={imageSrc} alt={altText} width={100} height={100} />
                    {imgsub && <p className='ml-4 text-blue-500'>{imgsub}</p>}
                </div>
                <div className='flex flex-col justify-center'>
                    <h3 className={`text-lg font-bold mt-7 ${className}`}>{title}</h3>
                    <p className='text-blue-500 mt-2'>{description}</p>
                </div>   
            </div>
        )
    }

    export default FeatureCard