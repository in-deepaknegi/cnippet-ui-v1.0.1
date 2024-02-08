import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/(pages)/home/Hero'
import Component from '@/components/(pages)/home/Component'
import Pricing from '@/components/(pages)/home/Pricing'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Component />
        <Pricing />
      </main>
      <Footer />
    </>
  )
}

export default Home