import { Sidebar } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <section className='w-screen h-screen flex flex-col items-center justify-between bg-skin-10 '>
        <div className='w-fit h-fit '></div>
        <div className=' w-full h-full flex flex-col items-start justify-between'>
            <div className='w-full h-fit flex flex-col items-start justify-between'></div>
        </div>
        <div className='w-full h-20 m-10 border-1 border-violet-10 rounded-5xl '></div>
       


    </section>
  )
}

export default page