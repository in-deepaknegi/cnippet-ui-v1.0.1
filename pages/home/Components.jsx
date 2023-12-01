import Image from 'next/image'
import React from 'react'
import Nav from '@/public/navbars.png'

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
        number: '4 components',
    },
    {
        name: 'Contact',
        source: '/components/application-ui/contact',
        imageURL: Nav,
        number: '4 components',
    },
    {
        name: 'Team',
        source: '/components/application-ui/team',
        imageURL: Nav,
        number: '4 components',
    },
    {
        name: 'FAQ',
        source: '/components/application-ui/faq',
        imageURL: Nav,
        number: '4 components',
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
]

const Components = () => {
    return (
        <section className='mx-auto w-full px-4 sm:px-6 lg:px-8'>
            <div className='max-w-2xl'>
                <h2 className='text-base font-semibold leading-7 text-indigo-600'>Components</h2>
                <p className='mt-4 text-4xl font-extrabold tracking-tight text-slate-900'>
                    Beautifully crafted UI components, ready for your next project.
                </p>
            </div>
            <div className='max-w-xl'>
                <p className='mt-4 text-base leading-7 text-slate-700'>
                    Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize to your heart&apos;s content.
                </p>
            </div>

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
                    
                    <div className="pointer-events-none absolute -inset-x-2.5 -bottom-2.5 h-[16.6%] bg-gradient-to-t from-white to-white/25 sm:h-[33.3%]"></div>
                </ul>
            </div>
            <div className="pointer-events-none relative z-10 -mt-5 flex justify-center">
                <a className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-primary text-white pointer-events-auto" href="/components">
                    <span>Show more...</span>
                </a>
            </div>
        </section>
    )
}

export default Components