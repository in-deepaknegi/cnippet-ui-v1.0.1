"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import Hero2 from '@/public/hero2.jpg'
import Hero3 from '@/public/hero3.jpg'
import Hero4 from '@/public/hero4.jpg'
import Hero5 from '@/public/hero5.jpg'
import Hero6 from '@/public/hero6.jpg'
import Profile1 from '@/public/profile1.jpg';
import Profile2 from '@/public/profile2.jpg';
import Profile3 from '@/public/profile3.jpg';
import Profile4 from '@/public/profile4.jpg';
import Profile5 from '@/public/profile5.jpg';
import Profile6 from '@/public/profile6.jpg';
import Comp1 from '@/public/company/comp1.svg';
import Comp2 from '@/public/company/comp2.svg';
import Comp3 from '@/public/company/comp3.svg';
import Comp4 from '@/public/company/comp4.svg';
import Comp5 from '@/public/company/comp5.svg';


const people = [
    {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl: Profile6,
        social: {
            twitter: 'https://twitter.com/username',
            facebook: 'https://facebook.com/username',
            instagram: 'https://instagram.com/username',
        },
    },
    {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        imageUrl: Profile5,
        social: {
            twitter: 'https://twitter.com/username',
            facebook: 'https://facebook.com/username',
            instagram: 'https://instagram.com/username',
        },
    },
    {
        name: 'Lindsay Walton',
        role: 'Front-end Developer',
        imageUrl: Profile2,
        social: {
            twitter: 'https://twitter.com/username',
            facebook: 'https://facebook.com/username',
            instagram: 'https://instagram.com/username',
        },
    },
    {
        name: 'Courtney Henry',
        role: 'Designer',
        imageUrl: Profile3,
        social: {
            twitter: 'https://twitter.com/username',
            facebook: 'https://facebook.com/username',
            instagram: 'https://instagram.com/username',
        },
    },
]

const company = [
    {
        imageUrl: Comp1
    },
    {
        imageUrl: Comp2
    },
    {
        imageUrl: Comp3
    },
    {
        imageUrl: Comp4
    },
    {
        imageUrl: Comp5
    },
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

    return (
        <section className='relative overflow-hidden pt-[5.75rem]'>
            <div className='relative mx-auto mt-20 w-full px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-col'>
                    <h1 className='mt-3 text-3xl font-extrabold tracking-tight text-slate-900'>About Page</h1>
                    <nav className='order-first flex space-x-2 text-sm font-semibold'>
                        <a href="/" className='text-slate-500 hover:text-slate-600'>
                            Complete Pages
                        </a>
                        <div className='select-none text-slate-400'>/</div>
                        <a href="/" className='text-slate-500 hover:text-slate-600'>
                            About Page
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

                            <div className='col-span-2 row-start-2 min-w-0 mt-3 border rounded-2xl'>
                                {activeTab1 === 0 ? (
                                    <>
                                        <header className='inset-x-0 top-0 z-50'>
                                            <nav className="flex items-center justify-between p-7 lg:px-8" aria-label="Global">
                                                <div className="flex lg:flex-1">
                                                    <a href="/" className="-m-1.5 p-1.5 text-2xl font-medium">
                                                        Cnippet
                                                        <span className="">Byte</span>
                                                    </a>
                                                </div>
                                                <div className="hidden lg:flex lg:gap-x-12">
                                                    <a href="/components" className="text-sm font-semibold leading-6 text-gray-900">Components</a>
                                                    <a href="/features" className="text-sm font-semibold leading-6 text-gray-900">Templates</a>
                                                    <a href="/contact" className="text-sm font-semibold leading-6 text-gray-900">Contacts</a>
                                                    <a href="/about" className="text-sm font-semibold leading-6 text-gray-900">About</a>
                                                </div>
                                                <div className="hidden lg:ml-8 lg:flex lg:items-center lg:border-l lg:border-black lg:pl-8">
                                                    <a href="/login">Sign in</a>
                                                    <a className="inline-flex justify-center rounded-lg text-sm font-semibold py-2 px-4 bg-slate-900 text-white hover:bg-slate-700 -my-2.5 ml-8" href="/get-pro">
                                                        <span>Get pro <span aria-hidden="true">→</span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </nav>
                                        </header>

                                        <section className='relative isolate pt-14'>
                                            <div className='mx-auto max-w-7xl px-6 py-10 lg:flex lg:items-center gap-x-10 lg:px-8 lg:py-12'>
                                                <div className='mx-auto max-w-2xl lg:mx-0 lg:flex-auto'>
                                                    <div className="hidden sm:mb-8 sm:flex">
                                                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                                            Announcing our next round of funding. <a href="#" className="font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
                                                        </div>
                                                    </div>
                                                    <h1 className='text-left text-6xl font-semibold'>
                                                        W&apos;re changing the way people connect.
                                                    </h1>
                                                    <p className='mt-6 text-left text-lg text-gray-600 font-light'>
                                                        Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis cupidatat mollit aute velit. Et labore commodo nulla aliqua proident mollit ullamco exercitation tempor. Sint aliqua anim nulla sunt mollit id pariatur in voluptate cillum. Eu voluptate tempor esse minim amet fugiat veniam occaecat aliqua.
                                                    </p>

                                                </div>
                                                <div className='mt-16 sm:mt-24 lg:mt-0 max-w-md'>
                                                    <Image
                                                        src={Hero3}
                                                        alt='hero3'
                                                        className='aspect-square rounded-2xl'
                                                    />
                                                </div>
                                            </div>
                                        </section>

                                        <section className='mx-auto mt-12 max-w-7xl px-6 pb-24 sm:mt-10 lg:px-8'>
                                            <div className='m-auto max-w-2xl lg:mx-0 lg:max-w-none'>
                                                <h2 className='text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl'>Our mission</h2>
                                                <div className='mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row'>
                                                    <div className='w-full lg:max-w-2xl lg:flex-auto'>
                                                        <p className='mt-6 text-lg tracking-tight text-gray-600 font-light'>
                                                            Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.
                                                        </p>
                                                        <p className='mt-3 text-lg tracking-tight text-gray-600 font-light'>
                                                            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                                                        </p>
                                                        <p className='mt-3 text-lg tracking-tight text-gray-600 font-light'>
                                                            Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                                                        </p>
                                                    </div>
                                                    <div className='lg:flex lg:flex-auto lg:justify-center'>
                                                        <dl className='w-64 xl:w-80'>
                                                            <div className='flex flex-col-reverse gap-y-4'>
                                                                <dt className='text-base leading-7 text-gray-500'>Transactions every 24 hours</dt>
                                                                <dd className='text-5xl font-semibold tracking-tight text-gray-800'>44 million</dd>
                                                            </div>
                                                            <div className='mt-7 flex flex-col-reverse gap-y-4'>
                                                                <dt className='text-base leading-7 text-gray-500'>Assets under holding</dt>
                                                                <dd className='text-5xl font-semibold tracking-tight text-gray-800'>$199 trillion</dd>
                                                            </div>
                                                            <div className='mt-7 flex flex-col-reverse gap-y-4'>
                                                                <dt className='text-base leading-7 text-gray-500'>New users annually</dt>
                                                                <dd className='text-5xl font-semibold tracking-tight text-gray-800'>46,000</dd>
                                                            </div>
                                                        </dl>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        <section className='mx-auto mt-12 max-w-7xl px-6 pb-24 sm:mt-0 lg:px-8'>
                                            <div className='m-auto max-w-2xl lg:mx-0 lg:max-w-none'>
                                                <h2 className='text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl'>Our history</h2>

                                                <div className='mx-auto mt-6 grid grid-cols-1 gap-8 lg:mx-0 lg:grid-cols-4'>
                                                    <div>
                                                        <time dateTime='2021-08' className='flex items-center leading-7 text-sm font-bold text-blue-700'>
                                                            <svg viewBox="0 0 4 4" className='mr-4 h-1 w-1 flex-none' aria-hidden="true"><circle cx="2" cy="2" r="2" fill="currentColor"></circle></svg>
                                                            Aug 2021
                                                            <div className='absolute ml-2 h-[1px] w-screen bg-gray-300 sm:ml-4 lg:static lg:mr-[-1.5rem] lg:ml-8 lg:w-auto lg:flex-auto '></div>
                                                        </time>
                                                        <p className='mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-800'>
                                                            Founded company
                                                        </p>
                                                        <p className='mt-2 text-[0.925rem] leading-6 text-gray-600'>
                                                            Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <time dateTime='2021-08' className='flex items-center leading-7 text-sm font-bold text-blue-700'>
                                                            <svg viewBox="0 0 4 4" className='mr-4 h-1 w-1 flex-none' aria-hidden="true"><circle cx="2" cy="2" r="2" fill="currentColor"></circle></svg>
                                                            Dec 2021
                                                            <div className='absolute ml-2 h-[1px] w-screen bg-gray-300 sm:ml-4 lg:static lg:mr-[-1.5rem] lg:ml-8 lg:w-auto lg:flex-auto '></div>
                                                        </time>
                                                        <p className='mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-800'>
                                                            Secured $65m in funding
                                                        </p>
                                                        <p className='mt-2 text-[0.925rem] leading-6 text-gray-600'>
                                                            Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil.
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <time dateTime='2021-08' className='flex items-center leading-7 text-sm font-bold text-blue-700'>
                                                            <svg viewBox="0 0 4 4" className='mr-4 h-1 w-1 flex-none' aria-hidden="true"><circle cx="2" cy="2" r="2" fill="currentColor"></circle></svg>
                                                            Feb 2022
                                                            <div className='absolute ml-2 h-[1px] w-screen bg-gray-300 sm:ml-4 lg:static lg:mr-[-1.5rem] lg:ml-8 lg:w-auto lg:flex-auto '></div>
                                                        </time>
                                                        <p className='mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-800'>
                                                            Released beta
                                                        </p>
                                                        <p className='mt-2 text-[0.925rem] leading-6 text-gray-600'>
                                                            Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <time dateTime='2021-08' className='flex items-center leading-7 text-sm font-bold text-blue-700'>
                                                            <svg viewBox="0 0 4 4" className='mr-4 h-1 w-1 flex-none' aria-hidden="true"><circle cx="2" cy="2" r="2" fill="currentColor"></circle></svg>
                                                            Aug 2021
                                                            <div className='absolute ml-2 h-[1px] w-screen bg-gray-300 sm:ml-4 lg:static lg:mr-[-1.5rem] lg:ml-8 lg:w-auto lg:flex-auto '></div>
                                                        </time>
                                                        <p className='mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-800'>
                                                            Global launch of product
                                                        </p>
                                                        <p className='mt-2 text-[0.925rem] leading-6 text-gray-600'>
                                                            Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        <section className='pt-16 sm:pb-12 sm:pt-24 overflow-hidden'>
                                            <div className='mx-auto max-w-7xl px-5 lg:px-8'>
                                                <div className='mx-auto max-w-2xl lg:mx-0'>
                                                    <h2 className='text-4xl font-semibold'>Our Team</h2>
                                                    <p className='mt-5 text-lg text-gray-700'>
                                                        We&apos;re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.
                                                    </p>
                                                </div>
                                                <ul role='list' className='mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4'>
                                                    {people.map((person) => (
                                                        <li key={person.name}>
                                                            <Image
                                                                src={person.imageUrl}
                                                                alt='person'
                                                                className='aspect-[3/2] w-full rounded-2xl object-cover'
                                                            />
                                                            <h3 className="mt-6 text-lg font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                                            <p className="text-sm font-semibold leading-6 text-blue-700">{person.role}</p>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </section>

                                        <section className='relative isolate -z-10 mt-16 sm:pt-16 sm:pb-32'>
                                            <div className='mx-auto max-h-7 px-6 lg:px-8'>
                                                <h2 className='text-lg font-semibold sm:text-2xl text-center text-gray-800'>
                                                    Trusted by the world&apos;s most innovative teams
                                                </h2>
                                                <div className='mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:grid-cols-5 sm:gap-x-10 lg:mx-0 lg:max-w-none'>
                                                    {company.map((company, index) => (
                                                        <Image
                                                            key={index}
                                                            src={company.imageUrl}
                                                            alt='company1'
                                                            className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </section>

                                        <footer className="bg-white mt-20">
                                            <div className='py-10 mx-7'>
                                                <div className='sm:flex sm:items-center sm:justify-between'>
                                                    <a href="https://flowbite.com/" className='flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse'>
                                                        {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
                                                        <span className='self-center text-2xl font-medium whitespace-nowrap'>CnippetByte</span>
                                                    </a>
                                                    <ul className='flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 '>
                                                        <li>
                                                            <a href='#' className='hover:underline me-4 md:me-6'>About</a>
                                                        </li>
                                                        <li>
                                                            <a href='#' className='hover:underline me-4 md:me-6'>Privacy Policy</a>
                                                        </li>
                                                        <li>
                                                            <a href='#' className='hover:underline me-4 md:me-6'>Licensing</a>
                                                        </li>
                                                        <li>
                                                            <a href='#' className='hover:underline'>Contact</a>
                                                        </li>
                                                        <li>
                                                            <a href='/design' className='hover:underline'>Design</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <hr className='my-6 border-gray-200 sm:mx-auto lg:my-8' />
                                                <span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>Designed by: <a target='_blank' href="https://www.deepaknegi.in/">Deepak Negi</a></span>

                                                <span className='mt-2 block text-sm text-gray-500 sm:text-center dark:text-gray-400'>© 2023 <a href='/' className='hover:underline'>CnippetByte™</a>. All Rights Reserved.</span>
                                            </div>
                                        </footer>
                                    </>
                                ) : (
                                    <div>code</div>
                                )}
                            </div>
                        </div>
                    </section>

                    <section id='footer-2'>
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