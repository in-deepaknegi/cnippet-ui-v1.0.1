import React from 'react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Hero from '@/components/(pages)/login/Hero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Login - Cnippet',
    description: 'Login page',
}

const page = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
            </main>
            <Footer />
        </>
    )
}

export default page