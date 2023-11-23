import React from 'react'
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/pages/ui/testimonial/Hero';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'UI - Testimonial',
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