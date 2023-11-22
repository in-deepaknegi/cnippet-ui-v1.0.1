import React from 'react'
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Form from '@/pages/contact/Form';

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Contacts page',
}

const page = () => {
    return (
        <main>
            <Navbar />
            <Form />
            <Footer />
        </main>
    )
}

export default page