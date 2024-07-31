import React from 'react'
import { ReactTyped } from 'react-typed'
import Signup from './Signup'
import { useNavigate } from 'react-router-dom'


const Hero = () => {
  const navigate = useNavigate();

  const goToSignup= ()=>{
    navigate('/Signup')
  }
  return (
    <div className='flex mt-16'>
        <div className='flex flex-col justify-center items-center text-center mx-auto max-w-[1330px] w-full h-[50vh] md:h-[60vh] bg-gradient-to-r from-slate-800 to-slate-400 rounded-lg mt-8 text-white'>
          <p className='p-2 uppercase md:text-2xl'>Keep Your Progress in your Hands</p> 
          <div className='flex justify-center items-center'>
            <p className=' md:text-5xl sm:text-4xl text-3xl font-bold md:py-4'>Make your journey </p>
            <ReactTyped className='md:text-5xl sm:text-4xl text-3xl text-black
            md:pl-4 pl-2 font-bold md:py-4' strings={['EASY','SMARTER','EFFICIENT']} typeSpeed={140} backSpeed={140} loop/>
          </div>
          <div className=''>
           <button onClick={goToSignup} className='bg-gradient-to-r from-gray-500 to-gray-100 text-black rounded-lg font-medium my-5 mx-auto p-2.5 hover:from-gray-600 hover:to-gray-300 '>Get Started</button>
          </div>
          
        </div>
    </div>
  )
}
export default Hero
