"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import Product1 from "@/public/images/product/product1.jpg";
import Product2 from "@/public/images/product/product2.jpg";
import Product3 from "@/public/images/product/product3.jpg";
import Product4 from "@/public/images/product/product4.jpg";

const images = [
    {
        id: 1,
        src: Product1,
    },
    {
        id: 2,
        src: Product2,
    },
    {
        id: 3,
        src: Product3,
    },
    {
        id: 4,
        src: Product4,
    },
]

const items = [
    {
        title: 'Featurs',
        features: [
            'Multiple strap configurations',
            'Spacious interior with top zip',
            'Leather handle and tabs',
            'Interior dividers',
            'Stainless strap loops',
            'Double stitched construction',
            'Water-resistant'
        ]
    },
    {
        title: 'Care',
        features: [
            'Spot clean as needed',
            'Hand wash with mild soap',
            'machine wash interior dividers',
        ]
    },
    {
        title: 'Shipping',
        features: [
            'Free shipping on orders over $300',
            'International shipping available',
            'Expedited shipping options',
            'Signature required upon delivery',
        ]
    },
    {
        title: 'Returns',
        features: [
            'Easy return request',
            'Pre-paid shipping label included',
            '10% restocking fee for returns',
            '60 day return window',
        ]
    }
];

const Overview1 = () => {
    const [active, setActive] = useState(null);

    const toggleActive = (index) => {
        setActive(active === index ? null : index)
    }

    const [selectedImage, setSelectedImage] = useState(Product1);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    return (
        <section className='relative isolate bg-white'>
            <div className='mx-auto max-w-2xl px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
                <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8'>
                    <div className='flex flex-col-reverse'>
                        <div className='mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none'>
                            <div className='grid grid-cols-4 gap-6'>
                                {images.map((image) => (
                                    <button
                                    key={image.id}
                                    onClick={() => handleImageClick(image.src)}
                                    className='relative flex h-24 cursor-pointer items-center justify-center rounded-md '>
                                    <span className='absolute inset-0 overflow-hidden rounded-md'>
                                        <Image
                                            src={image.src}
                                            alt='Product1'
                                            className='h-full w-full object-cover'
                                        />
                                    </span>
                                </button>
                                ))}
                            </div>
                        </div>
                        <div className='relative w-full pb-[calc(90%)]'>
                            <div className='absolute h-full w-full inset-0'>
                                <Image
                                    src={selectedImage}
                                    alt='hero1'
                                    className='w-full h-full object-cover object-center overflow-clip rounded-lg'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='mt-10 px-4 sm:mt-16 ms:px-0 lg:mt-0'>
                        <h2 className='text-3xl font-bold tracking-tight text-gray-900'>Zip Tote Screen</h2>
                        <div className='mt-3'>
                            <h2 className='absolute sr-only'>Product information</h2>
                            <p className='text-3xl tracking-tight text-gray-700'>$140</p>
                        </div>
                        <div className='mt-3'>
                            <h3 className='absolute sr-only'>Reviews</h3>
                            <div className='flex items-center'>
                                {[...Array(4)].map((_, index) => (
                                    <svg key={index} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className='w-5 h-5 text-blue-600'><path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd"></path></svg>
                                ))}
                                {[...Array(1)].map((_, index) => (
                                    <svg key={index} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className='w-5 h-5 text-gray-300'><path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd"></path></svg>
                                ))}
                            </div>
                        </div>
                        <div className='mt-6'>
                            <h3 className='absolute sr-only'>Description</h3>
                            <p className='text-md text-gray-700'>
                                The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.
                            </p>
                        </div>
                        <div className='mt-10 flex'>
                            <button className='flex max-w-[10rem] flex-1 items-center justify-center rounded-lg border border-transparent bg-blue-700 px-6 py-3 text-base text-white sm:w-full'>
                                Add to bag
                            </button>
                            <button className='ml-4 flex items-center justify-center rounded-md px-3 text-gray-400'>
                                <span className='sr-only'>Add to favourites</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className='h-8 w-8 shrink-0'><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path></svg>
                            </button>
                        </div>
                        <div className='container mt-12'>
                            {items.map((item, index) => (
                                <div key={index} className='border-t'>
                                    <button
                                        onClick={() => toggleActive(index)}
                                        className='flex w-full my-4 items-start justify-between text-left'>
                                        <span className='text-sm font-semibold leading-7 text-indigo-700'>
                                            {item.title}
                                        </span>
                                        <span>
                                            {active === index ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                            )}
                                        </span>
                                    </button>

                                    {active === index && (
                                        <div className='pb-6'>
                                            <ul role='list' className='text-sm list-disc ml-6 text-gray-700'>
                                                {item.features.map((feature, i) => (
                                                    <li key={i} className='my-1'>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Overview1