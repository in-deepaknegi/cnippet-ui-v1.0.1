"use client"
import React, { useState } from 'react'

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

    return (
        <section className='relative overflow-hidden pt-[5.75rem]'>
            <div className='relative mx-auto mt-20 w-full px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-col'>
                    <h1 className='mt-3 text-3xl font-extrabold tracking-tight text-slate-900'>Features</h1>
                    <nav className='order-first flex space-x-2 text-sm font-semibold'>
                        <a href="/" className='text-slate-500 hover:text-slate-600'>
                            Application UI
                        </a>
                        <div className='select-none text-slate-400'>/</div>
                        <a href="/" className='text-slate-500 hover:text-slate-600'>
                            Features
                        </a>
                    </nav>
                </div>
                <div className='mt-10 space-y-28 pb-px'>
                    <section id='feature-1'>
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
                                    <section className='bg-white py-24 border rounded-2xl sm:py-32'>
                                        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                                            <div className='mx-auto max-w-2xl text-center'>
                                                <h2 className='text-base font-semibold leading-7 text-blue-700'>
                                                    Deploy faster
                                                </h2>
                                                <p className='mt-2 text-3xl font-bold tracking-[-0.025em] text-gray-900 sm:text-4xl'>
                                                    Everything you need to deploy your app
                                                </p>
                                                <p className='mt-6 text-lg leading-8 text-gray-600'>
                                                    Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.
                                                </p>
                                            </div>
                                            <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none'>
                                                <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3'>
                                                    <div className='flex flex-col'>
                                                        <dt className='flex text-center gap-x-3 text-base font-semibold leading-7'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className='w-6 h-6 text-blue-600'><path fillRule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clipRule="evenodd"></path></svg>
                                                            Push to deploy
                                                        </dt>
                                                        <dd className='mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600'>
                                                            <p className='flex-auto'>
                                                                Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.
                                                            </p>
                                                            <p className='mt-6'>
                                                                <a href="/" className='text-sm font-semibold leading-6 text-blue-700'>
                                                                    Learn more
                                                                    <span> →</span>
                                                                </a>
                                                            </p>
                                                        </dd>
                                                    </div>
                                                    <div className='flex flex-col'>
                                                        <dt className='flex text-center gap-x-3 text-base font-semibold leading-7'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className='w-6 h-6 text-blue-600'><path fillRule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clipRule="evenodd"></path></svg>
                                                            SSL certificates
                                                        </dt>
                                                        <dd className='mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600'>
                                                            <p className='flex-auto'>
                                                                Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.
                                                            </p>
                                                            <p className='mt-6'>
                                                                <a href="/" className='text-sm font-semibold leading-6 text-blue-700'>
                                                                    Learn more
                                                                    <span> →</span>
                                                                </a>
                                                            </p>
                                                        </dd>
                                                    </div>
                                                    <div className='flex flex-col'>
                                                        <dt className='flex text-center gap-x-3 text-base font-semibold leading-7'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className='w-6 h-6 text-blue-600'><path fillRule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clipRule="evenodd"></path></svg>
                                                            Simple queues
                                                        </dt>
                                                        <dd className='mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600'>
                                                            <p className='flex-auto'>
                                                                Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.
                                                            </p>
                                                            <p className='mt-6'>
                                                                <a href="/" className='text-sm font-semibold leading-6 text-blue-700'>
                                                                    Learn more
                                                                    <span> →</span>
                                                                </a>
                                                            </p>
                                                        </dd>
                                                    </div>
                                                </dl>
                                            </div>
                                        </div>
                                    </section>
                                ) : (
                                    <div>code</div>
                                )}
                            </div>
                        </div>
                    </section>

                    <section id='feature-2'>
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
                                    <section className='bg-white py-24 border rounded-2xl sm:py-32'>
                                        <div className='mx-auto grid max-w-7xl px-6 lg:px-8 lg:grid-cols-2'>
                                            <div className='mx-auto md:max-w-2xl lg:max-w-lg text-left'>
                                                <h2 className='text-base font-semibold leading-7 text-blue-700'>
                                                    Deploy faster
                                                </h2>
                                                <p className='mt-2 text-3xl font-bold tracking-[-0.025em] text-gray-900 sm:text-4xl'>
                                                    Everything you need to deploy your app
                                                </p>
                                                <p className='mt-6 text-lg leading-8 text-gray-600'>
                                                    Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.
                                                </p>
                                            </div>
                                            <div className='mx-auto mt-16 lg:px-10 max-w-2xl lg:mt-0 lg:max-w-none'>
                                                <dl className='grid gap-y-12 lg:grid-rows-3'>
                                                    <div className='flex flex-col'>
                                                        <dt className='flex text-center gap-x-3 text-base font-semibold leading-7'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className='w-6 h-6 text-blue-600'><path fillRule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clipRule="evenodd"></path></svg>
                                                            Push to deploy
                                                        </dt>
                                                        <dd className='mt-4 flex flex-col text-base leading-7 text-gray-600'>
                                                            <p className='flex-auto'>
                                                                Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.
                                                            </p>
                                                            <p className='mt-3'>
                                                                <a href="/" className='text-sm font-semibold leading-6 text-blue-700'>
                                                                    Learn more
                                                                    <span> →</span>
                                                                </a>
                                                            </p>
                                                        </dd>
                                                    </div>
                                                    <div className='flex flex-col'>
                                                        <dt className='flex text-center gap-x-3 text-base font-semibold leading-7'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className='w-6 h-6 text-blue-600'><path fillRule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clipRule="evenodd"></path></svg>
                                                            SSL certificates
                                                        </dt>
                                                        <dd className='mt-4 flex flex-col text-base leading-7 text-gray-600'>
                                                            <p className='flex-auto'>
                                                                Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.
                                                            </p>
                                                            <p className='mt-3'>
                                                                <a href="/" className='text-sm font-semibold leading-6 text-blue-700'>
                                                                    Learn more
                                                                    <span> →</span>
                                                                </a>
                                                            </p>
                                                        </dd>
                                                    </div>
                                                    <div className='flex flex-col'>
                                                        <dt className='flex text-center gap-x-3 text-base font-semibold leading-7'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className='w-6 h-6 text-blue-600'><path fillRule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clipRule="evenodd"></path></svg>
                                                            Simple queues
                                                        </dt>
                                                        <dd className='mt-4 flex flex-col text-base leading-7 text-gray-600'>
                                                            <p className='flex-auto'>
                                                                Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.
                                                            </p>
                                                            <p className='mt-3'>
                                                                <a href="/" className='text-sm font-semibold leading-6 text-blue-700'>
                                                                    Learn more
                                                                    <span> →</span>
                                                                </a>
                                                            </p>
                                                        </dd>
                                                    </div>
                                                </dl>
                                            </div>
                                        </div>
                                    </section>
                                ) : (
                                    <div>code</div>
                                )}
                            </div>
                        </div>
                    </section>

                    <section id='feature-3'>
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

                            <div className='col-span-2 row-start-2 min-w-0 mt-3 '>
                                {activeTab3 === 0 ? (
                                    <section className='bg-white py-24 border rounded-2xl sm:py-32'>
                                        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                                            <div className='max-w-2xl text-left'>
                                                <h2 className='text-base font-semibold leading-7 text-blue-700'>
                                                    Deploy faster
                                                </h2>
                                                <p className='mt-2 text-3xl font-bold tracking-[-0.025em] text-gray-900 sm:text-4xl'>
                                                    Everything you need to deploy your app
                                                </p>
                                                <p className='mt-6 text-lg leading-8 text-gray-600'>
                                                    Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.
                                                </p>
                                            </div>
                                            <div className='mx-auto mt-10 max-w-2xl sm:mt-12 lg:mt-16 lg:max-w-none'>
                                                <dl className='mx-auto grid md:max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3'>
                                                    <div className='p-4 bg-gray-100/40 rounded-2xl shadow-lg flex flex-col border'>
                                                        <dt className='flex text-center gap-x-3 text-base font-semibold leading-7'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className='w-6 h-6 text-blue-600'><path fillRule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clipRule="evenodd"></path></svg>
                                                            Push to deploy
                                                        </dt>
                                                        <dd className='mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600'>
                                                            <p className='flex-auto'>
                                                                Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.
                                                            </p>
                                                            <p className='mt-6'>
                                                                <a href="/" className='text-sm font-semibold leading-6 text-blue-700'>
                                                                    Learn more
                                                                    <span> →</span>
                                                                </a>
                                                            </p>
                                                        </dd>
                                                    </div>
                                                    <div className='p-4 bg-gray-100/40 rounded-2xl shadow-lg flex flex-col border'>
                                                        <dt className='flex text-center gap-x-3 text-base font-semibold leading-7'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className='w-6 h-6 text-blue-600'><path fillRule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clipRule="evenodd"></path></svg>
                                                            SSL certificates
                                                        </dt>
                                                        <dd className='mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600'>
                                                            <p className='flex-auto'>
                                                                Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.
                                                            </p>
                                                            <p className='mt-6'>
                                                                <a href="/" className='text-sm font-semibold leading-6 text-blue-700'>
                                                                    Learn more
                                                                    <span> →</span>
                                                                </a>
                                                            </p>
                                                        </dd>
                                                    </div>
                                                    <div className='p-4 bg-gray-100/40 rounded-2xl shadow-lg flex flex-col border'>
                                                        <dt className='flex text-center gap-x-3 text-base font-semibold leading-7'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className='w-6 h-6 text-blue-600'><path fillRule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clipRule="evenodd"></path></svg>
                                                            Simple queues
                                                        </dt>
                                                        <dd className='mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600'>
                                                            <p className='flex-auto'>
                                                                Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.
                                                            </p>
                                                            <p className='mt-6'>
                                                                <a href="/" className='text-sm font-semibold leading-6 text-blue-700'>
                                                                    Learn more
                                                                    <span> →</span>
                                                                </a>
                                                            </p>
                                                        </dd>
                                                    </div>
                                                </dl>
                                            </div>
                                        </div>
                                    </section>
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