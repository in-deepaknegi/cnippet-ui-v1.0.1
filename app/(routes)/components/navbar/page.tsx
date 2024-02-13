import React from 'react'
import { Metadata } from 'next'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import C1 from "@/ui/navbar/C1";
import C2 from "@/ui/navbar/C2";
import C3 from "@/ui/navbar/C3";
import Layout from '@/components/Layout'

export const metadata: Metadata = {
    title: 'UI - Navbar',
    description: 'Navbar page',
}

const components = [
    {
        id: "1",
        title: "Simple navbar with menu and button on right",
        component: <C1 />,
    },
    {
        id: "2",
        title: "Simple navbar with menu in center and button in right",
        component: <C2 />,
    },
    {
        id: "3",
        title: "Simple navbar with menu in center and button in right",
        component: <C3 />,
    },
];

const page = () => {
    return (
        <>
            <Navbar />
            <main>
                <section className="relative overflow-hidden pt-16 dark:bg-black">
                    <div className="relative mx-auto w-full px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col">
                            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-olive-200">
                                Navbars
                            </h1>
                            <nav className="order-first flex space-x-2 text-base font-semibold">
                                <a href="/components" className="text-slate-500 hover:text-slate-600 dark:text-olive-400 dark:hover:text-olive-200">
                                Ui - Components
                                </a>
                                <div className="select-none text-slate-400">/</div>
                                <a href="/components/navbar" className="text-slate-500 hover:text-slate-600 dark:text-olive-400 dark:hover:text-olive-200">
                                    Navbars
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