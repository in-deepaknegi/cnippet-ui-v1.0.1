import React from 'react'
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/pages/ui/navbar/Hero';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'UI - Navbar',
    description: 'Navbar page',
}

const Nav = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <Footer />
        </main>
    )
}

export default Nav