import React from 'react'
import Hero from '@/components/(pages)/login/Hero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Login - Cnippet',
    description: 'Login page',
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