import React from 'react'
import Hero from '@/components/ui/footer/Hero'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'UI - Footer',
    description: 'Footer page',
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