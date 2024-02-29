import React from "react";
import Image from "next/image";
import products from '@/data/(json)/products';

const List1 = () => {
    return (
        <section className="relative isolate overflow-hidden">
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                        Customers also purchased
                    </h2>

                    <div className="mt-6 grid grid-cols-1 gap-x-3 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
                        {products.map((product) => (
                            <div key={product.id} className="group relative p-2 hover:bg-gray-100 rounded-2xl hover:scale-[1.02] transition-all ease-in duration-75">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-2xl bg-gray-200 lg:aspect-none lg:h-80 ">
                                    <Image
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">
                                            <a href={product.href}>
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {product.name}
                                            </a>
                                        </h3>
                                        <p className="mt-3 text-sm text-gray-700">{product.desc}</p>
                                    </div>
                                    <p className="text-base font-medium text-gray-900">
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

export default List1;
