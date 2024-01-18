import React from 'react'

const Navbar3 = () => {
    return (
        <header className='relative overflow-hidden'>
            <nav>
                <div className='bg-black'>
                    <div className='mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
                        <div className='hidden text-white text-sm lg:block lg:flex-1'>
                            English
                        </div>
                        <div className='flex-1 items-center lg:flex-none'>
                            <a href="/" className='text-gray-200 text-sm'>
                                Get free delivery on orders over $100
                            </a>
                        </div>
                        <div className='hidden lg:flex lg:flex-1 lg:gap-2 lg:items-center lg:justify-end'>
                            <a href="/" className='text-gray-100 text-sm'>Sign In</a>
                            <span className='h-4 w-[1px] bg-gray-200 mx-2'></span>
                            <a href="/" className='text-gray-100 text-sm'>Create an account</a>
                        </div>
                    </div>
                </div>
                <div className='bg-white border-b border-gray-300 flex items-center justify-between lg:py-5 lg:px-8'>
                    <div className="flex lg:flex-none">
                        <a href="/" className="-m-1.5 p-1.5 text-2xl font-medium">
                            Cnippet
                            <span className="">UI</span>
                        </a>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12 ml-10">
                        <a href="/components" className="text-sm font-semibold leading-6 text-gray-900">Components</a>
                        <a href="/features" className="text-sm font-semibold leading-6 text-gray-900">Templates</a>
                        <a href="/contact" className="text-sm font-semibold leading-6 text-gray-900">Contacts</a>
                        <a href="/about" className="text-sm font-semibold leading-6 text-gray-900">About</a>
                    </div>
                    <div className="hidden lg:ml-8 lg:flex lg:flex-none lg:gap-4 lg:items-center lg:pl-8">
                        <a href="/login" className='text-gray-700'>Search</a>
                        <a href="/help" className='text-gray-700'>Help</a>
                        <span className='h-5 w-[1px] bg-gray-500'></span>
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className='w-6 h-6 text-gray-400'><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path></svg>
                        </a>
                    </div>
                </div>
                <div className='h-8 bg-stripes-white bg-gray-200'></div>
            </nav>
        </header>
    )
}

export default Navbar3