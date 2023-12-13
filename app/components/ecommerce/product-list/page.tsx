import React from 'react'
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/pages/ecommerce/list/Hero';

export const metadata: Metadata = {
    title: 'Ecommerce - Product List',
    description: 'Product list page',
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