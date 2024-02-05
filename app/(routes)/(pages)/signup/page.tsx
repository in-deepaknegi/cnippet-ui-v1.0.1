import React from 'react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Hero from '@/components/(pages)/signup/Hero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Sign Up - Cnippet',
    description: 'Sign Up page',
}

const page = () => {
    return (
        <>
            <main>
                <Hero />
            </main>
        </>
    )
}

export default page