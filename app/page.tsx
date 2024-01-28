import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/home/Hero'
import Component from '@/components/home/Component'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Component />
      </main>
      <Footer />
    </>
  )
}

export default Home