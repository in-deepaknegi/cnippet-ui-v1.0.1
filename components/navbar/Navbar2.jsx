import React from 'react'

const Navbar2 = () => {
    return (
        <nav className='bg-white border border-gray-200 w-full my-10'>
            <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-3 px-10'>
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
                            <li>
                                Service
                            </li>
                            <li>
                                Price
                            </li>
                            <li>
                                Contact
                            </li>
                        </ul>
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
    )
}

export default Navbar2