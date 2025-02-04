import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='w-screen bg-pink-200 items-center justify-center gap-20 px-20 py-4 flex fles-wrap '>
        <div className='w-[250px]'>@safeconnect 2025</div>
        <div className='flex flex-1  lg:flex-row flex-col items-center justify-evenly gap-3  '>
            
                <div><Link href={"#"}>abbout us</Link></div>
                <div>liscence</div>
                <div>contact us</div>
        

        </div>
        
    </div>
  )
}

export default Footer