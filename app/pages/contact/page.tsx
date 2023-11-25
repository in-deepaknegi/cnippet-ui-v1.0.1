import React from 'react'
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/pages/cp/contact/Hero';

export const metadata: Metadata = {
    title: 'Page - Contact',
    description: 'Contact us page',
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