import React from 'react'
import Button from './Button'


const Hero = () => {
  return (
    <section className='w-screen padding-container flex flex-col gap-20 xl:gap-30 py-10 pb-10 lg:py-18'>

      <div className='w-full flex flexBetween flex-row'>
        <div className=' w-full  h-[75%]  md:-right-28 xl:-top-60'>
            <h1 className=' pt-20 text-blue-500 lg:max-[510px] text-5xl capitalize font-semibold'>make a safe childhood with </h1>
            <h1 className='text-violet-10 text-9xl lg:max-[510px]:capitalize font-bold'>    safe connect</h1>

        </div>

        </div>

        <div className='w-full flex flex-1 flex-col lg:flex-row '>
          <Button
          type='button'
          title='sign up'
          variant='btn_violet'
          />
        </div>

    </section>
  )
}

export default Hero