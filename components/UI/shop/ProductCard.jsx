"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProductCard({ title, category, image, models, price, href, modelHeading, modelsHeading, currency, buy }) {
  const [selectedModel, setSelectedModel] = useState(0);

  return (
    <div className="relative rounded-3xl bg-gray-50 px-6 pt-10 pb-8 hover:bg-gray-100 duration-500 transition-all h-full flex flex-col justify-between">
      <div>
        <span className="text-gray-600 text-sm">{category}</span>
        <div className="relative mt-6 h-50 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain"
            priority
          />
        </div>
        <h3 className="font-medium text-gray-700 mt-8">{title}</h3>
        {models && (
          <>
            <p className="mt-4 text-sm text-gray-500 font-medium uppercase">{models.length > 1 ? modelsHeading : modelHeading}</p>
            <div className="flex gap-1 flex-wrap mt-2">
              {models.map((model, i) => (
                <button onClick={() => setSelectedModel(i)} key={i} className={`py-1 px-3 text-sm rounded-2xl border-base ${i === selectedModel ? "b-base text-white" : "t-base"}`}>{model}</button>
              ))}
            </div>
          </>
        )}
      </div>
      <div>
        <p className="font-medium mt-6 text-lg">{price} {currency}</p>
        <Link href={`${href}?model=${selectedModel}`}>
          <button className="py-2 w-full b-base text-white text-center rounded-2xl mt-4 text-sm">{buy}</button>
        </Link>
      </div>
    </div>
  );
}