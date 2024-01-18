"use client";
import React, { useState } from "react";
import Navbar1 from "@/ui/navbar/Navbar1";
import Navbar2 from "@/ui/navbar/Navbar2";
import Navbar3 from "@/ui/navbar/Navbar3";
import Code1 from '@/ui/navbar/Code1';

const components = [
    {
        id: "1",
        title: "Simple navbar with menu and button on right",
        color: "#0950f6",
        code: (<pre className="bg-gray-900 text-sm leading-5 px-6 py-2 text-blue-50 ">
        <code>
  {`<header className="relative isolate">
      <nav className="flex items-center justify-between py-5 lg:px-8">
          <div className="flex">
              <a href="/" className="-m-1.5 p-1.5 text-2xl font-medium">
                  Cnippet
              </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Components</a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Templates</a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">About</a>
          </div>
          <div className="hidden lg:ml-8 lg:flex lg:items-center lg:pl-8">
              <a href="#">Sign in</a>
              <a href="#" className="inline-flex justify-center rounded-lg text-sm font-semibold py-2 px-4 bg-slate-900 text-white hover:bg-slate-700 -my-2.5 ml-8">
                  <span>Get pro <span aria-hidden="true">→</span></span>
              </a>
          </div>
      </nav>
  </header>`}
        </code>
      </pre>)
    },
    {
        id: "2",
        title: "Simple navbar with menu in center and button in right",
        color: "#3e75f4",
    },
    {
        id: "3",
        title: "Simple navbar with menu in center and button in right",
        color: "#3e75f4",
    },
];

const getComponent = (id) => {
    switch (id) {
        case "1":
            return <Navbar1 />;
        case "2":
            return <Navbar2 />;
        case "3":
            return <Navbar3 />;
        default:
            return null;
    }
};
const getCode = (id) => {
    switch (id) {
        case "1":
            return <Code1 />;

        default:
            return null;
    }
};

const Hero = () => {

    const [activeTab, setActiveTab] = useState([0, 0, 0, 0, 0]);

    const changeTab = (index) => {
        const newActiveTab = [...activeTab];
        newActiveTab[index] = newActiveTab[index] === 0 ? 1 : 0;
        setActiveTab(newActiveTab);
    };

    return (
        <section className="relative overflow-hidden pt-16">
            <div className="relative mx-auto w-full px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col">
                    <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
                        Navbars
                    </h1>
                    <nav className="order-first flex space-x-2 text-sm font-semibold">
                        <a href="/" className="text-slate-500 hover:text-slate-600">
                            Application UI
                        </a>
                        <div className="select-none text-slate-400">/</div>
                        <a href="/" className="text-slate-500 hover:text-slate-600">
                            Navbars
                        </a>
                    </nav>
                </div>
                <div className="mt-10 space-y-28 pb-px">
                    {components.map((component, index) => (
                        <section key={component.id} id="footer-1">
                            <div className="grid grid-cols-[1fr,auto] items-center">
                                <div className="flex min-w-0">
                                    <h2 className="truncate text-base font-medium leading-7 text-slate-900">
                                        <a href="#">{component.title}</a>
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

                                <div className="col-span-2 row-start-2 mt-3 min-w-0 rounded-2xl border overflow-hidden">
                                    {activeTab[index] === 0 ? (
                                        getComponent(component.id)
                                    ) : (
                                        component.code
                                    )}
                                </div>
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;