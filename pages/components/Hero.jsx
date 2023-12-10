import React from 'react'

const Hero = () => {

    return (
        <section className="bg-white">
            <div className="relative isolate px-6 pt-14 lg:px-8 h-screen">
                
                <div className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden -top-44 blur-3xl" aria-hidden="true">
                    <div className="relative left-[calc(80%-18rem)] aspect-[1155/678] w-[36.125rem] bg-gradient-to-tr bg-opacity-50 from-fuchsia-300 to-fuchsia-100 sm:right-0 sm:w-[50.1875rem]" ></div>
                </div>

                <div className="mx-auto max-w-2xl py-20">
                    {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            Announcing our next round of funding. <a href="#" className="font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
                        </div>
                    </div> */}
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Beautiful UI components, crafted with Tailwind CSS.
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-black font-light">
                            Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize to your heart&apos;s content.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a href="#" className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 0">Browse Components</a>
                            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Explore templates <span aria-hidden="true">→</span></a>
                        </div>
                    </div>
                </div>

                <div className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[45vh]" aria-hidden="true">
                    <div className="relative left-[calc(50%-11rem)] aspect-[1155/778] w-[36.125rem] rotate-45 bg-gradient-to-tr from-blue-500 to-rose-300 bg-opacity-40 sm:left-0 sm:w-[32.1875rem]" ></div>
                </div>
            </div>
        </section>
    )
}

export default Hero