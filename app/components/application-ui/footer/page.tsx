import React from 'react'
import type { Metadata } from 'next'
import Hero from '@/pages/ui/footer/Hero'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
    title: 'Footer',
    description: 'Footer page',
}

const Foot = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <Footer />
        </main>
    )
}

export default Foot