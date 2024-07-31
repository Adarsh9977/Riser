import React from 'react'
import Sidebar from '../components/Sidebar'
import Todays from '../components/Today'
const Today = () => {
  return (
    <div className='w-full flex'>
      <Sidebar className='fixed top-0 h-screen' />
      <main className='grow'>
        <Todays/>
      </main>
    </div>
  )
}

export default Today
