import React from 'react'
import Weekleys from "../components/Weekly"
import Sidebar from "../components/Sidebar"
const Weekly = () => {
  return (
    <div className='w-full flex'>
      <Sidebar className='fixed top-0 h-screen' />
      <main className='grow'>
        <Weekleys/>
      </main>
    </div>
  )
}

export default Weekly
