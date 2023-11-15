"use client"
import React, { useState } from 'react';

const Navbar1 = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    return (
        <nav className='bg-white border border-gray-200 w-full'>
            <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-3 px-10 relative'>
                <a href="/" className='text-xl font-semibold'>
                    Logo
                </a>

                <div className='flex flex-wrap space-x-10'>
                    <div className='my-auto hidden md:block'>
                        <ul className='flex flex-wrap space-x-10'>
                            <li>
                                <a href="/" className=' hover:border-b-2 border-blue-600'>Home</a>
                            </li>
                            <li>
                                <a href="/about" className='hover:border-b-2 border-blue-600'>About</a>
                            </li>
                            <li>
                                <a href="/service" className='hover:border-b-2 border-blue-600'>Service</a>
                            </li>
                            <li>
                                <a href="/price" className='hover:border-b-2 border-blue-600'>Price</a>
                            </li>
                            <li>
                                <a href="/contact" className='hover:border-b-2 border-blue-600'>Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className='hidden md:flex flex-wrap space-x-3'>
                        <button className='border px-5 py-1 rounded-xl'>
                            Log In
                        </button>
                        <button className='bg-blue-700 text-white px-5 py-1 rounded-xl'>
                            Sign In
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <div className='block md:hidden relative z-50'>
                        <button
                            className='border px-3 py-2 rounded-md'
                            onClick={toggleMobileMenu}
                            aria-expanded={showMobileMenu}
                            aria-controls='mobile-menu'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                        </button>
                        {showMobileMenu && (
                            <div
                                id='mobile-menu'
                                className='fixed inset-0 bg-white z-50'
                            >
                                <div className='flex justify-end pt-3 pr-10'>
                                    <button
                                        className='border px-3 py-2 rounded-md'
                                        onClick={toggleMobileMenu}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                    </button>

                                </div>
                                <ul className='flex flex-col space-y-2 items-center mt-20'>
                                    <li>
                                        <a href="#home">Home</a>
                                    </li>
                                    <li>
                                        <a href="#about">About</a>
                                    </li>
                                    <li>
                                        <a href="#service">Service</a>
                                    </li>
                                    <li>
                                        <a href="#price">Price</a>
                                    </li>
                                    <li>
                                        <a href="#contact">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar1;
