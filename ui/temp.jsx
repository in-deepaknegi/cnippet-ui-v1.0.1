"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import Hero2 from '@/public/hero2.jpg';

const items = [
    {
        title: 'Featurs',
        features: [
            'Multiple strap configurations',
            'Spacious interior with top zip',
            'Leather handle and tabs',
            'Interior dividers',
            'Stainless strap loops',
            'Double stitched construction',
            'Water-resistant'
        ]
    },
    {
        title: 'Care',
        features: [
            'Spot clean as needed',
            'Hand wash with mild soap',
            'machine wash interior dividers',
        ]
    },
    {
        title: 'Shipping',
        features: [
            'Free shipping on orders over $300',
            'International shipping available',
            'Expedited shipping options',
            'Signature required upon delivery',
        ]
    },
    {
        title: 'Returs',
        features: [
            'Easy return request',
            'Pre-paid shipping label included',
            '10% restocking fee for returns',
            '60 day return window',
        ]
    }
];

const Hero = () => {
    const [activeTab1, setActiveTab1] = useState(0);
    const [activeTab2, setActiveTab2] = useState(0);
    const [activeTab3, setActiveTab3] = useState(0);

    const changeTab1 = (index) => {
        setActiveTab1(index);
    };
    const changeTab2 = (index) => {
        setActiveTab2(index);
    };
    const changeTab3 = (index) => {
        setActiveTab3(index);
    };


    const [active, setActive] = useState(null);

    const toggleActive = (index) => {
        setActive(active === index ? null : index)
    }

    return (
        <section className='relative overflow-hidden pt-[5.75rem]'>
            <div className='relative mx-auto mt-20 w-full px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-col'>
                    <h1 className='mt-3 text-3xl font-extrabold tracking-tight text-slate-900'>Product Overview</h1>
                    <nav className='order-first flex space-x-2 text-sm font-semibold'>
                        <a href="/" className='text-slate-500 hover:text-slate-600'>
                            Ecommerce
                        </a>
                        <div className='select-none text-slate-400'>/</div>
                        <a href="/" className='text-slate-500 hover:text-slate-600'>
                            Product Overview
                        </a>
                    </nav>
                </div>
                <div className='mt-10 space-y-28 pb-px'>
                    <section id='overview-1'>
                        <div className='grid grid-cols-[1fr,auto] items-center'>
                            <div className='flex min-w-0'>
                                <h2 className='truncate text-base font-medium leading-7 text-slate-900'>
                                    <a href="">
                                        Simple navbar with menu and button on right
                                    </a>
                                </h2>
                                <p className='ml-3 hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 lg:block'>
                                    Requires JS
                                </p>
                            </div>
                            <div className='ml-6 flex items-center'>
                                <div className='flex space-x-1 rounded-lg bg-slate-100 p-0.5'>
                                    <button
                                        onClick={() => changeTab1(0)}
                                        className={`flex items-center rounded-md py-[0.45rem] pl-2 pr-2 text-sm font-semibold lg:pr-3 ${activeTab1 === 0 ? 'bg-white shadow' : ''}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0950f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                                        <span className='sr-only lg:not-sr-only lg:ml-2 text-stone-900'>Preview</span>
                                    </button>
                                    <button
                                        onClick={() => changeTab1(1)}
                                        className={`flex items-center rounded-md py-[0.45rem] pl-2 pr-2 text-sm font-semibold lg:pr-3 ${activeTab1 === 1 ? 'bg-white shadow' : ''}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3e75f4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                                        <span className='sr-only lg:not-sr-only lg:ml-2 text-stone-900'>Code</span>
                                    </button>
                                </div>
                                <div className='ml-6 mr-3 hidden h-5 w-px bg-slate-900 sm:block'></div>
                                <div className='relative hidden sm:block text-slate-900 font-medium sm:text-sm pl-3.5 pr-[1.875rem]'>
                                    NextJs
                                </div>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9c9c9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                                </button>
                            </div>

                            <div className='col-span-2 row-start-2 min-w-0 mt-3'>
                                {activeTab1 === 0 ? (
                                    <>
                                        <section className='relative isolate border rounded-2xl'>
                                            <div className='mx-auto max-w-2xl px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
                                                <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8'>
                                                    <div className='flex flex-col-reverse'>
                                                        <div className='mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none'>
                                                            <div className='grid grid-cols-4 gap-6'>
                                                                <button className='relative flex h-24 cursor-pointer items-center justify-center rounded-md '>
                                                                    <span className='absolute inset-0 overflow-hidden rounded-md'>
                                                                        <Image
                                                                            src={Hero2}
                                                                            alt='hero2'
                                                                            className='h-full w-full object-cover'
                                                                        />
                                                                    </span>
                                                                </button>
                                                                <button className='relative flex h-24 cursor-pointer items-center justify-center rounded-md '>
                                                                    <span className='absolute inset-0 overflow-hidden rounded-md'>
                                                                        <Image
                                                                            src={Hero2}
                                                                            alt='hero2'
                                                                            className='h-full w-full object-cover'
                                                                        />
                                                                    </span>
                                                                </button>
                                                                <button className='relative flex h-24 cursor-pointer items-center justify-center rounded-md '>
                                                                    <span className='absolute inset-0 overflow-hidden rounded-md'>
                                                                        <Image
                                                                            src={Hero2}
                                                                            alt='hero2'
                                                                            className='h-full w-full object-cover'
                                                                        />
                                                                    </span>
                                                                </button>
                                                                <button className='relative flex h-24 cursor-pointer items-center justify-center rounded-md '>
                                                                    <span className='absolute inset-0 overflow-hidden rounded-md'>
                                                                        <Image
                                                                            src={Hero2}
                                                                            alt='hero2'
                                                                            className='h-full w-full object-cover'
                                                                        />
                                                                    </span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className='relative w-full pb-[calc(90%)]'>
                                                            <div className='absolute h-full w-full inset-0'>
                                                                <Image
                                                                    src={Hero2}
                                                                    alt='hero1'
                                                                    className='w-full h-full object-cover object-bottom overflow-clip rounded-lg'
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='mt-10 px-4 sm:mt-16 ms:px-0 lg:mt-0'>
                                                        <h2 className='text-3xl font-bold tracking-tight text-gray-900'>Zip Tote Screen</h2>
                                                        <div className='mt-3'>
                                                            <h2 className='absolute sr-only'>Product information</h2>
                                                            <p className='text-3xl tracking-tight text-gray-700'>$140</p>
                                                        </div>
                                                        <div className='mt-3'>
                                                            <h3 className='absolute sr-only'>Reviews</h3>
                                                            <div className='flex items-center'>
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className='w-5 h-5 text-blue-600'><path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd"></path></svg>
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className='w-5 h-5 text-blue-600'><path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd"></path></svg>
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className='w-5 h-5 text-blue-600'><path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd"></path></svg>
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className='w-5 h-5 text-blue-600'><path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd"></path></svg>
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className='w-5 h-5 text-gray-300'><path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd"></path></svg>
                                                            </div>
                                                        </div>
                                                        <div className='mt-6'>
                                                            <h3 className='absolute sr-only'>Description</h3>
                                                            <p className='text-md text-gray-700'>
                                                                The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.
                                                            </p>
                                                        </div>
                                                        <div className='mt-10 flex'>
                                                            <button className='flex max-w-[10rem] flex-1 items-center justify-center rounded-lg border border-transparent bg-blue-700 px-6 py-3 text-base text-white sm:w-full'>
                                                                Add to bag
                                                            </button>
                                                            <button className='ml-4 flex items-center justify-center rounded-md px-3 text-gray-400'>
                                                                <span className='sr-only'>Add to favourites</span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className='h-8 w-8 shrink-0'><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path></svg>
                                                            </button>
                                                        </div>
                                                        <div className='container mt-12'>
                                                            {items.map((item, index) => (
                                                                <div key={index} className='border-t'>
                                                                    <button
                                                                        onClick={() => toggleActive(index)}
                                                                        className='flex w-full my-4 items-start justify-between text-left'>
                                                                        <span className='text-sm font-semibold leading-7 text-blue-800'>
                                                                            {item.title}
                                                                        </span>
                                                                        <span>
                                                                            {active === index ? (
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
                                                                            ) : (
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                                                            )}
                                                                        </span>
                                                                    </button>

                                                                    {active === index && (
                                                                        <div className='pb-6'>
                                                                            <ul role='list' className='text-sm list-disc ml-6 text-gray-700'>
                                                                                {item.features.map((feature, i) => (
                                                                                    <li key={i} className='my-1'>
                                                                                        {feature}
                                                                                    </li>
                                                                                ))}
                                                                            </ul>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </>
                                ) : (
                                    <div>code</div>
                                )}
                            </div>
                        </div>
                    </section>

                    <section id='overview-2'>
                        <div className='grid grid-cols-[1fr,auto] items-center'>
                            <div className='flex min-w-0'>
                                <h2 className='truncate text-base font-medium leading-7 text-slate-900'>
                                    <a href="">
                                        Simple navbar with menu in center and button in right
                                    </a>
                                </h2>
                                <p className='ml-3 hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 lg:block'>
                                    Requires JS
                                </p>
                            </div>
                            <div className='ml-6 flex items-center'>
                                <div className='flex space-x-1 rounded-lg bg-slate-100 p-0.5'>
                                    <button
                                        onClick={() => changeTab2(0)}
                                        className={`flex items-center rounded-md py-[0.45rem] pl-2 pr-2 text-sm font-semibold lg:pr-3 ${activeTab2 === 0 ? 'bg-white shadow' : ''}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0950f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                                        <span className='sr-only lg:not-sr-only lg:ml-2 text-stone-900'>Preview</span>
                                    </button>
                                    <button
                                        onClick={() => changeTab2(1)}
                                        className={`flex items-center rounded-md py-[0.45rem] pl-2 pr-2 text-sm font-semibold lg:pr-3 ${activeTab2 === 1 ? 'bg-white shadow' : ''}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3e75f4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                                        <span className='sr-only lg:not-sr-only lg:ml-2 text-stone-900'>Code</span>
                                    </button>
                                </div>
                                <div className='ml-6 mr-3 hidden h-5 w-px bg-slate-900 sm:block'></div>
                                <div className='relative hidden sm:block text-slate-900 font-medium sm:text-sm pl-3.5 pr-[1.875rem]'>
                                    NextJs
                                </div>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9c9c9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                                </button>
                            </div>

                            <div className='col-span-2 row-start-2 min-w-0 mt-3'>
                                {activeTab2 === 0 ? (
                                    <>
                                        <section className='relative isolate border rounded-2xl'>
                                            <div className='mx-auto max-w-2xl px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
                                                <div className='lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-8'>
                                                    <div className='flex space-x-8 col-span-7'>
                                                        <div className='mx-auto hidden w-full sm:block max-w-[10rem]'>
                                                            <div className='grid grid-rows-4 gap-6'>
                                                                <button className='relative flex h-36 cursor-pointer items-center justify-center rounded-md '>
                                                                    <span className='absolute inset-0 overflow-hidden rounded-md'>
                                                                        <Image
                                                                            src={Hero2}
                                                                            alt='hero2'
                                                                            className='h-full w-full object-cover'
                                                                        />
                                                                    </span>
                                                                </button>
                                                                <button className='relative flex h-36 cursor-pointer items-center justify-center rounded-md '>
                                                                    <span className='absolute inset-0 overflow-hidden rounded-md'>
                                                                        <Image
                                                                            src={Hero2}
                                                                            alt='hero2'
                                                                            className='h-full w-full object-cover'
                                                                        />
                                                                    </span>
                                                                </button>
                                                                <button className='relative flex h-36 cursor-pointer items-center justify-center rounded-md '>
                                                                    <span className='absolute inset-0 overflow-hidden rounded-md'>
                                                                        <Image
                                                                            src={Hero2}
                                                                            alt='hero2'
                                                                            className='h-full w-full object-cover'
                                                                        />
                                                                    </span>
                                                                </button>
                                                                <button className='relative flex h-36 cursor-pointer items-center justify-center rounded-md '>
                                                                    <span className='absolute inset-0 overflow-hidden rounded-md'>
                                                                        <Image
                                                                            src={Hero2}
                                                                            alt='hero2'
                                                                            className='h-full w-full object-cover'
                                                                        />
                                                                    </span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className='relative w-full pb-[calc(90%)]'>
                                                            <div className='absolute h-full w-full inset-0'>
                                                                <Image
                                                                    src={Hero2}
                                                                    alt='hero1'
                                                                    className='w-full h-full object-cover object-bottom overflow-clip rounded-lg'
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='mt-10 col-span-5 px-4 sm:mt-16 ms:px-0 lg:mt-0'>
                                                        <h2 className='text-3xl font-bold tracking-tight text-gray-900'>Zip Tote Screen</h2>
                                                        <div className='mt-3'>
                                                            <h2 className='absolute sr-only'>Product information</h2>
                                                            <p className='text-3xl tracking-tight text-gray-700'>$140</p>
                                                        </div>
                                                        <div className='mt-3'>
                                                            <h3 className='absolute sr-only'>Reviews</h3>
                                                            <div className='flex items-center'>
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className='w-5 h-5 text-blue-600'><path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd"></path></svg>
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className='w-5 h-5 text-blue-600'><path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd"></path></svg>
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className='w-5 h-5 text-blue-600'><path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd"></path></svg>
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className='w-5 h-5 text-blue-600'><path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd"></path></svg>
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className='w-5 h-5 text-gray-300'><path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd"></path></svg>
                                                            </div>
                                                        </div>
                                                        <div className='mt-6'>
                                                            <h3 className='absolute sr-only'>Description</h3>
                                                            <p className='text-md text-gray-700'>
                                                                The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.
                                                            </p>
                                                        </div>
                                                        <div className='mt-10 flex'>
                                                            <button className='flex max-w-[10rem] flex-1 items-center justify-center rounded-lg border border-transparent bg-blue-700 px-6 py-3 text-base text-white sm:w-full'>
                                                                Add to bag
                                                            </button>
                                                            <button className='ml-4 flex items-center justify-center rounded-md px-3 text-gray-400'>
                                                                <span className='sr-only'>Add to favourites</span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className='h-8 w-8 shrink-0'><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path></svg>
                                                            </button>
                                                        </div>
                                                        <div className='container mt-12'>
                                                            {items.map((item, index) => (
                                                                <div key={index} className='border-t'>
                                                                    <button
                                                                        onClick={() => toggleActive(index)}
                                                                        className='flex w-full my-4 items-start justify-between text-left'>
                                                                        <span className='text-sm font-semibold leading-7 text-blue-800'>
                                                                            {item.title}
                                                                        </span>
                                                                        <span>
                                                                            {active === index ? (
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
                                                                            ) : (
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                                                            )}
                                                                        </span>
                                                                    </button>

                                                                    {active === index && (
                                                                        <div className='pb-6'>
                                                                            <ul role='list' className='text-sm list-disc ml-6 text-gray-700'>
                                                                                {item.features.map((feature, i) => (
                                                                                    <li key={i} className='my-1'>
                                                                                        {feature}
                                                                                    </li>
                                                                                ))}
                                                                            </ul>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </>
                                ) : (
                                    <div>code</div>
                                )}
                            </div>
                        </div>
                    </section>

                    <section id='overview-3'>
                        <div className='grid grid-cols-[1fr,auto] items-center'>
                            <div className='flex min-w-0'>
                                <h2 className='truncate text-base font-medium leading-7 text-slate-900'>
                                    <a href="">
                                        Simple navbar with menu of left and button on right
                                    </a>
                                </h2>
                                <p className='ml-3 hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 lg:block'>
                                    Requires JS
                                </p>
                            </div>
                            <div className='ml-6 flex items-center'>
                                <div className='flex space-x-1 rounded-lg bg-slate-100 p-0.5'>
                                    <button
                                        onClick={() => changeTab3(0)}
                                        className={`flex items-center rounded-md py-[0.45rem] pl-2 pr-2 text-sm font-semibold lg:pr-3 ${activeTab3 === 0 ? 'bg-white shadow' : ''}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0950f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                                        <span className='sr-only lg:not-sr-only lg:ml-2 text-stone-900'>Preview</span>
                                    </button>
                                    <button
                                        onClick={() => changeTab3(1)}
                                        className={`flex items-center rounded-md py-[0.45rem] pl-2 pr-2 text-sm font-semibold lg:pr-3 ${activeTab3 === 1 ? 'bg-white shadow' : ''}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3e75f4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                                        <span className='sr-only lg:not-sr-only lg:ml-2 text-stone-900'>Code</span>
                                    </button>
                                </div>
                                <div className='ml-6 mr-3 hidden h-5 w-px bg-slate-900 sm:block'></div>
                                <div className='relative hidden sm:block text-slate-900 font-medium sm:text-sm pl-3.5 pr-[1.875rem]'>
                                    NextJs
                                </div>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9c9c9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                                </button>
                            </div>

                            <div className='col-span-2 row-start-2 min-w-0 mt-3'>
                                {activeTab3 === 0 ? (
                                    <>
                                        <section className='relative isolate border rounded-2xl'>
                                            <div className='mx-auto max-w-2xl px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
                                                <div className='lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-8'>
                                                    <div className='mt-10 col-span-6 px-4 sm:mt-16 ms:px-0 lg:mt-0'>
                                                        <h2 className='text-3xl font-bold tracking-tight text-gray-900'>Zip Tote Screen</h2>
                                                        <div className='mt-3'>
                                                            <h2 className='absolute sr-only'>Product information</h2>
                                                            <p className='text-3xl tracking-tight text-gray-700'>$140</p>
                                                        </div>
                                                        <div className='mt-3'>
                                                            <h3 className='absolute sr-only'>Reviews</h3>
                                                            <div className='flex items-center'>
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className='w-5 h-5 text-blue-600'><path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd"></path></svg>
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className='w-5 h-5 text-blue-600'><path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd"></path></svg>
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className='w-5 h-5 text-blue-600'><path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd"></path></svg>
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className='w-5 h-5 text-blue-600'><path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd"></path></svg>
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className='w-5 h-5 text-gray-300'><path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd"></path></svg>
                                                            </div>
                                                        </div>
                                                        <div className='mt-6'>
                                                            <h3 className='absolute sr-only'>Description</h3>
                                                            <p className='text-md text-gray-700'>
                                                                The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.
                                                            </p>
                                                        </div>
                                                        <div className='mt-10 flex'>
                                                            <button className='flex max-w-[10rem] flex-1 items-center justify-center rounded-lg border border-transparent bg-blue-700 px-6 py-3 text-base text-white sm:w-full'>
                                                                Add to bag
                                                            </button>
                                                            <button className='ml-4 flex items-center justify-center rounded-md px-3 text-gray-400'>
                                                                <span className='sr-only'>Add to favourites</span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className='h-8 w-8 shrink-0'><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path></svg>
                                                            </button>
                                                        </div>
                                                        <div className='container mt-12'>
                                                            {items.map((item, index) => (
                                                                <div key={index} className='border-t'>
                                                                    <button
                                                                        onClick={() => toggleActive(index)}
                                                                        className='flex w-full my-4 items-start justify-between text-left'>
                                                                        <span className='text-sm font-semibold leading-7 text-blue-800'>
                                                                            {item.title}
                                                                        </span>
                                                                        <span>
                                                                            {active === index ? (
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
                                                                            ) : (
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                                                            )}
                                                                        </span>
                                                                    </button>

                                                                    {active === index && (
                                                                        <div className='pb-6'>
                                                                            <ul role='list' className='text-sm list-disc ml-6 text-gray-700'>
                                                                                {item.features.map((feature, i) => (
                                                                                    <li key={i} className='my-1'>
                                                                                        {feature}
                                                                                    </li>
                                                                                ))}
                                                                            </ul>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div className='flex space-x-8 col-span-6'>
                                                        <div className='relative w-full pb-[calc(100%)]'>
                                                            <div className='absolute h-full w-full inset-0'>
                                                                <Image
                                                                    src={Hero2}
                                                                    alt='hero1'
                                                                    className='w-full h-full object-cover object-center overflow-clip rounded-lg'
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </>
                                ) : (
                                    <div>code</div>
                                )}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}

export default Hero