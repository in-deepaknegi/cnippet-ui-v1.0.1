import React from 'react'
import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import C1 from "@/ui/(ecommerce)/list/C1";
import C2 from "@/ui/(ecommerce)/list/C2";

import Layout from '@/components/Layout'

export const metadata: Metadata = {
    title: 'UI - Product List',
    description: 'Product List page',
}

const components = [
    {
        id: "1",
        title: "Simple Product List with contents in the middle",
        component: <C1 />,
    },
    {
        id: "2",
        title: "Simple Product List with contents in the middle",
        component: <C2 />,
    },
];

const page = () => {
    return (
        <>
            <Navbar />
            <main>
                <section className="relative overflow-hidden pt-16 bg-white">
                    <div className="relative mx-auto w-full px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col">
                            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
                                Product List Sections
                            </h1>
                            <nav className="order-first flex space-x-2 text-base font-semibold">
                                <a href="/components" className="text-slate-500 hover:text-slate-600">
                                Ui - Components
                                </a>
                                <div className="select-none text-slate-400">/</div>
                                <a href="/ecommerce/product-list" className="text-slate-500 hover:text-slate-600">
                                    Product List Sections
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