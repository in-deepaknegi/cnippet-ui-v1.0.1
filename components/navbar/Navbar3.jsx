"use client"
import React, { useState } from 'react';

const Navbar3 = () => {
    const [onhover, setOnhover] = useState(false);
    const [onclick, setOnclick] = useState(false);

    const toogleHover = () => {
        setOnhover(!onhover);
    };

    const toogleClick = () => {
        setOnclick(!onclick);
    };
    const closeClick = () => {
        setOnclick(false);
    }

    return (
        <nav className='bg-white border border-gray-200 w-full my-10'>
            <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-3 px-10'>
                <div className='flex flex-wrap space-x-10'>
                    <a href="/" className='text-xl font-semibold'>
                        Logo
                    </a>

                    <div className='flex flex-wrap space-x-10'>
                        <div className='my-auto'>
                            <ul className='flex flex-wrap space-x-10'>
                                <li>
                                    Home
                                </li>
                                <li>
                                    About
                                </li>
                                <li onMouseEnter={toogleHover} onMouseLeave={toogleHover} className='flex cursor-pointer'>
                                    On Hover
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
                                    Price
                                </li>
                                <li onClick={toogleClick} className='flex cursor-pointer'>
                                    On Click
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

                <div className='flex flex-wrap space-x-3'>
                    <button className='border px-5 py-2 rounded-xl'>
                        Log In
                    </button>
                    <button className='bg-black text-white px-5 py-2 rounded-xl'>
                        Sign In
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar3;
