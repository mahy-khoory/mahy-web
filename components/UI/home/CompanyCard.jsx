import { useEffect, useRef } from "react";

function CompanyCard({ item, shouldPlay = false, onHoverStart, onHoverEnd }) {
    const videoRef = useRef(null);
    useEffect(() => {
        const videoElement = videoRef.current;
        if (!videoElement) return;

        if (shouldPlay) {
            const playPromise = videoElement.play();
            if (playPromise?.catch) {
                playPromise.catch(() => { });
            }
        } else {
            videoElement.pause();
            videoElement.currentTime = 0;
        }
    }, [shouldPlay]);

    const handleMouseEnter = () => {
        if (onHoverStart) {
            onHoverStart();
        }
    };

    const handleMouseLeave = () => {
        if (onHoverEnd) {
            onHoverEnd();
        }
    };

    return (
        <div className="relative h-60 md:h-45 group overflow-hidden" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="absolute inset-0 transition-all duration-500 ease-out group-hover:scale-[1.3]">
                <video
                    ref={videoRef}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src={item.video} type="video/mp4" />
                </video>
            </div>
            <div className="absolute inset-0 z-10 bg-linear-to-t from-black/30 to-transparent">
                <div className='absolute bottom-5 left-0 right-0'>
                    <div className='flex justify-between gap-3 px-7'>
                        <p className='text-gray-50'>{item.label}</p>
                    </div>
                    <div className='h-px w-full bg-white mt-3 -translate-x-120 group-hover:translate-x-0 transition-all duration-500' />
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
