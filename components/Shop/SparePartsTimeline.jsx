"use client";

function SparePartsTimeline({ items }) {
  return (
    <div className="bg-gray-50 w-full py-16 md:py-24">
      <div className="flex flex-col items-center max-w-7xl mx-auto px-5">
        <h2 className="font-medium uppercase text-sm tracking-wider">
          What we did
        </h2>

        <p className="font-semibold text-3xl md:text-4xl max-w-lg text-center mt-3">
          Recognitions & milestones
        </p>

        <Mobile items={items} />
        <Desktop items={items} />
      </div>
    </div>
  );
}

const Mobile = ({ items }) => (
  <div className="md:hidden space-y-16 mt-12">
    {items.map((item, i) => (
      <div key={i} className="flex flex-col items-center text-center">
        <Year item={item} />
        <Circle />
        <TitleAndText item={item} />
      </div>
    ))}
  </div>
);

const Desktop = ({ items }) => (
  <div className="relative w-full hidden md:block mt-24">
    <div className="absolute top-1/2 left-0 w-full h-px bg-gray-400 -translate-y-1/2" />

    <div className="grid grid-cols-4 gap-10">
      {items.map((item, i) => {
        const isTop = i % 2 === 0;

        return (
          <div key={i} className="relative flex justify-center">
            <div className="absolute top-1/2 w-px h-20 bg-gray-300 -translate-y-1/2" />

            <div
              className={`flex flex-col items-center text-center ${
                isTop ? "pb-32" : "pt-32 flex-col-reverse"
              }`}
            >
              <TitleAndText item={item} />

              <Circle />

              <Year item={item} />
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

const Year = ({ item }) => (
  <span className="text-xl font-semibold">{item.year}</span>
);

const Circle = () => (
  <div className="relative flex items-center justify-center my-4">
    <div className="absolute w-8 h-8 rounded-full bg-blue-200 opacity-50" />
    <div className="relative w-5 h-5 bg-slate-900 rounded-full z-10" />
  </div>
);

const TitleAndText = ({ item }) => (
  <div className="max-w-xs">
    <h3 className="text-lg font-semibold">{item.title}</h3>
    <p className="mt-2 text-gray-600 text-sm leading-relaxed">{item.text}</p>
  </div>
);

export default SparePartsTimeline;

// function SparePartsTimeline({items}) {

//     return (
//         <div className="bg-gray-50 md:h-screen w-full pt-13 pb-18 md:py-20">
//             <div className="flex flex-col items-center max-w-7xl mx-auto px-5">
//                 <h2 className="font-medium uppercase t-base">What we did</h2>
//                 <p className="font-semibold text-3xl md:text-4xl max-w-lg text-center mt-2 md:mt-4">Recognitions & milestones</p>
//                 <Mobile items={items} />
//                 <Desktop items={items} />
//             </div>
//         </div>
//     )
// };

// const Mobile = ({ items }) => (
//     <div className="md:hidden space-y-16 mt-16">
//         {items.map((item, i) => (
//             <div key={i} className="flex flex-col items-center gap-6">
//                 <Year item={item} />
//                 <Circle />
//                 <TitleAndText item={item} />
//             </div>
//         ))}
//     </div>
// )

// const Desktop = ({ items }) => (
//     <div className="relative w-full hidden md:block mt-70">
//         <div className="w-full h-px bg-gray-700"></div>
//         <div className="absolute inset-0 grid grid-cols-4 gap-10">
//             {items.map((item, i) =>
//             (i % 2 === 0 ? (
//                 <div key={i} className="flex flex-col items-center gap-8 -translate-y-19">
//                     <Year item={item} />
//                     <Circle />
//                     <TitleAndText item={item} />
//                 </div>
//             ) : (
//                 <div key={i} className="flex flex-col items-center gap-8 -translate-y-39">
//                     <TitleAndText item={item} />
//                     <Circle />
//                     <Year item={item} />
//                 </div>
//             )))}
//         </div>
//     </div>
// )

// const Year = ({ item }) => (
//     <span className="text-2xl font-semibold">{item.year}</span>
// );

// const Circle = () => (
//     <div className="relative flex items-center justify-center">
//         <div className="absolute size-7 rounded-full bg-blue-300 animate-ping" />
//         <div className="relative size-6 b-base rounded-full" />
//     </div>
// );

// const TitleAndText = ({ item }) => (
//     <div className="text-center">
//         <h3 className="text-xl font-semibold">{item.title}</h3>
//         <p className="mt-3 text-gray-700">{item.text}</p>
//     </div>
// )

// export default SparePartsTimeline
