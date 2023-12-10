import React from 'react'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Hero from '@/pages/components/Hero'
import Application from '@/pages/components/ApplicationUi'
import Ecommerce from '@/pages/components/Ecommerce'
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
            <Application />
            <Ecommerce />
            <Footer />
        </main>
    )
}

export default Components