import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/(pages)/home/Hero'
import Component from '@/components/(pages)/home/Component'
import Pricing from '@/components/(pages)/home/Pricing'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Component />
        <Pricing />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}

export default Home