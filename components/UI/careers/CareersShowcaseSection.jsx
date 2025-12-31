"use client";

import Image from "next/image";
import AnimatedLines from "../AnimatedLines";

export default function CareersShowcaseSection({
  title,
  imageUrl,
  imageAlt = "",
}) {
  return (
    <section className="w-full bg-white py-20 sm:py-24 lg:py-28 overflow-x-hidden">
      <div className="mx-auto w-full max-w-screen-xl px-6 sm:px-8 lg:px-12 overflow-x-hidden">

        <div className="text-center">
          <AnimatedLines />
          <h2
            className="
              text-[28px]
              sm:text-[34px]
              lg:text-[40px]
              font-semibold
              tracking-tight
              text-slate-900
            "
          >
            {title}
          </h2>
        </div>

        <div className="mt-7 sm:mt-16 lg:mt-16">
          <div
            className="
              relative
              w-full
              overflow-hidden
                  shadow-[0_20px_60px_rgba(0,0,0,0.12)]
            "
          >
            <div className="relative w-full aspect-[21/9] overflow-hidden">
              <Image
                src={imageUrl}
                alt={imageAlt || title}
                fill
                priority
                sizes="
                  (max-width: 640px) 100vw,
                  (max-width: 1024px) 90vw,
                  80vw
                "
                className="object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
