import React from 'react'
import Image from 'next/image'
import Nav from '@/public/navbars.png'

const Pages = () => {
    return (
        <section className='mx-auto w-full mt-12 px-4 sm:px-6 lg:px-8 lg:mt-24'>
            <div className='max-w-2xl'>
                <h2 className='text-base font-semibold leading-7 text-indigo-600'>Pages</h2>
                <p className='mt-4 text-4xl font-extrabold tracking-tight text-slate-900'>
                    Beautifully crafted pages, ready for your next project.
                </p>
            </div>
            <div className='max-w-xl'>
                <p className='mt-4 text-base leading-7 text-slate-700'>
                    Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize to your heart&apos;s content.
                </p>
            </div>

            <div className='relative mt-10 md:mt-8'>
                <ul className='grid grid-cols-[repeat(auto-fill,minmax(12rem, 1fr))] gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    <li>
                        <div className='relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100'>
                            <div className='relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10'>
                                <Image
                                    src={Nav}
                                    alt='navbar-img'
                                    className='absolute inset-0 h-full w-full'
                                />
                            </div>
                            <h4 className='mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600'>
                                <a href="/pages/about">
                                    <span className='absolute -inset-2.5 z-10'></span>
                                    <span className='relative'>About</span>
                                </a>
                            </h4>
                            <p className='relative mt-1.5 text-xs font-medium text-slate-500'>4 components</p>
                        </div>
                    </li>
                    <li>
                        <div className='group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100'>
                            <div className='relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10'>
                                <Image
                                    src={Nav}
                                    alt='navbar-img'
                                    className='absolute inset-0 h-full w-full'
                                />
                            </div>
                            <h4 className='mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600'>
                                <a href="/pages/contact">
                                    <span className='absolute -inset-2.5 z-10'></span>
                                    <span className='relative'>Contact</span>
                                </a>
                            </h4>
                            <p className='relative mt-1.5 text-xs font-medium text-slate-500'>4 components</p>
                        </div>
                    </li>
                    <li>
                        <div className='group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100'>
                            <div className='relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10'>
                                <Image
                                    src={Nav}
                                    alt='navbar-img'
                                    className='absolute inset-0 h-full w-full'
                                />
                            </div>
                            <h4 className='mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600'>
                                <a href="/pages/sign-in">
                                    <span className='absolute -inset-2.5 z-10'></span>
                                    <span className='relative'>Sign In</span>
                                </a>
                            </h4>
                            <p className='relative mt-1.5 text-xs font-medium text-slate-500'>4 components</p>
                        </div>
                    </li>

                    <div className="pointer-events-none absolute -inset-x-2.5 -bottom-2.5 h-[16.6%] bg-gradient-to-t from-white to-white/25 sm:h-[33.3%]"></div>
                </ul>
            </div>
            <div className="pointer-events-none relative z-10 -mt-5 flex justify-center">
                <a className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-primary text-white pointer-events-auto" href="/components">
                    <span>Show more...</span>
                </a>
            </div>
        </section>
    )
}

export default Pages