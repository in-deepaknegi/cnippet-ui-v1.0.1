import React from 'react'
import Hero from '@/components/ui/hero/Hero'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'UI - Hero',
    description: 'Hero page',
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