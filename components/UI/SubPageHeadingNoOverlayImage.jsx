"use client";

import Image from "next/image";
import clsx from "clsx";

export default function SubPageHeadingNoOverlayImage({
  image,
  image2,
  height = "h-[100vh]",
}) {
  return (
    <section
      className={clsx(
        "relative w-full overflow-hidden flex flex-col",
        height
      )}>
      <div className="relative h-16.25">
        <Image
          src={image2}
          alt={"bg"}
          fill
          className="object-cover"
        />
      </div>
      <div className="relative flex-1">
        <Image
          src={image}
          alt={"hi"}
          fill
          priority
          className="object-cover object-top"
        />
      </div>
    </section>
  );
}
