import React from 'react'
import Navbar from '@/components/Navbar'
import Main from '@/pages/home/Main'
import Components from '@/pages/home/Components'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <main>
      <Navbar />
      <Main />
      <Components />
      <Footer />
    </main>
  )
}

export default Home