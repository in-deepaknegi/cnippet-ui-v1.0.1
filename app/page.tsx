import React from 'react'
import Navbar from '@/components/Navbar'
import Main from '@/pages/home/Main'
import Components from '@/pages/home/Components'
import Pages from '@/pages/home/Pages'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <main>
      <Navbar />
      <Main />
      <Components />
      <Pages />
      <Footer />
    </main>
  )
}

export default Home