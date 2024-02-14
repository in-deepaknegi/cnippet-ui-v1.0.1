import React from 'react'
import { Metadata } from 'next'

import Layout from '@/components/Layout'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import C1 from "@/ui/feature-list/C1";
import C2 from "@/ui/feature-list/C2";
import C3 from "@/ui/feature-list/C3";
import S1 from "@/ui/feature-list/S1.mdx";
import S2 from "@/ui/feature-list/S2.mdx";
import S3 from "@/ui/feature-list/S3.mdx";

export const metadata: Metadata = {
    title: 'UI - Feature list',
    description: 'Feature list page',
}

const components = [
    {
        id: "1",
        title: "Simple navbar with menu and button on right",
        component: <C1 />,
        code: <S1 />
    },
    {
        id: "2",
        title: "Simple navbar with menu in center and button in right",
        component: <C2 />,
        code: <S2 />
    },
    {
        id: "3",
        title: "Simple navbar with menu in center and button in right",
        component: <C3 />,
        code: <S3 />
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
                                Feature List Sections
                            </h1>
                            <nav className="order-first flex space-x-2 text-base font-semibold">
                                <a href="/components" className="text-slate-500 hover:text-slate-600">
                                    Ui - Components
                                </a>
                                <div className="select-none text-slate-400">/</div>
                                <a href="/components/feature-list" className="text-slate-500 hover:text-slate-600">
                                    Feature List Sections
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