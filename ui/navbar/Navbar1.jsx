import React from 'react'

const Navbar1 = () => {
    return (
        <header className=''>
            <nav className="flex items-center justify-between py-5 lg:px-8">
                <div className="flex">
                    <a href="/" className="-m-1.5 p-1.5 text-2xl font-medium">
                        Cnippet
                        <span className="">UI</span>
                    </a>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <a href="/components" className="text-sm font-semibold leading-6 text-gray-900">Components</a>
                    <a href="/features" className="text-sm font-semibold leading-6 text-gray-900">Templates</a>
                    <a href="/contact" className="text-sm font-semibold leading-6 text-gray-900">Contacts</a>
                    <a href="/about" className="text-sm font-semibold leading-6 text-gray-900">About</a>
                </div>
                <div className="hidden lg:ml-8 lg:flex lg:items-center lg:pl-8">
                    <a href="/login">Sign in</a>
                    <a className="inline-flex justify-center rounded-lg text-sm font-semibold py-2 px-4 bg-slate-900 text-white hover:bg-slate-700 -my-2.5 ml-8" href="/get-pro">
                        <span>Get pro <span aria-hidden="true">→</span>
                        </span>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar1