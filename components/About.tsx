
import React from 'react'

const About = () => {
  return (
    <div>
        <div className='flex flex-row flex-wrap  px-3  justify-evenly gap-20 '>
            <div className='max-w-[500px] border border-blue-10 bg-pink-200 text-pink-700 hover:scale-110 transition-all hover:border-pink-500 rounded-xl p-5'>
                <h1 className='text-xl text-wrap text-black font-semibold '>AI-Powered Assessment</h1>
                <p className='text-lg text-wrap font-normal'>Interactive questionnaires are administered to gather further insights into children's emotions, behaviors, and social interactions.
                The AI models process this data to identify patterns and predict potential emotional and behavioral concerns, such as anxiety, depression, or social isolation.</p>
            </div>
            <div className=' max-w-[500px] border border-blue-10 bg-pink-200 text-pink-700 hover:scale-110 transition-all hover:border-pink-500 rounded-xl p-5'>
                <h1 className='text-xl text-wrap text-black font-semibold '>Predictive Analytics and Risk Assessment</h1>
                <p className='text-lg text-wrap font-normal'>he platform utilizes predictive analytics to assess the risk level of various mental health concerns for each child.
This risk assessment considers a combination of factors, including online activity data, questionnaire responses, and demographic information.
The platform provides a personalized risk score for each child, indicating the likelihood of experiencing specific mental health challenges.</p>
            </div>
            <div className=' max-w-[500px] border border-blue-10 bg-pink-200 text-pink-700 hover:scale-110 transition-all hover:border-pink-500 rounded-xl p-5'>
                <h1 className='text-xl text-wrap text-black font-semibold '>Personalized Recommendations:</h1>
                <p className='text-lg text-wrap font-normal'>Based on the risk assessment, the platform generates personalized recommendations for parents and caregivers.
These recommendations may include:
Engaging in specific activities to improve child well-being.
Seeking professional support from therapists or counselors.
Utilizing online resources and educational materials.
Modifying the child's digital environment to enhance their well-being.</p>
            </div>
            <div className='max-w-[500px]  border border-blue-10 bg-pink-200 text-pink-700 hover:scale-110 transition-all hover:border-pink-500 rounded-xl p-5'>
                <h1 className='text-xl text-wrap text-black font-semibold '>User-Friendly Interface and Engagement:</h1>
                <p className='text-lg text-wrap font-normal'>The platform features an intuitive and user-friendly interface designed to be engaging for children.The platform provides clear and concise explanations of the assessment results and recommendations in an easy-to-understand format.</p>
            </div>
        </div>
    </div>
  )
}

export default About