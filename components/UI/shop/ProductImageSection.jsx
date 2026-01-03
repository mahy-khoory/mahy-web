import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react";

function ProductImageSection({ images, alt, locale }) {
    const [imageIndex, setImageIndex] = useState(0);

    const handlePrev = () => { setImageIndex(imageIndex === 0 ? images.length - 1 : imageIndex - 1); };
    const handleNext = () => { setImageIndex(imageIndex === images.length - 1 ? 0 : imageIndex + 1); };

    const isMultiple = images.length > 1;

    return (
        <div>
            <div className="relative h-[50vh] lg:h-140 overflow-hidden rounded-xl bg-black/5">
                <Image src={images[imageIndex]} alt={alt} fill className="object-cover" />
                {isMultiple && (
                    <div className="absolute inset-0 flex items-center justify-between px-3 pt-2 opacity-70 transition-all duration-300 hover:opacity-100">
                        <button onClick={handlePrev} className="rounded-full bg-gray-50 p-2 shadow-lg">
                            {locale === "ar"
                                ? (
                                    <ChevronRight size={18} />
                                ) : (
                                    <ChevronLeft size={18} />)
                            }
                        </button>
                        <button onClick={handleNext} className="rounded-full bg-gray-50 p-2 shadow-lg">
                            {locale === "ar"
                                ? (
                                    <ChevronLeft size={18} />
                                ) : (
                                    <ChevronRight size={18} />)
                            }
                        </button>
                    </div>
                )}
            </div>
            {isMultiple && (
                <div className="mt-6 flex-wrap gap-3 flex px-5 lg:px-0">
                    {images.map((image, i) => (
                        <button className="flex-none" key={i} onClick={() => setImageIndex(i)}>
                            <Image src={image} alt={alt} width={60} height={60}
                                className={`rounded-xl bg-gray-200 object-cover ${imageIndex === i ? "outline-2 outline-gray-700" : "opacity-70"}`} />
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default ProductImageSection