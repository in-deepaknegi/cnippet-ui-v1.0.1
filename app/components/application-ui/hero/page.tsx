import React from 'react'
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/pages/ui/hero/Hero';

export const metadata: Metadata = {
    title: 'Hero Headers',
    description: 'Navbar page',
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