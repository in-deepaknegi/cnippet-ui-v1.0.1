import React from 'react'
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/pages/ui/pricing/Hero';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'UI - Pricing',
    description: 'Pricing page',
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