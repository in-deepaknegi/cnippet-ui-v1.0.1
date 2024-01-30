import React from "react";
import Image from "next/image";
import Hero1 from "@/public/images/Hero/hero5.jpg";
import Hero2 from "@/public/images/Hero/hero6.jpg";
import Hero3 from "@/public/images/Hero/hero7.jpg";
import Hero4 from "@/public/images/Hero/hero8.jpg";
import Hero5 from "@/public/images/Hero/hero9.jpg";

const C3 = () => {
    return (
        <section className="isolateoverflow-hidden relative">
            <div className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
                <div className="mx-auto max-w-2xl gap-4 lg:mx-0 lg:flex lg:max-w-none lg:text-center">
                    <div className="my-auto w-full max-w-xl lg:max-w-2xl lg:flex-shrink-0">
                        <div className="hidden sm:mb-8 sm:flex">
                            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                Announcing our next round of funding.{" "}
                                <a href="#" className="font-semibold text-indigo-600">
                                    <span className="absolute inset-0" aria-hidden="true"></span>
                                    Read more <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>
                        <h1 className="text-left text-6xl font-semibold">
                            Data to enrich your online bussiness
                        </h1>
                        <p className="mt-6 text-left text-lg font-light text-gray-600">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                            fugiat aliqua.
                        </p>
                        <div className="mt-10 flex gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-purple-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Get Started
                            </a>
                            <a
                                href="#"
                                className="my-auto text-sm font-semibold leading-6 text-gray-900"
                            >
                                Read more <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                    <div className="mt-14 flex h-screen justify-end gap-8 sm:mt-44 sm:justify-start lg:mt-0 lg:pl-0">
                        <div className="ml-auto mt-[-16rem] w-1/2 flex-none sm:ml-0 lg:order-last xl:order-[0]">
                            <div className="relative">
                                <Image
                                    src={Hero1}
                                    alt="hero image 2"
                                    className="aspect-[2/3] h-full w-full rounded-2xl bg-gray-50 object-cover shadow-xl"
                                />
                            </div>
                            <div className="relative">
                                <Image
                                    src={Hero2}
                                    alt="hero image 2"
                                    className="mt-8 aspect-[2/3] h-full w-full rounded-2xl bg-gray-50 object-cover shadow-xl"
                                />
                            </div>
                            <div className="relative">
                                <Image
                                    src={Hero3}
                                    alt="hero image 2"
                                    className="mt-8 aspect-[2/3] h-full w-full rounded-2xl bg-gray-50 object-cover shadow-xl"
                                />
                            </div>
                        </div>
                        <div className="ml-auto mt-[-12rem] w-1/2 flex-none sm:ml-0 lg:order-last xl:order-[0]">
                            <div className="relative">
                                <Image
                                    src={Hero4}
                                    alt="hero image 2"
                                    className="aspect-[2/3] h-full w-full rounded-2xl bg-gray-50 object-cover shadow-xl"
                                />
                            </div>
                            <div className="relative">
                                <Image
                                    src={Hero5}
                                    alt="hero image 2"
                                    className="mt-10 aspect-[2/3] h-full w-full rounded-2xl bg-gray-50 object-cover shadow-xl"
                                />
                            </div>
                            <div className="relative">
                                <Image
                                    src={Hero5}
                                    alt="hero image 2"
                                    className="mt-10 aspect-[2/3] h-full w-full rounded-2xl bg-gray-50 object-cover shadow-xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default C3;
