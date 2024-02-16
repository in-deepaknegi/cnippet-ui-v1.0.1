import React from "react";
import Image from "next/image";
import Profile1 from "@/public/images/profile/profile5.jpg";

const Feedback1 = () => {
    return (
        <section className="isolate overflow-hidden bg-white px-6 lg:px-8">
            <div className="relative mx-auto max-w-xl py-16 sm:py-24 lg:max-w-2xl">
                <figure className="items-center gap-8">
                    <div className="col-span-2 font-sans">
                        <div className="relative">
                            <svg viewBox="0 0 162 128" fill="none" aria-hidden="true"
                                className="absolute top-[-3rem] z-[-10] h-32 stroke-slate-300">
                                <path
                                    id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                                    d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                                ></path>
                                <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x="86"></use>
                            </svg>
                            <blockquote className="text-center text-xl text-gray-900 sm:text-2xl sm:leading-8">
                                <p>
                                    Commodo amet fugiat excepteur sunt qui ea elit cupidatat
                                    ullamco consectetur ipsum elit consequat. Elit sunt proident
                                    ea nulla ad nulla dolore ad pariatur tempor non. Sint veniam
                                    minim et ea.
                                </p>
                            </blockquote>
                        </div>

                        <figcaption className="mx-auto mt-8 flex justify-center">
                            <Image
                                src={Profile1}
                                alt="profile-1"
                                className="h-12 w-12 rounded-full object-cover"
                            />
                            <div className="ml-5">
                                <div className="text-lg font-semibold">Judith Black</div>
                                <div className="text-gray-700">CEO of CodeCnippet</div>
                            </div>
                            <div className="mx-3 my-auto h-10 w-[1px] bg-gray-400"></div>
                            <div className="my-auto flex">
                                {[...Array(4).keys()].map((index) => (
                                    <div key={index}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="h-5 w-5 text-blue-600"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                ))}
                                {[...Array(1).keys()].map((index) => (
                                    <div key={index}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="h-5 w-5 text-gray-200"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                ))}
                            </div>
                        </figcaption>
                    </div>
                </figure>
            </div>
        </section>
    );
};

export default Feedback1;
