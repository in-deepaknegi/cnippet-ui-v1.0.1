import React from 'react'
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/pages/ecommerce/overview/Hero'

export const metadata: Metadata = {
    title: 'Ecommerce - Product Overviews',
    description: 'Product overviews page',
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