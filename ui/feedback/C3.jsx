import React from 'react'
import Image from "next/image";
import Profile1 from "@/public/images/profile/profile1.jpg";
import Profile2 from "@/public/images/profile/profile2.jpg";
import Profile3 from "@/public/images/profile/profile3.jpg";
import Profile4 from "@/public/images/profile/profile4.jpg";
import Profile5 from "@/public/images/profile/profile5.jpg";
import Profile6 from "@/public/images/profile/profile6.jpg";

const feedbacks = [
    {
        id: 1,
        text: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam",
        image: Profile1,
        author: "Lindsay Walton",
        username: "@lindsaywalton",
    },
    {
        id: 2,
        text: "Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.",
        image: Profile2,
        author: "Lindsay Walton",
        username: "@lindsaywalton",
    },
    {
        id: 3,
        text: "Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.",
        image: Profile3,
        author: "Emily Selman",
        username: "@emilyselman",
    },
    {
        id: 4,
        text: "Aliquid dolore praesentium ratione. Cumque ea officia repellendus laboriosam. Vitae quod id explicabo non sunt.",
        image: Profile4,
        author: "Floyd Miles",
        username: "@floydmiles",
    },
    {
        id: 5,
        text: "Aliquid dolore praesentium ratione. Cumque ea officia repellendus laboriosam. Vitae quod id explicabo non sunt.",
        image: Profile5,
        author: "Leonard Kras",
        username: "@leonardkras",
    },
    {
        id: 6,
        text: "Temporibus ea molestiae impedit adipisci perspiciatis illo aliquid. Quis ut ratione et voluptatem et. Nostrum explicabo iste unde beatae.",
        image: Profile6,
        author: "Catthy Meuller",
        username: "@catthymueller",
    },

]

const C3 = () => {
    return (
        <section className='relative isolate bg-white py-16 lg:py-10'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <div className='mx-auto max-w-4xl text-center'>
                    <p className="text-base font-semibold leading-7 text-blue-700">
                        Get the help you need
                    </p>
                    <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                    We have worked with thousands of amazing people
                    </h2>
                    <p className="mt-6 text-base leading-8 text-gray-600 md:text-lg">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
                        cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
                        aliqua.
                    </p>
                </div>

                <div className='mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
                    <div className='space-y-8'>
                        {feedbacks.slice(0, 2).map((feedback) => (
                            <figure key={feedback.id} className='rounded-2xl bg-olive-100 p-6 shadow-lg ring-1 ring-olive-200'>
                                <blockquote className='text-sm text-gray-700'>
                                    <p>
                                        {feedback.text}
                                    </p>
                                </blockquote>
                                <figcaption className='mt-6 flex items-center gap-6'>
                                    <Image
                                        src={feedback.image}
                                        alt='profile-1 photo'
                                        className='w-10 h-10 rounded-full object-cover'
                                    />
                                    <div className='text-sm'>
                                        <div className='font-semibold text-gray-800'>
                                            {feedback.author}
                                        </div>
                                        <div className='text-gray-600'>
                                            {feedback.username}
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>
                        ))}
                    </div>

                    <div className='space-y-8'>
                        {feedbacks.slice(2, 4).map((feedback) => (
                            <figure key={feedback.id} className='rounded-2xl bg-olive-100 p-6 shadow-lg ring-1 ring-olive-200'>
                                <blockquote className='text-sm text-gray-700'>
                                    <p>
                                        {feedback.text}
                                    </p>
                                </blockquote>
                                <figcaption className='mt-6 flex items-center gap-6'>
                                    <Image
                                        src={feedback.image}
                                        alt='profile-1 photo'
                                        className='w-10 h-10 rounded-full object-cover'
                                    />
                                    <div className='text-sm'>
                                        <div className='font-semibold text-gray-800'>
                                            {feedback.author}
                                        </div>
                                        <div className='text-gray-600'>
                                            {feedback.username}
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>
                        ))}
                    </div>

                    <div className='space-y-8'>
                        {feedbacks.slice(4, 6).map((feedback) => (
                            <figure key={feedback.id} className='rounded-2xl bg-olive-100 p-6 shadow-lg ring-1 ring-olive-200'>
                                <blockquote className='text-sm text-gray-700'>
                                    <p>
                                        {feedback.text}
                                    </p>
                                </blockquote>
                                <figcaption className='mt-6 flex items-center gap-6'>
                                    <Image
                                        src={feedback.image}
                                        alt='profile-1 photo'
                                        className='w-10 h-10 rounded-full object-cover'
                                    />
                                    <div className='text-sm'>
                                        <div className='font-semibold text-gray-800'>
                                            {feedback.author}
                                        </div>
                                        <div className='text-gray-600'>
                                            {feedback.username}
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default C3