"use client"


import React from 'react'
import { useEffect , useState } from 'react'
import Questions from '@/components/Questions'

const page = () => {
  return (
    <div className='w-screen h-screen bg-blue-100 px-7 pt-4'>
        <Questions question={'sfafdsas'} options={['asd','adfa','adfaf']}/>
        
    </div>
  )
}

export default page