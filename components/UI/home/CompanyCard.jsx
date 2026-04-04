import Image from "next/image";
import { forwardRef, useEffect, useRef, useState } from "react";

const CompanyCard = forwardRef(({ item, index, shouldPlay }, ref) => {
    const videoRef = useRef(null);
    const [play, setPlay] = useState(false);
    const [manualOverride, setManualOverride] = useState(false);

    // 🔁 Sync only if user hasn't manually touched
    useEffect(() => {
        if (!manualOverride) {
            setPlay(shouldPlay);
        }
    }, [shouldPlay, manualOverride]);

    // 🎥 Control video
    useEffect(() => {
        if (!videoRef.current) return;

        if (play) {
            videoRef.current.play().catch(() => { });
        } else {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    }, [play]);

    // 👆 Handle touch toggle
    const handleTouch = () => {
        setManualOverride(true);
        setPlay(prev => !prev);
    };

    return (
        <div
            ref={ref}
            className={`relative ${index === 0 ? "lg:row-span-2 lg:col-span-2 h-80 md:h-auto" : "h-80 md:h-40"} group overflow-hidden`}
            onMouseEnter={() => setPlay(true)}
            onMouseLeave={() => setPlay(false)}
            onTouchEnd={handleTouch}
        >
            <div className="absolute inset-0">
                <Image src={item.image} alt={item.label} fill objectFit="cover" />

                <video
                    ref={videoRef}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${play ? "opacity-100" : "opacity-0"}`}
                >
                    <source src={item.video} type="video/mp4" />
                </video>
            </div>

            <div className="absolute inset-0 z-10 bg-linear-to-t from-black/30 to-transparent">
                <div className={`absolute bottom-5 left-0 right-0 ${play ? "translate-y-0" : "translate-y-5"} transition-all duration-300`}>
                    <div className='flex justify-between gap-3 px-3'>
                        <p className='md:text-sm font-medium text-gray-50'>{item.label}</p>
                    </div>
                    <div className='h-px w-full bg-white mt-2 -translate-x-120 group-hover:translate-x-0 transition-all duration-500' />
                </div>
            </div>
        </div>
    );
});

export default CompanyCard;