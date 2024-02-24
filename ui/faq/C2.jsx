"use client";
import React, { useState } from "react";

const Data = [
    {
        id: 1,
        question: "What's the best thing about Switzerland",
        answer:
            "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        id: 2,
        question: "What do you call someone with no body and no nose?",
        answer:
            "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        id: 3,
        question: "Why do you never see elephants hiding in trees?",
        answer:
            "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
];

const Faq2 = () => {
    const [active, setActive] = useState(null);

    const toggleActive = (index) => {
        setActive(active === index ? null : index);
    };

    return (
        <section className="relative isolate bg-white">
            <div className="mx-auto max-w-7xl px-6 py-16 sm:pt-24 lg:px-8 lg:py-20">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    <div className="col-span-5">
                        <h2 className="text-3xl font-bold leading-10 text-gray-800 md:text-4xl">
                            Frequently asked questions
                        </h2>
                        <p className="mt-4 leading-7 text-gray-600">
                            Can&apos;t find the answer you&apos;re looking for? Reach out to
                            our
                            <a href="#" className="text-blue-600">
                                {" "}
                                customer support{" "}
                            </a>
                            team.
                        </p>
                    </div>
                    <div className="col-span-7 mt-8 lg:mt-0">
                        <dl className="space-y-9">
                            {Data.map((item, i) => (
                                <div key={i}>
                                    <dt>
                                        <button
                                            onClick={() => toggleActive(i)}
                                            className="flex w-full items-start justify-between text-left">
                                            <span className="text-base font-semibold leading-7 text-gray-900">
                                                {item.question}
                                            </span>
                                            <span>
                                                {active === i ? (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path d="M5 12h14" />
                                                    </svg>
                                                ) : (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path d="M5 12h14" />
                                                        <path d="M12 5v14" />
                                                    </svg>
                                                )}
                                            </span>
                                        </button>
                                    </dt>
                                    {active === i && (
                                        <dd className="mt-2 text-base leading-7 text-gray-600">
                                            {item.answer}
                                        </dd>
                                    )}
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq2;
