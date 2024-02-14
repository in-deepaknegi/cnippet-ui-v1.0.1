import React from 'react'
import { Metadata } from 'next'

import Layout from '@/components/Doodle'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import C1 from "@/ui/header/C1";
import C2 from "@/ui/header/C2";
import C3 from "@/ui/header/C3";
import S1 from '@/ui/header/S1.mdx'
import S2 from '@/ui/header/S2.mdx'
import S3 from '@/ui/header/S3.mdx'

export const metadata: Metadata = {
    title: 'UI - Header',
    description: 'Header page',
}

const components = [
    {
        id: "1",
        title: "Simple header with heading and para in center",
        component: <C1 />,
        code: <S1 />
    },
    {
        id: "2",
        title: "Simple header with heading and para in columns",
        component: <C2 />,
        code: <S2 />
    },
    {
        id: "3",
        title: "Simple header with heading and para in columns with a backgroud image",
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
                                Header Section
                            </h1>
                            <nav className="order-first flex space-x-2 text-base font-semibold">
                                <a href="/components" className="text-slate-500 hover:text-slate-600">
                                    Ui - Components
                                </a>
                                <div className="select-none text-slate-400">/</div>
                                <a href="/components/header" className="text-slate-500 hover:text-slate-600">
                                    Header Section
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