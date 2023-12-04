import React from 'react'
import Image from 'next/image'
import Nav from '../../public/navbars.png'

const component = [
    {
        name: 'Navbar',
        source: '/components/application-ui/navbar',
        imageURL: Nav,
        number: '3 components',
    },
    {
        name: 'Footer',
        source: '/components/application-ui/footer',
        imageURL: Nav,
        number: '2 components',
    },
    {
        name: 'Hero Header',
        source: '/components/application-ui/hero',
        imageURL: Nav,
        number: '4 components',
    },
    {
        name: 'Header section',
        source: '/components/application-ui/header',
        imageURL: Nav,
        number: '4 components',
    },
    {
        name: 'Testimonials',
        source: '/components/application-ui/testimonial',
        imageURL: Nav,
        number: '3 components',
    },
    {
        name: 'Contact',
        source: '/components/application-ui/contact',
        imageURL: Nav,
        number: '3 components',
    },
    {
        name: 'Team',
        source: '/components/application-ui/team',
        imageURL: Nav,
        number: '3 components',
    },
    {
        name: 'FAQ',
        source: '/components/application-ui/faq',
        imageURL: Nav,
        number: '2 components',
    },
    {
        name: 'Newsletter',
        source: '/components/application-ui/newsletter',
        imageURL: Nav,
        number: '3 components',
    },
    {
        name: 'Feature',
        source: '/components/application-ui/feature',
        imageURL: Nav,
        number: '3 components',
    },
    {
        name: 'Pricing',
        source: '/components/application-ui/pricing',
        imageURL: Nav,
        number: '3 components',
    },
    {
        name: 'Blogs',
        source: '/components/application-ui/blog',
        imageURL: Nav,
        number: '3 components',
    },
]

const List = () => {
    return (
        <section className='mx-auto w-full px-4 sm:px-6 lg:px-8'>
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

export default List