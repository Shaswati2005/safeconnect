import { SignIn } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className='flex items-center justify-center bg-blue-100 min-h-screen w-screen'><SignIn routing='hash'  appearance={{elements:{
        card: ' bg-pink-200 '
    }}} /></div>
  )
}

export default page