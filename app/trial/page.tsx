import Sidebaar from '@/components/Sidebaar'
import React from 'react'
import Upbar from '@/components/Upbar'

import Component from '@/components/Barchart'
import Piet from '@/components/Piechart'
import { Pie } from 'recharts'



const page = () => {
  return (
    <div className='h-screen w-screen flex flex-col  bg-skin-10'>

      <Upbar/>

       
      <div className='flex flex-row w-full h-full '>
        <Sidebaar/>
        <div className='h-full flex flex-col flex-1 items-center justify-between gap-5 lg:gap-10 px-3 lg:px-5 py-5 lg:py-10 overflow-scroll'>
          <div className=' flex flex-row flex-1 items-center justify-between '>

          <div className='flex-1 px-4 lg:px-10 py-3 lg:py-6'>
        <Component></Component>

        </div>


        <div className='w-fit h-fit px-4 lg:px-10 py-3 lg:py-6'>
          <Piet></Piet>
        </div>

          </div>

        </div>
        

        
        
      </div>

      

      
      
      
      
      
      
   
    
      
    </div>
   
    
  )
}

export default page