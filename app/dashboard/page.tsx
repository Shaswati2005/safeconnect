"use client"



import React from 'react'
import Image from 'next/image'
import Sidebar from '@/components/Sidebar'
import BarChart from '@/components/BarChart'
import PieChart from '@/components/pieChart'

const page = () => {
  return (
    <div className='w-screen h-vh bg-blue-100 flex flex-row items-center'>
      <Sidebar/>
       <div className='flex flex-1 flex-col overflow-y-scroll items-center justify-start'>

       
       
       <div className='p-4 flex flex-col justify-start gap-20 flex-wrap md:ml-64 '>
       <div className='flex flex-row flex-wrap  justify-evenly gap-15 '>
        <div className='flex flex-wrap gap-20 items-center  justify-around px-5    '>
        <Image src={'/elephant.png'} alt='elephant' width={450} height={500} className='bg-blue-100 px-5  border rounded-full shadow-2xl shadow-blue-50'/>
        <BarChart/>

        </div>
        
        <div className='flex flex-wrap gap-20 items-center justify-around px-5    '>
        <PieChart/>
        <div className='w-[500px] h-[230px] flex flex-wrap text-wrap overflow-y-scroll text-lg text-pink-500 bg-blue-100 border border-blue-300 shadow-lg rounded-2xl p-5  shadow-blue-300 '>
          <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum repellat soluta veniam asperiores atque, ipsum quidem autem, id modi commodi nulla odit ipsam vel tempore in corrupti earum alias? Officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut debitis doloribus modi nemo quod incidunt dolorum dicta explicabo aliquid sequi veritatis distinctio iusto animi, cumque ea voluptatem, corporis repellendus maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugiat unde itaque placeat quis quibusdam eaque dolores delectus maxime laboriosam odit nisi vero asperiores dolorum distinctio minus, voluptatem officia suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis consequuntur voluptatum dignissimos placeat fugiat, repudiandae autem harum cum incidunt, cupiditate delectus consequatur beatae asperiores atque neque eaque, doloribus praesentium maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aliquam molestiae enim earum accusantium exercitationem ducimus consectetur laboriosam quod, saepe quibusdam in. Numquam, fuga dolorum? Nemo optio explicabo aliquam itaque? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores officiis, totam earum perspiciatis ducimus repellat odio illum sapiente iste ex perferendis quod consequatur a quisquam ipsa natus qui fugit excepturi.</h3>

        </div>

        </div>
        
        
       


       </div>
       </div>
       </div>
    </div>
  )
}

export default page