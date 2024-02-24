import Navbar from '@/components/Navbar'
import Hero from '@/components/(pages)/pro/Hero'
import React from 'react'
import Footer from '@/components/Footer'

const page = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
            </main>
            <Footer />
        </>
    )
}

export default page