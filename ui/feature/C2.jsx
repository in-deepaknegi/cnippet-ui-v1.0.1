import React from "react";
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

const Feature2 = () => {
    return (
        <section className="relative isolate overflow-hidden bg-white py-16 sm:py-20">
            <div className="mx-auto px-6 lg:px-8">
                <div className="mx-auto grid grid-cols-12 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none">
                    <div className="col-span-12 lg:col-span-7 lg:py-4 lg:pr-8">
                        <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                            Everything you need to deploy your app
                        </h2>
                        <p className="mt-6 text-base text-gray-700 md:text-lg">
                            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
                            Suspendisse eget egestas a elementum pulvinar et feugiat blandit
                            at. In mi viverra elit nunc.
                        </p>
                        <div className="mt-10 grid max-w-xl gap-x-4 space-y-4 text-base leading-7 text-gray-600 md:grid-cols-2 md:space-y-0 lg:max-w-none">
                            {features.map((feature) => (
                                <div key={feature.name}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                                        <rect width="6" height="16" x="4" y="2" rx="2" />
                                        <rect width="6" height="9" x="14" y="9" rx="2" />
                                        <path d="M22 22H2" />
                                    </svg>
                                    <h2 className="text-2x my-2 font-semibold text-gray-900">
                                        {feature.name}
                                    </h2>
                                    <p>{feature.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10 flex gap-x-6">
                            <a
                                href="#"
                                className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm ring-1 ring-black hover:bg-black hover:text-white"
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
    );
};

export default Feature2;
