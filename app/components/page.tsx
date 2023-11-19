import React from 'react'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Hero from '@/pages/components/Hero'
import List from '@/pages/components/List'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
    title: 'Components',
    description: 'Components page',
}

const Components = () => {
    return (
        <main>
            <Navbar />
            <Hero/>
            <List />
            <Footer />
        </main>
    )
}

export default Components