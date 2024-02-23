"use client"
import React, { useState } from 'react';

const Newsletter = () => {

    const [email, setEmail] = useState([]);
    const [message, setMessage] = useState([]);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true)
        const res = await fetch('/api/newsletter', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                email
            })
        })

        const { msg, success } = await res.json();
        setSuccess(success);
        setMessage(msg);
        setLoading(false);
        setEmail("");
    }

    return (
        <section
            id="newsletter"
            className="overflow-x-hidden py-10 sm:py-16 lg:py-24"
        >
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center px-6 lg:grid-cols-12 lg:gap-1 lg:px-8">
                <div className="col-span-12 mx-auto lg:col-span-7 lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Stay Updated with Our Newsletter
                    </h2>
                    <p className="mt-4 text-base text-gray-600">
                        Receive the most recent information about new services and exclusive
                        deals.
                    </p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="form col-span-12 mx-auto mt-6 w-full max-w-md lg:col-span-5 lg:mx-0 lg:mt-0"
                >
                    <div className="flex gap-x-3">
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required

                            placeholder="Enter your email"
                        />
                        <button
                            type="submit"
                            className="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                        >
                            Subscribe
                        </button>
                    </div>
                    <div className='my-auto mt-2'>
                        {message && message.map((e) => (
                            <div key={message} className={`${success ? 'text-green-600' : 'text-indigo-700'} text-sm font-semibold`}>
                                <span className='my-auto'>{e}</span>
                            </div>
                        ))
                        }
                    </div>
                    <p className="fose mt-4 text-sm text-gray-700">
                        We care about your data. Read our
                        <span className="text-indigo-600">
                            <a href="#"> privacy policy</a>
                        </span>
                        .
                    </p>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;
