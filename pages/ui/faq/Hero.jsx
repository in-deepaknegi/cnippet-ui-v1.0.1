"use client"
import React, { useState } from 'react'

const Data = [
    {
        question: "What's the best thing about Switzerland",
        answer: "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "What do you call someone with no body and no nose?",
        answer: "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "Why do you never see elephants hiding in trees?",
        answer: "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
    }
]

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
                    <h1 className='mt-3 text-3xl font-extrabold tracking-tight text-slate-900'>FAQs</h1>
                    <nav className='order-first flex space-x-2 text-sm font-semibold'>
                        <a href="/" className='text-slate-500 hover:text-slate-600'>
                            Application UI
                        </a>
                        <div className='select-none text-slate-400'>/</div>
                        <a href="/" className='text-slate-500 hover:text-slate-600'>
                            FAQs
                        </a>
                    </nav>
                </div>
                <div className='mt-10 space-y-28 pb-px'>
                    <section id='footer-1'>
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

                            {activeTab1 === 0 ? (
                                <section className='col-span-2 row-start-2 min-w-0 mt-3 border rounded-2xl'>
                                    <div className='mx-auto max-w-7xl px-6 py-16 sm:pt-24 lg:px-8 lg:py-20'>
                                        <div className='lg:grid lg:grid-cols-12 lg:gap-8'>
                                            <div className='col-span-5'>
                                                <h2 className='text-2xl font-bold leading-10 text-gray-800'>Frequently asked questions</h2>
                                                <p className='mt-4 leading-7 text-gray-500'>
                                                    Can&apos;t find the answer you&apos;re looking for? Reach out to our
                                                    <a href="/contact" className='text-blue-600'> customer support </a>
                                                    team.
                                                </p>
                                            </div>
                                            <div className='mt-10 col-span-7 lg:mt-0'>
                                                <dl className='space-y-9'>
                                                    <div>
                                                        <dt className='text-base font-semibold leading-7 text-gray-900'>
                                                            How do you make holy water?
                                                        </dt>
                                                        <dd className='mt-2 text-base leading-7 text-gray-600'>
                                                            You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                                                        </dd>
                                                    </div>
                                                    <div>
                                                        <dt className='text-base font-semibold leading-7 text-gray-900'>
                                                            What&apos;s the best thing about Switzerland?
                                                        </dt>
                                                        <dd className='mt-2 text-base leading-7 text-gray-600'>
                                                            I don&apos;t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                                                        </dd>
                                                    </div>
                                                    <div>
                                                        <dt className='text-base font-semibold leading-7 text-gray-900'>
                                                            What do you call someone with no body and no nose?
                                                        </dt>
                                                        <dd className='mt-2 text-base leading-7 text-gray-600'>
                                                            Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                                                        </dd>
                                                    </div>

                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            ) : (
                                <div className='col-span-2 row-start-2 min-w-0 mt-3 border rounded-2xl'>code</div>
                            )}
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

                            {activeTab2 === 0 ? (
                                <section className='col-span-2 row-start-2 min-w-0 mt-3 border rounded-2xl'>
                                    <div className='mx-auto max-w-4xl px-6 py-16 sm:pt-24 lg:px-8 lg:py-20'>
                                        <div className=''>
                                            <div className='border-b border-gray-300 pb-3'>
                                                <h2 className='text-2xl font-bold leading-10 text-gray-800'>Frequently asked questions</h2>
                                                <p className='mt-2 leading-7 text-gray-500'>
                                                    Can&apos;t find the answer you&apos;re looking for? Reach out to our
                                                    <a href="/contact" className='text-blue-600'> customer support </a>
                                                    team.
                                                </p>
                                            </div>
                                            <div className='mt-8 lg:mt-10'>

                                                <dl className='space-y-9'>
                                                    {Data.map((item, index) => (
                                                        <div key={index}>
                                                            <dt>
                                                                <button
                                                                    onClick={() => toggleActive(index)}
                                                                    className='flex w-full items-start justify-between text-left'>
                                                                    <span className='text-base font-semibold leading-7 text-gray-900'>
                                                                        {item.question}
                                                                    </span>
                                                                    <span>
                                                                        {active === index ? (
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
                                                                        ) : (
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                                                        )}
                                                                    </span>
                                                                </button>
                                                            </dt>
                                                            {active === index && (
                                                                <dd className='mt-2 text-base leading-7 text-gray-600'>
                                                                    {item.answer}
                                                                </dd>
                                                            )}
                                                        </div>
                                                    ))}
                                                </dl>

                                            </div>
                                        </div>
                                    </div>
                                </section>
                            ) : (
                                <section className='col-span-2 row-start-2 min-w-0 mt-3 border rounded-2xl'>
                                    code
                                </section>
                            )}
                        </div>
                    </section>

                    <section>
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

                            <div className='col-span-2 row-start-2 min-w-0 mt-3 border rounded-2xl'>
                                {activeTab3 === 0 ? (
                                    <>
                                        <footer>
                                            footer
                                        </footer>
                                        {/* <div className='bg-gray-100 h-[10rem]'></div> */}
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