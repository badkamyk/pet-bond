import { CardType } from "../utils/types/CardType";

export default function SingleCardStep({ icon, title, description }: CardType) {
    return (
        <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
            <span className="inline-block text-blue-500 dark:text-blue-400">
                {icon}
            </span>

            <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">{title}</h1>

            <p className="text-gray-500 dark:text-gray-300">
                {description}
            </p>

            <a href="/adopt"
                className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </a>
        </div>
    )
}
