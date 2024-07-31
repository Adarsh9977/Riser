import React, {useState} from 'react'
import { CgUser, CgMenu,CgClose } from 'react-icons/cg'
import Logo from '../assets/NavLogo.jpeg'
const Navbar = () => {
    const [nav, setNav]= useState(true)

    const handleNav = () =>{
        setNav(!nav)
    }

  return (
    <div className='fixed top-0 left-0 flex justify-between items-center h-16 w-full mx-auto px-4 shadow-sm text-white bg-gray-800'>
        
      {/* <div className='w-full h-16 flex '>
        <img src={Logo} className='h-16'/>
      </div> */}
      <h1 className='w-full font-bold text-3xl'>Riser.</h1>
      
      <ul className=' hidden sm:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Features</li>
        <li className='p-4'>Contact</li>
        <li className='p-4'>About</li>
      </ul>
      <div className='p-2 sm:hidden' >
        {!nav ?<CgClose size={25} onClick={handleNav}/> :<CgMenu size={25} onClick={handleNav}/>}
      </div>
      <div className={ !nav ? 'fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-600 bg-gradient-to-b from-gray-700 to-gray-200 ease-in-out duration-500': 'fixed left-[-100%]'}>
        <div className='flex justify-between'>
        <h1 className='w-full font-bold text-3xl m-4'>Riser.</h1>
      </div>
        <ul className='uppercase p-4'>
            <li className='p-4 border-b border-gray-600 '>Home</li>
            <li className='p-4 border-b border-gray-600 '>Features</li>
            <li className='p-4 border-b border-gray-600 '>Upgrade</li>
            <li className='p-4 border-b border-gray-600 '>Contact</li>
            <li className='p-4  '>About</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
