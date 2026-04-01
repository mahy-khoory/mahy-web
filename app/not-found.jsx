"use client";

import { HomeIcon } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="fixed inset-0 z-50 bg-black text-white flex items-center justify-center px-6">

            {/* subtle gradient glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_60%)]" />

            <div className="relative text-center max-w-xl">

                {/* 404 */}
                <h1 className="text-[40px] md:text-[60px] font-semibold tracking-tight bg-linear-to-b from-white to-white/40 bg-clip-text text-transparent">
                    Page not found
                </h1>

                {/* Divider */}
                <div className="mx-auto my-6 h-px w-24 bg-linear-to-r from-transparent via-white/40 to-transparent" />

                {/* Text */}
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                    The page you’re looking for doesn’t exist or has been moved.
                </p>

                {/* Button */}
                <div className="mt-8 flex justify-center">
                    <Link
                        href="/"
                        className="group cursor-pointer relative inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium transition-all duration-300 hover:bg-white hover:text-black"
                    >
                        <HomeIcon />
                        <span className="transition-transform duration-300 group-hover:translate-x-px">
                            Back to Home</span>
                        {/* glow */}
                        <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 bg-white/10 blur-md" />
                    </Link>
                </div>
            </div>
        </div>
    );
}