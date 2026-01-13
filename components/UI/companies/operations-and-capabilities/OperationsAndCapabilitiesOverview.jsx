
function OperationsAndCapabilitiesOverview() {
    const items = [
        { title: "Transparency", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit tortor eu in viverra aliquam massa in dis." },
        { title: "Hard Work", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit tortor eu in viverra aliquam massa in dis." },
        { title: "Teamwork", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit tortor eu in viverra aliquam massa in dis." },
        { title: "Ownership", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit tortor eu in viverra aliquam massa in dis." },
        { title: "Innovation", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit tortor eu in viverra aliquam massa in dis." },
        { title: "Commitment", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit tortor eu in viverra aliquam massa in dis." }
    ];
    return (
        <section className="bg-slate-900 pt-18 pb-10 md:py-20 px-5">
            <div className="max-w-7xl mx-auto">
                <p className="text-gray-200 font-semibold text-2xl uppercase text-center pt-5">Our Values</p>
                <p className="text-white font-semibold text-3xl md:text-5xl text-center max-w-2xl mx-auto mt-4 md:mt-6 mb-10 md:mb-16">The core mantra that drives everything we do</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 md:pb-40">
                    {items.map((item, i) => (
                        <Card key={i} item={item} i={i} />
                    ))}
                </div>
            </div>
        </section>
    )
};

const Card = ({ item, i }) => (
    <div
        key={i}
        className={`border border-white aspect-square w-full
            ${i % 2 === 0 ? "bg-white" : "text-white"}
            ${(i + 1) % 3 === 2 && "md:translate-y-20"}
            ${(i + 1) % 3 === 0 && "md:translate-y-40"}`}>
        <div className="flex flex-col justify-center h-full px-10">
            <span className="text-slate-400 font-semibold text-2xl">0{i + 1}</span>
            <h2 className="text-4xl font-semibold mt-4">{item.title}</h2>
            <p className={`mt-5 ${i % 2 === 0 ? "text-gray-600" : "text-gray-300"} `}>{item.text}</p>
        </div>
    </div>
)

export default OperationsAndCapabilitiesOverview