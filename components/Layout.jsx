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

    return (
        <div className="mt-10 space-y-28 bg-white pb-px">
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
        </div>
    );
};

export default Layout;
