import Sidebar from '@/components/Sidebar'
import React from 'react'

const page = () => {
  return (
    <section className='w-screen h-screen flex flex-row items-start bg-skin-10 justify-start'>
      <div className=' hidden w-[250px] h-full bg-violet-10 lg:flex lg:felx-col items-start justify-start px-10 pt-10 rounded-tr-3xl rounded-br-3xl'>

      </div>

      <div className='w-screen flex flex-row items-center justify-between bg-violet lg:hidden'></div>
      

    </section>
  )
}

export default page