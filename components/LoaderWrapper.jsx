"use client";

import { useState, useEffect } from "react";
import FullScreenLoader from "./FullScreenLoader";

export default function LoaderWrapper({ children }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => setLoading(false);

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
        }

        return () => window.removeEventListener("load", handleLoad);
    }, []);

    return (
        <>
            {loading && <FullScreenLoader />}
            {children}
        </>
    );
}