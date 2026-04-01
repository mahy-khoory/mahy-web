"use client";

import Image from "next/image";

export default function SubPageHeadingNoOverlayImage({
  image,
  image2,
  height = "h-auto 2xl:h-screen"
}) {
  return (
    <section className="relative w-full overflow-hidden flex flex-col">
      <div className="relative h-16.25">
        <Image
          src={image2}
          alt="bg"
          fill
          className="object-cover"
        />
      </div>

      <Image
        src={image}
        alt="hi"
        sizes="100vw"
        width={0}
        height={0}
        className="w-full h-auto object-cover object-top 2xl:h-screen"
      />
    </section>
  );
}
