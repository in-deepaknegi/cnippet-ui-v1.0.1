"use client"
import React, { useState } from 'react'
import Hero1 from '@/public/hero1.jpg';
import Hero2 from '@/public/hero2.jpg';
import Hero3 from '@/public/hero3.jpg';
import Hero4 from '@/public/hero4.jpg';
import Hero5 from '@/public/hero5.jpg';
import Hero6 from '@/public/hero6.jpg';


import Image from 'next/image';

const Hero = () => {
    const [activeTab1, setActiveTab1] = useState(0);
    const [activeTab2, setActiveTab2] = useState(0);
    const [activeTab3, setActiveTab3] = useState(0);
    const [activeTab4, setActiveTab4] = useState(0);

    const changeTab1 = (index) => {
        setActiveTab1(index);
    };
    const changeTab2 = (index) => {
        setActiveTab2(index);
    };
    const changeTab3 = (index) => {
        setActiveTab3(index);
    };
    const changeTab4 = (index) => {
        setActiveTab4(index);
    };


    return (
        <section className='relative overflow-hidden pt-[5.75rem]'>
            <div className='relative mx-auto mt-20 w-full px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-col'>
                    <h1 className='mt-3 text-3xl font-extrabold tracking-tight text-slate-900'>Hero Headers</h1>
                    <nav className='order-first flex space-x-2 text-sm font-semibold'>
                        <a href="/" className='text-slate-500 hover:text-slate-600'>
                            Application UI
                        </a>
                        <div className='select-none text-slate-400'>/</div>
                        <a href="/" className='text-slate-500 hover:text-slate-600'>
                            Hero Headers
                        </a>
                    </nav>
                </div>
                <div className='mt-10 space-y-28 pb-px'>
                    <section>
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

                            <div className='col-span-2 row-start-2 min-w-0 mt-3 border rounded-2xl overflow-hidden'>
                                {activeTab1 === 0 ? (
                                    <>
                                        <section className='relative bg-white '>
                                            <div className='grid max-w-7xl grid-cols-12 mx-auto lg:gap-8'>
                                                <div className='px-6 pb-24 pt-10 sm:pb-32 col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6'>
                                                    <div className='mx-auto max-w-2xl lg:mx-6'>
                                                        <div className="hidden sm:mb-8 sm:flex">
                                                            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                                                Announcing our next round of funding. <a href="#" className="font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
                                                            </div>
                                                        </div>
                                                        <h1 className='text-6xl font-semibold'>
                                                            Data to enrich your online bussiness
                                                        </h1>
                                                        <p className='mt-6 text-lg text-gray-600 font-light'>
                                                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                                                        </p>
                                                        <div className="mt-10 flex gap-x-6">
                                                            <a href="#" className="rounded-md bg-purple-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Browse Components</a>
                                                            <a href="#" className="text-sm font-semibold leading-6 text-gray-900 my-auto">
                                                                Explore templates <span aria-hidden="true">→</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='relative lg:col-span-6 lg:mr-8 xl:inset-0 xl:left-0 xl:mr-0'>
                                                    <Image
                                                        src={Hero2}
                                                        alt='hero image 1'
                                                        priority={true}
                                                        className='aspect-[3/2] w-full object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full'
                                                    />
                                                </div>
                                            </div>
                                        </section>
                                        {/* <div className='bg-gray-100 h-[10rem]'></div> */}
                                    </>
                                ) : (
                                    <div>code</div>
                                )}
                            </div>
                        </div>
                    </section>

                    <section>
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

                            <div className='col-span-2 row-start-2 min-w-0 mt-3 border rounded-2xl'>
                                {activeTab2 === 0 ? (
                                    <>
                                        <section className='relative isolate'>
                                            <div className='overflow-hidden'>
                                                <div className='mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-8'>
                                                    <div className='mx-auto max-w-2xl gap-14 lg:mx-0 lg:flex lg:max-w-none lg:text-center'>
                                                        <div className='w-full max-w-xl lg:flex-shrink-0 lg:max-w-2xl my-auto'>
                                                            <div className="hidden sm:mb-8 sm:flex">
                                                                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                                                    Announcing our next round of funding. <a href="#" className="font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
                                                                </div>
                                                            </div>
                                                            <h1 className='text-left text-6xl font-semibold'>
                                                                Data to enrich your online bussiness
                                                            </h1>
                                                            <p className='mt-6 text-left text-lg text-gray-600 font-light'>
                                                                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                                                            </p>
                                                            <div className="mt-10 flex gap-x-6">
                                                                <a href="#" className="rounded-md bg-purple-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                                                    Get Started
                                                                </a>
                                                                <a href="#" className="text-sm font-semibold leading-6 text-gray-900 my-auto">
                                                                    Read more <span aria-hidden="true">→</span></a>
                                                            </div>
                                                        </div>
                                                        <div className='mt-14 flex justify-end gap-8 sm:mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0'>
                                                            <div className='ml-auto w-44 flex-none pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-[0] xl:pt-80'>
                                                                <div className='relative'>
                                                                    <Image
                                                                        src={Hero2}
                                                                        alt='hero image 2'
                                                                        className='w-full h-full aspect-[2/3] rounded-2xl bg-gray-50 object-cover shadow-xl'
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className='ml-auto w-44 flex-none pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-[0] xl:pt-30'>
                                                                <div className='relative'>
                                                                    <Image
                                                                        src={Hero3}
                                                                        alt='hero image 2'
                                                                        priority={true}
                                                                        className='w-full h-full aspect-[2/3] rounded-2xl bg-gray-50 object-cover shadow-xl'
                                                                    />
                                                                </div>
                                                                <div className='relative'>
                                                                    <Image
                                                                        src={Hero4}
                                                                        alt='hero image 2'
                                                                        priority={true}
                                                                        className='mt-8 w-full h-full aspect-[2/3] rounded-2xl bg-gray-50 object-cover shadow-xl'
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className='w-44 flex-none sm:ml-0 lg:order-last xl:order-[0] xl:mt-[-2rem]'>
                                                                <div className='relative'>
                                                                    <Image
                                                                        src={Hero5}
                                                                        alt='hero image 2'
                                                                        priority={true}
                                                                        className='w-full h-full aspect-[2/3] rounded-2xl bg-gray-50 object-cover shadow-xl'
                                                                    />
                                                                </div>
                                                                <div className='relative'>
                                                                    <Image
                                                                        src={Hero6}
                                                                        alt='hero image 2'
                                                                        priority={true}
                                                                        className='mt-8 w-full h-full aspect-[2/3] rounded-2xl bg-gray-50 object-cover shadow-xl'
                                                                    />
                                                                </div>
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

                    <section>
                        <div className='grid grid-cols-[1fr,auto] items-center'>
                            <div className='flex min-w-0'>
                                <h2 className='truncate text-base font-medium leading-7 text-slate-900'>
                                    <a href="">
                                        Simple centered with backgroud image
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

                            <div className='col-span-2 row-start-2 min-w-0 mt-3 border rounded-2xl'>
                                {activeTab3 === 0 ? (
                                    <>
                                        <section className='relative isolate overflow-hidden'>
                                            <Image
                                                src={Hero3}
                                                alt='hero image 3'
                                                className='absolute inset-0 z-[-10] h-full w-full object-cover rounded-2xl blur-[2px]'
                                            />
                                            <div className='absolute w-full h-full z-[-9] bg-gradient-to-b from-black/10 via-black/30 to-black rounded-2xl'></div>
                                            <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
                                                <div className="hidden sm:mb-8 sm:flex">
                                                    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-200 ring-1 ring-gray-100/10 hover:ring-gray-100">
                                                        Announcing our next round of funding. <a href="#" className="font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
                                                    </div>
                                                </div>
                                                <h1 className='text-left text-6xl font-semibold text-white'>
                                                    Data to enrich your online bussiness
                                                </h1>
                                                <p className='mt-6 text-left text-lg text-gray-100 font-light'>
                                                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                                                </p>
                                                <div className="mt-10 flex gap-x-6">
                                                    <a href="#" className="rounded-md bg-purple-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                                        Get Started
                                                    </a>
                                                    <a href="#" className="text-sm font-semibold leading-6 text-gray-300 my-auto">
                                                        Read more <span aria-hidden="true">→</span></a>
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

                    <section>
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
                                        onClick={() => changeTab4(0)}
                                        className={`flex items-center rounded-md py-[0.45rem] pl-2 pr-2 text-sm font-semibold lg:pr-3 ${activeTab4 === 0 ? 'bg-white shadow' : ''}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0950f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                                        <span className='sr-only lg:not-sr-only lg:ml-2 text-stone-900'>Preview</span>
                                    </button>
                                    <button
                                        onClick={() => changeTab4(1)}
                                        className={`flex items-center rounded-md py-[0.45rem] pl-2 pr-2 text-sm font-semibold lg:pr-3 ${activeTab4 === 1 ? 'bg-white shadow' : ''}`}>
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

                            <div className='col-span-2 row-start-2 min-w-0 mt-3 border rounded-2xl'>
                                {activeTab4 === 0 ? (
                                    <>
                                        <section className='relative isolate'>
                                            <div className='overflow-hidden'>
                                                <div className='mx-auto max-w-7xl px-6 pb-16 lg:px-8'>
                                                    <div className='mx-auto max-w-2xl gap-14 lg:mx-0 lg:flex lg:max-w-none lg:text-center'>
                                                        <div className='w-full max-w-xl lg:flex-shrink-0 lg:max-w-2xl my-auto'>
                                                            <div className="hidden sm:mb-8 sm:flex">
                                                                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                                                    Announcing our next round of funding. <a href="#" className="font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
                                                                </div>
                                                            </div>
                                                            <h1 className='text-left text-6xl font-semibold'>
                                                                Data to enrich your online bussiness
                                                            </h1>
                                                            <p className='mt-6 text-left text-lg text-gray-600 font-light'>
                                                                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                                                            </p>
                                                            <div className="mt-10 flex gap-x-6">
                                                                <a href="#" className="rounded-md bg-purple-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                                                    Get Started
                                                                </a>
                                                                <a href="#" className="text-sm font-semibold leading-6 text-gray-900 my-auto">
                                                                    Read more <span aria-hidden="true">→</span></a>
                                                            </div>
                                                        </div>
                                                        <div className='mt-14 flex justify-end gap-8 sm:mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0 h-screen'>
                                                            <div className='ml-auto w-60 flex-none sm:ml-0 lg:order-last xl:order-[0] mt-[-2rem]'>
                                                                <div className='relative'>
                                                                    <Image
                                                                        src={Hero5}
                                                                        alt='hero image 2'
                                                                        className='w-full h-full aspect-square rounded-2xl bg-gray-50 object-cover shadow-xl'
                                                                    />
                                                                </div>
                                                                <div className='relative'>
                                                                    <Image
                                                                        src={Hero2}
                                                                        alt='hero image 2'
                                                                        className='mt-10 w-full h-full aspect-square rounded-2xl bg-gray-50 object-cover shadow-xl'
                                                                    />
                                                                </div>
                                                                <div className='relative'>
                                                                    <Image
                                                                        src={Hero3}
                                                                        alt='hero image 2'
                                                                        className='mt-10 w-full h-full aspect-square rounded-2xl bg-gray-50 object-cover shadow-xl'
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className='ml-auto w-60 flex-none sm:ml-0 lg:order-last xl:order-[0] mt-[-12rem]'>
                                                                <div className='relative'>
                                                                    <Image
                                                                        src={Hero4}
                                                                        alt='hero image 2'
                                                                        className='w-full h-full aspect-square rounded-2xl bg-gray-50 object-cover shadow-xl'
                                                                    />
                                                                </div>
                                                                <div className='relative'>
                                                                    <Image
                                                                        src={Hero5}
                                                                        alt='hero image 2'
                                                                        className='mt-10 w-full h-full aspect-square rounded-2xl bg-gray-50 object-cover shadow-xl'
                                                                    />
                                                                </div>
                                                                <div className='relative'>
                                                                    <Image
                                                                        src={Hero6}
                                                                        alt='hero image 2'
                                                                        className='mt-10 w-full h-full aspect-square rounded-2xl bg-gray-50 object-cover shadow-xl'
                                                                    />
                                                                </div>
                                                                <div className='relative'>
                                                                    <Image
                                                                        src={Hero2}
                                                                        alt='hero image 2'
                                                                        className='mt-10 w-full h-full aspect-square rounded-2xl bg-gray-50 object-cover shadow-xl'
                                                                    />
                                                                </div>
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