function KitchenBackgroundGrid() {
    const items = [
        { count: "01", title: "Strategic Visionaries", text: "We start by understanding your business at its core. Our team of seasoned consultants collaborates with you to craft a strategic vision that aligns with your goals." },
        { count: 16, title: "Customized Solutions", text: "No two businesses are alike, and we recognize that. Our team develops bespoke solutions tailored to your specific needs." },
        { count: 40, title: "Collaborative Execution", text: "We believe in partnership. Once a strategy is in place, we work side by side with your team to implement the recommended changes." }
    ];

    return (
        <section className="md:h-screen w-full relative bg-slate-800">
            <div className="relative md:absolute inset-0 z-20 flex flex-col justify-between py-8 md:py-15 max-w-7xl mx-auto px-5">
                <div className="flex justify-between flex-wrap gap-3">
                    <h2 className="t-base font-bold text-lg">How we work</h2>
                    <p className="max-w-lg md:text-xl text-white">Our unique methodology is designed to empower organizations, driving transformative change and sustainable growth. Discover the key pillars of our collaborative process:</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 mt-10 md:mt-0">
                    {items.map((item, i) => (
                        <Card key={i} item={item} />
                    ))}
                </div>
            </div>
        </section>
    )
}

const Card = ({ item }) => (
    <div>
        <div className="h-3 w-full bg-slate-700" />
        <div className="bg-gray-900 p-6 md:p-8">
            <h3 className="text-2xl text-white font-semibold">{item.title}</h3>
            <p className="mt-4 mb-8 md:h-35 text-white">{item.text}</p>
            <p className="text-right text-8xl font-semibold text-slate-800">{item.count}</p>
        </div>
    </div>
)

export default KitchenBackgroundGrid