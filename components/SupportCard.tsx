import {CardType} from "../utils/types/CardType";

export default function SupportCard({ title, description, icon } : CardType) {
    return (
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div
                className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                {icon}
            </div>
            <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{title}</h2>
                <p className="leading-relaxed text-base">{description}</p>
            </div>
        </div>
    )
}
