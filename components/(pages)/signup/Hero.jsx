import React from "react";
import Image from "next/image";
import GoogleLogo from "@/public/google-logo.svg";

const Hero = () => {
    return (
        <section className="relative flex flex-1 flex-col overflow-hidden px-4 py-1 sm:px-6 lg:px-8">
            <div className="relative mx-10 mt-10 w-10">
                <a href="/">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="rounded-full border text-gray-700"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="m12 19-7-7 7-7" />
                        <path d="M19 12H5" />
                    </svg>
                </a>
            </div>
            <div className="relative flex flex-1 flex-col items-center justify-center pt-12">
                <a href="/" className="mx-auto mb-10 flex w-auto">
                    <div className="my-auto ml-3 text-2xl">Cnippet Ui</div>
                </a>

                <div className="w-full max-w-sm">
                    <button className="inline-flex w-full justify-center rounded-lg border px-4 py-2.5 text-base">
                        <Image
                            src={GoogleLogo}
                            alt="google-logo"
                            width={20}
                            height={20}
                            className="mx-3"
                        />
                        Sign up with Google
                    </button>
                </div>
                <div className="my-4 flex  max-w-sm items-center">
                    <div className="h-[0.025rem] w-[24rem] bg-gray-200"></div>
                    <div className="mx-2">or</div>
                    <div className="h-[0.025rem] w-full bg-gray-200"></div>
                </div>

                <form action="/login" className="form w-full max-w-sm">
                    <div className="mb-6">
                        <label htmlFor="email">Email address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="email"
                            autoComplete="on"
                            required="" />
                    </div>
                    <div className="mb-6 ">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="password"
                            autoComplete="on"
                            required=""
                        />
                    </div>
                    <button
                        type="submit"
                        className="inline-flex w-full justify-center rounded-lg bg-black px-4 py-2.5 text-sm text-white"
                    >
                        <span>Sign in to account</span>
                    </button>
                </form>
            </div>
            
        </section>
    );
};

export default Hero;
