import React from 'react'

const P1 = () => {
    return (
        <>
            {
`<section className='overflow-hidden bg-white py-16 sm:py-20'>
    <div className='mx-auto px-6 lg:px-8'>
        <div className='mx-auto grid gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none grid-cols-12'>
            <div className='col-span-12 lg:pr-8 lg:py-4 lg:col-span-7'>
                <h2 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
                    Everything you need to deploy your app
                </h2>
                <p className='mt-6 text-base text-gray-700 md:text-lg'>
                    Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.
                </p>
                <ul className='mt-10 ml-5 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none'>
                    {features.map((feature) => (
                        <li key={feature.name} className='list-disc'>
                            {feature.description}
                        </li>
                    ))}
                </ul>
                <div className="mt-10 flex gap-x-6">
                    <a href="#" className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white bg-black">Discover more</a>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900 my-auto">
                        Join us <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>
            <div className='col-span-12 lg:col-span-5'>
                <Image
                src={Hero1}
                    alt='Product screenshot'
                    className='h-full object-cover rounded-2xl'
                />
            </div>
        </div>
    </div>
</section>`
            }
        </>
    )
}

export default P1