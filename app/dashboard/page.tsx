"use client"


import Sidebar from '@/components/Sidebar'
import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='w-full h-full bg-blue-100 flex flex-row flex-wrap '>
       <Sidebar/>
       <div>
       <div>
        <Image src={'/elephant.png'} alt='elephant' width={500} height={500} className='bg-blue-100 px-5  border rounded-full shadow-2xl shadow-blue-50'/>
       </div>
       </div>
    </div>
  )
}

export default page