import React from "react";
import Image from "next/image";
import products from "@/data/(json)/products";

const List2 = () => {
    return (
        <section className="relative isolate overflow-hidden">
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                        Customers also purchased
                    </h2>

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                        {products.slice(0, 3).map((product) => (
                            <div key={product.id} className="group relative rounded-xl p-3">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-[28rem]">
                                    <Image
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="h-full w-full object-cover object-center transition-all duration-200 ease-in group-hover:scale-[1.07] lg:h-full lg:w-full"
                                    />
                                </div>
                                <div className="mt-4 flex flex-col justify-between">
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
                                        </a>
                                    </h3>
                                    <p className="mt-2 text-base text-gray-600">
                                        {product.price}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default List2;
