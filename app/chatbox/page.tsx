import { Card, CardDescription, CardHeader } from '@/components/ui/card'
import { Sidebar } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <section className='w-screen h-screen flex flex-col items-center justify-between bg-skin-10 '>
        <div className='w-fit h-[25px] lg:h-[50px] flex flex-row text-sm lg:text-2xl lg:mx-[30px] text-skin-10 gap-3 lg:gap-10 items-center justify-center bg-violet-10  rounded-5xl px-7 lg:px-20 mt-2 lg:mt-5 hover:cursor-pointer shadow-2xl shadow-violet-10'>
            <h3>dashboard</h3>
            <h3>profile</h3>
            <h3>notification</h3>
            <h3>alerts</h3>
            <h3>setting</h3>
           
        </div>


        <div className='flex-1 flex flex-col items-center justify-end mb-5 lg:mb-10 mt-5 lg:mt-10 '>
        <Card className="min-h-fit w-fit lg:max-w-[300px] max-w-[100px] bg-slate-400">
              <CardHeader>AI Chatbot for your childs specific needs</CardHeader>
              <CardDescription>
                Always there for you and your child whenever needed
              </CardDescription>
            </Card>
        </div>



        <div className='mx-3 lg:mx-5 w-full flex items-center justify-center'>
        <input className='w-full h-[50px] lg:[70px] lg:w-[900px] border-2  border-violet-600 bg-violet-10 opacity-50 mb-3 lg_mb-5 shadow-2xl shadow-violet-10 px-5 rounded-5xl outline-1 outline-violet transition-all  '></input>

        </div>
        

    </section>
  )
}

export default page