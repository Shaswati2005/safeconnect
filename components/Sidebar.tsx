"use client"

import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='h-screen w-[230px]  hidden md:block fixed left-0 top-0 bg-pink-100'>
    <div className=' w-full h-full pb-5 flex  flex-col items-start pl-6  gap-10 bg-pink-100 shadow-lg text-lg font-medium pt-10  justify-between shadow-pink-100'>
        <div className='flex flex-col gap-10 '>
            <div className='h-fit px-4 py-2 hover:border hover:rounded-xl w-[180px] hover:shadow-xl hover:shadow-pink-200 hover:scale-105 transition-all'>
            <Link href={"#"}>
            profile
            </Link>

            </div>
        
        <div className='flex flex-col items-start gap-4 '>
            <Link href={"/dashboard"} className='h-fit px-4 py-2 hover:border hover:rounded-xl w-[180px] hover:shadow-xl hover:shadow-pink-200 hover:scale-105 transition-all'>
            Dashboard
            </Link>
            <Link href={"/test"} className='h-fit px-4 py-2 hover:border hover:rounded-xl w-[180px] hover:shadow-xl hover:shadow-pink-200 hover:scale-105 transition-all'>
             Take test
            </Link>
            <Link href={"#"} className='h-fit px-4 py-2 hover:border hover:rounded-xl w-[180px] hover:shadow-xl hover:shadow-pink-200 hover:scale-105 transition-all'>
             Suggestions
            </Link>
            <Link href={"#"} className='h-fit px-4 py-2 hover:border hover:rounded-xl w-[180px] hover:shadow-xl hover:shadow-pink-200 hover:scale-105 transition-all'>
             settings
            </Link>

        </div>
        </div>
        <div>
        <Link href={"#"} className='h-fit px-4 py-2 hover:border hover:rounded-xl w-[180px] hover:shadow-xl hover:shadow-pink-200 hover:scale-105 transition-all'>
             logout
            </Link>

        </div>
       

    </div>
    </div>
  )
}

export default Sidebar