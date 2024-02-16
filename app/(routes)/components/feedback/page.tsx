import React from 'react'
import { Metadata } from 'next'

import Layout from '@/components/Doodle'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import C1 from "@/ui/feedback/C1";
import C2 from "@/ui/feedback/C2";
import C3 from "@/ui/feedback/C3";

export const metadata: Metadata = {
    title: 'UI - Feadback',
    description: 'Feadback page',
}

const components = [
    {
        id: "1",
        title: "Simple feedback section with items in center",
        component: <C1 />,
    },
    {
        id: "2",
        title: "Simple feeback section with large profile picture",
        component: <C2 />,
    },
    {
        id: "3",
        title: "Simple feeback section with large profile picture",
        component: <C3 />,
    },
];

const page = () => {
    return (
        <>
            <Navbar />
            <main>
                <section className="relative overflow-hidden pt-16">
                    <div className="relative mx-auto w-full px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col">
                            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
                                Feedbacks
                            </h1>
                            <nav className="order-first flex space-x-2 text-base font-semibold">
                                <a href="/components" className="text-slate-500 hover:text-slate-600">
                                    Ui - Components
                                </a>
                                <div className="select-none text-slate-400">/</div>
                                <a href="/components/feeback" className="text-slate-500 hover:text-slate-600">
                                    Feedbacks
                                </a>
                            </nav>
                        </div>

                        <Layout components={components} />

                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default page