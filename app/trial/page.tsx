import Sidebaar from '@/components/Sidebaar'
import React from 'react'
import Upbar from '@/components/Upbar'


const page = () => {
  return (
    <div className='h-screen w-screen flex flex-col  bg-skin-10'>
      
      <Upbar/>
     
   
     <Sidebaar/>
      
    </div>
   
    
  )
}

export default page