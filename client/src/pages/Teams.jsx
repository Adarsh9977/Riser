import React from 'react'
import Sidebar from "../components/Sidebar"
import Team from '../components/Team'
const Teams = () => {
  return (
    <div className='w-full flex'>
      <Sidebar className='fixed top-0 h-screen' />
      <main className='grow'>
        <Team/>
      </main>
    </div>
  )
}

export default Teams
