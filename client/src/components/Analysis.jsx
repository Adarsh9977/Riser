import React from 'react'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'
const Analysis = () => {
  return (
    <div className='w-full flex'>
        <Sidebar   className="fixed top-0 h-screen"/>
        <main className='grow'>
        <Dashboard/>
        </main>
    </div>
  )
}

export default Analysis
