"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import GoogleLogo from "@/public/google-logo.svg";
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from "next/navigation";

const Hero = () => {

    const { status, data: session } = useSession();
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async () => {
        setLoading(true);

        await signIn("google");
    }

    useEffect(() => {
        if (status === "authenticated") {
            router.push('/');
        }
    });

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
                    <button
                        onClick={handleLogin}
                        className="inline-flex w-full justify-center rounded-lg border px-4 py-2.5 text-base hover:bg-olive-800 hover:text-white focus:bg-black focus:text-white">
                        {loading && (
                            <span className="loader mr-2"></span>
                        )}
                        <Image
                            src={GoogleLogo}
                            alt="google-logo"
                            width={20}
                            height={20}
                            className="mx-3"
                        />
                        {status==='authenticated'? `Welcome back ${session.user.name}`: 'Log in with Google'}
                    </button>
                </div>
                <div className="my-4 flex  max-w-sm items-center">
                    <div className="h-[0.025rem] w-[24rem] bg-gray-200"></div>
                    <div className="mx-2">or</div>
                    <div className="h-[0.025rem] w-full bg-gray-200"></div>
                </div>

                <form action="/login" className="form w-full max-w-sm">
                    <p className="text-sm text-center">Email Auth is disabled as of this moment.</p>
                    <div className="mb-6">
                        <label htmlFor="email">Email address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="email"
                            autoComplete="on"
                            required=""
                            disabled />
                    </div>
                    <div className="mb-6 ">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="password"
                            autoComplete="on"
                            required=""
                            disabled
                        />
                    </div>
                    <button
                        type="submit"
                        className="inline-flex w-full justify-center rounded-lg bg-black px-4 py-2.5 text-sm text-white"
                    >
                        <span>Sign in to account</span>
                    </button>
                    <input type="hidden" name="remember" value="true" />
                    <p className="my-5 text-center">
                        <a href="#" className="text-sm hover:underline">
                            Forgot password?
                        </a>
                    </p>
                </form>
            </div>
            <div className="relative shrink-0">
                <div className="space-y-4 text-sm text-gray-900 sm:flex sm:items-center sm:justify-center sm:space-x-4 sm:space-y-0">
                    <p className="text-center sm:text-left">
                        Don&apos;t have an account?
                    </p>
                    <a
                        className="inline-flex justify-center rounded-lg px-4 py-2.5 text-sm text-slate-900 ring-1 ring-slate-900/10 hover:ring-slate-900/20"
                        href="/signup"
                    >
                        <span>
                            Create an Account
                            <span aria-hidden="true"></span>
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
