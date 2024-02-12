import React from "react";
import Image from "next/image";
import Hero1 from "@/public/images/Hero/hero5.jpg";
import Hero2 from "@/public/images/Hero/hero6.jpg";
import Hero3 from "@/public/images/Hero/hero7.jpg";
import Hero4 from "@/public/images/Hero/hero8.jpg";
import Hero5 from "@/public/images/Hero/hero9.jpg";
import Hero6 from "@/public/images/Hero/hero10.jpg";
import Hero7 from "@/public/images/Hero/hero11.jpg";


const C1 = () => {
    return (
        <section className="relative isolate overflow-hidden mb-20">
            <div className="mx-auto max-w-4xl px-6 py-16 lg:px-0 lg:py-20">
                <h1 className="text-center text-5xl font-semibold tracking-tight text-black md:text-6xl">
                    The only source of knowledge is experience
                </h1>
                <p className="mt-6 text-center text-base text-gray-900 md:text-lg">
                    Our emphasis lies in delivering valuable insights, imparting fresh
                    information, and presenting distinctive viewpoints that contribute to
                    daily life.
                </p>
                <div className="mx-auto mt-10 flex items-center justify-center gap-x-6">
                    <form
                        action=""
                        className="col-span-12 mx-auto w-full max-w-md lg:col-span-5 lg:mx-0"
                    >
                        <div className="flex gap-x-3">
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="min-w-0 flex-auto rounded-xl border-0 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-black/30 focus:ring-inset sm:text-sm sm:leading-6"
                                placeholder="Enter your email"
                            />
                            <button
                                type="submit"
                                className="flex-none rounded-2xl bg-black px-5 py-2.5 text-sm font-semibold text-white shadow-sm"
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="relative mx-auto max-w-5xl px-6 md:px-8 flex flex-row items-center justify-center">
                <div className="mt-10 flex justify-end sm:justify-start md:mt-16 gap-4 xl:mt-0">
                    <div className="w-full lg:block hidden mt-16">
                        <div className="relative">
                            <Image
                                src={Hero1}
                                alt="hero image 2"
                                priority={false}
                                className="rounded-2xl aspect-[2/2.25] bg-gray-50 object-cover shadow-xl"
                            />
                        </div>
                    </div>
                    <div className="w-full ">
                        <div className="relative">
                            <Image
                                src={Hero2}
                                alt="hero image 2"
                                priority={false}
                                className="rounded-2xl aspect-[3/2] bg-gray-50 object-cover shadow-xl"
                            />
                        </div>
                        <div className="relative">
                            <Image
                                src={Hero3}
                                alt="hero image 2"
                                priority={false}
                                className="mt-4 rounded-2xl aspect-[2/2.25] bg-gray-50 object-cover shadow-xl"
                            />
                        </div>
                    </div>
                    <div className="md:block hidden w-full mt-16">
                        <div className="relative">
                            <Image
                                src={Hero4}
                                alt="hero image 2"
                                priority={false}
                                className="rounded-2xl aspect-[2/2.25] bg-gray-50 object-cover shadow-xl"
                            />
                        </div>
                    </div>
                    <div className="w-full ">
                        <div className="relative">
                            <Image
                                src={Hero5}
                                alt="hero image 2"
                                priority={false}
                                className="rounded-2xl aspect-[3/2] bg-gray-50 object-cover shadow-xl"
                            />
                        </div>
                        <div className="relative">
                            <Image
                                src={Hero6}
                                alt="hero image 2"
                                priority={false}
                                className="mt-4 rounded-2xl aspect-[2/2.25] bg-gray-50 object-cover shadow-xl"
                            />
                        </div>
                    </div>
                    <div className="w-full lg:block hidden mt-16">
                        <div className="relative">
                            <Image
                                src={Hero7}
                                alt="hero image 2"
                                priority={false}
                                className="rounded-2xl aspect-[2/2.25] bg-gray-50 object-cover shadow-xl"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default C1;
