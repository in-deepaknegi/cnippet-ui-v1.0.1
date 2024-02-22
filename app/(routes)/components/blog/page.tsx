import React from 'react'
import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import C1 from "@/ui/blog/C1";
import C2 from "@/ui/blog/C2";
import C3 from "@/ui/blog/C3";
import S3 from '@/ui/blog/S3.mdx'

import Layout from '@/components/Doodle'

export const metadata: Metadata = {
    title: 'UI - Blog',
    description: 'Blog page',
}

const components = [
    {
        id: "1",
        title: "Simple blog section with three-column",
        component: <C1 />,
    },
    {
        id: "2",
        title: "Simple blog section with three-column and images",
        component: <C2 />,
    },
    {
        id: "3",
        title: "Simple blog section with three-column and background images",
        component: <C3 />,
        code: <S3 />,
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