import React from 'react'
import Image from 'next/image'
const Upbar = () => {
  return (
    <div className='w-full h-fit flex lg:hidden'>
        <div className='w-fit h-fit w-50 h-50 mt-3 ml-3 bg-violet-400 border-1 border-violet-10 shadow-inner shadow-violet-100 rounded-xl'>
        <details className="dropdown ">
          <summary className="btn m-1">
            <Image
            src="/menu.svg"
            alt="menu"
            width={32}
            height={32}/>


          </summary>
                 <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow  gap-5">
                       <li><div className='flex flex-row items-center justify-start gap-3 '>
                        <Image
                        src="/profile.svg"
                        alt="profile"
                        width={32}
                        height={32}/>
                        <h1 className='text-white'>profile</h1>
                       
                        </div></li>



                        <li><div className='flex flex-row items-center justify-start gap-3 '>
                        <Image
                        src="/home.svg"
                        alt="home"
                        width={32}
                        height={32}/>
                        <h1 className='text-white'>home</h1>
                       
                        </div></li>




                        <li><div className='flex flex-row items-center justify-start gap-3 '>
                        <Image
                        src="/alerts.svg"
                        alt="alerts"
                        width={32}
                        height={32}/>
                        <h1 className='text-white'>alerts</h1>
                       
                        </div></li>




                        <li><div className='flex flex-row items-center justify-start gap-3 '>
                        <Image
                        src="/alerts2.svg"
                        alt="notification"
                        width={32}
                        height={32}/>
                        <h1 className='text-white'>notification</h1>
                       
                        </div></li>




                        <li><div className='flex flex-row items-center justify-start gap-3 '>
                        <Image
                        src="/setting.svg"
                        alt="setting"
                        width={32}
                        height={32}/>
                        <h1 className='text-white'>setting</h1>
                       
                        </div></li>




                        <li><div className='flex flex-row items-center justify-start gap-3 '>
                        <Image
                        src="/home.svg"
                        alt="logout"
                        width={32}
                        height={32}/>
                        <h1 className='text-white'>logout</h1>
                       
                        </div></li>
                       
                 </ul>
        </details>

        </div>
        
    </div>
  )
}

export default Upbar