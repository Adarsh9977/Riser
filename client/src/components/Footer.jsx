import React from 'react'
import {
    FaInstagram,
    FaGithubSquare,
    FaTwitterSquare,
    FaLinkedin
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[95vw] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-black  '>
    <div>
    <h1 className='w-full text-3xl font-bold text-black'>Riser.</h1>
    <p className='py-4'>Its the platform for maintaining your tasks Accurately and Efficiently.</p>
    <div className='flex justify-between md:w-[75%] my-6 '>
    <FaLinkedin size={30}/>
     <FaInstagram size={30}/>
     <FaTwitterSquare size={30}/>
     <FaGithubSquare size={30}/>
    </div>
    </div>
 </div>
  )
}

export default Footer
