import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div className='w-screen h-screen bg-pink-100'>
        <div className='flex flex-row items-center gap-10 p-7'>
        <div className='flex flex-col items-center justify-evenly w-full h-[350px]'>
            <div className='flex flex-col gap-2 '>upadate name
                <input type="text" className='border rounded-full px-4 hover:shadow-lg shadow-pink-200 hover:border-pink-200' />
            </div>
            <div className='flex flex-col gap-2 '>update user name
            <input type="text" className='border rounded-full px-4 hover:shadow-lg shadow-pink-200 hover:border-pink-200' />
            </div>
            <div className='flex flex-col gap-2 '>
                update mail id or facebook id
                <input type="text" className='border rounded-full px-4 hover:shadow-lg shadow-pink-200 hover:border-pink-200' />
                </div>
            <div className='flex flex-col gap-2 '>
                reset password
                <input type="text" className='border rounded-full px-4 hover:shadow-lg shadow-pink-200 hover:border-pink-200' />
                </div>
            <button className='border px-4 py-3 rounded-full bg-pink-200 hover:shadow-lg shadow-pink-200 hover:border-pink-200' >
                delete account
                <input type="button"  />
                </button>

        </div>
        <div className='bg-pink-100 hidden md:block'>
            <Image src={'/dancinggirl.png'} alt='dance' width={600} height={600}/>
        </div>


        </div>
        

    </div>
  )
}

export default page