import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <section>
            <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                    <div className="relative z-10 lg:py-16">
                        <div className="relative h-64 sm:h-80 lg:h-full">
                            <Image
                                width={400}
                                height={400}
                                alt="House"
                                src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="relative flex items-center bg-gray-100">
        <span
            className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"
        ></span>

                        <div className="p-8 sm:p-16 lg:p-24">
                            <h2 className="text-2xl font-bold sm:text-3xl">
                                Animals rehoming and rescue
                            </h2>

                            <p className="mt-4 text-gray-600">
                                We are a non-profit organization that helps
                                animals in need. We help animals find new homes
                                and provide them with the best care. We are
                                always looking for volunteers to help us with
                                our mission. If you are interested in helping
                                us, please contact us.
                                You can search throurgh a list of animals that
                                are looking for a new home. You can also
                                contribute to our cause by donating money or
                                volunteering.
                            </p>

                            <Link
                                href="/support"
                                className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                            >
                                Check available pupils
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
