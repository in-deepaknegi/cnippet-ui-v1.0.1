import React from "react";

const Newsletter2 = () => {
    return (
        <section className="bg-white py-16 md:py-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 flex justify-between lg:flex-row flex-col gap-4">
                <div className="max-w-xl">
                    <h2 className="text-3xl font-bold tracking-tight text-olive-900 md:text-4xl">
                        Want product news and updated?
                    </h2>
                    <p className="mt-3 text-xl font-bold tracking-tight text-olive-700 md:text-2xl">
                        Sing up for out newsletter
                    </p>
                </div>
                <form action="" className="news w-full max-w-md lg:py-2">
                    <div className="flex gap-x-3">
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            placeholder="Enter your email"
                        />
                        <button
                            type="submit"
                            className="flex-none rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
                        >
                            Subscribe
                        </button>
                    </div>
                    <p className="mt-4 text-sm text-gray-700">
                        We care about your data. Read our
                        <span className="text-blue-800">
                            <a href="#"> privacy policy</a>
                        </span>
                        .
                    </p>
                </form>
            </div>
        </section>
    );
};

export default Newsletter2;