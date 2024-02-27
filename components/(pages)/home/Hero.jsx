import React from "react";
import Image from "next/image";
import Hero1 from "@/public/gradient.webp";
import PaymentButton from '@/components/PaymentButton';

const Hero = () => {
    return (
        <section className="relative isolate overflow-hidden">
            <Image
                src={Hero1}
                alt="hero-image"
                priority={true}
                className="absolute inset-0 z-[-10] h-full w-full rotate-180 object-cover"
            />
            <div className="absolute z-[-9] h-full w-full bg-gradient-to-b from-black/10 via-black/30 to-black"></div>

            <div className="mx-auto max-w-4xl px-6 py-16 lg:px-0 lg:py-32">
                <div className="hidden sm:mb-8 sm:flex">
                    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-200 ring-1 ring-gray-100/10 hover:ring-gray-100">
                        Announcing our next round of funding.{" "}
                        <a href="#" className="font-semibold text-indigo-600">
                            <span className="absolute inset-0" aria-hidden="true"></span>Read
                            more <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>
                <h1 className="text-left text-5xl font-semibold text-white md:text-6xl">
                    Boost your creativity with our advanced tools and resources.
                </h1>
                <p className="mt-6 text-left text-base font-light text-gray-100 md:text-lg">
                    Exquisitely designed and skillfully crafted elements and templates
                    that are ideal for initiating your upcoming project and ensuring a
                    professional and polished result.
                </p>
                <div className="mt-10 flex gap-x-6">
                    <a
                        href="#"
                        className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Get Started
                    </a>
                    <a
                        href="#"
                        className="my-auto text-sm font-semibold leading-6 text-gray-300"
                    >
                        Read more <span aria-hidden="true">→</span>
                    </a>
                </div>
                {/* <PaymentButton /> */}
            </div>
        </section>
    );
};

export default Hero;
