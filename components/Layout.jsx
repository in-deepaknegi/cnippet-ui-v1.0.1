"use client";
import React, { useEffect, useState } from "react";
import { useSession, signIn } from "next-auth/react";
import Image from "next/image";
import GoogleLogo from "@/public/google-logo.svg";
import Hero1 from "@/public/gradient.webp";

const Layout = ({ components }) => {
    const [activeTab, setActiveTab] = useState([0, 0, 0, 0, 0]);

    const changeTab = (index) => {
        const newActiveTab = [...activeTab];
        newActiveTab[index] = newActiveTab[index] === 0 ? 1 : 0;
        setActiveTab(newActiveTab);
    };

    const { status, data: session } = useSession();
    const [loading, setLoading] = useState(true);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        if (session !== undefined) {
            setLoading(false);
        }
    }, [session]);

    const handleLogin = async () => {
        setLoad(true);

        await signIn("google");
    };

    if (loading) {
        return (
            <div className=" mt-10 max-w-4xl">
                <span className="text-xl">Loading ...</span>
            </div>
        );
    }

    return (
        <div className="mt-10 space-y-28 bg-white pb-px">
            {status === "authenticated" ? (
                <>
                    {components.map((component, index) => (
                        <section key={component.id} id={`feature-list${component.id}`}>
                            <div className="grid grid-cols-[1fr,auto] items-center">
                                <div className="flex min-w-0">
                                    <div className="my-auto text-base font-semibold">
                                        #{component.id}&nbsp;
                                    </div>
                                    <h2 className="truncate text-base font-medium leading-7 text-slate-900">
                                        {component.title}
                                    </h2>
                                    <p className="ml-3 hidden whitespace-nowrap rounded-lg bg-slate-200 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 lg:block">
                                        TailwindCss
                                    </p>
                                    <p className="ml-3 hidden whitespace-nowrap rounded-lg bg-olive-700 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-100 lg:block">
                                        React
                                    </p>
                                </div>
                                <div className="p-0.5">
                                    <button
                                        onClick={() => changeTab(index)}
                                        className={`mx-auto flex justify-center rounded-lg w-28 items-center bg-black py-[0.45rem] pl-2 pr-2 text-sm lg:pr-3`}
                                    >
                                        {activeTab[index] === 0 ? (
                                            <>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="#fff"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                                    <circle cx="12" cy="12" r="3" />
                                                </svg>
                                                <span className="sr-only text-stone-100 lg:not-sr-only lg:ml-2">
                                                    Preview
                                                </span>
                                            </>
                                        ) : (
                                            <>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="#fff"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="m18 16 4-4-4-4" />
                                                    <path d="m6 8-4 4 4 4" />
                                                    <path d="m14.5 4-5 16" />
                                                </svg>
                                                <span className="sr-only text-stone-100 lg:not-sr-only lg:ml-2">
                                                    Code
                                                </span>
                                            </>
                                        )}
                                    </button>
                                </div>

                                <div className="col-span-2 row-start-2 mt-3 min-w-0 overflow-hidden rounded-2xl border border-gray-300">
                                    {activeTab[index] === 0 ? (
                                        component.component
                                    ) : (
                                        <pre className="overflow-y-auto break-words text-sm">
                                            <code>{component.code}</code>
                                        </pre>
                                    )}
                                </div>
                            </div>
                        </section>
                    ))}
                </>
            ) : (
                <>
                    {components.slice(0, 1).map((component, index) => (
                        <section key={component.id} id={`feature-list${component.id}`}>
                            <div className="grid grid-cols-[1fr,auto] items-center">
                                <div className="flex min-w-0">
                                    <div className="my-auto text-base font-semibold">
                                        #{component.id}&nbsp;
                                    </div>
                                    <h2 className="truncate text-base font-medium leading-7 text-slate-900">
                                        {component.title}
                                    </h2>
                                    <p className="ml-3 hidden whitespace-nowrap rounded-lg bg-slate-200 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 lg:block">
                                        TailwindCss
                                    </p>
                                    <p className="ml-3 hidden whitespace-nowrap rounded-lg bg-olive-700 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-100 lg:block">
                                        React
                                    </p>
                                </div>
                                <div className="p-0.5">
                                    <button
                                        onClick={() => changeTab(index)}
                                        className={`mx-auto flex justify-center rounded-lg w-28 items-center bg-black py-[0.45rem] pl-2 pr-2 text-sm lg:pr-3`}
                                    >
                                        {activeTab[index] === 0 ? (
                                            <>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="#fff"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                                    <circle cx="12" cy="12" r="3" />
                                                </svg>
                                                <span className="sr-only text-stone-100 lg:not-sr-only lg:ml-2">
                                                    Preview
                                                </span>
                                            </>
                                        ) : (
                                            <>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="#fff"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="m18 16 4-4-4-4" />
                                                    <path d="m6 8-4 4 4 4" />
                                                    <path d="m14.5 4-5 16" />
                                                </svg>
                                                <span className="sr-only text-stone-100 lg:not-sr-only lg:ml-2">
                                                    Code
                                                </span>
                                            </>
                                        )}
                                    </button>
                                </div>

                                <div className="col-span-2 row-start-2 mt-3 min-w-0 overflow-hidden rounded-2xl border border-gray-300">
                                    {activeTab[index] === 0 ? (
                                        component.component
                                    ) : (
                                        <pre className="overflow-y-auto break-words text-sm">
                                            <code>{component.code}</code>
                                        </pre>
                                    )}
                                </div>
                            </div>
                        </section>
                    ))}
                    <div className="relative isolate mt-10 overflow-hidden rounded-2xl">
                        <Image
                            src={Hero1}
                            alt="hero-image"
                            priority={true}
                            className="absolute inset-0 z-[-10] h-full w-full rotate-180 object-cover"
                        />
                        <div className="absolute z-[-9] h-full w-full bg-gradient-to-b from-black/10 via-black/30 to-black"></div>
                        <h2 className="px-8 pt-10 text-white">
                            `Login to view all the components`
                        </h2>
                        <div className="h-full w-full py-12">
                            <div className="relative flex flex-1 flex-col items-center justify-center">
                                <div className="w-full max-w-sm">
                                    <button
                                        onClick={handleLogin}
                                        className="inline-flex w-full justify-center rounded-lg border border-olive-300 px-4 py-2.5 text-base text-white"
                                    >
                                        {load && (
                                            <svg
                                                className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-10"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                ></circle>
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                ></path>
                                            </svg>
                                        )}
                                        <Image
                                            src={GoogleLogo}
                                            alt="google-logo"
                                            width={20}
                                            height={20}
                                            className="mx-3 text-olive-200"
                                        />
                                        Log in with Google
                                    </button>
                                </div>
                                <div className="my-4 flex  max-w-sm items-center">
                                    <div className="h-[0.025rem] w-[24rem] bg-olive-300"></div>
                                    <div className="mx-2 text-olive-100">or</div>
                                    <div className="h-[0.025rem] w-full bg-olive-300"></div>
                                </div>
                            </div>
                            <div className="relative shrink-0">
                                <div className="space-y-4 text-sm text-olive-100 sm:flex sm:items-center sm:justify-center sm:space-x-4 sm:space-y-0">
                                    <p className="text-center sm:text-left">
                                        Don&apos;t have an account?
                                    </p>
                                    <a
                                        className="inline-flex justify-center rounded-lg px-4 py-2.5 text-sm text-olive-100 ring-1 ring-olive-200 hover:bg-black hover:ring-olive-700"
                                        href="/signup"
                                    >
                                        <span>
                                            Create an Account
                                            <span aria-hidden="true"></span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Layout;
