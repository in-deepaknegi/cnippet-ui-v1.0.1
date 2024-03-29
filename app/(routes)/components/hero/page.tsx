import React from 'react'
import { Metadata } from 'next'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import C1 from "@/ui/hero/C1";
import C2 from "@/ui/hero/C2";
import C3 from "@/ui/hero/C3";
import C4 from "@/ui/hero/C4";
import C5 from "@/ui/hero/C5";
import S1 from "@/ui/hero/S1.mdx";


import Layout from '@/components/Layout'

export const metadata: Metadata = {
    title: 'UI - Hero',
    description: 'Hero page',
}

const components = [
    {
        id: "1",
        title: "Simple navbar with menu and button on right",
        color: "#0950f6",
        component: <C1 />,
        code: <S1 />
    },
    {
        id: "2",
        title: "Simple navbar with menu in center and button in right",
        color: "#3e75f4",
        component: <C2 />,
    },
    {
        id: "3",
        title: "Simple navbar with menu in center and button in right",
        color: "#3e75f4",
        component: <C3 />,
    },
    {
        id: "4",
        title: "Simple navbar with menu in center and button in right",
        color: "#3e75f4",
        component: <C4 />,
    },
    {
        id: "4",
        title: "Simple navbar with menu in center and button in right",
        color: "#3e75f4",
        component: <C5 />,
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
                                Hero Sections
                            </h1>
                            <nav className="order-first flex space-x-2 text-base font-semibold">
                                <a href="/components" className="text-slate-500 hover:text-slate-600">
                                    Ui - Components
                                </a>
                                <div className="select-none text-slate-400">/</div>
                                <a href="/components/hero" className="text-slate-500 hover:text-slate-600">
                                    Hero Sections
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