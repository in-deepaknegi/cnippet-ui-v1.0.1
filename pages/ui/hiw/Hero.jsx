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
                    <h1 className='mt-3 text-3xl font-extrabold tracking-tight text-slate-900'>How it Works</h1>
                    <nav className='order-first flex space-x-2 text-sm font-semibold'>
                        <a href="/" className='text-slate-500 hover:text-slate-600'>
                            Application UI
                        </a>
                        <div className='select-none text-slate-400'>/</div>
                        <a href="/" className='text-slate-500 hover:text-slate-600'>
                            How it Works
                        </a>
                    </nav>
                </div>
                <div className='mt-10 space-y-28 pb-px'>
                    <section id='hiw-1'>
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
                                        <section className='bg-white px-6 py-24 lg:py-32 lg:px-8 border rounded-2xl'>
                                            <div className='max-w-2xl text-left'>
                                                <p className='text-base font-semibold leading-7 text-blue-700'>
                                                    Get familiar with our process
                                                </p>
                                                <h2 className='mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                                                    How it works
                                                </h2>
                                                <p className='mt-6 text-lg leading-8 text-gray-600'>
                                                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                                                </p>
                                            </div>

                                            <div className='mx-auto mt-6 grid grid-cols-1 gap-8 lg:mx-0 lg:grid-cols-4'>
                                                <div>
                                                    <time dateTime='2021-08' className='flex items-center leading-7 text-sm font-bold text-blue-700'>
                                                        <svg viewBox="0 0 4 4" className='mr-4 h-1 w-1 flex-none' aria-hidden="true"><circle cx="2" cy="2" r="2" fill="currentColor"></circle></svg>
                                                        Step 1
                                                        <div className='absolute ml-2 h-[1px] w-screen bg-gray-300 sm:ml-4 lg:static lg:mr-[-1.5rem] lg:ml-8 lg:w-auto lg:flex-auto '></div>
                                                    </time>
                                                    <p className='mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-800'>
                                                        Provident quia
                                                    </p>
                                                    <p className='mt-2 text-[0.925rem] leading-6 text-gray-600'>
                                                        Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.
                                                    </p>
                                                </div>
                                                <div>
                                                    <time dateTime='2021-08' className='flex items-center leading-7 text-sm font-bold text-blue-700'>
                                                        <svg viewBox="0 0 4 4" className='mr-4 h-1 w-1 flex-none' aria-hidden="true"><circle cx="2" cy="2" r="2" fill="currentColor"></circle></svg>
                                                        Step 2
                                                        <div className='absolute ml-2 h-[1px] w-screen bg-gray-300 sm:ml-4 lg:static lg:mr-[-1.5rem] lg:ml-8 lg:w-auto lg:flex-auto '></div>
                                                    </time>
                                                    <p className='mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-800'>
                                                        Voluptate repudiandae
                                                    </p>
                                                    <p className='mt-2 text-[0.925rem] leading-6 text-gray-600'>
                                                        Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil.
                                                    </p>
                                                </div>
                                                <div>
                                                    <time dateTime='2021-08' className='flex items-center leading-7 text-sm font-bold text-blue-700'>
                                                        <svg viewBox="0 0 4 4" className='mr-4 h-1 w-1 flex-none' aria-hidden="true"><circle cx="2" cy="2" r="2" fill="currentColor"></circle></svg>
                                                        Step 3
                                                        <div className='absolute ml-2 h-[1px] w-screen bg-gray-300 sm:ml-4 lg:static lg:mr-[-1.5rem] lg:ml-8 lg:w-auto lg:flex-auto '></div>
                                                    </time>
                                                    <p className='mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-800'>
                                                        Architecto nihil
                                                    </p>
                                                    <p className='mt-2 text-[0.925rem] leading-6 text-gray-600'>
                                                        Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.
                                                    </p>
                                                </div>
                                                <div>
                                                    <time dateTime='2021-08' className='flex items-center leading-7 text-sm font-bold text-blue-700'>
                                                        <svg viewBox="0 0 4 4" className='mr-4 h-1 w-1 flex-none' aria-hidden="true"><circle cx="2" cy="2" r="2" fill="currentColor"></circle></svg>
                                                        Step 4
                                                        <div className='absolute ml-2 h-[1px] w-screen bg-gray-300 sm:ml-4 lg:static lg:mr-[-1.5rem] lg:ml-8 lg:w-auto lg:flex-auto '></div>
                                                    </time>
                                                    <p className='mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-800'>
                                                        Geritecto velit
                                                    </p>
                                                    <p className='mt-2 text-[0.925rem] leading-6 text-gray-600'>
                                                        Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.
                                                    </p>
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

                    <section id='hiw-2'>
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
                                        <section className='bg-white px-6 py-24 lg:py-32 lg:px-8 border rounded-2xl'>
                                            <div className='relative isolate flex flex-col lg:flex-row'>
                                                <div className='max-w-xl text-left'>
                                                    <p className='text-base font-semibold leading-7 text-blue-700'>
                                                        Get familiar with our process
                                                    </p>
                                                    <h2 className='mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                                                        How it works
                                                    </h2>
                                                    <p className='mt-6 text-lg leading-8 text-gray-600'>
                                                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                                                    </p>
                                                </div>
                                                <div className='mt-16 text-white max-w-2xl lg:px-8 lg:mt-0'>
                                                    <div className='mx-auto flex flex-col gap-y-8'>
                                                        <div className='flex gap-2 md:gap-6'>
                                                            <div className='items-center text-blue-700'>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                                                                    <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"></path><path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z"></path><path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z"></path><path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"></path>
                                                                </svg>
                                                                <div className='mt-2 h-full w-[1px] bg-gray-300 lg:static mx-auto'></div>
                                                            </div>
                                                            <div>
                                                                <p className='text-sm font-bold text-blue-700'>Step 1</p>
                                                                <p className='mt-3 text-lg font-semibold leading-8 tracking- text-gray-800'>
                                                                    Provident quia
                                                                </p>
                                                                <p className='mt-2 text-[0.925rem] leading-6 text-gray-600'>
                                                                    Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className='flex gap-2 md:gap-6'>
                                                            <div className='items-center text-blue-700'>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                                                                    <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"></path><path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z"></path><path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z"></path><path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"></path>
                                                                </svg>
                                                                <div className='mt-2 h-full w-[1px] bg-gray-300 lg:static mx-auto'></div>
                                                            </div>
                                                            <div>
                                                                <p className='text-sm font-bold text-blue-700'>Step 2</p>
                                                                <p className='mt-3 text-lg font-semibold leading-8 tracking- text-gray-800'>
                                                                    Voluptate repudiandae
                                                                </p>
                                                                <p className='mt-2 text-[0.925rem] leading-6 text-gray-600'>
                                                                    Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className='flex gap-2 md:gap-6'>
                                                            <div className='items-center text-blue-700'>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                                                                    <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"></path><path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z"></path><path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z"></path><path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"></path>
                                                                </svg>
                                                                <div className='mt-2 h-full w-[1px] bg-gray-300 lg:static mx-auto'></div>
                                                            </div>
                                                            <div>
                                                                <p className='text-sm font-bold text-blue-700'>Step 3</p>
                                                                <p className='mt-3 text-lg font-semibold leading-8 tracking- text-gray-800'>
                                                                    Architecto nihil
                                                                </p>
                                                                <p className='mt-2 text-[0.925rem] leading-6 text-gray-600'>
                                                                    Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className='flex gap-2 md:gap-6'>
                                                            <div className='items-center text-blue-700'>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                                                                    <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"></path><path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z"></path><path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z"></path><path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"></path>
                                                                </svg>
                                                            </div>
                                                            <div>
                                                                <p className='text-sm font-bold text-blue-700'>Step 4</p>
                                                                <p className='mt-3 text-lg font-semibold leading-8 tracking- text-gray-800'>
                                                                    Geritecto velit
                                                                </p>
                                                                <p className='mt-2 text-[0.925rem] leading-6 text-gray-600'>
                                                                    Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.
                                                                </p>
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

                    <section id='footer-3'>
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
                                        <footer className='border rounded-2xl'>
                                            footer
                                        </footer>
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