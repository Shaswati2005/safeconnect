import { Link } from 'lucide-react'
import React from 'react'
import Image from 'next/image'

const Sidebaar = () => {
  return (
    <section className='w-[250px] h-full hidden lg:flex  lg:items-start lg:justify-start bg-violet-10 '>
      <div className='w-full h-full flex flex-col items-start justify-start gap-4 px-5 py-10 '>
        <div className='w-full h-fit flex flex-row items-center justify-start gap-2 text-skin-10 font-medium '>
         <Image
         src='/profile.svg'
         alt='profile'
         width={32}
         height={32}/>

         <h1>profile</h1>
         <hr className='border-1 border-skin-10'/>

        </div>


        <div className='w-full h-fit flex flex-row items-center justify-start gap-2 text-skin-10 font-medium'>
         <Image
         src='/home.svg'
         alt='home'
         width={32}
         height={32}/>

         <h1>home</h1>
         <hr className='border-1 border-skin-10'/>

        </div>


        <div className='w-full h-fit flex flex-row items-center justify-start gap-2 text-skin-10 font-medium'>
         <Image
         src='/alerts.svg'
         alt='alert'
         width={32}
         height={32}/>

         <h1>alert</h1>
         <hr className='border-1 border-skin-10'/>

        </div>

        <div className='w-full h-fit flex flex-row items-center justify-start gap-2 text-skin-10 font-medium'>
         <Image
         src='/alerts2.svg'
         alt='notification'
         width={32}
         height={32}/>

         <h1>notification</h1>
         <hr className='border-1 border-skin-10'/>

        </div>


        <div className='w-full h-fit flex flex-row items-center justify-start gap-2 text-skin-10 font-medium'>
         <Image
         src='/setting.svg'
         alt='setting'
         width={32}
         height={32}/>

         <h1>settings</h1>
         <hr className='border-1 border-skin-10'/>

        </div>

      </div>

    </section>
  )
}

export default Sidebaar