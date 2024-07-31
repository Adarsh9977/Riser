import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Review from '../components/Review'

const Landing = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Features/>
      <Review/>
      <Footer/>
    </main>
  )
}

export default Landing
