import { Fragment } from "react";

function SparePartsTimeline() {
    const items = [
        { year: "2002", title: "Founding & Growth", text: "Lorem ipsum dolor sit amet consectetur. Nunc sed at morbi neque viverra sem." },
        { year: "2010", title: "Service Portfolio Expansion", text: "Lorem ipsum dolor sit amet consectetur. Nunc sed at morbi neque viverra sem." },
        { year: "2017", title: "Innovation and Development", text: "Lorem ipsum dolor sit amet consectetur. Nunc sed at morbi neque viverra sem." },
        { year: "2024", title: "Team Achievements", text: "Lorem ipsum dolor sit amet consectetur. Nunc sed at morbi neque viverra sem." }
    ]
    return (
        <div className="bg-gray-50 md:h-screen w-full pt-13 pb-18 md:py-20">
            <div className="flex flex-col items-center max-w-7xl mx-auto px-5">
                <h2 className="font-medium uppercase t-base">What we did</h2>
                <p className="font-semibold text-3xl md:text-4xl max-w-lg text-center mt-2 md:mt-4">Recognitions & milestones</p>
                <Mobile items={items} />
                <Desktop items={items} />
            </div>
        </div>
    )
};

const Mobile = ({ items }) => (
    <div className="md:hidden space-y-16 mt-16">
        {items.map((item, i) => (
            <div className="flex flex-col items-center gap-6">
                <Year item={item} />
                <Circle />
                <TitleAndText item={item} />
            </div>
        ))}
    </div>
)

const Desktop = ({ items }) => (
    <div className="relative w-full hidden md:block mt-70">
        <div className="w-full h-px bg-gray-700"></div>
        <div className="absolute inset-0 grid grid-cols-4 gap-10">
            {items.map((item, i) =>
            (i % 2 === 0 ? (
                <div className="flex flex-col items-center gap-8 -translate-y-19">
                    <Year item={item} />
                    <Circle />
                    <TitleAndText item={item} />
                </div>
            ) : (
                <div className="flex flex-col items-center gap-8 -translate-y-39">
                    <TitleAndText item={item} />
                    <Circle />
                    <Year item={item} />
                </div>
            )))}
        </div>
    </div>
)

const Year = ({ item }) => (
    <span className="text-2xl font-semibold">{item.year}</span>
);

const Circle = () => (
    <div className="relative flex items-center justify-center">
        <div className="absolute size-7 rounded-full bg-blue-300 animate-ping" />
        <div className="relative size-6 b-base rounded-full" />
    </div>
);

const TitleAndText = ({ item }) => (
    <div className="text-center">
        <h3 className="text-xl font-semibold">{item.title}</h3>
        <p className="mt-3 text-gray-700">{item.text}</p>
    </div>
)

export default SparePartsTimeline