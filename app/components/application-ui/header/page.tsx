import React from 'react'
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/pages/ui/header/Hero';

export const metadata: Metadata = {
    title: 'UI - Header section',
    description: 'Header section page',
}

const page = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Footer />
        </>
    )
}

export default page