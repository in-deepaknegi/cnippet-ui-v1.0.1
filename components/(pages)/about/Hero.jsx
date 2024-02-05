import React from 'react'
import Image from "next/image";
import Hero1 from "@/public/images/Hero/hero8.jpg";

const features = [
    {
        name: "Push to deploy.",
        description:
            "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    },
    {
        name: "SSL certificates.",
        description:
            "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    },
];

const Hero = () => {
    return (
        <section className="overflow-hidden bg-white py-16 sm:py-20">
            <div className="mx-auto px-6 lg:px-8">
                <div className="mx-auto grid grid-cols-12 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none">
                    <div className="col-span-12 lg:col-span-7 lg:py-4 lg:pr-8">
                        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                            Everything you need to deploy your app
                        </h2>
                        <p className="mt-6 text-base text-gray-700 md:text-lg">
                            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
                            Suspendisse eget egestas a elementum pulvinar et feugiat blandit
                            at. In mi viverra elit nunc.
                        </p>
                        <ul className="ml-5 mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
                            {features.map((feature) => (
                                <li key={feature.name} className="list-disc">
                                    {feature.description}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-10 flex gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white"
                            >
                                Discover more
                            </a>
                            <a
                                href="#"
                                className="my-auto text-sm font-semibold leading-6 text-gray-900"
                            >
                                Join us <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-5">
                        <Image
                            src={Hero1}
                            alt="Product screenshot"
                            quality={100}
                            loading="eager"
                            className="h-full rounded-2xl object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero