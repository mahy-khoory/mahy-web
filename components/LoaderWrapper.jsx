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

  const hiddenStyles = loading
    ? { visibility: "hidden", pointerEvents: "none" }
    : undefined;

  return (
    <>
      {loading && <FullScreenLoader />}
      <div
        aria-hidden={loading}
        className={`transition-opacity duration-300 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
        style={hiddenStyles}
      >
        {children}
      </div>
    </>
  );
}
