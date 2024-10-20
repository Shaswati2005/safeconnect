import React from 'react'
import Image from 'next/image'
const Upbar = () => {
  return (
    <div className='w-full h-fit flex lg:hidden'>
        <div className='w-fit h-fit w-50 h-50 mt-3 ml-3 bg-violet-400 border-1 border-violet-10 shadow-inner shadow-violet-100 '>
        <details className="dropdown list-none">
          <summary className="btn m-1">
            <Image
            src="/menu.svg"
            alt="menu"
            width={32}
            height={32}/>


          </summary>
                 <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                       <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                 </ul>
        </details>

        </div>
        
    </div>
  )
}

export default Upbar