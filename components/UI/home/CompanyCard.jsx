import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function CompanyCard({ item, index, shouldPlay = false, onHoverStart, onHoverEnd }) {
    // const videoRef = useRef(null);
    // useEffect(() => {
    //     const videoElement = videoRef.current;
    //     if (!videoElement) return;

    //     if (shouldPlay) {
    //         const playPromise = videoElement.play();
    //         if (playPromise?.catch) {
    //             playPromise.catch(() => { });
    //         }
    //     } else {
    //         videoElement.pause();
    //         videoElement.currentTime = 0;
    //     }
    // }, [shouldPlay]);

    // const handleMouseEnter = () => {
    //     if (onHoverStart) {
    //         onHoverStart();
    //     }
    // };

    // const handleMouseLeave = () => {
    //     if (onHoverEnd) {
    //         onHoverEnd();
    //     }
    // };

    const [play, setPlay] = useState(false);

    return (
        <div className={`relative ${index === 0 ? "lg:row-span-2 lg:col-span-2 h-auto" : "h-80 md:h-40"} group overflow-hidden`}
            onMouseEnter={() => setPlay(true)} onMouseLeave={() => setPlay(false)} onTouchEnd={() => (setPlay(!play))}>
            <div className="absolute inset-0 transition-all duration-500 ease-out group-hover:scale-[1.3]">
                <Image src={item.image} alt={item.label} fill objectFit="cover" />
                {play && (
                    <video
                        muted
                        loop
                        playsInline
                        autoPlay
                        preload="metadata"
                        className="absolute inset-0 w-full h-full object-cover"
                    >
                        <source src={item.video} type="video/mp4" />
                    </video>
                )}
            </div>
            <div className="absolute inset-0 z-10 bg-linear-to-t from-black/30 to-transparent">
                <div className={`absolute bottom-5 left-0 right-0 ${play ? "translate-y-0" : "translate-y-5"} transition-all duration-300`}>
                    <div className='flex justify-between gap-3 px-3'>
                        <p className='md:text-sm font-medium text-gray-50'>{item.label}</p>
                    </div>
                    <div className='h-px w-full bg-white mt-2 -translate-x-120 group-hover:translate-x-0 transition-all duration-500' />
                </div>
            </div>
        </div >
    )
}

export default CompanyCard




// function CompanyCard({ item }) {
//     return (
//         <div className="relative h-60 md:h-45 group overflow-hidden">
//             <div className="absolute inset-0 transition-all duration-500 ease-out group-hover:scale-[1.3]">
//                 <video muted loop playsInline autoPlay className="absolute inset-0 w-full h-full object-cover">
//                     <source src={item.video} type="video/mp4" />
//                 </video>
//             </div>
//             <div className="absolute inset-0 z-10 bg-linear-to-t from-black/30 to-transparent">
//                 <div className='absolute bottom-5 left-0 right-0'>
//                     <div className='flex justify-between gap-3 px-7'>
//                         <p className='text-gray-50'>{item.label}</p>
//                     </div>
//                     <div className='h-px w-full bg-white mt-3 -translate-x-120 group-hover:translate-x-0 transition-all duration-500' />
//                 </div>
//             </div>
//         </div >
//     )
// }

// export default CompanyCard
