import Sidebaar from '@/components/Sidebaar'
import React from 'react'
import Upbar from '@/components/Upbar'

import Component from '@/components/Barchart'
import Piet from '@/components/Piechart'
import { Pie } from 'recharts'
import Button from '@/components/Button'



const page = () => {
  return (
    <div className='h-screen w-screen flex flex-col  bg-skin-10'>

      <Upbar/>

       
      <div className='flex flex-row w-full h-full '>
        <Sidebaar/>
        <div className='h-full flex flex-col flex-1 items-center justify-between gap-5 lg:gap-10 px-3 lg:px-5 py-5 lg:py-10 overflow-scroll'>
          <div className=' flex flex-row flex-wrap flex-1 items-center justify-center '>

          <div className=' flex-1 px-4 lg:px-10 py-3 lg:py-6 align-middle'>
        <Component></Component>

        </div>


        <div className='w-fit h-fit px-4 lg:px-10 py-3 lg:py-6'>
          <Piet></Piet>
        </div>

          </div>


          <div className='flex flex-row flex-wrap flex-1 items-center justify-center gap-20 '>

            <Button
            type='button'
            title='AI Friend'
            variant='btn_violet '/>


             <Button
            type='button'
            title='Geolocation'
            variant='btn_white'/>


            <Button
            type='button'
            title='Alerts'
            variant='btn_blue'/>
            

          </div>

        

        </div>


        
        

        
        
      </div>

      

      
      
      
      
      
      
   
    
      
    </div>
   
    
  )
}

export default page