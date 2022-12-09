import SingleCardStep from './SingleCardStep';
import { cardHomeData } from '../utils/data/cardHomeData';

export default function StepCard() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl dark:text-white">How
                    to <br /><span className="underline decoration-blue-500">adopt a pupil</span></h1>

                <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
                    Follow these steps to gain a new friend
                </p>

                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                    {cardHomeData.map((card) => (
                        <SingleCardStep key={card.title} {...card} />
                    ))}
                </div>
            </div>
        </section>
    );
}

