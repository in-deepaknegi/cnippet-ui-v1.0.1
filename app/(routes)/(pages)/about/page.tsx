import React from 'react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Hero from '@/components/(pages)/about/Hero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About - Cnippet',
    description: 'About page',
}

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