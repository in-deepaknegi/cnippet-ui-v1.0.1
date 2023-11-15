"use client"
import React, { useState } from 'react';

const Navbar3 = () => {
    const [onhover, setOnhover] = useState(false);
    const [onclick, setOnclick] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const toogleHover = () => {
        setOnhover(!onhover);
    };

    const toogleClick = () => {
        setOnclick(!onclick);
    };
    const closeClick = () => {
        setOnclick(false);
    }

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    return (
        <nav className='bg-white border border-gray-200 w-full my-10'>
            <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-3 px-10 relative'>
                <div className='flex flex-wrap space-x-10'>
                    <a href="/" className='text-xl font-semibold'>
                        Logo
                    </a>

                    <div className='flex flex-wrap space-x-10'>
                        <div className='my-auto hidden md:block'>
                            <ul className='flex flex-wrap space-x-10'>
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/about">About</a>
                                </li>
                                <li onMouseEnter={toogleHover} onMouseLeave={toogleHover} className='flex cursor-pointer'>
                                    <a href="/something">
                                        On Hover
                                    </a>
                                    <span className='my-auto'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${onhover ? 'rotate-180 transition-all duration-500' : ''} mx-1`}><path d="m6 9 6 6 6-6" /></svg>
                                    </span>
                                    {onhover && (
                                        <ul className='absolute bg-white border border-gray-200 -ml-4 py-2 mt-6'>
                                            <li className='hover:bg-gray-100 px-4 py-2'>
                                                Service 1
                                            </li>
                                            <li className='hover:bg-gray-100 px-4 py-2'>
                                                Service 2
                                            </li>
                                            <li className='hover:bg-gray-100 px-4 py-2'>
                                                Service 3
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li>
                                    <a href="/price">Price</a>
                                </li>
                                <li onClick={toogleClick} className='flex cursor-pointer'>
                                    <a href="/something">
                                        On Click
                                    </a>
                                    <span className='my-auto'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${onclick ? 'rotate-180 transition-all duration-500' : ''} mx-1`}><path d="m6 9 6 6 6-6" /></svg>
                                    </span>
                                    {onclick && (
                                        <ul className='absolute bg-white border -ml-6 border-gray-200 py-2 mt-6' onClick={closeClick}>
                                            <li className='hover:bg-gray-100 px-4 py-2'>
                                                Service 1
                                            </li>
                                            <li className='hover:bg-gray-100 px-4 py-2'>
                                                Service 2
                                            </li>
                                            <li className='hover:bg-gray-100 px-4 py-2'>
                                                Service 3
                                            </li>
                                        </ul>
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='hidden md:flex flex-wrap space-x-3'>
                    <button className='border px-5 py-2 rounded-xl'>
                        Log In
                    </button>
                    <button className='bg-black text-white px-5 py-2 rounded-xl'>
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
        </nav>
    );
};

export default Navbar3;
