"use client"



import React from 'react'
import Image from 'next/image'
import Sidebar from '@/components/Sidebar'
import BarChart from '@/components/Barchart'

const page = () => {
  return (
    <div className='w-full h-full bg-blue-100 flex flex-row items-center'>
        <Sidebar/>
       
       <div className='p-4 flex flex-row flex-wrap md:ml-64 '>
       <div className='flex flex-row '>
        <Image src={'/elephant.png'} alt='elephant' width={500} height={500} className='bg-blue-100 px-5  border rounded-full shadow-2xl shadow-blue-50'/>
        <BarChart/>
       

       </div>
       </div>
    </div>
  )
}

export default page