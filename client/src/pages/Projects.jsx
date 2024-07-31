import React from 'react'
import Sidebar from "../components/Sidebar"
import Project from '../components/Project'
const Projects = () => {
  return (
    <div className='w-full flex'>
      <Sidebar className='fixed top-0 h-screen' />
      <main className='grow'>
        <Project/>
      </main>
    </div>
  )
}

export default Projects
