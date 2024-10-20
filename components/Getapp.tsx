import React from 'react'
import Button from './Button'

const Getapp = () => {
  return (
    <section className='w-screen h-screen flex flex-col gap-3 lg:gap-7 py-5 lg:py-10 px-3 lg:px-15 items-center justify-center padding-container '>
      <div className='w-fit h-fit '>
        <h1 className='text-5xl text-violet-10 font-extrabold'>GET OUR APP NOW</h1>
        
      </div>


      <div className='flex flex-row flex-wrap w-full h-full items-center justify-between '>
        <div className='w-fit h-fit '>


        </div>

        <div>
        <div className='flex flex-row flex-wrap w-fit h-full items-center justify-between '>
        <div className='flex flex-col w-fit h-fit items-start gap-10 lg:gap-20justify-center  '>
          <h1 className='text-3xl text-violet-10 '>get<strong className='text-5xl text-blue-500 font-bold'> SAFE CONNECT </strong> </h1>
          <h1 className='text-3xl text-blue-500 '> for a <strong className='text-5xl text-violet-10 font-bold'>SAFE CHILDHOOD</strong> </h1>
          <h1 className='text-3xl text-violet-10 font-bold'> available in android and iOS</h1>

        </div>

      </div>
        </div>
      </div>



      <div className='flex flex-row flex-wrap w-full h-fit gap-4 lg:gap-20 '>
        <Button
        type='button'
        title='download for android'
        variant='btn_violet'/>


        <Button
        type='button'
        title='download for iOS'
        variant='btn_white'/>



        
      </div>


      



    </section>
  )
}

export default Getapp