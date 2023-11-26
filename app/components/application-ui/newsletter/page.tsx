import React from 'react'
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/pages/ui/newsletter/Hero';

export const metadata: Metadata = {
    title: 'UI - Newsletter',
    description: 'Newsletter components page',
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