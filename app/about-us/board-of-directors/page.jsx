import AnimatedLines from '@/components/UI/AnimatedLines'
import Image from 'next/image';
import React from 'react'

function DirectorsPage() {
    const items = [
        { title: "Mr. Salahuddin Sharafi", text: "Mr. Salahuddin Sharafi has been CEO of Virgin Group since 2011. He has led the development of the Group’s strategy, with significant emphasis on the Virgin brand. Under Josh’s leadership, the Group has started and grown new businesses in a range of consumer industries. It has also diversified its investment portfolio into unbranded venture capital, real estate and a range of ESG investments.", image: "/gallery/chairmanphoto.jpg" },
        { title: "Mr. Shabbir Haideri", text: "Mr. Shabbir Haideri has been CEO of Virgin Group since 2011. He has led the development of the Group’s strategy, with significant emphasis on the Virgin brand. Under Josh’s leadership, the Group has started and grown new businesses in a range of consumer industries. It has also diversified its investment portfolio into unbranded venture capital, real estate and a range of ESG investments.", image: "/gallery/GCM.png" },
        // { title: "Mr. Salahuddin Sharafi", text: "Mr. Salahuddin Sharafi has been CEO of Virgin Group since 2011. He has led the development of the Group’s strategy, with significant emphasis on the Virgin brand. Under Josh’s leadership, the Group has started and grown new businesses in a range of consumer industries. It has also diversified its investment portfolio into unbranded venture capital, real estate and a range of ESG investments.", image: "/gallery/chairmanphoto.jpg" },
        // { title: "Mr. Shabbir Haideri", text: "Mr. Shabbir Haideri has been CEO of Virgin Group since 2011. He has led the development of the Group’s strategy, with significant emphasis on the Virgin brand. Under Josh’s leadership, the Group has started and grown new businesses in a range of consumer industries. It has also diversified its investment portfolio into unbranded venture capital, real estate and a range of ESG investments.", image: "/gallery/GCM.png" },
        // { title: "Mr. Salahuddin Sharafi", text: "Mr. Salahuddin Sharafi has been CEO of Virgin Group since 2011. He has led the development of the Group’s strategy, with significant emphasis on the Virgin brand. Under Josh’s leadership, the Group has started and grown new businesses in a range of consumer industries. It has also diversified its investment portfolio into unbranded venture capital, real estate and a range of ESG investments.", image: "/gallery/chairmanphoto.jpg" },
        // { title: "Mr. Shabbir Haideri", text: "Mr. Shabbir Haideri has been CEO of Virgin Group since 2011. He has led the development of the Group’s strategy, with significant emphasis on the Virgin brand. Under Josh’s leadership, the Group has started and grown new businesses in a range of consumer industries. It has also diversified its investment portfolio into unbranded venture capital, real estate and a range of ESG investments.", image: "/gallery/GCM.png" },
        // { title: "Mr. Salahuddin Sharafi", text: "Mr. Salahuddin Sharafi has been CEO of Virgin Group since 2011. He has led the development of the Group’s strategy, with significant emphasis on the Virgin brand. Under Josh’s leadership, the Group has started and grown new businesses in a range of consumer industries. It has also diversified its investment portfolio into unbranded venture capital, real estate and a range of ESG investments.", image: "/gallery/chairmanphoto.jpg" },
        // { title: "Mr. Shabbir Haideri", text: "Mr. Shabbir Haideri has been CEO of Virgin Group since 2011. He has led the development of the Group’s strategy, with significant emphasis on the Virgin brand. Under Josh’s leadership, the Group has started and grown new businesses in a range of consumer industries. It has also diversified its investment portfolio into unbranded venture capital, real estate and a range of ESG investments.", image: "/gallery/GCM.png" },
    ];
    return (
        <main className='pt-30 pb-10'>
            <AnimatedLines />
            <h1 className='text-center uppercase text-4xl lg:text-6xl font-bold pt-3'>
                <span className='text-black'>
                    Senior Leaders
                </span>
                <span className='text-red-800'>
                    .
                </span>
            </h1>
            <p className='max-w-2xl mx-auto text-xl mt-8 lg:mt-12 mb-12 lg:mb-20 text-justify px-5'>Our senior team has many years collective investment and operational experience at MAHY. Meet the team here.</p>
            <VerticalLine />
            {items.map((item, i) => (
                <Director key={i} item={item} index={i} />
            ))}
        </main>
    )
};

const Director = ({ item, index }) => {
    const isOdd = index % 2 !== 0;
    return (
        <div className={`relative ${isOdd ? "pt-27 pb-40 lg:py-60" : "pt-5 pb-10 lg:py-30"} `}>
            {isOdd && (
                <>
                    <div
                        className="absolute inset-0 bottom-10 bg-[#e3eaee]"
                        style={{ clipPath: 'polygon(0 15%, 100% 0, 100% 85%, 0 100%)' }}
                    />
                    <VerticalLine classes={"absolute top-9 lg:top-4 left-0 right-0"} />
                    <VerticalLine classes={"absolute bottom-20 lg:bottom-13 left-0 right-0"} />
                </>
            )}
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10 ${isOdd ? 'flex-row-reverse' : ''} flex md:grid`}>
                {/* Image Column */}
                <div className={`flex justify-center items-center h-full w-full ${isOdd ? 'md:order-last' : ''}`}>
                    <div className="relative h-65 w-65 md:h-100 md:w-100 rounded-full overflow-hidden">
                        <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover" }} />
                    </div>
                </div>
                {/* Text Column */}
                <div className='flex flex-col justify-center items-center h-full w-full'>
                    <div className='max-w-md mx-auto px-5'>
                        <h2 className='font-semibold text-xl lg:text-3xl text-center'>{item.title}</h2>
                        <p className='text-gray-800 leading-7 mt-5 lg:mt-6 text-justify'>{item.text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const VerticalLine = ({ classes }) => (
    <div className={`${classes} flex justify-center`}>
        <div className='h-12 lg:h-24 w-0.5 bg-[#2da5dc]' />
    </div>
)

export default DirectorsPage