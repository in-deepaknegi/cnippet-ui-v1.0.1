import React from 'react'
import Image from 'next/image'
import Nav from '../../public/navbars.png'

const component = [
    {
        name: 'Product Overview',
        source: '/components/ecommerce/product-overview',
        imageURL: Nav,
        number: '3 components',
    },
    {
        name: 'Footer',
        source: '/components/application-ui/footer',
        imageURL: Nav,
        number: '2 components',
    },
]

const Ecommerce = () => {
    return (
        <section className='mx-auto mt-20 w-full px-4 sm:px-6 lg:px-8'>
            <h2 className="text-xl font-bold text-slate-900">Ecommerce</h2>
            <p className="mt-3 text-sm leading-7 text-slate-500">
                Checkout forms, shopping carts, product views — everything you need to build your next ecommerce front-end.
            </p>
            <div className='relative mt-10 md:mt-8'>
                <ul className='grid grid-cols-[repeat(auto-fill,minmax(12rem, 1fr))] gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    {component.map((component) => (
                        <li key={component.name}>
                            <div className='group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100'>
                                <div className='relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10'>
                                    <Image
                                        src={component.imageURL}
                                        alt='navbar-img'
                                        className='absolute inset-0 h-full w-full'
                                    />
                                </div>
                                <h4 className='mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600'>
                                    <a href={component.source}>
                                        <span className='absolute -inset-2.5 z-10'></span>
                                        <span className='relative'>{component.name}</span>
                                    </a>
                                </h4>
                                <p className='relative mt-1.5 text-xs font-medium text-slate-500'>{component.number}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section >
    )
}

export default Ecommerce