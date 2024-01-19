import React from 'react'
import Image from 'next/image'
import Hero1 from '@/public/images/Hero/hero4.jpg'

const C1 = () => {
    return (
        <section className='relative isolate bg-white'>
            <div className='grid max-w-full grid-cols-12 mx-auto gap-y-10 lg:gap-y-0 lg:gap-8'>
                <div className='col-span-12 py-10 md:py-20 lg:py-48 xl:col-span-6'>
                    <div className='mx-auto max-w-full md:max-w-2xl px-6 lg:px-8'>
                        <div className="hidden sm:mb-8 sm:flex">
                            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                Announcing our next round of funding.
                                <a href="#" className="font-semibold text-black">
                                    <span className="absolute inset-0" aria-hidden="true"></span> Read more <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>
                        <h1 className='text-5xl md:text-6xl font-semibold'>
                            Data to enrich your online bussiness
                        </h1>
                        <p className='mt-6 text-base lg:text-lg text-gray-600'>
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                        </p>
                        <div className="mt-10 flex gap-x-6">
                            <a href="#" className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm">
                                Get Started
                            </a>
                            <a href="#" className="text-sm font-semibold leading-6 text-gray-900 my-auto">
                                Read more <span aria-hidden="true">→</span></a>
                        </div>
                    </div>
                </div>
                <div className='relative col-span-12 xl:col-span-6'>
                    <Image
                        src={Hero1}
                        alt='hero image 1'
                        priority={true}
                        className='aspect-[3/2] w-full object-cover object-bottom lg:absolute lg:inset-0 lg:aspect-auto lg:h-full'
                    />
                </div>
            </div>
        </section>
    )
}

export default C1