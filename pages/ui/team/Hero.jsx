"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import Profile1 from '@/public/profile1.jpg';
import Profile2 from '@/public/profile2.jpg';
import Profile3 from '@/public/profile3.jpg';
import Profile4 from '@/public/profile4.jpg';
import Profile5 from '@/public/profile5.jpg';
import Profile6 from '@/public/profile6.jpg';
import Twitter from '@/public/twitter.svg';
import Facebook from '@/public/facebook.svg';
import Instagram from '@/public/instagram.svg';


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
                    <h1 className='mt-3 text-3xl font-extrabold tracking-tight text-slate-900'>Teams</h1>
                    <nav className='order-first flex space-x-2 text-sm font-semibold'>
                        <a href="/" className='text-slate-500 hover:text-slate-600'>
                            Application UI
                        </a>
                        <div className='select-none text-slate-400'>/</div>
                        <a href="/" className='text-slate-500 hover:text-slate-600'>
                            Teams
                        </a>
                    </nav>
                </div>
                <div className='mt-10 space-y-28 pb-px'>
                    <section id='team-1'>
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
                                        <section className='bg-white py-24 sm:py-32 border rounded-2xl'>
                                            <div className='mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3'>
                                                <div className='max-w-2xl'>
                                                    <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Meet our leadership</h2>
                                                    <p className='mt-6 text-lg leading-8 text-gray-600'>
                                                        Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
                                                        suspendisse.
                                                    </p>
                                                </div>
                                                <ul role='list' className='grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2'>
                                                    {people.map((person) => (
                                                        <li key={person.name}>
                                                            <div className='flex items-center gap-x-6'>
                                                                <Image
                                                                    src={person.imageUrl}
                                                                    alt='person'
                                                                    className='h-20 w-20 rounded-full object-cover'
                                                                />
                                                                <div>
                                                                    <h3 className='text-base font-semibold leading-7 tracking-tight text-gray-900'>{person.name}</h3>
                                                                    <p className='text-sm font-semibold leading-6 text-indigo-600'>{person.role}</p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </section>
                                    </>
                                ) : (
                                    <div>code</div>
                                )}
                            </div>
                        </div>
                    </section>

                    <section id='team-2'>
                        <div className='grid grid-cols-[1fr,auto] items-center'>
                            <div className='flex min-w-0'>
                                <h2 className='truncate text-base font-medium leading-7 text-slate-900'>
                                    <a href=''>
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
                                        <section className='bg-white py-24 sm:py-32 border rounded-2xl'>
                                            <div className='mx-auto max-w-7xl px-5 lg:px-8'>
                                                <div className='mx-auto max-w-2xl lg:mx-0'>
                                                    <h2 className='text-4xl font-semibold'>Our Team</h2>
                                                    <p className='mt-5 text-lg text-gray-700'>
                                                        We&apos;re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.
                                                    </p>
                                                </div>
                                                <ul role='list' className='mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
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
                                    </>
                                ) : (
                                    <div>code</div>
                                )}
                            </div>
                        </div>
                    </section>

                    <section id='team-3'>
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
                                        <section className='bg-white py-16 sm:py-20 border rounded-2xl'>
                                            <div className='mx-auto max-w-7xl px-5 lg:px-8'>
                                                <div className='mx-auto max-w-2xl lg:mx-0'>
                                                    <h2 className='text-4xl font-semibold'>Meet out team</h2>
                                                    <p className='mt-5 text-lg text-gray-700'>
                                                        We&apos;re a dynamic group of individuals who are passionate about what we do.
                                                    </p>
                                                </div>
                                                <ul role='list' className='mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
                                                    {people.map((person) => (
                                                        <li key={person.name} className='mx-auto'>
                                                            <Image
                                                                src={person.imageUrl}
                                                                alt='person'
                                                                className='w-[15rem] h-[15rem] aspect-square rounded-full object-cover'
                                                            />
                                                            <h3 className='mt-6 text-lg text-center font-semibold leading-7 tracking-tight text-gray-900'>{person.name}</h3>
                                                            <p className='text-sm text-center font-semibold leading-6 text-blue-700'>{person.role}</p>

                                                            {/* Social media icons */}
                                                            <div className='flex justify-center mt-4 space-x-4'>
                                                                {person.social && person.social.twitter && (
                                                                    <a href={person.social.twitter}>
                                                                        <Image
                                                                            src={Twitter}
                                                                            alt='twitter'
                                                                            className='w-7 h-7'
                                                                        />
                                                                    </a>
                                                                )}
                                                                {person.social && person.social.instagram && (
                                                                    <a href={person.social.instagram}>
                                                                        <Image
                                                                            src={Instagram}
                                                                            alt='instagram'
                                                                            className='w-7 h-7'
                                                                        />
                                                                    </a>
                                                                )}
                                                                {person.social && person.social.facebook && (
                                                                    <a href={person.social.facebook}>
                                                                        <Image
                                                                            src={Facebook}
                                                                            alt='facebook'
                                                                            className='w-7 h-7'
                                                                        />
                                                                    </a>
                                                                )}
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
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