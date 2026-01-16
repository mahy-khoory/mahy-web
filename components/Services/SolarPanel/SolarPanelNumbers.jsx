function SolarPanelNumbers() {
    const items = [
        { title: "Projects Completed", count: "125k" },
        { title: "Customer's Satisfaction", count: "95%" },
        { title: "Employee Worked", count: "5k" }
    ];
    return (
        <section className="max-w-5xl mx-auto py-10 md:py-20">
            <h2 className="px-5 text-3xl md:text-5xl md:leading-15 tracking-tighter font-medium text-center uppercase">Our Tailored Consulting Solutions Help Overcome Challenges</h2>
            <div className="grid grid-cols-3 mt-8 md:mt-18">
                {items.map((item, i) => (
                    <div key={i} className={`border-y border-gray-300 flex flex-col items-center py-8 ${i === 1 && "border-x"} px-5`}>
                        <span className="text-3xl md:text-5xl font-medium">{item.count}</span>
                        <h3 className="mt-2 md:mt-3 uppercase text-gray-700 font-medium text-xs md:text-sm text-center">{item.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SolarPanelNumbers