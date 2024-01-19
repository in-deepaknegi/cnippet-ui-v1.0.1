import Image from "next/image";
import React from "react";
import Navbar from "@/public/images/components/navbar.png";
import Footer from '@/public/images/components/footer.png';
import Hero from '@/public/images/components/hero.png';
import Feature from '@/public/images/components/feature.png';
import FeatureList from '@/public/images/components/feature-list.png';
import Feedback from '@/public/images/components/feedback.png';


const component = [
    {
        name: "Navbar",
        source: "ui/components/navbar",
        imageURL: Navbar,
        number: "3 components",
    },
    {
        name: "Footer",
        source: "ui/components/footer",
        imageURL: Footer,
        number: "3 components",
    },
    {
        name: "Hero",
        source: "ui/components/hero",
        imageURL: Hero,
        number: "3 components",
    },
    {
        name: "Feature",
        source: "ui/components/feature",
        imageURL: Feature,
        number: "3 components",
    },
    {
        name: "Feature List",
        source: "ui/components/feature-list",
        imageURL: FeatureList,
        number: "3 components",
    },
    {
        name: "Feedback",
        source: "ui/components/feedback",
        imageURL: Feedback,
        number: "3 components",
    },
];

const Components = () => {
    return (
        <section className="relative isolate z-10 mx-auto w-full px-6 py-10 lg:px-8 lg:py-20">
            <div className="max-w-2xl">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">
                    Components
                </h2>
                <p className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900">
                    Beautifully crafted UI components, ready for your next project.
                </p>
            </div>
            <div className="max-w-xl">
                <p className="mt-4 text-base leading-7 text-slate-700">
                    Over 500+ professionally designed, fully responsive, expertly crafted
                    component examples you can drop into your Tailwind projects and
                    customize to your heart&apos;s content.
                </p>
            </div>

            <div className="relative mt-10 md:mt-8">
                <ul className="grid-cols-[repeat(auto-fill,minmax(12rem, 1fr))] grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {component.map((component) => (
                        <li key={component.name}>
                            <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                                <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                                    <Image
                                        src={component.imageURL}
                                        alt="navbar-img"
                                        className="absolute inset-0 h-full w-full"
                                    />
                                </div>
                                <h4 className="mt-4 text-sm font-medium text-slate-800 group-hover:text-indigo-600">
                                    <a href={component.source}>
                                        <span className="absolute -inset-2.5 z-10"></span>
                                        <span className="relative">{component.name}</span>
                                    </a>
                                </h4>
                                <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                                    {component.number}
                                </p>
                            </div>
                        </li>
                    ))}

                    <div className="pointer-events-none absolute -inset-x-2.5 -bottom-2.5 h-[16.6%] bg-gradient-to-t from-white to-white/25 sm:h-[33.3%]"></div>
                </ul>
            </div>
            <div className="pointer-events-none relative z-10 -mt-5 flex justify-center">
                <a className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-primary text-black pointer-events-auto" href="#">
                    <span>Show more...</span>
                </a>
            </div>
        </section>
    );
};

export default Components;