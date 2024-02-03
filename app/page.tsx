import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/(pages)/home/Hero'
import Component from '@/components/(pages)/home/Component'
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