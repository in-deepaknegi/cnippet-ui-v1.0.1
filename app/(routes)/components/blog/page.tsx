import React from 'react'
import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import C1 from "@/ui/blog/C1";
import C2 from "@/ui/blog/C2";

import Layout from '@/components/Doodle'

export const metadata: Metadata = {
    title: 'UI - Blog',
    description: 'Blog page',
}

const components = [
    {
        id: "1",
        title: "Simple feature section with features as list",
        component: <C1 />,
    },
    {
        id: "2",
        title: "Simple feature section with features in two columns with icons",
        component: <C2 />,
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
                                Blog Sections
                            </h1>
                            <nav className="order-first flex space-x-2 text-base font-semibold">
                                <a href="/components" className="text-slate-500 hover:text-slate-600">
                                    Ui - Components
                                </a>
                                <div className="select-none text-slate-400">/</div>
                                <a href="/components/feature" className="text-slate-500 hover:text-slate-600">
                                    Blog Sections
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