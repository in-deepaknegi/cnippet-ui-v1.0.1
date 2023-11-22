import React from 'react'
import Image from 'next/image'
import Nav from '../../public/navbars.png'

const List = () => {
    return (
        <section className='mx-auto w-full px-4 sm:px-6 lg:px-8'>
            <div className='relative mt-10 md:mt-8'>
                <ul className='grid grid-cols-[repeat(auto-fill,minmax(12rem, 1fr))] gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
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
                                <a href="/components/application-ui/navbar">
                                    <span className='absolute -inset-2.5 z-10'></span>
                                    <span className='relative'>Navbar</span>
                                </a>
                            </h4>
                            <p className='relative mt-1.5 text-xs font-medium text-slate-500'>4 components</p>
                        </div>
                    </li>
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
                                <a href="/components/application-ui/footer">
                                    <span className='absolute -inset-2.5 z-10'></span>
                                    <span className='relative'>Footer</span>
                                </a>
                            </h4>
                            <p className='relative mt-1.5 text-xs font-medium text-slate-500'>4 components</p>
                        </div>
                    </li>
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
                                <a href="/components/application-ui/hero">
                                    <span className='absolute -inset-2.5 z-10'></span>
                                    <span className='relative'>Hero Header</span>
                                </a>
                            </h4>
                            <p className='relative mt-1.5 text-xs font-medium text-slate-500'>4 components</p>
                        </div>
                    </li>
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
                                <a href="/components/application-ui/testimonial">
                                    <span className='absolute -inset-2.5 z-10'></span>
                                    <span className='relative'>Testimonials</span>
                                </a>
                            </h4>
                            <p className='relative mt-1.5 text-xs font-medium text-slate-500'>4 components</p>
                        </div>
                    </li>
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
                                <a href="/components/application-ui/contact">
                                    <span className='absolute -inset-2.5 z-10'></span>
                                    <span className='relative'>Contact</span>
                                </a>
                            </h4>
                            <p className='relative mt-1.5 text-xs font-medium text-slate-500'>4 components</p>
                        </div>
                    </li>
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
                                <a href="/">
                                    <span className='absolute -inset-2.5 z-10'></span>
                                    <span className='relative'>Navbar</span>
                                </a>
                            </h4>
                            <p className='relative mt-1.5 text-xs font-medium text-slate-500'>4 components</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default List