import React from 'react'
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/pages/ui/hiw/Hero'

export const metadata: Metadata = {
    title: 'UI - How it works',
    description: 'How it works section',
}

const page = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <Footer />
        </main>
    )
}

export default page