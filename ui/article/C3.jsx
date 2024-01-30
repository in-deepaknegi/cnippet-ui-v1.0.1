import React from "react";
import Image from "next/image";
import Hero1 from "@/public/images/Hero/hero8.jpg";
import Profile1 from "@/public/images/profile/profile5.jpg";

const C3 = () => {
    return (
        <main className="antialiased">
            <div className="border-b-2 border-gray-200 bg-gradient-to-b from-gray-200 px-6 pb-8 pt-8 text-center lg:px-8 lg:pt-16">
                <div className="mx-auto max-w-5xl space-y-6">
                    <h1 className="text-2xl font-extrabold text-slate-900 md:text-4xl ">
                        Introducing Catalyst: A modern UI kit for&nbsp;React
                    </h1>
                    <div className="text-sm">
                        <dl>
                            <dt className="sr-only">Date</dt>
                            <dd className=" text-slate-800">
                                <time dateTime="2023-12-20T20:00:00.000Z">
                                    Thursday, December 21, 2023
                                </time>
                            </dd>
                        </dl>
                    </div>
                    <div className="mx-auto max-w-3xl">
                        <Image
                            src={Hero1}
                            alt="featured-image"
                            className="aspect-[16/9] rounded-xl object-cover object-center"
                        />
                    </div>
                    <ul className="flex flex-wrap text-sm leading-6">
                        <li className="mt-6 flex items-center gap-4 whitespace-nowrap font-medium md:px-5">
                            <Image
                                src={Profile1}
                                alt="id-1"
                                className="h-8 w-8 rounded-full bg-gray-50 object-cover"
                            />
                            <div className="text-sm leading-4">
                                <div className="text-slate-900 ">Adam Wathan</div>
                                <div className="mt-1">
                                    <a
                                        href="#"
                                        className="text-sky-500 hover:text-sky-600 dark:text-sky-400"
                                    >
                                        @adamwathan
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mx-auto mt-8 flex max-w-6xl justify-between px-4 lg:px-0">
                <article className="relative mx-auto max-w-2xl pt-10">
                    <div className="flex flex-col gap-y-6 font-sans text-gray-800">
                        <p className="text-lg">
                            Today the day — we just published the first development preview of
                            just in time for your holiday hacking sessions.
                        </p>
                        <p>
                            <strong>Catalyst</strong> is our first fully-componentized,
                            batteries-included application UI kit — real React components with
                            thoughtfully designed APIs that build on each other to create a
                            real component architecture, the same way we&apos;d do it in a
                            real application
                        </p>
                        <p>
                            Check out the read the and if you&apos;re a Tailwind UI All-Access
                            customer
                        </p>
                        <h2 className="text-lg font-semibold text-slate-900 md:text-2xl">
                            Your components, not ours
                        </h2>
                        <p>
                            <strong>Catalyst</strong> is our first fully-componentized,
                            batteries-included application UI kit — real React components with
                            thoughtfully designed APIs that build on each other to create a
                            real component architecture, the same way we&apos;d do it in a
                            real application
                        </p>

                        <p>
                            With Catalyst, we set out to build a UI kit that tomorrow&apos;s
                            Stripe or Linear would feel good about using to build their
                            products — design-obsessed teams who want to own their UI
                            components, and would never choose an off-the-shelf library.
                        </p>

                        <p className="text-base leading-6">
                            With Catalyst, we set out to build a UI kit that tomorrow&apos;s
                            Stripe or Linear would feel good about using to build their
                            products — design-obsessed teams who want to own their UI
                            components, and would never choose an off-the-shelf library.
                        </p>

                        <hr />
                        <h1 className="text-2xl font-extrabold text-slate-900 md:text-4xl">
                            Style Guide
                        </h1>
                        <h1>Font : font-sans</h1>
                        <h1 className="text-2xl font-extrabold text-slate-900 md:text-4xl">
                            Heading 1
                        </h1>
                        <h2 className="text-xl font-extrabold text-slate-900 md:text-3xl">
                            Heading 2
                        </h2>
                        <h3 className="text-lg font-extrabold text-slate-900 md:text-2xl">
                            Heading 3
                        </h3>
                        <h4 className="text-base font-extrabold text-slate-900 md:text-xl">
                            Heading 4
                        </h4>
                        <h5 className="text-md font-extrabold text-slate-900 md:text-lg">
                            Heading 5
                        </h5>
                        <p className="text-base leading-7 text-gray-700">
                            This is a sample para small
                        </p>
                        <p className="text-lg leading-7 text-gray-700">
                            This is a sample para standard
                        </p>
                        <p className="text-2xl leading-7 text-gray-700">
                            This is a sample para large
                        </p>
                        <div className="inset-0 z-10 overflow-y-auto">
                            <div className="min-h-full p-0 text-center sm:items-center">
                                <div className="relative ml-1 overflow-hidden rounded-lg border border-sky-600   bg-white shadow-lg shadow-sky-100 transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="p-3">
                                        <div className="text-center sm:ml-4 sm:mt-0 sm:text-left">
                                            <h3
                                                className="text-base font-semibold leading-6 text-gray-900"
                                                id="modal-title"
                                            >
                                                Note
                                            </h3>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-700">
                                                    Are you sure you want to deactivate your account? All
                                                    of your data will be permanently removed. This action
                                                    cannot be undone.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                <aside className="hidden pt-10 lg:block lg:w-72">
                    <div className="sticky top-6">
                        <div className="rounded-2xl border p-6 shadow-xl">
                            <h3 className="mb-4 border-b text-lg font-semibold">
                                Related articles
                            </h3>

                            <a href="#">
                                <div className="text-base font-semibold text-blue-600">
                                    Enterprise design tips
                                </div>
                                <p className="mb-4 line-clamp-2 text-sm text-slate-900">
                                    Over the past year, Volosoft has undergone many changes! After
                                    months of preparation.
                                </p>
                            </a>
                            <a href="#">
                                <div className="text-base font-semibold text-blue-600">
                                    We partnered up with Google
                                </div>
                                <p className="mb-4 line-clamp-2 text-sm text-slate-900">
                                    Over the past year, Volosoft has undergone many changes! After
                                    months of preparation.
                                </p>
                            </a>
                            <a href="#">
                                <div className="text-base font-semibold text-blue-600">
                                    Our first project with React
                                </div>
                                <p className="mb-0 line-clamp-2 text-sm text-slate-900">
                                    Over the past year, Volosoft has undergone many changes! After
                                    months of preparation.
                                </p>
                            </a>
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    );
};

export default C3;
