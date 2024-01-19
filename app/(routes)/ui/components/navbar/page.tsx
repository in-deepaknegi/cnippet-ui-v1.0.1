import React from 'react'
import Hero from '@/components/ui/navbar/Hero'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'UI - Navbar',
    description: 'Navbar page',
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