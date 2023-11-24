import React from 'react'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/pages/ui/faq/Hero'

export const metadata: Metadata = {
    title: 'UI - FAQ',
    description: 'Frequently asked questions page',
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