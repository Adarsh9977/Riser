import React from 'react'
import Progress from "../assets/Progress.png"
import Tasks from '../assets/Tasks.png'
import Graph from '../assets/Graph.png'
import Team from '../assets/Team.jpg'


const Features = () => {
  return (
    <div>
        <div className='border-b-4 border-gray-400 mt-4 max-w-[1240px] mx-auto'></div>
        <div className='flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-bold my-4'>Features</h1>
        <div className='w-[95vw] py-[5rem] px-4 bg-gradient-to-l from-gray-700 to-gray-500 rounded-lg mx-auto '>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='bg-white flex flex-col justify-center items-center text-center rounded-xl '>
                <img src={Graph} className='w-20 mx-auto mt-[-3rem] bg-gray-700 rounded-xl border-4 border-black' />
                <h1 className='font-bold text-xl py-3'>Progress Chart</h1>
                <div className='flex flex-col justify-center '>
                    <p className='py-3 border-b-2 border-gray-600'>Data of 30 days represented in a chart </p>
                    <p className='py-3 border-b-2 border-gray-600'>Track your daily progress </p>
                    <p className='py-3 border-b-2 border-gray-600'>point will be attached in future</p>
                    <p className='py-3 mb-3'>point will be attached in future</p>
                </div>
            </div> 

            <div className='bg-white flex flex-col justify-center items-center text-center rounded-xl mt-10 md:mt-0'>
                <img src={Team} className='w-20 mx-auto mt-[-3rem] bg-gray-700 rounded-xl border-4 border-black ' />
                <h1 className='font-bold text-xl py-3'>Make your private Group</h1>
                <div className='flex flex-col justify-center '>
                    <p className='py-3 border-b-2 border-gray-600'>Make your group with your fellows</p>
                    <p className='py-3 border-b-2 border-gray-600'>Assign tasks to eachother</p>
                    <p className='py-3 border-b-2 border-gray-600'>Grow Together</p>
                    <p className='py-3 mb-3'>Chat Within the group</p>
                </div>
            </div>
            <div className='bg-white flex flex-col justify-center items-center text-center rounded-xl mt-10 md:mt-10 lg:mt-0 lg:w-full'>
                <img src={Tasks} className='w-20 mx-auto mt-[-3rem] bg-gray-700 rounded-xl border-4 border-black'/>
                <h1 className='font-bold text-xl py-3'>Maintain Goals</h1>
                <div className='flex flex-col justify-center '>
                    <p className='py-3 border-b-2 border-gray-600'>Assign a long term Goal</p>
                    <p className='py-3 border-b-2 border-gray-600'>Make weekly, Daily Tasks</p>
                    <p className='py-3 border-b-2 border-gray-600'>Edit and delete tasks</p>
                    <p className='py-3 mb-3'>point will be attached in future</p>
                </div>
            </div>
        </div>
        </div>
       
        </div>
    </div>
  )
}

export default Features
