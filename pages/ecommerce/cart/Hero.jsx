"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import Product1 from '@/public/product/product1.jpg';
import Product2 from '@/public/product/product2.jpg';
import Product3 from '@/public/product/product3.jpg';
import Product4 from '@/public/product/product4.jpg';


const products = [
    {
        id: 1,
        name: 'Bag#1',
        href: '#',
        imageSrc: Product1,
        imageAlt: "Front of men's Bag#4",
        price: '$35',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
        id: 2,
        name: 'Bag#2',
        href: '#',
        imageSrc: Product2,
        imageAlt: "Front of men's Bag#4",
        price: '$35',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
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

    const [isOpen, setIsOpen] = useState(false);

    const toggleCart = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className='relative overflow-hidden pt-[5.75rem]'>
            <div className='relative mx-auto mt-20 w-full px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-col'>
                    <h1 className='mt-3 text-3xl font-extrabold tracking-tight text-slate-900'>Shopping Cart</h1>
                    <nav className='order-first flex space-x-2 text-sm font-semibold'>
                        <a href="/" className='text-slate-500 hover:text-slate-600'>
                            Ecommerce
                        </a>
                        <div className='select-none text-slate-400'>/</div>
                        <a href="/" className='text-slate-500 hover:text-slate-600'>
                            Shopping Cart
                        </a>
                    </nav>
                </div>
                <div className='mt-10 space-y-28 pb-px'>
                    <section id='cart-1'>
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
                                        <section className="relative overflow-hidden bg-white border rounded-2xl">
                                            <div className=''>
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
                                                    <button
                                                        onClick={toggleCart}
                                                        className='relative flex gap-1'
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className='w-6 h-6 text-gray-400'><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path></svg>
                                                        <span className='my-auto text-sm font-semibold text-gray-700'>2</span>

                                                    </button>
                                                </nav>
                                            </div>

                                            {/* Cart menu */}
                                            {isOpen && (
                                                <div className="pointer-events-auto w-screen max-w-md h-screen ml-auto">
                                                    <div className="flex h-full flex-col bg-white border rounded-2xl shadow-xl">
                                                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                                            <div className="flex items-start justify-between">
                                                                <h2 className="text-lg font-medium text-gray-900">Shopping cart</h2>
                                                                <div className="ml-3 flex h-7 items-center">
                                                                    <button
                                                                        type="button"
                                                                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                                                        onClick={() => setIsOpen(false)}
                                                                    >
                                                                        <span className="absolute -inset-0.5" />
                                                                        <span className="">Close panel</span>
                                                                    </button>
                                                                </div>
                                                            </div>

                                                            <div className="mt-8">
                                                                <div className="flow-root">
                                                                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                                        {products.map((product) => (
                                                                            <li key={product.id} className="flex py-6">
                                                                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                                    <Image
                                                                                        src={product.imageSrc}
                                                                                        alt={product.imageAlt}
                                                                                        className="h-full w-full object-cover object-center"
                                                                                    />
                                                                                </div>

                                                                                <div className="ml-4 flex flex-1 flex-col">
                                                                                    <div>
                                                                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                                                                            <h3>
                                                                                                <a href={product.href}>{product.name}</a>
                                                                                            </h3>
                                                                                            <p className="ml-4">{product.price}</p>
                                                                                        </div>
                                                                                        <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                                                                    </div>
                                                                                    <div className="flex flex-1 items-end justify-between text-sm">
                                                                                        <p className="text-gray-500">Qty {product.quantity}</p>

                                                                                        <div className="flex">
                                                                                            <button
                                                                                                type="button"
                                                                                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                                                                            >
                                                                                                Remove
                                                                                            </button>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                                <p>Subtotal</p>
                                                                <p>$262.00</p>
                                                            </div>
                                                            <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                                            <div className="mt-6">
                                                                <a
                                                                    href="#"
                                                                    className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                                                >
                                                                    Checkout
                                                                </a>
                                                            </div>
                                                            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                                                <p>
                                                                    or
                                                                    <button
                                                                        type="button"
                                                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                                                        onClick={() => setIsOpen(false)}
                                                                    >
                                                                        Continue Shopping
                                                                        <span aria-hidden="true"> &rarr;</span>
                                                                    </button>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </section>
                                    </>
                                ) : (
                                    <div>code</div>
                                )}
                            </div>
                        </div>
                    </section>

                    <section id='cart-2'>
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
                                        <section className='relative isolate overflow-hidden border rounded-2xl'>
                                            <div className='mx-auto px-4 pb-24 pt-16 sm: sm:px-6 lg:max-w-7xl lg:px-8'>
                                                <h1 className='text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl'>
                                                    Shopping Cart
                                                </h1>
                                                <form action="" className='mt-12 lg:grid lg:grid-cols-12 lg:self-start lg:gap-x-12 xl:gap-x-16'>
                                                    <section className='col-span-7'>
                                                        <h2 className='sr-only'>Items in your shopping cart</h2>
                                                        <ul>
                                                            {products.map((product) => (
                                                                <li key={product.id}
                                                                    className='flex py-6 sm:py-10 border-b'>
                                                                    <div className='shrink-0'>
                                                                        <Image
                                                                            src={product.imageSrc}
                                                                            alt={product.imageAlt}
                                                                            className='h-24 w-36 rounded-md object-cover object-center sm:h-48 sm:w-48'
                                                                        />
                                                                    </div>
                                                                    <div className='ml-4 flex flex-1 flex-col justify-between sm:ml-6'>
                                                                        <div className='relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0'>
                                                                            <div>
                                                                                <div className='flex justify-between'>
                                                                                    <h3 className='text-sm'>
                                                                                        <a href="" className='font-medium text-gray-600'>Bag#1</a>
                                                                                    </h3>
                                                                                </div>
                                                                                <div className='mt-1 flex text-sm'>
                                                                                    <p className='text-gray-600'>Sienna</p>
                                                                                    <p className='ml-4 border-l border-gray-500 pl-4 text-gray-500'>Large</p>
                                                                                </div>
                                                                                <p className='mt-1 text-sm font-medium text-gray-800'>$32.00</p>
                                                                            </div>
                                                                            <div className='mt-4 sm:mt-0 sm:pr-9 text-gray-700'>
                                                                                <label htmlFor="quantity" className='sr-only'>Quantity</label>
                                                                                <select name="quantity" id="quantity" className='border rounded-lg px-1'>
                                                                                    <option value="1">1</option>
                                                                                    <option value="2">2</option>
                                                                                    <option value="3">3</option>
                                                                                    <option value="4">4</option>
                                                                                    <option value="5">5</option>
                                                                                </select>
                                                                                <div className='-mt-3 absolute right-0 top-0'>
                                                                                    <button className='inline-flex p-2 text-gray-400'>
                                                                                        <span className='sr-only'>Remove</span>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className='w-5'><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path></svg>
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            ))}

                                                        </ul>
                                                    </section>
                                                    <div className="col-span-5 px-4 pt-28 sm:px-6">
                                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                                <p>Subtotal</p>
                                                                <p>$262.00</p>
                                                            </div>
                                                            <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                                            <div className="mt-6">
                                                                <a
                                                                    href="#"
                                                                    className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                                                >
                                                                    Checkout
                                                                </a>
                                                            </div>
                                                            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                                                <p>
                                                                    or &nbsp;
                                                                    <button
                                                                        type="button"
                                                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                                                        onClick={() => setIsOpen(false)}
                                                                    >
                                                                        Continue Shopping
                                                                        <span aria-hidden="true"> &rarr;</span>
                                                                    </button>
                                                                </p>
                                                            </div>
                                                        </div>
                                                </form>
                                            </div>
                                        </section>
                                    </>
                                ) : (
                                    <div>code</div>
                                )}
                            </div>
                        </div>
                    </section>

                    <section id='cart-3'>
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
                                        <section className='relative isolate overflow-hidden border rounded-2xl'>
                                            cart
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