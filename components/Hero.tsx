import Link from "next/link";

export default function Hero() {
    return (
        <div>
            <section className="mb-3">
                <div className="px-6 py-12 md:px-12 bg-gray-50 text-gray-800 text-center lg:text-left">
                    <div className="container mx-auto xl:px-32">
                        <div className="grid lg:grid-cols-2 gap-12 flex items-center">
                            <div className="mt-12 lg:mt-0">
                                <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-5">Adopt <br/><span
                                    className="text-blue-600">friend for life</span></h1>
                                <p className="mb-12 text-lg">You can see here all available pupils and adopt them. It&apos;s
                                    also possible to support them by donating.</p>
                                <Link
                                    className="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                    data-mdb-ripple="true" data-mdb-ripple-color="light" href="/adopt" role="button">List
                                    of pupils</Link>
                                <Link
                                    className="inline-block px-7 py-3 bg-transparent text-blue-600 font-medium text-sm leading-snug uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
                                    data-mdb-ripple="true" data-mdb-ripple-color="light" href="/donate" role="button">Support
                                    us</Link>

                            </div>
                            <div className="mb-12 lg:mb-0">
                                <img
                                    src="https://mdbootstrap.com/img/new/ecommerce/vertical/028.jpg"
                                    className="w-full rounded-lg shadow-lg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
