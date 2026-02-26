"use client";

import { useEffect, useState } from "react";

export default function FullScreenLoader({ onFinish }) {
    const [progress, setProgress] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const messages = [
        "Preparing experience...",
        "Loading content...",
        "Optimizing performance...",
        "Almost ready...",
        "Finalizing setup...",
        "Securing data...",
        "Rendering interface...",
        "Syncing resources...",
        "Applying enhancements...",
        "Launching..."
    ];

    useEffect(() => {
        const duration = 10000; // 10 seconds
        const intervalTime = 100; // update every 100ms
        const step = 100 / (duration / intervalTime);

        const interval = setInterval(() => {
            setProgress((prev) => {
                const next = prev + step;
                return next >= 100 ? 100 : next;
            });
        }, intervalTime);

        const secondInterval = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);

        const timeout = setTimeout(() => {
            if (onFinish) onFinish();
        }, duration);

        return () => {
            clearInterval(interval);
            clearInterval(secondInterval);
            clearTimeout(timeout);
        };
    }, [onFinish]);

    return (
        <div className="fixed inset-0 bg-black flex flex-col items-center justify-center text-white z-40 px-6">

            {/* Progress Bar Container */}
            <div className="w-full max-w-md h-2 bg-white/20 rounded-full overflow-hidden mb-6">
                <div
                    className="h-full bg-white transition-all duration-100 ease-linear"
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/* Changing text */}
            <p className="text-sm opacity-80 text-center">
                {messages[seconds % messages.length]}
            </p>
        </div>
    );
}