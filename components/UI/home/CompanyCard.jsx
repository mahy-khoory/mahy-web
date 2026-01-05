import { useRef } from "react";

function CompanyCard({ item }) {
    const videoRef = useRef(null);

    const play = () => {
        const v = videoRef.current;
        if (v && v.paused) v.play().catch(() => { });
    };

    const pause = () => {
        const v = videoRef.current;
        if (v && !v.paused) {
            v.pause();
            v.currentTime = 0;
        }
    };

    const toggle = () => {
        const v = videoRef.current;
        if (!v) return;
        v.paused ? play() : pause();
    };

    return (
        <div
            className="relative h-60 md:h-45 group overflow-hidden"
            onMouseEnter={play}
            onMouseLeave={pause}
            onTouchEnd={toggle}
        >
            <div className="absolute inset-0 transition-all duration-500 ease-out group-hover:scale-[1.3]">
                <video
                    ref={videoRef}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={item.poster}
                    className="absolute inset-0 w-full h-full object-cover"
                    onLoadedData={() => {
                        const v = videoRef.current;
                        if (v) v.currentTime = 0.01;
                    }
                    }
                >
                    <source src={item.video} type="video/mp4" />
                </video>
            </div>
            <div className="absolute inset-0 z-10 bg-linear-to-t from-black/30 to-transparent">
                <div className="absolute bottom-4 left-0 right-0">
                    <div className="flex justify-between gap-3 px-4">
                        <p className="text-gray-50 text-sm">{item.label}</p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default CompanyCard;