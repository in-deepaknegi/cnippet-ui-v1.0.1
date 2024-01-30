"use client";
import React, { useState } from "react";

const Layout = ({ components }) => {
    const [activeTab, setActiveTab] = useState([0, 0, 0, 0, 0]);

    const changeTab = (index) => {
        const newActiveTab = [...activeTab];
        newActiveTab[index] = newActiveTab[index] === 0 ? 1 : 0;
        setActiveTab(newActiveTab);
    };

    return (
        <div className="mt-10 space-y-28 pb-px">
            {components.map((component, index) => (
                <section key={component.id} id={`feature-list${component.id}`}>
                    <div className="grid grid-cols-[1fr,auto] items-center">
                        <div className="flex min-w-0">
                            <div className="my-auto text-base font-semibold">#{component.id}&nbsp;</div>
                            <h2 className="truncate text-base font-medium leading-7 text-slate-900">
                                {component.title}
                            </h2>
                            <p className="ml-3 hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 lg:block">
                                TailwindCss
                            </p>
                        </div>
                        <div className="ml-6 flex items-center">
                            <div className="flex space-x-1 rounded-lg bg-slate-100 p-0.5">
                                <button
                                    onClick={() => changeTab(index)}
                                    className={`flex items-center rounded-md py-[0.45rem] pl-2 pr-2 text-sm font-semibold lg:pr-3 ${activeTab[index] === 0 ? "bg-white shadow" : ""}`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#0950f6"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                        <circle cx="12" cy="12" r="3" />
                                    </svg>
                                    <span className="sr-only text-stone-900 lg:not-sr-only lg:ml-2">
                                        Preview
                                    </span>
                                </button>
                                <button
                                    onClick={() => changeTab(index)}
                                    className={`flex items-center rounded-md py-[0.45rem] pl-2 pr-2 text-sm font-semibold lg:pr-3 ${activeTab[index] === 1 ? "bg-white shadow" : ""}`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#3e75f4"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <polyline points="16 18 22 12 16 6" />
                                        <polyline points="8 6 2 12 8 18" />
                                    </svg>
                                    <span className="sr-only text-stone-900 lg:not-sr-only lg:ml-2">
                                        Code
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div className="col-span-2 row-start-2 mt-3 min-w-0 rounded-2xl border border-gray-300 overflow-hidden">
                            {activeTab[index] === 0 ? (
                                component.component
                            ) : (
                                <pre className="text-sm overflow-y-auto break-words">
                                    <code>
                                        {component.code}
                                    </code>
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
